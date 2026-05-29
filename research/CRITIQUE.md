# Completeness Critique — Caligula Index Research Corpus

_Reviewer: completeness critic. Date: 2026-05-29. Scope: the 6 raw + 5 verified JSON files in
`research/raw` and `research/verified`, read against the existing Angular site
(`src/app`), which already ships an MFI scoring engine, radar/scatter viz, weight sandbox,
quiz, timeline, comparison, counterargument, glossary and sources sections._

---

## 1. What the corpus does well (the bar it has already cleared)

- **Epistemic hygiene is the corpus's standout strength.** Every Caligula claim is graded
  (`primary-hostile` / `primary` / `modern-scholarship`), every Trump folly carries a
  `provenance` (documented/reported/speculative), a `confidence` float, a `caveat`, and a
  `reliabilityNote`. The raw→verified diff shows the verification pass doing real work:
  downgrading `anthropic-dod-blacklist` from documented→reported, cutting its and the
  battleship's scores, hedging the Suetonius 160,000-sacrifices figure as "said to have
  been," and removing the unsupported "30 senators executed" and "classic example" claims.
  This is unusually disciplined source-handling for an advocacy-adjacent topic.
- **The disanalogy file is the intellectual backbone.** `counterargument.json` is stronger
  than the indictment: it correctly flags that Tuchman _herself excludes single-ruler
  misgovernment_ from "folly," which is a near-fatal objection to the whole site premise that
  the corpus admirably refuses to bury. The steelman/critique pairing is genuinely balanced.
- **The Caligula material reflects current scholarship** (Winterling's "calculated
  humiliation," Barrett, Beard's "It was satire," Woods on the seashells), not the cartoon
  "mad emperor." The historiography-problem theme is the right closing move.

## 2. Factual gaps and thin spots

1. **The triggering Economist column is unverified — and the whole site is built on it.** Both
   `tuchman.json` (confidence 0.3) and the README assert a 5 May 2026 Economist column
   ("America must hope Donald Trump is not a new Caligula") that the research could not
   locate. This is the single largest integrity risk: the centrepiece frame rests on a
   source graded "speculative." It must be either (a) sourced for real, or (b) reframed
   on-site as "a column-style framing we construct," not "the column."
2. **Caligula's MFI scores do not exist.** The site scores 18 Trump follies on five axes but
   there is no parallel scored catalogue of _Caligula's_ acts (the Jerusalem statue, the
   maiestas revival, the Baiae bridge, the treasury exhaustion). The "caligula" axis is a
   resonance rating of Trump items, not a symmetric measurement. The comparison is therefore
   one-directional — a real analytical gap given the site's name.
3. **The four Tuchman case studies are described but never scored on the MFI.** The index's
   own yardstick is never validated against Troy, the Renaissance popes, Britain-loses-
   America, and Vietnam — the canonical follies it claims to operationalise. Scoring them is
   the obvious calibration check and it is missing.
4. **Trump corpus skews second-term and overweights spectacle.** 17 of 18 follies are
   second-term; the first term is a single consolidated baseline entry. Domains are
   uneven (foreign-policy/institutions/military have 3 each; economy-trade, immigration,
   environment have 1 each). High-`caligula` / low-`selfHarm` vanity items (gilded Oval,
   parade, battleship) are vivid but are the _weakest_ as Tuchman-folly — they pull the
   visual narrative toward pageantry over consequence.
5. **No base rate / control group.** Nothing scores a _non-Trump_ modern leader (a Biden,
   Obama, or Bush decision, or a foreign leader) on the same axes. Without a control the
   reader cannot tell whether high MFI scores are "Trump" or just "any presidency under
   adversarial scoring." This is the most important missing piece for credibility.
6. **Rome→America thread is orphaned.** `rome-america.json` (Polybius, mixed government,
   Cincinnatus, Gibbon, Watts, the "Are We Rome?" caution) is rich but only loosely tied to
   the folly mechanics. The founders explicitly feared the _demagogue-to-tyrant_ path
   (Hamilton, Federalist 1) — a systemic-erosion narrative that the corpus never connects to
   the `systemic` axis it already measures.
