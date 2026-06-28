import { InlineSource } from './models';

/**
 * "The view from Beijing" — a clearly-labelled PRC/PLA reading of the American
 * "march of folly" this site catalogues. It is presented in Beijing's own
 * voice-as-reported and grounded in real official doctrine (SCIO and MFA white
 * papers, Xi's "great changes unseen in a century", the three Global
 * Initiatives), then — per the site's ethos — closed with an honest note on
 * where this same viewpoint is itself open to challenge. A viewpoint to assess,
 * not an endorsement.
 *
 * Output of the parallel research + adversarial fact-check pass (see research/);
 * the verification corrected the poverty figure to the World Bank's own wording
 * ("close to three-quarters").
 */

export interface PrcPlank {
  point: string;
  explanation: string;
  caveat?: string;
  sources: InlineSource[];
}

export interface PrcSection {
  title: string;
  body: string;
  sources: InlineSource[];
}

export const PRC_LEDE = `This section presents, in its own terms and as a viewpoint to be assessed rather than endorsed, how the People's Republic of China and its strategic establishment would read the very "American march of folly" this site catalogues. Beijing's reading is openly attributable to a real body of official doctrine — State Council and Foreign Ministry white papers, Xi Jinping's "great changes unseen in a century", the three Global Initiatives — and it turns the site's own Rome-to-America "decadence" thesis into evidence for the slogan "东升西降", the East rising and the West declining. It is rendered here as reported, citable geopolitical argument, not as covert advocacy; per the site's ethos it closes with an honest note on where this same viewpoint is itself open to challenge.`;

/**
 * The Caligula Window callout — ties the perpetual countdown at the top of the
 * page to this section: the timer is, on Beijing's reading, a clock on exactly
 * the window of opportunity a patient rival is modelled to exploit.
 */
export const PRC_WINDOW_NOTE = `The countdown pinned to the top of this page — the Caligula Window — is, in this reading, a clock on precisely the opportunity Beijing is modelled to exploit: the finite interval before an election can begin to reverse the follies catalogued below. A long-horizon rival does not need to win an argument inside that window; it needs only to outlast it.`;

