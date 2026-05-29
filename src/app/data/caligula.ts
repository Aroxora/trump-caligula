import { InlineSource } from './models';

export interface CaligulaFact {
  statement: string;
  caveat?: string;
  sources: InlineSource[];
}
export interface CaligulaTheme {
  id: string;
  title: string;
  summary: string;
  facts: CaligulaFact[];
  modernReinterpretation: string;
  parallelToTrump: string;
}

export const CALIGULA_THEMES: CaligulaTheme[] = [
  {
    id: 'early-reign-popularity',
    title: 'Early reign & popularity (AD 37)',
    summary:
      'Gaius succeeded the reclusive, unpopular Tiberius in March AD 37 amid extraordinary public rejoicing, presenting as a clement, generous restorer of the principate — paying bequests, recalling exiles, ending treason trials, restoring elections, staging lavish games. The contrast between this opening and the later reign is the engine of the whole "mad tyrant" narrative.',
    facts: [
      { statement: 'Greeted with near-universal joy; Suetonius reports that more than 160,000 victims were "said to have been" sacrificed in roughly three months of celebration, calling him at first "the star".', caveat: 'Suetonius wrote c. AD 121, two generations later, and hedges the figure as "said to have been" — a round rhetorical number, not a record.', sources: [{ citation: 'Suetonius, Life of Caligula 13–14', type: 'primary-hostile' }] },
      { statement: 'He honoured Tiberius\' will, recalled exiles, curtailed the maiestas (treason) trials, burned (or claimed to burn) incriminating papers, and restored popular election of magistrates.', sources: [{ citation: 'Suetonius, Caligula 15–16; Cassius Dio 59.3–9', type: 'primary-hostile' }] },
      { statement: 'Modern scholarship treats the popularity as genuine: a 24-year-old great-grandson of Augustus and son of the beloved Germanicus carried immense dynastic goodwill after Tiberius\' grim years on Capri.', sources: [{ citation: 'A. A. Barrett, Caligula (2015); A. Winterling, Caligula (2011)', type: 'modern-scholarship' }] },
    ],
    modernReinterpretation: 'Barrett and Winterling read the honeymoon not as a "good Caligula" later corrupted, but as a normal accession programme inflated by senatorial relief; the sharp before/after structure is partly an artefact of sources needing to explain a later breakdown with the elite.',
    parallelToTrump: 'Like a newly inaugurated leader riding supporter euphoria and signalling magnanimity (pardons, reversals) before relations sour. Where it breaks: a hereditary Julio-Claudian heir acclaimed by Senate and army is not an elected official, and Roman "popularity" rested on donatives and games, not votes.',
  },
  {
    id: 'ad37-illness',
    title: 'The AD 37 illness as a (contested) turning point',
    summary:
      'About seven months in, Gaius fell seriously ill. The ancient tradition treats his recovery as the pivot at which a benign prince "changed" into a tyrant; modern historians treat it as a narrative device rather than a demonstrable medical or psychological break.',
    facts: [
      { statement: 'He fell gravely ill in autumn AD 37; the populace reacted with conspicuous distress (vigils, vows to die in his stead).', caveat: 'Philo is the only roughly contemporary witness (he led the Alexandrian embassy c. AD 40) — hostile, but not post-mortem senatorial reconstruction.', sources: [{ citation: 'Suetonius, Caligula 14; Dio 59.8; Philo, Embassy to Gaius 14–21', type: 'primary-hostile' }] },
      { statement: 'No reliable diagnosis is recoverable; speculation (encephalitis, epilepsy, hyperthyroidism, lead poisoning, a breakdown) is unverifiable.', sources: [{ citation: 'A. A. Barrett, Caligula (2015)', type: 'modern-scholarship' }] },
    ],
    modernReinterpretation: 'Barrett and Winterling reject the literal "illness drove him mad" thesis: the breakdown with the elite was political and gradual — conspiracies, the costs of one-man rule, contempt for senatorial "doublespeak" — not a single medical event.',
    parallelToTrump: 'The idea of a single "turning point" that "changed" a leader is a storytelling temptation in both cases, flattening a messy trajectory into one pivot. Where it breaks: there is no comparable documented illness narrative for Trump.',
  },
  {
    id: 'fiscal-crisis',
    title: 'Fiscal crisis & arbitrary taxation',
    summary:
      'Gaius is said to have drained the inherited treasury through donatives, games and building, then raised money by novel taxes, auctions, forced legacies and confiscations. The lurid "greed-driven judicial murder" picture is a senatorial trope; scholars see real fiscal strain whose scale was exaggerated by the propertied class that bore it.',
    facts: [
      { statement: 'Suetonius claims he exhausted Tiberius\' surplus (he implies ~2.7bn sesterces; Dio gives ~3.3bn) within about a year, then resorted to extortionate means.', caveat: 'The surplus figure and speed are unverifiable and serve the morality tale; the two sources don\'t agree, and Claudius is not recorded inheriting an empty treasury.', sources: [{ citation: 'Suetonius, Caligula 37; Dio 59.2, 59.22', type: 'primary-hostile' }] },
      { statement: 'He levied unusual taxes (on lawsuits, porters\' wages, prostitution, food), auctioned imperial goods, and reportedly exploited treason charges so the fisc could seize estates.', caveat: 'The "killed chiefly to seize property" claim is the standard avarice-plus-cruelty indictment applied to many "bad" emperors and cannot be quantified.', sources: [{ citation: 'Suetonius, Caligula 40–41; Dio 59.28', type: 'primary-hostile' }] },
    ],
    modernReinterpretation: 'Scholars accept real expenditure-driven strain and innovative taxation but treat the confiscation-for-greed narrative as elite grievance literature; the "crisis" was at least as much one for the propertied who paid.',
    parallelToTrump: 'The shared theme is leaning on aggressive, contested revenue and cost levers (e.g. tariffs as money-raiser and punishment) whose burden falls unevenly and is loudly resented. Where it breaks: Rome could literally seize a convicted man\'s estate through capital trials; modern fiscal disputes run through courts, Congress and markets.',
  },
  {
    id: 'building-nemi',
    title: 'The building programme & the Nemi ships',
    summary:
      'Beyond the caricature, Gaius launched substantial public works — the great Aqua Claudia and Anio Novus aqueducts, roads, harbours, temples — and two enormous, luxuriously fitted ceremonial ships on Lake Nemi. The Nemi ships, recovered under Mussolini in 1929–32 and destroyed by fire in 1944, are the most tangible evidence of his taste for monumental display.',
    facts: [
      { statement: 'He began the Aqua Claudia and Anio Novus aqueducts in AD 38; completed under Claudius (dedicated AD 52), they roughly doubled Rome\'s water supply.', caveat: 'Even hostile Suetonius lists genuine public works — a useful check on the "pure waster" image; the dating is archaeologically secure.', sources: [{ citation: 'Suetonius, Caligula 21; Pliny, NH 36.122; Frontinus, De Aquaeductu 13', type: 'primary' }] },
      { statement: 'Two massive ships (~70 and 73 m) were built on Lake Nemi as floating palace/temple-barges for the sanctuary of Diana — marble, mosaics, heated baths, lead pipes stamped with his name.', caveat: 'Dimensions match the excavated hulls; their precise function (pleasure barge vs cult vessel) remains debated.', sources: [{ citation: 'Nemi archaeological record; G. Ucelli, Le navi di Nemi (1940)', type: 'modern-scholarship' }] },
      { statement: 'The famous pontoon bridge across the Bay of Baiae — which he supposedly rode across in triumph — is reported by hostile sources and read as a costly stunt, not infrastructure.', caveat: 'Barrett suspects a related Palatine bridge may be fantasy or a misread joke.', sources: [{ citation: 'Suetonius, Caligula 19, 22; Dio 59.17', type: 'primary-hostile' }] },
    ],
    modernReinterpretation: 'Gaius\' building record is real and in places useful (aqueducts, harbour works); the Nemi ships show technological ambition. The tradition foregrounds the most stunt-like projects to dramatise waste while underplaying durable infrastructure.',
    parallelToTrump: 'Both fuse public works with monumental personal display; prestige projects double as self-celebration. Where it breaks: aqueducts that watered Rome for centuries are a different order from cosmetic projects, and the Nemi ships were ceremonial, not a fielded capability.',
  },
  {
    id: 'self-deification',
    title: 'Self-deification, temples & golden statues',
    summary:
      'Gaius is portrayed demanding worship as a living god — appearing dressed as deities, planning a temple to himself with a gold statue dressed daily to match his clothing, and ordering a colossal statue of himself in the Temple at Jerusalem. The Jerusalem episode is best-evidenced (contemporaries describe it); the theatrical "dressed as Jupiter" anecdotes are hostile and likely exaggerate normal imperial-cult practice.',
    facts: [
      { statement: 'Suetonius and Dio say he set himself up for worship, kept a life-size gold statue dressed each day to match his own clothes, and appeared costumed as Jupiter, Neptune, Hercules and Venus.', caveat: 'Post-mortem hostile reports; living-emperor cult was already normal in the east, so this may dramatise ordinary honours plus theatrical display.', sources: [{ citation: 'Suetonius, Caligula 22, 52; Dio 59.26–28', type: 'primary-hostile' }] },
      { statement: 'In AD 40 he ordered a colossal statue of himself (as Jupiter) erected in the Temple at Jerusalem; the governor Petronius delayed, the population resisted en masse, and the plan lapsed when Gaius died.', caveat: 'Philo and Josephus are contemporary or near-contemporary — the most securely attested "deification" act, though both write for the Jewish side.', sources: [{ citation: 'Philo, Embassy to Gaius 197–338; Josephus, Antiquities 18.261–309', type: 'primary' }] },
      { statement: 'He consecrated his deceased sister Drusilla as "Diva Drusilla" in AD 38 — the first Roman woman so deified.', caveat: 'The Arval Brethren inscription independently dates this (23 Sept AD 38). The separate rumour of incest is uncorroborated "bad emperor" slander and should not be stated as fact.', sources: [{ citation: 'Suetonius, Caligula 24; Dio 59.11; Acta Fratrum Arvalium', type: 'primary' }] },
    ],
    modernReinterpretation: 'Scholars read most "living god" anecdotes as hostile dramatisation of ordinary imperial-cult practice plus provocative theatre; the Jerusalem statue, however, is treated as a real and dangerous policy that nearly triggered revolt — genuine autocratic overreach, not myth.',
    parallelToTrump: 'Both invite a cult-of-personality reading expressed through gilded imagery. Where it breaks: Trump claims no divinity and seeks no temple cult; Roman ruler-worship was a political-religious institution with no modern equivalent, so "self-deification" simply does not transfer.',
  },
  {
    id: 'humiliation-senate',
    title: "Humiliating the Senate — Winterling's 'calculated humiliation'",
    summary:
      'The tradition records Gaius systematically degrading the aristocracy — making senators run beside his chariot, kiss his foot, wait on him at dinner, and famously (allegedly) planning to make his horse Incitatus consul. Winterling reinterprets these as deliberate, rational acts of "calculated humiliation" exposing the hypocrisy of the principate\'s pretence of senatorial dignity — not the random acts of a lunatic.',
    facts: [
      { statement: 'He is said to have made consulars trot beside his chariot or wait at table in servile dress, required obeisance and foot-kissing, and treated the Senate\'s flattery with open contempt.', caveat: 'These come from the very class that felt the insult and later wrote the history; degree and frequency are likely sharpened by wounded dignity.', sources: [{ citation: 'Suetonius, Caligula 26; Dio 59.27', type: 'primary-hostile' }] },
      { statement: 'He reportedly proposed or threatened to make his racehorse Incitatus a consul, lavishing a marble stable, ivory manger and household on it.', caveat: 'Suetonius says he "is said" to have intended it; Dio frames it as mockery. Incitatus was never actually made consul — scholars read it as a deliberate insult or joke at the Senate\'s expense.', sources: [{ citation: 'Suetonius, Caligula 55; Dio 59.14', type: 'primary-hostile' }] },
      { statement: 'Winterling argues these acts were intelligible and intentional: a calculated programme to puncture the "doublespeak" by which senators flattered an autocrat while pretending the Republic survived.', caveat: 'Beard finds the scheme illuminating but over-tidy, noting Winterling sometimes bends "unpromising or conflicting evidence to fit".', sources: [{ citation: 'A. Winterling, Caligula (2011); Mary Beard, "It was satire", LRB 34.8 (2012)', type: 'modern-scholarship' }] },
    ],
    modernReinterpretation: 'Winterling\'s "sane, calculating Caligula" is the influential modern corrective: the humiliations read as a coherent (if brutal) exposure of the fiction of senatorial partnership, with "madness" being the losers\' framing. Beard cautions the satire thesis is partly unfalsifiable.',
    parallelToTrump: 'Both can be read as deliberately humiliating an elite and forcing displays of loyalty — Winterling\'s "doublespeak" theme rhyming with modern demands for fealty. Where it breaks: a Roman emperor could command a senator\'s body and life directly; modern norm-breaking still operates within elections, courts and a free press that can resist and reply.',
  },
  {
    id: 'games-cruelty',
    title: 'Games, spectacle & cruelty',
    summary:
      'Gaius was a lavish impresario of games, races and gladiatorial shows, which built popularity with the urban plebs. The same tradition packs his reign with arena cruelty and a taste for watching deaths, capped by the notorious line wishing the Roman people had a single neck. Vivid — but overwhelmingly from a hostile, post-mortem source.',
    facts: [
      { statement: 'He staged frequent, extravagant entertainments — races, beast hunts, gladiatorial contests, all-night festivals — and was a fanatical partisan of the "Green" racing faction.', caveat: 'Spectacle on this scale was expected of a popular emperor; the tradition records it as both largesse and excess depending on rhetorical purpose.', sources: [{ citation: 'Suetonius, Caligula 18, 54–55; Dio 59.13–14', type: 'primary-hostile' }] },
      { statement: 'Suetonius attributes signature cruelties: feeding spectators to the beasts when condemned criminals ran short, and having a heckler\'s tongue cut out.', caveat: 'Isolated shocking anecdotes from a single hostile biographer — unverifiable, exactly the detail used to brand an emperor a monster. Read as contested rhetoric, not fact.', sources: [{ citation: 'Suetonius, Caligula 27, 35', type: 'primary-hostile' }] },
      { statement: 'He is credited with wishing "that the Roman people had but a single neck".', caveat: 'A rhetorical bon mot reported by Suetonius and Dio; Seneca attests such sayings\' currency. Not a documented threat or carried-out act.', sources: [{ citation: 'Suetonius, Caligula 30; Seneca, De Ira 3.19', type: 'primary-hostile' }] },
    ],
    modernReinterpretation: 'Scholars accept Gaius was an enthusiastic and popular provider of games (a legitimate political tool) while treating the catalogue of arena atrocities as the most rhetorically loaded, least verifiable layer — memorable single anecdotes, not statistics.',
    parallelToTrump: 'Both grasp spectacle as a political instrument for bonding with a mass audience. Where it breaks: Roman games involved real, state-sanctioned killing of humans for entertainment; modern political spectacle, however theatrical, does not.',
  },
  {
    id: 'seashells',
    title: "The northern campaign & the 'seashells'",
    summary:
      'In AD 39–40 Gaius mounted a large northern expedition toward the German frontier and the Channel, evidently preparing to invade Britain. On the shore of the Ocean he supposedly drew up his army and ordered the men to gather seashells as "spoils of the Ocean" — the most ridiculed act of his reign, which modern scholars explain or doubt rather than accept as simple insanity.',
    facts: [
      { statement: 'He led a real campaign in AD 39–40, raising troops and reaching the Channel coast, with an invasion of Britain apparently planned after the British prince Adminius submitted.', caveat: 'The campaign is historical; the sources frame its operations as farcical, but real preparations (and a lighthouse at Boulogne) underlie the mockery.', sources: [{ citation: 'Suetonius, Caligula 43–46; Dio 59.21–25', type: 'primary-hostile' }] },
      { statement: 'Suetonius reports that, drawn up on the shore, he ordered soldiers to fill their helmets with seashells as "spoils of the Ocean owed to the Capitol".', caveat: 'The locus classicus of his "madness" — both reporters post-mortem and hostile; it reads as deliberately ridiculous in their telling.', sources: [{ citation: 'Suetonius, Caligula 46; Dio 59.25', type: 'primary-hostile' }] },
      { statement: 'Modern readings diverge: "conchae" may have meant captured British boats, or "musculi" (siege-huts), or a punitive humiliation of mutinous troops, or a symbolic claim of conquest over Ocean.', caveat: 'No single solution is proven; the point is that the "mad emperor declares war on the sea" reading is the least likely once the hostile framing and Latin ambiguity are taken seriously.', sources: [{ citation: 'David Woods, "Caligula\'s Seashells", Greece & Rome 47.1 (2000)', type: 'modern-scholarship' }] },
    ],
    modernReinterpretation: 'A textbook case of how a hostile, ambiguous source can manufacture an emblem of insanity; the underlying reality was a real (if aborted) Channel operation, with the shells variously a mistranslation, a symbolic gesture, or a disciplinary humiliation.',
    parallelToTrump: 'Both feature theatrical military display where the gesture outruns the strategic substance. Where it breaks: the seashells story is a contested, hostile anecdote of uncertain meaning — historians themselves don\'t take it at face value.',
  },
  {
    id: 'assassination',
    title: 'Assassination & the aftermath',
    summary:
      'On 24 January AD 41 Gaius was murdered at the Palatine Games by a conspiracy of Praetorian officers, senators and courtiers led by the tribune Cassius Chaerea — whom Gaius had mocked for an effeminate voice and forced to use humiliating watchwords. His wife and infant daughter were killed too; the Senate briefly toyed with restoring the Republic, but the Praetorians found and proclaimed his uncle Claudius.',
    facts: [
      { statement: 'He was assassinated 24 Jan AD 41 in a Palatine corridor by tribunes Cassius Chaerea and Cornelius Sabinus — Chaerea resented being mocked and made to use obscene watchwords.', caveat: 'Josephus gives the fullest, near-contemporary account and is comparatively reliable on the mechanics, though he idealises Chaerea as a republican tyrannicide.', sources: [{ citation: 'Josephus, Antiquities 19.1–273; Suetonius, Caligula 56–58', type: 'primary' }] },
      { statement: 'His wife Caesonia and daughter Julia Drusilla were murdered in the immediate aftermath, ending his direct line.', sources: [{ citation: 'Josephus, Antiquities 19.190–200; Suetonius, Caligula 59', type: 'primary' }] },
      { statement: 'Some senators debated restoring the Republic, but the Praetorian Guard found Claudius in the palace and proclaimed him; Claudius then declined a formal damnatio memoriae though many portraits were recut.', caveat: 'The "Claudius behind a curtain" detail may be embellished; the substance — Praetorian initiative trumping senatorial deliberation — is widely accepted.', sources: [{ citation: 'Josephus, Antiquities 19.158–273; E. Varner, Mutilation and Transformation (2004)', type: 'modern-scholarship' }] },
    ],
    modernReinterpretation: 'Historians read the murder as personal grievance (Chaerea) fused with elite resentment and self-preservation, not principled republicanism; the swift elevation of Claudius shows the principate was now structurally irreversible.',
    parallelToTrump: 'The episode dramatises how humiliating subordinates and the security apparatus can be lethally destabilising. Where it breaks: there is no remotely comparable modern fact pattern — the analogy is purely thematic about the perils of alienating those closest to power.',
  },
  {
    id: 'historiography',
    title: 'The historiography problem',
    summary:
      'Almost everything we "know" about Gaius comes from authors writing after his fall and hostile to him: Seneca (a contemporary victim), Philo and Josephus (aggrieved parties), and especially Suetonius (c. AD 121) and Cassius Dio (early 3rd c.). Tacitus\' account is lost. The record was shaped by the senatorial class that survived him and had every incentive to blacken his memory.',
    facts: [
      { statement: 'No favourable contemporary narrative survives; Tacitus\' Annals on the reign are lost, leaving the hostile Suetonius and Dio as the main connected narratives.', sources: [{ citation: 'M. Beard, "It was satire", LRB 34.8 (2012); A. A. Barrett, Caligula (2015)', type: 'modern-scholarship' }] },
      { statement: 'As Beard puts it, when regimes changed the elite "made every effort to reposition themselves… by excoriating the emperor who had been their friend — and that writing is the Roman imperial history we have inherited."', sources: [{ citation: 'Mary Beard, "It was satire", LRB 34.8 (2012)', type: 'modern-scholarship' }] },
      { statement: 'Modern scholars accordingly grade most sensational stories as primary-hostile and post-mortem, recover the rational logic behind "mad" acts, and warn against both naive belief and over-tidy revisionism.', sources: [{ citation: 'Winterling (2011); Barrett (2015); Beard (2012)', type: 'modern-scholarship' }] },
    ],
    modernReinterpretation: 'The consensus is methodological: "Caligula the mad monster" is at least partly victors\' history written by the surviving aristocracy, so claims must be source-graded and lurid anecdotes treated as contested rhetoric — without swinging to an equally unfounded rehabilitation.',
    parallelToTrump: 'Both subjects are mediated by intensely partisan accounts, so a reader must weigh the source\'s interest before accepting a claim. Where it breaks: Trump is documented in real time by abundant, ideologically varied, on-the-record evidence — the opposite of Gaius\' thin, late, one-sided, post-mortem record. The epistemic situations are nearly mirror images.',
  },
];
