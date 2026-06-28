import { Component } from '@angular/core';
import {
  PRC_BIBLIOGRAPHY,
  PRC_CONTESTABLE,
  PRC_DECLINE_READING,
  PRC_LEDE,
  PRC_PLA_SECTION,
  PRC_PLANKS,
  PRC_WINDOW_NOTE,
} from '../data/prc';
import { InlineCiteComponent } from '../shared/inline-cite.component';

/**
 * "The view from Beijing" — a clearly-labelled, sourced PRC/PLA reading of the
 * American march of folly, steelmanned in Beijing's own voice and then tested
 * against an honest counterweight, exactly as the site treats any partisan
 * source. Mirrors the structure of the counter-argument section.
 */
@Component({
  selector: 'app-beijing',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="bj">
      <header class="bj__head">
        <p class="eyebrow">东升西降 · The view from Beijing</p>
        <h2>Beijing reads the folly</h2>
        <p class="lede">{{ lede }}</p>
      </header>

      <aside class="bj__window" role="note">
        <span class="bj__window-sigil" aria-hidden="true">⧗</span>
        <p>{{ windowNote }}</p>
      </aside>

      <div class="planks">
        @for (p of planks; track p.point) {
          <article class="plank">
            <span class="plank__mark" aria-hidden="true">东</span>
            <div>
              <h3>{{ p.point }}</h3>
              <p>{{ p.explanation }}</p>
              @if (p.caveat) {
                <p class="plank__caveat">⚠ {{ p.caveat }}</p>
              }
              <app-inline-cite [sources]="p.sources" />
            </div>
          </article>
        }
      </div>

      <div class="bj__panel bj__panel--decline">
        <h3>The inversion: America is Rome; China the patient civilisation</h3>
        <p>{{ declineReading }}</p>
      </div>

      <div class="bj__panel bj__panel--pla">
        <h3>{{ pla.title }}</h3>
        <p>{{ pla.body }}</p>
        <app-inline-cite [sources]="pla.sources" />
      </div>

      <div class="bj__panel bj__panel--against">
        <h3>…and where this same viewpoint does not survive its own scrutiny</h3>
        <p>{{ contestable }}</p>
      </div>

      <div class="bj__biblio">
        <h4>Sources for this reading</h4>
        <app-inline-cite [sources]="bibliography" />
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .bj__head {
        max-width: 64ch;
        margin-bottom: 1.6rem;
      }
      .eyebrow {
        font: 700 0.72rem/1 var(--sans);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #9b1c1c;
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

      .bj__window {
        display: flex;
        gap: 0.8rem;
        align-items: flex-start;
        background: linear-gradient(120deg, rgba(155, 28, 28, 0.08), rgba(201, 162, 39, 0.08));
        border: 1px solid rgba(155, 28, 28, 0.25);
        border-left: 3px solid #9b1c1c;
        border-radius: 12px;
        padding: 1rem 1.2rem;
        margin-bottom: 1.8rem;
      }
      .bj__window-sigil {
        font-size: 1.3rem;
        color: #9b1c1c;
        line-height: 1.2;
        flex: none;
      }
      .bj__window p {
        margin: 0;
        font: 500 0.92rem/1.6 var(--sans);
        color: var(--ink-soft);
      }

      .planks {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
      }
      .plank {
        display: flex;
        gap: 0.9rem;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 1.3rem;
      }
      .plank__mark {
        flex: none;
        display: grid;
        place-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 8px;
        background: #9b1c1c;
        color: #f7e3a1;
        font: 700 1rem/1 var(--display);
      }
      .plank h3 {
        font: 600 1.02rem/1.25 var(--display);
        color: var(--ink);
        margin: 0 0 0.5rem;
      }
      .plank p {
        font: 400 0.88rem/1.55 var(--sans);
        color: var(--ink-soft);
        margin: 0 0 0.6rem;
      }
      .plank__caveat {
        font-style: italic;
        color: var(--ink-faint) !important;
        font-size: 0.82rem !important;
      }

      .bj__panel {
        border-radius: 14px;
        padding: 1.6rem;
        margin-bottom: 1.2rem;
      }
      .bj__panel h3 {
        font: 600 1.2rem/1.15 var(--display);
        margin: 0 0 0.8rem;
      }
      .bj__panel p {
        font: 400 0.98rem/1.65 var(--serif);
        margin: 0;
      }
      .bj__panel--decline {
        background: linear-gradient(160deg, #4a0a0e, #320609);
        color: #e8dcc6;
      }
      .bj__panel--decline h3 {
        color: #f0d586;
      }
      .bj__panel--pla {
        background: var(--surface);
        border: 1px solid var(--line);
      }
      .bj__panel--pla h3 {
        color: var(--gold-deep);
      }
      .bj__panel--pla p {
        color: var(--ink-soft);
      }
      .bj__panel--pla app-inline-cite {
        display: block;
        margin-top: 0.9rem;
      }
      .bj__panel--against {
        background: var(--wash);
        border: 1px solid var(--line);
      }
      .bj__panel--against h3 {
        color: #9b1c1c;
      }
      .bj__panel--against p {
        color: var(--ink-soft);
      }

      .bj__biblio {
        margin-top: 1.6rem;
        padding-top: 1.2rem;
        border-top: 1px solid var(--line);
      }
      .bj__biblio h4 {
        font: 700 0.72rem/1 var(--sans);
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-faint);
        margin: 0 0 0.7rem;
      }

      @media (max-width: 760px) {
        .planks {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class BeijingComponent {
  readonly lede = PRC_LEDE;
  readonly windowNote = PRC_WINDOW_NOTE;
  readonly planks = PRC_PLANKS;
  readonly declineReading = PRC_DECLINE_READING;
  readonly pla = PRC_PLA_SECTION;
  readonly contestable = PRC_CONTESTABLE;
  readonly bibliography = PRC_BIBLIOGRAPHY;
}
