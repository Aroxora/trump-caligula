import { CriterionId } from './models';

export interface GlossaryTerm {
  term: string;
  definition: string;
  relevance: string;
}

export interface WeightPreset {
  name: string;
  description: string;
  weights: Record<CriterionId, number>;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'SPQR (Senatus Populusque Romanus)',
    definition:
      'Latin for "The Senate and People of Rome", the official emblem and shorthand for the Roman state and its claimed source of sovereign authority.',
    relevance:
      "It encodes the republican fiction the emperors maintained even at their most autocratic — the gap between Rome's stated ideals and the reality of one-man rule.",
  },
  {
    term: 'Senate',
    definition:
      "The council of Rome's leading men, originally a body of patrician elders that governed the Republic and later survived as a deliberative organ under the emperors.",
    relevance:
      'Its humiliation is a recurring measure of imperial folly: contempt for the Senate signals the personalisation of power.',
  },
  {
    term: 'Consul',
    definition:
      'The highest elected magistracy of the Republic, held by two men annually who shared supreme civil and military authority; under the emperors it became largely honorific.',
    relevance:
      "The jest that Caligula would make his horse consul is the archetypal image of an institution drained of meaning to flatter a ruler's whim.",
  },
  {
    term: 'Princeps',
    definition:
      'Meaning "first citizen", the title Augustus adopted to present his rule as primacy within the Republic rather than monarchy — the root of the word "prince".',
    relevance:
      "The principate's polite fiction — autocracy dressed as restored republicanism — frames how far each emperor dropped the mask.",
  },
  {
    term: 'Imperium',
    definition:
      'The legitimate power of command held by senior magistrates and emperors, encompassing military authority and the right to enforce law.',
    relevance:
      'Folly is measured partly by the distance between the imperium granted and the arbitrary will actually exercised.',
  },
  {
    term: 'Praetorian Guard',
    definition:
      'The elite military unit stationed in and around Rome to protect the emperor — the only standing armed force permitted in the capital.',
    relevance:
      "As both shield and threat, the Guard made and unmade emperors; Caligula's assassination by his own praetorians shows how cruelty turns protectors into executioners.",
  },
  {
    term: 'Equestrian / eques',
    definition:
      'A member of the wealthy non-senatorial elite, the "knights", who staffed commerce, finance, and key administrative and military posts.',
    relevance:
      'A counterweight and talent pool whose alienation by a capricious ruler signals broad mismanagement of the governing class.',
  },
  {
    term: 'Denarius',
    definition:
      "The standard silver coin of Rome and a primary instrument of imperial propaganda, broadcasting the emperor's image and slogans across the empire.",
    relevance:
      'Fiscal recklessness — lavish spending, debasement, or confiscations to refill an emptied treasury — is a traceable form of self-defeating misrule.',
  },
  {
    term: 'Triumph',
    definition:
      'The lavish ceremonial procession granted to a victorious general — the supreme public honour — increasingly monopolised by the imperial family.',
    relevance:
      "Caligula's staged or hollow military spectacles parody the triumph and expose grandiosity untethered from real achievement.",
  },
  {
    term: 'Damnatio memoriae',
    definition:
      "The formal condemnation of a person's memory after death, erasing their name and image from monuments, coins, and records.",
    relevance:
      "Rome's verdict on failed rule — a society's retroactive judgment that a legacy deserves obliteration rather than commemoration.",
  },
  {
    term: 'Deification / apotheosis',
    definition:
      'The elevation of an emperor (usually posthumously) to the status of a god through formal consecration by the Senate.',
    relevance:
      "Caligula's demand for worship while still living inverts the ritual — grandiosity crossing from honour into delusion.",
  },
  {
    term: 'Anacyclosis',
    definition:
      "Polybius's theory that governments cycle through predictable phases — monarchy, tyranny, aristocracy, oligarchy, democracy, mob rule — each decaying into the next.",
    relevance:
      "It frames any single ruler's folly as part of a recurring pattern of institutional decay rather than mere personal vice.",
  },
  {
    term: 'Incitatus',
    definition:
      "Caligula's favourite racehorse, reportedly given a marble stable, an ivory manger, and — per Suetonius — a planned consulship.",
    relevance:
      'The enduring symbol of arbitrary power mocking serious office — the central metaphor against which modern follies are measured.',
  },
  {
    term: 'Maiestas',
    definition:
      'The law of treason against the majesty of the Roman state, expanded to punish words, gestures, or perceived disrespect as capital crimes.',
    relevance:
      'The weaponisation of treason law to silence critics and enrich the treasury is a hallmark of paranoid, self-harming rule.',
  },
  {
    term: 'Proscription',
    definition:
      'A published list of citizens declared outlaws whose property was confiscated and who could be killed with impunity.',
    relevance:
      "The point where governance becomes predation on one's own elite — a counterproductive purge that hollows out the state.",
  },
  {
    term: 'Tribunician power (tribunicia potestas)',
    definition:
      'The authority of the plebeian tribunes — including veto and personal inviolability — which emperors held permanently to claim they protected the people.',
    relevance: 'Shows how rulers cloaked autocratic power in the language of popular protection.',
  },
  // ---- Voting / elections ----
  {
    term: `Voter roll purge`,
    definition: `The removal of registrations from a state's voter list during "list maintenance" — defensible when it deletes the dead or relocated, but corrosive when broad data-matching or aggressive intervals sweep eligible citizens off the rolls.`,
    relevance: `A modern echo of administrative gatekeeping that quietly shrinks the demos: when purges premised on phantom non-citizen voting remove real citizens, the institution is hollowed in the name of protecting it — folly disguised as housekeeping.`,
  },
  {
    term: `SAVE Act / documentary proof of citizenship`,
    definition: `The Safeguard American Voter Eligibility Act (H.R. 22, 119th Congress, passed the House 220-208 on 10 April 2025), which would require documentary proof of citizenship — passport, REAL ID indicating citizenship, or birth certificate — to register for federal elections.`,
    relevance: `A solution engineered for a near-nonexistent problem (non-citizen voting is vanishingly rare and already illegal in every state), whose predictable cost is disenfranchising married women whose names changed and the tens of millions without a passport — the Tuchman signature of a counterproductive course pursued against clear contrary evidence.`,
  },
  {
    term: `Mass voter challenges`,
    definition: `Organised, often software-generated bulk challenges to the eligibility of large numbers of registered voters, frequently filed by private activists before an election under state "any-voter-may-challenge" statutes.`,
    relevance: `Privatised attrition against the franchise: a low-cost way to burden election officials and intimidate legitimate voters, converting administrative friction into a tool of suppression — power exercised through procedural harassment rather than open decree.`,
  },
  {
    term: `Election certification`,
    definition: `The ministerial, legally non-discretionary step by which local and state officials formally confirm and finalise vote totals after canvassing — historically a clerical duty, not a venue for adjudicating fraud claims.`,
    relevance: `When officials treat a ministerial act as a discretionary veto and threaten to withhold certification, a load-bearing institutional norm is reclassified as a political weapon — the quiet sabotage of the machinery that converts votes into legitimate power.`,
  },
  {
    term: `Electoral Count Reform Act (2022)`,
    definition: `Bipartisan federal law overhauling the 1887 Electoral Count Act: it clarifies that the Vice President's role in counting electoral votes is purely ceremonial, raises the threshold to lodge objections, and tightens the timeline for resolving disputes.`,
    relevance: `A rare instance of institutional self-repair — Congress patching the ambiguity exploited on 6 January 2021. It marks the counter-folly: the system identifying a vulnerability and closing it, the alternative path Tuchman demands we weigh.`,
  },
  {
    term: `Voting Rights Act §2`,
    definition: `Section 2 of the 1965 Voting Rights Act, which bars voting practices that deny or abridge the right to vote on account of race — the principal surviving federal tool against discriminatory maps and rules after Shelby County (2013) gutted the §5 preclearance regime.`,
    relevance: `The eroding legal floor beneath the franchise: as courts narrow private enforcement and standing under §2, the chief federal guardrail against racially regressive election law weakens — a structural decline measured not in spectacle but in the slow withdrawal of remedy.`,
  },
  // ---- PRC / PLA ----
  {
    term: `Whole-process people's democracy (全过程人民民主)`,
    definition: `Beijing's official democratic theory, codified in the 2021 SCIO white paper "China: Democracy That Works", asserting that consultation, decision-making, and oversight under one-party CPC leadership constitute a fuller democracy than competitive Western elections.`,
    relevance: `The PRC's mirror-image of the republican fiction: like the principate's claim to have "restored the Republic", it preserves democratic vocabulary while removing its competitive substance — a rival legitimacy narrative the site must steelman, not caricature, when weighing whose institutions are actually decaying.`,
  },
  {
    term: `东升西降 (East rising, West declining)`,
    definition: `A Xi-era framing of the "great changes unseen in a century" — that comprehensive national power is shifting from a declining West to a rising East led by China.`,
    relevance: `The thesis the entire "decline" axis must adjudicate: American follies (self-inflicted institutional damage, alienation of allies) are exactly the data points Beijing cites as proof of 东升西降, making each US own-goal a contribution to a rival's strategic narrative — folly with geopolitical compounding interest.`,
  },
  {
    term: `Century of humiliation (百年国耻)`,
    definition: `The CPC's foundational historical narrative spanning the First Opium War (1839) to the founding of the PRC (1949), framing a century of foreign invasion, unequal treaties, and dismemberment as the wound that national rejuvenation must avenge.`,
    relevance: `The emotional engine of PRC legitimacy and grievance-driven assertiveness; it functions as the inverse of damnatio memoriae — a deliberately preserved memory of shame mobilised to justify present ambition, and the lens through which Beijing reads any Western lecture on norms.`,
  },
  {
    term: `Mandate of Heaven (天命)`,
    definition: `The classical Chinese doctrine that a ruler's legitimacy is a conditional grant of Heaven, forfeitable through misrule, natural disaster, and disorder — the traditional justification for dynastic overthrow.`,
    relevance: `The Chinese analogue to anacyclosis and the deepest comparative frame on the site: where Rome read folly through the cycle of constitutions, the Sinic tradition reads it as the withdrawal of the Mandate — both ancient theories that legitimacy is performance-tested and that misgovernment is self-terminating.`,
  },
  {
    term: `Global Security Initiative (GSI)`,
    definition: `Xi Jinping's 2022 framework, elaborated in a February 2023 MFA concept paper, proposing "common, comprehensive, cooperative and sustainable security" while opposing "bloc confrontation" and "Cold War mentality" — read by Beijing's critics as a bid to displace the US-led security order.`,
    relevance: `Part of the alternative order Beijing offers as the West appears to retreat; whenever Washington abdicates a multilateral role, the GSI is positioned to fill the vacuum — so the foreign-policy follies scored here are weighed not in isolation but as openings handed to a competing model.`,
  },
  {
    term: `Active defence (积极防御)`,
    definition: `The enduring core of PLA military strategy: strategically defensive at the level of grand policy ("we attack only after being attacked") but operationally and tactically offensive, with an elastic definition of what counts as a first strike against China.`,
    relevance: `A doctrine of strategic justification that lets an offensive posture wear a defensive label — the martial counterpart to "whole-process democracy", and a reminder that the analytic task is to read stated intent against demonstrated capability, exactly as the site reads political rhetoric against the record.`,
  },
  {
    term: `Anti-access / area-denial (A2/AD)`,
    definition: `A posture built from long-range sensors and precision fires (e.g. the PLA's DF-21D and DF-26 "carrier-killer" ballistic missiles) designed to hold an adversary's high-value forces at risk and deny them freedom to operate inside a contested zone, rather than to win a symmetric fleet-on-fleet battle.`,
    relevance: `The strategic logic behind the site's Defense-CAD verdict: against a mature A2/AD network, a large, concentrated capital ship like the proposed "Trump-class" battleship is a liability, not an asset — distributed, attritable force survives where monuments do not. Spectacle measured against physics.`,
  },
  {
    term: `Type 055 (Renhai-class)`,
    definition: `The PLA Navy's premier large surface combatant (≈12,000-13,000 tons, 112 vertical-launch cells), a multi-mission escort embedded in a distributed, networked fleet rather than a self-named flagship.`,
    relevance: `The real-world comparator that out-scores the vanity "Golden Fleet" in the site's cost-benefit model — disciplined, strategy-led shipbuilding (at a yard capacity the U.S. Navy itself rates far above America's) set against monument-building as a theory of naval power.`,
  },
  // ---- AI sovereignty & the dollar ----
  {
    term: `Open-weight model`,
    definition: `An AI model whose trained parameters are published for anyone to download, run, fine-tune, and self-host — exemplified by DeepSeek's MIT-licensed V4, released in April 2026 at a fraction of frontier US list prices.`,
    relevance: `The levelling force that turns frontier-model export controls into a potential own-goal: once a near-substitute is freely downloadable abroad, restricting access to a closed US model denies capability mainly to domestic and allied users, not to the rival the control was meant to contain — the Tuchman signature of a counterproductive course with a feasible alternative ignored.`,
  },
  {
    term: `Frontier-model export controls (government-gated AI)`,
    definition: `The 2026 regime under which the US government conditions the release of the most capable AI models on national-security review — the Commerce directive that forced Anthropic to suspend Fable 5 and Mythos 5 to non-citizens, and the customer-by-customer vetting that limited OpenAI's GPT-5.6 to ~20 approved partners.`,
    relevance: `A modern instance of rule-by-decree over a strategic good: capability switched off by command for the ruler's stated security ends, with the self-harm (throttling one's own developers while an unrestricted rival model fills the vacuum) borne at home — scored on the same axes as any other folly, and explicitly disclosed where the author's own organisation is a subject.`,
  },
  {
    term: `Exorbitant privilege (dollar reserve status)`,
    definition: `Valéry Giscard d'Estaing's term for the unique advantages the US derives from issuing the world's primary reserve currency — cheap borrowing and outsized financial leverage. The dollar's share of global FX reserves has slipped from ~70% in the late 1990s to ~56.8% by late 2025 (IMF COFER).`,
    relevance: `The fiscal hinge of the site's "are we Rome?" thesis: a reserve-currency issuer can run deficits and a ~$1.5T defence budget on borrowed money only so long as the world keeps bidding for its debt. A gradual erosion of that privilege, set against ~$39T in debt and ~$1T in annual interest, is the slow, structural kind of decline Tuchman warns is hardest to reverse — measured not in spectacle but in basis points.`,
  },
];

