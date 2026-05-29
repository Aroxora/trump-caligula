import { Component, computed, signal } from '@angular/core';
import { TIMELINE } from '../data/content';
import { Subject } from '../data/models';
import { CiteComponent } from '../shared/cite.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CiteComponent],
  template: `
    <div class="tl">
      <header class="tl__head">
        <p class="eyebrow">Two clocks</p>
        <h2>Reign &amp; presidency, side by side</h2>
        <p class="lede">
          Caligula's rule lasted under four years and ended at swordpoint. A presidency is bounded
          by elections, courts and a free press. The interleaved timeline keeps both scales visible
          at once — a reminder that the analogy is about <em>style</em>, not fate.
        </p>
        <div class="tl__filter">
          @for (f of filters; track f.id) {
            <button class="pill" [class.active]="filter() === f.id" (click)="filter.set(f.id)">{{ f.label }}</button>
          }
        </div>
      </header>

      <ol class="rail">
        @for (e of visible(); track $index) {
          <li class="ev ev--{{ e.subject }}">
            <span class="ev__dot"></span>
            <div class="ev__card">
              <p class="ev__date">{{ e.date }}</p>
              <h3>{{ e.title }}</h3>
              <p class="ev__detail">{{ e.detail }}</p>
              <app-cite [keys]="e.cites" />
            </div>
          </li>
        }
      </ol>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .tl__head { max-width: 60ch; margin-bottom: 2rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.02rem/1.6 var(--serif); color: var(--ink-soft); margin: 0 0 1.2rem; }
      .tl__filter { display: flex; gap: 0.5rem; }
      .pill { background: var(--surface); border: 1px solid var(--line); color: var(--ink-soft); font: 600 0.8rem/1 var(--sans); padding: 0.5rem 0.85rem; border-radius: 99px; cursor: pointer; }
      .pill.active { background: var(--porphyry); color: #f3e7c9; border-color: var(--porphyry); }

      .rail { list-style: none; margin: 0; padding: 0; position: relative; }
      .rail::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: var(--line); transform: translateX(-50%); }
      .ev { position: relative; width: 50%; padding: 0.7rem 2rem; box-sizing: border-box; }
      .ev--caligula { left: 0; text-align: right; }
      .ev--trump { left: 50%; }
      .ev--both { left: 25%; width: 50%; text-align: center; }
      .ev__dot { position: absolute; top: 1.3rem; width: 14px; height: 14px; border-radius: 50%; border: 3px solid var(--bg); }
      .ev--caligula .ev__dot { right: -7px; background: var(--porphyry); }
      .ev--trump .ev__dot { left: -7px; background: #9b1c1c; }
      .ev--both .ev__dot { left: 50%; transform: translateX(-50%); background: var(--gold); }
      .ev__card { background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 1rem 1.1rem; display: inline-block; text-align: left; box-shadow: 0 14px 34px -30px rgba(40,20,10,.6); }
      .ev__date { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 0.35rem; }
      .ev--caligula .ev__date { color: var(--porphyry); }
      .ev--trump .ev__date { color: #9b1c1c; }
      .ev--both .ev__date { color: var(--gold-deep); }
      .ev h3 { font: 600 1.05rem/1.2 var(--display); color: var(--ink); margin: 0 0 0.4rem; }
      .ev__detail { font: 400 0.88rem/1.5 var(--sans); color: var(--ink-soft); margin: 0 0 0.6rem; }

      @media (max-width: 760px) {
        .rail::before { left: 9px; }
        .ev, .ev--both { width: 100%; left: 0; text-align: left; padding: 0.6rem 0 0.6rem 2.2rem; }
        .ev__dot { left: 2px !important; right: auto !important; transform: none !important; }
      }
    `,
  ],
})
export class TimelineComponent {
  readonly filters = [
    { id: 'all' as const, label: 'Both' },
    { id: 'caligula' as const, label: 'Caligula' },
    { id: 'trump' as const, label: 'Trump' },
  ];
  readonly filter = signal<'all' | Subject>('all');

  readonly visible = computed(() => {
    const f = this.filter();
    return [...TIMELINE]
      .filter((e) => f === 'all' || e.subject === f || e.subject === 'both')
      .sort((a, b) => a.sortYear - b.sortYear);
  });
}
