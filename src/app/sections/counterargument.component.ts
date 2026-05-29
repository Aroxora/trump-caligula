import { Component } from '@angular/core';
import { CRITIQUE_OF_ANALOGY, DISANALOGIES, STEELMAN } from '../data/counterargument';
import { InlineCiteComponent } from '../shared/inline-cite.component';

@Component({
  selector: 'app-counterargument',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="ca">
      <header class="ca__head">
        <p class="eyebrow">The other side</p>
        <h2>The case against the analogy</h2>
        <p class="lede">
          A comparison is only worth making if it survives its strongest rebuttal. So here is the
          best case that Trump is <em>not</em> Caligula — the concrete disanalogies, the hazard of
          historical analogising in general, and then the steelman for why the comparison still earns
          its keep.
        </p>
      </header>

      <div class="dis">
        @for (d of disanalogies; track d.point; let i = $index) {
          <article class="d">
            <span class="d__n">≠</span>
            <div>
              <h3>{{ d.point }}</h3>
              <p>{{ d.explanation }}</p>
              @if (d.caveat) { <p class="d__caveat">⚠ {{ d.caveat }}</p> }
              <app-inline-cite [sources]="d.sources" />
            </div>
          </article>
        }
      </div>

      <div class="two">
        <div class="panel panel--against">
          <h3>The hazard of analogy</h3>
          <p>{{ critique }}</p>
        </div>
        <div class="panel panel--for">
          <h3>…and the steelman</h3>
          <p>{{ steelman }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .ca__head { max-width: 64ch; margin-bottom: 1.8rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.04rem/1.65 var(--serif); color: var(--ink-soft); }
      .lede em { font-style: italic; color: var(--ink); }
      .dis { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
      .d { display: flex; gap: 0.9rem; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 1.3rem; }
      .d__n { flex: none; display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 8px; background: #2f6b4c; color: #fff; font: 700 1.1rem/1 var(--display); }
      .d h3 { font: 600 1.02rem/1.25 var(--display); color: var(--ink); margin: 0 0 0.5rem; }
      .d p { font: 400 0.88rem/1.55 var(--sans); color: var(--ink-soft); margin: 0 0 0.6rem; }
      .d__caveat { font-style: italic; color: var(--ink-faint) !important; font-size: 0.82rem !important; }
      .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
      .panel { border-radius: 14px; padding: 1.6rem; }
      .panel h3 { font: 600 1.2rem/1.1 var(--display); margin: 0 0 0.8rem; }
      .panel p { font: 400 0.98rem/1.65 var(--serif); margin: 0; }
      .panel--against { background: linear-gradient(160deg, #241a2b, #2a1414); color: #e8dcc6; }
      .panel--against h3 { color: #e7b4b4; }
      .panel--for { background: var(--surface); border: 1px solid var(--line); }
      .panel--for h3 { color: var(--gold-deep); }
      .panel--for p { color: var(--ink-soft); }
      @media (max-width: 760px) { .dis, .two { grid-template-columns: 1fr; } }
    `,
  ],
})
export class CounterargumentComponent {
  readonly disanalogies = DISANALOGIES;
  readonly critique = CRITIQUE_OF_ANALOGY;
  readonly steelman = STEELMAN;
}
