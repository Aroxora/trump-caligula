import { Component } from '@angular/core';
import { ARTICLE } from '../data/content';
import { CiteComponent } from '../shared/cite.component';

@Component({
  selector: 'app-thesis',
  standalone: true,
  imports: [CiteComponent],
  template: `
    <div class="thesis">
      <header class="thesis__head">
        <p class="eyebrow">The argument</p>
        <h2>A "march of folly", from Troy to the Gulf</h2>
      </header>

      <div class="grid">
        <div class="lead-col">
          <p class="drop">{{ article.thesis }}</p>
          <p>
            The column's spine is Barbara Tuchman's 1984 study <em>The March of Folly</em>. Tuchman
            sets a high bar for "folly": a policy must have been seen as counter-productive
            <em>in its own time</em>, a feasible alternative must have existed, and — crucially — it
            should be the act of a <strong>group</strong> that persists beyond any one political
            lifetime. Single rulers can do great damage; systems do the world-changing kind.
            <app-cite [keys]="['tuchman', 'econ']" />
          </p>
          <p>
            From there the piece runs a roll-call of contemporary blunders — Ukraine, Gaza, Iran's
            half-built bomb — before arriving at its question about America: are Donald Trump's
            mistakes <em>personal</em>, or has the republic begun the slow slide into imperial
            <em>decadence</em>?
          </p>
          <p class="closing">
            <strong>The closing question:</strong> {{ article.closingQuestion }}
          </p>
        </div>

        <aside class="quotes">
          <p class="quotes__label">From the column</p>
          @for (q of article.pullQuotes; track q) {
            <blockquote>“{{ q }}”</blockquote>
          }
          <p class="attr">{{ article.publication }}</p>
        </aside>
      </div>

      <div class="folly-tests">
        <div class="test">
          <span>1</span>
          <p>
            Was it seen as <strong>counter-productive at the time</strong> — not just in hindsight?
          </p>
        </div>
        <div class="test">
          <span>2</span>
          <p>Did a <strong>feasible alternative</strong> plainly exist?</p>
        </div>
        <div class="test">
          <span>3</span>
          <p>
            Is it the act of a <strong>group</strong> that <strong>persists</strong> past one
            leader?
          </p>
        </div>
      </div>
      <p class="fineprint">
        These three tests — plus the article's "self-harm" framing and a Caligula-resonance axis —
        are exactly what the <a href="#index">Folly Index</a> above scores. The framework is
        Tuchman's; the scores are an editorial reading you can re-weight.
      </p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .thesis__head {
        margin-bottom: 1.6rem;
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
        margin: 0;
        color: var(--ink);
      }
      .grid {
        display: grid;
        grid-template-columns: 1.6fr 1fr;
        gap: 2rem;
        align-items: start;
      }
      .lead-col p {
        font: 400 1.04rem/1.7 var(--serif);
        color: var(--ink-soft);
        margin: 0 0 1.1rem;
      }
      .lead-col p strong,
      .lead-col p em {
        color: var(--ink);
      }
      .drop::first-letter {
        float: left;
        font: 600 3.4rem/0.8 var(--display);
        color: var(--porphyry);
        padding: 0.1rem 0.7rem 0 0;
      }
      .closing {
        padding: 1rem 1.2rem;
        background: var(--wash);
        border-left: 3px solid var(--porphyry);
        border-radius: 0 10px 10px 0;
      }
      .quotes {
        background: var(--porphyry);
        color: #efe2c4;
        border-radius: 14px;
        padding: 1.5rem;
      }
      .quotes__label {
        font: 700 0.66rem/1 var(--sans);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #e3c456;
        margin: 0 0 1rem;
      }
      .quotes blockquote {
        margin: 0 0 1.1rem;
        font: 400 1rem/1.5 var(--serif);
        border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        padding-bottom: 1.1rem;
      }
      .quotes blockquote:last-of-type {
        border-bottom: 0;
      }
      .attr {
        font: 600 0.74rem/1.3 var(--sans);
        color: #e3c456;
        margin: 0;
      }
      .folly-tests {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin: 2rem 0 0.8rem;
      }
      .test {
        display: flex;
        gap: 0.8rem;
        align-items: flex-start;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 1.1rem;
      }
      .test span {
        flex: none;
        display: grid;
        place-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: var(--gold);
        color: var(--ink);
        font: 700 1rem/1 var(--display);
      }
      .test p {
        font: 400 0.9rem/1.5 var(--sans);
        color: var(--ink-soft);
        margin: 0;
      }
      .test strong {
        color: var(--ink);
      }
      .fineprint {
        font: 400 0.86rem/1.6 var(--sans);
        color: var(--ink-faint);
      }
      .fineprint a {
        color: var(--porphyry);
      }
      @media (max-width: 760px) {
        .grid {
          grid-template-columns: 1fr;
        }
        .folly-tests {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ThesisComponent {
  readonly article = ARTICLE;
}