export const PRC_PLANKS: PrcPlank[] = [
  {
    point: "American 'democracy' is the disease, not the cure",
    explanation: `Beijing's settled position, stated annually since 2021, is that the United States is a "democracy that has gone wrong" — captured by money, paralysed by partisan gridlock, and disfigured by what its Foreign Ministry calls "the chaos of one person, one vote" overlaying entrenched plutocracy. China's MFA "The State of Democracy in the United States" reports (first issued December 5, 2021, with a 2022 edition in March 2023) catalogue money politics, the January 6 Capitol assault, voter-suppression litigation and social rifts as proof that the model the U.S. tries to export is failing at home. From this vantage the follies indexed on this site — institutional capture, lawfare, alliance-coercion — are not anomalies but the predictable late symptoms of that broken system.`,
    caveat: `These are self-interested state documents produced by an authoritarian government engaged in a "discourse-power" contest with Washington; they are accurate on specific verifiable facts (e.g. that January 6 occurred, that U.S. campaign spending is enormous) but are selective advocacy, not neutral analysis, and say nothing about China's own far tighter constraints on dissent and the vote.`,
    sources: [
      {
        citation:
          "Ministry of Foreign Affairs of the PRC, 'The State of Democracy in the United States' (Dec 5, 2021) and 'The State of Democracy in the United States: 2022' (Mar 20, 2023)",
        type: 'official-record',
      },
      {
        citation:
          "CSIS Interactive, 'Beijing's New Narrative of U.S. Decline' (opensource.csis.org)",
        type: 'journalism',
      },
    ],
  },
  {
    point: "'Whole-process people's democracy' as the rival template",
    explanation: `Against the American model, the State Council Information Office's white paper "China: Democracy That Works" (December 4, 2021) advances "whole-process people's democracy" (全过程人民民主) — a claim that legitimacy flows not from a single contested ballot but from continuous consultation through the people's congresses, the CPPCC, and grassroots channels, judged by "results-oriented" delivery rather than "process-oriented" theatre. Beijing frames this as substantive democracy that solves problems, explicitly timed to counter the U.S.-hosted Summit for Democracy and to contest who gets to define the word "democracy" at all.`,
    caveat: `This is a contested redefinition: independent observers note the absence of competitive multiparty elections, an independent judiciary, or a free press, so "whole-process" democracy describes a consultative-authoritarian system, not democracy as the term is used in pluralist political science. Presented here as Beijing's claim, not as established fact.`,
    sources: [
      {
        citation:
          "State Council Information Office of the PRC, white paper 'China: Democracy That Works' (Dec 4, 2021), full text via SCIO (english.scio.gov.cn)",
        type: 'official-record',
      },
      {
        citation:
          "Wikipedia / CGTN summaries of 'China: Democracy That Works' and whole-process people's democracy (accessed 2026)",
        type: 'journalism',
      },
    ],
  },
  {
    point: 'Performance legitimacy: ~800 million lifted from poverty',
    explanation: `Beijing's strongest empirical card is developmental, and it is one a hostile source corroborates. A 2022 World Bank study, "Four Decades of Poverty Reduction in China" (co-produced with China's Ministry of Finance and the State Council's Development Research Center), found that since 1978 China lifted close to 800 million people out of extreme poverty — close to three-quarters of global poverty reduction over that period (the World Bank's own phrasing) — and that China declared the eradication of extreme rural poverty in 2020. For PRC strategists this is meritocratic, performance-based legitimacy: a state judged by what it delivers, set against an America whose follies (tariffs that raise domestic prices, gutted public-health institutions, vanity defence projects) are read as a governing class enriching and amusing itself while delivery decays.`,
    caveat: `The headline figure is real and World-Bank-endorsed, but scholars debate the baseline and poverty line used, how much credit belongs to market reforms versus the Party, and the slowing of growth since; "performance legitimacy" also offers no account of what happens when performance falters, and brackets political and human-rights costs entirely.`,
    sources: [
      {
        citation:
          "World Bank, 'Four Decades of Poverty Reduction in China: Drivers, Insights for the World, and the Way Ahead' / press release 'Lifting 800 Million People Out of Poverty' (Apr 1, 2022)",
        type: 'official-record',
      },
      {
        citation: 'World Bank, China country overview and poverty data (worldbank.org)',
        type: 'official-record',
      },
    ],
  },
  {
    point: 'The century of humiliation to national rejuvenation',
    explanation: `The PRC reads world history through the arc from the "century of humiliation" (百年国耻, conventionally 1839-1949 — the Opium Wars, unequal treaties, foreign concessions and the Japanese occupation) to the "great rejuvenation of the Chinese nation" (中华民族伟大复兴), the organising mission Xi Jinping foregrounded in his July 1, 2021 speech marking the CPC's centenary. In this frame, a self-confident, long-planning China returning to centrality is the historical norm being restored, while a flailing, short-termist America is an aberration receding — the precise inversion of the "are we Rome?" anxiety this site explores.`,
    caveat: `The humiliation-to-rejuvenation narrative is a deliberately curated official history that licenses nationalism and is used to justify present policy (including coercive measures); historians note it flattens internal causes of Qing decline and selectively deploys grievance. It is reported here as Beijing's self-understanding.`,
    sources: [
      {
        citation:
          "Xi Jinping, 'Speech at a Ceremony Marking the Centenary of the Communist Party of China' (Jul 1, 2021), PRC embassy text",
        type: 'official-record',
      },
      {
        citation:
          "'Century of humiliation' overview, Wikipedia / Council on Foreign Relations Education, 'China Under Xi Jinping'",
        type: 'journalism',
      },
    ],
  },
  {
    point: "Multipolarity and a 'community with a shared future' versus 'hegemonism'",
    explanation: `Beijing positions itself as the patron of a multipolar order against U.S. "hegemonism" and "Cold-War mentality", bundled under the master concept of "a community with a shared future for mankind" (人类命运共同体) and operationalised through Xi's Global Development Initiative (Sept 2021), Global Security Initiative (Boao, Apr 2022; concept paper Feb 21, 2023) and Global Civilization Initiative (2023). The GSI's signature plank — "indivisible security", the claim that no state should build its own security on others' insecurity — is aimed squarely at the U.S. alliance system, and Trump-era tariff and alliance-coercion behaviour is cited by PRC commentary as proof that Washington treats even its friends transactionally.`,
    caveat: `Critics note these initiatives are thin on binding institutions and are read by many analysts as instruments to build a China-centred "parallel order" and to legitimise Beijing's own sphere of influence; "indivisible security" echoes language also used by Moscow regarding Ukraine. Steelmanned here as doctrine, flagged as contested in intent.`,
    sources: [
      {
        citation:
          "Ministry of Foreign Affairs of the PRC, 'The Global Security Initiative Concept Paper' (Feb 21, 2023)",
        type: 'official-record',
      },
      {
        citation:
          "Wikipedia, 'Global Security Initiative' and 'Global Civilization Initiative'; SCSP / War on the Rocks analyses of Xi's Global Initiatives (2023-2024)",
        type: 'journalism',
      },
    ],
  },
  {
    point: 'Non-interference and sovereignty: Taiwan as an internal affair',
    explanation: `A load-bearing principle of the Beijing reading is sovereignty and non-interference: the PRC's August 2022 white paper "The Taiwan Question and China's Reunification in the New Era" frames Taiwan as a purely internal matter and reunification as a "historic mission", so that U.S. arms sales and official contacts are cast as illegitimate interference in another state's affairs. PRC strategists invert the Western critique — it is Washington, they argue, that is the serial intervener and regime-changer, while China upholds the Westphalian norm; the disorder catalogued on this site is, on this reading, the wage of a hegemon that meddles abroad while rotting at home.`,
    caveat: `This is the most directly self-serving plank: the "internal affair" framing is precisely what underwrites military coercion in the Taiwan Strait, the principle of non-interference is applied asymmetrically, and Taiwan's own democratic self-government and the views of its people are erased by the formulation. Treated here as a hostile/partisan primary source.`,
    sources: [
      {
        citation:
          "Taiwan Affairs Office & State Council Information Office of the PRC, white paper 'The Taiwan Question and China's Reunification in the New Era' (Aug 10, 2022)",
        type: 'official-record',
      },
      {
        citation:
          "Council on Foreign Relations, analysis of Xi Jinping's statements on Taiwan and reunification (cfr.org)",
        type: 'journalism',
      },
    ],
  },
  {
    point: 'Long-horizon planning versus electoral short-termism',
    explanation: `PRC strategists contrast the Party's capacity for multi-decade planning — Five-Year Plans, the "two centenary goals", Made in China 2025, the 2035 and mid-century modernisation targets — with an American system they characterise as hostage to two- and four-year electoral cycles, in which policy lurches reverse with each administration. Trump-era examples are read as confirmation: serial withdrawal from the Paris accord, the WHO and other multilateral bodies, tariff regimes imposed and rescinded, and institutions hollowed for short-term advantage, all of which Beijing files as a hegemon unable to sustain a coherent strategy across a single political lifetime.`,
    caveat: `The contrast flatters the planner: centralised long-horizon planning also produced costly errors with no electoral correction (the one-child policy, zero-COVID, property-sector overbuild), and "short-termism" in democracies is partly the price of accountability and reversibility. The comparison is real but selectively drawn.`,
    sources: [
      {
        citation:
          'PRC State Council, 14th Five-Year Plan (2021-2025) and Long-Range Objectives Through 2035 (gov.cn)',
        type: 'official-record',
      },
      {
        citation:
          "Rush Doshi, 'The Long Game: China's Grand Strategy to Displace American Order' (Brookings / Oxford University Press, 2021)",
        type: 'modern-scholarship',
      },
    ],
  },
  {
    point: "'East rising, West declining' (东升西降) as the synthesis",
    explanation: `Beijing folds all of the above into the slogan "东升西降" — the East is rising and the West is declining — which Xi articulated internally around October 2020 and which surfaced publicly in early 2021 as the "most prominent feature" of the "great changes unseen in a century" (百年未有之大变局). On this reading the American follies indexed here are not isolated scandals but data points in a secular trend: a confident, rising East and an exhausted, self-harming West. The whole "Caligula Index" is, from Zhongnanhai's chair, an inadvertent Western confession of the very decline Beijing has been forecasting.`,
    caveat: `Even within China this triumphalism has drawn caution — Xi himself has paired it with warnings against complacency, and outside analysts argue China's own slowdown, demographic decline and debt make "东升西降" look premature; the slogan is as much aspirational morale-building as description.`,
    sources: [
      {
        citation:
          "'The East is rising and the West is declining' (东升西降), Wikipedia; RFA, 'China touts economic prospects amid rising East and declining West' (Feb 27, 2024)",
        type: 'journalism',
      },
      {
        citation:
          "China Leadership Monitor, 'Occidental Fall: Assessing Chinese Views of U.S. Decline' (prcleader.org)",
        type: 'journalism',
      },
    ],
  },
];

