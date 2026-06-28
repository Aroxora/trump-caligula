import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { AnnotatedComponent } from './sections/annotated.component';
import { CaligulaComponent } from './sections/caligula.component';
import { ComparisonComponent } from './sections/comparison.component';
import { CounterargumentComponent } from './sections/counterargument.component';
import { BeijingComponent } from './sections/beijing.component';
import { CountdownComponent } from './shared/countdown.component';
import { ForecastComponent } from './sections/forecast.component';
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
  selector: 'app-home',
  standalone: true,
  imports: [
    CountdownComponent,
    ThesisComponent,
    AnnotatedComponent,
    TuchmanComponent,
    FollyIndexComponent,
    ComparisonComponent,
    CaligulaComponent,
    RomeComponent,
    TimelineComponent,
    CounterargumentComponent,
    BeijingComponent,
    ForecastComponent,
    SandboxComponent,
    QuizComponent,
    GlossaryComponent,
    SourcesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {
  readonly nav: NavItem[] = [
    { id: 'index', label: 'Folly Index' },
    { id: 'thesis', label: 'The argument' },
    { id: 'parallels', label: 'Parallels' },
    { id: 'caligula', label: 'Caligula' },
    { id: 'rome', label: 'Rome' },
    { id: 'counter', label: 'Counterpoint' },
    { id: 'beijing', label: "Beijing's view" },
    { id: 'forecast', label: 'The 900 days' },
    { id: 'sandbox', label: 'Try it' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'sources', label: 'Sources' },
  ];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  /** The nav id currently in view, for scroll-spy + aria-current. */
  readonly active = signal<string>('index');

  private readonly destroyRef = inject(DestroyRef);
  private readonly burger = viewChild<ElementRef<HTMLButtonElement>>('burger');
  private ticking = false;

  constructor() {
    // Browser-only: a passive, rAF-coalesced scroll handler (replacing a per-event
    // @HostListener that did 10 getBoundingClientRect reads on every scroll tick),
    // plus one initial scroll-spy pass so the active section is correct on load.
    afterNextRender(() => {
      const onScroll = () => {
        if (this.ticking) return;
        this.ticking = true;
        requestAnimationFrame(() => {
          this.ticking = false;
          this.scrolled.set(window.scrollY > 40);
          this.updateActive();
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
      this.updateActive();
    });
  }

  /** Close the mobile menu on Escape and return focus to the toggle. */
  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu(true);
  }

  private closeMenu(returnFocus = false): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    if (returnFocus) this.burger()?.nativeElement.focus();
  }

  private updateActive(): void {
    const probe = window.scrollY + 140; // clear the countdown bar + sticky nav
    let current = this.nav[0].id;
    for (const n of this.nav) {
      const el = document.getElementById(n.id);
      if (el && el.getBoundingClientRect().top + window.scrollY <= probe) current = n.id;
    }
    this.active.set(current);
  }

  jump(id: string): void {
    const el = document.getElementById(id);
    if (!el) {
      console.warn('[nav] section not found:', id);
      return;
    }
    this.menuOpen.set(false);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
