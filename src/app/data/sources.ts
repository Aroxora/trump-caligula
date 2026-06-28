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
    reference:
      'Flavius Josephus, "Jewish Antiquities", Book 19, c. 94 AD (the fullest assassination narrative).',
    reliability: 'primary',
  },
  {
    key: 'seneca',
    label: 'Seneca',
    reference:
      'Seneca the Younger, "De Ira" and "De Constantia", c. 41–52 AD (a contemporary who loathed Caligula).',
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
  // ---- Voting / democratic-backsliding sources ----
  {
    key: 'brennan',
    label: `Brennan Center — Voting Laws Roundup (2025)`,
    reference: `Brennan Center for Justice, "State Voting Laws Roundup: 2025 in Review" (NYU School of Law). Tracks restrictive and expansive state election legislation; documents 2025 voter-roll-maintenance laws and wrongful removals of eligible citizens.`,
    url: 'https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review',
    reliability: 'journalism',
  },
  {
    key: 'save-act',
    label: `SAVE Act (H.R. 22, 119th Cong.)`,
    reference: `Safeguard American Voter Eligibility (SAVE) Act, H.R. 22, 119th Congress (2025-2026); passed the House 220-208 on 10 April 2025. Would amend the National Voter Registration Act of 1993 to require documentary proof of citizenship to register for federal elections.`,
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/22/text',
    reliability: 'official-record',
  },
  {
    key: 'ecra',
    label: `Electoral Count Reform Act (2022)`,
    reference: `Electoral Count Reform and Presidential Transition Improvement Act of 2022, enacted as part of the Consolidated Appropriations Act, 2023 (Pub. L. 117-328, Div. P). Clarifies the Vice President's ceremonial role and tightens electoral-vote counting procedures.`,
    url: 'https://www.congress.gov/bill/117th-congress/house-bill/2617',
    reliability: 'official-record',
  },
  {
    key: 'freedom-house',
    label: `Freedom House — Freedom in the World 2025`,
    reference: `Freedom House, "Freedom in the World 2025: The Uphill Battle to Safeguard Rights" (February 2025). Reports a 19th consecutive year of global freedom decline; the US remained "Free" at 84/100. The US's -3-point drop to 81/100 — its lowest since the 0-100 scale began in 2002 — is recorded in the subsequent Freedom in the World 2026 report.`,
    url: 'https://freedomhouse.org/report/freedom-world/2025/uphill-battle-to-safeguard-rights',
    reliability: 'modern-scholarship',
  },
  {
    key: 'vdem',
    label: `V-Dem — Democracy Report 2025`,
    reference: `V-Dem Institute, University of Gothenburg, "Democracy Report 2025: 25 Years of Autocratization — Democracy Trumped?". Classifies the United States among autocratizing democracies; finds the average citizen's democracy level back at 1985 levels.`,
    url: 'https://www.v-dem.net/documents/60/V-dem-dr__2025_lowres.pdf',
    reliability: 'modern-scholarship',
  },
  // ---- PRC / PLA sources ----
  {
    key: 'prc-democracy-wp',
    label: `SCIO — "China: Democracy That Works" (2021)`,
    reference: `State Council Information Office of the PRC, white paper "China: Democracy That Works" (December 2021). The authoritative articulation of "whole-process people's democracy" under CPC leadership.`,
    url: 'http://english.scio.gov.cn/whitepapers/2021-12/04/content_77910422.htm',
    reliability: 'primary',
  },
  {
    key: 'prc-defense-wp',
    label: `SCIO — "China's National Defense in the New Era" (2019)`,
    reference: `State Council Information Office of the PRC, defence white paper "China's National Defense in the New Era" (24 July 2019). States the "active defence" military strategic guideline and a "defensive" national-defence policy.`,
    url: 'https://english.www.gov.cn/archive/whitepaper/201907/24/content_WS5d3941ddc6d08408f502283d.html',
    reliability: 'primary',
  },
  {
    key: 'prc-gsi',
    label: `PRC MFA — Global Security Initiative Concept Paper (2023)`,
    reference: `Ministry of Foreign Affairs of the PRC, "The Global Security Initiative Concept Paper" (21 February 2023). Sets out the GSI's core principles and 20 priorities of cooperation.`,
    url: 'https://www.fmprc.gov.cn/eng/zy/gb/202405/t20240531_11367484.html',
    reliability: 'primary',
  },
  {
    key: 'iiss',
    label: `IISS — The Military Balance 2025`,
    reference: `International Institute for Strategic Studies, "The Military Balance 2025" (Routledge/IISS, 2025). Standard annual assessment of global military forces, including PLA and PLAN modernisation (e.g. the Type 055 cruiser/destroyer).`,
    url: 'https://www.iiss.org/publications/the-military-balance/2025/the-military-balance-2025/',
    reliability: 'journalism',
  },
];

export const SOURCE_MAP: Record<string, Citation> = Object.fromEntries(
  SOURCES.map((s) => [s.key, s]),
);
