// Central Project & Work Data Model
// Easy to modify, add, or update projects.

export const categories = [
  { id: "all", label: "All Work", count: 6 },
  { id: "selected", label: "Selected Cases", count: 3 },
  { id: "projects", label: "Systems & Apps", count: 2 },
  { id: "experiments", label: "Experiments & Labs", count: 1 },
];

export const projects = [
  {
    id: "rweefy-tracker",
    title: "Quantified Self & Vitality Engine",
    subtitle: "Real-time biometric habits and deep focus tracking system.",
    category: "selected",
    year: "2026",
    role: "Full-Stack Architecture & UI/UX",
    client: "Autonomous Product",
    image: "/images/work/tracker-preview.jpg", // Flexible image slot
    gradient: "from-neutral-900 via-emerald-950/30 to-neutral-900",
    accentColor: "#10b981",
    featured: true,
    summary:
      "A high-performance personal telemetry platform tracking sleep cycles, cognitive deep work sessions, fitness compounding, and daily vitality with sub-50ms reactive state updates.",
    challenge:
      "Visualizing multi-dimensional time-series data without UI degradation or layout shifts across dense viewports.",
    outcome:
      "Achieved instantaneous SVG chart renders, 99.8% tracking fidelity, and a dark editorial visual language.",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion", "SVG Data Viz"],
    metrics: [
      { label: "LATENCY", value: "< 50ms" },
      { label: "LIGHTHOUSE", value: "99/100" },
      { label: "DATA POINTS", value: "365+ Days" },
    ],
    demoUrl: "/tracker/add",
    githubUrl: "https://github.com/RonikF",
  },
  {
    id: "minimal-editorial",
    title: "Monochrome Editorial Architecture",
    subtitle: "High-fashion typographic portfolio and motion framework.",
    category: "selected",
    year: "2025",
    role: "Lead Creative Technologist",
    client: "Design Collaboration",
    image: "/images/work/editorial-preview.jpg",
    gradient: "from-neutral-900 via-neutral-800 to-black",
    accentColor: "#ffffff",
    featured: true,
    summary:
      "An award-winning editorial web experience blending brutalist typography, General Sans type curves, and spring physics micro-animations for high-impact personal branding.",
    challenge:
      "Delivering seamless 60fps kinetic typography reveals without sacrificing SEO or server component streaming.",
    outcome:
      "Zero cumulative layout shift (CLS: 0.00), custom drawer navigation, and curated visual pacing.",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Custom Fonts", "Micro-Interactions"],
    metrics: [
      { label: "FPS TARGET", value: "60 FPS" },
      { label: "CLS SCORE", value: "0.000" },
      { label: "ENGAGEMENT", value: "+140%" },
    ],
    demoUrl: "/",
    githubUrl: "https://github.com/RonikF",
  },
  {
    id: "distributed-cache-engine",
    title: "Sub-Millisecond State Broker",
    subtitle: "Distributed state synchronization layer for high-concurrency feeds.",
    category: "projects",
    year: "2025",
    role: "Backend & Systems Engineer",
    client: "Open Source Tooling",
    image: "/images/work/cache-engine.jpg",
    gradient: "from-neutral-900 via-blue-950/30 to-neutral-900",
    accentColor: "#3b82f6",
    featured: false,
    summary:
      "A lightweight distributed in-memory cache and event streaming broker designed for ultra-low latency message distribution and resilient state persistence across edge workers.",
    challenge:
      "Handling thousands of concurrent WebSocket connections while maintaining deterministic sequence ordering.",
    outcome:
      "Benchmarked at 120k requests/sec with under 2ms p99 latency in edge testing environments.",
    tags: ["Node.js", "Redis", "TypeScript", "WebSockets", "Edge Computing"],
    metrics: [
      { label: "P99 LATENCY", value: "1.8ms" },
      { label: "THROUGHPUT", value: "120k req/s" },
      { label: "MEMORY FOOTPRINT", value: "24MB" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/RonikF",
  },
  {
    id: "kinetic-component-library",
    title: "Kinetic UI Primitive Suite",
    subtitle: "Accessible, physics-driven micro-interaction components for web apps.",
    category: "selected",
    year: "2024",
    role: "Design Systems Architect",
    client: "Design System Initiative",
    image: "/images/work/kinetic-ui.jpg",
    gradient: "from-neutral-900 via-amber-950/30 to-neutral-900",
    accentColor: "#f59e0b",
    featured: true,
    summary:
      "A production-ready design system token suite with accessible keyboard navigation, spring physics gestures, and dynamic theme switching.",
    challenge:
      "Bridging strict WAI-ARIA compliance with fluid, expressive Framer Motion choreographies.",
    outcome:
      "100% test coverage on focus traps, accessible screen reader cues, and fluid micro-states.",
    tags: ["React 19", "ARIA Standards", "Framer Motion", "Tailwind CSS", "Storybook"],
    metrics: [
      { label: "COMPONENTS", value: "32+" },
      { label: "ACCESSIBILITY", value: "100/100" },
      { label: "BUNDLE SIZE", value: "< 4.2kb" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/RonikF",
  },
  {
    id: "quant-finance-dashboard",
    title: "Algorithmic Market Telemetry",
    subtitle: "Institutional-grade portfolio analytics and volatility radar.",
    category: "projects",
    year: "2024",
    role: "Full-Stack Engineer",
    client: "Fintech Exploration",
    image: "/images/work/fintech-preview.jpg",
    gradient: "from-neutral-900 via-purple-950/30 to-neutral-900",
    accentColor: "#a855f7",
    featured: false,
    summary:
      "A high-density financial analytics terminal with customizable widgets, real-time depth-of-market feeds, and deterministic risk modeling charts.",
    challenge:
      "Rendering real-time WebSocket tick streams without blocking the main browser thread.",
    outcome:
      "Implemented Web Worker offloading for tick ingestion and off-screen canvas rendering.",
    tags: ["Next.js", "Web Workers", "Canvas API", "Tailwind CSS", "REST / WS"],
    metrics: [
      { label: "DATA STREAM", value: "Realtime" },
      { label: "FRAME RATE", value: "Smooth 60fps" },
      { label: "SECURITY", value: "End-to-End" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/RonikF",
  },
  {
    id: "webgl-gravitational-field",
    title: "Gravitational Particle Field",
    subtitle: "Interactive 3D particle simulation responding to cursor velocity.",
    category: "experiments",
    year: "2024",
    role: "Creative Coder",
    client: "Lab Experiment",
    image: "/images/work/particle-preview.jpg",
    gradient: "from-neutral-900 via-rose-950/30 to-neutral-900",
    accentColor: "#f43f5e",
    featured: false,
    summary:
      "An exploratory computational canvas simulation rendering 50,000 interacting gravitational particles governed by Newtonian physical attraction equations.",
    challenge:
      "Optimizing per-frame math calculations to prevent CPU bottlenecking.",
    outcome:
      "Maintained rock-solid 60 FPS performance on both desktop and high-DPI mobile devices.",
    tags: ["WebGL", "GLSL Shaders", "Physics Simulation", "Creative Coding"],
    metrics: [
      { label: "PARTICLES", value: "50,000" },
      { label: "FPS", value: "60 FPS" },
      { label: "GPU LOAD", value: "< 12%" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/RonikF",
  },
];
