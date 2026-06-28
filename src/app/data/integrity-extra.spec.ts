import { describe, it, expect } from 'vitest';
import { FollyService } from '../core/folly.service';
import { FOLLIES } from './methodology';
import { PRC_BIBLIOGRAPHY, PRC_PLA_SECTION, PRC_PLANKS } from './prc';

const RELIABILITY = new Set([
  'primary-hostile',
  'primary',
  'modern-scholarship',
  'journalism',
  'official-record',
]);

describe('folly metadata invariants', () => {
  const svc = new FollyService();
  const eras = new Set(['first-term', 'second-term', 'global-backdrop']);

  it('every folly has a valid era', () => {
    for (const f of FOLLIES) expect(eras.has(f.era), `${f.id}: ${f.era}`).toBe(true);
  });

  it('confidence, when present, sits within 0..1', () => {
    for (const f of FOLLIES) {
      if (f.confidence !== undefined) {
        expect(f.confidence, f.id).toBeGreaterThanOrEqual(0);
        expect(f.confidence, f.id).toBeLessThanOrEqual(1);
      }
    }
  });

  it('postCutoff, when present, is a boolean', () => {
    for (const f of FOLLIES) {
      if (f.postCutoff !== undefined) expect(typeof f.postCutoff, f.id).toBe('boolean');
    }
  });

  it('every inline folly source uses a valid reliability type', () => {
    for (const f of FOLLIES) {
      for (const s of f.sources)
        expect(RELIABILITY.has(s.type), `${f.id}: ${s.citation}`).toBe(true);
    }
  });

  it('resolved disconfirmers are pure completing clauses (the template prepends "This would not be folly if")', () => {
    for (const f of svc.follies) {
      if (f.disconfirmer) {
        expect(f.disconfirmer.length, f.id).toBeGreaterThan(0);
        // Guards the L0-class bug: a disconfirmer must not re-include the "This would …" frame.
        expect(/^\s*this would/i.test(f.disconfirmer), `${f.id} self-prefixes`).toBe(false);
      }
    }
  });
});

describe('PRC / Beijing viewpoint data', () => {
  it('every decision matrix has a domain, exposure summary, key judgment, watch signals, options and sources', () => {
    expect(PRC_PLANKS.length).toBeGreaterThan(0);
    for (const dm of PRC_PLANKS) {
      expect(dm.domain.length, dm.id).toBeGreaterThan(0);
      expect(dm.exposureSummary.length, dm.id).toBeGreaterThan(0);
      expect(dm.keyJudgment.length, dm.id).toBeGreaterThan(0);
      expect(dm.watchSignals.length, dm.id).toBeGreaterThan(0);
      expect(dm.options.length, dm.id).toBeGreaterThanOrEqual(1);
      expect(dm.sources.length, dm.id).toBeGreaterThan(0);
    }
  });

  it('the PLA section and the bibliography are populated', () => {
    expect(PRC_PLA_SECTION.title.length).toBeGreaterThan(0);
    expect(PRC_PLA_SECTION.body.length).toBeGreaterThan(0);
    expect(PRC_PLA_SECTION.sources.length).toBeGreaterThan(0);
    expect(PRC_BIBLIOGRAPHY.length).toBeGreaterThan(0);
  });

  it('all PRC sources use a valid reliability type', () => {
    const all = [
      ...PRC_PLANKS.flatMap((p) => p.sources),
      ...PRC_PLA_SECTION.sources,
      ...PRC_BIBLIOGRAPHY,
    ];
    for (const s of all) expect(RELIABILITY.has(s.type), s.citation).toBe(true);
  });
});
