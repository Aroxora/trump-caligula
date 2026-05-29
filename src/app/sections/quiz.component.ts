import { Component, computed, signal } from '@angular/core';
import { QUIZ } from '../data/content';
import { track } from '../core/firebase';
import { Subject } from '../data/models';
import { CiteComponent } from '../shared/cite.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CiteComponent],
  template: `
    <div class="quiz">
      <header class="quiz__head">
        <p class="eyebrow">Test yourself</p>
        <h2>Caligula, or Trump?</h2>
        <p class="lede">
          Six claims, each verifiably true of one man. The point isn't the gotcha — it's how often
          the line is genuinely hard to draw, and how often it isn't.
        </p>
      </header>

      <div class="scoreline">
        <span>Answered <strong>{{ answered() }}</strong>/{{ items.length }}</span>
        <span>Correct <strong>{{ correct() }}</strong></span>
        <button class="reset" (click)="reset()">↺ Reset</button>
      </div>

      <ol class="qs">
        @for (q of items; track q.id) {
          <li class="q" [class.done]="picks()[q.id]">
            <p class="q__prompt">{{ q.prompt }}</p>
            <div class="q__btns">
              <button
                class="ans ans--caligula"
                [class.right]="picks()[q.id] && q.answer === 'caligula'"
                [class.wrong]="picks()[q.id] === 'caligula' && q.answer !== 'caligula'"
                [disabled]="!!picks()[q.id]"
                (click)="pick(q.id, 'caligula', q.answer)"
              >Caligula</button>
              <button
                class="ans ans--trump"
                [class.right]="picks()[q.id] && q.answer === 'trump'"
                [class.wrong]="picks()[q.id] === 'trump' && q.answer !== 'trump'"
                [disabled]="!!picks()[q.id]"
                (click)="pick(q.id, 'trump', q.answer)"
              >Trump</button>
            </div>
            @if (picks()[q.id]) {
              <div class="q__explain">
                <p>
                  <strong>{{ picks()[q.id] === q.answer ? '✓ Correct.' : '✗ Not quite.' }}</strong>
                  {{ q.explain }}
                </p>
                <app-cite [keys]="q.cites" />
              </div>
            }
          </li>
        }
      </ol>
    </div>
  `,
  styles: [
    `
      :host { display: block; }
      .quiz__head { max-width: 60ch; margin-bottom: 1.2rem; }
      .eyebrow { font: 700 0.72rem/1 var(--sans); letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-deep); margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.02rem/1.6 var(--serif); color: var(--ink-soft); }
      .scoreline { display: flex; align-items: center; gap: 1.4rem; padding: 0.8rem 1.1rem; background: var(--surface); border: 1px solid var(--line); border-radius: 10px; margin-bottom: 1.2rem; font: 500 0.92rem/1 var(--sans); color: var(--ink-soft); }
      .scoreline strong { color: var(--ink); font-size: 1.05rem; }
      .reset { margin-left: auto; background: none; border: 1px solid var(--line); color: var(--ink-soft); font: 600 0.8rem/1 var(--sans); padding: 0.45rem 0.8rem; border-radius: 8px; cursor: pointer; }
      .qs { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.9rem; }
      .q { background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 1.2rem; }
      .q__prompt { font: 500 1.05rem/1.45 var(--display); color: var(--ink); margin: 0 0 1rem; }
      .q__btns { display: flex; gap: 0.7rem; }
      .ans { flex: 1; padding: 0.7rem; border-radius: 9px; border: 1.5px solid var(--line); background: var(--bg); cursor: pointer; font: 600 0.95rem/1 var(--sans); color: var(--ink); transition: all 0.14s ease; }
      .ans--caligula:hover:not(:disabled) { border-color: var(--porphyry); color: var(--porphyry); }
      .ans--trump:hover:not(:disabled) { border-color: #9b1c1c; color: #9b1c1c; }
      .ans:disabled { cursor: default; opacity: 0.65; }
      .ans.right { background: #2f6b4c; border-color: #2f6b4c; color: #fff; opacity: 1; }
      .ans.wrong { background: #9b1c1c; border-color: #9b1c1c; color: #fff; opacity: 1; }
      .q__explain { margin-top: 1rem; padding-top: 0.9rem; border-top: 1px dashed var(--line); animation: fade 0.25s ease; }
      .q__explain p { font: 400 0.9rem/1.55 var(--sans); color: var(--ink-soft); margin: 0 0 0.5rem; }
      @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
    `,
  ],
})
export class QuizComponent {
  readonly items = QUIZ;
  readonly picks = signal<Record<number, Subject | undefined>>({});

  readonly answered = computed(() => Object.values(this.picks()).filter(Boolean).length);
  readonly correct = computed(() =>
    this.items.filter((q) => this.picks()[q.id] === q.answer).length,
  );

  pick(id: number, choice: Subject, answer: Subject): void {
    if (this.picks()[id]) return;
    this.picks.update((p) => ({ ...p, [id]: choice }));
    track('quiz_answer', { question: id, choice, correct: choice === answer });
  }

  reset(): void {
    this.picks.set({});
  }
}
