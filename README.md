<img width="1232" height="1385" alt="Screenshot 2026-06-01 102431" src="https://github.com/user-attachments/assets/42a49269-9fc3-468f-899c-908f32a51be1" />

# The Caligula Index

An interactive, **fully sourced** educational comparison site built around _The Economist_'s
column **"America must hope Donald Trump is not a new Caligula"** (International, 5 May 2026).

It does more than restate the article. It turns the column's framing — Barbara Tuchman's
_The March of Folly_ — into a working instrument: a **March of Folly Index (MFI)** that scores
each modern failure on five axes and aggregates them to answer the article's closing question —
are the mistakes _personal_ to one era, or _systemic_ "decadence"?

## What's inside

- **The Caligula Window** — a perpetual countdown, pinned to the top of every screen, to the
  constitutional end of the second term (noon, 20 Jan 2029): the "strategic window of exposure"
  America's adversaries can exploit, framed in the site's OSINT Defense-CAD idiom and tied into
  the view from Beijing.
- **The argument** — the column's spine, the closing question, and Tuchman's three tests of folly.
- **The column, annotated** — the article's twelve key beats quoted for commentary, each unpacking
  the reference (Montezuma, George III, the Earl of Sandwich, Caligula) and cross-linking into the site.
- **Tuchman's framework** — her exact definition, "wooden-headedness," and her four case studies
  (Troy, the Renaissance popes, the loss of America, Vietnam).
- **The Folly Index** — the centrepiece. A live formula

  > `MFI = 100 · Σ(wᵢ·sᵢ) / (5·Σwᵢ)`

  scoring each failure 0–5 on **Self-harm**, **Counter-productive at the time**, **Feasible
  alternative existed**, **Systemic/persistent**, and **Caligula resonance**. It includes:
  - **27 catalogued failures** (Gulf war, Greenland, tariffs, a loyalist cabinet, voter
    suppression & election subversion, DOJ retribution, the IG purge, National Guard deployments,
    CECOT removals, the birthright-citizenship order, dismantling USAID, the WHO & UN-body
    withdrawals, vaccine rollback, science cuts, climate, press suppression, the "Trump-class"
    battleship, the Anthropic DoD dispute, the gilded Oval, the parade…) plus the global backdrop
    (Ukraine, Gaza, Iran, and the worldwide democratic recession).
  - **Weight sliders + five preset worldviews** ("Tuchman purist," "skeptic," "historian," "critic,"
    "defender") — every score and the aggregate recompute live.
  - **A "Tuchman's Third Test" verdict** — a personal-vs-systemic needle answering the column's
    closing question with your own weights.
  - **A trust dial** — drop _reported_ / _speculative_ items, or weight every score by its
    confidence, and watch the aggregate move.
  - **The folly map** — a self-harm × systemic scatter that plots Trump's follies, **Caligula's own
    acts**, and **Tuchman's four canonical follies** on one axis set (Caligula's acts sit low on
    "systemic" — his folly died with him, exactly Tuchman's point).
  - **Per-card radar, falsification prompts** ("this would NOT be folly if…"), confidence bars, and
    **post-cutoff / conflict-of-interest badges**.

- **Parallels** — theme-by-theme side-by-sides with a "parallel strength" meter and a
  _where-the-analogy-strains_ note.
- **Caligula, seriously** — ten deeply-sourced themes (early reign, the AD 37 illness, the fiscal
  crisis, Nemi ships, self-deification, the Senate humiliations, the games and cruelty, the seashells, the assassination,
  the historiography problem) with modern scholarship and an honest "where the parallel breaks."
- **Rome → America** — Polybius, mixed government, Cincinnatus/Washington, the founders' fears, and
  the historian's caution against lazy "Are We Rome?" analogies.
- **The case against the analogy** — nine concrete disanalogies, a critique of historical
  analogising, and a steelman.
- **The view from Beijing** — a clearly-labelled, sourced PRC/PLA reading that turns the site's
  own Rome→America "decadence" thesis into evidence for Beijing's "East rising, West declining"
  (东升西降) narrative, with the PLA's distributed, strategy-led modernisation set against the
  "Golden Fleet" — steelmanned in Beijing's own voice, then tested against an honest counterweight
  (Xinjiang, Hong Kong, Taiwan-Strait coercion, the limits of state self-reporting).
- **Timeline · Score-your-own-folly · Quiz · Glossary · Sources.**

## Accuracy & integrity

The content is the output of a parallel **research + adversarial fact-check** pass (see `research/`).

- Every claim carries reliability-coded citations: **primary–hostile** (Suetonius, Dio, Philo,
  Seneca), **primary** (Josephus), **modern scholarship** (Winterling, Barrett, Beard, Tuchman),
  **journalism**, **official record**.
- Each failure is graded **documented / reported / speculative** with a confidence score, and the
  index can recompute on documented items only. Post-cutoff events (the 2026 Gulf war, the
  battleship, the Anthropic dispute) are flagged; the Anthropic item carries an explicit
  conflict-of-interest disclosure (the author's own organisation).
- Caligula's lurid anecdotes are caveated, not asserted; the verification pass corrected
  overclaims (e.g. an inflated senator-execution figure) and flagged hostile sourcing throughout.
- Scores are an editorial reading you can re-weight; the framework is Tuchman's.

This is an independent educational project and is **not affiliated with The Economist**.

## Tech

Angular 21 (standalone components, signals) deployed as a static site on **Firebase Hosting**.

## Develop

```bash
npm install
npm start            # ng serve → http://localhost:4200
```

## Test

```bash
npm test             # vitest (jsdom) — runs once in CI/non-TTY, watches in a TTY
```

The suite (4 files, 25 tests) covers the March of Folly Index scoring maths and the trust-dial,
data integrity (every folly domain ∈ `DOMAINS`, scores in 0–5, every `cites` key resolves in
`SOURCE_MAP`, unique source/glossary keys, disconfirmer hygiene), the PRC/PLA viewpoint data, and
TestBed render checks for the Beijing and Caligula-Window components.

## Build & deploy to Firebase Hosting

```bash
npm run build        # outputs to dist/trumpcaligula/browser

# one-time: set your Firebase project
firebase login
# edit .firebaserc → replace "trump-caligula" with your project id, or:
firebase use --add

npm run deploy       # ng build && firebase deploy --only hosting
```

`firebase.json` already points hosting at `dist/trumpcaligula/browser`, rewrites all routes to
`index.html` (SPA), and sets long-cache headers on hashed assets.
