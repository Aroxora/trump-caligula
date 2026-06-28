import { Domain, InlineSource } from './models';

/**
 * The Caligula Window forecast — forward-dated "folly" projections across the
 * ~900 days remaining to the constitutional end of the second term (noon, 20
 * Jan 2029). Every item is, by design, the site's lowest evidentiary grade:
 * `speculative` in the catalogue's vocabulary — a scenario carrying a
 * probability band and a falsification prompt, grounded in a *documented*
 * present-day trajectory rather than asserted as fact. The aim is calibration,
 * not prophecy: each projection names the trend it extrapolates and the
 * observable signals that would confirm or kill it.
 *
 * This data is the output of a parallel forecast + adversarial-calibration pass
 * (21 projections, each drafted from a real trajectory then re-checked by a
 * skeptic for groundedness, falsifiability, calibrated probability, and for not
 * asserting any future act as fact about a real person), plus a small number of
 * curated, web-grounded additions. It is regenerated, not hand-edited; treat the
 * prose as machine-drafted-then-reviewed.
 */

export type ForecastProbability = 'likely' | 'plausible' | 'wildcard';

export interface ForecastProjection {
  id: string;
  /** Display window, e.g. "2026 H2". */
  window: string;
  /** Sortable key: 2026.5, 2027, 2028, 2029. */
  windowSort: number;
  title: string;
  domain: Domain;
  probability: ForecastProbability;
  /** 1-2 sentence scenario, hedged as a projection. */
  thesis: string;
  /** The causal reasoning: which documented trajectory this extends, and how. */
  mechanism: string;
  /** Observable signals that would confirm or deny it as the window unfolds. */
  leadingIndicators: string[];
  /** The Roman/Caligulan echo, honestly hedged. */
  caligulaParallel: string;
  /** Completing clause - the UI prepends "This would NOT be folly if...". */
  disconfirmer: string;
  sources: InlineSource[];
}

/** Human labels + meaning for the three probability bands. */
export const PROBABILITY_META: Record<
  ForecastProbability,
  { label: string; meaning: string }
> = {
  likely: { label: 'Likely', meaning: 'the straight-line extension of a documented trend' },
  plausible: { label: 'Plausible', meaning: 'a credible branch of the current trajectory' },
  wildcard: { label: 'Wildcard', meaning: 'a low-probability tail worth pricing in' },
};

export const FORECAST_LEDE = "From today, roughly nine hundred days remain until the constitutional clock runs out at noon on 20 January 2029 — the close of what this site calls the Caligula Window, the span in which the present accumulation of error is still the work of one administration rather than the settled architecture of a state. What follows is not prophecy. Each entry below is a scenario, not a forecast of a fixed event: a documented trajectory already visible in the record — the gated-AI export regime, the $40T debt threshold, the battleship Congress is moving to forbid — extended forward and assigned an explicit probability and an explicit way to be proven wrong. The question the section asks is Tuchman's and the Economist's, held open rather than answered: whether these are personal mistakes, reversible by an election or two, or the early grammar of decadence.";

export const FORECAST_EPISTEMIC = "How to read this. Every projection is forward-dated and graded speculative by design; none is asserted as fact. Probabilities fall in three bands — likely (the present trajectory would have to bend for this not to happen), plausible (a coherent, well-supported path among several), and wildcard (low base rate, high consequence, included because the tail matters). Each scenario carries a falsification prompt: a concrete, near-term observation that, if it occurs, should lower your confidence or retire the projection outright. The aim is calibration, not prediction — to be wrong in legible, checkable ways rather than vaguely right, and to invite the reader to track which trajectories actually held.";

export const FORECAST_FISCAL_CAPSTONE = "The Economist's column ends on a distinction this site cannot resolve and will not pretend to: are Trump's errors personal and fixable, or the incompetence of an empire sliding into decadence? Three measured quantities make the question more than rhetorical. The dollar's share of global FX reserves stood at 56.77% in the fourth quarter of 2025 (IMF COFER, March 2026) — down from 64.69% in early 2017 and near 70% in the late 1990s, a slow erosion of the exorbitant privilege that has long underwritten American borrowing. Against that thinning reserve bid, gross federal debt reached $39.20T on 3 June 2026 and is projected to cross $40T around September, with net interest near $1.04T in FY2026 — roughly 14% of all federal outlays, more than the cost of the legions (Joint Economic Committee, CBO, PGPF). Into the same ledger the administration has written a ~$1.5T FY2027 defense request, a ~44% boost that includes $1.8B merely to design a Trump-class battleship the House Armed Services Committee has voted to ban and that Fortune (3 May 2026) notes \"modern missiles will easily destroy\" — gold-leaf on the hull of the fisc, the imperial reflex to monumentalize at precisely the moment the books argue for restraint. The Roman analogy is a lens, not a verdict: reserve status can be defended, debt can be stabilized, a battleship can go unbuilt, and decline is a choice more often than a fate. Whether this is the texture of reversible folly or of structural decadence is the open empirical question — and the falsifiable wager of every projection that follows is that it remains, for now, reversible.";

