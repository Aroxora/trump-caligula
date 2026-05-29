import { InlineSource } from './models';

export interface Disanalogy {
  point: string;
  explanation: string;
  caveat?: string;
  sources: InlineSource[];
}

export const DISANALOGIES: Disanalogy[] = [
  {
    point: 'Democratic legitimacy and competitive elections',
    explanation:
      'Trump returned to office by winning the 2024 election outright — 312 electoral votes and a 49.8% popular plurality in a contested, certified vote. Caligula acceded in AD 37 by dynastic succession and Praetorian acclamation, with no electoral mandate whatsoever. A ruler accountable to a recurring vote is a structurally different office than a hereditary princeps.',
    sources: [
      { citation: 'CFR, "The 2024 Election by the Numbers"; Pew, "Behind Trump\'s 2024 Victory" (2025)', type: 'journalism' },
      { citation: 'Suetonius, Life of Caligula 13–14 (acclamation, AD 37)', type: 'primary-hostile' },
    ],
  },
  {
    point: 'Binding term limits and a fixed exit',
    explanation:
      'The 22nd Amendment bars Trump, twice elected, from a third term; scholars across the spectrum call proposed workarounds "implausible." Caligula held the principate for life — only assassination ended it in AD 41. A legally enforced terminus on power is categorically different from open-ended autocracy.',
    caveat: 'The legal bar is documented; whether it is honoured in practice is a separate forward-looking question.',
    sources: [
      { citation: 'U.S. Const. amend. XXII; Constitution Annotated', type: 'official-record' },
      { citation: 'FactCheck.org, "Legal Scholars Dispute Constitutional Loophole for a Third Trump Term" (2025)', type: 'journalism' },
    ],
  },
  {
    point: 'Independent courts that actually constrain him',
    explanation:
      'In 2025 federal courts issued ~25 nationwide injunctions in the second term\'s first hundred days, striking down or enjoining measures such as the birthright-citizenship order. Rome had no independent judiciary able to enjoin a princeps; under Caligula the treason courts were instruments of the ruler, not checks on him.',
    caveat: 'Courts\' efficacy is contested: in Trump v. CASA (June 2025) the Supreme Court substantially curtailed universal injunctions, 6–3. Documented as to the existence of review; contested as to its ultimate strength.',
    sources: [
      { citation: 'CRS R48476, "Nationwide Injunctions in the First Hundred Days…" (2025)', type: 'official-record' },
      { citation: 'Trump v. CASA, Inc., No. 24A884 (U.S. 27 June 2025)', type: 'official-record' },
      { citation: 'Cassius Dio 59.16, 59.18 (Caligula\'s revived maiestas trials)', type: 'primary-hostile' },
    ],
  },
  {
    point: 'A free press and an open information environment',
    explanation:
      'Trump operates amid a vast, legally protected, adversarial press that investigates him daily — the "Trump-class" battleship story itself was broken in December 2025 by USNI News, CNN, NPR and others. Under the principate there was no institutional free press; surviving narratives were written under and against later regimes.',
    sources: [
      { citation: 'USNI News et al., December 2025 coverage; U.S. Const. amend. I', type: 'journalism' },
    ],
  },
  {
    point: 'Federalism and dispersed power',
    explanation:
      'US power is split across fifty states, a bicameral legislature and three branches; a president cannot simply command outcomes nationwide. Caligula sat atop a far more centralised structure in which the princeps personally controlled armies, provinces and the treasury.',
    sources: [
      { citation: 'U.S. Const. arts. I–III, amend. X', type: 'official-record' },
      { citation: 'Mary Beard, SPQR (2015)', type: 'modern-scholarship' },
    ],
  },
  {
    point: 'No literal claim to divinity',
    explanation:
      'Hostile sources report Caligula presenting himself as a god, styled "Jupiter," ordering his statue placed in the Jerusalem Temple (well attested in Philo and Josephus, c. AD 39–40). Trump\'s grandiosity is rhetorical and political, not a literal claim to godhood — and modern scholars argue several "divinity" anecdotes may be misread jokes or slander, widening the gap.',
    caveat: 'The divinity reports are primary-hostile and contested; the disanalogy holds under either the literal or the revisionist reading.',
    sources: [
      { citation: 'Philo, Embassy to Gaius; Suetonius, Caligula 22; Cassius Dio 59.26–28', type: 'primary-hostile' },
      { citation: 'Aloys Winterling, Caligula: A Biography (2011)', type: 'modern-scholarship' },
    ],
  },
  {
    point: 'No extrajudicial killing of opponents',
    explanation:
      'Dio\'s hostile account portrays Caligula\'s reign as marked by revived treason prosecutions and killings within the senatorial class. There is no documented instance of Trump ordering the death of a senator or rival — lethal elimination of opponents has no analogue in the modern case.',
    caveat: 'The ancient body count is itself contested: Barrett notes Dio names only ~5 consular senators actually tried for treason, and most senators survived with persons and fortunes intact.',
    sources: [
      { citation: 'Cassius Dio 59.18; Anthony A. Barrett, Caligula: The Corruption of Power (1989)', type: 'modern-scholarship' },
    ],
  },
  {
    point: 'Vastly different scale, era, and institutions',
    explanation:
      'Caligula ruled a pre-modern slave-holding autocracy of perhaps 50–60 million subjects, with no constitution, elections or separation of powers, for under four years before being murdered. The US is a 330-million-person constitutional republic with ~240 years of institutional continuity.',
    sources: [{ citation: 'Mary Beard, SPQR (2015); A. A. Barrett, Caligula (1989)', type: 'modern-scholarship' }],
  },
  {
    point: "Caligula's evidence is hostile, post-mortem and contested",
    explanation:
      'Our portrait derives from Seneca, Philo, Josephus, Suetonius (writing ~80 years later) and Dio (3rd century) — all after his death, largely from a class he had humiliated. Barrett likens them to tabloid reporters; Winterling and Beard treat signature anecdotes (the consul-horse, the "war on Neptune," incest) as jokes, slander or distortion. We compare a continuously documented presidency against a figure whose worst stories may be propaganda.',
    caveat: 'The strongest single methodological disanalogy: the source asymmetry is itself documented scholarly consensus.',
    sources: [
      { citation: 'A. A. Barrett (1989); A. Winterling (2011); Suetonius (c. AD 121); Cassius Dio bk. 59', type: 'modern-scholarship' },
    ],
  },
];

