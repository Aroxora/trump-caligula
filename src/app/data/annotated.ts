/**
 * The column, read closely. We quote the key beats of the argument as short
 * excerpts for commentary and criticism (with a link to the original), and
 * annotate each with the context, the reference being made, and where to dig
 * deeper on this site.
 */
export interface Passage {
  /** A short excerpt from the column (quoted for commentary). */
  quote: string;
  /** What's going on here — reference unpacked, fact checked. */
  note: string;
  /** Optional in-site anchor to explore further. */
  jump?: { id: string; label: string };
  cites: string[];
}

export const ARTICLE_URL =
  'https://www.economist.com/international/2026/05/05/america-must-hope-donald-trump-is-not-a-new-caligula';

export const PASSAGES: Passage[] = [
  {
    quote:
      'The peace of the world is being broken by dunderheads … rulers and regimes blind not just to common sense and decency, but to their own people\'s long-term interests.',
    note: 'The column\'s thesis and the seed of our index\'s first axis — "self-harm". Folly here is specifically self-defeating: damage a leader does to their own side.',
    jump: { id: 'index', label: 'See the self-harm axis' },
    cites: ['econ'],
  },
  {
    quote:
      "Vladimir Putin's war to erase Ukraine … a trumped-up conflict that Russian generals promised would end in a few days, now in its fifth, blood-drenched year.",
    note: 'The first of the global backdrop cases. "Persistence in error" past every off-ramp is exactly Tuchman\'s marker of system-level folly, not a one-off blunder.',
    jump: { id: 'index', label: 'Ukraine in the index' },
    cites: ['econ', 'tuchman'],
  },
  {
    quote:
      'Binyamin Netanyahu\'s government has pursued a surely doomed war aim: the complete pacification of Gaza … through siege and the pitiless application of armed force.',
    note: 'A war aim the column judges unachievable by the means chosen — the gap between goal and instrument is where folly lives. "Israel\'s global standing has collapsed" is the self-harm.',
    cites: ['econ'],
  },
  {
    quote:
      'assembling almost all elements needed for a nuclear bomb, without building a device to deter an attack, was not the foolproof strategy they supposed.',
    note: "Iran's worst-of-both-worlds: all the provocation of a weapons programme, none of the deterrent. The column then pivots from the world's autocracies to a democracy.",
    cites: ['econ'],
  },
  {
    quote:
      'Then comes President Donald Trump. His threats to grab Greenland … have already earned him an entry in the annals of self-harm. Now he has launched a war in the Gulf.',
    note: 'The hinge of the piece. Note the Greenland threat is documented; the 2026 Gulf war is the column\'s own framing — we grade it "reported" within that frame, never as settled fact.',
    jump: { id: 'index', label: 'Trump\'s follies, graded' },
    cites: ['econ'],
  },
  {
    quote:
      'this columnist turned to … the late Barbara Tuchman. Published in 1984, her book "The March of Folly: From Troy to Vietnam" considers self-destructive decisions from ancient times to the Nixon era.',
    note: 'The intellectual spine. Tuchman sets a high bar for "folly" — three tests we turn into the index\'s scoring axes.',
    jump: { id: 'tuchman', label: "Tuchman's framework & cases" },
    cites: ['econ', 'tuchman'],
  },
  {
    quote:
      'the 16th-century Aztec emperor Montezuma … passively succumbed to a few hundred Spanish soldiers, even after his advisers … realised the invaders were … human invaders, and not avenging gods.',
    note: 'Tuchman\'s example of folly you can pin on one mind. The column uses it to set up the contrast with system-level folly that no single election can undo.',
    cites: ['econ', 'tuchman'],
  },
  {
    quote:
      'George III and his ministers "made rebels" of Americans … The Earl of Sandwich … assured the House of Lords that Americans would not fight, being "raw undisciplined cowardly men".',
    note: 'One of Tuchman\'s four book-length case studies: Britain losing America through "snobbery, arrogance and ignorance" — a "folly of the system", not one king.',
    jump: { id: 'tuchman', label: 'The loss of America' },
    cites: ['econ', 'tuchman'],
  },
  {
    quote:
      'Single chumps can do a lot of damage, but for really world-changing catastrophes, "persistence in error" is key. … America\'s Vietnam war ensnared three successive presidents.',
    note: 'The crux. The danger isn\'t a bad ruler; it\'s a bad policy a whole class keeps choosing. This is the "systemic" axis — weighted highest by default in our index.',
    jump: { id: 'index', label: 'Re-weight the systemic axis' },
    cites: ['econ', 'tuchman'],
  },
  {
    quote:
      'They feared such tyrannical emperors as Caligula, who renamed temples in his honour, had golden statues of himself erected, and revelled in humiliating Rome\'s former elites …',
    note: 'The payoff. Every clause maps to a documented Caligula act (via hostile, post-mortem sources) and a present-day echo. We lay each one side by side — with its caveats.',
    jump: { id: 'parallels', label: 'The parallels, weighed' },
    cites: ['econ', 'suet', 'dio'],
  },
  {
    quote:
      'Mr Trump, a fan of golden statues, marble monuments and cage-fighting, has yet to appoint a horse to his cabinet.',
    note: 'The column\'s wittiest line. The horse — Incitatus — is almost certainly satire even for Caligula; the joke is the point, not an equivalence.',
    jump: { id: 'parallels', label: 'The horse in the cabinet' },
    cites: ['econ', 'suet'],
  },
  {
    quote:
      'Americans can only hope that their follies are personal to the Trump era, and can be reversed by an election or two. Enabling decadence would be a far harder error to fix.',
    note: 'The closing question, and the whole reason for the index: personal folly fades with its author; systemic decadence does not. Our aggregate gauge is an attempt to answer it.',
    jump: { id: 'index', label: 'Read the aggregate verdict' },
    cites: ['econ'],
  },
];
