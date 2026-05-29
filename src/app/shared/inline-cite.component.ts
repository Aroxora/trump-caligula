import { Component, input } from '@angular/core';
import { InlineSource } from '../data/models';

/** Renders specific, inline sources (citation + type) as reliability-coded chips. */
@Component({
  selector: 'app-inline-cite',
  standalone: true,
  template: `
    <div class="srcs">
      @for (s of sources(); track $index) {
        <span class="chip rel-{{ s.type }}" [title]="s.citation">
          <span class="dot"></span>{{ short(s.citation) }}
        </span>
      }
    </div>
  `,
  styles: [
    `
      .srcs { display: flex; flex-wrap: wrap; gap: 0.35rem; }
      .chip {
        display: inline-flex; align-items: center; gap: 0.3rem;
        font: 600 0.66rem/1.2 var(--sans); padding: 0.26rem 0.5rem; border-radius: 6px;
        max-width: 22rem; cursor: help; border: 1px solid transparent;
      }
      .chip .dot { width: 0.45rem; height: 0.45rem; border-radius: 50%; flex: none; }
      .rel-primary-hostile { background: rgba(155,28,28,.1); color: #9b1c1c; border-color: rgba(155,28,28,.25); }
      .rel-primary-hostile .dot { background: #9b1c1c; }
      .rel-primary { background: rgba(138,90,18,.1); color: #8a5a12; border-color: rgba(138,90,18,.22); }
      .rel-primary .dot { background: #8a5a12; }
      .rel-modern-scholarship { background: rgba(44,79,134,.1); color: #2c4f86; border-color: rgba(44,79,134,.22); }
      .rel-modern-scholarship .dot { background: #2c4f86; }
      .rel-journalism { background: rgba(47,107,76,.1); color: #2f6b4c; border-color: rgba(47,107,76,.22); }
      .rel-journalism .dot { background: #2f6b4c; }
      .rel-official-record { background: rgba(74,74,82,.1); color: #4a4a52; border-color: rgba(74,74,82,.22); }
      .rel-official-record .dot { background: #4a4a52; }
    `,
  ],
})
export class InlineCiteComponent {
  readonly sources = input.required<InlineSource[]>();
  short(c: string): string {
    // Trim to the publication / first clause for a compact chip; full text in title.
    const head = c.split(/,|:|\(/)[0].trim();
    return head.length > 40 ? head.slice(0, 38) + '…' : head;
  }
}
