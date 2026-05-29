import { InlineSource } from './models';

export interface CaseStudy {
  name: string;
  period: string;
  summary: string;
  lesson: string;
}

export const TUCHMAN = {
  definition:
    'Folly, for Tuchman, is not mere error, bad luck, or wickedness but "the pursuit by governments of policies contrary to their own interests" — self-defeating governance that proceeds despite contrary evidence, driven less by malice than by self-deception. To keep the category rigorous she fences it with three tests.',
  tests: [
    {
      name: 'Counter-productive in its own time',
      detail:
        'The policy "must have been perceived as counter-productive in its own time, not merely by hindsight." Live, audible warnings — the Trojans urging the horse be burned, churchmen warning the popes of schism — had to exist while the course was being chosen.',
    },
    {
      name: 'A feasible alternative existed',
      detail:
        'A realistic, achievable better path had to be open at the moment of choice — not a utopian option. Folly is the rejection of that available alternative. Leaders genuinely trapped with no real choice are excluded.',
    },
    {
      name: 'A group, persisting past one lifetime',
      detail:
        'The policy "should be that of a group, not an individual ruler, and should persist beyond any one political lifetime." This is the test that separates institutional folly from the caprice of a single sovereign — and the hinge of the whole Trump question.',
    },
  ],
  woodenHeadedness:
    '"Wooden-headedness," her master concept, "consists in assessing a situation in terms of preconceived fixed notions while ignoring or rejecting any contrary signs… acting according to wish while not allowing oneself to be deflected by the facts." Her epitome is Philip II of Spain, "the surpassing wooden-head of all sovereigns," whom no failure could shake from belief in his own policy.',
  caseStudies: [
    {
      name: 'Prototype — the Trojan horse',
      period: 'Legendary antiquity (Homer & Virgil, treated as archetype)',
      summary:
        'Despite Laocoön\'s spear and Cassandra\'s warning, the Trojans breached their own walls to haul the Greek horse inside. The feasible alternative — burning it — was obvious; they acted on the comforting wish that the enemy had given up.',
      lesson:
        'The pure case: folly proceeds against recognised alternatives and explicit warnings. A society can author its own catastrophe by refusing to weigh contrary signs.',
    },
    {
      name: 'The Renaissance popes provoke the Reformation',
      period: '1470–1530 (Sixtus IV → Clement VII)',
      summary:
        'Across sixty years six popes indulged in venality, nepotism and warfare — culminating in Leo X\'s sale of indulgences that provoked Luther in 1517 — while "deaf to disaffection, blind to alternative ideas." Credible calls for reform were ignored until Christendom split.',
      lesson:
        'Tuchman calls it "a folly of perversity": an entrenched institution, persisting across many leaders, treating reform as unthinkable and challenge as impossible. Group folly outlasting any single pontificate.',
    },
    {
      name: 'The British lose America',
      period: 'c. 1763–1783 (George III)',
      summary:
        'Successive British governments taxed and coerced the colonies (Stamp Act, Townshend duties, the Coercive Acts) while ignoring Burke, Chatham and colonial petitioners. Conciliation was openly argued in Parliament and rejected; Britain pursued sovereignty to the point of war and lost the colonies entirely.',
      lesson:
        'Folly as the obstinate defence of an abstract principle (parliamentary supremacy) against the practical interest of the state — a complacent class mistaking firmness for wisdom.',
    },
    {
      name: 'America betrays herself in Vietnam',
      period: '1945–1973 (Truman → Nixon)',
      summary:
        'Across five administrations the US deepened commitment to an unwinnable war, rationalised by domino-theory fear and an unwillingness to admit error. Internal analyses repeatedly judged it futile; disengagement was feasible; policy escalated anyway.',
      lesson:
        'Her modern, fully documented archetype of group folly persisting across multiple political lifetimes: bureaucratic momentum, wooden-headed refusal to absorb evidence, prestige substituting for assessment. The hardest folly to escape is the one a government inflicts on itself by refusing to reverse a publicly committed course.',
    },
  ] as CaseStudy[],
  application:
    "Tuchman's third test is decisive for the column's question. A phenomenon confined to one idiosyncratic ruler is not yet folly in her technical sense — it becomes systemic folly only when a group (a party, a bureaucracy, a voter coalition) adopts the self-defeating course and carries it past the originating leader. So the personal-vs-systemic question resolves into three: were contrary signs institutionally available and ignored? Were feasible alternatives rejected by a group rather than vetoed by one will? Does the counter-productive policy outlast a single term? Three yeses put it in her gravest category — Vietnam, the popes. If it dies with its author, it is personal misrule, not a march of folly.",
  applicationCaveat:
    'This mapping is reconstructed from Tuchman\'s own stated criteria. The best-documented public application of "wooden-headedness" to Trump is Jon Meacham\'s 2018 essay, which frames it as a broad contemporary phenomenon rather than a labelled verdict.',
  sources: [
    { citation: 'Barbara W. Tuchman, "The March of Folly: From Troy to Vietnam" (Knopf, 1984) — Introduction, the three tests, and the wooden-headedness / Philip II passages.', type: 'modern-scholarship' },
    { citation: 'Jon Meacham, History News Network, "…the Age of Trump in Barbara Tuchman\'s work" (15 Mar 2018) — frames wooden-headedness as "a prevailing factor in our politics".', type: 'journalism' },
  ] as InlineSource[],
};