export const PRESETS: WeightPreset[] = [
  {
    name: 'Tuchman purist',
    description:
      'Folly is institutional: it counts only when a leader pursues a course against available alternatives that damages the wider system.',
    weights: {
      selfHarm: 0.8,
      counterproductive: 1.2,
      alternative: 1.6,
      systemic: 3,
      caligula: 0.6,
    },
  },
  {
    name: 'The skeptic',
    description:
      'Demands hard proof that an action backfired and that a better path was plainly visible at the time — discounting hindsight and theatrics.',
    weights: { selfHarm: 1, counterproductive: 3, alternative: 2.6, systemic: 1, caligula: 0.5 },
  },
  {
    name: 'The historian',
    description:
      'Weighs every axis evenly while staying alert to genuine Caligula-style resonances — the parallel as evidence to assess, not embrace.',
    weights: {
      selfHarm: 1.4,
      counterproductive: 1.4,
      alternative: 1.4,
      systemic: 1.6,
      caligula: 1.4,
    },
  },
  {
    name: 'The critic',
    description:
      'Reads folly through the Caligula lens — self-inflicted damage and the grandiose, capricious flourishes that echo the mad-emperor archetype.',
    weights: { selfHarm: 2.6, counterproductive: 1.2, alternative: 0.8, systemic: 1, caligula: 3 },
  },
  {
    name: 'The defender',
    description:
      "Distrusts the Caligula analogy as rhetorical excess; scores only folly that demonstrably harms the leader's own interests and provably backfired.",
    weights: { selfHarm: 3, counterproductive: 2.6, alternative: 1.2, systemic: 1, caligula: 0.2 },
  },
];
