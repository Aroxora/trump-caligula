import { describe, it, expect } from 'vitest';
import {
  FORECAST_EPISTEMIC,
  FORECAST_FISCAL_CAPSTONE,
  FORECAST_LEDE,
  FORECAST_PROJECTIONS,
  PROBABILITY_META,
} from './forecast';
import { DOMAINS } from './models';

const RELIABILITY = new Set([
  'primary-hostile',
  'primary',
  'modern-scholarship',
  'journalism',
  'official-record',
]);
const PROBS = new Set(Object.keys(PROBABILITY_META));
const WINDOW_SORTS = new Set([2026.5, 2027, 2028, 2029]);

describe('forecast — the Caligula Window projections', () => {
  it('ships a populated, fully-framed forecast', () => {
    expect(FORECAST_PROJECTIONS.length).toBeGreaterThan(0);
    expect(FORECAST_LEDE.length).toBeGreaterThan(0);
    expect(FORECAST_EPISTEMIC.length).toBeGreaterThan(0);
    expect(FORECAST_FISCAL_CAPSTONE.length).toBeGreaterThan(0);
  });

  it('projection ids are unique', () => {
    const ids = FORECAST_PROJECTIONS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every projection is well-formed: domain, probability, window, indicators, parallel, sources', () => {
    for (const p of FORECAST_PROJECTIONS) {
      expect(DOMAINS, `${p.id} domain`).toContain(p.domain);
      expect(PROBS.has(p.probability), `${p.id} probability ${p.probability}`).toBe(true);
      expect(WINDOW_SORTS.has(p.windowSort), `${p.id} windowSort ${p.windowSort}`).toBe(true);
      expect(p.title.length, `${p.id} title`).toBeGreaterThan(0);
      expect(p.thesis.length, `${p.id} thesis`).toBeGreaterThan(0);
      expect(p.mechanism.length, `${p.id} mechanism`).toBeGreaterThan(0);
      expect(p.caligulaParallel.length, `${p.id} caligulaParallel`).toBeGreaterThan(0);
      expect(p.leadingIndicators.length, `${p.id} indicators`).toBeGreaterThan(0);
      expect(p.sources.length, `${p.id} sources`).toBeGreaterThan(0);
    }
  });

  it('every projection source uses a valid reliability type', () => {
    for (const p of FORECAST_PROJECTIONS)
      for (const s of p.sources)
        expect(RELIABILITY.has(s.type), `${p.id}: ${s.citation}`).toBe(true);
  });

  it('disconfirmers are pure completing clauses (the UI prepends "This would NOT be folly if")', () => {
    for (const p of FORECAST_PROJECTIONS) {
      expect(p.disconfirmer.length, p.id).toBeGreaterThan(0);
      expect(/^\s*this would/i.test(p.disconfirmer), `${p.id} self-prefixes`).toBe(false);
    }
  });

  it('every probability band in use is documented in PROBABILITY_META', () => {
    for (const p of FORECAST_PROJECTIONS)
      expect(PROBABILITY_META[p.probability], p.probability).toBeDefined();
  });
});
