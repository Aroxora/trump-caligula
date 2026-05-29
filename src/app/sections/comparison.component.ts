import { Component, signal } from '@angular/core';
import { DIMENSIONS } from '../data/content';
import { CiteComponent } from '../shared/cite.component';

@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [CiteComponent],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss',
})
export class ComparisonComponent {
  readonly dimensions = DIMENSIONS;
  readonly active = signal<string>(DIMENSIONS[0].id);

  select(id: string): void {
    this.active.set(id);
  }

  get current() {
    return this.dimensions.find((d) => d.id === this.active())!;
  }
}
