import { Component } from '@angular/core';
import { SOURCES } from '../data/sources';

@Component({
  selector: 'app-sources',
  standalone: true,
  template: `
    <div class="src">
      <header class="src__head">
        <p class="eyebrow">Show your working</p>
        <h2>Sources &amp; a word on reliability</h2>
        <p class="lede">
          Almost everything lurid about Caligula comes from writers who were hostile and writing
          <em>after</em> his death — Suetonius some 80 years later. Modern historians (Winterling,
          Barrett, Beard) read those anecdotes as political theatre or later propaganda as much as
          fact. This site colour-codes every citation by how much weight it can bear.
        </p>
      </header>

      <div class="legend">
        <span class="k rel-primary-hostile">primary · hostile</span>
        <span class="k rel-primary">primary</span>
        <span class="k rel-modern-scholarship">modern scholarship</span>
        <span class="k rel-journalism">journalism</span>
        <span class="k rel-official-record">official record</span>
      </div>

      <ul class="biblio">
        @for (s of sources; track s.key) {
          <li class="ref rel-{{ s.reliability }}">
            <div class="ref__top">
              <span class="ref__label">{{ s.label }}</span>
              <span class="ref__rel">{{ s.reliability.replace('-', ' · ') }}</span>
            </div>
            <p class="ref__full">{{ s.reference }}</p>
            @if (s.url) {
              <a class="ref__url" [href]="s.url" target="_blank" rel="noopener noreferrer">{{ s.url }}</a>
            }
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .src__head { max-width: 64ch; margin-bottom: 1.4rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.02rem/1.6 var(--serif); color: var(--ink-soft); }
      .legend { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.4rem; }
      .k { font: 700 0.66rem/1 var(--sans); letter-spacing: 0.04em; padding: 0.32rem 0.55rem; border-radius: 99px; }
      .biblio { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.7rem; }
      .ref { background: var(--surface); border: 1px solid var(--line); border-left: 4px solid var(--line); border-radius: 10px; padding: 1rem 1.2rem; }
      .ref__top { display: flex; align-items: baseline; gap: 0.8rem; margin-bottom: 0.4rem; }
      .ref__label { font: 700 0.95rem/1.2 var(--display); color: var(--ink); }
      .ref__rel { margin-left: auto; font: 600 0.64rem/1 var(--sans); letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-faint); }
      .ref__full { font: 400 0.88rem/1.5 var(--sans); color: var(--ink-soft); margin: 0; }
      .ref__url { display: inline-block; margin-top: 0.4rem; font: 500 0.78rem/1.3 var(--sans); color: var(--porphyry); word-break: break-all; }

      .rel-primary-hostile { border-left-color: #b3261e; } .rel-primary-hostile.k, .k.rel-primary-hostile { background: rgba(155,28,28,.14); color: #b3261e; }
      .rel-primary { border-left-color: #8a5a12; } .k.rel-primary { background: rgba(120,72,12,.14); color: #8a5a12; }
      .rel-modern-scholarship { border-left-color: #2c4f86; } .k.rel-modern-scholarship { background: rgba(40,70,120,.14); color: #2c4f86; }
      .rel-journalism { border-left-color: #2f6b4c; } .k.rel-journalism { background: rgba(50,95,70,.14); color: #2f6b4c; }
      .rel-official-record { border-left-color: #4a4a52; } .k.rel-official-record { background: rgba(70,70,80,.14); color: #4a4a52; }
    `,
  ],
})
export class SourcesComponent {
  readonly sources = SOURCES;
}
