import { Component } from '@angular/core';
import {
  PRC_APPRECIATION,
  PRC_ASSUMPTIONS,
  PRC_ACTIVATION,
  PRC_AAR_TEMPLATE,
  PRC_BATTLE_RHYTHM,
  PRC_BEHAVIORAL,
  PRC_BIBLIOGRAPHY,
  PRC_BLIND_SPOTS,
  PRC_BRANCH_PLANS,
  PRC_CABINET_BRIEF,
  PRC_COMMANDER_SUMMARY,
  PRC_COMMS_GRID,
  PRC_COMMS_TEMPLATES,
  PRC_CONTESTABLE,
  PRC_COUNTER_DETECTION,
  PRC_CRISIS_PLAYBOOK,
  PRC_CROSS_DOMAIN,
  PRC_CYBER_ANNEX,
  PRC_DECISION_LOGIC,
  PRC_DECISION_MATRICES,
  PRC_DECISION_REGISTER,
  PRC_DECISION_JOURNAL,
  PRC_ESCALATION_LADDERS,
  PRC_HUMINT,
  PRC_HEALTH_DIAGNOSTIC,
  PRC_IMMEDIATE_ACTIONS,
  PRC_INFLUENCE_GRID,
  PRC_INTEL_GAPS,
  PRC_LAST_WORD,
  PRC_LEDE,
  PRC_MASTER_TIMELINE,
  PRC_MILESTONES,
  PRC_OPSEC,
  PRC_ORG_MAP,
  PRC_PLA_SECTION,
  PRC_PREMORTEM,
  PRC_PRIORITY_ORDER,
  PRC_RED_TEAM,
  PRC_RED_CELL,
  PRC_RISKS,
  PRC_SIGNAL_WATCH,
  PRC_SUCCESS_GATES,
  PRC_SUPPLY_CHAIN,
  PRC_TASKING_MATRIX,
  PRC_WINDOW_NOTE,
  PRC_WORST_CASE,
} from '../data/prc';
import { InlineCiteComponent } from '../shared/inline-cite.component';

