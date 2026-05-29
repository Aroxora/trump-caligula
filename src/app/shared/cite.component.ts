import { Component, computed, inject, input } from '@angular/core';
import { FollyService } from '../core/folly.service';

/** Renders a list of citation keys as compact, reliability-coded chips. */
@Component({
  selector: 'app-cite',
  standalone: true,
  template: `
    <span class="cite-row">
      @for (c of resolved(); track c.key) {
        <a
          class="chip rel-{{ c.reliability }}"
          [href]="c.url || null"
          [attr.target]="c.url ? '_blank' : null"
          [attr.rel]="c.url ? 'noopener noreferrer' : null"
          [title]="c.reference"
        >{{ c.label }}</a>
      }
    </span>
  `,
  styles: [
    `
      .cite-row { display: inline-flex; flex-wrap: wrap; gap: 0.3rem; vertical-align: middle; }
      .chip {
        font: 600 0.62rem/1 var(--sans);
        letter-spacing: 0.02em;
        padding: 0.22rem 0.45rem;
        border-radius: 999px;
        text-decoration: none;
        white-space: nowrap;
        border: 1px solid transparent;
        cursor: help;
        transition: transform 0.12s ease, filter 0.12s ease;
      }
      .chip:hover { transform: translateY(-1px); filter: brightness(1.08); }
      .rel-primary-hostile { background: rgba(155, 28, 28, 0.14); color: #b3261e; border-color: rgba(155, 28, 28, 0.35); }
      .rel-primary { background: rgba(120, 72, 12, 0.14); color: #8a5a12; border-color: rgba(120, 72, 12, 0.3); }
      .rel-modern-scholarship { background: rgba(40, 70, 120, 0.14); color: #2c4f86; border-color: rgba(40, 70, 120, 0.3); }
      .rel-journalism { background: rgba(50, 95, 70, 0.14); color: #2f6b4c; border-color: rgba(50, 95, 70, 0.3); }
      .rel-official-record { background: rgba(70, 70, 80, 0.14); color: #4a4a52; border-color: rgba(70, 70, 80, 0.3); }
    `,
  ],
})
export class CiteComponent {
  private readonly svc = inject(FollyService);
  readonly keys = input.required<string[]>();
  readonly resolved = computed(() => this.keys().map((k) => this.svc.source(k)).filter(Boolean));
}
