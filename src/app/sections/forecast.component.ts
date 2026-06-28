import { Component, computed, signal } from '@angular/core';
import { track } from '../core/firebase';
import { Domain } from '../data/models';
import {
  FORECAST_EPISTEMIC,
  FORECAST_FISCAL_CAPSTONE,
  FORECAST_LEDE,
  FORECAST_PROJECTIONS,
  ForecastProbability,
  ForecastProjection,
  PROBABILITY_META,
} from '../data/forecast';
import { InlineCiteComponent } from '../shared/inline-cite.component';

interface WindowGroup {
  window: string;
  windowSort: number;
  items: ForecastProjection[];
}

/**
 * "The Caligula Window" — a forward-looking forecast section that projects the
 * march of folly across the ~900 days left in the term. Mirrors the Beijing
 * section's structure (lede → callout → panels → cards) and the site's ethos:
 * every projection is the lowest evidentiary grade, carries a probability band
 * and a falsification prompt, and is grounded in a documented trajectory rather
 * than asserted as fact.
 */
@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="fc">
      <header class="fc__head">
        <p class="eyebrow"><span aria-hidden="true">⧗</span> The Caligula Window · ~900-day forecast</p>
        <h2>The follies still to come</h2>
        <p class="lede">{{ lede }}</p>
      </header>

      <aside class="fc__note" role="note">
        <p class="fc__note-lead">How to read this</p>
        <p>{{ epistemic }}</p>
        <ul class="fc__legend">
          @for (b of bands; track b.key) {
            <li>
              <span class="prob" [class]="'prob--' + b.key">{{ b.label }}</span>
              <span class="fc__legend-meaning">{{ b.meaning }}</span>
            </li>
          }
        </ul>
      </aside>

      <div class="fc__panel fc__panel--fiscal">
        <h3>The fiscal hinge — are we Rome?</h3>
        <p>{{ fiscalCapstone }}</p>
      </div>

      @for (g of groups(); track g.windowSort) {
        <section class="fc__window">
          <header class="fc__window-head">
            <h3>{{ g.window }}</h3>
            <span class="fc__window-count">{{ g.items.length }} projected</span>
          </header>

          <div class="fc__cards">
            @for (p of g.items; track p.id) {
              <article class="proj" [class.proj--open]="open() === p.id">
                <button
                  class="proj__top"
                  [attr.aria-expanded]="open() === p.id"
                  (click)="toggle(p.id)"
                >
                  <span class="proj__tags">
                    <span class="prob" [class]="'prob--' + p.probability">{{
                      probLabel(p.probability)
                    }}</span>
                    <span class="proj__domain">{{ domainLabel(p.domain) }}</span>
                  </span>
                  <span class="proj__title">{{ p.title }}</span>
                  <span class="proj__chevron" aria-hidden="true">{{
                    open() === p.id ? '−' : '+'
                  }}</span>
                </button>

                <p class="proj__thesis">{{ p.thesis }}</p>

                @if (open() === p.id) {
                  <div class="proj__detail">
                    <p class="proj__label">Mechanism — the documented trajectory it extends</p>
                    <p>{{ p.mechanism }}</p>

                    <p class="proj__label">Leading indicators to watch</p>
                    <ul class="proj__indicators">
                      @for (ind of p.leadingIndicators; track ind) {
                        <li>{{ ind }}</li>
                      }
                    </ul>

                    <p class="proj__label">The Caligulan echo</p>
                    <p>{{ p.caligulaParallel }}</p>

                    <p class="proj__disconfirm">
                      <span class="proj__disconfirm-tag">This would NOT be folly if</span>
                      {{ p.disconfirmer }}
                    </p>

                    <app-inline-cite [sources]="p.sources" />
                  </div>
                }
              </article>
            }
          </div>
        </section>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .fc__head {
        max-width: 64ch;
        margin-bottom: 1.6rem;
      }
      .eyebrow {
        font: 700 0.72rem/1 var(--sans);
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--gold-deep);
        margin: 0 0 0.6rem;
      }
      h2 {
        font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display);
        margin: 0 0 0.8rem;
        color: var(--ink);
      }
      .lede {
        font: 400 1.04rem/1.65 var(--serif);
        color: var(--ink-soft);
      }

      .fc__note {
        background: var(--wash);
        border: 1px solid var(--line);
        border-left: 3px solid var(--gold-deep);
        border-radius: 12px;
        padding: 1.1rem 1.3rem;
        margin-bottom: 1.6rem;
      }
      .fc__note-lead {
        font: 700 0.72rem/1 var(--sans);
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 0.5rem;
      }
      .fc__note p {
        font: 500 0.92rem/1.6 var(--sans);
        color: var(--ink-soft);
        margin: 0 0 0.8rem;
      }
      .fc__legend {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 0.4rem;
      }
      .fc__legend li {
        display: flex;
        align-items: baseline;
        gap: 0.6rem;
      }
      .fc__legend-meaning {
        font: 400 0.84rem/1.4 var(--sans);
        color: var(--ink-soft);
      }

      .prob {
        flex: none;
        font: 700 0.64rem/1 var(--sans);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.28rem 0.5rem;
        border-radius: 6px;
        white-space: nowrap;
      }
      .prob--likely {
        background: rgba(155, 28, 28, 0.12);
        color: #9b1c1c;
        border: 1px solid rgba(155, 28, 28, 0.3);
      }
      .prob--plausible {
        background: rgba(201, 162, 39, 0.14);
        color: var(--gold-deep);
        border: 1px solid rgba(201, 162, 39, 0.35);
      }
      .prob--wildcard {
        background: rgba(91, 42, 107, 0.12);
        color: #5b2a6b;
        border: 1px solid rgba(91, 42, 107, 0.3);
      }

      .fc__panel {
        border-radius: 14px;
        padding: 1.6rem;
        margin-bottom: 1.8rem;
      }
      .fc__panel h3 {
        font: 600 1.2rem/1.15 var(--display);
        margin: 0 0 0.8rem;
      }
      .fc__panel p {
        font: 400 0.98rem/1.65 var(--serif);
        margin: 0;
      }
      .fc__panel--fiscal {
        background: linear-gradient(160deg, #241a2b, #1b1410);
        color: #e8dcc6;
      }
      .fc__panel--fiscal h3 {
        color: #f0d586;
      }

      .fc__window {
        margin-bottom: 1.8rem;
      }
      .fc__window-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.8rem;
        border-bottom: 2px solid var(--line);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
      }
      .fc__window-head h3 {
        font: 600 1.18rem/1.1 var(--display);
        color: var(--ink);
        margin: 0;
      }
      .fc__window-count {
        font: 700 0.66rem/1 var(--sans);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }
      .fc__cards {
        display: grid;
        gap: 0.8rem;
      }

      .proj {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 0.4rem 1.2rem 1rem;
      }
      .proj--open {
        border-color: var(--gold-deep);
        box-shadow: 0 10px 30px -24px rgba(0, 0, 0, 0.7);
      }
      .proj__top {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 0.8rem;
        background: none;
        border: 0;
        padding: 0.9rem 0 0.5rem;
        cursor: pointer;
        text-align: left;
        color: inherit;
      }
      .proj__tags {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        align-items: flex-start;
      }
      .proj__domain {
        font: 600 0.62rem/1 var(--sans);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }
      .proj__title {
        font: 600 1.02rem/1.3 var(--display);
        color: var(--ink);
      }
      .proj__chevron {
        font: 400 1.4rem/1 var(--sans);
        color: var(--gold-deep);
        flex: none;
      }
      .proj__thesis {
        font: 400 0.95rem/1.6 var(--serif);
        color: var(--ink-soft);
        margin: 0.2rem 0 0;
      }
      .proj__detail {
        margin-top: 0.9rem;
        padding-top: 0.9rem;
        border-top: 1px solid var(--line);
      }
      .proj__detail p {
        font: 400 0.9rem/1.6 var(--sans);
        color: var(--ink-soft);
        margin: 0 0 0.8rem;
      }
      .proj__label {
        font: 700 0.64rem/1 var(--sans) !important;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--ink-faint) !important;
        margin: 0 0 0.4rem !important;
      }
      .proj__indicators {
        margin: 0 0 0.9rem;
        padding-left: 1.1rem;
      }
      .proj__indicators li {
        font: 400 0.88rem/1.5 var(--sans);
        color: var(--ink-soft);
        margin-bottom: 0.3rem;
      }
      .proj__disconfirm {
        background: var(--wash);
        border-radius: 8px;
        padding: 0.7rem 0.9rem;
        font: 400 0.88rem/1.55 var(--serif) !important;
        color: var(--ink) !important;
      }
      .proj__disconfirm-tag {
        display: inline-block;
        font: 700 0.6rem/1 var(--sans);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--gold-deep);
        margin-right: 0.4rem;
      }
      .proj app-inline-cite {
        display: block;
        margin-top: 0.4rem;
      }

      @media (max-width: 560px) {
        .proj__top {
          grid-template-columns: 1fr auto;
        }
        .proj__tags {
          flex-direction: row;
          align-items: center;
          grid-column: 1 / -1;
        }
      }
    `,
  ],
})
export class ForecastComponent {
  readonly lede = FORECAST_LEDE;
  readonly epistemic = FORECAST_EPISTEMIC;
  readonly fiscalCapstone = FORECAST_FISCAL_CAPSTONE;

  readonly open = signal<string | null>(null);

  readonly bands = (Object.keys(PROBABILITY_META) as ForecastProbability[]).map((key) => ({
    key,
    label: PROBABILITY_META[key].label,
    meaning: PROBABILITY_META[key].meaning,
  }));

  /** Projections grouped by window, in chronological order. */
  readonly groups = computed<WindowGroup[]>(() => {
    const byWindow = new Map<number, WindowGroup>();
    for (const p of FORECAST_PROJECTIONS) {
      let g = byWindow.get(p.windowSort);
      if (!g) {
        g = { window: p.window, windowSort: p.windowSort, items: [] };
        byWindow.set(p.windowSort, g);
      }
      g.items.push(p);
    }
    return [...byWindow.values()].sort((a, b) => a.windowSort - b.windowSort);
  });

  private readonly DOMAIN_LABELS: Record<Domain, string> = {
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
  domainLabel(d: Domain): string {
    return this.DOMAIN_LABELS[d] ?? d;
  }
  probLabel(p: ForecastProbability): string {
    return PROBABILITY_META[p].label;
  }

  toggle(id: string): void {
    this.open.update((cur) => (cur === id ? null : id));
    if (this.open() === id) track('forecast_open', { projection: id });
  }
}
