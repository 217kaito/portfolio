export type Bilingual = { ja: string; en: string };

export const site = {
  name: { ja: "Kaito", en: "Kaito" },
  nameLatin: "Kaito",
  tagline: {
    ja: "深層学習を、もっと速く。",
    en: "Making deep learning faster.",
  },
  subTagline: {
    ja: "HPC × 深層学習アクセラレータの研究者 / ソフトウェアエンジニア",
    en: "HPC x DL accelerator researcher / Software engineer",
  },
  email: "y.kaito4510@gmail.com",
  github: "https://github.com/217kaito",
};

export const nav = [
  { id: "about", label: { ja: "About", en: "About" } },
  { id: "skills", label: { ja: "Skills", en: "Skills" } },
  { id: "experience", label: { ja: "Experience", en: "Experience" } },
  { id: "research", label: { ja: "Research", en: "Research" } },
  { id: "projects", label: { ja: "Projects", en: "Projects" } },
  { id: "publications", label: { ja: "Publications", en: "Publications" } },
  { id: "contact", label: { ja: "Contact", en: "Contact" } },
];

export const about = {
  intro: {
    ja: "はじめまして、Kaitoと申します。修士課程で情報科学を専攻し（2027年3月修了予定）、高性能並列計算システム研究室に所属しています。Preferred Networks（PFN）との共同研究として、深層学習アクセラレータ MN-Core のソフトウェアレベル最適化に取り組み、HPC Asia 2026 にて査読付きポスター発表を行いました。",
    en: "Hi, I'm Kaito. I'm an M.S. candidate in Computer Science (expected Mar 2027) at the High-Performance Parallel Computing Systems Laboratory. I conduct joint research with Preferred Networks (PFN) on software-level optimization for the MN-Core deep learning accelerator, with a peer-reviewed poster presented at HPC Asia 2026.",
  },
  intro2: {
    ja: "研究と並行して、ソフトウェアエンジニア／プロジェクトマネージャーとして5名規模のSaaS開発チームをリード。AI活用開発（Claude Code）とテスト駆動開発の導入により期日通りのリリースを実現し、AWS EC2上での本番アプリケーション運用（認証基盤導入・障害調査・セキュリティ強化）も経験しています。",
    en: "Alongside research, I work as a software engineer and project manager, leading a 5-member SaaS development team to an on-time release by introducing AI-assisted coding (Claude Code) and test-driven development. I also have hands-on AWS experience operating a production application on Amazon EC2, including authentication rollout, incident investigation, and security hardening.",
  },
  facts: [
    {
      label: { ja: "学歴", en: "Education" },
      items: [
        {
          ja: "明治大学 理工学研究科 情報科学専攻（2027年3月修了予定）",
          en: "M.S. in Computer Science, Meiji University (expected Mar 2027)",
        },
        {
          ja: "明治大学 理工学部 情報科学科 卒業（2025年3月）",
          en: "B.S. in Computer Science, Meiji University (Mar 2025)",
        },
      ],
    },
    {
      label: { ja: "資格", en: "Certifications" },
      items: [
        {
          ja: "基本情報技術者試験 合格（2024年10月）",
          en: "Fundamental Information Technology Engineer Examination (FE), IPA Japan — Oct 2024",
        },
      ],
    },
    {
      label: { ja: "趣味", en: "Interests" },
      items: [
        {
          ja: "映画鑑賞・読書・ランニング",
          en: "Movies, reading, and running",
        },
      ],
    },
  ],
};

