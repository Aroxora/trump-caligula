import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';

/**
 * The Caligula Window.
 *
 * A perpetual, always-visible countdown to the constitutional end of the second
 * presidential term — noon (12:00 EST) on 20 January 2029, per the 20th
 * Amendment. Framed in the site's OSINT Defense-CAD idiom as a "strategic window
 * of exposure": the finite interval during which America's adversaries can bank
 * on the follies catalogued below, before an election can begin to reverse them.
 * It dovetails with the "view from Beijing" section — the window is precisely the
 * opportunity a patient, long-horizon rival is modelled to exploit.
 *
 * Prerender/hydration note: the readout is time-relative, so it would differ
 * between build time (prerender) and page load and trip a hydration mismatch. To
 * stay hydration-safe it renders an identical "––" skeleton on the server and on
 * the client's first paint (`live` is false), and only fills in real digits
 * inside `afterNextRender` (browser-only, after hydration) — same DOM structure
 * throughout, so no node is rewritten during hydration.
 */
const TERM_END_MS = Date.UTC(2029, 0, 20, 17, 0, 0); // 12:00 EST = 17:00 UTC

const DAY = 86_400_000;
const HOUR = 3_600_000;
const MIN = 60_000;

@Component({
  selector: 'app-countdown',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cad" role="timer" aria-live="off" [attr.aria-label]="ariaLabel()">
      <div class="cad__inner">
        <span class="cad__brand">
          <span class="cad__sigil" aria-hidden="true">⧗</span>
          <span class="cad__label">
            <span class="cad__lead">The Caligula Window</span>
            <span class="cad__sub">strategic window of exposure</span>
          </span>
        </span>

        @if (live() && closed()) {
          <span class="cad__readout cad__readout--done">window closed · term ended</span>
        } @else {
          <span class="cad__readout" aria-hidden="true">
            <span class="u"
              ><b>{{ dDays() }}</b
              ><i>days</i></span
            >
            <span class="sep">:</span>
            <span class="u"
              ><b>{{ dHours() }}</b
              ><i>hrs</i></span
            >
            <span class="sep">:</span>
            <span class="u"
              ><b>{{ dMins() }}</b
              ><i>min</i></span
            >
            <span class="sep">:</span>
            <span class="u u--sec"
              ><b>{{ dSecs() }}</b
              ><i>sec</i></span
            >
          </span>
        }

        <span class="cad__tail"
          >to term's end — the interval America's adversaries can exploit</span
        >
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 60;
      }
      .cad {
        background:
          linear-gradient(
            90deg,
            rgba(255, 222, 0, 0.12),
            transparent 28%,
            transparent 72%,
            rgba(238, 28, 37, 0.22)
          ),
          linear-gradient(180deg, #4a0a0e, #2a0608);
        color: #f3ecdd;
        border-bottom: 1px solid rgba(201, 162, 39, 0.28);
        box-shadow: 0 8px 24px -20px rgba(0, 0, 0, 0.85);
      }
      .cad__inner {
        max-width: 1100px;
        margin: 0 auto;
        height: var(--cad-bar-h);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
        padding: 0 clamp(1rem, 4vw, 3rem);
        font-family: var(--sans);
      }
      .cad__brand {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        min-width: 0;
      }
      .cad__sigil {
        flex: none;
        color: var(--gold);
        font-size: 1.1rem;
        line-height: 1;
        animation: cadpulse 2.6s ease-in-out infinite;
      }
      .cad__label {
        display: flex;
        flex-direction: column;
        line-height: 1.05;
        min-width: 0;
        overflow: hidden;
      }
      .cad__lead {
        font: 700 0.72rem/1 var(--sans);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--gold);
        white-space: nowrap;
      }
      .cad__sub {
        font: 500 0.56rem/1 var(--sans);
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #b9ab8f;
        margin-top: 0.18rem;
        white-space: nowrap;
      }
      .cad__readout {
        display: flex;
        align-items: baseline;
        gap: 0.28rem;
        flex: none;
        font-variant-numeric: tabular-nums;
        font-feature-settings: 'tnum' 1;
      }
      .cad__readout .u {
        display: inline-flex;
        align-items: baseline;
        gap: 0.12rem;
      }
      .cad__readout b {
        font: 700 1.02rem/1 var(--sans);
        color: #fff;
      }
      .cad__readout i {
        font: 600 0.56rem/1 var(--sans);
        font-style: normal;
        color: var(--gold);
        text-transform: uppercase;
      }
      .cad__readout .sep {
        color: rgba(201, 162, 39, 0.5);
        font-weight: 700;
      }
      .cad__readout--done {
        color: #e7b4b4;
        font: 700 0.78rem/1 var(--sans);
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .cad__tail {
        font: 500 0.68rem/1.15 var(--sans);
        color: #9b8e78;
        max-width: 30ch;
        text-align: right;
      }
      @keyframes cadpulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.4;
        }
      }

      /* Keep the readout centred when there is room, brand left, tail right. */
      @media (min-width: 861px) {
        .cad__readout {
          margin: 0 auto;
        }
      }
      @media (max-width: 860px) {
        .cad__tail {
          display: none;
        }
      }
      @media (max-width: 520px) {
        .cad__sub {
          display: none;
        }
        .cad__readout b {
          font-size: 0.94rem;
        }
        .cad__readout i {
          font-size: 0.52rem;
        }
      }
      @media (max-width: 400px) {
        /* On the narrowest phones, drop the brand text so the sigil + readout never overflow. */
        .cad__label {
          display: none;
        }
      }
    `,
  ],
})
export class CountdownComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly now = signal(Date.now());
  /** False on the server and on the client's first paint; true after hydration. */
  protected readonly live = signal(false);

  protected readonly remaining = computed(() => Math.max(0, TERM_END_MS - this.now()));
  protected readonly closed = computed(() => this.now() >= TERM_END_MS);
  protected readonly days = computed(() => Math.floor(this.remaining() / DAY));
  protected readonly hours = computed(() => Math.floor((this.remaining() % DAY) / HOUR));
  protected readonly mins = computed(() => Math.floor((this.remaining() % HOUR) / MIN));
  protected readonly secs = computed(() => Math.floor((this.remaining() % MIN) / 1000));

  // Displayed values: a stable "––" skeleton until live, so the server-rendered
  // and first client render are identical (hydration-safe).
  protected readonly dDays = computed(() => (this.live() ? String(this.days()) : '––'));
  protected readonly dHours = computed(() => (this.live() ? this.pad(this.hours()) : '––'));
  protected readonly dMins = computed(() => (this.live() ? this.pad(this.mins()) : '––'));
  protected readonly dSecs = computed(() => (this.live() ? this.pad(this.secs()) : '––'));

  protected readonly ariaLabel = computed(() => {
    if (!this.live()) {
      return 'The Caligula Window — strategic window of exposure until the end of the second presidential term on 20 January 2029.';
    }
    return this.closed()
      ? 'The Caligula window has closed: the second presidential term has ended.'
      : `The Caligula window — strategic window of exposure: ${this.days()} days, ${this.hours()} hours and ${this.mins()} minutes until the end of the second presidential term on 20 January 2029.`;
  });

  constructor() {
    // Browser-only ticking; no work during prerender. Cleaned up on destroy.
    afterNextRender(() => {
      this.live.set(true);
      this.now.set(Date.now());
      const id = setInterval(() => {
        this.now.set(Date.now());
        if (this.closed()) clearInterval(id); // freeze ticking once the window closes
      }, 1000);
      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }

  protected pad(n: number): string {
    return n < 10 ? '0' + n : String(n);
  }
}
