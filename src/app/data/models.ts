// Domain models for the Trump / Caligula comparison.
// Every claim carries a citation key resolvable against SOURCES.

export type Subject = 'caligula' | 'trump';

export interface Citation {
  key: string;
  /** Short label shown in the UI, e.g. "Suetonius, Caligula 22". */
  label: string;
  /** Full bibliographic reference. */
  reference: string;
  /** Optional external URL. */
  url?: string;
  /** Reliability flag — historians treat the ancient sources with caution. */
  reliability: 'primary-hostile' | 'primary' | 'modern-scholarship' | 'journalism' | 'official-record';
}

export interface SideClaim {
  /** Plain-language claim. */
  text: string;
  /** Citation keys backing the claim. */
  cites: string[];
  /** Optional scholarly caveat (e.g. anecdote from a hostile source). */
  caveat?: string;
}

export interface Dimension {
  id: string;
  /** Theme drawn from the Economist article. */
  title: string;
  /** Roman/Latin motif label. */
  motif: string;
  /** One-line framing of what is being compared. */
  premise: string;
  /** Verbatim hook from the Economist article tying the theme together. */
  articleHook: string;
  caligula: SideClaim[];
  trump: SideClaim[];
  /** Editorial verdict on how tight the parallel actually is, 0–100. */
  parallelStrength: number;
  /** Honest note on where the analogy strains. */
  contrast: string;
}

export interface TimelineEvent {
  subject: Subject | 'both';
  /** Display date. */
  date: string;
  /** Sortable numeric year (negative not needed here). */
  sortYear: number;
  title: string;
  detail: string;
  cites: string[];
}

export interface QuizItem {
  id: number;
  prompt: string;
  answer: Subject;
  /** Explanation revealed after answering. */
  explain: string;
  cites: string[];
}

// ---------------------------------------------------------------------------
// Failure ("March of Folly") methodology
// ---------------------------------------------------------------------------

/**
 * Provenance grades each individual failure so the site never blurs the line
 * between the documented record and the speculative/satirical. Required for
 * the project's "fully accurate" standard.
 */
export type Provenance =
  | 'documented' // multiply sourced, on the record
  | 'reported' // asserted by reporting / officials, contested or developing
  | 'speculative'; // floated, rumoured, satirical, or forward-dated scenario

/** The five scoring criteria of the Folly Index. */
export type CriterionId = 'selfHarm' | 'counterproductive' | 'alternative' | 'systemic' | 'caligula';

export interface Criterion {
  id: CriterionId;
  symbol: string; // single-letter used in the formula
  name: string;
  /** What a high score means. */
  meaning: string;
  /** The article / Tuchman lineage of this criterion. */
  provenance: string;
  defaultWeight: number; // 0–1, weights are renormalised in the UI
}

export type SourceType =
  | 'primary-hostile'
  | 'primary'
  | 'modern-scholarship'
  | 'journalism'
  | 'official-record';

/** An inline citation carried directly on a claim (real, specific reference). */
export interface InlineSource {
  citation: string;
  type: SourceType;
}

export interface Folly {
  id: string;
  title: string;
  domain: string; // foreign-policy, military, economy-trade, institutions-rule-of-law…
  era: 'first-term' | 'second-term' | 'global-backdrop';
  provenance: Provenance;
  /** Editor's confidence in the grading, 0–1. */
  confidence?: number;
  /** One- or two-sentence summary of the failure. */
  summary: string;
  /** The concrete self-harm: who pays, and how. */
  cost: string;
  /** The Caligulan echo — explicit link to the emperor's playbook. */
  caligulaParallel: string;
  /** Why this provenance grade (transparency). */
  reliabilityNote?: string;
  /** A specific caveat on what remains unverified. */
  caveat?: string;
  /** "This would NOT be folly if…" — a falsification prompt. */
  disconfirmer?: string;
  /** Operative events post-date the Jan 2026 knowledge cutoff. */
  postCutoff?: boolean;
  /** Conflict of interest to disclose in the UI. */
  coi?: string;
  /** Physics/CAD engineering cross-check for defense "systems". */
  engineering?: { note: string; sources: InlineSource[] };
  /** Scores 0–5 against each criterion. */
  scores: Record<CriterionId, number>;
  /** Real, specific sources backing the item. */
  sources: InlineSource[];
}

/** A historical/comparative item scored on the same axes (calibration & symmetry). */
export interface RefItem {
  id: string;
  title: string;
  kind: 'tuchman' | 'caligula';
  blurb: string;
  scores: Record<CriterionId, number>;
  sources: InlineSource[];
}

