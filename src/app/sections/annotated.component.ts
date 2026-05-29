import { Component, signal } from '@angular/core';
import { ARTICLE_URL, PASSAGES } from '../data/annotated';
import { track } from '../core/firebase';
import { CiteComponent } from '../shared/cite.component';

@Component({
  selector: 'app-annotated',
  standalone: true,
  imports: [CiteComponent],
  template: `
    <div class="ann">
      <header class="ann__head">
        <p class="eyebrow">Close reading</p>
        <h2>The column, annotated</h2>
        <p class="lede">
          The argument in twelve beats. Each excerpt is quoted for commentary; tap a line to unpack
          the reference, check the claim, and jump to where this site digs in. The full piece is at
          <a [href]="url" target="_blank" rel="noopener noreferrer">economist.com</a>.
        </p>
      </header>

      <ol class="passages">
        @for (p of passages; track $index; let i = $index) {
          <li class="passage" [class.open]="open() === i">
            <button class="passage__quote" (click)="toggle(i)" [attr.aria-expanded]="open() === i">
              <span class="passage__n">{{ i + 1 }}</span>
              <span class="passage__text">“{{ p.quote }}”</span>
              <span class="passage__chev" aria-hidden="true">{{ open() === i ? '–' : '+' }}</span>
            </button>
            @if (open() === i) {
              <div class="passage__note">
                <p>{{ p.note }}</p>
                <div class="passage__foot">
                  <app-cite [keys]="p.cites" />
                  @if (p.jump) {
                    <button class="jump" (click)="jump(p.jump.id)">{{ p.jump.label }} →</button>
                  }
                </div>
              </div>
            }
          </li>
        }
      </ol>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .ann__head { max-width: 62ch; margin-bottom: 1.6rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.02rem/1.6 var(--serif); color: var(--ink-soft); }
      .lede a { color: var(--porphyry); }
      .passages { list-style: none; margin: 0; padding: 0; counter-reset: p; border-left: 2px solid var(--line); }
      .passage { position: relative; }
      .passage__quote {
        width: 100%; display: flex; gap: 1rem; align-items: flex-start; text-align: left;
        background: none; border: 0; cursor: pointer; padding: 1rem 1rem 1rem 1.6rem;
      }
      .passage__n { flex: none; display: grid; place-items: center; width: 1.7rem; height: 1.7rem; border-radius: 50%;
        background: var(--surface); border: 1px solid var(--line); color: var(--gold-deep); font: 700 0.8rem/1 var(--display); margin-top: 0.1rem; }
      .passage.open .passage__n { background: var(--porphyry); color: #f3e7c9; border-color: var(--porphyry); }
      .passage__text { flex: 1; font: 400 1.08rem/1.5 var(--serif); color: var(--ink); }
      .passage.open .passage__text { color: var(--porphyry); }
      .passage__chev { flex: none; font: 300 1.5rem/1 var(--sans); color: var(--ink-faint); }
      .passage__note { padding: 0 1rem 1.3rem 3.3rem; animation: fade 0.2s ease; }
      .passage__note p { font: 400 0.96rem/1.6 var(--sans); color: var(--ink-soft); margin: 0 0 0.8rem; }
      .passage__foot { display: flex; align-items: center; gap: 0.8rem; flex-wrap: wrap; }
      .jump { background: var(--wash); border: 1px solid var(--line); color: var(--porphyry); font: 600 0.8rem/1 var(--sans); padding: 0.5rem 0.8rem; border-radius: 8px; cursor: pointer; }
      .jump:hover { background: var(--porphyry); color: #f3e7c9; border-color: var(--porphyry); }
      @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
    `,
  ],
})
export class AnnotatedComponent {
  readonly passages = PASSAGES;
  readonly url = ARTICLE_URL;
  readonly open = signal<number | null>(0);

  toggle(i: number): void {
    this.open.update((c) => (c === i ? null : i));
    if (this.open() === i) track('passage_open', { index: i });
  }
  jump(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    track('passage_jump', { to: id });
  }
}