export const PRC_DECLINE_READING = `From Beijing's chair, the most useful thing about this entire site is its central conceit. The Rome-to-America frame — Polybius's anacyclosis, Gibbon's luxury-and-lost-virtue "Decline and Fall", Edward Watts's century-long erosion of a republic whose citizens "assumed the system would last forever" — is read by PRC strategists not as a cautionary essay an American wrote about America, but as a confession. The "decadence" Tuchman, Gibbon and the site's own "are we Rome?" section circle around is, on this reading, exactly what Beijing has long predicted of a hegemon in its terminal phase: a governing class that gilds the Oval Office and brands a "Golden Fleet" while public health, alliances and industrial base corrode; spectacle and personalised power crowding out "results-oriented" governance; wooden-headed insistence on prestige and "face" (tariffs, coercion of allies, institutional withdrawal) sustained against contrary evidence. The very "wooden-headedness" Tuchman diagnoses — clinging to fixed notions while filtering out disconfirming facts — maps, in this reading, onto a declining West that cannot absorb the news of its own relative decline. Beijing's inversion is elegant and self-serving in equal measure: it accepts the site's diagnostic of American folly wholesale, then reassigns the historical role. America is Rome; China is not the barbarian at the gate but the older, patient civilisation reclaiming centrality after a century-long interruption. The Index, in short, is welcomed in this reading as Western testimony for the prosecution.`;

