import { Component, computed, input, output, signal } from '@angular/core';

export interface ScatterPoint {
  id: string;
  label: string;
  /** 0–100 on each axis. */
  x: number;
  y: number;
  /** Dot radius driver, 0–100 (e.g. MFI). */
  weight: number;
  band: 'severe' | 'serious' | 'moderate' | 'mild';
  /** Trump folly (default), or a reference marker. */
  kind?: 'trump' | 'tuchman' | 'caligula';
}

/**
 * A quadrant scatter plot. Used as the "folly map": x = self-harm, y = how
 * systemic, dot size = overall index. The quadrants make the article's central
 * question literal — bottom-left "personal & survivable", top-right
 * "systemic & dangerous".
 */
@Component({
  selector: 'app-scatter',
  standalone: true,
  template: `
    <figure class="scatter">
      <svg viewBox="0 0 360 320" role="img" [attr.aria-label]="ariaLabel()">
        <!-- quadrant wash -->
        <rect x="40" y="20" width="150" height="130" class="q q-bl" />
        <rect x="190" y="20" width="150" height="130" class="q q-br" />
        <rect x="40" y="150" width="150" height="130" class="q q-tl" />
        <rect x="190" y="150" width="150" height="130" class="q q-tr" />
        <!-- grid -->
        <line x1="40" y1="280" x2="340" y2="280" class="axis" />
        <line x1="40" y1="20" x2="40" y2="280" class="axis" />
        <line x1="190" y1="20" x2="190" y2="280" class="mid" />
        <line x1="40" y1="150" x2="340" y2="150" class="mid" />
        <!-- quadrant captions -->
        <text x="50" y="35" class="qcap">{{ quadrants().tl }}</text>
        <text x="330" y="35" class="qcap" text-anchor="end">{{ quadrants().tr }}</text>
        <text x="50" y="272" class="qcap">{{ quadrants().bl }}</text>
        <text x="330" y="272" class="qcap" text-anchor="end">{{ quadrants().br }}</text>
        <!-- axis titles -->
        <text x="190" y="305" class="axistitle" text-anchor="middle">{{ xLabel() }} →</text>
        <text x="14" y="150" class="axistitle" text-anchor="middle" transform="rotate(-90 14 150)">{{ yLabel() }} →</text>
        <!-- points -->
        @for (p of points(); track p.id) {
          <g
            class="pt band--{{ p.band }} kind--{{ p.kind || 'trump' }}" [class.hot]="hover() === p.id"
            (mouseenter)="hover.set(p.id)" (mouseleave)="hover.set(null)"
            (click)="select.emit(p.id)" tabindex="0"
            (keydown.enter)="select.emit(p.id)"
          >
            @switch (p.kind) {
              @case ('tuchman') {
                <rect [attr.x]="px(p.x) - rad(p.weight)" [attr.y]="py(p.y) - rad(p.weight)" [attr.width]="rad(p.weight) * 2" [attr.height]="rad(p.weight) * 2" />
              }
              @case ('caligula') {
                <path [attr.d]="diamond(px(p.x), py(p.y), rad(p.weight) + 1)" />
              }
              @default {
                <circle [attr.cx]="px(p.x)" [attr.cy]="py(p.y)" [attr.r]="rad(p.weight)" />
              }
            }
            @if (hover() === p.id) {
              <text [attr.x]="px(p.x)" [attr.y]="py(p.y) - rad(p.weight) - 5" text-anchor="middle" class="ptlabel">{{ p.label }}</text>
            }
          </g>
        }
      </svg>
    </figure>
  `,
  styles: [
    `
      :host { display: block; }
      svg { width: 100%; height: auto; overflow: visible; }
      .q { opacity: 0.5; }
      .q-tr { fill: rgba(155, 28, 28, 0.1); }
      .q-tl { fill: rgba(196, 122, 24, 0.08); }
      .q-br { fill: rgba(196, 122, 24, 0.08); }
      .q-bl { fill: rgba(47, 107, 76, 0.08); }
      .axis { stroke: rgba(0, 0, 0, 0.35); stroke-width: 1.2; }
      .mid { stroke: rgba(0, 0, 0, 0.12); stroke-dasharray: 4 4; }
      .qcap { font: 600 0.52rem/1 var(--sans, sans-serif); fill: var(--ink-faint, #999); letter-spacing: 0.04em; text-transform: uppercase; }
      .axistitle { font: 700 0.58rem/1 var(--sans, sans-serif); fill: var(--ink-soft, #555); letter-spacing: 0.06em; text-transform: uppercase; }
      .pt { cursor: pointer; }
      .pt circle, .pt rect, .pt path { opacity: 0.78; transition: opacity 0.15s ease; stroke: #fff; stroke-width: 1; }
      .pt.hot circle, .pt.hot rect, .pt.hot path { opacity: 1; }
      .pt:focus { outline: none; }
      .pt:focus circle, .pt:focus rect, .pt:focus path { stroke: var(--porphyry, #5b2a6b); stroke-width: 2; }
      .band--severe circle, .band--severe path { fill: #9b1c1c; }
      .band--serious circle, .band--serious path { fill: #c47a18; }
      .band--moderate circle, .band--moderate path { fill: #c9a227; }
      .band--mild circle, .band--mild path { fill: #2f6b4c; }
      .kind--tuchman rect { fill: none; stroke: #2c4f86; stroke-width: 2; opacity: 0.9; }
      .kind--caligula path { stroke: #efe3c6; }
      .kind--caligula.band--severe path { fill: #5b2a6b; }
      .kind--caligula.band--serious path { fill: #6f3a7e; }
      .kind--caligula.band--moderate path { fill: #7d4a8c; }
      .kind--caligula.band--mild path { fill: #8a5a99; }
      .ptlabel { font: 600 0.6rem/1 var(--sans, sans-serif); fill: var(--ink, #222); paint-order: stroke; stroke: #fffdf8; stroke-width: 3; }
    `,
  ],
})
export class ScatterComponent {
  readonly points = input.required<ScatterPoint[]>();
  readonly xLabel = input('Self-harm');
  readonly yLabel = input('Systemic');
  readonly ariaLabel = input('Scatter plot of follies');
  readonly quadrants = input<{ tl: string; tr: string; bl: string; br: string }>({
    tl: 'systemic, low cost',
    tr: 'systemic & costly',
    bl: 'personal, survivable',
    br: 'costly, personal',
  });
  readonly select = output<string>();
  readonly hover = signal<string | null>(null);

  px(x: number) {
    return 40 + (x / 100) * 300;
  }
  py(y: number) {
    return 280 - (y / 100) * 260;
  }
  rad(w: number) {
    return 4 + (w / 100) * 9;
  }
  diamond(cx: number, cy: number, r: number): string {
    return `M ${cx} ${cy - r} L ${cx + r} ${cy} L ${cx} ${cy + r} L ${cx - r} ${cy} Z`;
  }
}
