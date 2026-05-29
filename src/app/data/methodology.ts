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
    provenance: 'The Economist\'s framing: rulers "blind … to their own people\'s long-term interests".',
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
    provenance: "Tuchman's third test; the article's closing question of whether the folly is \"systemic\".",
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
      'Post-dates the January 2026 cutoff. Casualty figures, the circumstances of Khamenei\'s death, whether nuclear objectives were achieved, and the durability of any ceasefire are all unverified.',
    engineering: {
      note:
        'Physics cross-check (OSINT Defense-CAD). Claims of a clean, decisive air campaign can be sanity-checked against first-principles engagement modelling — ballistic/hypersonic kinematics, BVR and seeker link budgets, integrated kill-chains and EW link-budgets — rather than taken from official "objectives met" framing. The toolkit\'s standing lesson is that some goals are physically out of reach (e.g. jamming a frequency-hopping LPI datalink at standoff is not achievable), so a "few-week, low-cost" decisive outcome should carry the same burden of proof the model demands of any system.',
      sources: [
        { citation: 'OSINT Defense-CAD — engagement & kill-chain physics toolkit (github.com/Aroxora/Defense-CAD; osint-defense.web.app)', type: 'modern-scholarship' },
      ],
    },
    scores: { selfHarm: 4, counterproductive: 3, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      { citation: "Wikipedia, '2026 Iran war' / 'Timeline of the 2026 Iran war' (accessed 2026-05)", type: 'journalism' },
      { citation: "U.S. Department of State, 'Operation Epic Fury and International Law' (2026-04)", type: 'official-record' },
      { citation: "Al Jazeera, 'Operation Epic Fury has ended: Is the Iran war over?' (2026-05-06)", type: 'journalism' },
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
    cost: 'US alliance credibility and NATO cohesion; Danish/EU relations; Greenlanders\' self-determination as a bargaining chip; the precedent that allies\' borders are negotiable by coercion.',
    caligulaParallel:
      'Coveting territory for prestige and treating sovereign relationships as instruments of personal will resembles the imperial assumption that allied kingdoms exist at the princeps\' pleasure (Suetonius, Caligula 22, 26 — a hostile source).',
    reliabilityNote: 'Documented: on-record presidential statements, White House confirmation that force was "always an option", and wide coverage; the Davos walkback is also on record.',
    caveat: 'The Davos walkback was conditional (force "ruled out" while tariffs and pressure continued); the lasting-damage judgment is interpretive.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 2, caligula: 4 },
    sources: [
      { citation: "CNN, 'Trump says anything less than US control of Greenland is unacceptable' (2026-01-14)", type: 'journalism' },
      { citation: "NPR, 'In Davos speech, Trump ruled out using military force to acquire Greenland' (2026-01-21)", type: 'journalism' },
      { citation: "UK House of Commons Library, 'President Trump and Greenland: FAQs', CBP-10472", type: 'official-record' },
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
    reliabilityNote: 'Documented as a pattern by CSIS, Carnegie, Baker Institute, NATO/Davos transcripts and NPR. Some bilateral specifics are single-sourced and were dropped.',
    caveat: 'Some bilateral specifics (e.g. a reported Spain trade-cutoff threat) are single-sourced or contested and are not asserted here.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      { citation: "CSIS, 'The Transatlantic Alliance in the Age of Trump: The Coming Collisions'", type: 'journalism' },
      { citation: "Carnegie Endowment, 'Trump Turns NATO into a Tool of Coercion' (2026-05)", type: 'journalism' },
      { citation: "NATO, 'Remarks by Secretary General at WEF Davos' (2026-01-21)", type: 'official-record' },
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
      'Suetonius (Caligula 38–41) describes improvised, arbitrary fiscal exactions to fund spectacle after squandering the treasury; the tariff regime\'s erratic, announced-then-paused improvisation echoes rule-by-whim over revenue.',
    reliabilityNote: 'Documented: EO 14257 is on the record; effects analysed by Tax Foundation, CSIS, CFR, Cato, AEI and peer-reviewed work. Magnitudes vary by model but direction is consistent.',
    caveat: 'Specific magnitudes (effective-rate level, food-price increment, deficit effect) are estimates that vary by model; the direction of effect is robust.',
    scores: { selfHarm: 4, counterproductive: 5, alternative: 4, systemic: 3, caligula: 2 },
    sources: [
      { citation: "Executive Order 14257, 'Regulating Imports With a Reciprocal Tariff…' (2025-04-02)", type: 'official-record' },
      { citation: "CFR, 'A Year After Liberation Day, Experts Review the Costs of Trump's Tariffs' (2026)", type: 'journalism' },
      { citation: "ScienceDirect, 'Making America great again? The economic impacts of Liberation Day tariffs' (2025)", type: 'modern-scholarship' },
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
    reliabilityNote: 'Documented that loyalty was a stated criterion and confirmations were contested. The "net folly" judgment is interpretive; competence outcomes vary by official.',
    caveat: 'The Incitatus parallel is contested even in antiquity (the horse was never actually made consul); used illustratively.',
    scores: { selfHarm: 3, counterproductive: 3, alternative: 4, systemic: 4, caligula: 5 },
    sources: [
      { citation: "Washington Post, 'Trump selections for Cabinet advance, despite initial controversy' (2025-01-17)", type: 'journalism' },
      { citation: "Wikipedia, 'Second cabinet of Donald Trump' (accessed 2026-05)", type: 'journalism' },
      { citation: "The White House, 'President Trump Announces Cabinet… Appointments' (2025-01)", type: 'primary' },
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
    cost: "Mostly reputational and symbolic; it normalises personalist, monarchical iconography in a republican office. Material cost was modest (reportedly partly self-funded).",
    caligulaParallel:
      'Suetonius (Caligula 22, 52) emphasises his love of gold, theatrical costume and self-display, and his blurring of ruler and god; gilding the seat of power and centring one\'s own image is a vanity echo. Modern scholars caution Suetonius exaggerates for moral effect.',
    reliabilityNote: 'Documented via photographs and multiple outlets. High symbolic salience for the "caligula" axis; the facts are firm, the folly weight modest.',
    scores: { selfHarm: 1, counterproductive: 1, alternative: 2, systemic: 2, caligula: 5 },
    sources: [
      { citation: "CNN, 'Flags, figurines and gold everywhere: Trump transforms the Oval Office into a gilded gallery' (2025-03-16)", type: 'journalism' },
      { citation: "France24, 'Trump brings the bling with gold-plated Oval Office makeover' (2025-03-20)", type: 'journalism' },
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
      'On 14 June 2025 a large parade (~6,700 troops, 28 tanks, ~50 aircraft) marked the Army\'s 250th anniversary — coinciding with Trump\'s birthday — at a cost the Army later put at ~$30M. Critics framed it as a personalist spectacle of the sort US presidents had long avoided.',
    cost: '~$30M public funds; street/tank-damage repair; opportunity cost and the symbolism of tanks in the capital.',
    caligulaParallel:
      'Caligula\'s pontoon bridge across the Bay of Baiae (Suetonius 19; Dio 59.17), reportedly crossed in a gold cloak — a costly, militarily pointless spectacle for personal glory — is the archetype a triumphal birthday-adjacent parade evokes. The anecdote comes from hostile sources.',
    reliabilityNote: 'Documented: the Army\'s own post-event cost figure and parade composition are reported. The birthday coincidence is factual; the personalist framing is interpretive.',
    caveat: 'Cost estimates ranged from ~$30M (Army post-event) to ~$45M (pre-event press estimates); the headline uses the Army\'s number.',
    scores: { selfHarm: 1, counterproductive: 2, alternative: 3, systemic: 2, caligula: 5 },
    sources: [
      { citation: "Stars and Stripes, 'Army says 250th anniversary celebration in DC cost $30 million' (2025-07-22)", type: 'journalism' },
      { citation: "NPR, 'Army celebrates its 250th year, Trump celebrates his 79th' (2025-06-14)", type: 'journalism' },
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
      'On 22 Dec 2025 Trump announced a "Trump-class" guided-missile battleship (lead ship USS Defiant) as part of a "Golden Fleet." The announcement is real; everything beyond it — nuclear propulsion, 20–25 hulls, ~$18B per ship, delivery ~2036 — is unfunded projection, and analysts (CSIS) expect cancellation before any hull is built.',
    cost: 'Conditional only. If pursued, a large opportunity cost (~$12–19B per hull) against more survivable, distributed naval investment. No funds appropriated, so realised cost is currently zero.',
    caligulaParallel:
      'Naming a colossal, dubious warship class after oneself and branding a "Golden Fleet" fuses monument-building with self-image — loosely kin to Caligula\'s ornate pleasure-galleys and the Nemi ships. The linkage is interpretive.',
    reliabilityNote: 'Reported. The announcement and program-document existence are on the record, but the program is unfunded, the specs are projections, and named experts predict cancellation.',
    caveat: 'Only the announcement is documented; the program is unfunded and may never be built. Scores reflect the gesture, not a delivered ship.',
    engineering: {
      note:
        'Physics cross-check (OSINT Defense-CAD). A first-principles cost-benefit model — value_index = (benefit × survivability) / lifecycle-cost — ranks the conceptual "Trump-class" battleship LAST among modelled DoD options. The reasons are physical, not political: a battleship is a large radar-cross-section, high-value, concentrated target against modern anti-ship ballistic, cruise and hypersonic fires (detection range scales as R ∝ σ^¼), at a lifecycle cost on the order of a small carrier programme for a handful of hulls, and it runs directly against Distributed Maritime Operations (dispersal). Networked, distributable, attritable alternatives (DDG(X), Collaborative Combat Aircraft) and the real PLA comparator (Type 055) all score higher. This is exactly the "counter-productive / a feasible alternative existed" case, computed rather than asserted.',
      sources: [
        { citation: 'OSINT Defense-CAD — "COST_BENEFIT_ANALYSIS.md": the conceptual Trump-class battleship ranks last on value_index (github.com/Aroxora/Defense-CAD)', type: 'modern-scholarship' },
        { citation: 'OSINT Defense-CAD interactive cost-benefit & survivability app (osint-defense.web.app)', type: 'modern-scholarship' },
      ],
    },
    scores: { selfHarm: 1, counterproductive: 2, alternative: 3, systemic: 1, caligula: 4 },
    sources: [
      { citation: "USNI News, 'Trump Unveils New Battleship Class; Proposed USS Defiant…' (2025-12-22)", type: 'journalism' },
      { citation: "U.S. Navy, 'President Trump Announces New Battleship' (navy.mil, 2025-12-22)", type: 'primary' },
      { citation: "CSIS, 'The Golden Fleet's Battleship Will Never Sail' (Cancian)", type: 'journalism' },
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
    coi: 'The subject is the author\'s own organisation (Anthropic). This assessment relies solely on third-party reporting.',
    summary:
      'The documented, pre-cutoff fact: Anthropic signed a ~$200M DoD prototype agreement in July 2025, and deployment talks stalled over the Pentagon\'s demand for unfettered model access versus Anthropic\'s refusal of fully-autonomous-weapon and mass-surveillance uses. The escalation — a "supply-chain risk" designation, lawsuits, an injunction — post-dates the cutoff.',
    cost: 'If the designation stands: US defense access to a frontier safety-conscious lab; a chilling effect on AI firms that set use limits; the signal of coercion over negotiation. Costs are contingent on a still-unresolved dispute.',
    caligulaParallel:
      'Reportedly punishing a party for refusing total submission — demanding "unfettered access" and retaliating against limits — loosely mirrors the demand for absolute compliance attributed to Caligula by hostile sources. Interpretive only.',
    reliabilityNote: 'Reported, and the operative events post-date the cutoff. Disclosure: the subject company is the author\'s own organisation; this assessment relies solely on third-party reporting.',
    caveat: 'Post-dates the January 2026 cutoff. Litigation ongoing; the designation\'s legality and full rationale are non-public. Only the July 2025 contract and the negotiation impasse are firmly documented.',
    scores: { selfHarm: 2, counterproductive: 3, alternative: 4, systemic: 3, caligula: 3 },
    sources: [
      { citation: "Breaking Defense, 'Anthropic, Google and xAI win $200M each from Pentagon AI chief' (2025-07)", type: 'journalism' },
      { citation: "Anthropic, 'Anthropic awarded $200M DOD agreement for AI capabilities' (2025-07)", type: 'primary' },
      { citation: "Wikipedia, 'Anthropic–United States Department of Defense dispute' (accessed 2026-05)", type: 'journalism' },
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
    reliabilityNote: 'Documented: indictments and dismissals are on the court record; the "weaponization" characterisation is widely reported. Motive is inferential.',
    caveat: 'Prosecutorial motive is inferential; some cases remain in litigation.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 5, caligula: 4 },
    sources: [
      { citation: "Univ. of Iowa Journal of Gender, Race & Justice, 'President Trump's Weaponization of DOJ…' (2025-11)", type: 'modern-scholarship' },
      { citation: "Protect Democracy, 'Retaliatory Action Tracker'", type: 'official-record' },
      { citation: "Axios, 'Unlikely enforcers shape Trump's weaponization crusade' (2025-08-21)", type: 'journalism' },
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
    reliabilityNote: 'Documented: the IG firings and court ruling are on the record; Schedule F and DOGE figures widely reported. The ~300k aggregate has churn (some rehires).',
    caveat: 'The ~300,000 figure is an announced aggregate; some layoffs were paused, rehired or litigated, so net effects are evolving.',
    scores: { selfHarm: 3, counterproductive: 3, alternative: 4, systemic: 5, caligula: 4 },
    sources: [
      { citation: "House Oversight Democrats letter re: federal workforce purge (2025-02-03)", type: 'official-record' },
      { citation: "Wikipedia, '2025 United States federal mass layoffs' (accessed 2026-05)", type: 'journalism' },
      { citation: "Government Executive, 'Project 2025 wanted to hobble the federal workforce. DOGE has…' (2025-04)", type: 'journalism' },
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
      'In June 2025 Trump federalised ~2,000 Guard troops and active-duty Marines into Los Angeles over Governor Newsom\'s objection, and later attempted Portland and Chicago; courts found Posse Comitatus concerns, the Supreme Court halted Chicago, and deployments reportedly ended on 31 Dec 2025.',
    cost: 'Civil-military norms and federalism; trust between troops and citizens; legal defeats; a precedent for domestic military policing.',
    caligulaParallel:
      'Turning armed force inward as an instrument of personal authority — the ruler\'s troops over the magistrates\' objection — echoes the Praetorian dynamic and Caligula\'s reliance on coercive display over consent (Suetonius 26, 48–49; hostile source).',
    reliabilityNote: 'Documented: deployment, legal authority cited, court findings and termination date are on the record.',
    caveat: 'The 31 Dec 2025 end-date and final court dispositions are at the edge of the cutoff window; some appellate outcomes may post-date it.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 4, caligula: 4 },
    sources: [
      { citation: "PBS NewsHour, 'What U.S. law says about Trump's deployment of active-duty troops to Los Angeles' (2025)", type: 'journalism' },
      { citation: "NPR, 'As Trump federalizes National Guard, is the Insurrection Act on the table?' (2025-06-09)", type: 'journalism' },
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
      'In March 2025 Trump invoked the 1798 Alien Enemies Act to fast-track removal of ~250 Venezuelans to El Salvador\'s CECOT mega-prison, many without convictions or due process; courts found the invocation unlawful and the Abrego Garcia removal a wrongful violation of a protective order. A year on, deportees remained stuck abroad.',
    cost: 'Wrongly removed individuals and their families; due-process and habeas guarantees; US standing on the rule of law; court-battle costs; risk to citizens if error rates persist.',
    caligulaParallel:
      'Suetonius (Caligula 27–29) catalogs summary, arbitrary punishments without trial as a hallmark of tyranny; bypassing courts to imprison people abroad on thin evidence is an analogous disregard for due process — though scholars warn such ancient lists are moralising.',
    reliabilityNote: 'Documented: the invocation, the removals, the named judges and appellate ruling, and the wrongful-deportation admission are extensively on the record.',
    caveat: 'Exact deportee counts vary by reporting; the core unlawful-invocation and wrongful-removal findings are firmly on the record.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 4, caligula: 4 },
    sources: [
      { citation: "CNN, 'Federal appeals court says Trump unlawfully invoked the Alien Enemies Act' (2025-09-02)", type: 'journalism' },
      { citation: "Washington Post, 'Deportees sent by Trump to Salvadoran prison are still stuck a year later' (2026-03-15)", type: 'journalism' },
      { citation: "Texas Tribune, 'Trump admin knew most deported Venezuelans had no U.S. convictions' (2025-05-30)", type: 'journalism' },
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
      'Elevating a ruler\'s idiosyncratic doctrine over expert consensus and purging officials who refuse to ratify it parallels Caligula\'s reported demand that reality bend to his will (Philo, Embassy to Gaius). Interpretive, hostile-source analogy.',
    reliabilityNote: 'Documented: the ACIP replacement, schedule changes, Monarez firing and outbreak totals are reported. The share attributable to policy vs broader hesitancy is debated.',
    caveat: 'The outbreak has multiple drivers; policy is a contributing, not sole, cause. Case and death counts vary by source.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 5, systemic: 4, caligula: 3 },
    sources: [
      { citation: "Bloomberg, 'Measles Cases 2025… in Year RFK Jr. Changed Vaccine Guidance' (2026-01-08)", type: 'journalism' },
      { citation: "ProPublica, 'The CDC Buried a Measles Forecast That Stressed the Need for Vaccinations'", type: 'journalism' },
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
      'In 2025 the administration cut or froze billions in grants, terminated large numbers of NIH grants, and moved to cap indirect costs at 15% across NIH/DOE/NSF; PhD admissions fell and US scientists\' foreign job applications rose. Courts and Congress pushed back, partly restoring funds.',
    cost: 'US biomedical and basic-science leadership; early-career researchers and universities; long-run innovation and competitiveness; the risk of permanent brain drain.',
    caligulaParallel:
      'Suetonius (Caligula 34) reports Caligula\'s hostility to learning and attacks on intellectual prestige (threatening to remove Homer and the busts of esteemed authors); kneecapping the research establishment echoes contempt for knowledge institutions.',
    reliabilityNote: 'Documented: program effects reported by Brennan Center, Nature, Science/AAAS and others; reversals partly mitigate, so net effect is evolving. Specific totals vary by source.',
    caveat: 'Specific dollar/grant/percentage figures are approximate and vary by source; some cuts were blocked or reversed, so net long-run damage is uncertain.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 4, caligula: 3 },
    sources: [
      { citation: "Brennan Center, 'The Cost of the Trump Administration's Attacks on Research Funding'", type: 'modern-scholarship' },
      { citation: "Nature, 'US science after a year of Trump: what has been lost and what remains' (2026)", type: 'modern-scholarship' },
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
    reliabilityNote: 'Documented: the EO withdrawal and the EPA finalisation are official acts widely reported. The Feb 2026 finalisation is at the edge of the cutoff and faces litigation.',
    caveat: 'The Feb 2026 endangerment repeal faces years of likely-Supreme-Court litigation and could be vacated.',
    scores: { selfHarm: 3, counterproductive: 4, alternative: 4, systemic: 4, caligula: 2 },
    sources: [
      { citation: "NPR, 'Trump's EPA will end the basis for federal climate actions' (2026-02-11)", type: 'journalism' },
      { citation: "Winston & Strawn, 'President Trump Signs EO Withdrawing the U.S. From Paris Agreement' (2025)", type: 'official-record' },
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
    cost: 'Press freedom and First-Amendment norms; news organisations\' independence (settlements as de facto tribute); public scrutiny of power; self-censorship incentives.',
    caligulaParallel:
      'Caligula is reported to have punished writers and satirists — most luridly, burning a farce-writer alive over a double-meaning line (Suetonius 27), a single hostile source ~80 years later. The interpretive point — controlling the narrative by punishing critics — stands independently of that anecdote.',
    reliabilityNote: 'Documented: settlements, suits, the AP ban and pool change, and FCC probes are largely on the record. Settlement amounts and pending-suit outcomes vary.',
    caveat: 'Some suits are pending; settlement figures vary by report. The "burned a writer alive" parallel is a contested hostile-source anecdote, used illustratively only.',
    scores: { selfHarm: 2, counterproductive: 3, alternative: 4, systemic: 4, caligula: 4 },
    sources: [
      { citation: "Poynter, 'The numbers that defined the Trump administration's attacks against the press in 2025'", type: 'journalism' },
      { citation: "Washington Post, 'Trump's escalating attacks on the media: A running tally of lawsuits' (2026-01-25)", type: 'journalism' },
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
      'Suetonius (Caligula 29–30) frames Caligula\'s capricious disregard for the welfare of those under his charge and his improvised pronouncements as emblematic of misrule; substituting whim and bravado for expert guidance in a deadly crisis is the analogous failure.',
    reliabilityNote: 'Documented and heavily studied; included as historical baseline with representative sourcing. Counterfactual death tolls are estimates and contested.',
    caveat: 'Counterfactual mortality estimates vary widely; this first-term item is summarised, not exhaustively re-sourced.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 5, systemic: 3, caligula: 3 },
    sources: [
      { citation: 'Lancet Commission on public policy and health in the Trump era (2021)', type: 'modern-scholarship' },
      { citation: 'Contemporary reporting and CDC mortality data, 2020 (multiply-sourced)', type: 'journalism' },
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
    cost: 'Hundreds of thousands dead, Russia\'s economy and standing wrecked, Ukraine devastated — folly on a continental scale.',
    caligulaParallel: 'A ruler whose conviction outran reality, sustained past every off-ramp — Tuchman\'s "persistence in error".',
    reliabilityNote: 'Documented backdrop; cited by the article and corroborated by years of reporting.',
    scores: { selfHarm: 5, counterproductive: 4, alternative: 4, systemic: 4, caligula: 3 },
    sources: [
      { citation: 'The Economist, "America must hope Donald Trump is not a new Caligula" (5 May 2026)', type: 'journalism' },
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
    caligulaParallel: 'Cruelty mistaken for strategy: force applied past the point where it serves any achievable end.',
    reliabilityNote: 'Documented backdrop, framed by the article.',
    scores: { selfHarm: 4, counterproductive: 5, alternative: 3, systemic: 4, caligula: 2 },
    sources: [
      { citation: 'The Economist, "America must hope Donald Trump is not a new Caligula" (5 May 2026)', type: 'journalism' },
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
    caligulaParallel: 'A theocratic court whose internal logic of prestige and defiance overrode plain calculation of survival.',
    reliabilityNote: 'Documented backdrop, framed by the article.',
    scores: { selfHarm: 5, counterproductive: 4, alternative: 5, systemic: 4, caligula: 2 },
    sources: [
      { citation: 'The Economist, "America must hope Donald Trump is not a new Caligula" (5 May 2026)', type: 'journalism' },
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
    blurb: 'Tuchman\'s prototype — warnings ignored, the obvious alternative (burn it) refused. A pure single-decision folly, low on persistence.',
    scores: { selfHarm: 5, counterproductive: 5, alternative: 5, systemic: 2, caligula: 1 },
    sources: [{ citation: 'Tuchman, The March of Folly, ch. 1 (Homer & Virgil)', type: 'modern-scholarship' }],
  },
  {
    id: 'ref-popes',
    title: 'The Renaissance popes provoke the Reformation',
    kind: 'tuchman',
    blurb: 'Six popes over sixty years, "deaf to disaffection" — Tuchman\'s "folly of perversity." Group folly that split Christendom.',
    scores: { selfHarm: 5, counterproductive: 4, alternative: 4, systemic: 5, caligula: 3 },
    sources: [{ citation: 'Tuchman, The March of Folly, ch. 3 (1470–1530)', type: 'modern-scholarship' }],
  },
  {
    id: 'ref-america',
    title: 'Britain loses America',
    kind: 'tuchman',
    blurb: 'Successive governments defending an abstract principle against the state\'s interest, ignoring Burke and Chatham — a "folly of the system."',
    scores: { selfHarm: 5, counterproductive: 5, alternative: 5, systemic: 5, caligula: 2 },
    sources: [{ citation: 'Tuchman, The March of Folly, ch. 4 (c. 1763–83)', type: 'modern-scholarship' }],
  },
  {
    id: 'ref-vietnam',
    title: 'America betrays herself in Vietnam',
    kind: 'tuchman',
    blurb: 'Five administrations escalating an unwinnable war they knew was failing — her fully documented archetype of systemic, persisting folly.',
    scores: { selfHarm: 5, counterproductive: 5, alternative: 4, systemic: 5, caligula: 1 },
    sources: [{ citation: 'Tuchman, The March of Folly, ch. 5 (1945–73)', type: 'modern-scholarship' }],
  },
  // ---- Caligula's own acts, scored symmetrically. Note the LOW systemic scores:
  // his folly died with him in AD 41 — exactly Tuchman's point about single rulers. ----
  {
    id: 'cal-jerusalem',
    title: 'Caligula: the statue for the Jerusalem Temple',
    kind: 'caligula',
    blurb: 'Ordered a colossal statue of himself erected in the Temple (AD 40); the governor stalled, the population resisted, and it lapsed at his death. His best-attested act of overreach.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 5, systemic: 2, caligula: 5 },
    sources: [{ citation: 'Philo, Embassy to Gaius 197–338; Josephus, Antiquities 18.261–309', type: 'primary' }],
  },
  {
    id: 'cal-maiestas',
    title: 'Caligula: reviving the treason trials',
    kind: 'caligula',
    blurb: 'Revived maiestas prosecutions to punish enemies and seize estates (per hostile sources) — terror as a tool against the elite who would ultimately kill him.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 3, caligula: 4 },
    sources: [{ citation: 'Suetonius, Caligula 30, 41; Cassius Dio 59.18 (primary-hostile)', type: 'primary-hostile' }],
  },
  {
    id: 'cal-humiliation',
    title: 'Caligula: the humiliation programme',
    kind: 'caligula',
    blurb: 'Systematically degrading the Senate (Winterling\'s "calculated humiliation"). It exposed the fiction of senatorial partnership — and helped get him assassinated.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 2, caligula: 5 },
    sources: [{ citation: 'Suetonius, Caligula 26; A. Winterling, Caligula (2011)', type: 'modern-scholarship' }],
  },
  {
    id: 'cal-baiae',
    title: 'Caligula: the bridge of boats at Baiae',
    kind: 'caligula',
    blurb: 'A pontoon bridge across the bay, reportedly crossed in a gold cloak — a costly, militarily pointless spectacle for personal glory. Pure vanity, little systemic cost.',
    scores: { selfHarm: 2, counterproductive: 3, alternative: 4, systemic: 1, caligula: 5 },
    sources: [{ citation: 'Suetonius, Caligula 19; Cassius Dio 59.17 (primary-hostile)', type: 'primary-hostile' }],
  },
  {
    id: 'cal-treasury',
    title: 'Caligula: exhausting the treasury',
    kind: 'caligula',
    blurb: 'Draining the inherited surplus on donatives, games and building, then raising money by novel taxes and (allegedly) confiscations. Real fiscal strain, exaggerated by the class that paid.',
    scores: { selfHarm: 4, counterproductive: 4, alternative: 4, systemic: 2, caligula: 4 },
    sources: [{ citation: 'Suetonius, Caligula 37–41 (primary-hostile); modern scholarship', type: 'primary-hostile' }],
  },
];

/** "This would NOT be folly if…" — falsification prompts keyed by folly id. */
export const DISCONFIRMERS: Record<string, string> = {
  'iran-war-2026': 'a durable settlement holds, Iran\'s programme is verifiably set back, and no regional arms race follows.',
  greenland: 'the pressure actually delivered a freely-agreed deal that left the alliance stronger, not warier.',
  'alienating-allies': 'allies concluded better terms and stayed closer, rather than hedging toward strategic autonomy.',
  'liberation-day-tariffs': 'reshoring and the trade balance measurably improve by 2027 without sustained consumer-price pain.',
  'loyalist-appointments': 'the appointees prove competent in office and institutions function as well as under expert predecessors.',
  'gilded-oval': 'it stays purely aesthetic and never tracks with substantive contempt for the office\'s constraints.',
  'military-parade': 'it was a one-off bipartisan anniversary, not a recurring personalist spectacle.',
  'trump-class-battleship': 'Congress funds a clear capability gap it fills better than distributed alternatives — or it is quietly shelved at no cost.',
  'anthropic-dod': 'the designation is shown to rest on a genuine security finding rather than a refusal to drop use-limits.',
  'doj-retribution': 'the prosecutions rest on evidence that survives appeal and would have been brought regardless of politics.',
  'ig-purge-schedule-f': 'oversight quality and state capacity are unharmed and the courts uphold the removals.',
  'national-guard': 'a genuine emergency justified the deployments and courts find them lawful.',
  'alien-enemies-cecot': 'the removals withstand judicial review and the wrongly-removed are shown to have had due process.',
  'vaccine-rollback': 'vaccination rates and outbreak severity are unaffected or improve under the new guidance.',
  'science-cuts': 'US scientific output and talent retention hold up, and the cuts removed real waste.',
  'climate-rollback': 'emissions fall anyway and the repeal survives the courts without raising long-run costs.',
  'press-suppression': 'the suits rest on genuine defamation and press scrutiny is empirically undiminished.',
  'first-term-baseline': 'the counterfactual death toll was not materially worse than competent management would have achieved.',
  ukraine: 'Russia secures a durable strategic gain at a cost it would rationally have accepted in advance.',
  gaza: 'the war aim is actually achieved and leaves Israel more secure and better regarded.',
  'iran-bomb': 'the threshold posture deters attack as well as a finished weapon would have.',
};
