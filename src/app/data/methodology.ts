import { Criterion, Folly, RefItem } from './models';

/**
 * The March of Folly Index (MFI).
 *
 * Three of the five axes are Tuchman's own tests of folly; one is the article's
 * "self-harm" framing; one measures Caligula resonance specifically.
 *
 *   MFI = 100 · Σ(wᵢ · sᵢ) / (5 · Σwᵢ)
 *
 * The catalogue below is the output of a parallel research + adversarial
 * fact-check pass: every item is provenance-graded against a January 2026
 * knowledge cutoff, post-cutoff events are flagged, and Caligula anecdotes from
 * hostile ancient sources are caveated rather than asserted. Scores are an
 * editorial, defensible reading — fully adjustable in the UI.
 */
export const CRITERIA: Criterion[] = [
  {
    id: 'selfHarm',
    symbol: 'S',
    name: 'Self-harm',
    meaning: "How badly the act damages the actor's own long-term interest.",
    provenance:
      'The Economist\'s framing: rulers "blind … to their own people\'s long-term interests".',
    defaultWeight: 1,
  },
  {
    id: 'counterproductive',
    symbol: 'C',
    name: 'Counter-productive at the time',
    meaning: 'Whether contemporaries — not just hindsight — already called it a mistake.',
    provenance: "Tuchman's first test of folly.",
    defaultWeight: 1,
  },
  {
    id: 'alternative',
    symbol: 'A',
    name: 'Feasible alternative existed',
    meaning: 'Whether an obviously available better course was ignored.',
    provenance: "Tuchman's second test of folly.",
    defaultWeight: 1,
  },
  {
    id: 'systemic',
    symbol: 'Y',
    name: 'Systemic / persistent',
    meaning: 'Enabled by a group and likely to outlast one leader — "persistence in error".',
    provenance:
      'Tuchman\'s third test; the article\'s closing question of whether the folly is "systemic".',
    defaultWeight: 1.4,
  },
  {
    id: 'caligula',
    symbol: 'G',
    name: 'Caligula resonance',
    meaning: 'Vanity, monuments, spectacle, contempt for institutions, demand for flattery.',
    provenance: "The article's central conceit: Trump as a would-be Gaius.",
    defaultWeight: 1.2,
  },
];