export const skills = [
  {
    category: { ja: "プログラミング言語", en: "Programming" },
    icon: "code",
    items: [
      { name: "Python", note: { ja: "研究・ML最適化", en: "Research / ML optimization" } },
      { name: "TypeScript / JavaScript", note: { ja: "SaaS開発で実務使用", en: "Production SaaS development" } },
      { name: "C / C++", note: { ja: "アルゴリズム実装", en: "Algorithms & systems" } },
      { name: "Java", note: { ja: "動的計画法など", en: "DP algorithms etc." } },
      { name: "Verilog HDL", note: { ja: "MPU実装・TA指導", en: "MPU design / TA" } },
    ],
  },
  {
    category: { ja: "クラウド / インフラ", en: "Cloud / Infrastructure" },
    icon: "cloud",
    items: [
      { name: "Amazon EC2", note: { ja: "本番運用経験", en: "Production operations" } },
      { name: "AWS Systems Manager", note: { ja: "本番調査・運用", en: "Ops & investigation" } },
      { name: "Linux", note: { ja: "", en: "" } },
      { name: "Docker", note: { ja: "", en: "" } },
      { name: "MySQL / PostgreSQL", note: { ja: "", en: "" } },
    ],
  },
  {
    category: { ja: "開発手法 / ツール", en: "Development" },
    icon: "tools",
    items: [
      { name: "Next.js / Node.js (PM2)", note: { ja: "本番デプロイ", en: "Production deploys" } },
      { name: "Git / GitHub", note: { ja: "", en: "" } },
      { name: "TDD", note: { ja: "チーム導入をリード", en: "Led team adoption" } },
      { name: "Claude Code / Cursor", note: { ja: "AI活用開発", en: "AI-assisted development" } },
    ],
  },
];

export const timeline = [
  {
    period: { ja: "2025年2月 – 現在", en: "Feb 2025 – Present" },
    title: {
      ja: "ソフトウェアエンジニア / プロジェクトマネージャー",
      en: "Software Engineer / Project Manager",
    },
    org: { ja: "Unson LLC · インターン", en: "Unson LLC · Internship" },
    tags: ["Next.js", "TypeScript", "AWS EC2", "TDD", "Claude Code"],
    details: [
      {
        ja: "営業自動化SaaS：商材・顧客ごとに営業メッセージを自動生成し、開封率などのKPIから生成戦略を改善するSaaSの開発をリード。5名の開発チームをPMとしてマネジメント。",
        en: "Sales-automation SaaS: Led delivery of a SaaS that auto-generates tailored sales messages and refines its strategy from KPIs such as open rates; managed the 5-member development team as PM.",
      },
      {
        ja: "「機能が多くて使い方がわからない」という顧客の声から初回導線コストを根本原因と特定し、ネクストアクション通知とUIフローを導入。顧客から直接感謝の言葉をいただいた。",
        en: "Redesigned the product experience after customer feedback: identified first-time navigation cost as the root issue and introduced guided next-action notifications, earning direct thanks from the customer.",
      },
      {
        ja: "リリース期日が危ぶまれた際、原因を開発プラクティスの不統一と特定。規約ベースのAI活用開発（Claude Code）とTDDを自ら率先導入・勉強会で定着させ、issue消化速度を安定化させ期日通りのリリースを達成。",
        en: "When the deadline was at risk, introduced convention-based AI-assisted coding (Claude Code) and TDD, adopting them first myself and running study sessions; issue throughput stabilized and the team shipped on time.",
      },
      {
        ja: "退院支援SaaS：Next.js製アプリをEC2（東京リージョン）+PM2で本番運用。WorkOS認証の本番導入をリードし、フェイルクローズドな起動チェックやSecure Cookieのデフォルト有効化を実装。リバースプロキシ配下の認証リダイレクト障害をNext.jsのrequest.urlの挙動まで遡って根本解決。",
        en: "Hospital discharge-support SaaS: Operate a Next.js app on EC2 (Tokyo) with PM2. Led the WorkOS auth rollout with fail-closed startup checks and Secure cookies by default; root-caused a reverse-proxy auth redirect incident down to Next.js request.url behavior and fixed it without trusting Host headers.",
      },
    ],
  },
  {
    period: { ja: "2025年4月 – 現在", en: "Apr 2025 – Present" },
    title: { ja: "ティーチングアシスタント", en: "Teaching Assistant" },
    org: { ja: "明治大学", en: "Meiji University" },
    tags: ["Verilog HDL", "FFT"],
    details: [
      {
        ja: "ハードウェア実験（Verilog HDLによるMPU実装）と情報科学実験（FFTの基礎と応用）の2科目を担当。自身の受講経験を活かし、学生の理解度に合わせた説明で質問対応。",
        en: "Support a hardware laboratory (MPU implementation in Verilog HDL) and a CS laboratory (FFT fundamentals and applications), tailoring explanations to each student's level of understanding.",
      },
    ],
  },
  {
    period: { ja: "2024年10月 – 2025年2月", en: "Oct 2024 – Feb 2025" },
    title: { ja: "データサイエンティスト", en: "Data Scientist" },
    org: { ja: "株式会社WonderPalette · インターン", en: "WonderPalette Inc. · Internship" },
    tags: ["Python", "Forecasting"],
    details: [
      {
        ja: "スーパーマーケットの売上最大化を目的に、商品・時間帯ごとの値引き率を最適化するシステムを構築。値引き率ごとの売上予測モデルを担当し、データ整備が不十分な状況でもエンドツーエンドでシステムを完成。",
        en: "Built a system optimizing discount rates per product and time slot to maximize supermarket revenue; owned the sales-forecasting model and completed the end-to-end system despite poorly maintained historical data.",
      },
    ],
  },
];

