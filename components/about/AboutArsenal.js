"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Palette, Terminal, Sparkles, Check } from "lucide-react";
import { fadeUp, easeOutExpo } from "@/lib/motionVariants";

export default function AboutArsenal() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: "frontend",
      label: "Frontend & Web",
      icon: Code2,
      description: "Crafting sub-second, resilient, and visually expressive web applications.",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", note: "Server Components & Streaming" },
        { name: "React 19 & Hooks", level: "Advanced", note: "Concurrent Rendering & State" },
        { name: "TypeScript / JavaScript", level: "Expert", note: "ESNext & Strict Type Safety" },
        { name: "Tailwind CSS v4", level: "Expert", note: "Custom Design Tokens & Utilities" },
        { name: "Framer Motion", level: "Advanced", note: "Kinetic UI & Physics Animations" },
        { name: "Web Performance (Core Vitals)", level: "Advanced", note: "98+ Lighthouse Optimization" },
      ],
    },
    {
      id: "backend",
      label: "Backend & Systems",
      icon: Server,
      description: "Architecting reliable APIs, state synchronization, and scalable data layers.",
      skills: [
        { name: "Node.js & Runtime APIs", level: "Advanced", note: "Microservices & Edge Handlers" },
        { name: "PostgreSQL & SQLite", level: "Proficient", note: "Schema Design & Indexing" },
        { name: "REST & GraphQL APIs", level: "Advanced", note: "Contract-First Architecture" },
        { name: "State Sync & WebSockets", level: "Proficient", note: "Real-time Telemetry & Feeds" },
        { name: "Auth & Identity", level: "Proficient", note: "OAuth, JWT & Session Security" },
        { name: "Data Modeling", level: "Advanced", note: "Quantified Self Metrics" },
      ],
    },
    {
      id: "design",
      label: "Design & Motion",
      icon: Palette,
      description: "Refining visual hierarchy, typography, spatial balance, and tactile motion.",
      skills: [
        { name: "UI / UX System Design", level: "Expert", note: "Design Systems & Token Architecture" },
        { name: "Editorial Typography", level: "Expert", note: "Rhythm, Hierarchy & Contrast" },
        { name: "Figma & Prototyping", level: "Advanced", note: "Interactive Hi-Fi Wireframing" },
        { name: "Interaction Design", level: "Advanced", note: "Feedback Micro-Interactions" },
        { name: "Dark Mode Aesthetics", level: "Expert", note: "HSL Luminance & Spatial Depth" },
        { name: "Data Visualization", level: "Advanced", note: "SVG Charts, Rings & Heatmaps" },
      ],
    },
    {
      id: "tooling",
      label: "DevOps & Workflow",
      icon: Terminal,
      description: "Automated pipelines, terminal tooling, and uncompromising build quality.",
      skills: [
        { name: "Git & Version Control", level: "Advanced", note: "Clean Git History & Branching" },
        { name: "Vercel / Cloudflare", level: "Advanced", note: "Edge Deployment & CI/CD" },
        { name: "ESLint & Prettier", level: "Proficient", note: "Code Health Enforcement" },
        { name: "React Compiler", level: "Proficient", note: "Automated Memoization" },
        { name: "Terminal & Shell", level: "Advanced", note: "Zsh, Automation & Scripting" },
        { name: "SEO & Open Graph", level: "Advanced", note: "Semantic Structure & Meta Tags" },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/10">
      {/* Section Header */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
      >
        <div>
          <span
            className="block text-white/40 text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            04 // CAPABILITIES & ARSENAL
          </span>
          <h2 className="text-white font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
            TECHNICAL ARSENAL &<br className="hidden sm:inline" /> TOOLING.
          </h2>
        </div>
        <p className="text-white/50 max-w-sm text-[14px] sm:text-[15px] leading-relaxed">
          The curated stack and battle-tested technologies leveraged to turn complex ideas into refined software.
        </p>
      </motion.div>

      {/* Interactive Category Selector Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/10">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          const isSelected = activeTab === idx;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`
                relative px-5 py-3 rounded-2xl flex items-center gap-2.5 text-[13px] sm:text-[14px] font-medium transition-all duration-300 cursor-pointer
                ${
                  isSelected
                    ? "text-white bg-white/10 shadow-lg shadow-black/40"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
              {isSelected && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={categories[activeTab].id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between pb-4">
            <p className="text-white/70 text-[15px] max-w-xl font-light">
              {categories[activeTab].description}
            </p>
            <span
              className="text-white/40 text-[11px] font-mono uppercase tracking-widest hidden sm:inline"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {categories[activeTab].skills.length} Capabilities Verified
            </span>
          </div>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories[activeTab].skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.25)" }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-white font-semibold text-[16px] tracking-tight">
                      {skill.name}
                    </h4>
                    <span
                      className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] uppercase tracking-wider font-mono"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-white/50 text-[13px] leading-relaxed">
                    {skill.note}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/30 font-mono">
                  <span>DEPLOYED & READY</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400/80" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
