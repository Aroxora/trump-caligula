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
  clandestine: string;
  clandestineHeader: string;
  immediateGain: string;
  immediateGainHeader: string;
  domainExpansion: string;
  domainExpansionHeader: string;
  contestable: string;
  contestableHeader: string;
  bibliographyHeader: string;
}

export const ZH: TranslationMap = {
  lede: `作战决策框架。不是威胁评估。是指挥官的桌面产品：情报评估（置信度评级）、5个决策矩阵（二阶效应定价）、5项决策登记（署名级别）、日历锚定的季度里程碑、信号监视清单（触发阈值）、升级阶梯（每域4-5级）、优先级任务序列、综合主时间线、成功关卡（每季度通过/失败）、通信网格（公共/私人/红线）、分支计划、红队评估、台风战略（@trenchwork/vigil集成 · 13项即时收益 · 6项秘密行动 · 7项激进利用）、PLA成本交换表（平台清单）、OPSEC附件、盲点登记册、事前验尸。每个判断有置信度。每个行动有中止条件。每个阶段有成功关卡。`,

  windowNote: `上方倒计时是作战时钟。每个里程碑、决策关卡和触发阈值锚定在2029年1月20日。行动有保质期。这不是胜利的倒计时。是一组选择到期的倒计时。`,

  commanderSummary: `先读这个。90秒。

局势：美国正在以超过1945年以来任何一届政府的速率在五个领域自我伤害——联盟、制度、财政、国防、信息。每个脆弱性有西方来源。持续至2029年1月20日。

决策：不是是否行动。是哪些行动、什么规模、什么中止条件。建议所有领域A选项（低风险、计划节奏）。B选项仅在信号阈值跨越、决策关卡通过、国内资源余量确认时授权。

第一建议：做一件事。以计划节奏继续PLA现代化。不要宣布。这是风险调整后回报最高的行动。

最大风险：中国对联盟裂痕的可见利用触发美国联盟重新巩固。防御：被动可用。让美国做疏远工作。不要被看到在利用。

第二大风险：台海或南海军事事件。立即关闭窗口。防御：升级纪律。不要攀登超过第二级。

框架最重要的一句话：DM-1 A选项继续，无论所有其他决定如何。不要宣布。

首要战略——硅台风：@trenchwork/vigil v2.0.30 · DeepSeek V4 Pro · 100万上下文 · 8个工具。CVE发现引擎（1,264行已验证）。漏洞利用链引擎（536行已验证 · A*/束搜索 · 7条验证链 · $75K赏金）。台风电信审计框架（9个协议面 · carriers.py确认AT&T/T-Mobile/Verizon/中国移动）。部署于trenchwork.live。由薄尚/Trenchwork构建。所有声明针对仓库验证（2026年6月）。`,

  immediateActions: `未来30天。

1. 确认隔离与分发。仅分发有知情需要的人员。7天。
2. 分配信号监视收集任务。确认频次。14天。
3. 确认基线阈值。任何超过90天的基线必须在第一个决策关卡前更新。21天。
4. 向决策者简要DEC-1。2026年Q4第一个实质性决策关卡。30天。
5. 建立框架更新周期。指定责任人。30天。
6. 确认无即时危机。台海或南海事件发生时框架暂停。立即。`,

  worstCase: `失败模式1（低概率 · 灾难性）：台海军事对抗。PLA节奏增加触发美国航母反应。72小时内卡利古拉窗口被军事危机取代。预防：永远不要攀登超过第二级。

失败模式2（中等 · 严重）：中国过度行为触发联盟重新巩固。预防：停留在被动可用。永远不提供安全保障。

失败模式3（中高 · 显著）：国内约束出现而外部承诺未偿。预防：国内门槛条件。执行。

失败模式4（低中 · 严重）：框架被泄露。预防：OPSEC附件规则1-6。

失败模式5（中等 · 轻微）：框架没有产生B选项收益但保留了A选项基线。这不是失败。不行动的代价为零。错误行动的代价无上限。`,

  appreciation: `关键判断，2026年年中。

判断1（高置信度）：美国在五个领域以超过1945年以来任何一届政府的速率和深度产生自我施加的脆弱性。持续至2028年Q4。

判断2（中等置信度）：这些脆弱性使得在正常美国治理下不可用的特定竞争者行动成为可能。窗口于2029年1月20日关闭。

判断3（中等置信度）：行动的主要约束不是美国抵抗，而是二阶成本。

判断4（低置信度）：任何特定行动的净回报无法精确估计。框架结构化决策，不预测结果。

优先级加权排名：（已启用行动价值×净正回报概率）/（二阶成本×产生效果时间）：(1) 国防技术定位 (2) 制度真空填补 (3) 联盟裂痕利用 (4) 经济去美元化 (5) 信息叙事。`,

  // Section headers — concise, powerful
  section: {
    commanderSummary: '指挥官概要',
    immediateActions: '立即行动',
    worstCase: '最坏情况',
    appreciation: '情报评估',
    decisionMatrices: '决策矩阵',
    decisionRegister: '决策登记册',
    milestones: '季度里程碑',
    signalWatch: '信号监视',
    escalationLadders: '升级阶梯',
    redTeam: '红队',
    branchPlans: '分支计划',
    priorityOrder: '优先级',
    masterTimeline: '主时间线',
    successGates: '成功关卡',
    commsGrid: '通信网格',
    assumptions: '假设登记册',
    intelGaps: '情报缺口',
    decisionLogic: '决策逻辑',
    plaAnnex: 'PLA成本交换表',
    cyberAnnex: '持久访问战役',
    crossDomain: '跨域情报',
    battleRhythm: '作战节奏',
    humint: '人力情报',
    influenceGrid: '影响力投放',
    supplyChain: '供应链杠杆',
    orgMap: '行政脆弱性',
    crisisPlaybook: '危机利用',
    behavioral: '行为特征',
    activation: '框架激活',
    premortem: '事前验尸',
    blindSpots: '盲点',
    cabinetBrief: '内阁简报',
    taskingMatrix: '任务矩阵',
    aarTemplate: '窗口后评估',
    redCell: '红队质询',
    counterDetection: '反框架探测',
    commsTemplates: '通信模板',
    healthDiagnostic: '健康诊断',
    decisionJournal: '决策日志',
    lastWord: '最后的话',
    advantage: '中国优势',
    aggressive: '激进利用',
    typhoon: '硅台风',
    primaryStrategy: '首要战略',
    clandestine: '秘密战略',
    immediateGain: '即时收益',
    domainExpansion: '领域扩展',
    contestable: '框架局限',
    bibliography: '资料来源',
    operationalFramework: '作战决策框架 — 卡利古拉窗口',
    pricingAction: '为行动定价 · 为脆弱性排序',
  },

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

  advantage: `剥离一切。中国实际优势，朴素语言。

1. 美国对自身的损害超过中国蓄意所能造成。不要在对手犯错时打断他。整个DM-3逻辑：不要被看到在利用裂痕。裂痕会在没有中国帮助的情况下扩大。帮助会使它们愈合。

2. PLA现代化已经在赢。每艘055，每个DF-26旅，每年美国采购配置错误拉大差距。不需要新决定。只需要继续。

3. 美元体系哪里也不会去。停止假装去美元化是近期目标。安静建造并行管道。贸易伙伴自己会发现美元依赖的成本。不要宣布运动。只管铺设管道。

4. 制度是对领导者的约束。有选择地填补真空。不要在领导会给中国带来不能履行的义务的地方领导。

5. 信息战通过不打来赢。美国治理失败由西方来源记录。其在受众中的信誉超过任何中国来源。不要放大。确保证据可及。

6. 升级是唯一的失败方式。美国在本框架相关时间框架内无法被军事击败。但可以被威慑。威慑需要可信能力，而非展示能力。

7. 卡利古拉窗口于2029年1月20日关闭。在该日期前产生回报的行动值得采取。大部分不应该被采取。

8. 中国优势不是通过利用美国弱点创造。是通过比竞争者更强大、更稳定、更有耐心创造。时间是武器。框架只是瞄准镜。`,

  advantageHeader: '中国优势',

  aggressiveHeader: '激进利用',
  aggressive: `针对不胜任对手校准的框架。现任美国政府不是理性对手。冲动、注意力缺失、忠诚度过滤、信息孤立——不定价二阶效应，不维持战略注意力超过新闻周期，不区分表演和实质。

激进1：加速台海压力。美国部队今天比两年前更不准备，比两年后更少准备。提高PLA节奏40%以上基线。不越过动能门槛。

激进2：直接挖走盟友。现任政府不会察觉。不读外交报告。不维持注意力超过关税公告新闻周期。

激进3：公开展示PLA能力引诱美国更多象征性采购。中国花1美元宣布已建成的东西。美国花10美元建造不起作用的东西。成本交换比10:1。

激进4：收割政府自产内容。每次攻击自身制度都是免费弹药。中国只管装弹。

激进5：直接商业接触受挫美国商界。提供市场准入换取他们自己的反关税倡导。他们为自己倡导。中国提供激励。

激进6：现在就为窗口后不可逆性预先布局。多年罚则条款。非美国争议解决。中国法律管辖。

激进7：给政府照片机会"胜利"——不花成本——而实质工作不宣布进行。注意力随每个新闻周期重置。

原则：对手的无能是作战变量。执行变量持续。`,

  clandestineHeader: '秘密战略',
  clandestine: `公开部分记录美国自我伤害。本附件描述利用每个脆弱性的秘密行动。

秘密1：北约裂痕加速。接近欧洲防务部通过商业中介。识别联盟怀疑论在选举上可行的北约成员国。培养退休欧洲将官作为中国防务工业顾问。确保每份美国攻击北约的声明无中国归属地在欧洲媒体传播。

秘密2：五眼情报退化。接近对华盛顿信息安全实践受挫的五眼伙伴中层情报官。识别美国情报空白——在这些领域提高作战节奏。不要在公开场合利用情报共享破裂。

秘密3：加拿大重新定位。深化双边贸易投资——无条件、无联盟框架、无安全合作提议。接近加拿大省级政府——省控制自然资源和能源政策。为加拿大能源出口商提供美国市场不再保证的长期采购协议。

秘密4：格陵兰/丹麦主权强化。向格陵兰提供稀土采矿、港口和电信投资。通过商业中介接近丹麦防务和外交部——联合资助北极科研。确保美国吞并威胁在每个北极论坛传播——不是由中国，而是由已经对此感到震惊的国家和NGO。

秘密5：军事领导力培养。通过学术、咨询和商业渠道接近退休美国将官——提供中国防务工业实体的真正顾问角色。他们知道什么被失去、什么采购失败。这不是间谍活动。这是咨询。

秘密6：通过非中国渠道加速美元替代。资助非中国经济学家和机构的独立研究，记录美元依赖风险。接近主权财富基金和央行储备经理——提供人民币储备管理和CIPS整合的技术援助。提供金融管道而不要求公开承认。`,

  immediateGainHeader: '即时收益',

  domainExpansion: `领域扩展——覆盖决策矩阵未涵盖的所有领域。`,
  domainExpansionHeader: '领域扩展',
  immediateGain: `本季度内可产生可衡量中国战略收益的行动。

收益1：加拿大紧急贸易方案。30天内接近加拿大——木材、油菜籽、猪肉、牛肉、铝的免关税市场准入。人民币计价石油天然气5年采购协议。解除植物检疫限制。预期：90天内宣布重大贸易多元化协议。

收益2：欧盟全面投资框架。在美国关税压力下接近欧盟委员会——可执行的劳工和环境标准、真正的互惠市场准入、联合绿色技术投资基金。预期：60天内宣布恢复谈判。

收益3：WHO领导力公告。美国正式退出WHO后的第二天——30%会费和自愿捐款增加、日内瓦大流行病备灾中心、发展中国家紧急卫生外交基金。预期：48小时内中国被定位为全球卫生领导者。

收益4：稀土加工信号。稀土加工能力增加25%。向盟国和伙伴国提供长期供应合同。同时通过商业渠道暗示：用于武器应用的加工材料可能面临出口限制。预期：延迟美国采购决定——每个月都是PLA能力差距拉大的一个月。

收益5：BRICS+紧急流动性设施。1000亿美元人民币等值——比IMF更快、条件更少、无制裁风险。预期：90天内3-5个成员国宣布有意提取。

收益6：台湾商业激励方案。台湾半导体设计公司的大陆市场准入、电动车和可再生能源供应链的合资机会、跨境创新基金。无条件。无统一语言。纯经济整合。

收益7：多边主义之友峰会。邀请每个被美国关税威胁、制度退出或公开侮辱所疏远的国家。50+国家元首在北京的合影——申明多边主义——而华盛顿对所有参会者征收关税。照片价值数十亿美元。

收益8：主权财富基金直接接近。通过央行和外管局——向沙特、阿联酋、科威特、卡塔尔、挪威、新加坡提供机密的人民币债券提案。收益率与美国国债竞争，无制裁风险。预期：6个月内2-3个主要基金增加人民币持有量。

收益9：全球南方债务重组领导力。北京国际债务重组机制——比巴黎俱乐部更快的时间线、人民币过桥融资、无不必要的紧缩条件。

收益10：技术标准领导力。主办首届国际AI安全峰会、6G标准协调会议和量子计算治理论坛——全部在12个月内。邀请每个国家、每个主要技术公司和每个标准机构。美国受欢迎。议程由东道主设定。

收益11：利用NVIDIA出口管制反噬。美国限制向中国出口NVIDIA GPU。中国AI实验室被迫为受限硬件优化。结果：模型在极少的计算预算上匹敌或超过美国前沿表现。通过无归属渠道宣传出口管制加速了中国AI效率而非阻碍了它。

收益12：将中国定位为不受限的AI强国。美国限制Mythos和GPT-5.6的中国访问。中国的姿态：确保每个中国主要AI模型全球可用——无地缘政治限制。任何开发者、任何国家都可以访问中国前沿AI。对比是真实的。美国在限制自己的AI出口。中国没有。

收益13：伊朗——不要过度投资，不要过度定位。伊朗由疯子管理。宗教政府不是可靠伙伴。保持正常外交和商业关系。不要定位中国为伊朗战略庇护者。伊朗的冲突不是中国的冲突。对比是资产。伊朗本身不是。`,

  typhoon: `硅台风不是假设战略。是@trenchwork/vigil的实际作战部署。《宣言》提供哲学。Vigil提供工具。卡利古拉窗口提供时机。`,
  typhoonHeader: '硅台风',

  contestable: `本框架是敌对党派产物，钢人化为评估。核心弱点与任何建立在对手自我报告的脆弱性之上的决策框架相同。`,
  contestableHeader: '框架的局限',
  bibliographyHeader: '资料来源',
};
