import {
  FiActivity,
  FiBarChart2,
  FiCode,
  FiCpu,
  FiLayers,
  FiMessageSquare,
  FiPenTool,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export const stats = [
  { label: "Projects delivered", value: "120+" },
  { label: "Avg. ROI uplift", value: "3.4x" },
  { label: "Client NPS", value: "72" },
];

export const services = [
  {
    title: "AI Sales Agent",
    description: "Always-on lead engagement, qualification, and meeting booking.",
    icon: FiMessageSquare,
    focus: ["Instant response", "Qualified handoff", "Calendar booking"],
    link: "/ai-sales-agent",
  },
  {
    title: "AI HR Management System",
    description: "Recruiting, onboarding, and performance workflows powered by AI.",
    icon: FiUsers,
    focus: ["Hiring automation", "Employee lifecycle", "Performance insights"],
    link: "/ai-hr-system",
  },
  {
    title: "Digital Marketing",
    description: "Performance-led campaigns, analytics, and omnichannel growth.",
    icon: FiBarChart2,
    focus: ["Growth strategy", "Paid + lifecycle", "Conversion optimization"],
  },
  {
    title: "Branding & Design",
    description: "Distinctive identities, visual systems, and content that resonates.",
    icon: FiPenTool,
    focus: ["Brand systems", "Messaging architecture", "Creative direction"],
  },
  {
    title: "AI Automation & Copilots",
    description: "LLM copilots, workflows, and integrations that keep teams moving fast.",
    icon: FiCpu,
    focus: ["Workflow orchestration", "Knowledge copilots", "Operational scale"],
  },
  {
    title: "Web & Product Development",
    description: "High-performing digital products built for scale and security.",
    icon: FiCode,
    focus: ["Conversion-ready sites", "Product UX", "Modern engineering"],
  },
  {
    title: "Content & Social Studio",
    description: "Always-on content, social storytelling, and creator partnerships.",
    icon: FiZap,
    focus: ["Content sprints", "Social calendars", "Audience growth"],
  },
  {
    title: "Data & Insights",
    description: "Dashboards, reporting, and experimentation that sharpen decisions.",
    icon: FiActivity,
    focus: ["Attribution models", "Insight reporting", "Experiment design"],
  },
];

export const projects = [
  {
    title: "Bwinbet",
    category: "Sports Betting Platform",
    result: "Market-ready experience",
    summary:
      "BwinBet Uganda is a modern online sports engagement platform offering real-time match insights, live odds, and a wide range of global sporting events through a fast, mobile-optimized interface designed for African users.",
    tags: ["Sports betting", "Product UX", "Conversion"],
    image: "/portfolio/bwinbet-logo.jpeg",
    imageDark: "/portfolio/bwinbet-logo.jpeg",
    imageAlt: "Bwinbet logo",
  },
  {
    title: "Aurora Commerce",
    category: "E-commerce Automation",
    result: "28% conversion lift",
    summary: "Rebuilt lifecycle flows and personalization to unlock repeat purchases.",
    tags: ["Lifecycle", "Shopify", "AI segmentation"],
    image: "/portfolio/aurora-commerce.svg",
    imageDark: "/portfolio/aurora-commerce-dark.svg",
    imageAlt: "Lifestyle scene of a commerce team reviewing online orders",
  },
  {
    title: "Northwind HQ",
    category: "B2B Brand Refresh",
    result: "42% faster pipeline",
    summary: "New positioning and messaging system aligned sales and marketing.",
    tags: ["Brand strategy", "GTM", "ABM"],
    image: "/portfolio/northwind-hq.svg",
    imageDark: "/portfolio/northwind-hq-dark.svg",
    imageAlt: "Lifestyle brand workshop with moodboards and color swatches",
  },
  {
    title: "Pulse Analytics",
    category: "Data Visualization Suite",
    result: "Live ops visibility",
    summary: "Unified product data into a real-time insight command center.",
    tags: ["Dashboards", "Product analytics", "Ops"],
    image: "/portfolio/pulse-analytics.svg",
    imageDark: "/portfolio/pulse-analytics-dark.svg",
    imageAlt: "Operations team reviewing live analytics in a workspace",
  },
  {
    title: "Vertex Launch",
    category: "Product GTM",
    result: "Full-funnel rollout",
    summary: "Multi-channel GTM with creative, media, and automated nurture.",
    tags: ["Launch", "Performance media", "Automation"],
    image: "/portfolio/vertex-launch.svg",
    imageDark: "/portfolio/vertex-launch-dark.svg",
    imageAlt: "Product launch event with a large presentation screen",
  },
  {
    title: "Helio Health",
    category: "Patient Experience",
    result: "65% engagement lift",
    summary: "Human-first design combined with AI triage and onboarding journeys.",
    tags: ["Healthcare", "UX", "AI workflow"],
    image: "/portfolio/helio-health.svg",
    imageDark: "/portfolio/helio-health-dark.svg",
    imageAlt: "Healthcare consultation with a clinician and patient",
  },
  {
    title: "Vela Mobility",
    category: "Connected Product",
    result: "New partner pipeline",
    summary: "Storytelling and product marketing for a rapidly scaling mobility brand.",
    tags: ["Product marketing", "Partner GTM", "Brand"],
    image: "/portfolio/vela-mobility.svg",
    imageDark: "/portfolio/vela-mobility-dark.svg",
    imageAlt: "Urban commute planning on a mobility app",
  },
];

export const team = [
  { name: "Jordan Avery", role: "Strategy Director", focus: "Growth and positioning" },
  { name: "Casey Lin", role: "Creative Lead", focus: "Brand and experience" },
  { name: "Riley Brooks", role: "Engineering Lead", focus: "Automation and delivery" },
  { name: "Avery James", role: "Client Partner", focus: "Partnership and outcomes" },
];

export const values = [
  { label: "Precision", detail: "Data-led decisions, measurable outcomes." },
  { label: "Partnership", detail: "Transparent collaboration with your team." },
  { label: "Momentum", detail: "Ship fast, refine faster, stay ahead." },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We map goals, audiences, and the data signals that matter most.",
    icon: FiTarget,
  },
  {
    title: "Blueprint",
    description: "We design the strategy, journey flows, and measurement plan.",
    icon: FiLayers,
  },
  {
    title: "Launch",
    description: "We ship creative, automation, and product updates with velocity.",
    icon: FiZap,
  },
  {
    title: "Optimize",
    description: "We analyze, test, and refine to compound performance.",
    icon: FiBarChart2,
  },
  {
    title: "Protect",
    description: "We maintain security, QA, and AI governance across systems.",
    icon: FiShield,
  },
];

export const testimonials = [
  {
    quote:
      "Dott-Media blended strategy and AI tooling in a way that kept our team aligned and moving faster.",
    name: "Priya Desai",
    role: "VP Growth",
    company: "Northwind HQ",
  },
  {
    quote:
      "Their automation roadmap unlocked a pipeline we did not know was possible in six weeks.",
    name: "Marcus Reed",
    role: "Founder",
    company: "Aurora Commerce",
  },
  {
    quote:
      "Creative, technical, and collaborative. The dashboards alone changed our daily decisions.",
    name: "Lauren Kim",
    role: "Head of Ops",
    company: "Pulse Analytics",
  },
];

export const toolStack = [
  "Figma",
  "Notion",
  "Webflow",
  "React",
  "Vite",
  "Tailwind",
  "HubSpot",
  "GA4",
  "Zapier",
  "Make.com",
  "OpenAI",
  "Segment",
];

export const faqItems = [
  {
    question: "How fast can we start?",
    answer:
      "Most engagements kick off within 1-2 weeks after alignment on scope and access.",
  },
  {
    question: "Do you build long-term or short-term?",
    answer:
      "Both. We offer focused launches as well as ongoing growth partnerships.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We integrate with the platforms you already use and recommend upgrades only when needed.",
  },
];
