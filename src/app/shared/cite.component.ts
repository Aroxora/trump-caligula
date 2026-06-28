import { Component, computed, inject, input } from '@angular/core';
import { FollyService } from '../core/folly.service';
import { Citation } from '../data/models';

/** Renders a list of citation keys as compact, reliability-coded chips. */
@Component({
  selector: 'app-cite',
  standalone: true,
  template: `
    <span class="cite-row">
      @for (c of resolved(); track c.key) {
        @if (c.url) {
          <a
            class="chip rel-{{ c.reliability }}"
            [href]="c.url"
            target="_blank"
            rel="noopener noreferrer"
            [title]="c.reference"
            >{{ c.label }}</a
          >
        } @else {
          <span class="chip rel-{{ c.reliability }}" [title]="c.reference">{{ c.label }}</span>
        }
      }
    </span>
  `,
  styles: [
    `
      .cite-row {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        vertical-align: middle;
      }
      .chip {
        font: 600 0.62rem/1 var(--sans);
        letter-spacing: 0.02em;
        padding: 0.22rem 0.45rem;
        border-radius: 999px;
        text-decoration: none;
        white-space: nowrap;
        border: 1px solid transparent;
        cursor: help;
        transition:
          transform 0.12s ease,
          filter 0.12s ease;
      }
      .chip:hover {
        transform: translateY(-1px);
        filter: brightness(1.08);
      }
      .rel-primary-hostile {
        background: rgba(155, 28, 28, 0.14);
        color: var(--rel-hostile);
        border-color: rgba(155, 28, 28, 0.35);
      }
      .rel-primary {
        background: rgba(120, 72, 12, 0.14);
        color: var(--rel-primary);
        border-color: rgba(120, 72, 12, 0.3);
      }
      .rel-modern-scholarship {
        background: rgba(40, 70, 120, 0.14);
        color: #2c4f86;
        border-color: rgba(40, 70, 120, 0.3);
      }
      .rel-journalism {
        background: rgba(50, 95, 70, 0.14);
        color: var(--rel-journalism);
        border-color: rgba(50, 95, 70, 0.3);
      }
      .rel-official-record {
        background: rgba(70, 70, 80, 0.14);
        color: #4a4a52;
        border-color: rgba(70, 70, 80, 0.3);
      }
    `,
  ],
})
export class CiteComponent {
  private readonly svc = inject(FollyService);
  readonly keys = input.required<string[]>();
  readonly resolved = computed<Citation[]>(() =>
    this.keys()
      .map((k) => {
        const src = this.svc.source(k);
        if (!src) console.warn('[cite] unknown citation key:', k);
        return src;
      })
      .filter((s): s is Citation => !!s),
  );
}
