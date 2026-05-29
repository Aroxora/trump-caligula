import { Component, signal } from '@angular/core';
import { FOUNDER_FEARS, ROME_CAUTION, ROME_SECTIONS } from '../data/rome';
import { InlineCiteComponent } from '../shared/inline-cite.component';

@Component({
  selector: 'app-rome',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="rm">
      <header class="rm__head">
        <p class="eyebrow">Why the founders cared</p>
        <h2>From republic to empire — and the American echo</h2>
        <p class="lede">
          The column notes that "America's founding fathers brooded about the decline of the Roman
          republic." They weren't being literary. They built the Constitution as a machine to defeat
          the specific way Rome's republic died: not by a single coup, but by a charismatic man who
          kept the republican forms while hollowing them out.
        </p>
      </header>

      <div class="fears">
        @for (f of fears; track f.who) {
          <div class="fear">
            <p class="fear__who">{{ f.who }}</p>
            <p class="fear__fear">{{ f.fear }}</p>
            <p class="fear__src">{{ f.source }}</p>
          </div>
        }
      </div>

      <ol class="secs">
        @for (s of sections; track s.title; let i = $index) {
          <li class="sec" [class.open]="open() === i">
            <button class="sec__q" (click)="toggle(i)" [attr.aria-expanded]="open() === i">
              <span class="sec__t">{{ s.title }}</span>
              <span class="sec__c" aria-hidden="true">{{ open() === i ? '–' : '+' }}</span>
            </button>
            @if (open() === i) {
              <div class="sec__body">
                <p>{{ s.body }}</p>
                <app-inline-cite [sources]="s.sources" />
              </div>
            }
          </li>
        }
      </ol>

      <p class="caution"><span>The historian's caution</span>{{ caution }}</p>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .rm__head { max-width: 64ch; margin-bottom: 1.8rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.04rem/1.65 var(--serif); color: var(--ink-soft); }
      .fears { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.9rem; margin-bottom: 2rem; }
      .fear { background: var(--surface); border: 1px solid var(--line); border-left: 3px solid var(--gold); border-radius: 10px; padding: 1.1rem; }
      .fear__who { font: 600 0.98rem/1.1 var(--display); color: var(--ink); margin: 0 0 0.5rem; }
      .fear__fear { font: 400 0.85rem/1.5 var(--sans); color: var(--ink-soft); margin: 0 0 0.5rem; }
      .fear__src { font: 600 0.7rem/1.3 var(--sans); color: var(--ink-faint); margin: 0; }
      .secs { list-style: none; margin: 0 0 1.6rem; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
      .sec { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
      .sec.open { border-color: var(--porphyry); }
      .sec__q { width: 100%; display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; background: none; border: 0; cursor: pointer; text-align: left; }
      .sec__t { flex: 1; font: 600 1.02rem/1.3 var(--display); color: var(--ink); }
      .sec__c { font: 300 1.5rem/1 var(--sans); color: var(--ink-faint); }
      .sec__body { padding: 0 1.2rem 1.3rem; animation: fade 0.2s ease; }
      .sec__body p { font: 400 0.96rem/1.65 var(--serif); color: var(--ink-soft); margin: 0 0 0.8rem; }
      .caution { background: var(--wash); border: 1px dashed var(--line); border-radius: 12px; padding: 1.2rem 1.4rem; font: 400 0.96rem/1.6 var(--serif); color: var(--ink-soft); margin: 0; }
      .caution span { display: block; font: 700 0.68rem/1 var(--sans); letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 0.4rem; }
      @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
      @media (max-width: 860px) { .fears { grid-template-columns: 1fr 1fr; } }
      @media (max-width: 520px) { .fears { grid-template-columns: 1fr; } }
    `,
  ],
})
export class RomeComponent {
  readonly sections = ROME_SECTIONS;
  readonly fears = FOUNDER_FEARS;
  readonly caution = ROME_CAUTION;
  readonly open = signal<number | null>(6); // start on "the mechanism"
  toggle(i: number): void {
    this.open.update((c) => (c === i ? null : i));
  }
}