export const CRITIQUE_OF_ANALOGY =
  'The deeper hazard is that ruler-to-ruler analogies flatter the analogist while teaching little. Tuchman herself excluded the misgovernment of a single sovereign as "too frequent and too individual" to yield a generalisable lesson — so a one-man comparison fails the very test the most-cited theorist of folly set. Worse, the Caligula image we reach for is a literary artifact assembled by hostile writers and substantially deconstructed by modern scholarship. Historical analogy also smuggles in a determinism (Rome fell, therefore…) that obscures contingency and the different architecture of a constitutional republic. The honest use of the past is comparative and probabilistic, not predictive and moralising.';

export const STEELMAN =
  'And yet the comparison stays illuminating as a diagnostic lens rather than a prophecy. Winterling\'s rehabilitation is the strongest pro-analogy move: he argues Caligula was not insane but rationally testing how far a ruler could humiliate and dominate a deferential elite who kept rewarding him — a structural dynamic about what happens when constraint erodes and flattery is incentivised. Read that way, the analogy is not "Trump will name a horse consul" but "watch how institutions, courtiers and norms behave under a leader who treats office as personal dominance." Naming a warship class after oneself is exactly the personalisation the Caligula sources foreground — and the disanalogies above keep the comparison from collapsing into hysteria.';
