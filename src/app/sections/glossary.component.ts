import { Component, computed, signal } from '@angular/core';
import { GLOSSARY } from '../data/glossary';

@Component({
  selector: 'app-glossary',
  standalone: true,
  template: `
    <div class="gl">
      <header class="gl__head">
        <p class="eyebrow">Reference</p>
        <h2>A Roman glossary</h2>
        <p class="lede">
          The terms behind the comparison — what they meant in Rome, and why they matter to the
          argument here.
        </p>
        <input
          class="gl__search" type="search" placeholder="Filter terms…"
          [value]="q()" (input)="q.set($any($event.target).value)" aria-label="Filter glossary terms"
        />
      </header>

      <dl class="terms">
        @for (t of visible(); track t.term) {
          <div class="term">
            <dt>{{ t.term }}</dt>
            <dd class="def">{{ t.definition }}</dd>
            <dd class="rel"><span>Why it matters</span>{{ t.relevance }}</dd>
          </div>
        } @empty {
          <p class="empty">No terms match "{{ q() }}".</p>
        }
      </dl>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .gl__head { max-width: 60ch; margin-bottom: 1.6rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.02rem/1.6 var(--serif); color: var(--ink-soft); margin-bottom: 1rem; }
      .gl__search { width: 100%; max-width: 360px; padding: 0.7rem 1rem; border: 1px solid var(--line); border-radius: 10px; font: 400 0.95rem/1 var(--sans); background: var(--surface); color: var(--ink); }
      .gl__search:focus { outline: none; border-color: var(--porphyry); }
      .terms { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin: 0; }
      .term { background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 1.2rem; }
      .term dt { font: 600 1.05rem/1.2 var(--display); color: var(--porphyry); margin: 0 0 0.5rem; }
      .term dd { margin: 0; }
      .def { font: 400 0.9rem/1.55 var(--sans); color: var(--ink); margin-bottom: 0.6rem; }
      .rel { font: 400 0.86rem/1.5 var(--serif); color: var(--ink-soft); padding-top: 0.6rem; border-top: 1px dashed var(--line); }
      .rel span { display: block; font: 700 0.64rem/1 var(--sans); letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-deep); margin-bottom: 0.3rem; }
      .empty { font: 400 0.95rem/1.5 var(--sans); color: var(--ink-faint); }
      @media (max-width: 720px) { .terms { grid-template-columns: 1fr; } }
    `,
  ],
})
export class GlossaryComponent {
  readonly q = signal('');
  readonly visible = computed(() => {
    const term = this.q().trim().toLowerCase();
    if (!term) return GLOSSARY;
    return GLOSSARY.filter(
      (g) => g.term.toLowerCase().includes(term) || g.definition.toLowerCase().includes(term) || g.relevance.toLowerCase().includes(term),
    );
  });
}