export const research = [
  {
    badge: { ja: "修士研究（PFNとの共同研究）", en: "M.S. Research (joint with PFN)" },
    title: {
      ja: "深層学習アクセラレータMN-Coreの推論性能向上を目的としたMLSDK最適化",
      en: "MLSDK Optimization for Improving Inference Performance of the MN-Core Accelerator",
    },
    paragraphs: [
      {
        ja: "高い電力効率を誇る深層学習アクセラレータ MN-Core は、命令制御やデータ管理をハードウェアの代わりにソフトウェア（コンパイラ／ランタイムスタックである MLSDK）が担う設計のため、性能発揮にはソフトウェアレベルの最適化が不可欠です。モデル構造や実行条件によって変化するMN-Coreの計算特性を測定・分析し、推論性能のボトルネックとなるMLSDKの未最適化箇所を特定・改善しています。",
        en: "MN-Core is a highly power-efficient deep learning accelerator whose instruction control and data management are handled by software (MLSDK, its compiler/runtime stack) instead of hardware. I measure and analyze MN-Core's computational characteristics, which vary with model architecture and execution conditions, to locate and improve unoptimized parts of MLSDK that bottleneck inference performance.",
      },
      {
        ja: "MN-Coreの多段階中間表現（L3IR / L2IR / L1IR）を用いて深層学習レイヤーを実装し、ソフトウェアレベルの最適化を可能にするアプローチを追求。目標設定から実装まで研究サイクルを自ら主導し、PFNのエンジニア・指導教員・研究室メンバーとの議論を通じて方向性を磨いています。この一環として、MN-Core 2上でのResNet50のバッチサイズがスループット・レイテンシに与える影響を分析し、HPC Asia 2026で査読付きポスター発表を行いました。",
        en: "I pursue an approach of implementing deep learning layers with MN-Core's multi-level intermediate representations (L3IR / L2IR / L1IR) to enable software-level optimizations, driving the research cycle from goal setting to implementation through discussions with PFN engineers, my advisor, and lab members. As part of this work, I analyzed batch size effects on throughput and latency for ResNet50 on MN-Core 2, presented as a peer-reviewed poster at HPC Asia 2026.",
      },
    ],
    tags: ["MN-Core", "MLSDK", "Compiler", "HPC", "L3IR/L2IR/L1IR"],
  },
  {
    badge: { ja: "学部研究", en: "Undergraduate Research" },
    title: {
      ja: "軌道予測用深層学習モデルPECNetの推論時間短縮",
      en: "Reducing Inference Time of PECNet, a Trajectory-Prediction Model",
    },
    paragraphs: [
      {
        ja: "大規模避難シミュレーションへの応用を目的に、深層学習モデル PECNet の改善に取り組みました。従来のマルチエージェントシステムでは避難行動を十分に再現できず、高精度な経路予測を行うPECNetが有望である一方、大規模環境では推論時間の増大によりリアルタイム性が低下する課題がありました。",
        en: "Aiming at large-scale evacuation simulation, I worked on improving PECNet. Conventional multi-agent systems with hand-crafted rules could not reproduce evacuation behavior well; PECNet's accurate trajectory prediction is promising, but inference time grows prohibitively at scale.",
      },
      {
        ja: "Optuna を用いて推論時間と精度に影響するハイパーパラメータを最適化。計算機状態による揺らぎに対し、複数回測定した四分位範囲内データの平均で評価する方法で信頼性を確保し、精度を維持したまま推論時間を約7.3%短縮するパラメータ値の特定に成功しました。",
        en: "Using Optuna, I optimized hyperparameters affecting inference time and accuracy. To handle measurement noise, I evaluated each configuration by averaging interquartile-range data over repeated runs, and successfully identified parameter values that reduce inference time by about 7.3% while maintaining accuracy.",
      },
    ],
    tags: ["PECNet", "Optuna", "Hyperparameter Optimization", "Simulation"],
  },
];

