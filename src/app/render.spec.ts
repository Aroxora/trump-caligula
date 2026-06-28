import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { BeijingComponent } from './sections/beijing.component';
import { ForecastComponent } from './sections/forecast.component';
import { CountdownComponent } from './shared/countdown.component';
import { PRC_PLANKS } from './data/prc';
import { FORECAST_PROJECTIONS } from './data/forecast';

describe('BeijingComponent — the PRC/PLA viewpoint renders', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [BeijingComponent] }));

  it('renders the window callout, every plank, the PLA section, the contestable panel and the bibliography', () => {
    const fixture = TestBed.createComponent(BeijingComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.bj__window'), 'window callout').toBeTruthy();
    expect(el.querySelectorAll('.plank').length, 'plank count').toBe(PRC_PLANKS.length);
    expect(el.querySelector('.bj__panel--pla'), 'PLA section').toBeTruthy();
    expect(el.querySelector('.bj__panel--against'), 'contestable panel').toBeTruthy();
    expect(el.querySelector('.bj__biblio'), 'bibliography').toBeTruthy();
    // The synthesis plank renders the slogan (proves interpolation, not just structure).
    expect(el.textContent ?? '').toContain('东升西降');
    fixture.destroy();
  });
});

describe('ForecastComponent — the 900-day forecast renders', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [ForecastComponent] }));

  it('renders the how-to-read note, the fiscal capstone, and one card per projection', () => {
    const fixture = TestBed.createComponent(ForecastComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.fc__note'), 'how-to-read note').toBeTruthy();
    expect(el.querySelector('.fc__panel--fiscal'), 'fiscal capstone').toBeTruthy();
    expect(el.querySelectorAll('.proj').length, 'projection cards').toBe(FORECAST_PROJECTIONS.length);
    // The three probability bands are legible in the legend.
    expect(el.querySelectorAll('.fc__legend .prob').length).toBe(3);
    fixture.destroy();
  });
});

describe('CountdownComponent — the Caligula Window renders', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [CountdownComponent] }));

  it('exposes a timer role and a four-unit readout before the term ends', () => {
    const fixture = TestBed.createComponent(CountdownComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[role="timer"]'), 'role=timer').toBeTruthy();
    expect(el.querySelector('.cad__lead')?.textContent ?? '').toContain('Caligula Window');
    // days : hrs : min : sec — the term ends in 2029, so the live readout (not the "closed" state).
    expect(el.querySelectorAll('.cad__readout .u').length).toBe(4);
    fixture.destroy(); // triggers DestroyRef.onDestroy → clearInterval, no leaked timer
  });
});
