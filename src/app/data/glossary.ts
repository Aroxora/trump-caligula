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
  { term: 'SPQR (Senatus Populusque Romanus)', definition: 'Latin for "The Senate and People of Rome", the official emblem and shorthand for the Roman state and its claimed source of sovereign authority.', relevance: 'It encodes the republican fiction the emperors maintained even at their most autocratic — the gap between Rome\'s stated ideals and the reality of one-man rule.' },
  { term: 'Senate', definition: 'The council of Rome\'s leading men, originally a body of patrician elders that governed the Republic and later survived as a deliberative organ under the emperors.', relevance: 'Its humiliation is a recurring measure of imperial folly: contempt for the Senate signals the personalisation of power.' },
  { term: 'Consul', definition: 'The highest elected magistracy of the Republic, held by two men annually who shared supreme civil and military authority; under the emperors it became largely honorific.', relevance: 'The jest that Caligula would make his horse consul is the archetypal image of an institution drained of meaning to flatter a ruler\'s whim.' },
  { term: 'Princeps', definition: 'Meaning "first citizen", the title Augustus adopted to present his rule as primacy within the Republic rather than monarchy — the root of the word "prince".', relevance: 'The principate\'s polite fiction — autocracy dressed as restored republicanism — frames how far each emperor dropped the mask.' },
  { term: 'Imperium', definition: 'The legitimate power of command held by senior magistrates and emperors, encompassing military authority and the right to enforce law.', relevance: 'Folly is measured partly by the distance between the imperium granted and the arbitrary will actually exercised.' },
  { term: 'Praetorian Guard', definition: 'The elite military unit stationed in and around Rome to protect the emperor — the only standing armed force permitted in the capital.', relevance: 'As both shield and threat, the Guard made and unmade emperors; Caligula\'s assassination by his own praetorians shows how cruelty turns protectors into executioners.' },
  { term: 'Equestrian / eques', definition: 'A member of the wealthy non-senatorial elite, the "knights", who staffed commerce, finance, and key administrative and military posts.', relevance: 'A counterweight and talent pool whose alienation by a capricious ruler signals broad mismanagement of the governing class.' },
  { term: 'Denarius', definition: 'The standard silver coin of Rome and a primary instrument of imperial propaganda, broadcasting the emperor\'s image and slogans across the empire.', relevance: 'Fiscal recklessness — lavish spending, debasement, or confiscations to refill an emptied treasury — is a traceable form of self-defeating misrule.' },
  { term: 'Triumph', definition: 'The lavish ceremonial procession granted to a victorious general — the supreme public honour — increasingly monopolised by the imperial family.', relevance: 'Caligula\'s staged or hollow military spectacles parody the triumph and expose grandiosity untethered from real achievement.' },
  { term: 'Damnatio memoriae', definition: 'The formal condemnation of a person\'s memory after death, erasing their name and image from monuments, coins, and records.', relevance: 'Rome\'s verdict on failed rule — a society\'s retroactive judgment that a legacy deserves obliteration rather than commemoration.' },
  { term: 'Deification / apotheosis', definition: 'The elevation of an emperor (usually posthumously) to the status of a god through formal consecration by the Senate.', relevance: 'Caligula\'s demand for worship while still living inverts the ritual — grandiosity crossing from honour into delusion.' },
  { term: 'Anacyclosis', definition: 'Polybius\'s theory that governments cycle through predictable phases — monarchy, tyranny, aristocracy, oligarchy, democracy, mob rule — each decaying into the next.', relevance: 'It frames any single ruler\'s folly as part of a recurring pattern of institutional decay rather than mere personal vice.' },
  { term: 'Incitatus', definition: 'Caligula\'s favourite racehorse, reportedly given a marble stable, an ivory manger, and — per Suetonius — a planned consulship.', relevance: 'The enduring symbol of arbitrary power mocking serious office — the central metaphor against which modern follies are measured.' },
  { term: 'Maiestas', definition: 'The law of treason against the majesty of the Roman state, expanded to punish words, gestures, or perceived disrespect as capital crimes.', relevance: 'The weaponisation of treason law to silence critics and enrich the treasury is a hallmark of paranoid, self-harming rule.' },
  { term: 'Proscription', definition: 'A published list of citizens declared outlaws whose property was confiscated and who could be killed with impunity.', relevance: 'The point where governance becomes predation on one\'s own elite — a counterproductive purge that hollows out the state.' },
  { term: 'Tribunician power (tribunicia potestas)', definition: 'The authority of the plebeian tribunes — including veto and personal inviolability — which emperors held permanently to claim they protected the people.', relevance: 'Shows how rulers cloaked autocratic power in the language of popular protection.' },
];

export const PRESETS: WeightPreset[] = [
  { name: 'Tuchman purist', description: 'Folly is institutional: it counts only when a leader pursues a course against available alternatives that damages the wider system.', weights: { selfHarm: 0.8, counterproductive: 1.2, alternative: 1.6, systemic: 3, caligula: 0.6 } },
  { name: 'The skeptic', description: 'Demands hard proof that an action backfired and that a better path was plainly visible at the time — discounting hindsight and theatrics.', weights: { selfHarm: 1, counterproductive: 3, alternative: 2.6, systemic: 1, caligula: 0.5 } },
  { name: 'The historian', description: 'Weighs every axis evenly while staying alert to genuine Caligula-style resonances — the parallel as evidence to assess, not embrace.', weights: { selfHarm: 1.4, counterproductive: 1.4, alternative: 1.4, systemic: 1.6, caligula: 1.4 } },
  { name: 'The critic', description: 'Reads folly through the Caligula lens — self-inflicted damage and the grandiose, capricious flourishes that echo the mad-emperor archetype.', weights: { selfHarm: 2.6, counterproductive: 1.2, alternative: 0.8, systemic: 1, caligula: 3 } },
  { name: 'The defender', description: 'Distrusts the Caligula analogy as rhetorical excess; scores only folly that demonstrably harms the leader\'s own interests and provably backfired.', weights: { selfHarm: 3, counterproductive: 2.6, alternative: 1.2, systemic: 1, caligula: 0.2 } },
];