export const projects = [
  {
    title: {
      ja: "Optunaによるハイパーパラメータ最適化",
      en: "Hyperparameter Optimization with Optuna",
    },
    description: {
      ja: "深層学習モデルの推論時間と精度を対象に、Optunaを用いたハイパーパラメータ最適化を実践したリポジトリ。学部研究のベースとなった取り組みです。",
      en: "Hands-on hyperparameter optimization for deep learning models using Optuna, targeting inference time and accuracy. The foundation of my undergraduate research.",
    },
    tags: ["Python", "Optuna", "PyTorch"],
    url: "https://github.com/217kaito/Optuna-Practice",
  },
  {
    title: {
      ja: "最小コスト三角分割の動的計画法",
      en: "Minimum-Cost Polygon Triangulation (DP)",
    },
    description: {
      ja: "凸多角形の最小コスト三角分割問題に対する動的計画法アルゴリズムをJavaで実装。アルゴリズム設計の演習課題です。",
      en: "Dynamic-programming algorithm for the minimum-cost triangulation of a convex polygon, implemented in Java as an algorithm-design exercise.",
    },
    tags: ["Java", "Algorithms", "DP"],
    url: "https://github.com/217kaito/practice-programming/tree/main/Assignment/2022/DSA-pratical-training2",
  },
  {
    title: {
      ja: "値引き率最適化システム",
      en: "Discount Rate Optimization",
    },
    description: {
      ja: "スーパーマーケットの売上最大化を目的に、商品・時間帯ごとの値引き率を最適化するシステム。値引き率ごとの売上を予測するモデルを実装しています。",
      en: "A system that optimizes discount rates per product and time slot to maximize supermarket revenue, with a forecasting model that predicts sales at each discount rate.",
    },
    tags: ["Python", "Jupyter Notebook", "Forecasting"],
    url: "https://github.com/217kaito/discount_optimization",
  },
];

export const publications = [
  {
    title:
      "Batch Size Effects on Throughput and Latency for ResNet50 on MN-Core 2",
    venue: { ja: "HPC Asia 2026", en: "HPC Asia 2026" },
    type: {
      ja: "ポスター発表（査読付き）",
      en: "Poster presentation (peer-reviewed)",
    },
    year: "2026",
  },
  {
    title: {
      ja: "軌道予測用深層学習モデルPECNetに対する推論時間短縮を目的としたハイパーパラメータ最適化",
      en: "Hyperparameter Optimization for Reducing Inference Time of PECNet, a Deep Learning Model for Trajectory Prediction",
    },
    venue: { ja: "SMASH25 Summer Symposium", en: "SMASH25 Summer Symposium" },
    type: { ja: "口頭発表", en: "Oral presentation (in Japanese)" },
    year: "2025",
  },
];