export const PRC_PLA_SECTION: PrcSection = {
  title:
    "The PLA reading: distributed, strategy-led modernisation as the measured antithesis of the 'Golden Fleet'",
  body: `Where the civilian narrative claims the moral high ground, the People's Liberation Army narrative claims the engineering high ground — and here Beijing's reading dovetails precisely with this site's own Defense-CAD finding. Chinese military doctrine, organised around "active defence" (积极防御) and an anti-access/area-denial (A2/AD) posture, has for two decades invested not in vanity capital ships but in a distributed, networked, attritable architecture: land-based "carrier-killer" anti-ship ballistic missiles (the DF-21D, ~1,500+ km, and the DF-26 intermediate-range missile, both documented in successive U.S. DoD "Military and Security Developments Involving the PRC" reports), layered sensors and a kill-chain designed to hold large, concentrated, high-value targets at risk far from China's coast. The PLA Navy's own surface flagship, the Type 055 / Renhai-class (≈12,000-13,000 tons, 112 VLS cells, eight built 2017-2020 with further hulls now in trials), is a disciplined, multi-mission escort embedded in that distributed system — not a self-named monument. Crucially, the U.S. Office of Naval Intelligence has itself assessed China's shipbuilding capacity at more than 200 times that of the United States (one widely reported figure put it near 232x by tonnage), so the comparison is not propaganda but a fielded industrial reality. This is exactly the verdict this site's OSINT Defense-CAD cross-check reaches by independent, first-principles modelling: a value_index of (benefit × survivability) / lifecycle-cost ranks the proposed "Trump-class" battleship LAST among modelled options — a large radar-cross-section, concentrated target running directly against Distributed Maritime Operations — while networked, distributable alternatives and the real PLA comparator, the Type 055, score higher. The PLA reading and the site's engineering finding converge: the Golden Fleet is spectacle; survivable force is distributed, computed, and patient.`,
  sources: [
    {
      citation:
        "U.S. Department of Defense, 'Military and Security Developments Involving the People's Republic of China' (annual report to Congress, 2023-2024 editions), on active defence, A2/AD, DF-21D and DF-26 ASBMs",
      type: 'official-record',
    },
    {
      citation:
        "U.S. Naval Institute, 'Type 055 Renhai-Class Cruiser: China's Premier Surface Combatant', Proceedings (Mar 2023); Type 055 destroyer, Wikipedia (112 VLS cells; eight built 2017-2020)",
      type: 'journalism',
    },
    {
      citation:
        "The War Zone (TWZ), 'Alarming Navy Intel Slide Warns Of China's 200 Times Greater Shipbuilding Capacity' (ONI assessment, 2023; widely re-reported 2024)",
      type: 'journalism',
    },
    {
      citation:
        "OSINT Defense-CAD — 'COST_BENEFIT_ANALYSIS.md': value_index = (benefit x survivability) / lifecycle-cost ranks the conceptual Trump-class battleship LAST; Type 055 and distributed/attritable options score higher (github.com/Aroxora/Defense-CAD; osint-defense.web.app)",
      type: 'modern-scholarship',
    },
  ],
};

