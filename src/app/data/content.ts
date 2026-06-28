import { Dimension, QuizItem, TimelineEvent } from './models';

/** Verbatim spine of the Economist column, used in the thesis section. */
export const ARTICLE = {
  title: 'America must hope Donald Trump is not a new Caligula',
  publication: 'The Economist · International · 5 May 2026',
  thesis:
    "The peace of the world is being broken by dunderheads — leaders blind not just to common sense and decency, but to their own people's long-term interests.",
  pullQuotes: [
    'Single chumps can do a lot of damage, but for really world-changing catastrophes, "persistence in error" is key.',
    'Mr Trump, a fan of golden statues, marble monuments and cage-fighting, has yet to appoint a horse to his cabinet.',
    'Americans can only hope that their follies are personal to the Trump era, and can be reversed by an election or two. Enabling decadence would be a far harder error to fix.',
  ],
  closingQuestion:
    "Are Trump's mistakes personal — fixable in an election or two — or systemic, the incompetence of an empire sliding into decadence?",
};

/** Thematic, claim-by-claim parallels drawn directly from the article. */
export const DIMENSIONS: Dimension[] = [
  {
    id: 'gold',
    title: 'Golden statues & the cult of self',
    motif: 'IMAGO · the gilded image',
    premise: 'Power displayed as gold and graven self-image.',
    articleHook:
      'Caligula "renamed temples in his honour, had golden statues of himself erected." Trump is "a fan of golden statues, marble monuments and cage-fighting."',
    caligula: [
      {
        text: 'Renamed temples in his own honour and had golden statues of himself erected, dressing them daily in the clothes he wore.',
        cites: ['suet', 'dio', 'econ'],
        caveat: 'From hostile, post-mortem sources; the daily-dressing detail is Suetonian colour.',
      },
      {
        text: 'Inserted his own head onto statues of the gods and presented himself for worship as a living deity.',
        cites: ['suet', 'philo'],
        caveat:
          'Winterling argues some "divine" gestures were calculated provocations of the Senate, not literal madness.',
      },
    ],
    trump: [
      {
        text: 'A documented taste for gilded interiors, gold-leaf branding and monumental self-imagery in public and private settings.',
        cites: ['econ', 'press'],
      },
      {
        text: 'The article names "golden statues" as a shared motif — image as a primary instrument of rule.',
        cites: ['econ'],
      },
    ],
    parallelStrength: 70,
    contrast:
      'Caligula claimed literal divinity backed by state cult; Trump operates in a secular republic with courts, a free press and term limits.',
  },
  {
    id: 'monuments',
    title: 'Marble monuments & grand building',
    motif: 'MARMOR · building in stone',
    premise: 'The urge to be remembered in stone.',
    articleHook:
      'Caligula "built marble monuments"; Trump shares a fondness for "marble monuments".',
    caligula: [
      {
        text: 'Lavish building: an extension of the imperial palace, work on aqueducts (the Aqua Claudia/Anio Novus), and a temple to the deified Augustus.',
        cites: ['suet', 'barrett'],
      },
      {
        text: 'Built two colossal, richly appointed ceremonial ships on Lake Nemi — engineering marvels with no practical purpose.',
        cites: ['suet', 'barrett'],
        caveat:
          'The Nemi ships were real — recovered in the 1930s — then destroyed by fire in 1944.',
      },
    ],
    trump: [
      {
        text: 'A career built on named towers and resorts in marble and gold; in office, proposals for grand statuary and monumental projects.',
        cites: ['press', 'econ'],
      },
    ],
    parallelStrength: 60,
    contrast:
      'Roman emperors commanded the public treasury for personal monuments as a matter of course; modern budgets face appropriations and oversight.',
  },
  {
    id: 'bloodsport',
    title: 'Blood sport & spectacle',
    motif: 'ARENA · the roar of the crowd',
    premise: 'Mass entertainment as a tool of popularity.',
    articleHook:
      'Caligula "relished attending gladiatorial contests, the gorier the better." Trump is "a fan of … cage-fighting."',
    caligula: [
      {
        text: 'A devoted patron of the games who staged lavish gladiatorial and beast shows and sometimes intervened in the killing.',
        cites: ['suet', 'dio'],
        caveat:
          'The cruellest anecdotes (feeding criminals to beasts to save meat) come from hostile sources.',
      },
      {
        text: 'Many ordinary Romans loved him as a showman — parades, races and ever-gorier spectacle.',
        cites: ['econ', 'beard'],
      },
    ],
    trump: [
      {
        text: 'A prominent, documented enthusiast and ringside presence at UFC/cage-fighting events, with close ties to its leadership.',
        cites: ['econ', 'press'],
      },
    ],
    parallelStrength: 75,
    contrast:
      'UFC is consensual, regulated professional sport; the Roman arena killed coerced combatants and condemned prisoners for entertainment.',
  },
  {
    id: 'elites',
    title: 'Humiliating elites & demanding loyalty',
    motif: 'OBSEQUIUM · enforced flattery',
    premise: 'A court organised around fealty rather than competence.',
    articleHook:
      'Caligula "revelled in humiliating Rome\'s former elites." Trump "appointed unqualified sycophants … where they vie to show their loyalty."',
    caligula: [
      {
        text: 'Forced senators to grovel, reportedly making some run for miles beside his chariot and others wait on him at table like servants.',
        cites: ['suet', 'dio'],
        caveat:
          'Winterling reads these as deliberate, legible humiliations of a class that had handed him absolute power.',
      },
      {
        text: 'The Senate had voted him sweeping powers; the article calls them "the cowardly senators who handed him supreme powers."',
        cites: ['econ', 'winterling'],
      },
    ],
    trump: [
      {
        text: 'The article\'s tightest charge: appointees "vie to show their loyalty while squabbling over trivial perks of office."',
        cites: ['econ'],
      },
    ],
    parallelStrength: 80,
    contrast:
      'Caligula could kill a senator on a whim; US officials retain legal recourse, can resign, testify, and publish memoirs.',
  },
  {
    id: 'horse',
    title: 'The horse in the cabinet',
    motif: 'INCITATUS · contempt for the Senate',
    premise: 'Mocking the institutions of state by elevating the unqualified.',
    articleHook:
      'To show contempt for the ruling classes, Caligula "threatened to make his horse a consul." Trump "has yet to appoint a horse to his cabinet."',
    caligula: [
      {
        text: 'His favourite racehorse Incitatus had a marble stall, ivory manger, purple blankets and a jewelled collar; he allegedly planned to make it consul.',
        cites: ['suet', 'dio'],
        caveat:
          'No reliable evidence Incitatus ever held office. Historians read the story as satire of Caligula\'s contempt for the Senate — "I could appoint a horse over you."',
      },
    ],
    trump: [
      {
        text: "The line is the article's wittiest hedge — no literal horse, but unconventional and loyalty-driven personnel choices.",
        cites: ['econ'],
      },
    ],
    parallelStrength: 45,
    contrast:
      'The horse-consul is almost certainly rhetorical even for Caligula. The article uses it as a joke, not an equivalence.',
  },
  {
    id: 'war',
    title: 'Theatrical wars & foreign-policy folly',
    motif: 'TRIUMPHUS · spectacle over strategy',
    premise: 'Military adventures driven by image rather than interest.',
    articleHook:
      'Trump "has launched a war in the Gulf" and threatened "to grab Greenland." Caligula staged campaigns long on theatre, short on conquest.',
    caligula: [
      {
        text: 'Marched an army to the Channel as if to invade Britain, then — per Suetonius — ordered troops to gather seashells as "spoils of the ocean."',
        cites: ['suet', 'dio'],
        caveat:
          'The seashell story is contested; scholars propose mistranslation (musculi = siege huts) or deliberate mockery of the troops.',
      },
    ],
    trump: [
      {
        text: 'Launched a war in the Gulf and threatened to seize Greenland — "an entry in the annals of self-harm," per the article.',
        cites: ['econ'],
        caveat:
          "The Gulf war is the article's May-2026 scenario; treat as reported within that frame.",
      },
    ],
    parallelStrength: 65,
    contrast:
      "Caligula's frontier theatre cost little blood; a real Gulf war and a contested Strait of Hormuz carry vastly higher human and economic stakes.",
  },
];

