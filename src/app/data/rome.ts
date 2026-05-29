import { InlineSource } from './models';

export interface RomeSection {
  title: string;
  body: string;
  sources: InlineSource[];
}
export interface FounderFear {
  who: string;
  fear: string;
  source: string;
}

export const ROME_SECTIONS: RomeSection[] = [
  {
    title: "Polybius's anacyclosis — the cycle of constitutions",
    body: 'In Book VI of his Histories, Polybius (c. 200–118 BCE) argued that simple constitutions rotate through a fixed cycle: monarchy decays into tyranny, overthrown into aristocracy, which decays into oligarchy, overthrown into democracy, which decays into mob rule — inviting a strongman to restart it. Each "good" form carries the seed of its corrupt counterpart, so decline is treated as structural rather than accidental. (Polybius\'s fullest version actually lists seven phases; the six-stage summary is the standard simplification.)',
    sources: [
      { citation: 'Polybius, Histories, Book VI', type: 'primary' },
      { citation: '"Anacyclosis" / "The Histories (Polybius)" — modern overviews', type: 'modern-scholarship' },
    ],
  },
  {
    title: "Mixed government — Rome's escape from the cycle",
    body: 'Polybius held that Rome cheated the cycle by blending all three pure forms: consuls (monarchic), Senate (aristocratic) and popular assemblies (democratic), each checking the others. Mediated through Cicero and Montesquieu, this theory of balanced, self-restraining power became a direct ancestor of the American doctrine of separation of powers — read by the framers less as antiquarianism than as a working engineering manual against both kingship and mob rule.',
    sources: [
      { citation: 'Polybius, Histories, Book VI (the Roman constitution)', type: 'primary' },
      { citation: 'Cato Institute, "What America\'s Founders Learned from the Greeks and Romans" (2021)', type: 'modern-scholarship' },
    ],
  },
  {
    title: "The founders' deliberate Roman borrowings",
    body: 'The founders dressed their republic in Roman costume: an upper house called the Senate on a "Capitol" hill, and polemics under Roman pen names — Publius, Cato, Brutus, Cincinnatus. Hamilton, Madison and Jay published the 85 Federalist essays as "Publius," after the republic\'s co-founder in Plutarch. These were claims of legitimacy, signalling that the new constitution aimed to equal the Roman Republic. (The authorship behind the Anti-Federalist "Brutus" and "Cato" rests on scholarly attribution, not certainty.)',
    sources: [
      { citation: 'The Federalist Papers (1787–88), as "Publius"; Plutarch, Life of Publicola', type: 'primary' },
      { citation: 'Center for the Study of Federalism, "Who Was Publius?"', type: 'modern-scholarship' },
    ],
  },
  {
    title: 'Cincinnatus and Washington — the citizen who surrenders power',
    body: 'The Roman exemplar attached to Washington was Cincinnatus, who took emergency dictatorial powers, won, then resigned and returned to his plough (Livy 3.26–29). Washington played the part — resigning his commission in 1783 and declining a third term in 1796–97 — and the Society of the Cincinnati took the name. The fear was a Caesar who, given such power, kept it; Washington\'s renunciation was proof a modern republic could produce Roman virtue rather than a Roman tyrant.',
    sources: [
      { citation: 'Livy, Ab Urbe Condita, Book III (Cincinnatus, 3.26–29)', type: 'primary' },
      { citation: "Washington's Mount Vernon, 'Cincinnatus' encyclopedia", type: 'modern-scholarship' },
    ],
  },
  {
    title: 'Fears of a Caesar and a Catiline',
    body: 'Schooled on Sallust, Cicero and Plutarch, the founders treated Caesar (who crossed the Rubicon and made himself dictator for life) and Catiline (the populist conspirator) as warnings about how republics die from within. In Federalist No. 1 Hamilton warned that those who overturned republican liberty mostly "began their career by paying an obsequious court to the people; commencing demagogues, and ending tyrants." Their fear was less the open usurper than the flatterer of the crowd — which is why the Constitution was built to frustrate a charismatic demagogue.',
    sources: [
      { citation: 'Alexander Hamilton, The Federalist No. 1 (27 Oct 1787)', type: 'primary' },
      { citation: 'Sallust, Bellum Catilinae; Cicero, In Catilinam', type: 'primary' },
    ],
  },
  {
    title: "Gibbon's 'Decline and Fall' and the decadence trope",
    body: 'Edward Gibbon\'s six-volume history (1776–88) gave the English-speaking world its master narrative of a civilisation rotting from luxury and lost civic virtue, defence outsourced to mercenaries. Its first volume appeared the year of American independence, and moral decadence-as-engine-of-collapse hardened into a durable cultural trope. Modern historians prize Gibbon\'s prose but largely reject his monocausal moralism, noting he downplayed plague, economic pressure and contingency.',
    sources: [
      { citation: 'Edward Gibbon, The History of the Decline and Fall of the Roman Empire (1776–88)', type: 'primary' },
      { citation: 'Modern overviews of Gibbon\'s reception', type: 'modern-scholarship' },
    ],
  },
  {
    title: 'The mechanism — how a norm-bound republic slid into one-man rule',
    body: 'The Republic did not fall in a single coup. Edward Watts\'s Mortal Republic traces a century-long erosion from the 130s BCE: stabilising customs weaponised for advantage, widening inequality, gridlock, and street violence replacing negotiation. Caesar\'s overt grab provoked assassination; Augustus completed the transition by the opposite method — in 27 BCE he publicly "returned" powers to the Senate, refused the title of king, called himself merely princeps ("first citizen") — while quietly keeping the army, key provinces and the purse. The institutions survived as hollow ornaments of obedience, so many barely registered that the republic was gone.',
    sources: [
      { citation: 'Edward J. Watts, Mortal Republic: How Rome Fell into Tyranny (2018)', type: 'modern-scholarship' },
      { citation: 'Suetonius, Life of Augustus; Cassius Dio, Roman History Book 53 (27 BCE settlement)', type: 'primary' },
    ],
  },
  {
    title: "The historian's caution — why 'are we Rome?' is often lazy",
    body: '"Decline and fall" is as much a modern obsession as an ancient fact. Glen Bowersock notes the West has, since the 18th century, been "obsessed with the fall," so the narrative mirrors the anxieties of whoever invokes it. A "transformation" school (Brown; earlier Pirenne) argues for gradual change; Bury and Ward-Perkins reject monocausal stories (though Ward-Perkins insists a real, violent fall occurred); Beard frames SPQR as a study of endurance, not ruin. The comparison can illuminate mechanisms — norm erosion, the strongman who keeps republican forms while gutting them — but it is lazy when it implies inevitability or ignores the vast gap between an ancient slave-and-conquest state and a modern mass democracy.',
    sources: [
      { citation: 'Glen Bowersock, "The Vanishing Paradigm of the Fall of Rome" (1996)', type: 'modern-scholarship' },
      { citation: 'Mary Beard, SPQR (2015); Cullen Murphy, Are We Rome? (2007)', type: 'modern-scholarship' },
    ],
  },
];

export const FOUNDER_FEARS: FounderFear[] = [
  { who: 'Alexander Hamilton', fear: 'That a flatterer of the people would rise as a demagogue and end as a tyrant — the classic path by which republics lose their liberty.', source: 'The Federalist No. 1 (1787)' },
  { who: 'James Madison', fear: 'That faction and unchecked majority passion could degrade the republic toward mob rule — hence a large compound republic and separated powers.', source: 'The Federalist No. 10 & No. 51 (1787–88)' },
  { who: 'George Washington', fear: 'That a leader handed power for an emergency might refuse to give it back; he answered by modelling himself on Cincinnatus and relinquishing power twice.', source: 'Resignation (1783); Farewell Address (1796)' },
  { who: 'Abraham Lincoln', fear: 'That a future genius "of the family of the lion, or the tribe of the eagle" would seek distinction by tearing down the republic rather than maintaining it.', source: 'Lyceum Address (1838)' },
];

export const ROME_CAUTION =
  'Specialists warn against treating "decline and fall" as a natural law. Edward Watts\'s lesson is the usable one: the Republic died not by inevitability but because Romans stopped defending its norms, one selfish act at a time.';
