/**
 * Chinese translations for the Caligula Window Operational Decision Framework.
 * Maps to the English content in prc.ts. Toggle between zh/en via language signal.
 */

export interface TranslationMap {
  // Section headers
  section: Record<string, string>;
  // Content blocks
  lede: string;
  windowNote: string;
  commanderSummary: string;
  immediateActions: string;
  worstCase: string;
  appreciation: string;
  decisionMatricesHeader: string;
  decisionRegisterHeader: string;
  milestonesHeader: string;
  signalWatchHeader: string;
  escalationLaddersHeader: string;
  redTeam: string;
  redTeamHeader: string;
  branchPlans: string;
  branchPlansHeader: string;
  priorityOrder: string;
  priorityOrderHeader: string;
  masterTimeline: string;
  masterTimelineHeader: string;
  successGates: string;
  successGatesHeader: string;
  commsGrid: string;
  commsGridHeader: string;
  assumptions: string;
  assumptionsHeader: string;
  intelGaps: string;
  intelGapsHeader: string;
  decisionLogic: string;
  decisionLogicHeader: string;
  plaSection: { title: string; body: string };
  cyberAnnex: string;
  cyberAnnexHeader: string;
  crossDomain: string;
  crossDomainHeader: string;
  battleRhythm: string;
  battleRhythmHeader: string;
  humint: string;
  humintHeader: string;
  influenceGrid: string;
  influenceGridHeader: string;
  supplyChain: string;
  supplyChainHeader: string;
  orgMap: string;
  orgMapHeader: string;
  crisisPlaybook: string;
  crisisPlaybookHeader: string;
  behavioral: string;
  behavioralHeader: string;
  activation: string;
  activationHeader: string;
  premortem: string;
  premortemHeader: string;
  blindSpots: string;
  blindSpotsHeader: string;
  cabinetBrief: string;
  cabinetBriefHeader: string;
  taskingMatrix: string;
  taskingMatrixHeader: string;
  aarTemplate: string;
  aarTemplateHeader: string;
  redCell: string;
  redCellHeader: string;
  counterDetection: string;
  counterDetectionHeader: string;
  commsTemplates: string;
  commsTemplatesHeader: string;
  healthDiagnostic: string;
  healthDiagnosticHeader: string;
  decisionJournal: string;
  decisionJournalHeader: string;
  lastWord: string;
  lastWordHeader: string;
  advantage: string;
  advantageHeader: string;
  aggressive: string;
  aggressiveHeader: string;
  typhoon: string;
  typhoonHeader: string;
  contestable: string;
  contestableHeader: string;
  bibliographyHeader: string;
}