export const FOLLIES: Folly[] = [
  {
    id: 'iran-war-2026',
    title: 'The war of choice in the Gulf (Operation Epic Fury)',
    domain: 'foreign-policy',
    era: 'second-term',
    provenance: 'reported',
    confidence: 0.55,
    postCutoff: true,
    summary:
      'A joint US–Israeli campaign against Iran framed as a 4–6 week operation, to which reporting attributes the killing of Khamenei, the closure of the Strait of Hormuz and a severe oil shock. The article\'s point of departure — "bomb and blockade a more biddable Iran into existence."',
    cost: 'Iranian civilians and economy; global energy and food consumers; US growth and inflation; long-run non-proliferation incentives as deterrence lessons spread. Magnitudes are contemporaneous estimates.',
    caligulaParallel:
      'Caligula\'s theatrical "campaigns" on the northern frontier staged the imagery of conquest over coherent strategic aims; the "Epic Fury" branding and rapid victory-declaration echo war-as-spectacle.',
    reliabilityNote:
      'Reported, and post-cutoff. Described by multiple outlets plus official statements, but contemporaneous, government-framed, and with independent assessment incomplete — it cannot be treated as documented from training knowledge.',
    caveat:
      "Post-dates the January 2026 cutoff. Casualty figures, the circumstances of Khamenei's death, whether nuclear objectives were achieved, and the durability of any ceasefire are all unverified.",
    engineering: {
      note: 'Physics cross-check (OSINT Defense-CAD). Claims of a clean, decisive air campaign can be sanity-checked against first-principles engagement modelling — ballistic/hypersonic kinematics, BVR and seeker link budgets, integrated kill-chains and EW link-budgets — rather than taken from official "objectives met" framing. The toolkit\'s standing lesson is that some goals are physically out of reach (e.g. jamming a frequency-hopping LPI datalink at standoff is not achievable), so a "few-week, low-cost" decisive outcome should carry the same burden of proof the model demands of any system.',
      sources: [
        {
          citation:
            'OSINT Defense-CAD — engagement & kill-chain physics toolkit (github.com/Aroxora/Defense-CAD; osint-defense.web.app)',
          type: 'modern-scholarship',
        },
      ],
    },
    scores: { selfHarm: 4, counterproductive: 3, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      {
        citation: "Wikipedia, '2026 Iran war' / 'Timeline of the 2026 Iran war' (accessed 2026-05)",
        type: 'journalism',
      },
      {
        citation: "U.S. Department of State, 'Operation Epic Fury and International Law' (2026-04)",
        type: 'official-record',
      },
      {
        citation: "Al Jazeera, 'Operation Epic Fury has ended: Is the Iran war over?' (2026-05-06)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'greenland',
    title: 'The threat to seize Greenland from a NATO ally',
    domain: 'foreign-policy',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'Trump repeatedly refused to rule out force to bring Greenland under US control, calling "anything less" unacceptable and threatening tariffs on Denmark, before explicitly ruling out force at Davos on 21 Jan 2026 while still pressing for negotiations and tariffs.',
    cost: "US alliance credibility and NATO cohesion; Danish/EU relations; Greenlanders' self-determination as a bargaining chip; the precedent that allies' borders are negotiable by coercion.",
    caligulaParallel:
      "Coveting territory for prestige and treating sovereign relationships as instruments of personal will resembles the imperial assumption that allied kingdoms exist at the princeps' pleasure (Suetonius, Caligula 22, 26 — a hostile source).",
    reliabilityNote:
      'Documented: on-record presidential statements, White House confirmation that force was "always an option", and wide coverage; the Davos walkback is also on record.',
    caveat:
      'The Davos walkback was conditional (force "ruled out" while tariffs and pressure continued); the lasting-damage judgment is interpretive.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 2, caligula: 4 },
    sources: [
      {
        citation:
          "CNN, 'Trump says anything less than US control of Greenland is unacceptable' (2026-01-14)",
        type: 'journalism',
      },
      {
        citation:
          "NPR, 'In Davos speech, Trump ruled out using military force to acquire Greenland' (2026-01-21)",
        type: 'journalism',
      },
      {
        citation: "UK House of Commons Library, 'President Trump and Greenland: FAQs', CBP-10472",
        type: 'official-record',
      },
    ],
  },
  {
    id: 'alienating-allies',
    title: 'Coercion of allies — tariffs and territorial threats',
    domain: 'foreign-policy',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.8,
    summary:
      'Across 2025–26 the administration coupled tariff threats (10–25%) with territorial pressure on Denmark, Canada and others, turning alliances into instruments of coercion. Analysts across the spectrum judged it self-defeating, pushing partners toward hedging and strategic autonomy.',
    cost: 'Decades of accumulated alliance capital; US leverage versus China; supply-chain and defence-industrial cooperation; long-run dollar and security-guarantee credibility.',
    caligulaParallel:
      'Caligula\'s gratuitous humiliation of senators and allied notables (Winterling reads many "cruelties" as deliberate status-insults) parallels treating partners as subordinates to be cowed rather than courted.',
    reliabilityNote:
      'Documented as a pattern by CSIS, Carnegie, Baker Institute, NATO/Davos transcripts and NPR. Some bilateral specifics are single-sourced and were dropped.',
    caveat:
      'Some bilateral specifics (e.g. a reported Spain trade-cutoff threat) are single-sourced or contested and are not asserted here.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      {
        citation: "CSIS, 'The Transatlantic Alliance in the Age of Trump: The Coming Collisions'",
        type: 'journalism',
      },
      {
        citation: "Carnegie Endowment, 'Trump Turns NATO into a Tool of Coercion' (2026-05)",
        type: 'journalism',
      },
      {
        citation: "NATO, 'Remarks by Secretary General at WEF Davos' (2026-01-21)",
        type: 'official-record',
      },
    ],
  },
  {
    id: 'liberation-day-tariffs',
    title: "The 'Liberation Day' reciprocal tariff shock",
    domain: 'economy-trade',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.9,
    summary:
      'On 2 April 2025 Trump imposed sweeping "reciprocal" tariffs (10% floor, higher for major partners), lifting the average effective US rate toward ~22.5% and roiling markets. A year on, the central promises (reshoring, a smaller deficit, debt paydown) had not materialised while prices rose.',
    cost: 'US consumers (higher prices); farmers and import-dependent manufacturers; investors; a record real-terms trade deficit; a policy-uncertainty drag on investment.',
    caligulaParallel:
      "Suetonius (Caligula 38–41) describes improvised, arbitrary fiscal exactions to fund spectacle after squandering the treasury; the tariff regime's erratic, announced-then-paused improvisation echoes rule-by-whim over revenue.",
    reliabilityNote:
      'Documented: EO 14257 is on the record; effects analysed by Tax Foundation, CSIS, CFR, Cato, AEI and peer-reviewed work. Magnitudes vary by model but direction is consistent.',
    caveat:
      'Specific magnitudes (effective-rate level, food-price increment, deficit effect) are estimates that vary by model; the direction of effect is robust.',
    scores: { selfHarm: 4, counterproductive: 5, alternative: 4, systemic: 3, caligula: 2 },
    sources: [
      {
        citation:
          "Executive Order 14257, 'Regulating Imports With a Reciprocal Tariff…' (2025-04-02)",
        type: 'official-record',
      },
      {
        citation:
          "CFR, 'A Year After Liberation Day, Experts Review the Costs of Trump's Tariffs' (2026)",
        type: 'journalism',
      },
      {
        citation:
          "ScienceDirect, 'Making America great again? The economic impacts of Liberation Day tariffs' (2025)",
        type: 'modern-scholarship',
      },
    ],
  },
  {
    id: 'loyalist-appointments',
    title: 'A cabinet chosen for loyalty over competence',
    domain: 'institutions-rule-of-law',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.8,
    summary:
      'Senior posts (Defense, DNI, FBI, HHS) were filled prioritising personal loyalty and public defence of Trump over relevant expertise, several confirmed only on tie-breaking or near-party-line votes amid vetting concerns. The article\'s tightest charge — sycophants who "vie to show their loyalty."',
    cost: 'Quality of governance and crisis decision-making; morale and retention of career professionals; public trust in agencies; downstream failures attributed to inexpert leadership.',
    caligulaParallel:
      'The canonical emblem is the threat to make his horse Incitatus consul (Suetonius 55; Dio 59.14) — but both sources say he only planned it and Dio says it never happened. Modern scholars read it as a calculated insult to the Senate, not literal madness. Used illustratively.',
    reliabilityNote:
      'Documented that loyalty was a stated criterion and confirmations were contested. The "net folly" judgment is interpretive; competence outcomes vary by official.',
    caveat:
      'The Incitatus parallel is contested even in antiquity (the horse was never actually made consul); used illustratively.',
    scores: { selfHarm: 3, counterproductive: 3, alternative: 4, systemic: 4, caligula: 5 },
    sources: [
      {
        citation:
          "Washington Post, 'Trump selections for Cabinet advance, despite initial controversy' (2025-01-17)",
        type: 'journalism',
      },
      {
        citation: "Wikipedia, 'Second cabinet of Donald Trump' (accessed 2026-05)",
        type: 'journalism',
      },
      {
        citation: "The White House, 'President Trump Announces Cabinet… Appointments' (2025-01)",
        type: 'primary',
      },
    ],
  },
  {
    id: 'gilded-oval',
    title: 'Gold, marble and the cult of self',
    domain: 'information-media',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'Trump refurbished the Oval Office with extensive gold ornament and Mar-a-Lago-style cherubs and hung his own 2023 booking photo in a gold frame — an aesthetic a former official called "more king-like" than presidential. The article\'s "golden statues, marble monuments" motif.',
    cost: 'Mostly reputational and symbolic; it normalises personalist, monarchical iconography in a republican office. Material cost was modest (reportedly partly self-funded).',
    caligulaParallel:
      "Suetonius (Caligula 22, 52) emphasises his love of gold, theatrical costume and self-display, and his blurring of ruler and god; gilding the seat of power and centring one's own image is a vanity echo. Modern scholars caution Suetonius exaggerates for moral effect.",
    reliabilityNote:
      'Documented via photographs and multiple outlets. High symbolic salience for the "caligula" axis; the facts are firm, the folly weight modest.',
    scores: { selfHarm: 1, counterproductive: 1, alternative: 2, systemic: 2, caligula: 5 },
    sources: [
      {
        citation:
          "CNN, 'Flags, figurines and gold everywhere: Trump transforms the Oval Office into a gilded gallery' (2025-03-16)",
        type: 'journalism',
      },
      {
        citation:
          "France24, 'Trump brings the bling with gold-plated Oval Office makeover' (2025-03-20)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'military-parade',
    title: 'The ~$30M military parade',
    domain: 'military',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.9,
    summary:
      "On 14 June 2025 a large parade (~6,700 troops, 28 tanks, ~50 aircraft) marked the Army's 250th anniversary — coinciding with Trump's birthday — at a cost the Army later put at ~$30M. Critics framed it as a personalist spectacle of the sort US presidents had long avoided.",
    cost: '~$30M public funds; street/tank-damage repair; opportunity cost and the symbolism of tanks in the capital.',
    caligulaParallel:
      "Caligula's pontoon bridge across the Bay of Baiae (Suetonius 19; Dio 59.17), reportedly crossed in a gold cloak — a costly, militarily pointless spectacle for personal glory — is the archetype a triumphal birthday-adjacent parade evokes. The anecdote comes from hostile sources.",
    reliabilityNote:
      "Documented: the Army's own post-event cost figure and parade composition are reported. The birthday coincidence is factual; the personalist framing is interpretive.",
    caveat:
      "Cost estimates ranged from ~$30M (Army post-event) to ~$45M (pre-event press estimates); the headline uses the Army's number.",
    scores: { selfHarm: 1, counterproductive: 2, alternative: 3, systemic: 2, caligula: 5 },
    sources: [
      {
        citation:
          "Stars and Stripes, 'Army says 250th anniversary celebration in DC cost $30 million' (2025-07-22)",
        type: 'journalism',
      },
      {
        citation: "NPR, 'Army celebrates its 250th year, Trump celebrates his 79th' (2025-06-14)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'trump-class-battleship',
    title: "The 'Trump-class' battleship announcement",
    domain: 'military',
    era: 'second-term',
    provenance: 'reported',
    confidence: 0.5,
    postCutoff: true,
    summary:
      'On 22 Dec 2025 Trump announced a "Trump-class" guided-missile battleship (lead ship USS Defiant) as part of a "Golden Fleet." The announcement is real; everything beyond it — nuclear propulsion, 20–25 hulls, ~$18–20B per ship, delivery ~2036 — is projection. The ~$1.5T FY2027 defence request then sought $1.8B for Trump-class design — but the House Armed Services Committee\'s draft NDAA explicitly bans building it, and Fortune summarised the expert consensus that "modern missiles will easily destroy it." Analysts (CSIS) still expect cancellation before any hull is laid.',
    cost: 'Conditional only. If pursued, a large opportunity cost (~$12–19B per hull) against more survivable, distributed naval investment. No funds appropriated, so realised cost is currently zero.',
    caligulaParallel:
      'Naming a colossal, dubious warship class after oneself and branding a "Golden Fleet" fuses monument-building with self-image — loosely kin to Caligula\'s ornate pleasure-galleys and the Nemi ships. The linkage is interpretive.',
    reliabilityNote:
      'Reported. The announcement and program-document existence are on the record, but the program is unfunded, the specs are projections, and named experts predict cancellation.',
    caveat:
      'Only the announcement and the FY2027 design-funding request are documented; no hull is funded, the House moved to ban construction, and the program may never be built. Scores reflect the gesture, not a delivered ship.',
    engineering: {
      note: 'Physics cross-check (OSINT Defense-CAD). A first-principles cost-benefit model — value_index = (benefit × survivability) / lifecycle-cost — ranks the conceptual "Trump-class" battleship LAST among modelled DoD options. The reasons are physical, not political: a battleship is a large radar-cross-section, high-value, concentrated target against modern anti-ship ballistic, cruise and hypersonic fires (detection range scales as R ∝ σ^¼), at a lifecycle cost on the order of a small carrier programme for a handful of hulls, and it runs directly against Distributed Maritime Operations (dispersal). Networked, distributable, attritable alternatives (DDG(X), Collaborative Combat Aircraft) and the real PLA comparator (Type 055) all score higher. This is exactly the "counter-productive / a feasible alternative existed" case, computed rather than asserted.',
      sources: [
        {
          citation:
            'OSINT Defense-CAD — "COST_BENEFIT_ANALYSIS.md": the conceptual Trump-class battleship ranks last on value_index (github.com/Aroxora/Defense-CAD)',
          type: 'modern-scholarship',
        },
        {
          citation:
            'OSINT Defense-CAD interactive cost-benefit & survivability app (osint-defense.web.app)',
          type: 'modern-scholarship',
        },
      ],
    },
    scores: { selfHarm: 1, counterproductive: 2, alternative: 3, systemic: 1, caligula: 4 },
    sources: [
      {
        citation:
          "USNI News, 'Trump Unveils New Battleship Class; Proposed USS Defiant…' (2025-12-22)",
        type: 'journalism',
      },
      {
        citation: "U.S. Navy, 'President Trump Announces New Battleship' (navy.mil, 2025-12-22)",
        type: 'primary',
      },
      {
        citation: "CSIS, 'The Golden Fleet's Battleship Will Never Sail' (Cancian)",
        type: 'journalism',
      },
      {
        citation:
          "Fortune, 'A $20B battleship the U.S. abandoned after WWII is back in Trump's $1.5T defense budget. Experts say modern missiles will easily destroy it' (2026-05-03)",
        type: 'journalism',
      },
      {
        citation:
          "Breaking Defense, 'Trump to propose $1.5 trillion defense budget…' (2026-04); NOTUS, 'U.S. Navy Plans to Order Far More Trump-Class Battleships' (2026); House Armed Services Committee draft NDAA banning construction (2026)",
        type: 'official-record',
      },
    ],
  },
  {
    id: 'anthropic-dod',
    title: "Pentagon 'supply-chain risk' designation of Anthropic",
    domain: 'technology-science',
    era: 'second-term',
    provenance: 'reported',
    confidence: 0.5,
    postCutoff: true,
    coi: "The subject is the author's own organisation (Anthropic). This assessment relies solely on third-party reporting.",
    summary:
      'The documented, pre-cutoff fact: Anthropic signed a ~$200M DoD prototype agreement in July 2025, and deployment talks stalled over the Pentagon\'s demand for unfettered model access versus Anthropic\'s refusal of fully-autonomous-weapon and mass-surveillance uses. The escalation — a "supply-chain risk" designation, lawsuits, an injunction — post-dates the cutoff.',
    cost: 'If the designation stands: US defense access to a frontier safety-conscious lab; a chilling effect on AI firms that set use limits; the signal of coercion over negotiation. Costs are contingent on a still-unresolved dispute.',
    caligulaParallel:
      'Reportedly punishing a party for refusing total submission — demanding "unfettered access" and retaliating against limits — loosely mirrors the demand for absolute compliance attributed to Caligula by hostile sources. Interpretive only.',
    reliabilityNote:
      "Reported, and the operative events post-date the cutoff. Disclosure: the subject company is the author's own organisation; this assessment relies solely on third-party reporting.",
    caveat:
      "Post-dates the January 2026 cutoff. Litigation ongoing; the designation's legality and full rationale are non-public. Only the July 2025 contract and the negotiation impasse are firmly documented.",
    scores: { selfHarm: 2, counterproductive: 3, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      {
        citation:
          "Breaking Defense, 'Anthropic, Google and xAI win $200M each from Pentagon AI chief' (2025-07)",
        type: 'journalism',
      },
      {
        citation:
          "Anthropic, 'Anthropic awarded $200M DOD agreement for AI capabilities' (2025-07)",
        type: 'primary',
      },
      {
        citation:
          "Wikipedia, 'Anthropic–United States Department of Defense dispute' (accessed 2026-05)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'ai-frontier-export-order',
    title: 'Dark-starting the frontier — the foreign-national AI export order',
    domain: 'technology-science',
    era: 'second-term',
    provenance: 'reported',
    confidence: 0.5,
    postCutoff: true,
    coi: "One named subject is the author's own organisation (Anthropic). This assessment relies solely on third-party reporting and applies the same scoring used for every other item.",
    summary:
      "In June 2026 the Commerce Department invoked the Export Control Reform Act of 2018 (§1758) for the first time against frontier AI, directing Anthropic to block all foreign-national access to Fable 5 and Mythos 5 — including foreign nationals inside the US and the company's own foreign-national staff. Fable 5 had launched on 9 June; the order landed on 12 June, three days later, and — unable to partition access cleanly overnight — Anthropic suspended both models for everyone, US citizens included, even as 80+ cybersecurity executives urged rescission. In the same weeks OpenAI shipped GPT-5.6 (Sol/Terra/Luna) only to ~20 government-vetted partners under customer-by-customer approval (ONCD/OSTP/Commerce), with no international tier — following Hegseth's early-2026 'supply-chain risk' designation and a 2 June 2026 EO seeking pre-release government access. Meanwhile DeepSeek's open-weight V4 (MIT-licensed) stayed globally available and unrestricted.",
    cost: "US developers, startups and researchers throttled off the very frontier they fund; safety-conscious US labs penalised for complying; the open-weight field and price-performance lead ceded to a PRC lab; allied developers (EU, UK, India, Japan) locked out and pushed toward non-US models. The price gap sharpens the own-goal: Fable 5 listed at $10 / $50 per million input / output tokens against DeepSeek V4-Pro's ~$0.435 / $0.87 — roughly 23× cheaper on input and 57× on output (about 46× blended) — so a control meant to deny capability to rivals mostly denied it to Americans and accelerated migration to an unrestricted, far cheaper Chinese model, each an own-goal feeding Beijing's '东升西降' reading.",
    caligulaParallel:
      "Ordering a national capability to 'go dark' for one's own citizens in order to deny it to outsiders — reality bent to command regardless of self-injury — loosely echoes the demand for total compliance that hostile sources ascribe to Caligula (Suetonius, Caligula 26–29). The vanity element is weak here; the self-harm-by-fiat element is the real rhyme. Interpretive.",
    reliabilityNote:
      "Reported and post-cutoff. The Commerce directive, Anthropic's suspension, the GPT-5.6 vetted preview and the 2 June EO are multiply reported but government-framed and fast-moving, and the net strategic effect is contested. Disclosure: one named subject is the author's own organisation; this assessment relies solely on third-party reporting. One analytic source cited (trenchwork.org/glasswing) is affiliated with this site's developer (ErosolarAI) and is used for framing only, not for any load-bearing fact. Extends the dispute catalogued under the Pentagon 'supply-chain risk' designation of Anthropic.",
    caveat:
      "Post-dates the January 2026 cutoff. Whether the restriction is temporary or permanent, how completely access was cut, and whether DeepSeek-class open weights are a true substitute for the restricted US frontier are all unsettled. Capability-parity claims (e.g. a reported '90% SWE-bench' figure for DeepSeek, or that it runs with 'no safety gates') are unverified; benchmarks are not national-security capability, and the US retains structural advantages in chips, cloud, capital and talent. The pricing gap compares list prices, not capability-adjusted cost.",
    disconfirmer:
      "the controls demonstrably denied a hostile actor a capability it could not otherwise obtain, and US and allied frontier access was restored without ceding the field to an unrestricted rival model.",
    engineering: {
      note: "Capability-diffusion sanity check. Export controls work when the restricted good is genuinely scarce and substitutes are weak; they backfire when a near-substitute is already open. With DeepSeek-class weights published under an MIT licence at roughly a tenth to a fiftieth of frontier list price, the denied capability is largely fungible abroad, so the binding effect of dark-starting Fable 5 / Mythos 5 falls disproportionately on domestic and allied users — the same first-principles logic the OSINT Defense-CAD toolkit applies to hardware: model the counterfactual before assuming a control denies more to the adversary than to yourself.",
      sources: [
        {
          citation:
            'OSINT Defense-CAD — counterfactual-capability modelling (github.com/Aroxora/Defense-CAD; osint-defense.web.app)',
          type: 'modern-scholarship',
        },
      ],
    },
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 4, caligula: 3 },
    sources: [
      {
        citation:
          "Nextgov/FCW, 'Anthropic suspends top AI models after U.S. export control order' (2026-06)",
        type: 'journalism',
      },
      {
        citation:
          "The Next Web, 'OpenAI releases GPT-5.6 Sol to 20 government-approved partners in restricted preview' (2026-06); Reuters, 'OpenAI defers public rollout of GPT-5.6 as US seeks early access to frontier AI models' (2026-06)",
        type: 'journalism',
      },
      {
        citation:
          "CNBC / NPR, 'Trump signs AI executive order asking companies to give government early access to models' (2026-06-02)",
        type: 'journalism',
      },
      {
        citation:
          "DeepSeek V4 Pro open-weight release (Hugging Face, MIT licence; ~$0.435/M input, ~$0.87/M output, 1M context), 2026-04-24 — OpenRouter / DeepInfra pricing (2026)",
        type: 'journalism',
      },
      {
        citation:
          "Reuters, on the Commerce Department's first use of the Export Control Reform Act of 2018 (§1758) against frontier AI to pause foreign-national access to Fable 5 / Mythos 5 (2026-06)",
        type: 'journalism',
      },
      {
        citation:
          "Trenchwork / Vigil, 'Project Glasswing & the Strategic Paradox' (trenchwork.org/glasswing) — strategic analysis based on Reuters, Anthropic announcements, DoD statements and ECRA §1758; affiliated source, see disclosure",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'doj-retribution',
    title: 'Weaponising the DOJ against political opponents',
    domain: 'institutions-rule-of-law',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.8,
    summary:
      'The administration pursued investigations and indictments of named adversaries (Letitia James, James Comey; investigations of Adam Schiff), several dismissed by judges — including over the unlawful appointment of US Attorney Lindsey Halligan. Critics called it "targets first, legal theories afterward."',
    cost: 'Rule of law and prosecutorial independence; due-process norms; eventual blowback and reversed cases; a precedent inviting tit-for-tat criminalisation of politics.',
    caligulaParallel:
      'Suetonius and Dio depict Caligula reviving maiestas (treason) charges to punish enemies and raise money (Caligula 30, 41); Winterling reframes the terror as a power-struggle with the elite. The use of state machinery for personal vengeance is the shared interpretive core.',
    reliabilityNote:
      'Documented: indictments and dismissals are on the court record; the "weaponization" characterisation is widely reported. Motive is inferential.',
    caveat: 'Prosecutorial motive is inferential; some cases remain in litigation.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 5, caligula: 4 },
    sources: [
      {
        citation:
          "Univ. of Iowa Journal of Gender, Race & Justice, 'President Trump's Weaponization of DOJ…' (2025-11)",
        type: 'modern-scholarship',
      },
      { citation: "Protect Democracy, 'Retaliatory Action Tracker'", type: 'official-record' },
      {
        citation: "Axios, 'Unlikely enforcers shape Trump's weaponization crusade' (2025-08-21)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'ig-purge-schedule-f',
    title: 'Purging the watchdogs — IGs and Schedule F',
    domain: 'institutions-rule-of-law',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'On 24 Jan 2025 the administration fired more than a dozen inspectors general without the legally required 30-day notice (later ruled unlawful), reinstated Schedule F to make career civil servants at-will, and pursued DOGE-driven layoffs (an oft-cited ~300,000 figure). The combined effect gutted internal oversight.',
    cost: 'Loss of independent watchdogs and accountability; degraded state capacity and expertise; legal costs; long-run damage to a merit-based civil service that outlasts any one president.',
    caligulaParallel:
      'Removing the checks of the senatorial order and concentrating discretionary power — Suetonius (Caligula 26) stresses his contempt for institutions and magistrates — parallels stripping protections from the bureaucracy so loyalty replaces independence.',
    reliabilityNote:
      'Documented: the IG firings and court ruling are on the record; Schedule F and DOGE figures widely reported. The ~300k aggregate has churn (some rehires).',
    caveat:
      'The ~300,000 figure is an announced aggregate; some layoffs were paused, rehired or litigated, so net effects are evolving.',
    scores: { selfHarm: 3, counterproductive: 3, alternative: 4, systemic: 5, caligula: 4 },
    sources: [
      {
        citation: 'House Oversight Democrats letter re: federal workforce purge (2025-02-03)',
        type: 'official-record',
      },
      {
        citation: "Wikipedia, '2025 United States federal mass layoffs' (accessed 2026-05)",
        type: 'journalism',
      },
      {
        citation:
          "Government Executive, 'Project 2025 wanted to hobble the federal workforce. DOGE has…' (2025-04)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'national-guard',
    title: 'Federalising troops into US cities over governors',
    domain: 'military',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      "In June 2025 Trump federalised ~2,000 Guard troops and active-duty Marines into Los Angeles over Governor Newsom's objection, and later attempted Portland and Chicago; courts found Posse Comitatus concerns, the Supreme Court halted Chicago, and deployments reportedly ended on 31 Dec 2025.",
    cost: 'Civil-military norms and federalism; trust between troops and citizens; legal defeats; a precedent for domestic military policing.',
    caligulaParallel:
      "Turning armed force inward as an instrument of personal authority — the ruler's troops over the magistrates' objection — echoes the Praetorian dynamic and Caligula's reliance on coercive display over consent (Suetonius 26, 48–49; hostile source).",
    reliabilityNote:
      'Documented: deployment, legal authority cited, court findings and termination date are on the record.',
    caveat:
      'The 31 Dec 2025 end-date and final court dispositions are at the edge of the cutoff window; some appellate outcomes may post-date it.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 4, caligula: 4 },
    sources: [
      {
        citation:
          "PBS NewsHour, 'What U.S. law says about Trump's deployment of active-duty troops to Los Angeles' (2025)",
        type: 'journalism',
      },
      {
        citation:
          "NPR, 'As Trump federalizes National Guard, is the Insurrection Act on the table?' (2025-06-09)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'alien-enemies-cecot',
    title: 'Alien Enemies Act removals to CECOT',
    domain: 'immigration',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      "In March 2025 Trump invoked the 1798 Alien Enemies Act to fast-track removal of ~250 Venezuelans to El Salvador's CECOT mega-prison, many without convictions or due process; courts found the invocation unlawful and the Abrego Garcia removal a wrongful violation of a protective order. A year on, deportees remained stuck abroad.",
    cost: 'Wrongly removed individuals and their families; due-process and habeas guarantees; US standing on the rule of law; court-battle costs; risk to citizens if error rates persist.',
    caligulaParallel:
      'Suetonius (Caligula 27–29) catalogs summary, arbitrary punishments without trial as a hallmark of tyranny; bypassing courts to imprison people abroad on thin evidence is an analogous disregard for due process — though scholars warn such ancient lists are moralising.',
    reliabilityNote:
      'Documented: the invocation, the removals, the named judges and appellate ruling, and the wrongful-deportation admission are extensively on the record.',
    caveat:
      'Exact deportee counts vary by reporting; the core unlawful-invocation and wrongful-removal findings are firmly on the record.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 4, caligula: 4 },
    sources: [
      {
        citation:
          "CNN, 'Federal appeals court says Trump unlawfully invoked the Alien Enemies Act' (2025-09-02)",
        type: 'journalism',
      },
      {
        citation:
          "Washington Post, 'Deportees sent by Trump to Salvadoran prison are still stuck a year later' (2026-03-15)",
        type: 'journalism',
      },
      {
        citation:
          "Texas Tribune, 'Trump admin knew most deported Venezuelans had no U.S. convictions' (2025-05-30)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'vaccine-rollback',
    title: 'Rolling back vaccine guidance amid a measles outbreak',
    domain: 'public-health',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.8,
    summary:
      'Under HHS Secretary RFK Jr., the CDC\'s ACIP was replaced wholesale, several routine vaccines were demoted to "shared clinical decision-making," and CDC Director Susan Monarez was fired after declining to endorse the changes — while 2025 measles cases hit a multi-decade high.',
    cost: 'Children and the immunocompromised (measles resurgence with reported deaths); herd immunity; public trust in the CDC; preventable disease burden.',
    caligulaParallel:
      "Elevating a ruler's idiosyncratic doctrine over expert consensus and purging officials who refuse to ratify it parallels Caligula's reported demand that reality bend to his will (Philo, Embassy to Gaius). Interpretive, hostile-source analogy.",
    reliabilityNote:
      'Documented: the ACIP replacement, schedule changes, Monarez firing and outbreak totals are reported. The share attributable to policy vs broader hesitancy is debated.',
    caveat:
      'The outbreak has multiple drivers; policy is a contributing, not sole, cause. Case and death counts vary by source.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 5, systemic: 4, caligula: 3 },
    sources: [
      {
        citation:
          "Bloomberg, 'Measles Cases 2025… in Year RFK Jr. Changed Vaccine Guidance' (2026-01-08)",
        type: 'journalism',
      },
      {
        citation:
          "ProPublica, 'The CDC Buried a Measles Forecast That Stressed the Need for Vaccinations'",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'science-cuts',
    title: 'Mass cuts to NIH/NSF research funding',
    domain: 'technology-science',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.8,
    summary:
      "In 2025 the administration cut or froze billions in grants, terminated large numbers of NIH grants, and moved to cap indirect costs at 15% across NIH/DOE/NSF; PhD admissions fell and US scientists' foreign job applications rose. Courts and Congress pushed back, partly restoring funds.",
    cost: 'US biomedical and basic-science leadership; early-career researchers and universities; long-run innovation and competitiveness; the risk of permanent brain drain.',
    caligulaParallel:
      "Suetonius (Caligula 34) reports Caligula's hostility to learning and attacks on intellectual prestige (threatening to remove Homer and the busts of esteemed authors); kneecapping the research establishment echoes contempt for knowledge institutions.",
    reliabilityNote:
      'Documented: program effects reported by Brennan Center, Nature, Science/AAAS and others; reversals partly mitigate, so net effect is evolving. Specific totals vary by source.',
    caveat:
      'Specific dollar/grant/percentage figures are approximate and vary by source; some cuts were blocked or reversed, so net long-run damage is uncertain.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 4, caligula: 3 },
    sources: [
      {
        citation:
          "Brennan Center, 'The Cost of the Trump Administration's Attacks on Research Funding'",
        type: 'modern-scholarship',
      },
      {
        citation:
          "Nature, 'US science after a year of Trump: what has been lost and what remains' (2026)",
        type: 'modern-scholarship',
      },
    ],
  },
  {
    id: 'climate-rollback',
    title: 'Paris withdrawal & repeal of the endangerment finding',
    domain: 'environment-climate',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'On 20 Jan 2025 Trump again withdrew the US from the Paris Agreement, and in February 2026 the EPA finalised repeal of the 2009 endangerment finding — the legal basis for federal greenhouse-gas regulation — also ending vehicle climate rules. This strips a primary tool to regulate emissions and cedes climate leadership.',
    cost: 'Future generations and climate-exposed communities worldwide; the US clean-energy industry and global leadership. The cost is largely deferred and diffuse — dampening immediate self-harm but raising systemic stakes.',
    caligulaParallel:
      'A global-backdrop harm: less personal vanity than collective abdication. The loose echo is the heedless squandering of a shared inheritance for short-term gratification (Suetonius 37, on prodigal exhaustion of the treasury). Explicitly a stretch.',
    reliabilityNote:
      'Documented: the EO withdrawal and the EPA finalisation are official acts widely reported. The Feb 2026 finalisation is at the edge of the cutoff and faces litigation.',
    caveat:
      'The Feb 2026 endangerment repeal faces years of likely-Supreme-Court litigation and could be vacated.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 4, caligula: 2 },
    sources: [
      {
        citation: "NPR, 'Trump's EPA will end the basis for federal climate actions' (2026-02-11)",
        type: 'journalism',
      },
      {
        citation:
          "Winston & Strawn, 'President Trump Signs EO Withdrawing the U.S. From Paris Agreement' (2025)",
        type: 'official-record',
      },
    ],
  },
  {
    id: 'press-suppression',
    title: 'Suppressing the press — suits, settlements & pool control',
    domain: 'information-media',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'Trump extracted multi-million-dollar settlements from Paramount (60 Minutes) and ABC, sued the WSJ, NYT and BBC, banned the AP from the press pool, took over pool composition from the WHCA, and the FCC opened probes of NPR/PBS — amid "enemy of the people" rhetoric.',
    cost: "Press freedom and First-Amendment norms; news organisations' independence (settlements as de facto tribute); public scrutiny of power; self-censorship incentives.",
    caligulaParallel:
      'Caligula is reported to have punished writers and satirists — most luridly, burning a farce-writer alive over a double-meaning line (Suetonius 27), a single hostile source ~80 years later. The interpretive point — controlling the narrative by punishing critics — stands independently of that anecdote.',
    reliabilityNote:
      'Documented: settlements, suits, the AP ban and pool change, and FCC probes are largely on the record. Settlement amounts and pending-suit outcomes vary.',
    caveat:
      'Some suits are pending; settlement figures vary by report. The "burned a writer alive" parallel is a contested hostile-source anecdote, used illustratively only.',
    scores: { selfHarm: 2, counterproductive: 3, alternative: 4, systemic: 4, caligula: 4 },
    sources: [
      {
        citation:
          "Poynter, 'The numbers that defined the Trump administration's attacks against the press in 2025'",
        type: 'journalism',
      },
      {
        citation:
          "Washington Post, 'Trump's escalating attacks on the media: A running tally of lawsuits' (2026-01-25)",
        type: 'journalism',
      },
    ],
  },
  // ---- Voting suppression / election subversion + globally-applicable second-term follies ----
  {
    id: 'election-subversion-suppression',
    title: `Voter suppression & election subversion (the Big Lie, EO 14248, DOJ voter-data demands, the SAVE Act, the Jan-6 pardons)`,
    domain: 'elections-democracy',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary: `A converging effort to bend the electoral system toward one side: the persisting "Big Lie" that 2020 was stolen, the 20 Jan 2025 blanket clemency for ~1,500 Jan-6 defendants (including commutations for Oath Keepers/Proud Boys leaders convicted of seditious conspiracy), the 25 March 2025 executive order 14248 ("Preserving and Protecting the Integrity of American Elections" — much of it enjoined by federal courts), DOJ demands for sensitive statewide voter files from nearly every state (with suits against ~30 refusers and plans to run rolls through DHS's SAVE system), and the proof-of-citizenship SAVE Act (H.R.22, which passed the House 10 April 2025, 220-208, but was not enacted — the Senate had not passed it as of early 2026). Critics across the spectrum, and multiple federal judges, called the components unlawful or anti-democratic in real time.`,
    cost: `Eligible voters who lack ready documentary proof of citizenship (the Brennan Center estimates ~21 million Americans), disproportionately voters of color, the elderly, and married women whose IDs do not match birth certificates; state election officials coerced over their own voter rolls; the legitimacy of future results; and the deterrent value of prosecuting political violence, eroded by the pardons. The actor's own risk: legitimacy crises cut both ways, and enjoined orders waste capital.`,
    caligulaParallel: `Hostile sources depict Caligula treating the institutions of consent — the comitia (popular assemblies/elections), which Suetonius (Caligula 16) says he briefly restored then effectively hollowed — and the Senate as ornaments of his will rather than independent sources of authority (Suetonius, Caligula 26). Subordinating the apparatus that confers legitimacy to the ruler's preferred outcome is the shared interpretive core; Suetonius is a hostile source written ~80 years later and modern scholars read such acts as status-manipulation, so the parallel is interpretive, not literal.`,
    reliabilityNote: `Documented: EO 14248 and the Jan-6 clemency proclamation are on the record; the partial injunctions (LULAC / League of Women Voters v. Trump, D.D.C., Apr 2025; California v. Trump, D. Mass., Jun 2025) are court rulings; the DOJ voter-data demands and refusal-suits are tracked by the Brennan Center and reported by NPR/Votebeat/Stateline; the SAVE Act's House passage is in the Congressional Record. The "Big Lie" characterization and the framing of these as a single coordinated "suppression" design are interpretive syntheses, hence confidence below 0.9.`,
    caveat: `Some elements are partly blocked, mid-litigation, or not yet law (the SAVE Act had not cleared the Senate as of early 2026; several EO provisions survived). The Brennan "21 million" figure is an estimate of those lacking ready access to documents, not proof anyone is barred. Whether these measures will actually change outcomes — versus chilling participation — is contested and not yet measurable.`,
    disconfirmer: `documented non-citizen voting or 2020 fraud were occurring at a scale these measures are calibrated to stop, and the citizenship-proof and roll-purge tools demonstrably removed ineligible voters without disenfranchising eligible ones.`,
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 5, caligula: 4 },
    sources: [
      {
        citation:
          "Executive Order 14248, 'Preserving and Protecting the Integrity of American Elections' (2025-03-25)",
        type: 'official-record',
      },
      {
        citation:
          "Brennan Center for Justice, 'Status of Trump's Anti-Voting Executive Order' and 'Tracker of Justice Department Requests for Voter Information' (2025-2026)",
        type: 'journalism',
      },
      {
        citation:
          "NPR, 'Judge pauses parts of Trump's sweeping executive order on voting' (2025-04-24); 'Trump grants clemency to all defendants in Jan. 6 cases' (2025-01-21)",
        type: 'journalism',
      },
      {
        citation:
          "Congress.gov, H.R.22 119th Congress, 'SAVE Act' (text and House passage record, 2025-2026)",
        type: 'official-record',
      },
    ],
  },
  {
    id: 'usaid-foreign-aid-freeze',
    title: 'Dismantling USAID and freezing foreign aid',
    domain: 'foreign-policy',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary: `EO 14169 (20 Jan 2025) suspended virtually all US foreign-aid programs pending review; by 10 March 2025 the administration announced cancellation of ~83% of USAID programs, effectively dismantling the agency that had provided roughly 40% of the world's humanitarian funding. A peer-reviewed Lancet analysis estimated USAID programs had saved ~91 million lives over two decades and projected the cuts could cause up to ~14 million additional deaths by 2030 (≈4.5 million children under 5); a separate later modelling paper put the figure at 9.4+ million. Clinics and food/disease programs closed worldwide within months.`,
    cost: `The poorest people on earth: HIV patients in South Africa, malnourished children, recipients of malaria and TB programs — paid in projected excess deaths. The US pays in soft power and the strategic vacuum ceded to rival donors (China). The mortality figures are model-based projections, not counted deaths.`,
    caligulaParallel: `The interpretive echo is the heedless squandering or withdrawal of a shared good for short-term display — Suetonius (Caligula 37) on prodigal exhaustion of resources — though here the harm falls on foreigners rather than the ruler's own court, so the parallel is partial and the vanity element weaker than the cruelty/indifference element. Hostile-source analogy, honestly hedged.`,
    reliabilityNote: `Documented: EO 14169 and the 83%-cancellation announcement are on the record; the Lancet study is peer-reviewed and widely reported (WaPo, NPR, CNN, France24). The mortality numbers are explicitly projections under continued-cut assumptions, so the headline harm is forecast, not tallied — hence the caveat and a confidence below the most concrete fiscal items.`,
    caveat: `The 14-million and 9.4-million death figures are forecasts dependent on whether cuts persist and whether other donors backfill; the "91 million saved" is also a model estimate. Some programs were partially restored or waivered. The ~83% program-cancellation share is the administration's own announced figure.`,
    disconfirmer: `the aid had been demonstrably ineffective or fungible to adversaries, or other funders fully replaced it so the projected deaths did not occur.`,
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 3, caligula: 2 },
    sources: [
      {
        citation:
          "Executive Order 14169, 'Reevaluating and Realigning United States Foreign Aid' (2025-01-20)",
        type: 'official-record',
      },
      {
        citation:
          "The Lancet, 'Evaluating the impact of two decades of USAID interventions and projecting the effects of defunding on mortality up to 2030' (2025)",
        type: 'modern-scholarship',
      },
      {
        citation:
          "Washington Post, 'USAID cuts may cause 14 million more deaths in next five years, study says' (2025-07-01); CNN, 'global aid cuts could lead to 9.4 million deaths by 2030' (2026-02-04, a separate later modelling analysis)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'who-withdrawal',
    title: 'Withdrawing the United States from the World Health Organization',
    domain: 'public-health',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary: `EO 14155 (20 Jan 2025) initiated US withdrawal from the WHO; after the required one-year notice the exit became formal on 22 January 2026. The US had been the WHO's largest funder (~18% of its budget), and the order paused transfers, recalled US personnel, and sought alternative venues. Public-health scholars warned it would weaken global disease surveillance, pandemic preparedness, and US influence over health-security norms — while the WHO faced an immediate budget shock.`,
    cost: `Global pandemic-preparedness and outbreak-surveillance capacity; programs on polio, TB, and influenza-strain selection the US helped lead; American access to WHO data and a seat at the table in the next pandemic. Diffuse and partly deferred, which dampens immediate self-harm but raises systemic / health-security stakes.`,
    caligulaParallel: `A largely "collective abdication" harm rather than personal vanity; the loose Caligulan echo is contempt for an institution of shared expertise (cf. Suetonius, Caligula 34, on hostility to learning and prestige institutions) in favour of going it alone. Explicitly a stretch analogy — the act is more isolationist grievance than monument-building.`,
    reliabilityNote: `Documented: EO 14155 is on the record, and the one-year notice and the 22 Jan 2026 formal exit are confirmed (HHS fact sheet, KFF, Winston & Strawn, WHO observatory). The harm assessment draws on health-policy analysis (KFF, JOGH) and is partly forward-looking, so the consequences are projected even though the act is settled.`,
    caveat: `The stated rationale (WHO's COVID/China handling, reform failures, disproportionate US funding) reflects real criticisms many experts share; the question is whether exit versus reform-from-within was the better lever. Quantified harms (missed outbreaks, etc.) are prospective.`,
    disconfirmer: `the WHO were beyond reform and a credible US-led or alternative architecture replaced its surveillance and coordination functions.`,
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 3, caligula: 2 },
    sources: [
      {
        citation:
          "Executive Order 14155, 'Withdrawing the United States from the World Health Organization' (2025-01-20)",
        type: 'official-record',
      },
      {
        citation:
          "HHS, 'Fact Sheet: U.S. Withdrawal from the World Health Organization' (formal exit 2026-01-22)",
        type: 'official-record',
      },
      {
        citation:
          "KFF, 'U.S. Withdrawal from the World Health Organization: What's at Stake?'; Journal of Global Health, 'A global health crisis in the making' (2025)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'birthright-citizenship-eo',
    title: 'Executive order purporting to end birthright citizenship',
    domain: 'immigration',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.8,
    postCutoff: true,
    summary: `EO 14160 (20 Jan 2025) sought to deny citizenship to US-born children of undocumented or temporary-status parents, contradicting the 14th Amendment's text and United States v. Wong Kim Ark (1898). Every federal court to consider it has refused to let it take effect. In Trump v. CASA (27 Jun 2025) the Supreme Court, 6-3, did NOT rule on the merits but curtailed universal injunctions; by spring 2026 the Court appeared, at oral argument in the merits case (Trump v. Barbara, argued 1 Apr 2026), inclined to rule against the order's substance, with a decision expected by mid-2026.`,
    cost: `If ever enforced, a stateless-at-birth underclass and a frontal break with a 125-year constitutional settlement; meanwhile, litigation costs, legal uncertainty for affected families, and the CASA ruling's collateral damage to nationwide injunctions as a check on unlawful executive action. The actor's self-harm is largely a string of court defeats and a likely merits loss.`,
    caligulaParallel: `Asserting that the ruler can redefine who belongs to the political community by decree — reshaping citizenship itself by will — resonates with the imperial blurring of personal command and law that hostile sources ascribe to Caligula (Suetonius, Caligula 29; the jurist maxim that "what pleases the prince has the force of law" postdates him but captures the danger). Interpretive analogy.`,
    reliabilityNote: `Documented: EO 14160 and the Trump v. CASA decision are on the record; the universal blocking of the EO's effect is reported across SCOTUSblog, ACLU, CRS and elsewhere. The merits outcome of the birthright question itself post-dates the Jan-2026 cutoff and is graded only as an expectation (per spring-2026 oral-argument reporting), not a result — hence postCutoff, the caveat, and confidence at 0.8.`,
    caveat: `The CASA case decided injunction scope, not birthright citizenship's constitutionality; the merits ruling is post-cutoff and unresolved at this writing. The "appeared inclined to rule against" read is reporters' read of oral argument, not a holding.`,
    disconfirmer: `the 14th Amendment plausibly permitted the carve-out and the courts upheld it.`,
    scores: { selfHarm: 2, counterproductive: 4, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      {
        citation:
          "Executive Order 14160, 'Protecting the Meaning and Value of American Citizenship' (2025-01-20)",
        type: 'official-record',
      },
      {
        citation:
          'Supreme Court of the United States, Trump v. CASA, Inc., No. 24A884 (2025-06-27)',
        type: 'official-record',
      },
      {
        citation:
          'NPR / CNN coverage of Supreme Court oral argument in the birthright-citizenship merits case (Trump v. Barbara), 1 April 2026; American Immigration Council analysis of Trump v. CASA',
        type: 'journalism',
      },
    ],
  },
  {
    id: 'un-multilateral-withdrawals',
    title: 'Withdrawing from and defunding UN bodies (Human Rights Council, UNRWA, UNESCO)',
    domain: 'foreign-policy',
    era: 'second-term',
    provenance: 'documented',
    confidence: 0.85,
    summary: `EO 14199 (4 Feb 2025) withdrew the US from the UN Human Rights Council, permanently ended funding to UNRWA (the Palestinian-refugee agency), ordered a 90-day UNESCO review (the US later moving to exit again), and launched a broad review of all US support to international organizations. Coupled with the WHO and Paris exits and the aid freeze, it marked a wholesale retreat from the multilateral order the US largely built — ceding agenda-setting and norm-shaping seats to rivals.`,
    cost: `US influence inside bodies it could otherwise steer; humanitarian funding for Palestinian refugees (UNRWA) with no replacement; the cumulative signal that US treaty/organizational commitments are revocable by decree, which weakens every future US ask of allies. Self-harm is reputational and strategic rather than fiscal.`,
    caligulaParallel: `Treating multilateral institutions as tributaries that exist at the ruler's pleasure — to be funded, defunded, or quit by personal decree — echoes the imperial posture toward client kingdoms and external bodies that hostile sources attribute to Caligula (Suetonius, Caligula 22, 26: contempt for any authority but his own). Interpretive; the modern motive mixes ideology and grievance, not pure vanity.`,
    reliabilityNote: `Documented: EO 14199 is on the record and the withdrawals are reported by ASIL, NPR, JURIST, WaPo and others. Whether the net effect is "folly" versus a defensible reallocation is contested (the UNHRC and UNRWA both face genuine, widely-acknowledged criticisms), so this is graded documented on facts, interpretive on the verdict — confidence 0.85.`,
    caveat: `The stated rationales (the UNHRC's record on Israel and autocratic members; UNRWA controversies) reflect real, bipartisan-acknowledged problems; reasonable observers dispute whether exit or reform-leverage was wiser. UNESCO's final exit and downstream effects are partly developing.`,
    disconfirmer: `leaving demonstrably forced reform or freed resources for more effective channels.`,
    scores: { selfHarm: 3, counterproductive: 3, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      {
        citation:
          "Executive Order 14199, 'Withdrawing the United States From and Ending Funding to Certain United Nations Organizations...' (2025-02-04)",
        type: 'official-record',
      },
      {
        citation:
          "American Society of International Law (ASIL), 'Trump Withdraws US from UN Human Rights Council, UNRWA, and Orders Review of UNESCO Involvement' (2025)",
        type: 'journalism',
      },
      {
        citation:
          "NPR, 'Trump withdraws the U.S. from the United Nations Human Rights Council' (2025-02-03)",
        type: 'journalism',
      },
    ],
  },
  {
    id: 'first-term-baseline',
    title: 'First-term baseline — Paris exit (2017) & COVID-19 (2020)',
    domain: 'public-health',
    era: 'first-term',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'The first term set the pattern: the 2017 Paris withdrawal and, decisively, the 2020 COVID-19 response — downplaying the threat, sidelining experts, promoting unproven treatments — widely judged to have worsened the US death toll. Included as the documented foundation the second-term follies build on.',
    cost: 'Large numbers of arguably-avoidable US deaths (counterfactual estimates vary widely); economic disruption; trust in public-health institutions; a precedent for politicising science.',
    caligulaParallel:
      "Suetonius (Caligula 29–30) frames Caligula's capricious disregard for the welfare of those under his charge and his improvised pronouncements as emblematic of misrule; substituting whim and bravado for expert guidance in a deadly crisis is the analogous failure.",
    reliabilityNote:
      'Documented and heavily studied; included as historical baseline with representative sourcing. Counterfactual death tolls are estimates and contested.',
    caveat:
      'Counterfactual mortality estimates vary widely; this first-term item is summarised, not exhaustively re-sourced.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 5, systemic: 3, caligula: 3 },
    sources: [
      {
        citation: 'Lancet Commission on public policy and health in the Trump era (2021)',
        type: 'modern-scholarship',
      },
      {
        citation: 'Contemporary reporting and CDC mortality data, 2020 (multiply-sourced)',
        type: 'journalism',
      },
    ],
  },
  // ---- Global backdrop: the article opens its "march of folly" with these ----
  {
    id: 'ukraine',
    title: "Putin's war to erase Ukraine",
    domain: 'foreign-policy',
    era: 'global-backdrop',
    provenance: 'documented',
    confidence: 0.9,
    summary:
      'A "trumped-up conflict that Russian generals promised would end in a few days, now in its fifth, blood-drenched year" — the article\'s opening example of self-defeating rule.',
    cost: "Hundreds of thousands dead, Russia's economy and standing wrecked, Ukraine devastated — folly on a continental scale.",
    caligulaParallel:
      'A ruler whose conviction outran reality, sustained past every off-ramp — Tuchman\'s "persistence in error".',
    reliabilityNote:
      'Documented backdrop; cited by the article and corroborated by years of reporting.',
    scores: { selfHarm: 5, counterproductive: 4, alternative: 4, systemic: 4, caligula: 3 },
    sources: [
      {
        citation:
          'The Economist, "America must hope Donald Trump is not a new Caligula" (5 May 2026)',
        type: 'journalism',
      },
    ],
  },
  {
    id: 'gaza',
    title: 'Gaza — October 7th and the doomed war aim',
    domain: 'foreign-policy',
    era: 'global-backdrop',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'Hamas\'s October 7th 2023 gambit to provoke Israeli overreach, met by a war aim — "the complete pacification of Gaza … through siege and the pitiless application of armed force" — the article calls "surely doomed."',
    cost: 'Catastrophic Palestinian suffering; "Israel\'s global standing has collapsed" and Gaza is still not at peace.',
    caligulaParallel:
      'Cruelty mistaken for strategy: force applied past the point where it serves any achievable end.',
    reliabilityNote: 'Documented backdrop, framed by the article.',
    scores: { selfHarm: 4, counterproductive: 5, alternative: 3, systemic: 4, caligula: 2 },
    sources: [
      {
        citation:
          'The Economist, "America must hope Donald Trump is not a new Caligula" (5 May 2026)',
        type: 'journalism',
      },
    ],
  },
  {
    id: 'iran-bomb',
    title: "Iran's half-built bomb",
    domain: 'foreign-policy',
    era: 'global-backdrop',
    provenance: 'documented',
    confidence: 0.85,
    summary:
      'Assembling "almost all elements needed for a nuclear bomb, without building a device to deter an attack" — the worst of both strategies, in the article\'s telling.',
    cost: 'All the provocation of a weapons programme with none of its deterrent payoff — an invitation to the very attack it feared.',
    caligulaParallel:
      'A theocratic court whose internal logic of prestige and defiance overrode plain calculation of survival.',
    reliabilityNote: 'Documented backdrop, framed by the article.',
    scores: { selfHarm: 5, counterproductive: 4, alternative: 5, systemic: 4, caligula: 2 },
    sources: [
      {
        citation:
          'The Economist, "America must hope Donald Trump is not a new Caligula" (5 May 2026)',
        type: 'journalism',
      },
    ],
  },
  {
    id: 'democratic-recession-backdrop',
    title: 'The global democratic recession (the authoritarian wave the era sits inside)',
    domain: 'elections-democracy',
    era: 'global-backdrop',
    provenance: 'documented',
    confidence: 0.85,
    summary: `The Trump-era US actions unfold against — and feed — a measured worldwide retreat of democracy. V-Dem's Democracy Report 2025 finds autocracies now outnumber democracies (91 to 88), with ~72% of humanity living under autocracy and the average citizen's democracy level back at ~1985 levels; Freedom House's Freedom in the World 2025 records a 19th consecutive year of net global decline (the US held its "Free" status at 84/100), and its 2026 report records a 20th — with the United States posting one of the sharpest single-year drops among "Free" countries (-3 points to 81/100, reported as its lowest since the 0-100 scale began in 2002), citing unilateral executive assertion and reprisals against speech.`,
    cost: `Borne globally and inter-generationally: weaker checks, fewer free elections, more durable strongman rule. For the US specifically, the measured erosion of its own democratic standing undercuts the moral authority on which much of its alliance leverage rests.`,
    caligulaParallel: `Tuchman's "persistence in error" at civilizational scale — and the perennial slide from republic toward personal rule that the Caligula comparison is built on. The backdrop is structural rather than the work of one ruler; the Caligulan echo is the climate in which contempt for institutions becomes normal and rewarded.`,
    reliabilityNote: `Documented backdrop: V-Dem and Freedom House are the field's standard cross-national indices, transparently methodologized and multiply cited. Index scores embed coder judgment and definitional choices, so specific point-figures (e.g. the US -3) should be read as expert estimates, not exact measurements — hence not a maximal confidence.`,
    caveat: `Composite democracy indices are contested in their weighting and have a known measurement-uncertainty band; some US single-year figures come from the post-cutoff 2026 reporting cycle and should be treated as reported rather than settled. Causation between US actions and the global trend runs both ways and is not cleanly separable.`,
    disconfirmer: `the indices were measuring noise rather than a real trend.`,
    scores: { selfHarm: 3, counterproductive: 3, alternative: 3, systemic: 5, caligula: 3 },
    sources: [
      {
        citation:
          "V-Dem Institute, 'Democracy Report 2025: 25 Years of Autocratization — Democracy Trumped?'",
        type: 'modern-scholarship',
      },
      {
        citation:
          'Freedom House, \'Freedom in the World 2025\' (19th consecutive year of global decline; US "Free" at 84/100)',
        type: 'modern-scholarship',
      },
      {
        citation:
          "Freedom House, 'Freedom in the World 2026' (20th consecutive year of decline; US -3 to 81/100, its lowest since the 0-100 scale began in 2002)",
        type: 'modern-scholarship',
      },
    ],
  },
];

/**
 * Calibration baseline: Tuchman's own four canonical follies, scored on the same
 * five axes. They answer the reader's natural question — "is a Trump item really
 * at Vietnam levels?" — and validate the instrument against the book it claims to
 * operationalise. Note how Troy (a single decision) scores LOW on the systemic
 * axis: by Tuchman's own third test it is the prototype, not the archetype.
 */
export const REF_ITEMS: RefItem[] = [
  {
    id: 'ref-troy',
    title: 'Troy takes the wooden horse',
    kind: 'tuchman',
    blurb:
      "Tuchman's prototype — warnings ignored, the obvious alternative (burn it) refused. A pure single-decision folly, low on persistence.",
    scores: { selfHarm: 5, counterproductive: 5, alternative: 5, systemic: 2, caligula: 1 },
    sources: [
      {
        citation: 'Tuchman, The March of Folly, ch. 1 (Homer & Virgil)',
        type: 'modern-scholarship',
      },
    ],
  },
  {
    id: 'ref-popes',
    title: 'The Renaissance popes provoke the Reformation',
    kind: 'tuchman',
    blurb:
      'Six popes over sixty years, "deaf to disaffection" — Tuchman\'s "folly of perversity." Group folly that split Christendom.',
    scores: { selfHarm: 5, counterproductive: 4, alternative: 4, systemic: 5, caligula: 3 },
    sources: [
      { citation: 'Tuchman, The March of Folly, ch. 3 (1470–1530)', type: 'modern-scholarship' },
    ],
  },
  {
    id: 'ref-america',
    title: 'Britain loses America',
    kind: 'tuchman',
    blurb:
      'Successive governments defending an abstract principle against the state\'s interest, ignoring Burke and Chatham — a "folly of the system."',
    scores: { selfHarm: 5, counterproductive: 5, alternative: 5, systemic: 5, caligula: 2 },
    sources: [
      { citation: 'Tuchman, The March of Folly, ch. 4 (c. 1763–83)', type: 'modern-scholarship' },
    ],
  },
  {
    id: 'ref-vietnam',
    title: 'America betrays herself in Vietnam',
    kind: 'tuchman',
    blurb:
      'Five administrations escalating an unwinnable war they knew was failing — her fully documented archetype of systemic, persisting folly.',
    scores: { selfHarm: 5, counterproductive: 5, alternative: 4, systemic: 5, caligula: 1 },
    sources: [
      { citation: 'Tuchman, The March of Folly, ch. 5 (1945–73)', type: 'modern-scholarship' },
    ],
  },
  // ---- Caligula's own acts, scored symmetrically. Note the LOW systemic scores:
  // his folly died with him in AD 41 — exactly Tuchman's point about single rulers. ----
  {
    id: 'cal-jerusalem',
    title: 'Caligula: the statue for the Jerusalem Temple',
    kind: 'caligula',
    blurb:
      'Ordered a colossal statue of himself erected in the Temple (AD 40); the governor stalled, the population resisted, and it lapsed at his death. His best-attested act of overreach.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 5, systemic: 2, caligula: 5 },
    sources: [
      {
        citation: 'Philo, Embassy to Gaius 197–338; Josephus, Antiquities 18.261–309',
        type: 'primary',
      },
    ],
  },
  {
    id: 'cal-maiestas',
    title: 'Caligula: reviving the treason trials',
    kind: 'caligula',
    blurb:
      'Revived maiestas prosecutions to punish enemies and seize estates (per hostile sources) — terror as a tool against the elite who would ultimately kill him.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 3, caligula: 4 },
    sources: [
      {
        citation: 'Suetonius, Caligula 30, 41; Cassius Dio 59.18 (primary-hostile)',
        type: 'primary-hostile',
      },
    ],
  },
  {
    id: 'cal-humiliation',
    title: 'Caligula: the humiliation programme',
    kind: 'caligula',
    blurb:
      'Systematically degrading the Senate (Winterling\'s "calculated humiliation"). It exposed the fiction of senatorial partnership — and helped get him assassinated.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 2, caligula: 5 },
    sources: [
      {
        citation: 'Suetonius, Caligula 26; A. Winterling, Caligula (2011)',
        type: 'modern-scholarship',
      },
    ],
  },
  {
    id: 'cal-baiae',
    title: 'Caligula: the bridge of boats at Baiae',
    kind: 'caligula',
    blurb:
      'A pontoon bridge across the bay, reportedly crossed in a gold cloak — a costly, militarily pointless spectacle for personal glory. Pure vanity, little systemic cost.',
    scores: { selfHarm: 2, counterproductive: 3, alternative: 4, systemic: 1, caligula: 5 },
    sources: [
      {
        citation: 'Suetonius, Caligula 19; Cassius Dio 59.17 (primary-hostile)',
        type: 'primary-hostile',
      },
    ],
  },
  {
    id: 'cal-treasury',
    title: 'Caligula: exhausting the treasury',
    kind: 'caligula',
    blurb:
      'Draining the inherited surplus on donatives, games and building, then raising money by novel taxes and (allegedly) confiscations. Real fiscal strain, exaggerated by the class that paid.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 2, caligula: 4 },
    sources: [
      {
        citation: 'Suetonius, Caligula 37–41 (primary-hostile); modern scholarship',
        type: 'primary-hostile',
      },
    ],
  },
];

/** "This would NOT be folly if…" — falsification prompts keyed by folly id. */
export const DISCONFIRMERS: Record<string, string> = {
  'iran-war-2026':
    "a durable settlement holds, Iran's programme is verifiably set back, and no regional arms race follows.",
  greenland:
    'the pressure actually delivered a freely-agreed deal that left the alliance stronger, not warier.',
  'alienating-allies':
    'allies concluded better terms and stayed closer, rather than hedging toward strategic autonomy.',
  'liberation-day-tariffs':
    'reshoring and the trade balance measurably improve by 2027 without sustained consumer-price pain.',
  'loyalist-appointments':
    'the appointees prove competent in office and institutions function as well as under expert predecessors.',
  'gilded-oval':
    "it stays purely aesthetic and never tracks with substantive contempt for the office's constraints.",
  'military-parade':
    'it was a one-off bipartisan anniversary, not a recurring personalist spectacle.',
  'trump-class-battleship':
    'Congress funds a clear capability gap it fills better than distributed alternatives — or it is quietly shelved at no cost.',
  'anthropic-dod':
    'the designation is shown to rest on a genuine security finding rather than a refusal to drop use-limits.',
  'doj-retribution':
    'the prosecutions rest on evidence that survives appeal and would have been brought regardless of politics.',
  'ig-purge-schedule-f':
    'oversight quality and state capacity are unharmed and the courts uphold the removals.',
  'national-guard': 'a genuine emergency justified the deployments and courts find them lawful.',
  'alien-enemies-cecot':
    'the removals withstand judicial review and the wrongly-removed are shown to have had due process.',
  'vaccine-rollback':
    'vaccination rates and outbreak severity are unaffected or improve under the new guidance.',
  'science-cuts':
    'US scientific output and talent retention hold up, and the cuts removed real waste.',
  'climate-rollback':
    'emissions fall anyway and the repeal survives the courts without raising long-run costs.',
  'press-suppression':
    'the suits rest on genuine defamation and press scrutiny is empirically undiminished.',
  'first-term-baseline':
    'the counterfactual death toll was not materially worse than competent management would have achieved.',
  ukraine:
    'Russia secures a durable strategic gain at a cost it would rationally have accepted in advance.',
  gaza: 'the war aim is actually achieved and leaves Israel more secure and better regarded.',
  'iran-bomb': 'the threshold posture deters attack as well as a finished weapon would have.',
};