/** Reign + presidency timeline. Roman dates are AD. */
export const TIMELINE: TimelineEvent[] = [
  {
    subject: 'caligula',
    date: 'AD 12',
    sortYear: 12,
    title: 'Born Gaius Caesar',
    detail:
      'Nicknamed "Caligula" ("little boot") by his father\'s soldiers as a child on campaign.',
    cites: ['suet', 'beard'],
  },
  {
    subject: 'caligula',
    date: 'AD 37 (Mar)',
    sortYear: 37,
    title: 'Accession at 24',
    detail:
      'Succeeds Tiberius to near-universal joy; early months marked by amnesties and generosity.',
    cites: ['suet', 'barrett'],
  },
  {
    subject: 'caligula',
    date: 'AD 37 (Oct)',
    sortYear: 37.5,
    title: 'Grave illness',
    detail:
      'A serious illness is the traditional (if over-simple) hinge between the "good" and "bad" reign.',
    cites: ['suet', 'winterling'],
  },
  {
    subject: 'caligula',
    date: 'AD 39–40',
    sortYear: 39,
    title: 'Northern campaign',
    detail: 'Theatrical expedition to the Rhine and the Channel; the disputed "seashells" episode.',
    cites: ['suet', 'dio'],
  },
  {
    subject: 'caligula',
    date: 'AD 41 (24 Jan)',
    sortYear: 41,
    title: 'Assassinated',
    detail:
      'Killed by Praetorian officers led by Cassius Chaerea — the first emperor murdered by his own guard. His wife and infant daughter were also killed.',
    cites: ['josephus', 'suet'],
  },
  {
    subject: 'trump',
    date: '2016',
    sortYear: 2016,
    title: 'Elected 45th President',
    detail: 'Wins the electoral college; takes office January 2017.',
    cites: ['record'],
  },
  {
    subject: 'trump',
    date: '2018',
    sortYear: 2018,
    title: 'Military parade sought',
    detail: 'Orders planning for a grand military parade in Washington (later shelved on cost).',
    cites: ['press'],
  },
  {
    subject: 'trump',
    date: '2024',
    sortYear: 2024,
    title: 'Re-elected',
    detail: 'Returns to office for a second term in January 2025.',
    cites: ['record'],
  },
  {
    subject: 'trump',
    date: '2025',
    sortYear: 2025,
    title: 'Greenland & allies',
    detail: 'Renewed push to acquire Greenland; escalating friction with allies; sweeping tariffs.',
    cites: ['econ', 'press'],
  },
  {
    subject: 'trump',
    date: '2025 (20 Jan)',
    sortYear: 2025.05,
    title: 'Day-one withdrawals & Jan-6 pardons',
    detail:
      'Same-day executive orders begin withdrawal from the Paris accord, the WHO and a freeze/review of USAID, an order purporting to end birthright citizenship, and clemency for ~1,500 January 6th defendants.',
    cites: ['record', 'press'],
  },
  {
    subject: 'trump',
    date: '2025 (Feb)',
    sortYear: 2025.12,
    title: 'Quitting UN bodies',
    detail:
      'EO 14199 leaves the UN Human Rights Council, permanently ends funding to UNRWA, and orders a review of UNESCO involvement.',
    cites: ['record', 'press'],
  },
  {
    subject: 'trump',
    date: '2025 (Mar–Apr)',
    sortYear: 2025.27,
    title: 'Election order & the SAVE Act',
    detail:
      'EO 14248 seeks to reshape election administration (much of it soon enjoined); the proof-of-citizenship SAVE Act passes the House 220-208.',
    cites: ['brennan', 'save-act'],
  },
  {
    subject: 'trump',
    date: '2026 (22 Jan)',
    sortYear: 2025.98,
    title: 'WHO exit takes effect',
    detail:
      'After the required one-year notice, US withdrawal from the World Health Organization formally takes effect.',
    cites: ['record'],
  },
  {
    subject: 'trump',
    date: '2026',
    sortYear: 2026,
    title: 'War in the Gulf',
    detail:
      "Per the Economist, launches a US–Israeli campaign against Iran — the article's point of departure.",
    cites: ['econ'],
  },
];

