"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { fadeUp, easeOutExpo } from "@/lib/motionVariants";

export default function AboutTimeline() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      role: "Lead Systems & Product Engineer",
      company: "Autonomous Engineering & Independent Labs",
      location: "Remote / Global",
      description:
        "Directing architecture and technical direction for high-leverage digital systems, reactive web applications, and personal life intelligence engines.",
      highlights: [
        "Architected real-time quantified tracking system with sub-50ms query response.",
        "Built modular design systems adopted across distributed micro-frontends.",
        "Engineered zero-layout-shift kinetic typography and Framer Motion animation engines.",
      ],
      skills: ["Next.js App Router", "React 19", "Tailwind CSS", "TypeScript", "Distributed State", "Motion Design"],
    },
    {
      period: "2023 — 2024",
      role: "Senior Full-Stack & UI/UX Architect",
      company: "Scale Ventures & Digital Studios",
      location: "Kathmandu / Hybrid",
      description:
        "Spearheaded core frontend infrastructure and high-throughput backend APIs for venture-backed client platforms and enterprise web tooling.",
      highlights: [
        "Modernized legacy client-side SPAs into server-rendered Next.js deployments, boosting Lighthouse scores from 62 to 98+.",
        "Created bespoke interactive data visualization suites using SVG and WebGL canvas pipelines.",
        "Mentored junior engineers on clean code, design tokens, and performance profiling.",
      ],
      skills: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Framer Motion", "GraphQL"],
    },
    {
      period: "2022 — 2023",
      role: "Frontend Engineer & Creative Developer",
      company: "Interactive Media & Design Collaboratives",
      location: "Kathmandu, Nepal",
      description:
        "Designed and implemented award-winning interactive portfolios, editorial landing pages, and developer toolkits with rigorous attention to typography.",
      highlights: [
        "Pioneered responsive micro-animation patterns for seamless cross-device mobile experiences.",
        "Collaborated closely with brand designers to translate Figma design systems into pixel-perfect CSS components.",
      ],
      skills: ["JavaScript (ESNext)", "CSS Architecture", "Figma", "REST APIs", "UI/UX Prototyping"],
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
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
      >
        <div>
          <span
            className="block text-white/40 text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            03 // TRAJECTORY & EXPERIENCE
          </span>
          <h2 className="text-white font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
            CAREER TIMELINE &<br className="hidden sm:inline" /> MILESTONES.
          </h2>
        </div>
        <p className="text-white/50 max-w-sm text-[14px] sm:text-[15px] leading-relaxed">
          A track record of shipping performant code, designing cohesive interfaces, and solving complex problems.
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-12 space-y-12">
        {experiences.map((item, index) => (
          <motion.div
            key={item.period + item.role}
            variants={fadeUp(0.15 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative group"
          >
            {/* Glowing Timeline Marker */}
            <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-white/40 group-hover:border-white group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-500">
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full bg-white/5 text-white/90 text-[11px] sm:text-[12px] font-mono tracking-wider"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {item.period}
                </span>
                <span
                  className="text-white/40 text-[12px] tracking-wide"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {item.location}
                </span>
              </div>

              {/* Role & Company */}
              <div className="mb-4">
                <h3 className="text-white font-bold text-[20px] sm:text-[24px] tracking-tight group-hover:text-white transition-colors">
                  {item.role}
                </h3>
                <p className="text-white/60 font-medium text-[15px] sm:text-[16px] mt-0.5">
                  {item.company}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/70 text-[14px] sm:text-[15px] leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-white/75 text-[13px] sm:text-[14px]">
                    <CheckCircle2 className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-white/60 text-[11px] sm:text-[12px] font-mono tracking-tight"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
