import { describe, it, expect, beforeEach } from 'vitest';
import { FollyService } from './folly.service';
import { CRITERIA, FOLLIES } from '../data/methodology';
import { CriterionId } from '../data/models';

const equalWeights = Object.fromEntries(CRITERIA.map((c) => [c.id, 1])) as Record<
  CriterionId,
  number
>;

describe('FollyService — March of Folly Index scoring', () => {
  let svc: FollyService;
  beforeEach(() => {
    svc = new FollyService();
  });

  it('scores all-5 as 100 and all-0 as 0 under equal weights', () => {
    const all5 = { selfHarm: 5, counterproductive: 5, alternative: 5, systemic: 5, caligula: 5 };
    const all0 = { selfHarm: 0, counterproductive: 0, alternative: 0, systemic: 0, caligula: 0 };
    expect(svc.scoreRaw(all5, equalWeights)).toBe(100);
    expect(svc.scoreRaw(all0, equalWeights)).toBe(0);
  });

  it('matches the formula 100·Σ(w·s)/(5·Σw) under equal weights', () => {
    // mean(scores)=3 → 3/5*100 = 60
    const scores = { selfHarm: 4, counterproductive: 3, alternative: 2, systemic: 5, caligula: 1 };
    expect(svc.scoreRaw(scores, equalWeights)).toBe(60);
  });

  it('weights actually shift the score toward the up-weighted axis', () => {
    const systemicOnly = {
      selfHarm: 0,
      counterproductive: 0,
      alternative: 0,
      systemic: 5,
      caligula: 0,
    };
    const systemicHeavy = { ...equalWeights, systemic: 10 };
    expect(svc.scoreRaw(systemicOnly, systemicHeavy)).toBeGreaterThan(
      svc.scoreRaw(systemicOnly, equalWeights),
    );
  });

  it('exposes exactly the catalogued follies', () => {
    expect(svc.follies.length).toBe(FOLLIES.length);
  });

  it('scored() is sorted high-to-low and bounded to 0..100', () => {
    const list = svc.scored();
    expect(list.length).toBeGreaterThan(0);
    for (let i = 1; i < list.length; i++) {
      expect(list[i - 1].mfi).toBeGreaterThanOrEqual(list[i].mfi);
    }
    for (const f of list) {
      expect(f.mfi).toBeGreaterThanOrEqual(0);
      expect(f.mfi).toBeLessThanOrEqual(100);
    }
  });

  it('aggregate is bounded and counts the whole catalogue', () => {
    const a = svc.aggregate();
    expect(a.mean).toBeGreaterThanOrEqual(0);
    expect(a.mean).toBeLessThanOrEqual(100);
    expect(a.systemic).toBeGreaterThanOrEqual(0);
    expect(a.systemic).toBeLessThanOrEqual(100);
    expect(a.total).toBe(FOLLIES.length);
  });

  it('the provenance trust-dial removes a class of items, reversibly', () => {
    const before = svc.scored().length;
    svc.toggleProvenance('documented');
    expect(svc.scored().length).toBeLessThan(before);
    svc.toggleProvenance('documented');
    expect(svc.scored().length).toBe(before);
  });

  it('confidence weighting never lifts an item above its base MFI', () => {
    svc.setConfidenceWeighted(true);
    for (const f of svc.scored()) {
      expect(f.mfi).toBeLessThanOrEqual(f.baseMfi);
    }
  });
});
