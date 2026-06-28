import { describe, it, expect } from 'vitest';
import { CRITERIA, FOLLIES, REF_ITEMS } from './methodology';
import { DOMAINS, CriterionId } from './models';
import { SOURCES, SOURCE_MAP } from './sources';
import { DIMENSIONS, TIMELINE, QUIZ } from './content';
import { GLOSSARY } from './glossary';

describe('data integrity — the catalogue', () => {
  it('every folly domain is one of the declared DOMAINS', () => {
    for (const f of FOLLIES) {
      expect(DOMAINS, `folly "${f.id}" has unknown domain "${f.domain}"`).toContain(f.domain);
    }
  });

  it('every folly and reference item scores all five axes within 0..5', () => {
    const axes = CRITERIA.map((c) => c.id) as CriterionId[];
    for (const item of [...FOLLIES, ...REF_ITEMS]) {
      for (const ax of axes) {
        const v = item.scores[ax];
        expect(typeof v, `${item.id}.${ax}`).toBe('number');
        expect(v).toBeGreaterThanOrEqual(0);
        expect(v).toBeLessThanOrEqual(5);
      }
    }
  });

  it('folly ids are unique', () => {
    const ids = FOLLIES.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every folly carries at least one inline source', () => {
    for (const f of FOLLIES) {
      expect(f.sources.length, `folly "${f.id}" has no sources`).toBeGreaterThan(0);
    }
  });
});

describe('data integrity — sources & citations', () => {
  it('source keys are unique and resolvable via SOURCE_MAP', () => {
    const keys = SOURCES.map((s) => s.key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const k of keys) expect(SOURCE_MAP[k]).toBeDefined();
  });

  it('every citation key used in dimensions/timeline/quiz resolves in SOURCE_MAP', () => {
    const used = new Set<string>();
    for (const d of DIMENSIONS) {
      d.caligula.forEach((c) => c.cites.forEach((k) => used.add(k)));
      d.trump.forEach((c) => c.cites.forEach((k) => used.add(k)));
    }
    for (const t of TIMELINE) t.cites.forEach((k) => used.add(k));
    for (const q of QUIZ) q.cites.forEach((k) => used.add(k));
    const missing = [...used].filter((k) => !SOURCE_MAP[k]);
    expect(missing, `unresolved citation keys: ${missing.join(', ')}`).toEqual([]);
  });
});

describe('data integrity — glossary', () => {
  it('glossary terms are unique and fully populated', () => {
    const terms = GLOSSARY.map((g) => g.term);
    expect(new Set(terms).size).toBe(terms.length);
    for (const g of GLOSSARY) {
      expect(g.definition.length, `"${g.term}" missing definition`).toBeGreaterThan(0);
      expect(g.relevance.length, `"${g.term}" missing relevance`).toBeGreaterThan(0);
    }
  });
});
