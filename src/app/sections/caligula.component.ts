import { Component, signal } from '@angular/core';
import { CALIGULA_THEMES } from '../data/caligula';
import { InlineCiteComponent } from '../shared/inline-cite.component';

@Component({
  selector: 'app-caligula',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="cg">
      <header class="cg__head">
        <p class="eyebrow">Know the emperor</p>
        <h2>Caligula, seriously</h2>
        <p class="lede">
          Before the comparison can mean anything, the figure on the other side has to be real — not
          the cartoon. {{ themes.length }} themes, each with what the sources say, what they're
          worth, what modern scholarship now thinks, and exactly where the Trump parallel holds and
          where it snaps.
        </p>
      </header>

      <ul class="themes">
        @for (th of themes; track th.id; let i = $index) {
          <li class="theme" [class.open]="open() === i">
            <button class="theme__q" (click)="toggle(i)" [attr.aria-expanded]="open() === i">
              <span class="theme__t">{{ th.title }}</span>
              <span class="theme__c" aria-hidden="true">{{ open() === i ? '–' : '+' }}</span>
            </button>
            <p class="theme__sum">{{ th.summary }}</p>
            @if (open() === i) {
              <div class="theme__body">
                <h3>What the sources say</h3>
                <ul class="facts">
                  @for (f of th.facts; track f.statement) {
                    <li>
                      <p class="fact">{{ f.statement }}</p>
                      @if (f.caveat) {
                        <p class="fact__caveat">⚠ {{ f.caveat }}</p>
                      }
                      <app-inline-cite [sources]="f.sources" />
                    </li>
                  }
                </ul>
                <div class="theme__cols">
                  <div class="col col--modern">
                    <h3>Modern reading</h3>
                    <p>{{ th.modernReinterpretation }}</p>
                  </div>
                  <div class="col col--parallel">
                    <h3>The Trump parallel — and where it breaks</h3>
                    <p>{{ th.parallelToTrump }}</p>
                  </div>
                </div>
              </div>
            }
          </li>
        }
      </ul>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .cg__head {
        max-width: 64ch;
        margin-bottom: 1.8rem;
      }
      .eyebrow {
        font: 700 0.72rem/1 var(--sans);
        letter-spacing: 0.22em;
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
      .themes {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }
      .theme {
        background: var(--surface);
        border: 1px solid var(--line);
        border-left: 4px solid var(--porphyry);
        border-radius: 12px;
        padding: 1.2rem 1.4rem;
      }
      .theme.open {
        box-shadow: 0 22px 50px -38px rgba(40, 20, 10, 0.6);
      }
      .theme__q {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        background: none;
        border: 0;
        cursor: pointer;
        text-align: left;
        padding: 0;
      }
      .theme__t {
        flex: 1;
        font: 600 1.12rem/1.25 var(--display);
        color: var(--ink);
      }
      .theme__c {
        font: 300 1.6rem/1 var(--sans);
        color: var(--ink-faint);
      }
      .theme__sum {
        font: 400 0.95rem/1.6 var(--serif);
        color: var(--ink-soft);
        margin: 0.7rem 0 0;
      }
      .theme__body {
        margin-top: 1.1rem;
        padding-top: 1.1rem;
        border-top: 1px dashed var(--line);
        animation: fade 0.2s ease;
      }
      .theme__body h3 {
        font: 700 0.7rem/1 var(--sans);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--gold-deep);
        margin: 0 0 0.7rem;
      }
      .facts {
        list-style: none;
        margin: 0 0 1.2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
      }
      .facts > li {
        padding-left: 0.9rem;
        border-left: 2px solid var(--line);
      }
      .fact {
        font: 400 0.92rem/1.55 var(--sans);
        color: var(--ink);
        margin: 0 0 0.45rem;
      }
      .fact__caveat {
        font: 400 0.82rem/1.5 var(--sans);
        color: var(--ink-faint);
        font-style: italic;
        margin: 0 0 0.45rem;
      }
      .theme__cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.1rem;
      }
      .col {
        border-radius: 10px;
        padding: 1.1rem;
      }
      .col--modern {
        background: rgba(44, 79, 134, 0.07);
      }
      .col--parallel {
        background: rgba(91, 42, 107, 0.07);
      }
      .col p {
        font: 400 0.9rem/1.6 var(--sans);
        color: var(--ink-soft);
        margin: 0;
      }
      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @media (max-width: 760px) {
        .theme__cols {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class CaligulaComponent {
  readonly themes = CALIGULA_THEMES;
  readonly open = signal<number | null>(5); // "humiliating the Senate" — the article's core
  toggle(i: number): void {
    this.open.update((c) => (c === i ? null : i));
  }
}