export const PRC_CONTESTABLE = `The site's ethos requires treating this Beijing viewpoint the way it treats any hostile or partisan source elsewhere — as advocacy to be steelmanned and then tested, not asserted. Its central evidentiary weakness is self-reporting: the white papers and MFA democracy reports are produced by a one-party state contesting "discourse power" with Washington, so they are reliable on verifiable particulars (January 6 happened; U.S. money politics is real; the World Bank did endorse the ~800-million poverty figure) but are selective by design and silent on the home ledger. That home ledger is where the viewpoint is most open to challenge: the mass detention and surveillance regime documented in Xinjiang (described as crimes against humanity by Human Rights Watch and as possible crimes against humanity by the 2022 UN OHCHR assessment), the dismantling of Hong Kong's promised autonomy and free press after the 2020 National Security Law, and one of the world's most extensive censorship and dissent-suppression systems all sit awkwardly beside a claim to superior "democracy". The gap between "whole-process people's democracy" rhetoric and contested practice — no competitive elections, no independent courts, no free press — is precisely the gap pluralist critics press. The "non-interference / Taiwan as internal affair" principle is applied asymmetrically and underwrites real military coercion across the Taiwan Strait, erasing the agency of a self-governing democracy. And "东升西降" triumphalism is itself empirically contestable: China's growth has slowed, its demographics are turning down, and its own long-horizon planning produced uncorrected errors (the one-child policy, zero-COVID, property overbuild) that a more accountable system might have reversed sooner. In short, the Beijing reading is a coherent, citable, and partly fact-anchored argument that the American follies on this site confirm Western decline — and it is also a state-interested narrative whose author would not survive the same scrutiny it trains on Washington. Both halves of that sentence are load-bearing.`;

export const PRC_BIBLIOGRAPHY: InlineSource[] = [
  {
    citation:
      "State Council Information Office of the PRC, white paper 'China: Democracy That Works' (Dec 4, 2021), full text via english.scio.gov.cn",
    type: 'official-record',
  },
  {
    citation:
      "Ministry of Foreign Affairs of the PRC, 'The State of Democracy in the United States' (Dec 5, 2021) and 'The State of Democracy in the United States: 2022' (Mar 20, 2023)",
    type: 'official-record',
  },
  {
    citation:
      "Ministry of Foreign Affairs of the PRC, 'The Global Security Initiative Concept Paper' (Feb 21, 2023); related GDI (Sept 2021) and GCI (2023) materials",
    type: 'official-record',
  },
  {
    citation:
      "Taiwan Affairs Office & State Council Information Office of the PRC, 'The Taiwan Question and China's Reunification in the New Era' (Aug 10, 2022)",
    type: 'official-record',
  },
  {
    citation:
      "Xi Jinping, 'Speech at a Ceremony Marking the Centenary of the Communist Party of China' (Jul 1, 2021); '东升西降 / The East is rising and the West is declining' (c. Oct 2020, public early 2021)",
    type: 'official-record',
  },
  {
    citation:
      "World Bank, 'Four Decades of Poverty Reduction in China: Drivers, Insights for the World, and the Way Ahead' and press release 'Lifting 800 Million People Out of Poverty' (Apr 1, 2022)",
    type: 'official-record',
  },
  {
    citation:
      "Rush Doshi, 'The Long Game: China's Grand Strategy to Displace American Order' (Oxford University Press / Brookings, 2021); China Leadership Monitor, 'Occidental Fall: Assessing Chinese Views of U.S. Decline'",
    type: 'modern-scholarship',
  },
  {
    citation:
      "U.S. Department of Defense, 'Military and Security Developments Involving the PRC' (annual, 2023-2024); USNI Proceedings on the Type 055 (Mar 2023); TWZ on the ONI 200x shipbuilding-capacity slide (2024); UN OHCHR, 'Assessment of human rights concerns in the Xinjiang Uyghur Autonomous Region' (Aug 31, 2022)",
    type: 'official-record',
  },
];
