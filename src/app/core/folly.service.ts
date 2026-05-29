import { Injectable, computed, signal } from '@angular/core';
import { CRITERIA, DISCONFIRMERS, FOLLIES, REF_ITEMS } from '../data/methodology';
import { CriterionId, Folly, Provenance, RefItem } from '../data/models';
import { SOURCE_MAP } from '../data/sources';

export interface ScoredFolly extends Folly {
  mfi: number; // 0–100 March of Folly Index under current weights
  baseMfi: number; // without confidence weighting
}
export interface ScoredRef extends RefItem {
  mfi: number;
}

const ALL_PROVENANCE: Provenance[] = ['documented', 'reported', 'speculative'];

@Injectable({ providedIn: 'root' })
export class FollyService {
  readonly criteria = CRITERIA;
  /** Follies with their falsification prompt attached. */
  readonly follies: Folly[] = FOLLIES.map((f) => ({ ...f, disconfirmer: f.disconfirmer ?? DISCONFIRMERS[f.id] }));
  readonly refItems = REF_ITEMS;

  // ---- Reader-adjustable weights ----
  private readonly weightState = signal<Record<CriterionId, number>>(
    Object.fromEntries(CRITERIA.map((c) => [c.id, c.defaultWeight])) as Record<CriterionId, number>,
  );
  readonly weights = this.weightState.asReadonly();

  // ---- Trust dial ----
  private readonly includedState = signal<Record<Provenance, boolean>>({
    documented: true,
    reported: true,
    speculative: true,
  });
  readonly included = this.includedState.asReadonly();
  private readonly confWeightedState = signal(false);
  readonly confidenceWeighted = this.confWeightedState.asReadonly();

  setWeight(id: CriterionId, value: number): void {
    this.weightState.update((w) => ({ ...w, [id]: value }));
  }
  resetWeights(): void {
    this.weightState.set(
      Object.fromEntries(CRITERIA.map((c) => [c.id, c.defaultWeight])) as Record<CriterionId, number>,
    );
  }
  toggleProvenance(p: Provenance): void {
    this.includedState.update((s) => ({ ...s, [p]: !s[p] }));
  }
  setConfidenceWeighted(v: boolean): void {
    this.confWeightedState.set(v);
  }

  // ---- Scoring ----
  score(folly: Folly, weights = this.weightState()): number {
    return this.scoreRaw(folly.scores, weights);
  }
  scoreRaw(scores: Record<CriterionId, number>, weights = this.weightState()): number {
    const wSum = CRITERIA.reduce((acc, c) => acc + weights[c.id], 0) || 1;
    const weighted = CRITERIA.reduce((acc, c) => acc + weights[c.id] * scores[c.id], 0);
    return Math.round((100 * weighted) / (5 * wSum));
  }

  /** Follies passing the provenance filter, scored & sorted high-to-low. */
  readonly scored = computed<ScoredFolly[]>(() => {
    const w = this.weightState();
    const inc = this.includedState();
    const conf = this.confWeightedState();
    return this.follies
      .filter((f) => inc[f.provenance])
      .map((f) => {
        const baseMfi = this.scoreRaw(f.scores, w);
        const mfi = conf ? Math.round(baseMfi * (f.confidence ?? 1)) : baseMfi;
        return { ...f, mfi, baseMfi };
      })
      .sort((a, b) => b.mfi - a.mfi);
  });

  /** Reference items (Tuchman cases + Caligula acts), scored under current weights. */
  readonly refScored = computed<ScoredRef[]>(() => {
    const w = this.weightState();
    return this.refItems.map((r) => ({ ...r, mfi: this.scoreRaw(r.scores, w) }));
  });

  /** Aggregate over the currently-included follies — the article's question, numeric. */
  readonly aggregate = computed(() => {
    const list = this.scored();
    const mean = Math.round(list.reduce((a, f) => a + f.mfi, 0) / (list.length || 1));
    const systemicMean = list.length
      ? list.reduce((a, f) => a + f.scores.systemic, 0) / list.length
      : 0;
    const systemic = Math.round((systemicMean / 5) * 100);
    return { mean, systemic, count: list.length, total: this.follies.length };
  });

  provenances = ALL_PROVENANCE;
  source(key: string) {
    return SOURCE_MAP[key];
  }
}
