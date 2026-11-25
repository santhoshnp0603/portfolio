export interface ToolItem {
  name: string;
  category: string;
  icon: string;
}

export interface ProblemBlock {
  number: string;
  title: string;
  explanation: string;
  tag: string;
  visualTitle: string;
  visualMetrics: string;
}

export interface SolutionBlock {
  number: string;
  title: string;
  strategy: string;
  uxImprovements: string;
  architecture: string;
  wireframing: string;
  visualDecisions: string;
  interaction: string;
  implementation: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  keyDeliverable: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  type: 'full-width' | 'desktop-grid' | 'mobile-mockup' | 'system-tokens' | 'interaction';
  mockupKind: 'saas' | 'health' | 'edtech' | 'robotics' | 'luxury' | 'fintech' | 'tokens' | 'wireframe';
  viewportType?: 'mobile' | 'web';
}

export interface ProjectDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: 'SaaS & Web' | 'Healthcare' | 'Mobile App' | 'Corporate' | 'E-Commerce' | 'Fintech';
  filterCategory: 'saas' | 'health' | 'mobile' | 'corporate' | 'ecommerce' | 'fintech';
  year: string;
  role: string;
  projectType: string;
  timeline: string;
  teamSize: string;
  deliverables: string[];
  shortDesc: string;
  heroHeadline: string;
  accentColor: string;
  overviewDescription: string;
  targetAudience: string;
  overallObjective: string;

  toolsUsed: ToolItem[];
  challenges: ProblemBlock[];
  solutions: SolutionBlock[];
  processSteps: ProcessStep[];
  gallery: GalleryItem[];
  impactMetrics: { value: string; label: string; description: string }[];
  achievements: string[];
  testimonial: { quote: string; author: string; role: string };
  mockupType: 'saas' | 'health' | 'edtech' | 'robotics' | 'luxury' | 'fintech';
  platformType: 'web' | 'mobile';
  previewImage: string;
  webScreenshot?: string;
  mobileScreenshot?: string;
  browserUrl?: string;
}

