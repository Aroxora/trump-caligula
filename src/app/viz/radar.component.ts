import { Component, computed, input } from '@angular/core';

export interface RadarAxis {
  label: string;
  symbol: string;
}
export interface RadarSeries {
  name: string;
  color: string;
  /** Values aligned 1:1 with axes, each in [0, max]. */
  values: number[];
  fill?: boolean;
}

/**
 * A small, dependency-free polygon radar chart. Generic over any number of
 * axes and series, so it can render a single folly's five-axis profile or
 * overlay several profiles for comparison.
 */
@Component({
  selector: 'app-radar',
  standalone: true,
  template: `
    <svg [attr.viewBox]="'0 0 ' + size() + ' ' + size()" role="img" [attr.aria-label]="ariaLabel()">
      <!-- rings -->
      @for (r of rings(); track r) {
        <polygon [attr.points]="ringPoints(r)" class="ring" />
      }
      <!-- spokes + labels -->
      @for (a of axes(); track $index) {
        <line class="spoke" [attr.x1]="c()" [attr.y1]="c()" [attr.x2]="spoke($index).x" [attr.y2]="spoke($index).y" />
        <circle class="node" [attr.cx]="spoke($index).x" [attr.cy]="spoke($index).y" r="2" />
        <text
          class="axislabel" [attr.x]="label($index).x" [attr.y]="label($index).y"
          [attr.text-anchor]="label($index).anchor"
        >{{ a.symbol }}</text>
      }
      <!-- series -->
      @for (s of series(); track s.name) {
        <polygon
          [attr.points]="seriesPoints(s)"
          [attr.stroke]="s.color"
          [attr.fill]="s.fill === false ? 'none' : s.color"
          [attr.fill-opacity]="s.fill === false ? 0 : 0.16"
          class="series"
        />
        @for (v of s.values; track $index) {
          <circle [attr.cx]="point($index, v).x" [attr.cy]="point($index, v).y" r="3" [attr.fill]="s.color" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host { display: block; }
      svg { width: 100%; height: auto; overflow: visible; }
      .ring { fill: none; stroke: rgba(0, 0, 0, 0.08); }
      .spoke { stroke: rgba(0, 0, 0, 0.12); }
      .node { fill: rgba(0, 0, 0, 0.2); }
      .axislabel { font: 700 0.6rem/1 var(--display, serif); fill: var(--ink-faint, #888); }
      .series { stroke-width: 2; transition: all 0.3s ease; }
    `,
  ],
})
export class RadarComponent {
  readonly axes = input.required<RadarAxis[]>();
  readonly series = input.required<RadarSeries[]>();
  readonly max = input(5);
  readonly size = input(220);
  readonly ariaLabel = input('Radar chart');

  readonly c = computed(() => this.size() / 2);
  private readonly r = computed(() => this.size() / 2 - 26);
  readonly rings = computed(() => [0.25, 0.5, 0.75, 1]);

  private angle(i: number): number {
    return (-90 + (i * 360) / this.axes().length) * (Math.PI / 180);
  }
  private at(i: number, radius: number) {
    const a = this.angle(i);
    return { x: this.c() + radius * Math.cos(a), y: this.c() + radius * Math.sin(a) };
  }

  point(i: number, value: number) {
    return this.at(i, (value / this.max()) * this.r());
  }
  spoke(i: number) {
    return this.at(i, this.r());
  }
  label(i: number) {
    const p = this.at(i, this.r() + 12);
    const cos = Math.cos(this.angle(i));
    const anchor = cos > 0.3 ? 'start' : cos < -0.3 ? 'end' : 'middle';
    return { ...p, anchor };
  }
  ringPoints(scale: number): string {
    return this.axes()
      .map((_, i) => {
        const p = this.at(i, scale * this.r());
        return `${p.x},${p.y}`;
      })
      .join(' ');
  }
  seriesPoints(s: RadarSeries): string {
    return s.values
      .map((v, i) => {
        const p = this.point(i, v);
        return `${p.x},${p.y}`;
      })
      .join(' ');
  }
}
