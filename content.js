// Structured content for repeated sections (education, experience, projects, skills).
// Simple text (nav, hero, about, contact) lives directly in index.html via data-en / data-zh attributes.

const SITE_CONTENT = {
  education: [
    {
      logo: "assets/logos/nyu.svg",
      school: { en: "New York University, Tandon School of Engineering", zh: "纽约大学 坦登工程学院" },
      degree: { en: "Master of Science in Computer Science", zh: "计算机科学 理学硕士" },
      location: { en: "New York, NY", zh: "纽约，美国" },
      date: { en: "Sep 2025 – May 2027", zh: "2025年9月 – 2027年5月" },
      notes: [
        { en: "Coursework: Machine Learning, Practical Software Engineering, Principles of Database Systems, Design and Analysis of Algorithms.", zh: "相关课程：机器学习、软件工程、数据库系统理论、算法设计与分析。" }
      ]
    },
    {
      logo: "assets/logos/pku.svg",
      school: { en: "Peking University, School of Electronics Engineering and Computer Science", zh: "北京大学 信息科学技术学院" },
      degree: { en: "Bachelor of Science in Computer Science and Technology", zh: "计算机科学与技术 理学学士" },
      location: { en: "Beijing, China", zh: "北京，中国" },
      date: { en: "Sep 2021 – Jul 2025", zh: "2021年9月 – 2025年7月" },
      notes: [
        { en: "Co-authored “Aligning Human Motion Generation with Human Perceptions,” accepted at ICLR 2025.", zh: "共同作者论文《Aligning Human Motion Generation with Human Perceptions》收录于 ICLR 2025。" },
        { en: "Third-Class Scholarship (2022, 2023); President, Women's Volleyball Team; Publicity Director, Student Council.", zh: "连续两年荣获三等奖学金（2022、2023年）；女排队长；团委宣传部部长。" }
      ]
    },
    {
      logo: "assets/logos/pku.svg",
      school: { en: "Peking University, School of Arts", zh: "北京大学 艺术学院" },
      degree: { en: "Bachelor of Arts in Theory and History of Art", zh: "艺术史论 艺术学学士" },
      location: { en: "Beijing, China", zh: "北京，中国" },
      date: { en: "Sep 2022 – Jul 2025", zh: "2022年9月 – 2025年7月" },
      notes: []
    }
  ],

  experience: [
    {
      logo: "assets/logos/amazon.svg",
      company: { en: "Amazon Web Services (AWS)", zh: "亚马逊云科技 Amazon Web Services (AWS)" },
      role: { en: "Software Development Engineer Intern (Summer 2026)", zh: "软件开发工程师实习生（2026 暑期）" },
      location: { en: "New York, NY · On-site", zh: "纽约 · 现场办公" },
      date: { en: "Jun 2026 – Aug 2026", zh: "2026年6月 – 8月" },
      current: true,
      bullets: [
        { en: "Built an automated data-governance system on Apache Airflow that detects orphaned datasets across a large AWS Redshift and Glue warehouse by computing a dependency graph of live consumers, surfacing 2,000+ orphaned tables (100+ TB reclaimable) per monthly run, replacing what previously required manual lineage tracing across hundreds of pipelines.", zh: "在 Apache Airflow 上构建自动化数据治理系统，通过计算活跃消费者的依赖关系图，检测 AWS Redshift 与 Glue 数据仓库中的孤立数据集，每月运行可发现 2000+ 张孤立表（可回收存储 100+ TB），此前这项工作需要跨数百条流水线手动追溯血缘。" },
        { en: "Integrated an LLM agent on AWS Bedrock that triages each run into a confident-drop set (91% of cases) and a human-review set with plain-language rationales. The system only proposes cleanup via change reviews and SQL, never deletes data autonomously.", zh: "接入基于 AWS Bedrock 的 LLM 智能体，将每次运行结果分诊为高置信度可删除集合（约 91%）与需人工复核集合，并附带通俗易懂的判断依据。系统仅通过变更评审和 SQL 提出清理建议，绝不自动删除数据。" },
        { en: "Contributed beyond my own project to the team's autonomous code-review agent by diagnosing and fixing several worker defects.", zh: "在自己项目之外参与团队的自动化代码评审智能体，诊断并修复了多个 worker 缺陷。" }
      ]
    },
    {
      logo: "assets/logos/ooin.png",
      company: { en: "OOIN Media", zh: "欧印（上海）传媒科技有限公司" },
      role: { en: "AI Software Engineer Intern", zh: "AI 软件开发实习生" },
      location: { en: "New York, NY · Remote", zh: "上海，中国 · 远程" },
      date: { en: "Nov 2025 – Feb 2026", zh: "2025年11月 – 2026年2月" },
      bullets: [
        { en: "Architected a multi-modal AI video generation agent using LangGraph, integrating Gemini, sketch-based visual generation, and Veo 3 into an end-to-end script-to-video pipeline, with Remotion for programmatic scene rendering.", zh: "基于 LangGraph 构建多模态视频生成智能体，整合 Gemini、草图视觉生成模型与 Veo 3，实现“脚本到成片”的端到端流水线，并通过 Remotion 实现程序化场景渲染。" },
        { en: "Designed a dual-layer structured JSON prompt framework separating global narrative consistency from shot-level control, with an automated evaluation loop to improve generation stability.", zh: "设计基于 JSON 的双层结构化提示词框架，解耦全局叙事一致性与单镜头控制，并构建自动评估回传链路以提升生成稳定性。" },
        { en: "Built a distributed multi-GPU video platform with VRAM-aware scheduling, processing 300+ videos/hour with human-in-the-loop validation.", zh: "开发具备显存感知的分布式多 GPU 视频处理平台，单机处理能力达 300+ 视频/小时，并集成人机协作校验机制。" }
      ]
    },
    {
      logo: "assets/logos/neurovisionaries.png",
      company: { en: "The NeuroVisionaries", zh: "神览科技（北京）有限公司" },
      role: { en: "Co-Founder & Technical Lead", zh: "联合创始人 & 技术负责人" },
      location: { en: "Beijing, China · Hybrid", zh: "北京，中国 · 混合办公" },
      date: { en: "Feb 2024 – Present", zh: "2024年2月 – 至今" },
      current: true,
      bullets: [
        { en: "Built a multi-agent life science research assistant (Python/LangGraph) with an anti-hallucination writing engine for citation-grounded, JSON-bound output.", zh: "基于 Python 与 LangGraph 构建多智能体生命科学科研助手，设计反幻觉写作引擎，实现强引用对齐的结构化输出。" },
        { en: "Constructed a hybrid RAG foundation (PostgreSQL full-text search + pgvector, RRF reranking) with an async, token-aware document parsing pipeline.", zh: "搭建混合 RAG 架构（PostgreSQL 全文检索 + pgvector 向量检索，RRF 融合重排），并配套异步、Token 感知的文档解析管线。" },
        { en: "Architected a scalable FastAPI/Redis backend on Alibaba Cloud with async task orchestration and usage auditing.", zh: "基于 FastAPI 与 Redis 在阿里云上构建可扩展后端架构，实现异步任务编排与使用审计。" },
        { en: "As co-founder, raised $45K+ in funding, won the 2025 Digital Health POC Grant, and placed 3rd globally at the NUS Medical Grand Challenge.", zh: "作为联合创始人，累计筹集资金超 4.5 万美元，获 2025 数字健康 POC 专项资助，并在新加坡国立大学医学创新挑战赛中获全球第三名。" }
      ]
    },
    {
      logo: "assets/logos/bigai.png",
      company: { en: "Beijing Institute for General Artificial Intelligence (BIGAI)", zh: "北京通用人工智能研究院 BIGAI" },
      role: { en: "AI Research Assistant Intern", zh: "AI 助理研究实习生" },
      location: { en: "Beijing, China · On-site", zh: "北京，中国 · 现场办公" },
      date: { en: "Oct 2024 – May 2025", zh: "2024年10月 – 2025年5月" },
      bullets: [
        { en: "Built a UE5 indoor simulation pipeline with an extended gRPC API for synchronized audio-visual data collection.", zh: "基于 UE5 搭建室内仿真环境，扩展 gRPC API 实现音视频同步采集。" },
        { en: "Designed an attention-based audio-visual fusion network, improving event localization accuracy by 30%.", zh: "设计基于注意力机制的多模态特征融合网络，将事件定位精度提升 30%。" },
        { en: "Trained offline-RL navigation agents (CQL, DQN) achieving a 90% success rate in complex indoor navigation.", zh: "基于离线强化学习（CQL、DQN）训练视听导航智能体，在复杂室内导航任务中实现 90% 的成功率。" }
      ]
    },
    {
      logo: "assets/logos/cfcs.png",
      company: { en: "Center on Frontiers of Computing Studies, PKU", zh: "北京大学前沿计算中心 CFCS" },
      role: { en: "Student Research Assistant", zh: "学生研究助理" },
      location: { en: "Beijing, China · On-site", zh: "北京，中国 · 现场办公" },
      date: { en: "Feb 2023 – Jun 2024", zh: "2023年2月 – 2024年6月" },
      bullets: [
        { en: "Built a Docker-based training stack reproducing motion generation baselines (MDM, FLAME); curated 70K+ motion sequences and 50K+ human preference annotations.", zh: "基于 Docker 构建训练集群，复现 MDM、FLAME 等动作生成基线模型；清洗整理 7 万+ 动作序列与 5 万+ 人类偏好标注。" },
        { en: "Developed MotionCritic, a Transformer-based reward model achieving 85%+ agreement with human evaluators.", zh: "开发基于 Transformer 的奖励模型 MotionCritic，与人类评估者的一致性达 85% 以上。" },
        { en: "First to apply RLHF (PPO + ReFL) to motion diffusion models, aligning generation with human perception in 800 fine-tuning steps. Co-authored paper accepted at ICLR 2025.", zh: "首次将 RLHF（PPO + ReFL）引入动作扩散模型，仅需 800 步微调即实现生成结果与人类感知对齐。相关成果发表于 ICLR 2025。" }
      ]
    }
  ],

  projects: [
    {
      title: { en: "MotionCritic & RLHF for Motion Diffusion", zh: "MotionCritic 与动作扩散模型的 RLHF 对齐" },
      tag: { en: "ICLR 2025", zh: "ICLR 2025" },
      link: "https://motioncritic.github.io/",
      desc: { en: "A Transformer-based reward model paired with PPO/ReFL optimization to align text-to-motion generation with human perceptual judgment, reaching 85%+ agreement with human evaluators in just 800 fine-tuning steps.", zh: "基于 Transformer 的奖励模型，结合 PPO / ReFL 优化算法，将文本到动作生成与人类感知对齐，仅需 800 步微调即可达到 85% 以上的人类评估一致性。" },
      tags: ["PyTorch", "RLHF", "Diffusion Models", "Transformer"]
    },
    {
      title: { en: "Multi-Agent Research Assistant", zh: "多智能体科研助手" },
      tag: { en: "The NeuroVisionaries", zh: "神览科技" },
      link: "https://www.somadisk.com/",
      desc: { en: "A LangGraph-powered research assistant combining Q&A, document drafting, and PubMed integration, with a hybrid RAG backend and anti-hallucination writing engine for citation-grounded output.", zh: "基于 LangGraph 的科研助手，集问答、文档撰写与 PubMed 集成于一体，配备混合 RAG 架构与反幻觉写作引擎，确保输出强引用对齐。" },
      tags: ["LangGraph", "RAG", "PostgreSQL", "FastAPI"]
    },
    {
      title: { en: "Video Ad Generation Pipeline", zh: "视频广告生成流水线" },
      tag: { en: "OOIN Media", zh: "欧印传媒" },
      desc: { en: "An end-to-end multi-modal agent pipeline turning text concepts into fully synthesized video ads, orchestrating Gemini, Veo 3, and Remotion across a VRAM-aware, distributed multi-GPU platform processing 300+ videos/hour.", zh: "端到端多模态智能体流水线，将文本创意转化为完整视频广告，整合 Gemini、Veo 3 与 Remotion，运行于显存感知的分布式多 GPU 平台，单机处理能力达 300+ 视频/小时。" },
      tags: ["LangGraph", "Gemini", "Veo 3", "Distributed Systems"]
    }
  ],

  // Placeholder tiles until real photos + captions are added.
  travel: [
    { src: "assets/travel/travel-01.jpg", location: { en: "Magic Kingdom, Orlando", zh: "奥兰多 · 魔法王国" } },
    { src: "assets/travel/travel-02.jpg", location: { en: "Machu Picchu, Peru", zh: "秘鲁 · 马丘比丘" } },
    { src: "assets/travel/travel-03.jpg", location: { en: "Pyramids of Giza, Egypt", zh: "埃及 · 吉萨金字塔" } },
    { src: null, location: { en: "Photo coming soon", zh: "照片待添加" } },
    { src: null, location: { en: "Photo coming soon", zh: "照片待添加" } },
    { src: null, location: { en: "Photo coming soon", zh: "照片待添加" } }
  ],

  skills: [
    { name: { en: "Programming", zh: "编程语言" }, items: ["Python", "C/C++", "Go", "Java", "JavaScript", "HTML/CSS"] },
    { name: { en: "AI Frameworks", zh: "AI 框架与工具" }, items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "Scikit-learn"] },
    { name: { en: "AI Domains", zh: "AI 核心领域" }, items: ["LLMs", "Multi-Agent Systems", "RLHF", "Diffusion Models", "RAG", "Reinforcement Learning", "Multimodal Learning"] },
    { name: { en: "Infrastructure", zh: "架构与基础设施" }, items: ["Docker", "Distributed Systems", "Multi-GPU", "PostgreSQL / pgvector", "MySQL", "Redis", "AWS", "Git"] },
    { name: { en: "Full-Stack", zh: "全栈开发" }, items: ["React", "Node.js", "Django", "FastAPI", "RESTful APIs"] }
  ]
};