7. **Glossary/presets lack a verified counterpart.** `glossary-presets.json` exists only in
   `raw/`. It is low-risk (definitions, not claims), but the five weighting presets
   ("Tuchman purist," "skeptic," "defender," etc.) embed editorial judgments that were never
   run through the verification pass.

## 3. Weak or over-claimed items

- **`iran-war-2026-epic-fury` (selfHarm 4, confidence 0.55, post-cutoff).** This is the
  highest-stakes folly and the least verifiable — entirely post-cutoff, partly White
  House/CENTCOM-sourced. Scoring it a 4 on self-harm while it is "reported" risks anchoring
  the whole index on contested events. Recommend it be visually quarantined (see feature 4).
- **`trump-class-battleship` and `anthropic-dod-blacklist`** are correctly downgraded, but
  both still carry `caligula: 3–4`, which lets thin/contested items contribute meaningfully
  to the "resonance" story. The Anthropic item also carries a **conflict-of-interest** (the
  author's own organisation) that is disclosed in the JSON but should be surfaced _in the UI_.
- **Vanity-axis inflation.** `gilded-oval-self-imagery` and `military-parade-birthday` score
  `caligula: 5` but `selfHarm: 1`. Under the "critic" preset (caligula weight 3.0) these
  jump the ranking despite near-zero consequence — exactly the "flatter the analogist, teach
  little" failure mode the counterargument file warns against. The site should show this
  tension, not smooth it over.
- **Caligula parallels lean on single hostile anecdotes.** The battleship→Nemi-ships and
  press-suits→"burned a playwright alive" links are honestly flagged as contested, but they
  are the emotional hooks; a reader skimming parallels absorbs the lurid version. The caveats
  need equal visual weight to the claim.

## 4. Proposed features / insights — ranked by insight-per-effort

> Effort assumes the existing Angular signal architecture, `FollyService`, and radar/scatter
> components are reused. "I/E" = insight-per-effort (higher is better).

**Tier A — do these first (high insight, low effort):**

1. **Score Tuchman's four canonical follies on the MFI (calibration baseline).** _[I/E: very
   high]_ Add Troy, the Renaissance popes, Britain-loses-America, and Vietnam as scored cards
   using the data already in `tuchman.json`. This validates the instrument against the book it
   claims to operationalise and gives the reader an immediate "is a Trump item really at
   Vietnam levels?" reference line on the existing scatter/gauge. Pure data entry, no new code.

2. **"Tuchman's Third Test" verdict panel — personal vs. systemic, computed live.** _[I/E:
   very high]_ The corpus's sharpest insight (Tuchman excludes single rulers) is buried in
   prose. Surface it as a gauge driven by the `systemic` axis already in the data: sum/weight
   the `systemic` scores and render a needle between "Personal caprice (fails Tuchman's test)"
   and "Systemic folly (qualifies)." This directly answers the column's closing question with
   the reader's own weights and is the site's natural thesis payoff. Reuses existing signals.

3. **Provenance/confidence as a visual filter and a "trust dial."** _[I/E: high]_ Add a toggle
   to recompute the entire index using only `documented` items, then `+reported`, then
   `+speculative`, with a confidence-weighted mode (multiply each score by its `confidence`).
   Watching the aggregate move as you exclude the post-cutoff Iran war and the battleship is
   itself the lesson about how much of the indictment is solid. The data already carries
   `provenance` and `confidence`.

