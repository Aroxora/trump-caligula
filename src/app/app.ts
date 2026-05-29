import { Component, HostListener, signal } from '@angular/core';
import { AnnotatedComponent } from './sections/annotated.component';
import { CaligulaComponent } from './sections/caligula.component';
import { ComparisonComponent } from './sections/comparison.component';
import { CounterargumentComponent } from './sections/counterargument.component';
import { FollyIndexComponent } from './sections/folly-index.component';
import { GlossaryComponent } from './sections/glossary.component';
import { QuizComponent } from './sections/quiz.component';
import { RomeComponent } from './sections/rome.component';
import { SandboxComponent } from './sections/sandbox.component';
import { SourcesComponent } from './sections/sources.component';
import { ThesisComponent } from './sections/thesis.component';
import { TimelineComponent } from './sections/timeline.component';
import { TuchmanComponent } from './sections/tuchman.component';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ThesisComponent,
    AnnotatedComponent,
    TuchmanComponent,
    FollyIndexComponent,
    ComparisonComponent,
    CaligulaComponent,
    RomeComponent,
    TimelineComponent,
    CounterargumentComponent,
    SandboxComponent,
    QuizComponent,
    GlossaryComponent,
    SourcesComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly nav: NavItem[] = [
    { id: 'index', label: 'Folly Index' },
    { id: 'thesis', label: 'The argument' },
    { id: 'parallels', label: 'Parallels' },
    { id: 'caligula', label: 'Caligula' },
    { id: 'rome', label: 'Rome' },
    { id: 'counter', label: 'Counterpoint' },
    { id: 'sandbox', label: 'Try it' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'sources', label: 'Sources' },
  ];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  jump(id: string): void {
    this.menuOpen.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