/** "Caligula or Trump?" — every prompt is true of its answer. */
export const QUIZ: QuizItem[] = [
  {
    id: 1,
    prompt: 'Threatened to elevate a racehorse to the consulship to mock the Senate.',
    answer: 'caligula',
    explain:
      'Suetonius and Dio on Incitatus — almost certainly satire of his contempt for the Senate.',
    cites: ['suet', 'dio'],
  },
  {
    id: 2,
    prompt: 'A documented, ringside enthusiast of cage-fighting.',
    answer: 'trump',
    explain: 'The Economist lists "cage-fighting" among the shared tastes.',
    cites: ['econ', 'press'],
  },
  {
    id: 3,
    prompt: 'Renamed temples in his own honour and erected golden statues of himself.',
    answer: 'caligula',
    explain: 'A staple of the hostile tradition (Suetonius, Dio), echoed by the article.',
    cites: ['suet', 'dio', 'econ'],
  },
  {
    id: 4,
    prompt: 'Threatened to take Greenland from a treaty ally.',
    answer: 'trump',
    explain: 'A documented, repeated foreign-policy demand the article cites as self-harm.',
    cites: ['econ', 'press'],
  },
  {
    id: 5,
    prompt: 'Reportedly had soldiers collect seashells as "spoils of the ocean."',
    answer: 'caligula',
    explain: 'Suetonius; the episode is disputed and may be mistranslation or mockery.',
    cites: ['suet'],
  },
  {
    id: 6,
    prompt: 'Surrounded himself with loyal subordinates who vied to flatter him.',
    answer: 'trump',
    explain:
      'The article\'s charge of "unqualified sycophants" — though Caligula\'s court fits too.',
    cites: ['econ'],
  },
];
