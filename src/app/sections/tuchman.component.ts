import { Component } from '@angular/core';
import { TUCHMAN } from '../data/tuchman';
import { InlineCiteComponent } from '../shared/inline-cite.component';

@Component({
  selector: 'app-tuchman',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="tu">
      <header class="tu__head">
        <p class="eyebrow">The framework</p>
        <h2>Tuchman's three tests of folly</h2>
        <p class="lede">{{ t.definition }}</p>
      </header>

      <div class="tests">
        @for (test of t.tests; track test.name; let i = $index) {
          <article class="test">
            <span class="test__n">{{ i + 1 }}</span>
            <h3>{{ test.name }}</h3>
            <p>{{ test.detail }}</p>
          </article>
        }
      </div>

      <aside class="wood">
        <h3>Wooden-headedness</h3>
        <p>{{ t.woodenHeadedness }}</p>
      </aside>

      <h3 class="cases__title">Her four case studies</h3>
      <div class="cases">
        @for (c of t.caseStudies; track c.name) {
          <article class="case">
            <header><h4>{{ c.name }}</h4><span class="period">{{ c.period }}</span></header>
            <p class="case__sum">{{ c.summary }}</p>
            <p class="case__lesson"><span>Lesson</span>{{ c.lesson }}</p>
          </article>
        }
      </div>

      <div class="apply">
        <h3>So: personal, or systemic?</h3>
        <p>{{ t.application }}</p>
        <p class="apply__caveat">⚠ {{ t.applicationCaveat }}</p>
        <app-inline-cite [sources]="t.sources" />
      </div>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .tu__head { max-width: 62ch; margin-bottom: 1.8rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.05rem/1.65 var(--serif); color: var(--ink-soft); }
      .tests { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.6rem; }
      .test { background: var(--surface); border: 1px solid var(--line); border-top: 3px solid var(--porphyry); border-radius: 12px; padding: 1.3rem; }
      .test__n { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 50%; background: var(--porphyry); color: #f3e7c9; font: 700 1rem/1 var(--display); margin-bottom: 0.7rem; }
      .test h3 { font: 600 1.05rem/1.2 var(--display); color: var(--ink); margin: 0 0 0.5rem; }
      .test p { font: 400 0.88rem/1.55 var(--sans); color: var(--ink-soft); margin: 0; }
      .wood { background: linear-gradient(160deg, #4a0a0e, #320609); color: #efe2c4; border-radius: 14px; padding: 1.6rem; margin-bottom: 2rem; }
      .wood h3 { font: 600 1.2rem/1 var(--display); color: var(--gold); margin: 0 0 0.7rem; }
      .wood p { font: 400 1rem/1.6 var(--serif); margin: 0; }
      .cases__title, .apply h3 { font: 600 1.4rem/1.1 var(--display); color: var(--ink); margin: 0 0 1rem; }
      .cases { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
      .case { background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 1.3rem; }
      .case header { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem; margin-bottom: 0.6rem; }
      .case h4 { font: 600 1.05rem/1.2 var(--display); color: var(--ink); margin: 0; }
      .period { font: 600 0.7rem/1 var(--sans); color: var(--ink-faint); text-transform: uppercase; letter-spacing: 0.05em; }
      .case__sum { font: 400 0.9rem/1.55 var(--sans); color: var(--ink-soft); margin: 0 0 0.8rem; }
      .case__lesson { font: 400 0.9rem/1.55 var(--serif); color: var(--ink); margin: 0; padding-top: 0.7rem; border-top: 1px dashed var(--line); }
      .case__lesson span { display: block; font: 700 0.66rem/1 var(--sans); letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 0.3rem; }
      .apply { background: var(--wash); border: 1px solid var(--line); border-radius: 14px; padding: 1.6rem; }
      .apply p { font: 400 1rem/1.65 var(--serif); color: var(--ink-soft); margin: 0 0 1rem; }
      .apply__caveat { font: 400 0.85rem/1.55 var(--sans) !important; color: var(--ink-faint) !important; font-style: italic; }
      @media (max-width: 760px) { .tests, .cases { grid-template-columns: 1fr; } }
    `,
  ],
})
export class TuchmanComponent {
  readonly t = TUCHMAN;
}