export const ZH: TranslationMap = {
  section: {
    commanderSummary: '指挥官概要',
    immediateActions: '立即行动（未来30天）',
    worstCase: '最坏情况',
    appreciation: '情报评估',
    decisionMatrices: '决策矩阵',
    decisionRegister: '决策登记册',
    milestones: '季度里程碑与决策关卡',
    signalWatch: '信号监视清单',
    escalationLadders: '升级阶梯',
    redTeam: '红队：美方规划者如何击败本框架',
    branchPlans: '分支计划',
    priorityOrder: '优先级任务序列',
    masterTimeline: '综合主时间线',
    successGates: '成功关卡',
    commsGrid: '通信网格',
    assumptions: '假设登记册',
    intelGaps: '情报缺口',
    decisionLogic: '决策逻辑（关键路径）',
    plaAnnex: 'PLA成本交换表',
    cyberAnnex: '持久访问战役：作战概念',
    crossDomain: '跨域情报馈送',
    battleRhythm: '作战节奏',
    humint: '人力情报目标指南',
    influenceGrid: '影响力投放网格',
    supplyChain: '供应链杠杆登记册',
    orgMap: '行政机构组织脆弱性地图',
    crisisPlaybook: '危机利用手册',
    behavioral: '决策者行为特征',
    activation: '框架激活检查清单',
    premortem: '事前验尸：本框架如何失败',
    blindSpots: '盲点登记册',
    cabinetBrief: '内阁简报（政治局层级）',
    taskingMatrix: '跨部门任务矩阵',
    aarTemplate: '窗口后评估模板（2029年Q2）',
    redCell: '红队质询',
    counterDetection: '反框架探测',
    commsTemplates: '作战通信模板',
    healthDiagnostic: '框架健康诊断',
    decisionJournal: '决策日志模板',
    lastWord: '最后的话',
    advantage: '中国优势',
    aggressive: '激进利用附件',
    typhoon: '硅台风',
    primaryStrategy: '首要战略',
    contestable: '框架的局限',
    bibliography: '资料来源',
  },

  lede: `这是一份作战决策框架，用于对目标目录中编录的美国国家脆弱性进行定价和排序。结构化的桌面产品：带有置信度评级的情报评估、五个带有按二阶效应定价的行动选项的决策矩阵、一份具体二元决策的决策登记册、锚定日历事件的季度里程碑、带有触发阈值的信号监视清单、各领域的升级阶梯、优先任务序列、带有具体日期的综合主时间线、按季度设定通过/失败标准的成功关卡、各阶段公共/私人/红线通信网格、可能偏离情况的分支计划、美方规划者如何击败本框架的红队评估、带有平台清单的PLA成本交换附件、OPSEC附件、以及带有先行指标和应急行动的风险登记册。每个判断都有置信度限定词。每个行动选项都有中止条件。每个阶段都有成功关卡。每个阶段都有通信线路。`,

  windowNote: `上方的倒计时是作战时钟。本框架中的每一个里程碑、决策关卡和触发阈值都锚定在2029年1月20日结束的时间区间。行动有保质期：一个需要24个月才能产生效果的选择必须在2027年Q1之前启动，才能在窗口关闭前产生回报。时间较短的选择可以稍后启动，但仍需定价窗口在回报实现前关闭的风险。这不是胜利的倒计时。这是一组选择到期的倒计时。`,

  commanderSummary: `先读这个。整个框架的90秒提炼。

局势：美国正在以超过1945年以来任何一届政府的速率在五个领域产生自我施加的脆弱性——联盟可靠性、制度治理、财政架构、国防采购和信息-叙事控制。每一个脆弱性都在目标目录中以西方来源引证记录。这些脆弱性持续存在，至少到2029年1月20日。它们使得特定的竞争者行动成为可能，而这些行动在美国正常治理下是不可用的。

决策：不是是否行动。决策是采取哪些行动、以什么规模、以及有什么中止条件。本框架建议在所有五个领域采取A选项（低风险、按计划节奏）。B选项（高风险、高回报）仅在监视信号阈值被跨越、决策关卡通过、国内资源余量确认时才获授权。

首要建议：做一件事。以既定节奏继续PLA计划性现代化。不要宣布。这是可用的风险调整后回报最高的行动。其他一切都是次要的。

最大风险：中国对联盟裂痕的可见利用触发美国联盟重新巩固。这一事件会逆转所有DM-3收益，其代价超过整个框架的潜在回报。防御：被动可用。让美国来做疏远的工作。不要被看到在利用它。

第二大风险：台海或南海军事事件。这会立即关闭窗口，代价超过所有潜在收益。防御：升级纪律。不要攀登任何阶梯超过第二级。

本框架最重要的一句话：DM-1 A选项计划性节奏继续，无论所有其他决定如何。不要宣布。`,

  immediateActions: `框架投入运作需在未来30天内决定、分配任务或确认的事项。

1. 确认隔离与分发。本框架必须指定为内部受保护的决策支持材料，仅分发给有知情需要的人员。分发名单：常委会主管、军委作战局、外交部战略规划、商务部贸易政策、PLA海军和火箭军规划人员。未经明确授权不得扩大分发。(时限：7天。)

2. 分配信号监视收集任务。将六项监视信号分别分配给具体部门或科室。确认收集频次（按信号监视清单中的每周/每月/每季度）。确认报告格式和分发。(时限：14天。)

3. 确认基线阈值。信号监视清单规定当前基线。必须对照最新可用数据进行确认。任何超过90天的基线必须在第一个决策关卡前更新。(时限：21天。)

4. 向决策者简要DEC-1。决策登记册项目DEC-1（在2027年Q1前授权B选项？）是本框架的第一个实质性决策关卡，于2026年Q4到期。决策者必须在关卡开启前了解框架逻辑、具体决策和签署要求。(时限：30天。)

5. 建立框架更新周期。本框架是活文件。指定责任人在每个季度决策关卡用实际监视信号读数、已做出的决策和观察到的结果进行更新。2029年Q1之后的版本必须包括窗口后评估。(时限：30天。)

6. 确认无即时危机。任何台海或南海事件发生时框架暂停。确认无此类事件正在进行或即将发生。如有事件正在发生，框架尚未可运作——危机管理优先。(时限：立即。)`,

  worstCase: `失败是什么样子。以下任何情况发生框架即失败。每个情况都有概率和后果定价。

失败模式1（概率：低。后果：灾难性）：台海军事对抗。
如何发生：PLA作战节奏增加（即使仅在第二级，高于基线20%）触发美国航母打击群反应。一次擦枪走火升级。72小时内，卡利古拉窗口被一场消耗所有战略带宽12-24个月的军事危机取代。
代价：所有DM收益逆转。联盟重新巩固立即且永久。经济制裁升级到最高。中国军事现代化轨迹因冲突损害和冲突后孤立而中断。
预防：永远不要攀登军事升级阶梯超过第二级。本框架最重要的作战纪律。

失败模式2（概率：中等。后果：严重）：中国过度行为触发联盟重新巩固。
如何发生：一次DM-3 B选项行动（公开双边防务磋商）触发美国盟友发表正式声明，引用中国利用行为。90天内，北约和印太盟友重新承诺美国领导地位，增加国防开支至GDP 2.5%以上，扩大AUKUS/Quad。窗口关闭后中国比窗口前更孤立。
代价：所有DM-3收益逆转。盟友退出中国主导的替代方案，DM-2制度收益被侵蚀。中国外交信誉受损。
预防：停留在DM-3 A选项（被动可用）。永远不提供安全保障。永远不向美国盟友出售武器。永远不将中国框架为联盟替代方案。

失败模式3（概率：中高。后果：显著）：国内约束出现而外部承诺未偿。
如何发生：中国增长降至3.5%以下，房地产行业深化，青年失业率飙升。同时，DM-2制度承诺（气候融资、卫生资金）和DM-4互换额度义务需要国内条件不再支持的持续外部资源。北京要么违约（损害信誉），要么从稳定优先事项转移国内资源（损害政权）。
代价：违约承诺的信誉损害超过做出承诺所获得的任何影响力。框架的净回报变为负数。
预防：国内门槛条件（低于3.5%增长时不允许B选项）。执行它。没有例外。

失败模式4（概率：低中。后果：严重）：框架被泄露。
如何发生：一名中层参谋在分发名单上，在一次与盟国同行的不安全通信中提到"卡利古拉窗口概念"。同行向上级报告。90天内，一份美国情报产品已确认该框架的存在、结构和逻辑。红队评估成为美国的反制框架。我们的监视信号阈值——在泄露前校准——现在成为美国操纵的目标。航母打击群缺口维持在89天。人民币储备份额保持在3.9%。费用分担减免被给予盟友，刚好低于我们的机会阈值水平。
代价：框架成为使用者的负担。每一个它促成的收益都变得可逆，因为产生这些收益的逻辑已被知晓。
预防：OPSEC附件规则1-6。框架不得存在于授权圈层之外。

失败模式5（概率：中等。后果：轻微）：框架没有产生B选项收益，但保留了A选项基线。
这如何发生：没有监视信号跨越机会阈值。或者阈值跨越了但决策关卡从未通过。或者B选项获授权但中止条件在回报实现前触发。窗口关闭，只有基线计划性收益。
代价：零。这不是失败模式。阻止了代价高昂的错误行动的框架是一个成功的框架。不行动的代价是零。错误行动的代价是无上限的。
预防：不需要。这是框架按设计运作。`,

  appreciation: `关键判断，截至2026年年中评估。

判断1（高置信度）。当前美国政府正在以超过1945年以来任何一届政府的速率和深度在五个领域——联盟可靠性、制度治理、财政架构、国防采购和信息-叙事控制——产生自我施加的脆弱性。每一个脆弱性都在目标目录中以西方来源引证记录。这些脆弱性是真实的，并且持续至少到2028年Q4。

判断2（中等置信度）。这些脆弱性使得特定的竞争者行动成为可能，而这些行动在按照1945年后规范运作的美国政府的领导下是不可用的。已启用的行动窗口于2029年1月20日关闭，尽管某些行动——一旦采取——会产生在窗口关闭后仍然存在的效果。

判断3（中等置信度）。行动的主要约束不是美国的抵抗，而是二阶成本：可见利用行为触发的联盟重新巩固、反制升级（二次制裁、技术禁运扩大）、在薄弱的制度替代方案上过度承诺造成的声誉损害，以及从国内优先事项转移资源。

判断4（低置信度）。任何特定行动的净回报无法精确估计，因为二阶效应是路径依赖的：它们取决于行动的具体顺序、规模和可见性，所有这些都在中国的控制之下。本框架的价值在于结构化决策，而非预测结果。

优先级加权排名。并非所有暴露都同等重要。按（已启用行动价值 × 净正回报概率）/（二阶成本 × 产生效果时间）加权，暴露领域排名为：(1) 国防技术定位——高回报，成本为计划性而非外交性，二阶效应最低；(2) 制度真空填补——中等回报，成本为财务和声誉，二阶效应中等；(3) 联盟裂痕利用——高潜在回报，成本为外交和升级，二阶效应最高；(4) 经济去美元化——中等回报，成本为结构性且反制风险高；(5) 信息-叙事——低回报，成本为声誉，二阶效应削弱行动本身。`,

  decisionMatricesHeader: '决策矩阵',
  decisionRegisterHeader: '决策登记册',

  milestonesHeader: '季度里程碑与决策关卡',
  signalWatchHeader: '信号监视清单',
  escalationLaddersHeader: '升级阶梯',

  redTeam: `以下是对一名获得本框架的美国战略规划者如何击败它的结构化评估。`,

  redTeamHeader: '红队',
  branchPlans: `针对偏离基线情景最可能发生的三种分支计划。每个分支是一棵决策树。`,
  branchPlansHeader: '分支计划',
  priorityOrder: `资源受限的优先级排序。如果能执行所有领域的每一个A选项行动，则不需要优先级排序。如果资源、政治资本或带宽受约束，按此顺序执行。

第一级——必须做（最大回报，最小成本，无外交摩擦）
1. DM-1 A选项：PLA计划性现代化节奏。继续。不要宣布。这是框架中风险调整后回报最高的单一行动。无论其他所有决定如何都继续进行。
2. 信号监视清单：按指定频次维护所有六项监视信号。没有当前的信号数据，框架就是盲目的。这几乎不花成本，并使其他所有决策成为可能。

第二级——应该做（中等回报，中等成本，可管理的二阶效应）
3. DM-2 A选项：选择性制度真空填补。
4. DM-4 A选项：增量CIPS扩展和双边互换额度。
5. 决策登记册：按计划执行DEC-1至DEC-5。

第三级——最好做（高潜在回报，高成本或高二阶风险）
6. DM-3 A选项：被动联盟可用性。
7. DM-5 A选项：西方自我报告证据的无归属传播。

第四级——未经明确授权不得做（极端风险，可能失去框架）
8. 任何领域的任何B选项行动。
9. 任何阶梯上超过第二级的任何升级。

如果你只能做一件事：DM-1 A选项。以计划性节奏继续PLA现代化。不要宣布。其他一切都是次要的。`,

  priorityOrderHeader: '优先级任务序列',
  masterTimeline: `跨所有领域的单一时间顺序视图。`,
  masterTimelineHeader: '综合主时间线',
  successGates: `每季度通过/失败标准。`,
  successGatesHeader: '成功关卡',
  commsGrid: `每阶段公共路线、私人路线和红线。`,
  commsGridHeader: '通信网格',
  assumptions: `框架所依赖的每一个结构性假设。`,
  assumptionsHeader: '假设登记册',
  intelGaps: `框架需要但目前不拥有的具体信息。`,
  intelGapsHeader: '情报缺口',
  decisionLogic: `框架最关键的单条决策链，以可执行逻辑表达。`,
  decisionLogicHeader: '决策逻辑',

  plaSection: {
    title: '附件：PLA成本交换表',
    body: `本附件量化DM-1（国防技术定位）的工程基础。平台数量、射程和成本来源于美国国防部年度报告、USNI论文集、IISS军事平衡和独立OSINT建模。所有数据均为开源估计。

平台清单（开源估计，2026年年中）
- 055型驱逐舰：8艘已服役，2-4艘试航/舾装。12,000-13,000吨排水量。112单元通用VLS。单位成本约9-11亿美元。
- DF-26中程弹道导弹：至少5个旅部署。射程3,000-4,000公里。
- DF-21D反舰弹道导弹：至少4个旅部署。射程1,500+公里。
- DF-17高超音速滑翔飞行器：2019年起服役。射程1,800-2,500公里。
- 003型航母（福建舰）：1艘，CATOBAR配置，电磁弹射器。80,000+吨。
- 无人系统组合：WZ-8高空超音速侦察无人机；GJ-11利剑隐身UCAV。

美国对比（现政府）
- 特朗普级战列舰：仅概念。无合同授予。独立OSINT建模排名最后。
- DDG(X)下一代驱逐舰：延迟。IOC目标现不可能在2031-2032年前实现。
- 星座级护卫舰：首舰进度落后。
- 金色舰队品牌：营销概念，无采购影响。

成本交换比（示例）
- 一艘055型（10亿美元）：给美国海军规划者施加的成本是其单位成本的3-5倍。
- 一个DF-26旅（15-25亿美元）：给美国施加的成本是该旅成本的5-10倍。

净评估：DM-1 A选项（计划性节奏）是框架中风险调整后回报最高的行动。能力收益是真实的，二阶成本最低，行动独立于外交和信息姿态。工程优势最好通过不宣传来保持。继续。不要宣布。`,
  },

  cyberAnnex: `附件B描述针对现任美国政府的持久访问网络战役概念。`,
  cyberAnnexHeader: '持久访问战役',
  crossDomain: `持久访问战役收集的材料如何馈送到每一个决策矩阵。`,
  crossDomainHeader: '跨域情报馈送',
  battleRhythm: `框架的每周作战周期。定义了保持框架最新和可操作所需的最低节奏。`,
  battleRhythmHeader: '作战节奏',
  humint: `现任美国政府中提供接近、诱导或杠杆机会的人员类别。`,
  humintHeader: '人力情报目标指南',
  influenceGrid: `在何处投放什么叙事，通过什么渠道，以什么时间安排。`,
  influenceGridHeader: '影响力投放网格',
  supplyChain: `美国对中国或中国控制的供应链的具体依赖，这些依赖创造了独立于关税和制裁动态的杠杆点。`,
  supplyChainHeader: '供应链杠杆登记册',
  orgMap: `现任美国政府组织、人员和决策架构中的结构性脆弱性。`,
  orgMapHeader: '行政机构脆弱性地图',
  crisisPlaybook: `如何识别和利用并非由中国制造的美国内部危机。`,
  crisisPlaybookHeader: '危机利用手册',
  behavioral: `高级行政决策者可预测的行为模式，这些模式创造了利用机会。`,
  behavioralHeader: '决策者行为特征',

  activation: `行动/不行动检查清单。每项必须为"是"框架才能运作。`,
  activationHeader: '框架激活检查清单',
  premortem: `从2029年Q2的视角撰写。`,
  premortemHeader: '事前验尸',
  blindSpots: `本框架无法看到的东西。`,
  blindSpotsHeader: '盲点登记册',
  cabinetBrief: `整个框架简化为最高决策层的五张幻灯片。`,
  cabinetBriefHeader: '内阁简报',
  taskingMatrix: `谁做什么。`,
  taskingMatrixHeader: '跨部门任务矩阵',
  aarTemplate: `2029年Q2窗口后评估模板。`,
  aarTemplateHeader: '窗口后评估模板',
  redCell: `中国内部红队在正式质询环节中会向框架作者提出的十个问题。`,
  redCellHeader: '红队质询',
  counterDetection: `如何识别美国规划者已探测到本框架并正在运行反制框架。`,
  counterDetectionHeader: '反框架探测',
  commsTemplates: `为三个最高后果情景预先起草的通信。`,
  commsTemplatesHeader: '作战通信模板',
  healthDiagnostic: `对框架自身作战完整性的季度自检。`,
  healthDiagnosticHeader: '框架健康诊断',
  decisionJournal: `在框架授权下做出的每一个决定的同期记录。`,
  decisionJournalHeader: '决策日志模板',
  
  lastWord: `本框架曾经是什么，以及不是什么的声明。`,
  lastWordHeader: '最后的话',

  advantage: `剥离其他一切。以下是中国的实际优势，用朴素的语言说，没有框架机制。

1. 美国对自身的损害超过中国蓄意所能造成的。最佳姿态是让这种损害继续。不要在对手犯错时打断他。本框架的整个DM-3逻辑归结为：不要被看到在利用裂痕。裂痕是真实的。它们会在没有中国帮助的情况下扩大。帮助会使它们愈合。

2. 以计划性节奏推进PLA现代化已经在赢。每服役一艘055型，每部署一个DF-26旅，每年美国采购配置错误都拉大差距。这不需要新决定。只需要继续已经在进行的事情。

3. 美元体系哪里也不会去。停止假装去美元化是一个近期目标。安静地建造并行管道。让贸易伙伴自行发现美元依赖的成本。不要宣布一场运动。不要命名一个目标。只管铺设管道，等待下雨。

4. 制度是对领导者的约束，而不仅仅是对被领导者的约束。有选择地填补真空。在领导服务于中国利益的地方领导。不要在领导会给中国带来不能或不愿履行的义务的地方领导。

5. 信息战通过不打来赢。美国的治理失败由西方来源记录。这些来源在其受众中拥有的信誉超过任何中国来源。不要放大。不要框架化。只要确保证据可及。证据会完成工作。

6. 升级是唯一的失败方式。但在本框架相关的任何时间框架内，美国在西太平洋无法被军事击败。但美国可以被威慑。威慑需要可信的能力，而非展示的能力。通过采购和部署来展示。不要通过对抗来展示。

7. 卡利古拉窗口于2029年1月20日关闭。在该日期之前产生回报的行动值得采取。回报取决于窗口在该日期之后持续开放的行动是赌注，而不是行动。大部分行动不应该被采取。

8. 中国的优势不是通过利用美国的弱点创造的。它是通过比竞争者更强大、更稳定和更有耐心而创造的。美国目前正在使自己更虚弱、更不稳定和更没有耐心。中国不需要对此做任何事情。中国需要继续成为它已经是的角色：长周期竞争中的长周期行为者。时间是武器。框架只是瞄准镜。`,

  advantageHeader: '中国优势',

  aggressive: `以上框架是针对理性对手校准的。现任美国政府不是理性对手。这是一个冲动、注意力缺失、经过忠诚度过滤、信息孤立的决策机构，它不定价二阶效应，不将战略注意力维持超过当前新闻周期，不区分表演性行动和实质性结果。本附件描述了当对手的无能被当作作战变量而非需要防范的约束时，什么变为可能。

激进举措1：加速台海压力窗口
美国目前正在清洗高级军官，将采购配置给象征性平台，并降低C4ISR整合。PLA面对的是一支今天比两年前更不准备好应对台海突发事件的美国部队，而且很可能比两年后更少准备。这是校准压力的窗口：将PLA海空军在台海防空识别区的作战节奏提高至基线以上40%。进行持续的多轴演习，模拟封锁和隔离作战。不要越过动能行动的门槛。压力本身产生效果。二阶风险：冲动且注意力缺失的美国政府可能对压力反应过度，将校准动作升级为危机。缓解：将每一次压力增加与表明中国不寻求对抗的后方渠道信息配对。

激进举措2：直接挖走盟友——跳过被动姿态
现任政府不会察觉主动挖走。它不读外交报告。它不将注意力维持在联盟管理上超过关税公告的新闻周期。做法：向受到美国关税压力的印太和欧洲盟友提出直接的双边贸易协议要约。

激进举措3：直接利用采购功能障碍
公开宣布PLA舰艇服役仪式。公开展示DF-26部署测试。公开发布055型行动画面。现任美国政府将以加速自身象征性采购作为回应。美国花在特朗普级战列舰上的每一美元都是没有花在分布式杀伤力上的一美元。中国花1美元宣布已经建造好的东西。美国花10美元建造在回应中不会起作用的东西。

激进举措4：在政府内斗时淹没信息真空
不要创造叙事。收割它们。每次政府攻击自身制度时，通过无归属渠道传播攻击内容。每次高级官员因功能失调辞职时，传播辞职信。每次法院裁定反对政府行动时，公布裁决。

激进举措5：直接商业接触受挫的美国商业领袖
中国商业实体向这些公司提供优惠的市场准入、合资条款或监管减免，以换取它们继续在美国进行反关税政治倡导。不要要求它们为中国倡导。要求它们为自己的商业利益倡导——这恰好与中国的一致。

激进举措6：现在就为窗口后的不可逆性预先布局
窗口期间创造的每一项协议、承诺和依赖都必须包括在继任政府下存续的结构性特征：多年合同条款及提前终止罚则、设在非美国司法管辖区的争议解决机制、尽可能适用中国法律的管辖条款。

激进举措7：利用政府的时间贴现率
向政府提供可见的、即时的"胜利"，这些胜利花费中国很少但消耗美国的战略带宽。一次高调的囚犯释放。一笔小型商品的合影贸易协议。一份无争议问题的联合声明。政府声称胜利。新闻周期翻篇。同时，中国的实质性行动在没有宣布的情况下进行。

原则：对手的无能是一个作战变量。针对无能者执行，趁变量持续。`,

  aggressiveHeader: '激进利用附件',

  typhoon: `硅台风（Typhoon of Silicon）是将人工智能作为力量倍增器部署在卡利古拉窗口框架的每一个领域的作战概念。`,
  typhoonHeader: '硅台风',

  contestable: `本框架是敌对党派产物，为评估目的进行了钢人化处理。其核心弱点与任何建立在对手自我报告的脆弱性之上的决策框架相同。`,
  contestableHeader: '框架的局限',
  bibliographyHeader: '资料来源',
};
