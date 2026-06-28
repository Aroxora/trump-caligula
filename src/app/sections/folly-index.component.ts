import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FollyService } from '../core/folly.service';
import { track } from '../core/firebase';
import { CriterionId, Domain, Provenance } from '../data/models';
import { PRESETS } from '../data/glossary';
import { InlineCiteComponent } from '../shared/inline-cite.component';
import { MethodologyComponent } from './methodology.component';
import { RadarAxis, RadarComponent, RadarSeries } from '../viz/radar.component';
import { ScatterComponent, ScatterPoint } from '../viz/scatter.component';

@Component({
  selector: 'app-folly-index',
  standalone: true,
  imports: [
    InlineCiteComponent,
    MethodologyComponent,
    DecimalPipe,
    RadarComponent,
    ScatterComponent,
  ],
  templateUrl: './folly-index.component.html',
  styleUrl: './folly-index.component.scss',
})
export class FollyIndexComponent {
  readonly svc = inject(FollyService);
  readonly criteria = this.svc.criteria;
  readonly presets = PRESETS;
  readonly weights = this.svc.weights;
  readonly scored = this.svc.scored;
  readonly aggregate = this.svc.aggregate;

  readonly open = signal<string | null>(null);
  readonly domainFilter = signal<string>('all');

  readonly domains = computed<(Domain | 'all')[]>(() => [
    'all',
    ...new Set(this.svc.follies.map((f) => f.domain)),
  ]);

  readonly visible = computed(() => {
    const d = this.domainFilter();
    return this.scored().filter((f) => d === 'all' || f.domain === d);
  });

  /** Normalised weight share for the live formula display. */
  readonly shares = computed(() => {
    const w = this.weights();
    const total = this.criteria.reduce((a, c) => a + w[c.id], 0) || 1;
    return Object.fromEntries(this.criteria.map((c) => [c.id, w[c.id] / total])) as Record<
      CriterionId,
      number
    >;
  });

  /** Verdict text keyed to the aggregate, answering the article's closing question. */
  readonly verdict = computed(() => {
    const { mean, systemic } = this.aggregate();
    const band = mean >= 70 ? 'severe' : mean >= 50 ? 'serious' : mean >= 30 ? 'moderate' : 'mild';
    const nature =
      systemic >= 70
        ? 'The high systemic score warns these follies are enabled by a wider group and may outlast any one presidency — Tuchman\'s "decadence", the hardest kind to reverse.'
        : systemic >= 50
          ? "The mixed systemic score leaves the article's question open: partly personal, partly entrenched."
          : 'The low systemic score suggests these are largely personal to the Trump era — the kind the article hopes "an election or two" can reverse.';
    return { band, nature };
  });

  // ---- Visualization inputs -------------------------------------------------
  readonly radarAxes = computed<RadarAxis[]>(() =>
    this.criteria.map((c) => ({ label: c.name, symbol: c.symbol })),
  );

  /** The mean profile across all follies, drawn as a faint reference shape. */
  readonly meanSeries = computed<RadarSeries>(() => {
    const all = this.svc.follies;
    const values = this.criteria.map(
      (c) => all.reduce((a, f) => a + f.scores[c.id], 0) / all.length,
    );
    return { name: 'corpus average', color: '#8a7e6d', values, fill: false };
  });

  radarFor(id: string): RadarSeries[] {
    const f = this.svc.follies.find((x) => x.id === id);
    if (!f) {
      console.warn('[folly-index] no folly found for id:', id);
      return [this.meanSeries()];
    }
    return [
      this.meanSeries(),
      { name: f.title, color: '#5b2a6b', values: this.criteria.map((c) => f.scores[c.id]) },
    ];
  }

  /** The folly map: self-harm (x) against systemic (y), sized by MFI. Trump
   * follies plus Tuchman calibration points and Caligula's own acts, all on one map. */
  readonly showRefs = signal(true);
  readonly scatter = computed<ScatterPoint[]>(() => {
    const trump = this.scored().map((f) => ({
      id: f.id,
      label: f.title,
      x: (f.scores.selfHarm / 5) * 100,
      y: (f.scores.systemic / 5) * 100,
      weight: f.mfi,
      band: this.band(f.mfi) as ScatterPoint['band'],
      kind: 'trump' as const,
    }));
    if (!this.showRefs()) return trump;
    const refs = this.svc.refScored().map((r) => ({
      id: r.id,
      label: r.title,
      x: (r.scores.selfHarm / 5) * 100,
      y: (r.scores.systemic / 5) * 100,
      weight: r.mfi,
      band: this.band(r.mfi) as ScatterPoint['band'],
      kind: r.kind,
    }));
    return [...trump, ...refs];
  });

  /** Tuchman's four canonical follies, for the calibration strip. */
  readonly tuchmanRefs = computed(() => this.svc.refScored().filter((r) => r.kind === 'tuchman'));

  readonly DOMAIN_LABELS: Record<Domain | 'all', string> = {
    all: 'all domains',
    'foreign-policy': 'Foreign policy',
    'economy-trade': 'Economy & trade',
    'institutions-rule-of-law': 'Institutions',
    military: 'Military',
    'technology-science': 'Technology & science',
    'public-health': 'Public health',
    'environment-climate': 'Climate',
    immigration: 'Immigration',
    'information-media': 'Media & image',
    'elections-democracy': 'Elections & democracy',
  };
  domainLabel(d: Domain | 'all'): string {
    return this.DOMAIN_LABELS[d] ?? d;
  }

  // ---- Trust dial ----
  readonly included = this.svc.included;
  readonly confidenceWeighted = this.svc.confidenceWeighted;
  readonly provenances = this.svc.provenances;
  toggleProvenance(p: Provenance): void {
    this.svc.toggleProvenance(p);
    track('trust_filter', { provenance: p });
  }
  toggleConfidence(): void {
    this.svc.setConfidenceWeighted(!this.confidenceWeighted());
    track('confidence_weight', { on: this.confidenceWeighted() });
  }

  openFromMap(id: string): void {
    if (!this.svc.follies.some((f) => f.id === id)) return; // reference markers aren't cards
    this.domainFilter.set('all');
    this.open.set(id);
    track('map_select', { folly: id });
    queueMicrotask(() =>
      document
        .getElementById('folly-' + id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    );
  }

  onWeight(id: CriterionId, ev: Event): void {
    this.svc.setWeight(id, Number((ev.target as HTMLInputElement).value));
  }

  applyPreset(weights: Record<CriterionId, number>, name: string): void {
    (Object.keys(weights) as CriterionId[]).forEach((k) => this.svc.setWeight(k, weights[k]));
    track('preset', { name });
  }

  toggle(id: string): void {
    this.open.update((cur) => (cur === id ? null : id));
    if (this.open() === id) track('folly_open', { folly: id });
  }

  band(mfi: number): string {
    return mfi >= 70 ? 'severe' : mfi >= 50 ? 'serious' : mfi >= 30 ? 'moderate' : 'mild';
  }

  /** SVG arc dash for the aggregate gauge (semicircle, circumference ≈ π·r). */
  gaugeDash(value: number): string {
    const c = Math.PI * 90; // r = 90
    const filled = (value / 100) * c;
    return `${filled} ${c}`;
  }
}