@Component({
  selector: 'app-beijing',
  standalone: true,
  imports: [InlineCiteComponent],
  template: `
    <div class="bj">
      <header class="bj__head">
        <p class="eyebrow">Operational Decision Framework - The Caligula Window</p>
        <h2>Pricing action on state vulnerability</h2>
        <p class="lede">{{ lede }}</p>
      </header>

      <aside class="bj__window" role="note">
        <span class="bj__window-sigil" aria-hidden="true">&#x29D7;</span>
        <p>{{ windowNote }}</p>
      </aside>

      <!-- COMMANDER'S SUMMARY -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--cmd">&#x2605;</span> Commander's Summary</h3>
        <div class="bj__panel bj__panel--cmd">
          <p>{{ commanderSummary }}</p>
        </div>
      </section>

      <!-- IMMEDIATE ACTIONS -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--cmd">&#x21B1;</span> Immediate Actions (Next 30 Days)</h3>
        <div class="bj__panel bj__panel--immediate">
          <p>{{ immediateActions }}</p>
        </div>
      </section>

      <!-- WORST CASE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--warn">&#x26A0;</span> Worst-Case Scenario</h3>
        <div class="bj__panel bj__panel--worst">
          <p>{{ worstCase }}</p>
        </div>
      </section>

      <!-- I. INTELLIGENCE ESTIMATE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">I</span> Intelligence Estimate</h3>
        <div class="bj__prose">
          <p>{{ appreciation }}</p>
        </div>
      </section>

      <!-- II. DECISION MATRICES -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">II</span> Decision Matrices</h3>

        @for (dm of matrices; track dm.id) {
          <article class="dm">
            <header class="dm__head">
              <span class="dm__badge">{{ dm.id }}</span>
              <div>
                <h4>{{ dm.domain }}</h4>
                <p class="dm__exposure">{{ dm.exposureSummary }}</p>
              </div>
            </header>

            <div class="dm__judgment">
              <span class="dm__label">Key Judgment</span>
              <p>{{ dm.keyJudgment }}</p>
            </div>

            <!-- Watch Signals -->
            <details class="dm__detail">
              <summary>Watch Signals ({{ dm.watchSignals.length }})</summary>
              <div class="dm__signals">
                @for (s of dm.watchSignals; track s.signal) {
                  <div class="dm__signal">
                    <p class="dm__signal-name">{{ s.signal }}</p>
                    <div class="dm__signal-grid">
                      <div><span class="dm__signal-k">Source</span> <span class="dm__signal-v">{{ s.source }}</span></div>
                      <div><span class="dm__signal-k">Baseline</span> <span class="dm__signal-v">{{ s.baseline }}</span></div>
                      <div><span class="dm__signal-k">Opportunity</span> <span class="dm__signal-v dm__signal-v--opp">{{ s.opportunityThreshold }}</span></div>
                      <div><span class="dm__signal-k">Concern</span> <span class="dm__signal-v dm__signal-v--con">{{ s.concernThreshold }}</span></div>
                    </div>
                  </div>
                }
              </div>
            </details>

            <!-- Action Options -->
            <div class="dm__options">
              @for (opt of dm.options; track opt.label) {
                <div class="dm__option" [class.dm__option--rec]="opt.label.includes('Recommended')">
                  <h5>{{ opt.label }}</h5>
                  <p class="dm__opt-action">{{ opt.action }}</p>
                  <div class="dm__opt-grid">
                    <div>
                      <span class="dm__opt-k">Second-order effects</span>
                      <span class="dm__opt-v">{{ opt.secondOrderEffects }}</span>
                    </div>
                    <div>
                      <span class="dm__opt-k">Resource cost</span>
                      <span class="dm__opt-v">{{ opt.resourceCost }}</span>
                    </div>
                    <div>
                      <span class="dm__opt-k">Time to effect</span>
                      <span class="dm__opt-v">{{ opt.timeToEffect }}</span>
                    </div>
                    <div>
                      <span class="dm__opt-k">Abort condition</span>
                      <span class="dm__opt-v dm__opt-v--abort">{{ opt.abortCondition }}</span>
                    </div>
                  </div>
                </div>
              }
            </div>

            <p class="dm__deps"><strong>Dependencies.</strong> {{ dm.dependencies }}</p>
            <app-inline-cite [sources]="dm.sources" />
          </article>
        }
      </section>

      <!-- II-B. DECISION REGISTER -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">II-B</span> Decision Register</h3>

        <div class="decisions">
          @for (d of register; track d.id) {
            <article class="dec">
              <header class="dec__head">
                <span class="dec__id">{{ d.id }}</span>
                <div>
                  <h4>{{ d.decision }}</h4>
                  <time class="dec__due">Due: {{ d.due }}</time>
                </div>
              </header>
              <p class="dec__context">{{ d.context }}</p>
              <div class="dec__options">
                <div class="dec__opt dec__opt--a">
                  <span class="dec__opt-label">Option A (Recommended)</span>
                  <p>{{ d.optionA }}</p>
                </div>
                <div class="dec__opt dec__opt--b">
                  <span class="dec__opt-label">Option B</span>
                  <p>{{ d.optionB }}</p>
                </div>
              </div>
              <p class="dec__rec"><strong>Recommendation:</strong> {{ d.recommendation }}</p>
              <p class="dec__sig"><strong>Signatory:</strong> {{ d.signatory }}</p>
              <app-inline-cite [sources]="d.sources" />
            </article>
          }
        </div>
      </section>

      <!-- III. QUARTERLY MILESTONES -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">III</span> Quarterly Milestones with Decision Gates</h3>

        <div class="milestones">
          @for (m of milestones; track m.quarter) {
            <article class="ms">
              <header class="ms__head">
                <time class="ms__quarter">{{ m.quarter }}</time>
                <h4 class="ms__gate">{{ m.decisionGate }}</h4>
              </header>
              <div class="ms__body">
                <p class="ms__cal"><strong>Calendar anchors.</strong> {{ m.calendarAnchors }}</p>
                <p><strong>Intelligence inputs.</strong> {{ m.intelligenceInputs }}</p>
                <p><strong>Authorised actions.</strong> {{ m.authorizedActions }}</p>
                <p class="ms__nogo"><strong>No-go criteria.</strong> {{ m.noGoCriteria }}</p>
                <app-inline-cite [sources]="m.sources" />
              </div>
            </article>
          }
        </div>
      </section>

      <!-- IV. SIGNAL WATCH LIST -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">IV</span> Signal Watch List</h3>

        <div class="signals-watch">
          @for (sw of signalWatch; track sw.signal) {
            <article class="sw">
              <header class="sw__head">
                <h4>{{ sw.signal }}</h4>
                <span class="sw__domain">{{ sw.domain }}</span>
              </header>
              <div class="sw__grid">
                <div><span class="sw__k">Baseline</span> <span class="sw__v">{{ sw.currentBaseline }}</span></div>
                <div><span class="sw__k">Opportunity trigger</span> <span class="sw__v sw__v--opp">{{ sw.opportunityTriggers }}</span></div>
                <div><span class="sw__k">Threat trigger</span> <span class="sw__v sw__v--con">{{ sw.threatTriggers }}</span></div>
                <div><span class="sw__k">Cadence</span> <span class="sw__v">{{ sw.monitoringCadence }}</span></div>
              </div>
              <app-inline-cite [sources]="sw.sources" />
            </article>
          }
        </div>
      </section>

      <!-- IV-B. ESCALATION LADDERS -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">IV-B</span> Escalation Ladders</h3>

        @for (ladder of ladders; track ladder.domain) {
          <article class="ladder">
            <h4>{{ ladder.domain }}</h4>
            <div class="ladder__rungs">
              @for (rung of ladder.rungs; track rung.level) {
                <div class="rung" [class.rung--danger]="rung.level >= 4">
                  <div class="rung__head">
                    <span class="rung__level">Rung {{ rung.level }}</span>
                    <span class="rung__desc">{{ rung.description }}</span>
                  </div>
                  <div class="rung__grid">
                    <div><span class="rung__k">Trigger</span> <span class="rung__v">{{ rung.trigger }}</span></div>
                    <div><span class="rung__k">Likely US response</span> <span class="rung__v">{{ rung.likelyUSResponse }}</span></div>
                    <div><span class="rung__k">Cost if wrong</span> <span class="rung__v rung__v--cost">{{ rung.costIfWrong }}</span></div>
                  </div>
                </div>
              }
            </div>
            <p class="ladder__deesc"><strong>De-escalation path:</strong> {{ ladder.deescalationPath }}</p>
            <app-inline-cite [sources]="ladder.sources" />
          </article>
        }
      </section>

      <!-- V. RED TEAM -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V</span> Red Team: How a U.S. Planner Defeats This Framework</h3>
        <div class="bj__panel bj__panel--red">
          <p>{{ redTeam }}</p>
        </div>
      </section>

      <!-- V-B. BRANCH PLANS -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B</span> Branch Plans</h3>
        <div class="bj__panel bj__panel--branch">
          <p>{{ branchPlans }}</p>
        </div>
      </section>

      <!-- V-B-2. PRIORITY TASKING ORDER -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-2</span> Priority Tasking Order</h3>
        <div class="bj__panel bj__panel--priority">
          <p>{{ priorityOrder }}</p>
        </div>
      </section>

      <!-- V-B-3. INTEGRATED MASTER TIMELINE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-3</span> Integrated Master Timeline</h3>
        <div class="bj__panel bj__panel--timeline">
          <p>{{ masterTimeline }}</p>
        </div>
      </section>

      <!-- V-B-4. SUCCESS GATES -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-4</span> Success Gates</h3>
        <div class="bj__panel bj__panel--gates">
          <p>{{ successGates }}</p>
        </div>
      </section>

      <!-- V-B-5. COMMUNICATIONS GRID -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-5</span> Communications Grid</h3>
        <div class="bj__panel bj__panel--comms">
          <p>{{ commsGrid }}</p>
        </div>
      </section>

      <!-- V-B-6. ASSUMPTIONS REGISTER -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-6</span> Assumptions Register</h3>
        <div class="bj__panel bj__panel--assumptions">
          <p>{{ assumptions }}</p>
        </div>
      </section>

      <!-- V-B-7. INTELLIGENCE GAPS -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-7</span> Intelligence Gaps</h3>
        <div class="bj__panel bj__panel--gaps">
          <p>{{ intelGaps }}</p>
        </div>
      </section>

      <!-- V-B-8. DECISION LOGIC -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-B-8</span> Decision Logic (Critical Path)</h3>
        <div class="bj__panel bj__panel--logic">
          <p>{{ decisionLogic }}</p>
        </div>
      </section>

      <!-- V-C. OPSEC ANNEX -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">V-C</span> OPSEC Annex: Rules of the Framework</h3>
        <div class="bj__panel bj__panel--opsec">
          <p>{{ opsec }}</p>
        </div>
      </section>

      <!-- VI. PLA ANNEX -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI</span> PLA Cost-Exchange Tables</h3>
        <div class="bj__panel bj__panel--pla">
          <h4>{{ pla.title }}</h4>
          <p>{{ pla.body }}</p>
          <app-inline-cite [sources]="pla.sources" />
        </div>
      </section>

      <!-- VI-B. PERSISTENT ACCESS CAMPAIGN -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-B</span> Persistent Access Campaign: Operational Concept</h3>
        <div class="bj__panel bj__panel--cyber">
          <p>{{ cyberAnnex }}</p>
        </div>
      </section>

      <!-- VI-C. CROSS-DOMAIN INTELLIGENCE FEED -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-C</span> Cross-Domain Intelligence Feed</h3>
        <div class="bj__panel bj__panel--xdomain">
          <p>{{ crossDomain }}</p>
        </div>
      </section>

      <!-- VI-D. BATTLE RHYTHM -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-D</span> Battle Rhythm</h3>
        <div class="bj__panel bj__panel--rhythm">
          <p>{{ battleRhythm }}</p>
        </div>
      </section>

      <!-- VI-E. HUMINT TARGETING GUIDE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-E</span> HUMINT Targeting Guide</h3>
        <div class="bj__panel bj__panel--humint">
          <p>{{ humint }}</p>
        </div>
      </section>

      <!-- VI-F. INFLUENCE PLACEMENT GRID -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-F</span> Influence Placement Grid</h3>
        <div class="bj__panel bj__panel--influence">
          <p>{{ influenceGrid }}</p>
        </div>
      </section>

      <!-- VI-G. SUPPLY-CHAIN LEVERAGE REGISTER -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-G</span> Supply-Chain Leverage Register</h3>
        <div class="bj__panel bj__panel--supply">
          <p>{{ supplyChain }}</p>
        </div>
      </section>

      <!-- VI-H. ADMINISTRATION ORG VULNERABILITY MAP -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-H</span> Administration Organizational Vulnerability Map</h3>
        <div class="bj__panel bj__panel--orgmap">
          <p>{{ orgMap }}</p>
        </div>
      </section>

      <!-- VI-I. CRISIS EXPLOITATION PLAYBOOK -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-I</span> Crisis Exploitation Playbook</h3>
        <div class="bj__panel bj__panel--crisis">
          <p>{{ crisisPlaybook }}</p>
        </div>
      </section>

      <!-- VI-J. DECISION-MAKER BEHAVIORAL PROFILES -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VI-J</span> Decision-Maker Behavioral Profiles</h3>
        <div class="bj__panel bj__panel--behavioral">
          <p>{{ behavioral }}</p>
        </div>
      </section>

      <!-- FRAMEWORK ACTIVATION CHECKLIST -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--go">&#x2713;</span> Framework Activation Checklist</h3>
        <div class="bj__panel bj__panel--activate">
          <p>{{ activation }}</p>
        </div>
      </section>

      <!-- PRE-MORTEM: HOW THIS FRAMEWORK FAILED -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--warn">&#x26A0;</span> Pre-Mortem: How This Framework Failed</h3>
        <div class="bj__panel bj__panel--premortem">
          <p>{{ premortem }}</p>
        </div>
      </section>

      <!-- BLIND SPOT REGISTER -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">B</span> Blind Spot Register</h3>
        <div class="bj__panel bj__panel--blind">
          <p>{{ blindSpots }}</p>
        </div>
      </section>

      <!-- CABINET BRIEF -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--cmd">&#x2605;</span> Cabinet Brief (Politburo-Level)</h3>
        <div class="bj__panel bj__panel--cabinet">
          <p>{{ cabinetBrief }}</p>
        </div>
      </section>

      <!-- INTERAGENCY TASKING MATRIX -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">T</span> Interagency Tasking Matrix</h3>
        <div class="bj__panel bj__panel--tasking">
          <p>{{ taskingMatrix }}</p>
        </div>
      </section>

      <!-- POST-WINDOW AAR TEMPLATE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">AAR</span> Post-Window Assessment Template (Q2 2029)</h3>
        <div class="bj__panel bj__panel--aar">
          <p>{{ aarTemplate }}</p>
        </div>
      </section>

      <!-- RED CELL CHALLENGE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--warn">&#x26A0;</span> Red Cell Challenge</h3>
        <div class="bj__panel bj__panel--redcell">
          <p>{{ redCell }}</p>
        </div>
      </section>

      <!-- COUNTER-FRAMEWORK DETECTION -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">CF</span> Counter-Framework Detection</h3>
        <div class="bj__panel bj__panel--counter">
          <p>{{ counterDetection }}</p>
        </div>
      </section>

      <!-- OPERATIONAL COMMS TEMPLATES -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">CT</span> Operational Communications Templates</h3>
        <div class="bj__panel bj__panel--comtemplates">
          <p>{{ commsTemplates }}</p>
        </div>
      </section>

      <!-- FRAMEWORK HEALTH DIAGNOSTIC -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--go">&#x2713;</span> Framework Health Diagnostic</h3>
        <div class="bj__panel bj__panel--health">
          <p>{{ healthDiagnostic }}</p>
        </div>
      </section>

      <!-- DECISION JOURNAL TEMPLATE -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">DJ</span> Decision Journal Template</h3>
        <div class="bj__panel bj__panel--journal">
          <p>{{ decisionJournal }}</p>
        </div>
      </section>

      <!-- LAST WORD -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num bj__section-num--cmd">&#x25C6;</span> Last Word</h3>
        <div class="bj__panel bj__panel--lastword">
          <p>{{ lastWord }}</p>
        </div>
      </section>

      <!-- VII. RISK REGISTER -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VII</span> Risk Register</h3>

        <div class="risks">
          @for (r of risks; track r.risk) {
            <article class="risk">
              <header class="risk__head">
                <h4>{{ r.risk }}</h4>
                <span class="risk__likelihood" [attr.data-level]="r.likelihood">{{ r.likelihood }}</span>
              </header>
              <p class="risk__impact"><strong>Impact.</strong> {{ r.impact }}</p>
              <p class="risk__indicator"><strong>Leading indicators.</strong> {{ r.leadingIndicators }}</p>
              <p><strong>Mitigation.</strong> {{ r.mitigation }}</p>
              <p class="risk__contingent"><strong>Contingent action.</strong> {{ r.contingentAction }}</p>
              <app-inline-cite [sources]="r.sources" />
            </article>
          }
        </div>
      </section>

      <!-- VIII. LIMITS -->
      <section class="bj__section">
        <h3 class="bj__section-h"><span class="bj__section-num">VIII</span> Limits of the Framework</h3>
        <div class="bj__panel bj__panel--against">
          <p>{{ contestable }}</p>
        </div>
      </section>

      <footer class="bj__biblio">
        <h4>Sources</h4>
        <app-inline-cite [sources]="bibliography" />
      </footer>
    </div>
  `,
  styles: [
    `
      :host { display: block; }

      .bj__head { max-width: 64ch; margin-bottom: 1.6rem; }
      .eyebrow { font: 700 0.7rem/1 var(--sans); letter-spacing: 0.18em; text-transform: uppercase; color: #9b1c1c; margin: 0 0 0.6rem; }
      h2 { font: 600 clamp(1.8rem, 4vw, 2.9rem)/1.05 var(--display); margin: 0 0 0.8rem; color: var(--ink); }
      .lede { font: 400 1.04rem/1.65 var(--serif); color: var(--ink-soft); }

      .bj__window { display: flex; gap: 0.8rem; align-items: flex-start; background: linear-gradient(120deg, rgba(155,28,28,0.08), rgba(201,162,39,0.08)); border:1px solid rgba(155,28,28,0.25); border-left:3px solid #9b1c1c; border-radius:12px; padding:1rem 1.2rem; margin-bottom:2rem; }
      .bj__window-sigil { font-size:1.3rem; color:#9b1c1c; line-height:1.2; flex:none; }
      .bj__window p { margin:0; font:500 0.92rem/1.6 var(--sans); color:var(--ink-soft); }

      .bj__section { margin-bottom: 2.4rem; }
      .bj__section-h { display:flex; align-items:center; gap:0.7rem; font:600 1.2rem/1.15 var(--display); color:var(--ink); margin:0 0 1rem; padding-bottom:0.5rem; border-bottom:2px solid var(--line); }
      .bj__section-num { display:grid; place-items:center; width:1.8rem; height:1.8rem; border-radius:6px; background:#9b1c1c; color:#f7e3a1; font:700 0.85rem/1 var(--display); flex:none; }
      .bj__section-num--cmd { background:var(--gold-deep); color:#2a1d07; }
      .bj__section-num--warn { background:#b3121f; color:#f7e3a1; }
      .bj__section-num--go { background:#2e7d32; color:#e8f5e9; }
      .bj__prose p { font:400 0.98rem/1.7 var(--serif); color:var(--ink-soft); white-space:pre-line; margin:0; }

      /* Decision Matrix */
      .dm { background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:1.5rem; margin-bottom:1.2rem; }
      .dm__head { display:flex; gap:0.75rem; margin-bottom:1rem; }
      .dm__badge { flex:none; display:inline-block; padding:0.15rem 0.6rem; border-radius:4px; background:#9b1c1c; color:#f7e3a1; font:700 0.66rem/1 var(--sans); letter-spacing:0.08em; }
      .dm__head h4 { font:600 1.05rem/1.2 var(--display); color:var(--ink); margin:0 0 0.2rem; }
      .dm__exposure { font:400 0.84rem/1.5 var(--sans); color:var(--ink-faint); margin:0; white-space:pre-line; }
      .dm__judgment { background:var(--wash); border-radius:10px; padding:1rem 1.2rem; margin-bottom:1rem; }
      .dm__label { font:700 0.62rem/1 var(--sans); letter-spacing:0.12em; text-transform:uppercase; color:var(--gold-deep); display:block; margin-bottom:0.3rem; }
      .dm__judgment p { font:400 0.88rem/1.55 var(--serif); color:var(--ink-soft); white-space:pre-line; margin:0; }
      .dm__detail { margin-bottom:1rem; }
      .dm__detail summary { font:600 0.82rem/1 var(--sans); color:var(--ink-soft); cursor:pointer; padding:0.3rem 0; }
      .dm__signals { display:grid; gap:0.8rem; margin-top:0.6rem; }
      .dm__signal { background:var(--wash); border-radius:8px; padding:0.8rem 1rem; }
      .dm__signal-name { font:600 0.82rem/1.25 var(--display); color:var(--ink); margin:0 0 0.5rem; }
      .dm__signal-grid { display:grid; grid-template-columns: 1fr 1fr; gap:0.25rem 1rem; }
      .dm__signal-k { font:700 0.6rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-faint); display:block; }
      .dm__signal-v { font:400 0.76rem/1.45 var(--sans); color:var(--ink-soft); }
      .dm__signal-v--opp { color:#2e7d32; }
      .dm__signal-v--con { color:#b3121f; }
      .dm__options { display:grid; gap:0.8rem; margin-bottom:0.8rem; }
      .dm__option { border:1px solid var(--line); border-radius:10px; padding:1rem 1.2rem; }
      .dm__option--rec { border-color:var(--gold-deep); background:linear-gradient(135deg, rgba(201,162,39,0.04), transparent); }
      .dm__option h5 { font:600 0.9rem/1.2 var(--display); color:var(--ink); margin:0 0 0.5rem; }
      .dm__opt-action { font:400 0.84rem/1.55 var(--sans); color:var(--ink-soft); white-space:pre-line; margin:0 0 0.7rem; }
      .dm__opt-grid { display:grid; grid-template-columns: 1fr 1fr; gap:0.4rem 1rem; }
      .dm__opt-k { font:700 0.6rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-faint); display:block; }
      .dm__opt-v { font:400 0.76rem/1.45 var(--sans); color:var(--ink-soft); }
      .dm__opt-v--abort { color:#b3121f; }
      .dm__deps { font:400 0.8rem/1.5 var(--sans); color:var(--ink-faint); margin:0 0 0.5rem; }

      /* Milestones */
      .milestones { display:grid; gap:1rem; }
      .ms { background:var(--surface); border:1px solid var(--line); border-left:4px solid var(--gold-deep); border-radius:0 12px 12px 0; padding:1.2rem 1.5rem; }
      .ms__head { display:flex; gap:0.8rem; align-items:baseline; flex-wrap:wrap; margin-bottom:0.7rem; }
      .ms__quarter { font:700 0.7rem/1 var(--sans); letter-spacing:0.12em; text-transform:uppercase; color:var(--gold-deep); white-space:nowrap; flex:none; }
      .ms__gate { font:600 1rem/1.3 var(--display); color:var(--ink); margin:0; }
      .ms__body p { font:400 0.84rem/1.55 var(--sans); color:var(--ink-soft); white-space:pre-line; margin:0 0 0.5rem; }
      .ms__cal { color:var(--gold-deep) !important; font-size:0.78rem !important; }
      .ms__nogo { border-left:2px solid #b3121f; padding-left:0.8rem; }

      /* Signal Watch */
      .signals-watch { display:grid; gap:0.8rem; }
      .sw { background:var(--surface); border:1px solid var(--line); border-radius:12px; padding:1rem 1.2rem; }
      .sw__head { display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.6rem; }
      .sw__head h4 { font:600 0.88rem/1.25 var(--display); color:var(--ink); margin:0; }
      .sw__domain { font:700 0.6rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-faint); }
      .sw__grid { display:grid; grid-template-columns: 1fr 1fr; gap:0.3rem 1rem; }
      .sw__k { font:700 0.6rem/1 var(--sans); letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-faint); display:block; }
      .sw__v { font:400 0.76rem/1.45 var(--sans); color:var(--ink-soft); }
      .sw__v--opp { color:#2e7d32; }
      .sw__v--con { color:#b3121f; }

      /* Panel */
      .bj__panel { border-radius:14px; padding:1.6rem; margin-bottom:1rem; }
      .bj__panel h4 { font:600 1.05rem/1.2 var(--display); margin:0 0 0.6rem; }
      .bj__panel p { font:400 0.95rem/1.65 var(--serif); white-space:pre-line; margin:0; }
      .bj__panel--pla { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--pla h4 { color:var(--gold-deep); }
      .bj__panel--pla p { color:var(--ink-soft); }
      .bj__panel--pla app-inline-cite { display:block; margin-top:0.9rem; }
      .bj__panel--against { background:var(--wash); border:1px solid var(--line); }
      .bj__panel--against p { color:var(--ink-soft); }
      .bj__panel--red { background:linear-gradient(135deg, rgba(179,18,31,0.06), rgba(201,162,39,0.04)); border:1px solid rgba(179,18,31,0.2); }
      .bj__panel--red p { color:var(--ink-soft); }
      .bj__panel--branch { background:var(--surface); border:1px solid var(--line); border-left:3px solid #2e7d32; }
      .bj__panel--branch p { color:var(--ink-soft); }
      .bj__panel--opsec { background:var(--surface); border:1px solid rgba(179,18,31,0.3); }
      .bj__panel--opsec p { color:var(--ink-soft); }
      .bj__panel--priority { background:linear-gradient(135deg, rgba(46,125,50,0.04), transparent); border:1px solid var(--line); border-left:3px solid #2e7d32; }
      .bj__panel--priority p { color:var(--ink-soft); }
      .bj__panel--timeline { background:var(--surface); border:1px solid var(--line); border-left:3px solid var(--gold-deep); }
      .bj__panel--timeline p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--gates { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--gates p { color:var(--ink-soft); }
      .bj__panel--comms { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--comms p { color:var(--ink-soft); }
      .bj__panel--assumptions { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--assumptions p { color:var(--ink-soft); font-family:var(--sans); font-size:0.84rem !important; }
      .bj__panel--gaps { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--gaps p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--logic { background:linear-gradient(135deg, rgba(201,162,39,0.05), transparent); border:1px solid var(--line); }
      .bj__panel--logic p { color:var(--ink-soft); font-family:var(--sans); font-size:0.82rem !important; line-height:1.65 !important; }
      .bj__panel--cmd { background:linear-gradient(135deg, rgba(201,162,39,0.08), transparent); border:2px solid var(--gold-deep); }
      .bj__panel--cmd p { color:var(--ink-soft); font-size:0.9rem !important; line-height:1.7 !important; }
      .bj__panel--immediate { background:var(--surface); border:1px solid var(--line); border-left:3px solid #2e7d32; }
      .bj__panel--immediate p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--worst { background:var(--surface); border:1px solid rgba(179,18,31,0.25); }
      .bj__panel--worst p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--cyber { background:linear-gradient(160deg, #0a0a0f, #12121a); border:1px solid rgba(0,200,200,0.15); }
      .bj__panel--cyber p { color:#b8c8c8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.65 !important; }
      .bj__panel--xdomain { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--xdomain p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--rhythm { background:var(--surface); border:1px solid var(--line); border-left:3px solid #2e7d32; }
      .bj__panel--rhythm p { color:var(--ink-soft); font-family:var(--sans); font-size:0.82rem !important; line-height:1.6 !important; }
      .bj__panel--humint { background:linear-gradient(160deg, #0a0a14, #10101f); border:1px solid rgba(179,18,31,0.2); }
      .bj__panel--humint p { color:#b8bcc8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.65 !important; }
      .bj__panel--influence { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--influence p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--supply { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--supply p { color:var(--ink-soft); font-size:0.84rem !important; }
      .bj__panel--orgmap { background:linear-gradient(160deg, #0a0a12, #12121c); border:1px solid rgba(200,180,50,0.15); }
      .bj__panel--orgmap p { color:#b8bac8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.65 !important; }
      .bj__panel--crisis { background:linear-gradient(160deg, #120a0a, #1c1010); border:1px solid rgba(200,50,50,0.2); }
      .bj__panel--crisis p { color:#c8b8b8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.65 !important; }
      .bj__panel--behavioral { background:linear-gradient(160deg, #0a0a14, #10101f); border:1px solid rgba(100,150,200,0.15); }
      .bj__panel--behavioral p { color:#b8bcc8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.65 !important; }
      .bj__panel--activate { background:linear-gradient(135deg, rgba(46,125,50,0.06), transparent); border:2px solid rgba(46,125,50,0.3); }
      .bj__panel--activate p { color:var(--ink-soft); font-family:var(--sans); font-size:0.84rem !important; line-height:1.6 !important; }
      .bj__panel--premortem { background:linear-gradient(160deg, #120a0a, #1a1010); border:1px solid rgba(179,18,31,0.25); }
      .bj__panel--premortem p { color:#c8b8b8; font-family:var(--sans); font-size:0.84rem !important; line-height:1.65 !important; }
      .bj__panel--blind { background:linear-gradient(160deg, #0a0a12, #10101c); border:1px solid rgba(150,120,200,0.15); }
      .bj__panel--blind p { color:#b8b8c8; font-family:var(--sans); font-size:0.84rem !important; line-height:1.65 !important; }
      .bj__panel--cabinet { background:linear-gradient(135deg, rgba(201,162,39,0.1), transparent); border:2px solid var(--gold-deep); }
      .bj__panel--cabinet p { color:var(--ink-soft); font-size:0.9rem !important; line-height:1.7 !important; }
      .bj__panel--tasking { background:var(--surface); border:1px solid var(--line); }
      .bj__panel--tasking p { color:var(--ink-soft); font-family:var(--sans); font-size:0.82rem !important; line-height:1.55 !important; }
      .bj__panel--aar { background:linear-gradient(160deg, #0a0a10, #101018); border:1px solid rgba(100,180,200,0.2); }
      .bj__panel--aar p { color:#b8c0c8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.55 !important; }
      .bj__panel--redcell { background:linear-gradient(160deg, #120a0a, #1a0e0e); border:1px solid rgba(200,60,60,0.2); }
      .bj__panel--redcell p { color:#c8b8b8; font-family:var(--sans); font-size:0.84rem !important; line-height:1.65 !important; }
      .bj__panel--counter { background:linear-gradient(160deg, #0a0a14, #0e0e1a); border:1px solid rgba(150,100,200,0.2); }
      .bj__panel--counter p { color:#b8b8c8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.6 !important; }
      .bj__panel--comtemplates { background:linear-gradient(160deg, #0a100a, #101810); border:1px solid rgba(46,125,50,0.2); }
      .bj__panel--comtemplates p { color:#b8c8b8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.55 !important; }
      .bj__panel--health { background:linear-gradient(135deg, rgba(46,125,50,0.05), rgba(201,162,39,0.03)); border:1px solid rgba(46,125,50,0.2); }
      .bj__panel--health p { color:var(--ink-soft); font-family:var(--sans); font-size:0.84rem !important; line-height:1.6 !important; }
      .bj__panel--journal { background:linear-gradient(160deg, #0a0a10, #101018); border:1px solid rgba(180,160,100,0.2); }
      .bj__panel--journal p { color:#c0bca8; font-family:var(--sans); font-size:0.82rem !important; line-height:1.55 !important; }
      .bj__panel--lastword { background:linear-gradient(160deg, #4a0a0e, #320609); border:2px solid var(--gold-deep); }
      .bj__panel--lastword p { color:#e8dcc6; font-family:var(--serif); font-size:0.95rem !important; line-height:1.75 !important; }

      /* Decision Register */
      .decisions { display:grid; gap:1rem; }
      .dec { background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:1.3rem 1.5rem; }
      .dec__head { display:flex; gap:0.75rem; margin-bottom:0.8rem; }
      .dec__id { flex:none; display:grid; place-items:center; min-width:3.2rem; height:1.5rem; padding:0 0.5rem; border-radius:4px; background:#9b1c1c; color:#f7e3a1; font:700 0.64rem/1 var(--sans); letter-spacing:0.06em; }
      .dec__head h4 { font:600 0.95rem/1.25 var(--display); color:var(--ink); margin:0 0 0.2rem; }
      .dec__due { font:700 0.62rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; color:var(--gold-deep); }
      .dec__context { font:400 0.84rem/1.55 var(--sans); color:var(--ink-soft); white-space:pre-line; margin:0 0 0.8rem; }
      .dec__options { display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; margin-bottom:0.8rem; }
      .dec__opt { border-radius:8px; padding:0.8rem 1rem; }
      .dec__opt--a { background:rgba(46,125,50,0.06); border:1px solid rgba(46,125,50,0.2); }
      .dec__opt--b { background:rgba(201,162,39,0.04); border:1px solid rgba(201,162,39,0.15); }
      .dec__opt-label { font:700 0.6rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-faint); display:block; margin-bottom:0.3rem; }
      .dec__opt p { font:400 0.8rem/1.5 var(--sans); color:var(--ink-soft); white-space:pre-line; margin:0; }
      .dec__rec { font:400 0.84rem/1.5 var(--sans); color:var(--ink-soft); border-left:2px solid var(--gold-deep); padding-left:0.8rem; margin:0 0 0.4rem; }
      .dec__sig { font:400 0.78rem/1.4 var(--sans); color:var(--ink-faint); margin:0 0 0.5rem; }

      /* Escalation Ladders */
      .ladder { background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:1.3rem 1.5rem; margin-bottom:1rem; }
      .ladder h4 { font:600 1rem/1.2 var(--display); color:var(--ink); margin:0 0 0.8rem; }
      .ladder__rungs { display:grid; gap:0.5rem; margin-bottom:0.8rem; }
      .rung { background:var(--wash); border-radius:8px; padding:0.7rem 1rem; }
      .rung--danger { border-left:3px solid #b3121f; }
      .rung__head { display:flex; gap:0.6rem; align-items:baseline; margin-bottom:0.5rem; }
      .rung__level { font:700 0.62rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; color:var(--gold-deep); white-space:nowrap; flex:none; }
      .rung__desc { font:500 0.82rem/1.35 var(--display); color:var(--ink); }
      .rung__grid { display:grid; gap:0.25rem; }
      .rung__k { font:700 0.6rem/1 var(--sans); letter-spacing:0.06em; text-transform:uppercase; color:var(--ink-faint); display:block; }
      .rung__v { font:400 0.76rem/1.45 var(--sans); color:var(--ink-soft); }
      .rung__v--cost { color:#b3121f; }
      .ladder__deesc { font:400 0.8rem/1.5 var(--sans); color:var(--ink-faint); border-left:2px solid var(--gold-deep); padding-left:0.8rem; margin:0 0 0.5rem; }

      /* Risk */
      .risks { display:grid; gap:0.8rem; }
      .risk { background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:1.2rem 1.5rem; }
      .risk__head { display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem; }
      .risk__head h4 { font:600 0.95rem/1.25 var(--display); color:var(--ink); margin:0; }
      .risk__likelihood { font:700 0.64rem/1 var(--sans); letter-spacing:0.08em; text-transform:uppercase; padding:0.15rem 0.5rem; border-radius:4px; white-space:nowrap; }
      .risk__likelihood[data-level='Low'] { background:rgba(46,125,50,0.12); color:#2e7d32; }
      .risk__likelihood[data-level='Low-Medium'] { background:rgba(201,162,39,0.12); color:#8d6e00; }
      .risk__likelihood[data-level='Medium'] { background:rgba(201,162,39,0.18); color:#8d6e00; }
      .risk__likelihood[data-level='Medium-High'] { background:rgba(230,81,0,0.12); color:#bf360c; }
      .risk__likelihood[data-level='High'] { background:rgba(179,18,31,0.15); color:#b3121f; }
      .risk p { font:400 0.84rem/1.55 var(--sans); color:var(--ink-soft); white-space:pre-line; margin:0 0 0.5rem; }
      .risk__impact, .risk__indicator, .risk__contingent { border-left:2px solid var(--line); padding-left:0.8rem; }
      .risk__indicator { border-left-color:var(--gold-deep); }
      .risk__contingent { border-left-color:#b3121f; }

      .bj__biblio { margin-top:2rem; padding-top:1.2rem; border-top:1px solid var(--line); }
      .bj__biblio h4 { font:700 0.72rem/1 var(--sans); letter-spacing:0.14em; text-transform:uppercase; color:var(--ink-faint); margin:0 0 0.7rem; }
    `,
  ],
})
export class BeijingComponent {
  readonly lede = PRC_LEDE;
  readonly windowNote = PRC_WINDOW_NOTE;
  readonly appreciation = PRC_APPRECIATION;
  readonly matrices = PRC_DECISION_MATRICES;
  readonly register = PRC_DECISION_REGISTER;
  readonly milestones = PRC_MILESTONES;
  readonly signalWatch = PRC_SIGNAL_WATCH;
  readonly ladders = PRC_ESCALATION_LADDERS;
  readonly commanderSummary = PRC_COMMANDER_SUMMARY;
  readonly immediateActions = PRC_IMMEDIATE_ACTIONS;
  readonly worstCase = PRC_WORST_CASE;
  readonly redTeam = PRC_RED_TEAM;
  readonly branchPlans = PRC_BRANCH_PLANS;
  readonly priorityOrder = PRC_PRIORITY_ORDER;
  readonly masterTimeline = PRC_MASTER_TIMELINE;
  readonly successGates = PRC_SUCCESS_GATES;
  readonly commsGrid = PRC_COMMS_GRID;
  readonly assumptions = PRC_ASSUMPTIONS;
  readonly intelGaps = PRC_INTEL_GAPS;
  readonly decisionLogic = PRC_DECISION_LOGIC;
  readonly opsec = PRC_OPSEC;
  readonly pla = PRC_PLA_SECTION;
  readonly cyberAnnex = PRC_CYBER_ANNEX;
  readonly crossDomain = PRC_CROSS_DOMAIN;
  readonly battleRhythm = PRC_BATTLE_RHYTHM;
  readonly humint = PRC_HUMINT;
  readonly influenceGrid = PRC_INFLUENCE_GRID;
  readonly supplyChain = PRC_SUPPLY_CHAIN;
  readonly orgMap = PRC_ORG_MAP;
  readonly crisisPlaybook = PRC_CRISIS_PLAYBOOK;
  readonly behavioral = PRC_BEHAVIORAL;
  readonly activation = PRC_ACTIVATION;
  readonly premortem = PRC_PREMORTEM;
  readonly blindSpots = PRC_BLIND_SPOTS;
  readonly cabinetBrief = PRC_CABINET_BRIEF;
  readonly taskingMatrix = PRC_TASKING_MATRIX;
  readonly aarTemplate = PRC_AAR_TEMPLATE;
  readonly redCell = PRC_RED_CELL;
  readonly counterDetection = PRC_COUNTER_DETECTION;
  readonly commsTemplates = PRC_COMMS_TEMPLATES;
  readonly healthDiagnostic = PRC_HEALTH_DIAGNOSTIC;
  readonly decisionJournal = PRC_DECISION_JOURNAL;
  readonly lastWord = PRC_LAST_WORD;
  readonly risks = PRC_RISKS;
  readonly contestable = PRC_CONTESTABLE;
  readonly bibliography = PRC_BIBLIOGRAPHY;
}
