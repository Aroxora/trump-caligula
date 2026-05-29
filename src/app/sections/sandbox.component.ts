import { Component, computed, inject, signal } from '@angular/core';
import { FollyService } from '../core/folly.service';
import { track } from '../core/firebase';
import { CriterionId } from '../data/models';
import { RadarAxis, RadarComponent, RadarSeries } from '../viz/radar.component';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [RadarComponent],
  template: `
    <div class="sb">
      <header class="sb__head">
        <p class="eyebrow">Try it yourself</p>
        <h2>Score your own folly</h2>
        <p class="lede">
          The method isn't a black box. Take any decision — a policy, a war, a boardroom call — and
          rate it on the same five axes. The index uses <em>your</em> current criterion weights, so
          this reads against everything else on the page.
        </p>
      </header>

      <div class="sb__grid">
        <div class="sb__controls">
          @for (c of criteria; track c.id) {
            <div class="row">
              <div class="row__top">
                <span class="sym">{{ c.symbol }}</span>
                <label [attr.for]="'sb-' + c.id">{{ c.name }}</label>
                <span class="rowval">{{ vals()[c.id] }}/5</span>
              </div>
              <input
                [id]="'sb-' + c.id" type="range" min="0" max="5" step="1"
                [value]="vals()[c.id]" (input)="set(c.id, $event)"
              />
              <p class="hint">{{ c.meaning }}</p>
            </div>
          }
        </div>

        <div class="sb__out">
          <div class="bigscore band--{{ band() }}">
            <span class="bigscore__n">{{ mfi() }}</span>
            <span class="bigscore__cap">your MFI</span>
          </div>
          <app-radar [axes]="axes()" [series]="series()" [max]="5" [size]="200" ariaLabel="Your folly profile" />
          <p class="verdict">{{ verdict() }}</p>
          <div class="presetbtns">
            <span>Quick fills:</span>
            <button (click)="fill(0)">harmless</button>
            <button (click)="fill(3)">middling</button>
            <button (click)="fill(5)">textbook folly</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .sb__head { max-width: 60ch; margin-bottom: 1.6rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.02rem/1.6 var(--serif); color: var(--ink-soft); }
      .sb__grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 2rem; align-items: start;
        background: var(--surface); border: 1px solid var(--line); border-radius: 16px; padding: 1.8rem;
        box-shadow: 0 20px 50px -40px rgba(40,20,10,.6); }
      .row { margin-bottom: 1.1rem; }
      .row__top { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem; }
      .sym { display: grid; place-items: center; width: 1.5rem; height: 1.5rem; border-radius: 6px; background: var(--porphyry); color: #f3e7c9; font: 700 0.8rem/1 var(--display); }
      .row__top label { font: 600 0.9rem/1.1 var(--sans); color: var(--ink); }
      .rowval { margin-left: auto; font: 700 0.85rem/1 var(--sans); color: var(--gold-deep); }
      .row input { width: 100%; accent-color: var(--porphyry); }
      .hint { font: 400 0.78rem/1.4 var(--sans); color: var(--ink-faint); margin: 0.3rem 0 0; }
      .sb__out { text-align: center; }
      .bigscore { display: inline-grid; place-items: center; width: 7rem; height: 7rem; border-radius: 50%; margin-bottom: 1rem; color: #fff; }
      .bigscore__n { font: 700 2.6rem/1 var(--display); }
      .bigscore__cap { font: 600 0.6rem/1 var(--sans); letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.9; }
      .band--severe { background: #9b1c1c; } .band--serious { background: #c47a18; }
      .band--moderate { background: var(--gold-deep); } .band--mild { background: #2f6b4c; }
      .verdict { font: 400 0.95rem/1.55 var(--serif); color: var(--ink-soft); margin: 0.6rem 0 1.2rem; min-height: 3rem; }
      .presetbtns { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; justify-content: center; }
      .presetbtns span { font: 600 0.75rem/1 var(--sans); color: var(--ink-faint); }
      .presetbtns button { background: var(--wash); border: 1px solid var(--line); color: var(--ink-soft); font: 600 0.78rem/1 var(--sans); padding: 0.45rem 0.7rem; border-radius: 7px; cursor: pointer; }
      .presetbtns button:hover { border-color: var(--porphyry); color: var(--porphyry); }
      @media (max-width: 720px) { .sb__grid { grid-template-columns: 1fr; } }
    `,
  ],
})
export class SandboxComponent {
  private readonly svc = inject(FollyService);
  readonly criteria = this.svc.criteria;

  readonly vals = signal<Record<CriterionId, number>>({
    selfHarm: 3,
    counterproductive: 3,
    alternative: 3,
    systemic: 2,
    caligula: 2,
  });

  readonly axes = computed<RadarAxis[]>(() =>
    this.criteria.map((c) => ({ label: c.name, symbol: c.symbol })),
  );
  readonly series = computed<RadarSeries[]>(() => [
    { name: 'your policy', color: '#9b1c1c', values: this.criteria.map((c) => this.vals()[c.id]) },
  ]);

  readonly mfi = computed(() => this.svc.scoreRaw(this.vals(), this.svc.weights()));
  readonly band = computed(() => {
    const m = this.mfi();
    return m >= 70 ? 'severe' : m >= 50 ? 'serious' : m >= 30 ? 'moderate' : 'mild';
  });
  readonly verdict = computed(() => {
    const v = this.vals();
    const m = this.mfi();
    if (v.counterproductive <= 1 || v.alternative <= 1)
      return 'By Tuchman\'s strict test this barely qualifies as folly: if few saw it as a mistake at the time, or no feasible alternative existed, it may be misfortune rather than folly.';
    if (v.systemic >= 4)
      return `MFI ${m}. The high systemic score is the danger sign — a group-owned error that persists past any one leader. The hardest kind to reverse.`;
    if (m >= 50) return `MFI ${m}. This clears Tuchman's bar: recognised as wrong-headed at the time, avoidable, and self-defeating.`;
    return `MFI ${m}. A real misstep, but a contained one — closer to a personal blunder than a march of folly.`;
  });

  set(id: CriterionId, ev: Event): void {
    const value = Number((ev.target as HTMLInputElement).value);
    this.vals.update((v) => ({ ...v, [id]: value }));
  }
  fill(n: number): void {
    this.vals.set({ selfHarm: n, counterproductive: n, alternative: n, systemic: n, caligula: n });
    track('sandbox_fill', { level: n });
  }
}