export const FORECAST_PROJECTIONS: ForecastProjection[] = [
  {
    id: "frontier-ai-export-cartel-hardens-2026h2",
    window: "2026 H2",
    windowSort: 2026.5,
    title: "The frontier-AI whitelist: government-gated release hardens as open weights flood the world",
    domain: "technology-science",
    probability: "plausible",
    thesis: "On the trajectory set by Anthropic's compelled Fable 5/Mythos 5 suspension and OpenAI's ~20-partner GPT-5.6 preview, the case-by-case Commerce/ONCD review regime may calcify by end-2026 into a standing whitelist that every leading US lab clears customer-by-customer — even as DeepSeek V4's open weights stay globally free. The plausible folly is not the security aim but the structure: a permission layer that throttles the domestic market it means to protect while doing little to slow a diffusion it cannot reach.",
    mechanism: "The documented step is the June 2026 Commerce export-control directive that forced Anthropic to block foreign-national access — and, to comply, to suspend Fable 5 and Mythos 5 for everyone, US citizens included — paired with the June 2 EO seeking voluntary pre-release government review and OpenAI's gating of GPT-5.6 to ~20 government-vetted partners under per-customer ONCD/OSTP/Commerce sign-off. Each precedent lowers the cost of extending the same gate to the next lab, and bureaucracies that acquire an approval chokepoint rarely surrender it. The hedged extension: a \"temporary\" national-security review becomes the default release path, while DeepSeek V4's MIT-licensed weights on Hugging Face (1M context, an order of magnitude cheaper than gated US tiers) keep the restricted capability abundant abroad — so the regime taxes domestic access without buying scarcity. This is a projection, not a forecast: the gate could still be narrowed, codified with a real sunset, or paired with measures that actually bite on adversary access.",
    leadingIndicators: [
      "A third or fourth US frontier lab placed under customer-by-customer ONCD/OSTP/Commerce release review on the Anthropic/OpenAI template before year-end",
      "A codified whitelist or licensing rule issued through formal rulemaking replacing ad hoc directive letters for frontier-model access",
      "DeepSeek V4 (or a V4.x/V5 successor) open-weights downloads and API volume continuing to climb on Hugging Face/OpenRouter through H2 2026 despite US gating",
      "US enterprise or allied-government customers publicly shifting workloads to open-weights or non-US frontier models, citing access friction",
    ],
    caligulaParallel: "A sovereign who fortifies a prize that has already slipped his walls courts the self-defeat Suetonius mocks when he reports Caligula marching legions to the Channel only to have them gather seashells as \"spoils of the Ocean\" — proclamation standing in for a conquest never made (Suetonius, Caligula 46 — a hostile, anecdote-driven source). The echo is structural, not exact: an imposing apparatus of control performed over a domain the controller no longer commands.",
    disconfirmer: "the gating measurably slowed adversary access to frontier capability rather than only the domestic market, or the review path proved genuinely temporary — carrying a fixed sunset and lapsing on schedule rather than hardening into a standing whitelist.",
    sources: [
      { citation: "Nextgov/FCW, \"Anthropic suspends top AI models after U.S. export control order,\" June 2026", type: "journalism" },
      { citation: "CNBC and NPR, coverage of the Trump EO seeking early government access and voluntary pre-release AI review, 2026-06-02", type: "journalism" },
      { citation: "Reuters (via TradingView) and TheNextWeb, OpenAI GPT-5.6 preview limited to ~20 government-vetted partners with per-customer approval, 2026-06-26", type: "journalism" },
      { citation: "DeepInfra and OpenRouter pricing/model pages for DeepSeek V4 (MIT-licensed open weights, 1M context), 2026", type: "primary" },
    ],
  },
  {
    id: "debt-crosses-40-trillion-interest-eclipses-defense",
    window: "2026 H2",
    windowSort: 2026.5,
    title: "The $40T threshold and the moment interest outspends the legions",
    domain: "economy-trade",
    probability: "likely",
    thesis: "On the documented trajectory, gross federal debt is projected to cross $40T around September 2026 while net interest (~$1.04T in FY2026) durably surpasses the entire defense base budget and the dollar's reserve share slips further below 56.8%. The projection here is not a crash but the likely posture toward it: an administration that has treated each prior milestone as a number to be talked past, now layering a ~44% defense boost atop rising debt service. The risk is a quiet, compounding loss of fiscal room to maneuver.",
    mechanism: "This extrapolates three already-documented series rather than a new event: JEC/CBO debt accumulation (debt $39.20T on 2026-06-03, ~$40T by ~Sept 2026), net interest already ~$1.04T / ~14% of outlays, and the IMF COFER decline in USD reserve share (64.69% in 2017Q1 to 56.77% in 2025Q4). The causal step is that the FY2027 request (~$1.5T defense, including $1.8B for a Trump-class battleship design that the House Armed Services Committee draft NDAA moves to ban) is being stacked on top of mandatory interest, so debt service increasingly crowds discretionary choices: as interest exceeds the defense base, each prestige outlay must be financed at higher coupons by a shrinking marginal pool of foreign reserve buyers, which itself nudges the reserve share lower — a slow feedback, not a cliff. The hedge: rates could fall, growth could outrun the debt, and reserve diversification can be benign; none of those would make the milestones themselves prophecy.",
    leadingIndicators: [
      "Treasury Bureau of the Fiscal Service daily debt figure printing above $40.0T (watch Sept-Oct 2026)",
      "Monthly Treasury Statement confirming FY2026 net interest outlay above the enacted defense base budget",
      "IMF COFER Q1/Q2 2026 update showing USD reserve share below 56.77%",
      "Weak indirect (foreign) bid-to-cover or widening auction tails / rising term premium at 10- and 30-year Treasury auctions",
    ],
    caligulaParallel: "Suetonius charges that Caligula inherited a solvent treasury, exhausted it on spectacle — including a theatrical bridge of boats at Baiae built for prestige rather than need — and then turned to confiscation and novel exactions to refill it (Suetonius, Caligula 37-41, a hostile source written decades later). The echo is narrow and honest: the pattern of treating a fiscal inheritance as inexhaustible while financing display. The modern case is compounding interest and political avoidance, not looting, and no confiscation is alleged here.",
    disconfirmer: "the debt and interest milestones were paired with a credible, legislated stabilization path — so that crossing $40T reflected a deliberate, financed plan rather than drift, and the reserve-share slip proved benign diversification rather than waning confidence in US paper.",
    sources: [
      { citation: "US Congress Joint Economic Committee, gross national debt $39.20T as of 2026-06-03 (~$40T projected ~Sept 2026), 2026-06", type: "official-record" },
      { citation: "CBO / Peter G. Peterson Foundation, net interest ~$1.04T in FY2026 (~14% of outlays), 2026", type: "official-record" },
      { citation: "IMF COFER, USD share of global FX reserves 56.77% in 2025Q4 (down from 64.69% in 2017Q1), updated 2026-03", type: "official-record" },
      { citation: "Fortune, House Armed Services Committee draft NDAA bars the Trump-class battleship (~$20B/ship), 2026-05-03", type: "journalism" },
    ],
  },
  {
    id: "trump-class-battleship-reconciliation-workaround-2026h2",
    window: "2026 H2",
    windowSort: 2026.5,
    title: "Building the banned battleship: funding the Golden Fleet around Congress",
    domain: "military",
    probability: "plausible",
    thesis: "A credible branch — not a forecast — runs as follows: rather than accept the House Armed Services Committee's explicit NDAA ban on constructing the Trump-class battleship, the administration preserves the $1.8B design line by routing it through the filibuster-proof FY2027 reconciliation tranche or an executive \"Golden Fleet\" designation, keeping the lead ship alive on prestige grounds. The line could equally die quietly in conference; this is a probability with a falsification test, not a prediction.",
    mechanism: "The collision is already on the record: the FY2027 request carries $1.8B for Trump-class design inside a ~$1.5T topline (with a ~$350B reconciliation tranche), while the HASC draft NDAA bans construction outright and Fortune's reporting — echoed by this site's own Defense-CAD value_index, which ranks the hull last on (benefit × survivability) / lifecycle-cost — judges the platform fatally exposed to anti-ship ballistic and hypersonic missiles. The plausible causal step is procedural arbitrage: reconciliation is filibuster-proof, and an authorization ban that bites on construction does not obviously bite on design or advance-procurement dollars moved through appropriations or a sole-source executive contract, letting the program advance one funded study at a time after a chamber has voted no. The contested premise — that the survivability critique would be dismissed rather than rebutted — is what the leading indicators are meant to test, not assert.",
    leadingIndicators: [
      "A FY2027 reconciliation or appropriations line item preserving Trump-class design or advance-procurement funds after the HASC construction ban survives to conference",
      "An executive or Navy directive — a 'Golden Fleet' program office, lead-ship naming, or a sole-source design award — issued without enacted authorization",
      "Administration officials publicly characterising the ASBM/hypersonic survivability critique as defeatism while releasing no cost-benefit or vulnerability study rebutting Fortune or Defense-CAD",
      "A CBO, CRS or CSIS score, or a GAO bid-protest or legal-authority opinion, on whether design money may proceed against an authorization-bill construction prohibition",
    ],
    caligulaParallel: "Pouring treasure into a magnificent, named hull whose value reads more ceremonial than martial recalls Caligula's colossal pleasure-ships on Lake Nemi — engineering marvels with, as the hostile tradition has it, little practical purpose (Suetonius, Caligula 37, a hostile source); and advancing a program past a chamber's recorded refusal echoes the principate's habit of treating the Senate's \"no\" as an obstacle to be routed around rather than a verdict to be heeded. The parallel is about the impulse to monumentalize past institutional refusal, not a claim that the ship is literally a barge.",
    disconfirmer: "the administration releases a credible, independently reviewed survivability and cost-benefit case showing the hull survives a mature A2/AD kill chain and beats distributed, attritable alternatives, and Congress then funds it through the ordinary authorization-and-appropriations process rather than around an enacted ban.",
    sources: [
      { citation: "Fortune, \"The Navy's proposed Trump-class battleship is banned in the draft NDAA; modern missiles will easily destroy it,\" 2026-05-03", type: "journalism" },
      { citation: "Breaking Defense, FY2027 defense request ~$1.5T including $1.8B for Trump-class battleship design, 2026-04; FDD analysis, 2026-04-23", type: "journalism" },
      { citation: "OSINT Defense-CAD, COST_BENEFIT_ANALYSIS.md: value_index = (benefit × survivability) / lifecycle-cost ranks the conceptual Trump-class battleship last, below distributed/attritable options and the Type 055 (github.com/Aroxora/Defense-CAD)", type: "modern-scholarship" },
    ],
  },
  {
    id: "2026-federalized-voter-roll-purge-before-the-midterms",
    window: "2026 H2",
    windowSort: 2026.5,
    title: "A federally-driven push to purge the voter rolls before the November midterms",
    domain: "elections-democracy",
    probability: "plausible",
    thesis: "On the documented EO 14248 / SAVE Act / DOJ trajectory, it is plausible — not foreordained — that the administration spends 2026 H2 pressing states to run large, fast list-maintenance actions keyed to federal databases and documentary-citizenship checks. Should even a few battleground states comply against an election deadline, the foreseeable byproduct is that some eligible voters land in challenge or removal queues weeks before they vote.",
    mechanism: "The present-day trajectory is concrete: Executive Order 14248 (March 2025) directs documentary proof of citizenship and tighter list maintenance; the SAVE Act passed the House but is not enacted; and DOJ has demanded statewide voter-file data from multiple states. The causal step is convergence under an election clock — a federal demand for the rolls, a citizenship-match mandate run against error-prone databases (SSA/DHS/SAVE matching that civil-rights analysts warn can flag naturalized citizens as non-matches), and a hard pre-election deadline. The same machinery sold as producing \"clean rolls\" would mechanically generate wrongful flags faster than any cure process could resolve them, turning an administrative measure into de facto disenfranchisement. Whether that convergence actually occurs, and at what scale, remains open.",
    leadingIndicators: [
      "A DOJ or DHS letter or subpoena setting a summer/early-fall 2026 deadline for states to surrender statewide voter files or run SAVE/database citizenship matches",
      "A battleground secretary of state announcing a mass list-maintenance or 'noncitizen removal' action inside the NVRA 90-day quiet period before Nov 3",
      "Litigation by civil-rights groups or DOJ over a specific purge, with declarations quantifying eligible (often naturalized) voters flagged",
      "Renewed floor or Rules Committee movement on the SAVE Act, or a published EO 14248 implementing rule, timed to the midterm calendar",
    ],
    caligulaParallel: "Redefining who counts as a member of the body politic by edict — on a calendar that favors the one drawing the lines — echoes the imperial habit of revising the citizen and senatorial rolls to reward, punish, or thin out the inconvenient; Suetonius has Caligula manipulating census and status to his own ends (Suetonius, Caligula 38, 41 — a hostile source; the analogy is to method, not scale).",
    disconfirmer: "the verification ran outside the pre-election quiet period, matched against audited high-accuracy data with individual notice and an easy cure, and independent post-election review found no eligible citizens were actually blocked from voting.",
    sources: [
      { citation: "Executive Order 14248, 'Preserving and Protecting the Integrity of American Elections' (March 2025); SAVE Act, H.R.22, passed U.S. House, not enacted", type: "official-record" },
      { citation: "AP and Reuters reporting on DOJ statewide voter-file demands and 2026 election-administration disputes (2026)", type: "journalism" },
      { citation: "Brennan Center for Justice analyses of SAVE Act and documentary-proof-of-citizenship effects on naturalized and otherwise-eligible voters (2025-2026)", type: "modern-scholarship" },
    ],
  },
  {
    id: "hormuz-aftermath-new-theatrical-front-2026h2",
    window: "2026 H2",
    windowSort: 2026.5,
    title: "A new front to bury the Hormuz hangover",
    domain: "foreign-policy",
    probability: "plausible",
    thesis: "As Operation Epic Fury's Iran campaign settles into an open-ended aftermath of residual Strait-of-Hormuz and energy risk rather than a clean, declarable victory, an administration that has repeatedly favored spectacle over resolution may float a fresh, lower-cost confrontation — a Greenland redux, a Venezuela maritime-interdiction push, or a Panama Canal \"reclamation\" — to reset a narrative that no longer advances. This is a hedged projection of one branch, not a forecast of any specific operation.",
    mechanism: "The documented trajectory is a recurring pattern: opening prestige-driven foreign fronts — the refusal to rule out force over Greenland, the \"take it back\" framing of the Panama Canal, and Epic Fury itself. A war that ends in chronic ambiguity rather than triumph leaves a narrative vacuum, and the cheapest tool to fill it is the same one that produced the earlier fronts: a sovereignty claim dramatized as imminent action. The causal step is the temptation — not the certainty — that if Hormuz persists through H2 2026 as an insurance-premium and shipping-risk story, attention is redirected to a new, visually controllable confrontation closer to home rather than the unresolved Iran file being absorbed at political cost.",
    leadingIndicators: [
      "A sharp escalation in rhetoric or troop/asset posturing toward Greenland, Venezuela, or Panama within weeks of negative Hormuz shipping-insurance or tanker-incident headlines",
      "Renewed executive talk of Panama Canal 'reclamation' or Greenland acquisition framed as urgent and non-negotiable, timed against Iran-aftermath coverage",
      "Naval or Coast Guard interdiction deployments to the Caribbean basin announced with conspicuous fanfare",
      "Official messaging that retroactively reframes Epic Fury as already-won, freeing attention for a new theater",
    ],
    caligulaParallel: "Suetonius reports Caligula massing legions on the Channel coast for a British invasion that never came, then ordering the troops to gather seashells as \"spoils of the Ocean\" to manufacture a triumph from an aborted campaign (Suetonius, Caligula 46 — a hostile source written roughly eighty years later). The echo, honestly hedged, is the substitution of a staged new conquest for an unfinished one — prestige theater to paper over a war without a clean victory — not a literal equivalence of facts.",
    disconfirmer: "any new posture toward Greenland, Venezuela, or Panama arose from an independent, documented security rationale and a deliberative process — not in reactive proximity to unflattering Hormuz-aftermath news — and was pursued through alliance consultation rather than unilateral spectacle.",
    sources: [
      { citation: "Suetonius, The Twelve Caesars, 'Caligula' 46 (the seashells on the Channel coast) — a hostile source written c. AD 121, decades after Caligula's death.", type: "primary-hostile" },
      { citation: "Trump's repeated refusal to rule out force to acquire Greenland and his 'taking back' the Panama Canal, as documented in the Caligula Index foreign-policy folly record (2025-2026).", type: "journalism" },
    ],
  },
  {
    id: "certification-as-veto-2027",
    window: "2027",
    windowSort: 2027,
    title: "Certification recast as a veto: the contested arithmetic of the 2026 midterms",
    domain: "elections-democracy",
    probability: "plausible",
    thesis: "In the closest 2026 House and statewide races, the outcome is plausibly not settled on election night but litigated through the certification calendar into early 2027, with local canvassing boards pressured to treat a ministerial duty — counting and certifying — as a discretionary veto. This is a scenario, not a forecast: it presumes both margins thin enough to invite challenge and officials willing to test that boundary, neither of which is guaranteed.",
    mechanism: "The documented trajectory is the post-2024 pattern of contesting close results through the certification machinery: board members voting to delay or refuse certification, \"any-voter\" mass eligibility challenges, and pressure to reframe a ratifying act as a decision. The causal step is institutional, not violent. If even a handful of county or state boards treat certification as a choice rather than a ministerial act, the dispute migrates from ballots to courts and to the seating of members — terrain where the election EO 14248 push and the House-passed (not enacted) SAVE Act supply a documentary-proof rationale and the DOJ's retribution posture supplies leverage. Folly enters not when a race is close but when the apparatus built to ratify a count is repurposed to withhold one.",
    leadingIndicators: [
      "County or state canvassing boards voting to delay or decline certification past statutory deadlines, forcing mandamus suits to compel the ministerial act",
      "Large 'any-voter' mass-challenge lists filed against voter rolls in contested counties shortly before or after Election Day",
      "DOJ or state attorneys general opening investigations into certifying officials, or House leadership signaling it may decline to seat a member pending its own count",
      "State legislatures invoking EO 14248 or SAVE-Act documentary-proof rationales to reopen questions about already-cast ballots",
    ],
    caligulaParallel: "Caligula is said to have treated settled offices and honors as revocable at whim, withdrawing what law and custom had already conferred and leaving magistrates unsure whether their standing would be ratified or annulled (Suetonius, Caligula 26, 30 — a hostile, anecdote-driven source). The echo is narrow: the danger here is not a tyrant's caprice but the conversion of a routine confirmation into a held lever, so that what should be automatic becomes contingent on whose result it would certify.",
    disconfirmer: "close 2026 races resolve through normal recounts and courts, with boards certifying on schedule as a ministerial duty and mass challenges adjudicated on the merits rather than used to freeze the count.",
    sources: [
      { citation: "Documented 2024-2025 county and state certification-refusal episodes and 'any-voter' mass-challenge filings, widely reported in U.S. election coverage; the 2027 projection is an analytic extrapolation, not a prediction of a specific outcome.", type: "journalism" },
      { citation: "Election integrity EO 14248 (2025) and the House-passed, not-enacted SAVE Act, as documented in the Caligula Index trajectory entries.", type: "official-record" },
      { citation: "Suetonius, The Twelve Caesars, 'Caligula' 26, 30 (hostile classical source).", type: "primary-hostile" },
    ],
  },
  {
    id: "tariff-escalation-2027-the-second-bet",
    window: "2027",
    windowSort: 2027,
    title: "The second tariff escalation, ordered because the first one underdelivered",
    domain: "economy-trade",
    probability: "plausible",
    thesis: "By 2027 the Liberation-Day tariff wager looks, on the evidence then available, to have underdelivered: reshoring shallow, the goods deficit stubborn, consumer prices still elevated. The projection is that the administration plausibly answers not with retreat but with a second escalation — raising or broadening duties as a demonstration of resolve — because the sunk-cost politics of a commitment that cannot be seen to fail outweigh the economic read. No specific rate is asserted; the claim is about the direction of the reflex, not its magnitude.",
    mechanism: "The documented trajectory is the Liberation-Day regime — an average effective rate around 22.5%, the highest in roughly a century — sold as the engine of reshoring and deficit reduction. Tariffs are a slow, blunt instrument whose costs (higher input and consumer prices) land well before any reshoring benefit, so a 2027 verdict is likely to show pain banked and promised gains unrealised. The step Tuchman would flag is the response to that gap: when a policy has become identity-defining, the folly-prone move is to double the dose rather than revise the theory, re-framing a disappointing result as proof of insufficient toughness and converting an economic miss into a loyalty test. This is a probabilistic reading of incentives, not a prediction that any particular order will issue.",
    leadingIndicators: [
      "A new Section 232/301 or IEEPA action in 2026-2027 that raises or widens existing duties rather than negotiating them down, justified by 'enforcement' or 'closing loopholes' framing",
      "Official messaging that attributes weak trade-balance or factory-jobs data to under-enforcement or foreign cheating rather than to the tariff design",
      "Manufacturing employment and the goods trade deficit flat or worsening in BLS/Census releases through 2026-2027 while CPI goods categories stay elevated",
      "Exclusion requests and quiet carve-outs multiplying — a sign the policy is being privately conceded as costly even as it is publicly doubled down",
    ],
    caligulaParallel: "A ruler who has staked prestige on a gesture, and finds the gesture failing, often escalates it rather than abandon it. Suetonius reports Caligula marching an army to the Channel only to have the troops gather seashells as 'spoils of the Ocean' (Caligula 46 — a hostile source, and probably embroidered): the campaign's emptiness was met not with retreat but with a louder claim of victory. The echo is the pattern, not the particulars — when the deed cannot deliver, the temptation is to redeclare it a triumph and demand more of it.",
    disconfirmer: "the second round were a calibrated, evidence-driven adjustment — paired with published metrics, sunset clauses, and a demonstrated willingness to roll duties back where the data showed harm — rather than an open-ended escalation chosen to avoid conceding that the first bet missed.",
    sources: [
      { citation: "Tax Foundation and Yale Budget Lab tracking of the Liberation-Day tariffs, average effective rate ~22.5% (highest since ~1909), 2025-2026", type: "modern-scholarship" },
      { citation: "Barbara W. Tuchman, 'The March of Folly: From Troy to Vietnam' (1984) — folly as the persistence in a policy contrary to self-interest after its failure is demonstrable", type: "modern-scholarship" },
      { citation: "Suetonius, 'The Twelve Caesars,' Caligula 46 (the seashells at the Channel) — a hostile ancient source", type: "primary-hostile" },
    ],
  },
  {
    id: "schedule-f-hollowed-state-meets-a-crisis-2027",
    window: "2027",
    windowSort: 2027,
    title: "The loyalty-tested civil service meets a crisis it can no longer answer",
    domain: "institutions-rule-of-law",
    probability: "plausible",
    thesis: "On the current trajectory, a Schedule F apparatus that has reassigned or removed loyalty-screened-out career experts could meet a 2027 emergency — a severe hurricane season, a novel pathogen, a financial shock, a port or grid failure — with a response measurably slower and more error-prone than its pre-2025 baseline. This is a projection of where watchdog-hollowing tends to lead, hedged twice over: no specific disaster is forecast to land in the window, and degraded performance, if it comes, would be visible only in the aggregate.",
    mechanism: "The documented trajectory already on the site's record is the operationalization of Schedule F alongside the inspector-general purge: stripping for-cause protections converts tenured technical staff into at-will employees screened on devotion rather than skill. Because loyalty is orthogonal to competence, each reassignment cycle raises the expected error rate of the surviving workforce while removing the inspectors who would have caught those errors early. The cost is nearly invisible in calm months and compounds under load, which is why crisis response is the lagging, hardest-to-fake indicator: an emergency surge tests whether the institutional memory and independent oversight were still there when needed.",
    leadingIndicators: [
      "Net departures of GS-14/15 and SES technical staff at FEMA, CDC, FAA, NRC and Treasury outpacing replacement, traceable in OPM Fedscope and agency attrition data through 2026-2027",
      "Inspector-general posts left vacant or filled in 'acting' capacity, or new IGs with no prior oversight record, tracked against a measurable decline in published audits and semiannual reports to Congress",
      "After-action reviews, GAO reports, or documented press reconstructions of a 2027 emergency citing chain-of-command confusion, ignored career warnings, or lost subject-matter expertise",
      "Reassignment of named experts out of mission-critical roles shortly before or during a response, surfaced via FOIA or whistleblower disclosure",
    ],
    caligulaParallel: "Suetonius describes Caligula advancing men by favor and fear while sidelining experienced administrators, leaving the machinery of state to courtiers chosen for devotion (Suetonius, Caligula 26, 30 — a hostile source written generations later, to be read as caricature, not transcript). The instructive echo is structural, not lurid: a regime that prizes loyalty over competence does not feel the cost until the moment it most needs competence.",
    disconfirmer: "the reclassified workforce demonstrably retained or improved its technical capacity — crisis-response times and error rates holding at or below pre-2025 baselines — while independent inspectors general kept publishing audits at undiminished rate and candor.",
    sources: [
      { citation: "Executive Order reviving Schedule F (\"Restoring Accountability to Policy-Influencing Positions\") and the OPM implementation rule, 2025, as tracked in the site's institutions-rule-of-law record (IG purge + Schedule F reclassification).", type: "official-record" },
      { citation: "U.S. Government Accountability Office and agency Inspector General after-action and oversight reporting, used here as a forward-looking analytic baseline against which any 2027 crisis-response performance would be measured.", type: "official-record" },
    ],
  },
  {
    id: "acip-cascade-measles-resurgence-2027",
    window: "2027",
    windowSort: 2027,
    title: "The schedule unbundled, and the diseases that followed it back",
    domain: "public-health",
    probability: "plausible",
    thesis: "Extending the documented remaking of ACIP under Secretary Kennedy and an already-elevated measles baseline, it is plausible — not certain — that by 2027 the committee demotes one or more additional routine childhood immunizations from universal recommendation, that insurer coverage and school-entry mandates loosen in step, and that the US records its widest multi-state measles and pertussis outbreaks in a generation while its WHO seat sits empty and CDC's recommending authority is openly contested.",
    mechanism: "The documented step is the dismissal of the prior ACIP panel and its reconstitution under Secretary Kennedy, which converts the childhood schedule from a near-consensus standard into a contested annual negotiation. ACIP recommendations are the legal hinge for the Vaccines for Children program, ACA first-dollar preventive coverage, and most state school mandates, so moving a vaccine from \"universally recommended\" to \"shared clinical decision\" loosens coverage and mandates by design rather than by accident. Where coverage falls in clustered, under-vaccinated communities, diseases like measles and pertussis drop below their herd-immunity thresholds; and with the WHO exit formally effective 2026-01-22, the US has given up the surveillance and outbreak-coordination seat it would otherwise use to help contain spread — conditions under which a local flare more readily becomes a multi-state one. The projection is conditional: it assumes the trajectory continues rather than treating any specific future vote or case count as fixed.",
    leadingIndicators: [
      "An ACIP vote moving a specific routine pediatric vaccine (e.g., hepatitis B birth dose, the second MMR dose, or DTaP/Tdap) from universal recommendation to 'individual clinical decision' or 'parental choice'",
      "CDC or state health departments reporting measles case counts above the 2025 total, with sustained transmission chains that break the >12-month 'elimination' criterion",
      "Major insurers or VFC guidance narrowing first-dollar coverage for any newly demoted vaccine, and one or more states relaxing school-entry requirements to match",
      "Infant pertussis hospitalizations or deaths reported above recent baselines, alongside documented US absence from WHO outbreak-coordination mechanisms",
    ],
    caligulaParallel: "The folly would lie less in any single ruling than in treating a settled public good as a personal prerogative to be remade by conviction, with the costs falling on the powerless — infants, the immunocompromised — while the decider keeps the prestige of having \"asked the questions.\" Suetonius reports Caligula wishing the Roman people had a single neck (Caligula 30 — a hostile source, and the analogy is to structural indifference, not a claim of intent): the modern echo is a health apparatus reorganized around the priors of one official rather than the accumulated evidence it was built to carry.",
    disconfirmer: "the reconstituted ACIP's revisions tracked genuinely new safety evidence, coverage and outbreak metrics held steady or improved, and the schedule changes survived independent scientific and actuarial review rather than tracking a single official's priors.",
    sources: [
      { citation: "Reporting on Secretary Kennedy's dismissal and reconstitution of the CDC Advisory Committee on Immunization Practices (ACIP) and its subsequent schedule reviews, 2025-2026.", type: "journalism" },
      { citation: "US withdrawal from the World Health Organization formally effective 2026-01-22, removing the US from WHO surveillance and outbreak-coordination mechanisms.", type: "official-record" },
      { citation: "Statutory linkage of ACIP recommendations to Vaccines for Children eligibility (Social Security Act §1928), ACA §2713 first-dollar preventive-coverage mandates, and most state school-entry requirements; demotion propagates to coverage and mandates by design.", type: "official-record" },
    ],
  },
  {
    id: "frontier-moat-erodes-as-talent-exits-the-gated-regime",
    window: "2027",
    windowSort: 2027,
    title: "The gated-AI regime that exports its own talent",
    domain: "technology-science",
    probability: "plausible",
    thesis: "On the present trajectory, deep NIH/NSF science cuts plus an AI-export regime that gates frontier models even from foreign nationals on US soil could, by 2027, produce a measurable outflow of researchers toward PRC, EU, UK, and Gulf labs — just as open-weight models like DeepSeek V4 Pro reach rough parity on most tasks, eroding the same frontier moat the controls were meant to protect. This is a scenario with a probability, not a forecast: talent flows are sticky, and US advantages in capital and compute could absorb the shock.",
    mechanism: "Two documented trajectories are already in motion. First, the June 2026 Commerce export-control directive forced Anthropic to suspend Fable 5 and Mythos 5 for everyone — US citizens included — rather than risk foreign-national access (Nextgov/FCW, 2026-06), layered atop Hegseth's Feb 2026 \"supply chain risk\" designation and the June 2 EO seeking pre-release government review. Second, the squeeze on basic science via NIH/NSF reductions. The causal step is cultural: research built on open publication, international students, and post-doc mobility tends to react badly to a regime where the best models are unavailable to much of the workforce and where government previews (e.g. OpenAI's GPT-5.6 to ~20 vetted partners, 2026-06-26) exclude most labs. When the marginal researcher can obtain a globally available, MIT-licensed, far-cheaper model (DeepSeek V4 Pro, open weights on Hugging Face, 2026-04) from anywhere abroad, the relative cost of relocating falls — and parity on open weights means the protected frontier may be narrowing from the outside regardless. Whether that incentive translates into actual departures, rather than grumbling, is the open question this projection tracks.",
    leadingIndicators: [
      "A rising share of US-trained AI PhDs and senior researchers taking first positions or relocating to PRC, EU, UK, or Gulf labs, visible in placement data (CSET; MacroPolo Global AI Talent Tracker) across 2026-2027.",
      "Frontier open-weight models (DeepSeek, Qwen, or successors) matching or beating gated US tiers on widely watched benchmarks and on real enterprise-adoption metrics.",
      "University or national-lab statements naming model-access restrictions or grant cuts as drivers of departures or stalled projects, and foreign recruitment programs explicitly citing US export gating.",
      "Erosion in the US share of top-cited AI papers and frontier releases relative to PRC and the EU.",
    ],
    caligulaParallel: "A regime that secures prestige goods by walling them off from its own people, then watches the talent that produced them drift elsewhere, echoes the imperial habit of hoarding and squandering at once: Suetonius reports Caligula drained the treasury and then chased revenue and glory by ruinous means, prizing the appearance of supremacy over the conditions that sustained it (Suetonius, Caligula 37-38 — a hostile source written to indict). The parallel is to the pattern of self-defeating control, not a claim of equivalent motive.",
    disconfirmer: "the gating and the science cuts proved a net talent magnet — drawing in more top researchers than they lost — while US frontier models stayed clearly ahead of open-weight competitors on the tasks that matter.",
    sources: [
      { citation: "Nextgov/FCW, \"Anthropic suspends top AI models after U.S. export control order,\" 2026-06", type: "journalism" },
      { citation: "Commerce Department export-control directive on frontier-model foreign-national access, June 2026; Trump EO on AI government pre-release review, 2026-06-02 (reported by CNBC and NPR, 2026-06-02)", type: "official-record" },
      { citation: "DeepSeek V4 Pro release — open weights (MIT), 1M context, ~$0.435/M input — on Hugging Face, 2026-04-24, per DeepInfra/OpenRouter/pricepertoken", type: "journalism" },
      { citation: "MacroPolo Global AI Talent Tracker and CSET talent-flow methodology, used here for a forward-looking extrapolation, not a measured 2027 outcome", type: "modern-scholarship" },
    ],
  },
  {
    id: "allied-hedging-structural-outlast-the-window",
    window: "2027",
    windowSort: 2027,
    title: "Allied hedging hardens into structure: the alliance prices in a post-American horizon",
    domain: "foreign-policy",
    probability: "plausible",
    thesis: "Through 2027 the hedging already visible among US allies may calcify from contingency into architecture — EU strategic-autonomy procurement, sovereign and non-US AI stacks, and discreet, transactional accommodation of Beijing — not as a rupture but as a rational discount applied to a partner whose access can be revoked by directive and whose horizon runs to a single inauguration. This is a projection, not a forecast of defection: the likelier shape is quiet diversification that leaves treaties intact while hollowing the dependence that made them load-bearing.",
    mechanism: "Two documented 2026 trajectories compound. First, alliance coercion as a standing posture — the refusal to rule out force over Greenland, Liberation-Day tariffs at a ~22.5% average effective rate, and the federalisation of the National Guard into US cities — signals to capitals that partnership is an instrument of will rather than a fixed commitment. Second, AI denial: the June 2026 Commerce export-control directive that forced Anthropic to suspend Fable 5 and Mythos 5 for everyone, Hegseth's Feb 2026 designation of a US lab as a \"supply chain risk\", and the OpenAI GPT-5.6 preview gated to ~20 government-vetted partners with no international tier together demonstrate that frontier US capability is now revocable by Washington. The causal step is one of incentives, not intent: when DeepSeek V4 Pro ships open MIT weights at roughly a tens-fold discount with global availability, a capital facing coercible access plus a closing political window has reason to buy the hedge now — and procurement, once budgeted and contracted, is sticky. That is the structure underneath Beijing's \"东升西降 / outlast the window\" wager: that US self-isolation does the decoupling on Washington's behalf.",
    leadingIndicators: [
      "A named EU member or the Commission formally adopts DeepSeek-derived or other non-US open-weight models for a government or defense workload, citing US export-revocability as the rationale.",
      "Budget lines for EU 'strategic autonomy' defense procurement that explicitly substitute for US platforms, announced or expanded in 2027 national budgets.",
      "A US treaty ally signs or quietly broadens a technology, trade, or infrastructure arrangement with Beijing it had previously deferred, framed as supply-chain diversification rather than realignment.",
      "Sovereign-AI compute or model-hosting commitments — national clouds, domestic frontier-model funding — announced by allied governments that specifically reference the Anthropic suspension or GPT-5.6 access gating.",
    ],
    caligulaParallel: "When the principate treated client kingdoms and the loyalty of allies as revocable favors dispensed at the emperor's mood — honors granted and withdrawn, friends summoned and humiliated — the rational courtier learned to hedge his dependence and cultivate other patrons. Suetonius reports Caligula's caprice toward those bound to him (Caligula 26 — a hostile source written under a later dynasty, and to be weighed as such); the structural point survives the polemic: when a hegemon makes its favor conditional on whim, dependents quietly diversify, and the reach that whim was meant to display contracts.",
    disconfirmer: "allied procurement and AI sourcing stay anchored to US platforms because Washington pairs its export controls with a reliable, treaty-grade access tier for allies — making the hedge costlier than the dependence, and leaving alliance coercion an episode rather than a premise.",
    sources: [
      { citation: "Nextgov/FCW, \"Anthropic suspends top AI models after U.S. export control order\", June 2026", type: "journalism" },
      { citation: "Reuters (via TradingView) and TheNextWeb, on the OpenAI GPT-5.6 preview gated to ~20 government-vetted partners with no international tier, 2026-06-26", type: "journalism" },
      { citation: "DeepInfra and OpenRouter pricing and model cards for DeepSeek V4 Pro (open MIT weights, 1M context, ~$0.435/M input, ~$0.87/M output), 2026", type: "primary" },
    ],
  },
  {
    id: "golden-fleet-vs-a2ad-2028",
    window: "2028",
    windowSort: 2028,
    title: "The Golden Fleet sails into the missile envelope",
    domain: "military",
    probability: "wildcard",
    thesis: "On the present trajectory it is credible — not certain — that by 2028 a prestige-driven Pacific show of force, anchored by a visible capital-ship spectacle, is sortied into the western Pacific as a deterrence signal over Taiwan, even though the platforms chosen optimise for spectacle over survivability inside a mature A2/AD envelope. The hazard is not that war is willed but that the signalling instrument is selected for how it looks rather than what it can survive.",
    mechanism: "Two documented 2026 trajectories converge. The FY2027 ~$1.5T defence request funds a Trump-class battleship ($1.8B for design; an estimated ~$20B per hull), while a House Armed Services Committee draft NDAA explicitly bars its construction and a Fortune assessment judges that \"modern missiles will easily destroy it.\" The causal step is that a budgeting logic privileging the photogenic capital ship — a gilded, nameable monument afloat — over distributed, survivable mass would leave any future Pacific signalling deployment structurally exposed to the PLA's DF-21D/DF-26 anti-ship ballistic missiles and Type 055-led surface force. A group sent chiefly to be seen is, by construction, a group that can be ranged; the unlearned lesson is dispersal, not display.",
    leadingIndicators: [
      "A named Trump-class hull or a successor surface-action group is publicly slated for a western-Pacific port call, transit, or 'freedom of navigation' demonstration timed to a Taiwan political event",
      "Reconciliation funds restore the battleship line item after the HASC ban, or it reappears under a renamed program, indicating the prestige platform survived congressional resistance",
      "Distributed-survivability programs — uncrewed surface vessels, dispersed magazines, EABO-style Marine littoral forces — are cut or deprioritised in the same budget cycle that funds the capital ship",
      "PLA Rocket Force or a Type 055 flotilla runs a conspicuous anti-ship ballistic-missile or distributed-strike exercise tracking the deployment",
    ],
    caligulaParallel: "Hostile sources record Caligula massing legions on the Channel shore only to order them to gather seashells as \"spoils of the Ocean\" — a maritime spectacle of dominance staged in place of a campaign that could be won (Suetonius, Caligula 46 — a hostile account written generations later, which modern scholars such as Aloys Winterling read as deliberate provocation or later distortion rather than literal madness). The echo is the substitution of grand naval display for a survivable instrument of power; the parallel is partial, because here a real adversary fleet, not the indifferent sea, is what would be signalled.",
    disconfirmer: "the surface spectacle were backed by genuinely distributed, attritable, magazine-deep forces — uncrewed vessels, dispersed land-based fires, resilient logistics — so that the visible flagship functioned as a deterrent ornament rather than the deterrent itself, and the deployment measurably steadied the strait instead of inviting a ranging shot.",
    sources: [
      { citation: "Fortune, \"The Navy's planned Trump-class battleship could cost $20 billion a ship — and modern missiles will easily destroy it,\" 2026-05-03", type: "journalism" },
      { citation: "Breaking Defense, FY2027 defense request analysis (~$1.5T; $1.8B Trump-class battleship design), 2026-04", type: "journalism" },
      { citation: "House Armed Services Committee draft FY2027 NDAA, provision barring construction of the Trump-class battleship (reported by NOTUS), 2026", type: "official-record" },
    ],
  },
  {
    id: "court-defiance-flashpoint-2028",
    window: "2028",
    windowSort: 2028,
    title: "The ruling read as a suggestion",
    domain: "institutions-rule-of-law",
    probability: "plausible",
    thesis: "On the trajectory already visible in the Alien Enemies Act removals to CECOT, the birthright-citizenship EO heading to the Supreme Court on the merits (~mid-2026), and the now-lapsed National Guard federalisation, an adverse high-court ruling in 2028 could be met not with stated refusal but with slow-walking, paper \"compliance,\" and rhetorical reframing of the order as advisory. This is a scenario, not a forecast: grudging compliance remains the more likely outcome, and a cleanly, openly defied order is the tail rather than the base case.",
    mechanism: "The documented pattern is a probing of the gap between what a court orders and what the executive must visibly do: removals to a foreign prison beyond easy judicial reach, a birthright EO litigated to the merits, troop deployments timed to expire before review concludes. The causal step is incentive, not novelty. If an unfavorable ruling lands during a contested period, the lowest-cost move is to comply on paper — returning one named plaintiff, pausing one program — while preserving the underlying practice and casting the judiciary as one voice among co-equal branches. Each ambiguous half-compliance that draws no enforcement lowers the price of the next, eroding \"the order is law\" toward \"the order is a position.\"",
    leadingIndicators: [
      "An executive-branch filing or official statement characterising a specific injunction as 'guidance,' 'one court's view,' or otherwise non-binding pending appeal, rather than complying outright",
      "A court orders the return or release of a named individual (e.g. a CECOT removee) and the government reports inability or delay rather than production",
      "A judge issues a show-cause or contempt-adjacent order over non-compliance, and the administration litigates the judiciary's enforcement power itself",
      "Senior officials publicly frame a final, non-stayed ruling as advisory, or invoke departmental-theory / co-equal-branch language to justify partial action",
    ],
    caligulaParallel: "Suetonius reports Caligula wishing the Roman people had a single neck and treating the Senate's prerogatives as courtesies he might withdraw at will (Suetonius, Caligula 30 — a hostile, posthumous source whose rhetorical excess Winterling reads as deliberate provocation rather than literal madness). The thinner but real echo is the treatment of an institution's binding word as a deference the ruler grants, not an authority he is bound by.",
    disconfirmer: "the administration complied promptly and fully with the adverse ruling — producing the persons or halting the program as ordered — and confined its disagreement to the appeal, leaving the judiciary's word to govern the conduct in the meantime.",
    sources: [
      { citation: "Reporting and case tracking on Alien Enemies Act removals to CECOT and the resulting return-order litigation, and on the birthright-citizenship EO's merits posture at the Supreme Court (~mid-2026), via SCOTUSblog and AP, 2026.", type: "journalism" },
      { citation: "Aloys Winterling, Caligula: A Biography (Univ. of California Press, 2011), reading Suetonius' excesses (Caligula 30) as calculated provocation rather than literal madness.", type: "modern-scholarship" },
      { citation: "Forward-looking analytic scenario by the Caligula Index extrapolating the documented court-defiance trajectory (National Guard federalisation ended 31 Dec 2025; Schedule F and IG removals) — projection, not prediction.", type: "modern-scholarship" },
    ],
  },
  {
    id: "treasury-stress-2028-defense-reserve-collision",
    window: "2028",
    windowSort: 2028,
    title: "A Treasury auction tails while the reserve bid keeps thinning",
    domain: "economy-trade",
    probability: "wildcard",
    thesis: "On the current path, an episode of acute Treasury-market stress in 2028 — a badly tailed long-bond auction, a fresh negative rating action, or a self-reinforcing rise in funding costs — reads as a credible branch rather than a certainty, as a roughly $1.5T defense request, rising entitlement and net-interest outlays, and a slowly thinning foreign reserve bid converge on the same financing window. The claim is not that a \"dollar crisis\" is fated; it is that the trajectory narrows the margin for absorbing a bad week.",
    mechanism: "The documented trajectory: gross federal debt at $39.20T (JEC, 2026-06-03), nearing ~$40T by Sept 2026, with net interest already ~$1.04T (~14% of FY2026 outlays, CBO/PGPF) — stacked atop a ~44% FY2027 defense ask of ~$1.5T (Breaking Defense, 2026-04) that includes a battleship Congress is moving to ban. Meanwhile the USD share of allocated FX reserves has slid to 56.77% in 2025Q4 (IMF COFER, 2026-03) from 64.69% in 2017Q1. The causal step is supply meeting demand at the margin: as issuance climbs and the relatively price-insensitive official-sector bid thins, each long-dated auction must clear with more private duration appetite, so one weak tail or rating headline can reprice the term premium, lift interest outlays, and feed back into the deficit it was meant to finance. This is folly in Tuchman's sense only if the fiscal posture was warned-against at the time, had an available alternative, and was pursued anyway — a test the present record only partly meets.",
    leadingIndicators: [
      "A 10-, 20-, or 30-year auction tailing several basis points with a falling bid-to-cover and a rising primary-dealer takedown (Treasury / TreasuryDirect auction results)",
      "A negative outlook or downgrade from Moody's, S&P, or Fitch citing interest-to-revenue or the defense-driven deficit path",
      "Net interest crossing defense or Medicaid as a budget line while CBO revises up its term-premium and interest assumptions",
      "A further quarterly IMF COFER print with the USD reserve share below ~56% and no offsetting lengthening of foreign official duration",
    ],
    caligulaParallel: "Suetonius reports Caligula inheriting Tiberius's full treasury, exhausting it on spectacle and grandiosity, then resorting to confiscation and improvised levies to refill it (Suetonius, Caligula 37, 38, 41 — a hostile source written to indict, and to be read with that bias in mind). The echo is structural, not literal: prestige expenditure — here a battleship that \"modern missiles will easily destroy,\" per Fortune — financed against a narrowing fiscal base, with the bill deferred to whatever instrument can still be made to pay.",
    disconfirmer: "the 2027–28 issuance is absorbed at stable term premiums with deep bid-to-cover, the ratings hold, and the reserve-share decline plateaus — showing markets reading the defense build as sustainable rather than as a deficit they must be paid more to fund.",
    sources: [
      { citation: "U.S. Congress Joint Economic Committee, debt-clock release ($39.20T gross debt), 2026-06-03; CBO and PGPF on net interest ~$1.04T (~14% of FY2026 outlays).", type: "official-record" },
      { citation: "IMF COFER (updated 2026-03): USD share of allocated FX reserves 56.77% in 2025Q4, down from 64.69% in 2017Q1.", type: "official-record" },
      { citation: "Breaking Defense (2026-04) and Fortune (2026-05-03) on the ~$1.5T FY2027 defense request and the contested ~$20B/ship Trump-class battleship.", type: "journalism" },
    ],
  },
  {
    id: "model-access-as-press-pass-2028",
    window: "2028",
    windowSort: 2028,
    title: "Frontier-model access as a press credential",
    domain: "information-media",
    probability: "plausible",
    thesis: "By 2028 the machinery now used to gate frontier models on national-security grounds could harden into a discretionary licensing regime, in which the most capable US models — increasingly the default research, drafting, and verification tools of newsrooms and campaigns — are made available customer-by-customer through executive-branch vetting. The projected risk is not a single censorship order but a quieter sorting: who is granted the good model, and on what terms, becomes a lever over who can report and reason at frontier speed.",
    mechanism: "The trajectory being extrapolated is the 2026 consolidation of model access under executive discretion: the Commerce export-control directive that forced Anthropic to suspend Fable 5 and Mythos 5 (Nextgov/FCW, June 2026), the Trump EO of 2 June 2026 soliciting pre-release government review (CNBC/NPR), and OpenAI's GPT-5.6 preview limited to roughly twenty government-vetted partners with customer-by-customer approval routed through ONCD/OSTP/Commerce (Reuters/TheNextWeb, 26 June 2026). The causal step is incremental rather than dramatic: a vetting pipeline built for \"supply-chain risk\" has no built-in stopping point at security, and the same case-by-case approval that decides which firms get access could, at the margin, weight which outlets, researchers, or campaigns count as trusted partners — converting a capability tier into something functionally like a credential. This is a branch, not a forecast: DeepSeek V4 Pro's open weights (DeepInfra/OpenRouter, 2026) are a real pressure-release valve, which is why the rating is \"plausible,\" not \"likely,\" and why a confident prediction here would itself overstate.",
    leadingIndicators: [
      "Government-partner access programs for frontier models add eligibility or use criteria that reference content, 'trust,' or institutional affiliation rather than purely technical export-control categories.",
      "A news organization, research outfit, or political campaign publicly reports being denied or deprioritized for frontier-model access while peers are approved.",
      "ONCD/OSTP/Commerce vetting of model customers expands from a handful of partners into a standing tiered-access list with non-public approval criteria.",
      "A frontier US lab cites the federal approval pipeline, rather than capability or safety, as the reason a previously available model tier becomes gated.",
    ],
    caligulaParallel: "The instrument here is access, not speech outright, so the closer Roman echo is the emperor as the source from whom favor flows: Caligula is said to have rationed grain and public benefactions to reward the compliant and starve the rest, making subsistence itself a token of loyalty (Suetonius, Caligula 26–27; Cassius Dio 59 — both hostile sources written to damn him, and the parallel is offered loosely). Controlling the channel through which a society drafts and verifies what it knows would be a subtler version of the same move: not silencing critics, but deciding who is issued the tools.",
    disconfirmer: "frontier-model access for news organizations, researchers, and campaigns is governed by published, content-neutral, appealable rules, and open-weight alternatives like DeepSeek stay capable enough that no single gatekeeper's approval is load-bearing for taking part in the information ecosystem.",
    sources: [
      { citation: "Nextgov/FCW, \"Anthropic suspends top AI models after U.S. export control order,\" June 2026", type: "journalism" },
      { citation: "CNBC / NPR, reporting on the Trump executive order asking AI companies for early government access and voluntary pre-release review, 2026-06-02", type: "journalism" },
      { citation: "Reuters (via TradingView) / TheNextWeb, \"OpenAI previews GPT-5.6 to ~20 government-vetted partners, customer-by-customer approval via ONCD/OSTP/Commerce,\" 2026-06-26", type: "journalism" },
    ],
  },
  {
    id: "endangerment-vacuum-meets-disaster-bill-2028",
    window: "2028",
    windowSort: 2028,
    title: "The regulatory vacuum that meets a record disaster-season bill",
    domain: "environment-climate",
    probability: "plausible",
    thesis: "By 2028 the litigation over the EPA's repealed greenhouse-gas endangerment finding has likely resolved, and on either outcome the federal government could be absorbing a heavy disaster-season fiscal shock while holding no operative climate-regulatory instrument. This is a projection of a collision, not a forecast of a particular storm: the scenario is that a vacated rulebook and a swollen relief tab land in the same fiscal window.",
    mechanism: "The documented trajectory is the February 2026 EPA move to repeal the 2009 endangerment finding, alongside the Paris withdrawal — the legal hinge on which all federal greenhouse-gas regulation hangs. A repeal of this magnitude is certain to be litigated, and a ruling — upholding it, or vacating it and leaving EPA with a statutory duty but no rule — plausibly lands by 2028. Either branch opens a window in which Washington has shed mitigation authority while remaining insurer of last resort for disaster relief. With net interest already near $1.04T in FY2026 and gross debt approaching $40T, a severe season's supplemental appropriations would press on a position with little headroom; the causal step is that regulatory retreat does not retire the underlying liability, it defers it to the disaster-relief line.",
    leadingIndicators: [
      "A circuit-court or Supreme Court ruling on the endangerment-finding repeal, and whether it leaves EPA with an unmet statutory duty",
      "FEMA Disaster Relief Fund shortfall notices or emergency supplemental requests in the 2027-2028 seasons",
      "Private insurers widening non-renewals or exiting high-risk state markets, shifting exposure onto federal and state backstops",
      "CBO or JEC scoring that books rising climate-disaster outlays against an interest burden already near 14% of outlays",
    ],
    caligulaParallel: "Stripping a safeguard for near-term advantage while the deferred cost compounds elsewhere loosely recalls the imperial habit of treating the treasury as bottomless until the bill came due — Suetonius has Caligula exhausting Tiberius's surplus and then improvising ruinous exactions to cover the gap (Suetonius, Caligula 37-38 — a hostile source written generations later; the fiscal analogy is illustrative, not arithmetic).",
    disconfirmer: "the repeal were paired with a durable substitute — interstate compacts, a carbon mechanism, or pre-funded disaster reserves — so that withdrawing the federal rule demonstrably lowered, rather than merely relocated, the public cost of a bad season.",
    sources: [
      { citation: "EPA proposal to repeal the 2009 greenhouse-gas endangerment finding, alongside the formal Paris Agreement withdrawal, February 2026.", type: "official-record" },
      { citation: "U.S. Congress Joint Economic Committee, gross national debt $39.20T (2026-06-03) and ~$1.04T FY2026 net interest, June 2026; corroborated by CBO and PGPF.", type: "official-record" },
      { citation: "Caligula Index forward analytic scenario extrapolating endangerment-repeal litigation against federal disaster-relief exposure; a hedged projection, not a prediction of a specific event.", type: "modern-scholarship" },
    ],
  },
  {
    id: "succession-2029-personal-or-entrenched",
    window: "Jan 2029 — the window closes",
    windowSort: 2029,
    title: "Noon, 20 January 2029: whether the apparatus is loyal to an office or to a man",
    domain: "elections-democracy",
    probability: "wildcard",
    thesis: "The 22nd Amendment makes a third term ineligible, and there is no public evidence Trump intends to defy it; this entry does not assert he will. The narrower, more answerable question the countdown embodies is whether the loyalty re-engineered into the executive over four years — Schedule F, the IG purge, named DOJ retribution cases, the federalised-Guard precedent, a Defense Department that brands a US AI lab a national-security supply-chain risk — is personal and reversible, dissolving when a successor is sworn in, or systemic and entrenched, surviving the handoff. We treat this as a falsifiable transition question, not a prophecy that anyone refuses to leave.",
    mechanism: "The documented trajectory is the steady conversion of nominally neutral apparatus into instruments of personal will: Schedule F reclassifying career civil servants, the inspector-general purge, named DOJ retribution cases, ACIP remade by loyalty test, and Hegseth's War Department designating Anthropic a \"supply chain risk\" (2026-02-27). None of that is unconstitutional on its face; the causal question is what the next inauguration does to it. If those instruments were built around an individual, even an anointed successor inherits institutions taught to follow a person rather than a statute — and the first genuinely contested order (an IG reinstated or not, a prosecution dropped or revived, a certification accepted or stalled) reveals which it was. The transition is the one test the four-year build cannot fake in advance.",
    leadingIndicators: [
      "Whether Schedule F reclassifications and IG vacancies revert toward statutory independence in the first post-2028 budget cycle, or are codified and retained by the incoming administration",
      "Public posture toward the 22nd Amendment from Trump and allied officials through the 2028 primary: explicit affirmation of ineligibility, studied ambiguity, or trial-balloon legal theories floated by surrogates",
      "Whether DOJ retribution cases and the federalised-Guard precedent are wound down or normalised as standing tools available to a successor",
      "The conduct of the 2028 count and certification under EO 14248 / SAVE Act mechanisms: routine and bipartisan, or contested with the loyalist apparatus as referee",
    ],
    caligulaParallel: "Rome's recurring failure was that power flowed to a person, not an office, so each succession became a crisis resolved by the Praetorians' loyalty rather than by law — Caligula was raised up and then cut down by the same guard meant to serve the principate, not the man (Suetonius, Caligula 56-58; Tacitus on the arcanum imperii, that emperors could be made outside the Senate — sources hostile to the Julio-Claudians, to be read with that bias). The American test is the inverse hope: that the handoff is governed by an amendment and a clerk, not by whom the apparatus has been trained to revere. The parallel is structural, not predictive.",
    disconfirmer: "the January 2029 transfer proves procedurally ordinary — Schedule F and the IG vacancies revert toward statutory norms, the certification is uncontested, and the loyalty turns out to have been personal and to leave with the person, exactly as a constitutional order is supposed to behave.",
    sources: [
      { citation: "The Economist, on whether Trump-era executive consolidation is personal-and-reversible or systemic-and-entrenched, 2025-2026", type: "journalism" },
      { citation: "Suetonius, Lives of the Caesars, Caligula 56-58 (a hostile source); Tacitus, Annals/Histories on the 'arcanum imperii'", type: "primary-hostile" },
      { citation: "Documented site trajectories: Schedule F and IG purge; named DOJ retribution cases; National Guard federalisation (ended 31 Dec 2025); Hegseth War Department 'supply chain risk' designation of Anthropic, 2026-02-27; election EO 14248 + SAVE Act (House-passed, not enacted)", type: "official-record" },
    ],
  },
  {
    id: "legacy-monument-gambit-and-the-patient-rival",
    window: "Jan 2029 — the window closes",
    windowSort: 2029,
    title: "A monument-grade foreign gambit at the buzzer — and a rival content to wait",
    domain: "foreign-policy",
    probability: "plausible",
    thesis: "As the term-limited clock runs toward noon on 20 Jan 2029, an administration invested in legacy may reach for one outsized, prestige-defined foreign stroke — a territorial \"deal,\" a named monument abroad, a theatrical one-off summit — precisely when its leverage is shortest and least reversible. The mirror risk, no more than a credible branch, is that a long-horizon rival reading the same calendar declines to contest the gesture and instead times its own consequential move to the interval when American attention is consumed by the legacy and the handover.",
    mechanism: "This extends two trajectories the site already documents. First, the prestige-and-monument idiom of policy — the Greenland-by-force musings, the $1.8B Trump-class battleship design the House Armed Services draft NDAA moves to ban as a vanity hull \"modern missiles will easily destroy\" — which could migrate into a final-year foreign capstone. Second, Beijing's openly framed reading that a long-horizon actor \"does not need to win the argument inside the window; it needs only to outlast it.\" The hypothesised convergence is the load-bearing claim, not a forecast of any specific act: a lame-duck premium rewards a fast, large, hard-to-reverse gesture, while a departing counterpart makes patience plus opportunistic timing the rival's cheaper play — which would, if both hold, make the closing interval rather than the term's middle the period of maximal miscalculation risk.",
    leadingIndicators: [
      "A named, prestige-framed foreign initiative announced or accelerated in 2028 with an explicit pre-inauguration deadline — a territorial 'arrangement,' a Trump-named structure or zone abroad, or a single leader summit pitched as historic",
      "Renewed PRC or PLA-adjacent commentary restating the 'great changes' / window framing and counselling strategic patience through the US transition rather than confrontation",
      "Allied or congressional warnings that a late-term commitment binds the successor or lacks ratification and appropriations cover",
      "A discrete rival move — Taiwan Strait, South China Sea, or a grey-zone economic, tech, or maritime lever — clustered in the Nov 2028–Jan 2029 handover when US bandwidth is thinnest",
    ],
    caligulaParallel: "Caligula's expedition to the northern shore — the legions reportedly drawn up on the Channel beach and ordered to gather seashells as \"spoils of the Ocean,\" then a triumph staged over no conquest — is the archetype of the monument-grade gesture mistaken for strategy: prestige theatre at the empire's edge, timed to the ruler's need for a memorial rather than to military logic. The sources are hostile and the episode is contested: Suetonius and Dio are near-contemporary detractors, and modern scholars such as Winterling read the affair as deliberate provocation or garbled report rather than literal madness, so the parallel is offered as resonance, not proof.",
    disconfirmer: "a late-term initiative were pursued through ratified, appropriated, ally-endorsed channels that bound nothing the successor could not freely revisit — and no rival in fact found the transition a cheaper moment to act than any other point in the term.",
    sources: [
      { citation: "Fortune, 'The Navy's $20 billion Trump-class battleship... modern missiles will easily destroy it' (2026-05-03); House Armed Services Committee draft NDAA moving to bar its construction (NOTUS, 2026)", type: "journalism" },
      { citation: "Xi Jinping's 'great changes unseen in a century' (百年未有之大变局) and the '东升西降 / East rising, West declining' framing, as set out in PRC State Council and MFA statements and white papers", type: "primary" },
      { citation: "Suetonius, Life of Caligula 44–47, and Cassius Dio, Roman History 59.25 — hostile near-contemporary sources", type: "primary-hostile" },
      { citation: "Aloys Winterling, 'Caligula: A Biography' (Univ. of California Press, 2011), reading the Channel episode as provocation or distorted report rather than literal lunacy", type: "modern-scholarship" },
    ],
  },
  {
    id: "fiscal-reckoning-deferred-to-a-successor-2029",
    window: "Jan 2029 — the window closes",
    windowSort: 2029,
    title: "The bill left on the successor's desk: deferred fiscal reckoning as structural decadence",
    domain: "economy-trade",
    probability: "plausible",
    thesis: "By the time the window closes at noon on 20 January 2029, the administration may hand its successor a fiscal position — a ~$1.5T defense request layered onto debt approaching $40T, net interest already near $1.04T, and a dollar reserve share sliding below 57% — that has hardened from a correctable choice into a structural commitment. This is a projection, not a prediction of default: the more cautious reading is that none of these lines has yet crossed an irreversible threshold, and a successor with ordinary tools could still bend them.",
    mechanism: "The documented trajectory is a simultaneous, deficit-financed expansion: the FY2027 ~$1.5T defense request (a ~44% boost, including $1.8B merely to design a Trump-class battleship the House Armed Services draft NDAA already moves to ban) set against gross debt of $39.20T on 2026-06-03, projected to ~$40T by ~September 2026, with net interest at ~$1.04T (~14% of outlays) and the USD reserve share at 56.77% in 2025Q4, down from 64.69% in 2017Q1. The causal step is ratchet plus crowd-out: each new permanent outlay is politically easier to add than to remove, while each tariff-and-sanctions episode that nudges reserve managers toward cheaper non-US alternatives raises the interest burden and narrows fiscal space. The wager is that by 2029 the menu a successor faces — cut the defense base, raise revenue against a tariff-distorted economy, or monetize — is categorically harder than the menu of 2025, which is what \"structural\" rather than \"cyclical\" would mean. The reading could be wrong: debt ratios have looked alarming before and proven serviceable.",
    leadingIndicators: [
      "Net interest crossing and staying above defense outlays as a budget line (CBO/Treasury monthly statements through FY2027-28)",
      "Prestige hardware such as the Trump-class battleship surviving into enacted appropriations despite the HASC ban, signaling outlays are ratcheting rather than flexing",
      "USD reserve share holding below ~56% across successive IMF COFER releases, with rising EUR, gold, and RMB allocations",
      "Treasury auction tails widening or term premium rising as foreign official demand softens (TIC data, primary-dealer takedown)",
    ],
    caligulaParallel: "Suetonius reports that Tiberius left 2.7 billion sesterces in the treasury and that Caligula exhausted it within roughly a year on spectacle and prestige works — a bridge of boats at Baiae, a northern campaign that gathered seashells as \"spoils\" — before turning to confiscation and novel taxation to refill the chest (Suetonius, Caligula 37, 38, 46 — a hostile source written generations later, its figures literary as much as accounting). The echo is not the sum but the pattern: prestige expenditure treated as costless because the reckoning falls due on someone else's watch. The disanalogy matters too — a reserve-currency sovereign is not a personal treasury, and the constraints differ in kind.",
    disconfirmer: "the debt, defense, and reserve-share lines all prove cyclical rather than structural — a successor reverses them with ordinary budgeting, the interest burden stabilizes below the defense line, and foreign reserve managers drift back to the dollar once the tariff-and-sanctions premium fades.",
    sources: [
      { citation: "U.S. Congress Joint Economic Committee, debt tracker: gross national debt $39.20T as of 2026-06-03, ~$40T projected ~September 2026; net interest ~$1.04T FY2026 (~14% of outlays) (2026-06)", type: "official-record" },
      { citation: "Fortune, on the Trump-class battleship and the $1.5T defense request — ~$20B/ship, HASC draft NDAA ban, 'modern missiles will easily destroy it' (2026-05-03)", type: "journalism" },
      { citation: "IMF COFER, USD share of allocated global FX reserves 56.77% in 2025Q4 vs 64.69% in 2017Q1 (updated 2026-03)", type: "official-record" },
    ],
  },
  {
    id: "ai-sovereignty-walled-garden-2029",
    window: "Jan 2029 — the window closes",
    windowSort: 2029,
    title: "The walled garden that grows its own rival: AI export controls and the open-weight escape valve",
    domain: "technology-science",
    probability: "plausible",
    thesis: "By the window's close, the government-gated frontier-AI regime begun in 2026 may have hardened into a walled US ecosystem — frontier weights reachable only through vetted, customer-by-customer federal approval — while DeepSeek-class open-weight models at a fraction of the cost reach rough parity abroad, eroding the very lead the controls were meant to protect. This is one plausible branch, not a forecast; diffusion economics could cut the other way.",
    mechanism: "The documented trajectory is the 2026 AI-sovereignty turn: the Commerce export directive of June 2026 that forced Anthropic to suspend Fable 5 and Mythos 5 for everyone, US citizens included (Nextgov/FCW, 2026-06); Hegseth's 2026-02-27 \"supply-chain risk to national security\" designation; the Trump EO of 2026-06-02 seeking early government access and voluntary pre-release review (CNBC/NPR); and OpenAI's GPT-5.6 preview confined to roughly 20 government-vetted partners with no announced international tier (Reuters/TheNextWeb, 2026-06-26). The causal step is a substitution effect: each escalation narrows who may legally touch US frontier weights, so the marginal global developer routes to the unrestricted alternative — DeepSeek V4 Pro, open weights under MIT, 1M context, on the order of tens of times cheaper, released 2026-04-24. Controls meant to deny adversaries an edge can instead seed a parallel open ecosystem the US neither sets standards for nor monetises — the Tuchman pattern of a policy working against the interest it professes to serve. The branch fails if a compounding capability lead outruns diffusion faster than the controls leak.",
    leadingIndicators: [
      "US frontier access remains export-gated through 2028 — customer-by-customer ONCD/OSTP/Commerce approval, no relaxed international tier — rather than loosening once compliance tooling matures",
      "Open-weight hosted-inference share (Hugging Face / OpenRouter) overtakes US frontier API usage in non-US markets",
      "Allied governments (EU, Gulf, India) standardise sovereign-AI procurement on open weights rather than gated US models",
      "The published benchmark gap between top open-weight and top gated US models narrows toward parity on widely-cited evals",
    ],
    caligulaParallel: "Closing the frontier behind a loyalty-and-clearance gate to deny rivals an advantage recalls the imperial instinct to hoard prestige goods and police access to them — yet Suetonius reports that Caligula's grandiose denials and confiscations more often drained the treasury than secured it (Suetonius, Caligula 38-42 — a hostile source whose figures Winterling reads as moralised exaggeration). The echo is structural — a control that depletes what it means to protect — not a claim of equivalent intent.",
    disconfirmer: "the gating instead buys a durable, compounding capability lead — US frontier models stay far enough ahead that open-weight parity never materialises — and allies converge on the gated US stack rather than routing around it, leaving the controls a net strategic gain.",
    sources: [
      { citation: "Nextgov/FCW, \"Anthropic suspends top AI models after U.S. export control order\", 2026-06", type: "journalism" },
      { citation: "Reuters / TheNextWeb, OpenAI GPT-5.6 (Sol/Terra/Luna) preview limited to ~20 government-vetted partners, no international tier, 2026-06-26", type: "journalism" },
      { citation: "DeepInfra / OpenRouter / pricepertoken pricing pages, DeepSeek V4 Pro (open weights, MIT, 1M context), released 2026-04-24", type: "primary" },
      { citation: "CNBC / NPR, Trump executive order seeking early government access and voluntary pre-release review of AI models, 2026-06-02", type: "journalism" },
    ],
  },
  {
    id: "foreign-interference-risk-degraded-defenses-2026",
    window: "2026 H2",
    windowSort: 2026.5,
    title: "Foreign election interference meets dismantled defenses",
    domain: "elections-democracy",
    probability: "plausible",
    thesis: "Foreign influence operations targeting the November 2026 midterms (and 2028) are a documented, recurring risk; the open question this projection prices is whether the 2025-26 dismantling of US counter-interference capacity lets an operation land with more effect than in prior cycles. The folly here is to the integrity of American elections — a threat to be defended against, never a thing to be served.",
    mechanism: "Extrapolates a documented rollback, not a hypothetical: AG Pam Bondi disbanded the FBI's ~30-person Foreign Influence Task Force (Feb 2025); CISA placed election-security staff on leave and put its election work 'under review'; the FY2026 budget would eliminate CISA's Election Security Program (~$39.6M) and cut roughly 1,000 CISA staff. With detection, deterrence and the classified state/local threat briefings degraded, the marginal cost to a hostile influence operation falls — raising the probability that an attempt (near-certain on the historical record) achieves measurable effect. The contested step is from 'attempts happen' to 'an attempt lands'.",
    leadingIndicators: [
      "IC/ODNI disclosures or platform takedowns naming state-linked influence networks active in the 2026 cycle",
      "Whether CISA resumes — or permanently ends — classified election-threat briefings to state and local officials",
      "Enacted FY2026 cuts to CISA's Election Security Program versus congressional restoration of the funds",
      "Bipartisan post-election assessments of whether any foreign operation affected administration or outcomes",
    ],
    caligulaParallel: "Leaving the body politic's defences down — or tolerating outside meddling that happens to flatter the ruler — subordinates the legitimacy-conferring institution to personal advantage, the same hollowing of the machinery of consent that hostile sources ascribe to Caligula's treatment of the comitia (Suetonius, Caligula 16, 26 — a hostile source). Interpretive; here the harm is institutional neglect, not a decreed crime.",
    disconfirmer: "credible, bipartisan post-election assessments found no material foreign interference in the 2026/2028 cycles and the detection-and-deterrence apparatus (IC, CISA, platforms, state officials) functioned at least as well as in prior cycles.",
    sources: [
      { citation: "NPR, 'Efforts to fight foreign influence and protect elections in question under Trump' (2025-02-11); CNN, 'Secret US cyber operations shielded 2024 election… now the Trump admin has gutted protections' (2026-01-28)", type: "journalism" },
      { citation: "Reporting that AG Pam Bondi disbanded the FBI Foreign Influence Task Force (~30 staff), Feb 2025 (NPR / CNN)", type: "journalism" },
      { citation: "Nextgov/FCW, 'CISA projected to lose a third of its workforce under Trump's 2026 budget' (2025-06); CBS News, 'Election systems feared vulnerable as Trump administration cuts workers tasked with security' (2025)", type: "journalism" },
      { citation: "Brennan Center for Justice, 'How the Federal Government Is Undermining Election Security' (2025-2026)", type: "modern-scholarship" },
    ],
  },
];
