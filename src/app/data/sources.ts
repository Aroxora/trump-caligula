import { Citation } from './models';

/**
 * Bibliography. Ancient evidence for Caligula is overwhelmingly hostile and
 * post-mortem; modern scholarship (Winterling, Barrett, Beard) re-reads it.
 * The site surfaces these reliability grades everywhere a claim is made.
 */
export const SOURCES: Citation[] = [
  {
    key: 'econ',
    label: 'The Economist (2026)',
    reference:
      'The Economist, "America must hope Donald Trump is not a new Caligula", International section, 5 May 2026.',
    url: 'https://www.economist.com/international/2026/05/05/america-must-hope-donald-trump-is-not-a-new-caligula',
    reliability: 'journalism',
  },
  {
    key: 'tuchman',
    label: 'Tuchman, March of Folly',
    reference:
      'Barbara W. Tuchman, "The March of Folly: From Troy to Vietnam" (Alfred A. Knopf, 1984).',
    reliability: 'modern-scholarship',
  },
  {
    key: 'suet',
    label: 'Suetonius, Caligula',
    reference:
      'Suetonius, "The Lives of the Twelve Caesars: Gaius (Caligula)", c. 121 AD. Written ~80 years after Caligula\'s death.',
    reliability: 'primary-hostile',
  },
  {
    key: 'dio',
    label: 'Cassius Dio, Roman History 59',
    reference: 'Cassius Dio, "Roman History", Book 59, c. 211–233 AD.',
    reliability: 'primary-hostile',
  },
  {
    key: 'philo',
    label: 'Philo, Embassy to Gaius',
    reference:
      'Philo of Alexandria, "On the Embassy to Gaius (Legatio ad Gaium)", c. 41 AD. A near-contemporary but partisan account.',
    reliability: 'primary-hostile',
  },
  {
    key: 'josephus',
    label: 'Josephus, Antiquities 19',
    reference: 'Flavius Josephus, "Jewish Antiquities", Book 19, c. 94 AD (the fullest assassination narrative).',
    reliability: 'primary',
  },
  {
    key: 'seneca',
    label: 'Seneca',
    reference: 'Seneca the Younger, "De Ira" and "De Constantia", c. 41–52 AD (a contemporary who loathed Caligula).',
    reliability: 'primary-hostile',
  },
  {
    key: 'winterling',
    label: 'Winterling, Caligula',
    reference:
      'Aloys Winterling, "Caligula: A Biography" (2003; English trans. Univ. of California Press, 2011). Argues many "mad" acts were calculated humiliations of the elite.',
    reliability: 'modern-scholarship',
  },
  {
    key: 'barrett',
    label: 'Barrett, Caligula',
    reference: 'Anthony A. Barrett, "Caligula: The Abuse of Power" (Yale Univ. Press, rev. 2015).',
    reliability: 'modern-scholarship',
  },
  {
    key: 'beard',
    label: 'Beard, SPQR',
    reference: 'Mary Beard, "SPQR: A History of Ancient Rome" (Profile/Liveright, 2015).',
    reliability: 'modern-scholarship',
  },
  {
    key: 'press',
    label: 'Contemporary reporting (2017–2026)',
    reference:
      'Aggregated mainstream reporting (AP, Reuters, NYT, WaPo, BBC) on the second Trump administration, 2017–2026.',
    reliability: 'journalism',
  },
  {
    key: 'record',
    label: 'Public record / official statements',
    reference: 'Executive orders, official White House statements, and on-camera remarks.',
    reliability: 'official-record',
  },
];

export const SOURCE_MAP: Record<string, Citation> = Object.fromEntries(
  SOURCES.map((s) => [s.key, s]),
);
