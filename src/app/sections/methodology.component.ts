import { Component, signal } from '@angular/core';

interface Rubric {
  sym: string;
  name: string;
  low: string;
  mid: string;
  high: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  template: `
    <div class="method panel">
      <button class="method__toggle" (click)="open.set(!open())" [attr.aria-expanded]="open()">
        <span
          >⚖ The full methodology — scoring rubric, the math, provenance &amp; the engineering
          cross-check</span
        >
        <span class="chev">{{ open() ? '–' : '+' }}</span>
      </button>

      @if (open()) {
        <div class="method__body">
          <!-- RUBRIC -->
          <h3>1 · The scoring rubric</h3>
          <p class="m-lede">
            Every failure is scored 0–5 on each axis against fixed anchors, so the numbers mean the
            same thing across items. Higher = more.
          </p>
          <div class="rubric">
            <div class="rubric__row rubric__head">
              <span>Axis</span><span>0–1 (low)</span><span>2–3 (mid)</span><span>4–5 (high)</span>
            </div>
            @for (r of rubric; track r.sym) {
              <div class="rubric__row">
                <span class="r-axis"
                  ><span class="sym">{{ r.sym }}</span
                  >{{ r.name }}</span
                >
                <span>{{ r.low }}</span
                ><span>{{ r.mid }}</span
                ><span>{{ r.high }}</span>
              </div>
            }
          </div>

          <!-- MATH -->
          <h3>2 · The aggregation math</h3>
          <ul class="m-list">
            <li>
              <strong>Per item:</strong> <code>MFI = 100 · Σ(wᵢ·sᵢ) / (5·Σwᵢ)</code> — the weighted
              average of the five 0–5 scores, rescaled to 0–100. With equal weights it is just the
              mean score × 20.
            </li>
            <li>
              <strong>Confidence weighting (optional):</strong>
              <code>MFI_c = round(MFI × confidence)</code>, where confidence ∈ [0,1] is the editor's
              stated certainty in the grading. Turning it on discounts the shakier items.
            </li>
            <li>
              <strong>Provenance filter:</strong> the aggregate is the mean MFI over only the
              <em>included</em> items. Dropping <em>reported</em> or <em>speculative</em> recomputes
              severity over the documented core.
            </li>
            <li>
              <strong>Severity</strong> is that aggregate MFI; the
              <strong>systemic reading</strong> is mean(systemic)/5 — Tuchman's third test, made
              numeric.
            </li>
          </ul>

          <!-- PROVENANCE -->
          <h3>3 · Provenance &amp; confidence</h3>
          <div class="prov-grid">
            <div>
              <span class="tag tag--documented">documented</span>
              <p>Multiply-sourced, on the record, and within the Jan 2026 knowledge cutoff.</p>
            </div>
            <div>
              <span class="tag tag--reported">reported</span>
              <p>
                Asserted, developing, contested, or post-dating the cutoff (knowable only via
                contemporaneous reporting).
              </p>
            </div>
            <div>
              <span class="tag tag--speculative">speculative</span>
              <p>Floated, rumoured, satirical, or forward-dated with thin basis.</p>
            </div>
          </div>
          <p class="m-note">
            Post-cutoff events (the 2026 Gulf war, the battleship, the Anthropic dispute) are
            badged; one item carries an explicit conflict-of-interest disclosure. Ancient Caligula
            anecdotes are graded <em>primary-hostile</em> and caveated, never asserted as fact.
          </p>

          <!-- CALIBRATION -->
          <h3>4 · Calibration against Tuchman's own follies</h3>
          <p class="m-note">
            To check the instrument, Tuchman's four canonical follies (Troy, the Renaissance popes,
            Britain-loses-America, Vietnam) are scored on the identical axes and shown as reference
            markers on the folly map and the calibration strip. They answer the natural question —
            "is a modern item really at <em>Vietnam</em> levels?" — and they validate the third-test
            logic: Troy, a single decision, scores low on the systemic axis; Vietnam, five
            administrations deep, scores at the ceiling.
          </p>

          <!-- ENGINEERING -->
          <h3>5 · Engineering &amp; physics cross-check (for defense "systems")</h3>
          <p class="m-note">
            Where a folly is a proposed <em>system</em>, its <strong>self-harm</strong>,
            <strong>counter-productive</strong> and <strong>feasible-alternative</strong> scores are
            anchored to first-principles physics rather than punditry, via the open-source
            <a
              href="https://github.com/Aroxora/Defense-CAD"
              target="_blank"
              rel="noopener noreferrer"
              >OSINT Defense-CAD</a
            >
            toolkit (<a
              href="https://osint-defense.web.app"
              target="_blank"
              rel="noopener noreferrer"
              >interactive app</a
            >). It computes radar cross-section from CAD meshes (detection range scales as R ∝ σ^¼),
            RF link budgets, missile kinematics and integrated kill-chains, and a cost-benefit
            <code>value_index = (benefit × survivability) / lifecycle-cost</code>. On that metric
            the conceptual <strong>"Trump-class" battleship ranks last</strong> among modelled DoD
            options — a large-RCS, concentrated, ~small-carrier-cost target that runs against
            Distributed Maritime Operations — behind networked, distributable, attritable
            alternatives (DDG(X), Collaborative Combat Aircraft) and the real comparator (Type 055).
            Expand that folly to see the cross-check inline. The philosophy is shared: compute
            <em>what is physically worth building</em>, so effort isn't wasted on physics dead-ends.
          </p>

          <!-- LIMITS -->
          <h3>6 · Limitations (read these)</h3>
          <ul class="m-list">
            <li>
              <strong>The scores are an editorial reading.</strong> They are defensible and
              source-graded, not objective truth — which is why you can re-weight, filter, and
              confidence-discount them yourself.
            </li>
            <li>
              <strong>Tuchman excludes single rulers.</strong> On her own terms a one-person caprice
              is not yet "folly"; the <em>systemic</em> axis is the one that matters, so a high
              aggregate with a low systemic reading means "personal, survivable", not "decadence".
            </li>
            <li>
              <strong>Source asymmetry.</strong> Trump is documented in real time; Caligula survives
              only through hostile, post-mortem writers. The two are near epistemic mirror images —
              the comparison is about <em>style</em>, not equivalence.
            </li>
            <li>
              <strong>It is a diagnostic, not a prophecy.</strong> The index measures resemblance
              and self-defeat; it does not predict outcomes.
            </li>
          </ul>
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .method {
        padding: 0;
        overflow: hidden;
      }
      .method__toggle {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        background: none;
        border: 0;
        cursor: pointer;
        text-align: left;
        padding: 1.2rem 1.6rem;
        font: 600 1rem/1.3 var(--display);
        color: var(--ink);
      }
      .method__toggle .chev {
        font: 300 1.6rem/1 var(--sans);
        color: var(--ink-faint);
      }
      .method__body {
        padding: 0 1.6rem 1.8rem;
        animation: fade 0.2s ease;
      }
      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      h3 {
        font: 600 1.05rem/1.2 var(--display);
        color: var(--gold-deep);
        margin: 1.6rem 0 0.7rem;
      }
      h3:first-child {
        margin-top: 0;
      }
      .m-lede {
        font: 400 0.95rem/1.6 var(--serif);
        color: var(--ink-soft);
        margin: 0 0 1rem;
      }
      .m-note {
        font: 400 0.9rem/1.65 var(--serif);
        color: var(--ink-soft);
        margin: 0;
      }
      .m-note a {
        color: var(--porphyry);
      }
      .m-list {
        margin: 0;
        padding-left: 1.1rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .m-list li {
        font: 400 0.9rem/1.6 var(--sans);
        color: var(--ink-soft);
      }
      .m-list strong {
        color: var(--ink);
      }
      code {
        font:
          600 0.86em/1 ui-monospace,
          monospace;
        background: rgba(193, 18, 31, 0.08);
        color: var(--porphyry);
        padding: 0.1rem 0.35rem;
        border-radius: 4px;
      }

      .rubric {
        border: 1px solid var(--line);
        border-radius: 10px;
        overflow: hidden;
      }
      .rubric__row {
        display: grid;
        grid-template-columns: 1.1fr 1fr 1fr 1fr;
        gap: 0.8rem;
        padding: 0.7rem 0.9rem;
        border-bottom: 1px solid var(--line);
      }
      .rubric__row:last-child {
        border-bottom: 0;
      }
      .rubric__row > span {
        font: 400 0.8rem/1.45 var(--sans);
        color: var(--ink-soft);
      }
      .rubric__head {
        background: var(--wash);
      }
      .rubric__head > span {
        font: 700 0.66rem/1 var(--sans);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--ink-faint);
      }
      .r-axis {
        font: 600 0.84rem/1.3 var(--sans) !important;
        color: var(--ink) !important;
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }
      .sym {
        display: grid;
        place-items: center;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 5px;
        background: var(--porphyry);
        color: #f3e7c9;
        font: 700 0.74rem/1 var(--display);
        flex: none;
      }

      .prov-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.8rem;
        margin-bottom: 0.8rem;
      }
      .prov-grid > div {
        background: var(--wash);
        border: 1px solid var(--line);
        border-radius: 10px;
        padding: 0.9rem;
      }
      .prov-grid p {
        font: 400 0.82rem/1.5 var(--sans);
        color: var(--ink-soft);
        margin: 0.5rem 0 0;
      }
      .tag {
        font: 700 0.62rem/1 var(--sans);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.24rem 0.45rem;
        border-radius: 5px;
      }
      .tag--documented {
        background: rgba(47, 107, 76, 0.16);
        color: #2f6b4c;
      }
      .tag--reported {
        background: rgba(196, 122, 24, 0.18);
        color: #8a5210;
      }
      .tag--speculative {
        background: rgba(120, 120, 130, 0.18);
        color: #5a5a64;
      }

      @media (max-width: 720px) {
        .rubric__row {
          grid-template-columns: 1fr;
          gap: 0.3rem;
        }
        .rubric__head {
          display: none;
        }
        .prov-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class MethodologyComponent {
  readonly open = signal(false);
  readonly rubric: Rubric[] = [
    {
      sym: 'S',
      name: 'Self-harm',
      low: 'No real cost to the actor; symbolic only',
      mid: 'Real but bounded damage to its own interest',
      high: 'Serious to catastrophic, lasting self-defeat',
    },
    {
      sym: 'C',
      name: 'Counter-productive at the time',
      low: 'Few contemporaries objected',
      mid: 'Significant contemporary warnings',
      high: 'Broad, on-the-record consensus then that it was a mistake',
    },
    {
      sym: 'A',
      name: 'Feasible alternative existed',
      low: 'No realistic better path was open',
      mid: 'A better path existed but was costly or contested',
      high: 'An obvious, available, widely-urged alternative was ignored',
    },
    {
      sym: 'Y',
      name: 'Systemic / persistent',
      low: "One person's whim; dies with them",
      mid: 'Partly institutionalised',
      high: 'A party/bureaucracy owns it; persists past one leader',
    },
    {
      sym: 'G',
      name: 'Caligula resonance',
      low: 'No Gaius echo',
      mid: 'Some vanity or spectacle',
      high: 'Textbook Gaius: monuments, spectacle, contempt for institutions, demanded flattery',
    },
  ];
}