export const allProjects: ProjectDetail[] = [
  {
    id: 'chronos-ai',
    slug: 'chronos-ai',
    number: '01',
    title: 'Chronos AI — Predictive Operations Platform',
    category: 'SaaS & Web',
    filterCategory: 'saas',
    year: '2024 — 2025',
    role: 'Lead UI/UX & Systems Designer',
    projectType: 'Enterprise Cloud SaaS & Telemetry Dashboard',
    timeline: '6 Months',
    teamSize: '1 Lead Designer, 2 PMs, 8 Full-Stack Engineers',
    deliverables: ['Atomic Design System', 'High-Density Analytics Console', 'Dark Mode Architecture', 'Keyboard Navigation Framework'],
    shortDesc: 'A next-generation enterprise observability platform designed for mission-critical engineering squads with real-time stream forecasting and automated incident resolution.',
    heroHeadline: 'Transforming millions of chaotic infrastructure telemetry signals into instant executive clarity.',
    accentColor: '#C5FF45',
    overviewDescription: 'Chronos AI is an enterprise-grade cloud observability console built for Fortune 500 DevOps squads. Modern cloud clusters emit over 10 million telemetry events per minute across microservices. Traditional tools present wall-to-wall tabular data that blinds engineers during outages. Chronos AI uses dynamic prediction graphs and spatial clusters to detect anomalies before downtime impacts end customers.',
    targetAudience: 'Senior Site Reliability Engineers (SREs), Infrastructure Directors, Cloud Architects, and Mission-Critical Operations Teams.',
    overallObjective: 'Reduce Mean Time to Detect (MTTD) by over 50%, eliminate cognitive alert fatigue, and unify fragmented logs, metrics, and traces into a single keyboard-navigable spatial console.',
    
    toolsUsed: [
      { name: 'Figma', category: 'Design System & Wireframing', icon: 'figma' },
      { name: 'Framer', category: 'Micro-interaction Prototyping', icon: 'framer' },
      { name: 'Adobe Illustrator', category: 'Vector Iconography & Graphs', icon: 'illustrator' },
      { name: 'HTML & CSS', category: 'Component Token Architecture', icon: 'htmlcss' },
      { name: 'Tailwind CSS', category: 'Production Token Verification', icon: 'javascript' },
    ],

    challenges: [
      {
        number: '01',
        title: 'Severe Alert Fatigue & Cognitive Noise',
        explanation: 'Engineers reported receiving an average of 420 alerts per shift, of which 92% were harmless transient fluctuations. Critical database lockups were missed because engineers developed habituated blindness to endless red status chips.',
        tag: 'COGNITIVE LOAD',
        visualTitle: 'Baseline Alert Noise Analysis',
        visualMetrics: '420 Alerts/Shift → 92% False Positives',
      },
      {
        number: '02',
        title: 'Fragmented Multi-Screen Tool Hopping',
        explanation: 'Diagnosing an anomaly required switching across 4 separate tabs: one for container logs, one for network latency, one for APM traces, and one for cloud billing. The context-switching tax delayed triage by an average of 34 minutes per incident.',
        tag: 'INFORMATION ARCHITECTURE',
        visualTitle: 'Tool Fragmentation Bottleneck',
        visualMetrics: '4 Disjointed Tabs • 34 Min Context Delay',
      },
      {
        number: '03',
        title: 'Inaccessible Visual Hierarchies in Low Light',
        explanation: 'Operations centers run in dim ambient lighting 24/7. The previous UI suffered from harsh glare in light mode, while their dark mode lacked sufficient contrast ratios (failing WCAG AA on micro-labels), resulting in severe eye strain during overnight rotations.',
        tag: 'VISUAL ERGONOMICS',
        visualTitle: 'Contrast & Legibility Audit',
        visualMetrics: 'Failing WCAG AA on 38% of Metrics',
      },
    ],

    solutions: [
      {
        number: '01',
        title: 'Predictive Anomaly Clustering & Dynamic Thresholds',
        strategy: 'Replaced static threshold alerts with machine-learning confidence bands that visually widen and narrow based on historic seasonality.',
        uxImprovements: 'Transformed 420 individual noisy alerts into single, prioritized incident cards with root-cause confidence scores.',
        architecture: 'Constructed an adaptive 12-column widget grid where users can pin related metrics side-by-side.',
        wireframing: 'Sketched 34 low-fidelity dashboard layouts, testing whether dense tabular or spatial line-graph representations yielded faster comprehension.',
        visualDecisions: 'Reserved Electric Lime (#C5FF45) strictly for healthy states and predictive forecasts, avoiding visual chaos. Used subtle neutral slates for baseline telemetry.',
        interaction: 'Engineered sub-millisecond keyboard shortcuts (CMD+K Command Palette, J/K incident navigation) to let power users triage hands-free.',
        implementation: 'Defined a shared Figma-to-Tailwind token contract with CSS variables that engineers imported directly into their React component library.',
      },
      {
        number: '02',
        title: 'Unified Spatial Correlation Canvas',
        strategy: 'Merged metrics, log traces, and cluster topology onto an interconnected temporal timeline.',
        uxImprovements: 'Selecting an anomaly instantly filters downstream container logs to the exact millisecond window of interest.',
        architecture: 'Created an infinite-canvas zoom paradigm: macro cluster view at 25%, node cluster at 50%, and process telemetry at 100%.',
        wireframing: 'Iterated through 6 wireframe prototypes with DevOps directors to ensure no essential operational metrics were hidden behind multi-level menus.',
        visualDecisions: 'Employed monospace typography (JetBrains Mono) for all numerical metrics to eliminate layout jitter during high-frequency real-time updates.',
        interaction: 'Smooth hover scrub line displaying crosshair readings across all simultaneous charts synchronously.',
        implementation: 'Packaged the design system with 240+ atomic components including state variants for loading, streaming, degraded, and error states.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Research & Discovery',
        description: 'Conducted 22 contextual inquiries and recorded 14 on-call shift sessions with enterprise DevOps leads across SF, London, and Tokyo.',
        keyDeliverable: 'Behavioral Journey Map & Friction Audit',
      },
      {
        step: '02',
        title: 'User Understanding & Personas',
        description: 'Synthesized telemetry mental models into two core personas: the Incident Responder (needs speed & triage) and the Infrastructure Architect (needs depth & topology).',
        keyDeliverable: 'Empathy Archetypes & Jobs-To-Be-Done Matrix',
      },
      {
        step: '03',
        title: 'Information Architecture',
        description: 'Mapped hierarchical content trees, grouping over 120 operational widgets into 4 cognitive categories: Cluster Health, Anomaly Horizon, Active Incidents, and Audit Logs.',
        keyDeliverable: 'Sitemap & Node Flow Topology',
      },
      {
        step: '04',
        title: 'Wireframing & Low-Fi Testing',
        description: 'Built rapid clickable wireframes to test layout density. Iterated on card aspect ratios and keyboard navigation pathways.',
        keyDeliverable: 'Low-Fidelity Clickable Prototype',
      },
      {
        step: '05',
        title: 'UI Design & Design System',
        description: 'Created the Chronos Dark Design System: tokenized typography scales, WCAG AAA compliant color swatches, and micro-elevation shadows.',
        keyDeliverable: 'Figma Atomic Design Library (240+ Components)',
      },
      {
        step: '06',
        title: 'Prototyping & Motion Choreography',
        description: 'Choreographed real-time data streaming transitions, chart hover states, and seamless modal drawers with Framer.',
        keyDeliverable: '60fps High-Fidelity Interactive Prototype',
      },
      {
        step: '07',
        title: 'Final Design & Production Handoff',
        description: 'Partnered with the engineering team to document token contracts, edge-case empty states, and accessibility test suites.',
        keyDeliverable: 'Production Handoff Spec & React Component Bridge',
      },
    ],

    gallery: [
      {
        id: 'chronos-g1',
        title: 'Main Cluster Telemetry Console',
        caption: 'Full-screen dark mode console featuring live predictive anomaly streams, CPU/memory throughput meters, and incident triage queue.',
        type: 'full-width',
        mockupKind: 'saas',
      },
      {
        id: 'chronos-g2',
        title: 'Atomic Design System & Color Tokens',
        caption: 'Core design system palette featuring Core Onyx (#0D0D11), Telemetry Lime (#C5FF45), Warning Amber (#FFB800), and JetBrains Mono typographic hierarchy.',
        type: 'system-tokens',
        mockupKind: 'tokens',
      },
      {
        id: 'chronos-g3',
        title: 'Real-Time Anomaly Wave Visualizer',
        caption: 'Continuous SVG telemetry graph highlighting confidence bands and automatic threshold deviation flags.',
        type: 'desktop-grid',
        mockupKind: 'saas',
      },
      {
        id: 'chronos-g4',
        title: 'Rapid Wireframe & Grid Architecture',
        caption: 'Low-fidelity layout exploratory validating 12-column widget snap guides and command bar focus states.',
        type: 'desktop-grid',
        mockupKind: 'wireframe',
      },
    ],

    impactMetrics: [
      { value: '64%', label: 'Reduction in MTTD', description: 'Mean Time to Detect dropped from 48 minutes down to 17 minutes across 1,200 incident simulations.' },
      { value: '$4.2M', label: 'Downtime Costs Saved', description: 'Prevented customer-facing SLA breaches during Q4 peak traffic across tier-1 enterprise accounts.' },
      { value: '98.8%', label: 'User Retention', description: 'Engineering team adoption rate remained at 98.8% six months post-deployment.' },
      { value: '< 200ms', label: 'Interaction Latency', description: 'Keyboard shortcut transitions and command palette lookups execute under 200 milliseconds.' },
    ],

    achievements: [
      'Selected as Awwwards Site of the Day Honoree for Enterprise UI Craft.',
      'Adopted by 40+ engineering organizations within 90 days of general availability.',
      'Reduced customer support ticket volume regarding dashboard confusion by 76%.',
    ],

    testimonial: {
      quote: "Santhosh's work on Chronos elevated our platform from a cluttered utility tool into an award-winning piece of software that enterprise customers actively love using.",
      author: 'Evelyn Vance',
      role: 'VP of Product, Chronos Systems',
    },
    mockupType: 'saas',
    platformType: 'web',
    previewImage: 'mockup://chronos-ai/preview',
    webScreenshot: 'mockup://chronos-ai/desktop',
    mobileScreenshot: 'mockup://chronos-ai/mobile',
    browserUrl: 'https://chronos-ai.cloud/cluster-01',
  },
  {
    id: 'aura-health',
    slug: 'aura-health',
    number: '02',
    title: 'Aura Health OS — Connected Clinical Suite',
    category: 'Healthcare',
    filterCategory: 'health',
    year: '2024',
    role: 'Senior UX Architect & Mobile Lead',
    projectType: 'Clinical MedTech Platform & Tablet ICU Console',
    timeline: '5 Months',
    teamSize: '1 Lead UX Designer, 3 Clinical Doctors, 6 iOS/Android Engineers',
    deliverables: ['Clinical Tablet App', 'Mobile ICU Companion', 'Biometric Design Tokens', 'Usability Clinical Validation'],
    shortDesc: 'A human-centric clinical diagnosis ecosystem connecting frontline ICU clinicians with wearable biometric monitors to deliver life-saving patient triage in seconds.',
    heroHeadline: 'Empowering doctors with real-time biometric clarity when seconds matter most.',
    accentColor: '#45FFB8',
    overviewDescription: 'In intensive care units, doctors and nurses navigate high-stress environments saturated with auditory beeps and disconnected paper reports. Aura Health OS unifies continuous physiological feeds (ECG, SpO2, arterial blood pressure, and core temperature) into a calm, ergonomic tablet console and mobile companion that flags clinical deterioration up to 4 hours in advance.',
    targetAudience: 'ICU Physicians, Critical Care Nurses, Emergency Room Triage Officers, and Hospital Administrators.',
    overallObjective: 'Accelerate bedside triage response, completely eradicate prescription and medication entry errors, and provide scotopically adaptive dark interfaces for night shifts.',

    toolsUsed: [
      { name: 'Figma', category: 'Component Variants & Auto-Layout', icon: 'figma' },
      { name: 'Adobe Photoshop', category: 'Medical Device UI Mockups', icon: 'photoshop' },
      { name: 'Adobe Illustrator', category: 'Anatomical Vector Diagrams', icon: 'illustrator' },
      { name: 'Framer', category: 'Haptic Waveform Prototypes', icon: 'framer' },
    ],

    challenges: [
      {
        number: '01',
        title: 'Alarm Fatigue & Sensory Saturation in ICUs',
        explanation: 'Clinicians were exposed to thousands of non-actionable alarms daily, creating sensory habituation where critical physiological red flags were drowned out by trivial artifact disconnections.',
        tag: 'CLINICAL ERGONOMICS',
        visualTitle: 'Alarm Saturation Index',
        visualMetrics: '1,400+ Alarms/Shift • 88% False Positive Rate',
      },
      {
        number: '02',
        title: 'Cumbersome Medication Sign-Off Flows',
        explanation: 'Administering critical narcotics required clinicians to navigate 7 disparate sub-menus across 2 hardware terminals, consuming up to 14 minutes per dosage verification.',
        tag: 'PATIENT SAFETY',
        visualTitle: 'Dosage Verification Lag',
        visualMetrics: '7 Screens • 14 Minutes Per Sign-Off',
      },
      {
        number: '03',
        title: 'Scotopic Vision Preservation at Night',
        explanation: 'During overnight ICU rounds, turning on bright tablet displays destroyed nurses night vision and agitated sleeping patients recovering from trauma.',
        tag: 'CIRCADIAN UX',
        visualTitle: 'Luminance Disruption',
        visualMetrics: 'Excessive 480-nit Glare in Darkened Wards',
      },
    ],

    solutions: [
      {
        number: '01',
        title: 'Predictive Patient Deterioration Index (Early Warning Score)',
        strategy: 'Replaced cacophonous beeping with visual risk gradient maps and ambient pulse micro-indicators that clinicians can evaluate from across the room.',
        uxImprovements: 'Reduced bedside alert checking time by 38% through at-a-glance color-coded telemetry paired with universal medical glyphs.',
        architecture: 'Modular bed-card layout showing simultaneous 12-lead ECG, blood pressure trend curves, and lab report delta bars.',
        wireframing: 'Created rapid paper and tablet prototypes validated during 18 shadowing shifts in emergency surgical wings.',
        visualDecisions: 'Used Biometric Cyan (#45FFB8) and Pulse Green (#00E599) against Deep Hospital Onyx (#0A1014) to maintain scotopic night adaptation.',
        interaction: 'Dual-clinician biometric verification: simple NFC tap plus fingerprint verification reduces medication sign-off to 2 verified steps.',
        implementation: 'Designed strict fail-safe state machines ensuring continuous offline caching if hospital Wi-Fi drops.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Clinical Shadowing & Triage Audits',
        description: 'Spent 120 hours inside level-1 trauma centers shadowing nurses and critical care specialists across day and graveyard shifts.',
        keyDeliverable: 'Bedside Decision Matrix & Sensory Audit',
      },
      {
        step: '02',
        title: 'Information Architecture & Ergonomics',
        description: 'Structured vital sign hierarchies, ensuring life-critical metrics remain permanently locked in top viewports regardless of scroll depth.',
        keyDeliverable: 'Clinical Navigation Architecture',
      },
      {
        step: '03',
        title: 'Wireframing & Contrast Simulation',
        description: 'Simulated high-glare daytime sunlight and low-light night-shift viewing angles to establish touch target minimums of 48x48dp.',
        keyDeliverable: 'Ergonomic Touch Wireframes',
      },
      {
        step: '04',
        title: 'High-Fidelity Prototyping',
        description: 'Built realistic 60fps waveform visualizers in Framer to test physician responsiveness during simulated emergency codes.',
        keyDeliverable: 'Interactive Clinical Tablet Prototype',
      },
      {
        step: '05',
        title: 'Medical Usability Sign-Off',
        description: 'Conducted rigorous usability verification with 18 physicians, achieving 100% completion on emergency medication verification tasks.',
        keyDeliverable: 'FDA Human Factors Usability Report',
      },
    ],

    gallery: [
      {
        id: 'aura-g1',
        title: 'ICU Bedside Telemetry Dashboard',
        caption: 'Continuous live ECG lead II graph, SpO2 pulse index, and patient triage state indicator.',
        type: 'full-width',
        mockupKind: 'health',
      },
      {
        id: 'aura-g2',
        title: 'Emergency Medication Verification Drawer',
        caption: 'Streamlined 2-step narcotic sign-off flow with cryptographic physician verification.',
        type: 'desktop-grid',
        mockupKind: 'health',
      },
      {
        id: 'aura-g3',
        title: 'Biometric Color Palette & Clinical Glyph System',
        caption: 'High-contrast palette ensuring colorblind accessibility across all emergency status codes.',
        type: 'system-tokens',
        mockupKind: 'tokens',
      },
    ],

    impactMetrics: [
      { value: '38%', label: 'Faster Triage Response', description: 'Physicians identify acute vital sign deviations 38% faster than on traditional paper/legacy systems.' },
      { value: '0', label: 'Medication Entry Errors', description: 'Zero medication administration errors recorded over 120 days of clinical pilot trials.' },
      { value: '14,000+', label: 'Patients Monitored Daily', description: 'Scaled across 4 regional hospital networks with 99.999% uptime.' },
      { value: '4.9 / 5', label: 'Clinician Usability Score', description: 'Awarded highest satisfaction rating among nursing staff compared to existing hospital EHRs.' },
    ],

    achievements: [
      'Passed FDA Human Factors Engineering Compliance for Class II Medical Device Interfaces.',
      'Featured in the International Healthcare Design Conference Showcase 2024.',
      'Reduced average onboarding training time for new clinical staff from 3 weeks to 2 hours.',
    ],

    testimonial: {
      quote: "Santhosh designed an interface so intuitive that our nursing staff needed virtually zero onboarding time. It directly enhances patient outcomes every single shift.",
      author: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer, Aura Health',
    },
    mockupType: 'health',
    platformType: 'web',
    previewImage: 'mockup://aura-health/preview',
    webScreenshot: 'mockup://aura-health/desktop',
    mobileScreenshot: 'mockup://aura-health/mobile',
    browserUrl: 'https://aurahealth.med/icu-telemetry',
  },
  {
    id: 'kognita-learn',
    slug: 'kognita-learn',
    number: '03',
    title: 'Kognita — Adaptive Neural Learning',
    category: 'Mobile App',
    filterCategory: 'mobile',
    year: '2024',
    role: 'Lead Product Designer & Motion Choreographer',
    projectType: 'Mobile Spatial Learning Ecosystem (iOS & Android)',
    timeline: '4 Months',
    teamSize: '1 Product Designer, 1 Cognitive Neuroscientist, 4 Mobile Engineers',
    deliverables: ['iOS & Android Design', 'Spatial Knowledge Graphing', 'Micro-interactions', 'Gamified Retention Architecture'],
    shortDesc: 'An immersive mobile learning ecosystem leveraging spaced repetition and interactive visual concept maps to accelerate complex STEM mastery.',
    heroHeadline: 'Reimagining knowledge retention through spatial concept exploration.',
    accentColor: '#FF6584',
    overviewDescription: 'Traditional educational apps rely on boring multiple-choice flashcards that treat knowledge as disconnected trivia. Kognita models learning as a neural constellation: students see concepts as branching 3D nodes that ignite and interconnect as mastery deepens. By combining spaced repetition with tactile physics, Kognita turns study sessions into an addictive flow state.',
    targetAudience: 'University Students, Self-Directed STEM Learners, Software Engineers, and Knowledge Professionals.',
    overallObjective: 'Double 30-day concept retention, increase daily active engagement time to over 15 minutes, and create a joyful learning aesthetic that students look forward to daily.',

    toolsUsed: [
      { name: 'Figma', category: 'Mobile UI & Auto-Layout', icon: 'figma' },
      { name: 'Framer', category: 'Spatial Gesture Prototyping', icon: 'framer' },
      { name: 'Adobe After Effects', category: 'Micro-Haptic & Lottie Animations', icon: 'aftereffects' },
      { name: 'Blender', category: '3D Constellation Nodes', icon: 'blender' },
    ],

    challenges: [
      {
        number: '01',
        title: 'The "Flashcard Wall" & 78% Drop-Off',
        explanation: 'Users found linear flashcard decks monotonous and mentally exhausting. 78% of active signups abandoned conventional study apps within 14 days due to lack of visible conceptual progression.',
        tag: 'LEARNER PSYCHOLOGY',
        visualTitle: 'Drop-Off Curve Analysis',
        visualMetrics: '78% Student Churn by Day 14',
      },
      {
        number: '02',
        title: 'Cognitive Disconnect in Complex Topics',
        explanation: 'Students could memorize isolated equations but failed when asked how quantum mechanics connects to linear algebra. The absence of relational visual context crippled deep understanding.',
        tag: 'EPISTEMIC ARCHITECTURE',
        visualTitle: 'Conceptual Fragmentation',
        visualMetrics: '86% Struggle to Relate Sub-Concepts',
      },
    ],

    solutions: [
      {
        number: '01',
        title: 'Tactile 3D Knowledge Universe & Spatial Navigation',
        strategy: 'Designed an interactive constellation map where users pinch, zoom, and rotate subject nodes in 3D space.',
        uxImprovements: 'Mastered nodes emit radiant particle rings; fading memory triggers gentle pulsing cues inviting spaced repetition.',
        architecture: 'Fluid bottom-sheet interface revealing 3-minute bite-sized conceptual sprints without losing your spatial position in the graph.',
        wireframing: 'Prototyped 16 mobile gesture variations in Framer to balance one-handed navigation on subways with rich 3D panning.',
        visualDecisions: 'Paired Synapse Pink (#FF6584) with Cosmic Violet (#8B5CF6) on Void Black (#120E16) for a cinematic, sci-fi study atmosphere.',
        interaction: 'Choreographed rewarding spring physics and subtle audio-haptic clicks when swiping through concept flashcards.',
        implementation: 'Delivered an asset-optimized Lottie and vector pipeline running butter-smooth at 60fps on mid-tier mobile hardware.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Cognitive Science Research',
        description: 'Partnered with university memory researchers to study the Ebbinghaus forgetting curve and spatial memory palaces.',
        keyDeliverable: 'Cognitive Retention Heuristics',
      },
      {
        step: '02',
        title: 'Gesture & Ergonomic Prototyping',
        description: 'Tested one-handed thumb reachability maps on standard and max-size mobile screens.',
        keyDeliverable: 'One-Hand Reachability Wireframes',
      },
      {
        step: '03',
        title: '3D Node Graph Modeling',
        description: 'Modeled procedural constellation nodes in Blender and exported lightweight JSON coordinate paths.',
        keyDeliverable: 'Spatial Node Asset Pipeline',
      },
      {
        step: '04',
        title: 'Micro-Interaction Choreography',
        description: 'Crafted satisfying card flick transitions, completion confetti, and streak flame counters in After Effects.',
        keyDeliverable: 'Lottie Micro-Animation Suite',
      },
      {
        step: '05',
        title: 'Beta Launch & User Feedback',
        description: 'Conducted a 4-week closed beta with 500 college students, measuring daily session duration and recall accuracy.',
        keyDeliverable: 'Beta Validation Report & Polish Log',
      },
    ],

    gallery: [
      {
        id: 'kognita-g1',
        title: 'Mobile Spatial Constellation View',
        caption: 'Interactive 3D knowledge universe showing interconnected logic, synapse, and memory nodes.',
        type: 'mobile-mockup',
        mockupKind: 'edtech',
      },
      {
        id: 'kognita-g2',
        title: 'Daily Mastery Card & 14-Day Streak UI',
        caption: 'Tactile daily sprint card and gamified streak progression with fluid gesture controls.',
        type: 'desktop-grid',
        mockupKind: 'edtech',
      },
      {
        id: 'kognita-g3',
        title: 'Adaptive Spaced Repetition Timeline',
        caption: 'Predictive memory decay curves that automatically schedule review sessions for optimal recall.',
        type: 'full-width',
        mockupKind: 'edtech',
      },
    ],

    impactMetrics: [
      { value: '4.8★', label: 'App Store Rating', description: 'Over 12,000 ratings with overwhelmingly positive reviews praising visual delight.' },
      { value: '+142%', label: '30-Day Retention', description: 'Cohort retention increased from a baseline of 22% to 53% over 30 days.' },
      { value: '350k+', label: 'Active Learners', description: 'Reached organically across student communities in 45 countries.' },
      { value: '18 Min', label: 'Avg Daily Session', description: 'Students engage in an average of 4.2 learning sprints per day.' },
    ],

    achievements: [
      'Ranked #1 Top New Educational App in the iOS App Store upon global launch.',
      'Featured in Behance Interaction Design Curated Collection.',
      'Nominated for Google Play Best Everyday Essentials Award.',
    ],

    testimonial: {
      quote: "Kognita's UI feels like a tactile video game rather than a textbook. Santhosh brought a level of visual craft that took our app to #1 in Education.",
      author: 'Maya Lin',
      role: 'Co-Founder & CEO, Kognita',
    },
    mockupType: 'edtech',
    platformType: 'mobile',
    previewImage: 'mockup://kognita-learn/preview',
    webScreenshot: 'mockup://kognita-learn/desktop',
    mobileScreenshot: 'mockup://kognita-learn/mobile',
    browserUrl: 'https://kognita.app/constellation',
  },
  {
    id: 'vanguard-robotics',
    slug: 'vanguard-robotics',
    number: '04',
    title: 'Vanguard Robotics — Autonomous Industrial Narrative',
    category: 'Corporate',
    filterCategory: 'corporate',
    year: '2024',
    role: 'Creative Director & Web Strategist',
    projectType: 'Industrial Robotics Web Flagship & WebGL Experience',
    timeline: '3 Months',
    teamSize: '1 Creative Designer, 1 3D Artist, 3 WebGL Engineers',
    deliverables: ['Brand Identity Redesign', 'Interactive 3D WebGL Narrative', 'Kinematic Specifications UI', 'Global Launch Site'],
    shortDesc: 'High-impact editorial corporate website and interactive 3D digital flagship showcasing autonomous warehouse robotics for Fortune 500 supply chains.',
    heroHeadline: 'Showcasing the precision of autonomous robotics through kinetic editorial web design.',
    accentColor: '#FF9E44',
    overviewDescription: 'Vanguard manufactures heavy industrial robotic arms with sub-millimeter precision. When courting procurement officers for multi-million dollar contracts, their outdated corporate PDF collateral failed to communicate the speed and precision of their hardware. We designed a brutalist, typography-driven digital flagship featuring real-time 3D arm viewports, live payload calculators, and technical schematics.',
    targetAudience: 'Chief Technology Officers, Warehouse Logistics Directors, Supply Chain VPs, and Industrial Automation Engineers.',
    overallObjective: 'Transform corporate sales cycles by providing an unforgettable interactive product narrative that validates hardware specifications in the browser.',

    toolsUsed: [
      { name: 'Figma', category: 'Editorial Layout & Typography', icon: 'figma' },
      { name: 'Blender', category: '3D CAD Model Optimization', icon: 'blender' },
      { name: 'Adobe Illustrator', category: 'Technical Kinematic Schematics', icon: 'illustrator' },
      { name: 'HTML & CSS', category: 'Responsive CSS Grid Architecture', icon: 'htmlcss' },
    ],

    challenges: [
      {
        number: '01',
        title: 'Static PDF Collateral Crippling Enterprise Sales',
        explanation: 'Enterprise buyers were confused by dense 80-page technical PDFs with outdated CAD diagrams. Sales engineers spent 30+ hours per prospect manually clarifying arm reach and payload tolerances.',
        tag: 'SALES VELOCITY',
        visualTitle: 'Sales Cycle Friction',
        visualMetrics: '14-Week Sales Cycles • 30+ Hrs Answering FAQs',
      },
      {
        number: '02',
        title: 'Generic Corporate Look in a High-Tech Domain',
        explanation: 'The original site resembled a generic 2012 factory supplier rather than a venture-backed autonomous robotics leader, failing to attract international enterprise interest.',
        tag: 'BRAND PERCEPTION',
        visualTitle: 'Brand Credibility Gap',
        visualMetrics: 'High Bounce Rate • 0 Web-Originated RFPs',
      },
    ],

    solutions: [
      {
        number: '01',
        title: 'Kinetic 3D Product Narrative & Interactive Payload Explorer',
        strategy: 'Created an editorial Swiss-grid layout centered around an interactive 3D robotic arm that visitors can rotate and explode into sub-assemblies.',
        uxImprovements: 'Added an instant ROI & Payload Calculator where buyers input their pallet weight and receive immediate kinematic compatibility readouts.',
        architecture: 'Brutalist asymmetric grid separating technical telemetry from macro marketing statements.',
        wireframing: 'Sketched 20 editorial magazine layouts inspired by European industrial monographs and high-fashion engineering manuals.',
        visualDecisions: 'Combined Kinematic Orange (#FF9E44) with Technical Steel (#A3A3A3) on Brutal Charcoal (#0E0E0E) for an uncompromisingly modern aesthetic.',
        interaction: 'Smooth scroll-triggered kinematics where scrolling the page drives the robotic arm through a simulated picking cycle.',
        implementation: 'Delivered a sub-second loading WebGL pipeline optimized for smooth 60fps performance on corporate laptops.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'CAD Simplification & Pipeline',
        description: 'Imported heavy SolidWorks industrial CAD assemblies into Blender, reducing 2.4M polygons down to 42k for WebGL.',
        keyDeliverable: 'Optimized 3D Model Pipeline',
      },
      {
        step: '02',
        title: 'Editorial Typography & Grid System',
        description: 'Established an oversized Syne + JetBrains Mono typography system with razor-thin Swiss structural dividers.',
        keyDeliverable: 'Editorial Typography Guidelines',
      },
      {
        step: '03',
        title: 'Interactive Kinematic Calculator',
        description: 'Designed interactive sliders for degrees-of-freedom, payload, and speed tolerances with real-time specs.',
        keyDeliverable: 'Calculator UX Wireframe & Logic Matrix',
      },
      {
        step: '04',
        title: 'Scroll-Driven Motion Storytelling',
        description: 'Choreographed GSAP and ScrollTrigger timelines linking page scroll to robotic arm joint rotation.',
        keyDeliverable: 'Kinetic Motion Prototype',
      },
      {
        step: '05',
        title: 'Enterprise Pilot & Deployment',
        description: 'Tested across Fortune 500 procurement firewall environments, achieving lightning-fast 0.8s time-to-first-paint.',
        keyDeliverable: 'Production Flagship Site',
      },
    ],

    gallery: [
      {
        id: 'vanguard-g1',
        title: '6-Axis Kinematic Manipulator Wireframe',
        caption: 'Interactive vector schematic detailing 500 KG payload capacity and degree-of-freedom angles.',
        type: 'full-width',
        mockupKind: 'robotics',
      },
      {
        id: 'vanguard-g2',
        title: 'Real-Time Technical Specs Grid',
        caption: 'High-density telemetry panel showing cycle time, repeatability (±0.02mm), and ISO safety conformance.',
        type: 'desktop-grid',
        mockupKind: 'robotics',
      },
    ],

    impactMetrics: [
      { value: '+310%', label: 'Enterprise Inbound Leads', description: 'Inbound requests for procurement proposals tripled in the first 90 days.' },
      { value: 'Awwwards', label: 'Site of the Day Winner', description: 'Awarded SOTD for innovative 3D hardware narrative and typography.' },
      { value: '$28M', label: 'New Pipeline Created', description: 'Attributed directly to web-initiated demo requests by Fortune 500 logistics directors.' },
      { value: '3.8 Min', label: 'Avg Time On Page', description: 'Engaged buyers spend nearly 4 minutes exploring the interactive 3D manipulator.' },
    ],

    achievements: [
      'Awwwards Site of the Day & Mobile Excellence Award.',
      'Featured on Godly Website Showcase & Typewolf Typography In Review.',
      'Shortened enterprise sales discovery calls by an average of 45 minutes.',
    ],

    testimonial: {
      quote: "The website designed by Santhosh gave Vanguard an unforgettable, world-class identity. Enterprise prospects constantly mention our website in sales calls.",
      author: 'Marcus Vance',
      role: 'Head of Growth, Vanguard Robotics',
    },
    mockupType: 'robotics',
    platformType: 'web',
    previewImage: 'mockup://vanguard-robotics/preview',
    webScreenshot: 'mockup://vanguard-robotics/desktop',
    mobileScreenshot: 'mockup://vanguard-robotics/mobile',
    browserUrl: 'https://vanguardrobotics.io/mod-06',
  },
  {
    id: 'solstice-atelier',
    slug: 'solstice-atelier',
    number: '05',
    title: 'Sólstice Atelier — Haute Horlogerie Digital Boutique',
    category: 'E-Commerce',
    filterCategory: 'ecommerce',
    year: '2023 — 2024',
    role: 'Senior Digital Experience Designer',
    projectType: 'Luxury E-Commerce & 3D Timepiece Configurator',
    timeline: '4 Months',
    teamSize: '1 Digital Experience Designer, 1 Master Watchmaker Consultant, 3 Creative Engineers',
    deliverables: ['Haute Horlogerie E-Commerce Store', 'Real-Time 3D Dial Configurator', 'VIP Concierge Checkout Drawer', 'Micro-interactions'],
    shortDesc: 'An ultra-luxury timepiece e-commerce platform blending editorial storytelling with a real-time dial configurator and white-glove concierge checkout.',
    heroHeadline: 'Translating centuries of Swiss horological mastery into tactile digital luxury.',
    accentColor: '#E2C275',
    overviewDescription: 'Sólstice Atelier manufactures bespoke mechanical timepieces priced at $45,000+. Selling ultra-luxury timepieces online requires replicating the intimate luxury, tactile prestige, and bespoke service of a Geneva private salon. We crafted an atmospheric dark digital flagship featuring a real-time 60fps mechanical configurator, acoustic escapement audio haptics, and a private client concierge flow.',
    targetAudience: 'High-Net-Worth Collectors, Haute Horlogerie Connoisseurs, and Bespoke Luxury Buyers.',
    overallObjective: 'Establish digital trust for \$45k+ online timepiece purchases, allow collectors to customize every detail in real-time, and deliver an award-winning editorial shopping experience.',

    toolsUsed: [
      { name: 'Figma', category: 'High-Fashion Editorial Layouts', icon: 'figma' },
      { name: 'Adobe Photoshop', category: 'Macro Watch Finishing Retouching', icon: 'photoshop' },
      { name: 'Adobe Illustrator', category: 'Watch Dial Guilloché Vectors', icon: 'illustrator' },
      { name: 'Blender', category: 'Tourbillon Movement 3D Assets', icon: 'blender' },
    ],

    challenges: [
      {
        number: '01',
        title: 'The Psychological Hurdle of $45k Online Transactions',
        explanation: 'Collectors refused to buy high-complication mechanical watches through standard add-to-cart e-commerce buttons. The experience felt sterile and lacked the white-glove respect of a luxury salon.',
        tag: 'LUXURY PSYCHOLOGY',
        visualTitle: 'Transaction Barrier',
        visualMetrics: '96% Drop-off on Generic E-Commerce Checkouts',
      },
      {
        number: '02',
        title: 'Inability to Appreciate Hand-Finishing Digitally',
        explanation: 'Standard static photos failed to capture the anglage beveling, black polish, and dynamic light reflection of titanium cases.',
        tag: 'MATERIALITY & FINISH',
        visualTitle: 'Macro Detail Fidelity',
        visualMetrics: 'Collectors Demanded 10x Macro Inspection',
      },
    ],

    solutions: [
      {
        number: '01',
        title: 'Interactive Horology Configurator & VIP Concierge Drawer',
        strategy: 'Engineered an interactive 3D dial visualizer where collectors modify case titanium grades, guilloché dial textures, and alligator strap stitching with real-time price updates.',
        uxImprovements: 'Replaced standard cart checkouts with a private "Reserve Piece with Atelier Concierge" drawer featuring live video consultation booking.',
        architecture: 'Deep editorial scroll intertwining the history of the master watchmaker with technical complication diagrams.',
        wireframing: 'Explored 14 luxury magazine editorial wireframes with generous margins and bespoke typography.',
        visualDecisions: 'Combined Salon Noir (#0C0B0A) with Champagne Gold (#E2C275) and Brushed Titanium accents for timeless elegance.',
        interaction: 'Integrated subtle synthesized mechanical ticking sound effects that accelerate smoothly as you manipulate the crown.',
        implementation: 'Designed ultra-responsive drawer menus and responsive macro viewports optimized for Retina displays.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Geneva Salon Research',
        description: 'Traveled to Swiss watchmaking workshops to study collector buying rituals and tactile mechanical handling.',
        keyDeliverable: 'Luxury Buying Ritual Journey Map',
      },
      {
        step: '02',
        title: 'Macro Material Modeling',
        description: 'Captured high-definition PBR material maps for grade 5 titanium, smoked sapphire, and rose gold.',
        keyDeliverable: 'Photorealistic Material Shaders',
      },
      {
        step: '03',
        title: 'Editorial Storytelling Layout',
        description: 'Structured the narrative into chapters: The Movement, The Guilloché Craft, The Configurator, and The Atelier.',
        keyDeliverable: 'Editorial E-Commerce Wireframes',
      },
      {
        step: '04',
        title: 'Concierge Booking Integration',
        description: 'Created a frictionless 1-tap appointment booking flow connecting buyers directly with Geneva horologists.',
        keyDeliverable: 'VIP Concierge UI Flow',
      },
      {
        step: '05',
        title: 'Global Launch & Collector Audits',
        description: 'Launched to a private waiting list of 400 horology collectors with 100% reservation of the inaugural 25-piece series.',
        keyDeliverable: 'Production E-Commerce Platform',
      },
    ],

    gallery: [
      {
        id: 'solstice-g1',
        title: 'Bespoke Tourbillon Dial Visualizer',
        caption: 'Titanium and sapphire dial view with visible tourbillon cage opening and champagne gold hour markers.',
        type: 'full-width',
        mockupKind: 'luxury',
      },
      {
        id: 'solstice-g2',
        title: 'Bespoke Material & Strap Configurator',
        caption: 'Collector customizer allowing real-time selection of hand-stitched leather, case finishing, and dial enamel.',
        type: 'desktop-grid',
        mockupKind: 'luxury',
      },
    ],

    impactMetrics: [
      { value: '$18M+', label: 'Digital Watches Sold', description: 'Over 18 million dollars in timepieces reserved and delivered through the digital boutique.' },
      { value: '4.2%', label: 'E-commerce Conversion Rate', description: 'Unprecedented conversion rate for luxury goods priced over $40,000.' },
      { value: '8.4 Min', label: 'Avg Configurator Session', description: 'Collectors spent an average of 8.4 minutes personalizing their timepieces.' },
      { value: 'FWA', label: 'Site of the Day Winner', description: 'Honored with FWA of the Day for exceptional aesthetic craft and WebGL fluidity.' },
    ],

    achievements: [
      'Entire initial run of 25 bespoke timepieces sold out in 48 hours.',
      'Won FWA of the Day and Awwwards Honorable Mention.',
      'Featured in Hodinkee and The New York Times Luxury Horology Review.',
    ],

    testimonial: {
      quote: "Santhosh crafted an experience that feels as exquisite as holding one of our titanium chronographs. He set a new gold standard for online haute horlogerie.",
      author: 'Henriette Dubois',
      role: 'Creative Director, Sólstice Atelier',
    },
    mockupType: 'luxury',
    platformType: 'web',
    previewImage: 'mockup://solstice-atelier/preview',
    webScreenshot: 'mockup://solstice-atelier/desktop',
    mobileScreenshot: 'mockup://solstice-atelier/mobile',
    browserUrl: 'https://solstice-atelier.ch/piece-unique',
  },
  {
    id: 'vaultx-neobank',
    slug: 'vaultx-neobank',
    number: '06',
    title: 'VaultX NeoBank — Multi-Currency Algorithmic Treasury',
    category: 'Fintech',
    filterCategory: 'fintech',
    year: '2023 — 2024',
    role: 'End-to-End Product Designer',
    projectType: 'Fintech Mobile OS & Global Card Experience (iOS / Android)',
    timeline: '6 Months',
    teamSize: '1 Product Designer, 2 FinTech Compliance Leads, 5 Mobile Engineers',
    deliverables: ['iOS / Android NeoBank App', 'Holographic Titanium Virtual Card', 'Algorithmic Yield Engine', 'Brand Identity'],
    shortDesc: 'A cross-border mobile banking interface providing algorithmic FX hedging, instant virtual card issuance, and automated high-yield liquidity pools.',
    heroHeadline: 'Institutional-grade treasury and instant global liquidity in your pocket.',
    accentColor: '#C5FF45',
    overviewDescription: 'Modern global founders and remote operators hold currencies across USD, EUR, GBP, and SGD. Traditional banks hit them with opaque 3% FX markups and 3-day SWIFT delays. VaultX combines real-time interbank currency exchange with automated round-up yield vaults and instant disposable virtual cards, all packaged in a hyper-modern dark mobile experience.',
    targetAudience: 'Global Founders, Digital Nomads, International Freelancers, and High-Volume Cross-Border Businesses.',
    overallObjective: 'Eliminate foreign transaction friction, deliver 0.4-second instant global settlement, and make complex multi-currency liquidity management effortless.',

    toolsUsed: [
      { name: 'Figma', category: 'Mobile App Architecture & Tokens', icon: 'figma' },
      { name: 'Framer', category: 'Card Flip & Biometric Micro-Interactions', icon: 'framer' },
      { name: 'Adobe Illustrator', category: 'Card Chip & Security Glyph Art', icon: 'illustrator' },
      { name: 'Tailwind CSS', category: 'Design Token Standardization', icon: 'javascript' },
    ],

    challenges: [
      {
        number: '01',
        title: 'FX Slippage Anxiety & Opaque Rates',
        explanation: 'Users hesitated to execute high-value currency conversions because legacy apps hid fees in fluctuating spreads. Users felt anxious about signing off on large cross-border wire transfers without upfront guarantees.',
        tag: 'FINANCIAL TRANSPARENCY',
        visualTitle: 'Spread Fee Confusion',
        visualMetrics: '3.4% Hidden Margins in Traditional Banking',
      },
      {
        number: '02',
        title: 'Card Theft & Virtual Card Clutter',
        explanation: 'Managing multiple virtual cards for different subscriptions caused confusion, while locking a compromised card took up to 10 minutes through clunky web portals.',
        tag: 'SECURITY & CONVENIENCE',
        visualTitle: 'Card Security Delays',
        visualMetrics: '10 Min Average Time to Freeze Stolen Cards',
      },
    ],

    solutions: [
      {
        number: '01',
        title: 'Real-Time Algorithmic FX Hedging with 1-Tap Swaps',
        strategy: 'Built an algorithmic swap slider displaying live interbank mid-market rates guaranteed for 60 seconds with 0% hidden spread.',
        uxImprovements: 'Users see exact conversion totals in both currencies simultaneously with a single confirmation haptic tap.',
        architecture: 'Organized accounts into a unified liquidity carousel: swipe left to access USD, right for EUR, or pull down for yield vaults.',
        wireframing: 'Iterated through 24 banking wireframe iterations, testing biometric confirmation placement and card freeze toggles.',
        visualDecisions: 'Sleek Obsidian Black (#0C0D0E) with Electric Lime (#C5FF45) card accents and brushed silver titanium details.',
        interaction: 'Tactile 3D card tilt responding to phone gyroscope, with dynamic CVV security codes that refresh every 60 minutes.',
        implementation: 'Designed modular iOS and Android design tokens with native haptic vibration feedback for successful transactions.',
      },
    ],

    processSteps: [
      {
        step: '01',
        title: 'Cross-Border User Research',
        description: 'Interviewed 40 international digital founders and remote contractors regarding international wire pain points.',
        keyDeliverable: 'Cross-Border Financial Journey Map',
      },
      {
        step: '02',
        title: 'Regulatory & Security Compliance',
        description: 'Collaborated with banking compliance officers to integrate KYC verification and biometric multi-factor auth.',
        keyDeliverable: 'Security UX Architecture',
      },
      {
        step: '03',
        title: 'Card Design & 3D Gyroscope Modeling',
        description: 'Crafted the virtual titanium debit card with physical gyro tilt shaders in Framer.',
        keyDeliverable: 'Virtual Card Interaction Spec',
      },
      {
        step: '04',
        title: 'Atomic FinTech Design System',
        description: 'Created 180+ tokenized components covering currency selectors, transaction lists, and biometric prompt dialogs.',
        keyDeliverable: 'VaultX Design System Library',
      },
      {
        step: '05',
        title: 'Security Audits & Global Rollout',
        description: 'Achieved sub-0.4 second settlement execution and 100% pass rate in external security penetration testing.',
        keyDeliverable: 'Production iOS & Android App Suite',
      },
    ],

    gallery: [
      {
        id: 'vaultx-g1',
        title: 'Titanium NeoBank Card & Liquidity Dashboard',
        caption: 'Holographic metallic virtual card with dynamic CVV, multi-currency wallet chips, and 1-tap FX swap slider.',
        type: 'mobile-mockup',
        mockupKind: 'fintech',
      },
      {
        id: 'vaultx-g2',
        title: 'Real-Time Interbank Currency Exchange Flow',
        caption: 'Zero-slippage conversion screen showing guaranteed live rates and immediate multi-currency treasury settlement.',
        type: 'desktop-grid',
        mockupKind: 'fintech',
      },
    ],

    impactMetrics: [
      { value: '$240M+', label: 'Monthly FX Volume', description: 'Over 240 million dollars in cross-border volume processed monthly.' },
      { value: '180,000+', label: 'Active Cardholders', description: 'Organic user growth across 55 countries within the first year.' },
      { value: '0.4s', label: 'Instant Settlement Speed', description: 'Currency conversions settle and reflect in balances in under 400 milliseconds.' },
      { value: '4.9★', label: 'Fintech App Rating', description: 'Rated 4.9 stars across 24,000+ App Store reviews.' },
    ],

    achievements: [
      'Ranked among the Top 5 Fastest Growing FinTech Apps in Europe 2024.',
      'Zero reported fraudulent charges due to single-use dynamic virtual card architecture.',
      'Featured in TechCrunch and Sifted FinTech Innovation Index.',
    ],

    testimonial: {
      quote: "VaultX's design is our single biggest competitive differentiator against traditional banks. Santhosh executed every screen with flawless precision.",
      author: 'David Chen',
      role: 'Co-Founder & CTO, VaultX',
    },
    mockupType: 'fintech',
    platformType: 'mobile',
    previewImage: 'mockup://vaultx-neobank/preview',
    webScreenshot: 'mockup://vaultx-neobank/desktop',
    mobileScreenshot: 'mockup://vaultx-neobank/mobile',
    browserUrl: 'https://vaultx.finance/treasury',
  },
];

// Helper to look up project by slug/id
export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return allProjects.find((p) => p.slug === slug || p.id === slug);
}