4. **"What would change your mind?" falsification prompts per folly.** _[I/E: high]_ For each
   item, add a short `disconfirmer` field ("This would NOT be folly if…") drawn from the
   existing `caveat`/`reliabilityNote` (e.g. tariffs: "…if reshoring data turns positive by
   2027"; Iran war: "…if a durable settlement holds and proliferation falls"). Renders as a
   flip-side on each card. Cheap to author, and it is the single most credibility-building
   feature for a politically charged site — it models the intellectual honesty the
   counterargument file already practices.

**Tier B — high payoff, moderate effort:**

5. **Symmetric Caligula folly catalogue + dual radar overlay.** _[I/E: medium-high]_ Build a
   small scored catalogue of Caligula's acts (Jerusalem statue, maiestas revival, treasury
   exhaustion, Baiae bridge, humiliation programme) on the _same five axes_, each with its
   source grade. Overlay the Caligula radar against a Trump item on the existing radar
   component. This makes the comparison bidirectional and lets the reader see where Caligula
   actually scores _lower_ (e.g. `systemic`, since his folly died with him — Tuchman's own
   point). Requires new data + reuse of `RadarSeries`.

6. **Control-group calibration: score 3–4 non-Trump decisions.** _[I/E: medium-high]_ Add
   Vietnam (already covered above) plus one or two recent non-Trump executive decisions scored
   on identical axes, clearly labelled "control." The honest finding might be that several
   score high — which strengthens, not weakens, the site by pre-empting "you'd score anyone
   this way." Biggest credibility lever per the gap in §2.5; modest authoring effort.

7. **Source-provenance treemap / "how much rests on Suetonius?" viz.** _[I/E: medium]_ The
   corpus has rich `type` tags on every citation. Aggregate them into a treemap or stacked bar
   showing the evidentiary base: for Caligula, the dominance of `primary-hostile` (Suetonius,
   Dio) vs. the thin `primary`/contemporary layer (Philo, Josephus); for Trump, the spread of
   `journalism`/`official-record`/`modern-scholarship`. This visually proves the corpus's own
   thesis — the two subjects are "epistemic mirror images" — which is currently only stated.

**Tier C — distinctive, higher effort:**

8. **Founders'-fears overlay on the systemic axis (Rome→America bridge).** _[I/E: medium]_ Tie
   `rome-america.json` to the index by annotating high-`systemic` follies (DOJ weaponization,
   IG purge/Schedule F, National Guard) with the specific founder fear they trip
   (Hamilton's demagogue-to-tyrant, Madison's faction, Washington/Cincinnatus on
   relinquishing power). Turns an orphaned essay into an interpretive layer on the scores.

9. **Anacyclosis / norm-erosion timeline (Watts's "one selfish act at a time").** _[I/E:
   medium-low]_ Reuse the existing timeline component to render Polybius's cycle and Watts's
   century-long Republican erosion _beside_ the 2017→2026 Trump timeline, with the explicit
   on-screen caution (from `rome-america.json`'s historian's-note and the counterargument
   file) that the analogy illuminates mechanisms but not inevitability. Higher effort because
   it needs the disanalogy guardrails baked in to avoid the "Are We Rome?" laziness the corpus
   itself flags.

10. **Conflict-of-interest + post-cutoff badges surfaced in UI.** _[I/E: medium-low but
    high-integrity]_ Two small badges already justified by the data: a COI flag on the
    Anthropic item (author's own org, per its `reliabilityNote`) and a persistent
    "post-knowledge-cutoff" marker on the Iran war, battleship, and Anthropic items. Low code,
    disproportionate trust dividend.

## 5. Cross-cutting recommendations

- **Resolve or reframe the Economist column** before launch (gap §2.1). It is the only
  load-bearing claim graded speculative.
- **Make caveats co-equal with claims in the UI**, especially for the Nemi-ships and
  "burned-a-playwright" parallels — the corpus already hedges them; the design must not.
- **Run `glossary-presets.json` through the same verification pass** as the other five files
  so the editorial weighting presets carry the same provenance discipline.
- **Consider a "weakest items" honesty section** that openly lists the corpus's own thin spots
  (post-cutoff Iran war, vanity-axis inflation, contested anecdotes) — the counterargument
  file's spirit applied reflexively to the index itself.
