"use client";

import { motion } from "framer-motion";
import { Terminal, Check, Zap, Layers, Clock } from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

export default function ContactFAQ() {
  const guidelines = [
    {
      id: "01",
      title: "Sprint Cadence & Sizing",
      desc: "Projects are typically executed in structured 2 to 4-week milestone sprints with tangible end-of-week demo builds and zero fluff.",
      icon: Zap,
    },
    {
      id: "02",
      title: "Stack Specialization",
      desc: "Deep focus on Next.js (App Router), React 19, Tailwind CSS v4, distributed APIs, and 60fps kinetic interaction design.",
      icon: Layers,
    },
    {
      id: "03",
      title: "Async-First Efficiency",
      desc: "Collaboration thrives on clear asynchronous communication, pull requests, and recorded walk-throughs to maximize deep focus hours.",
      icon: Clock,
    },
    {
      id: "04",
      title: "Engagement Models",
      desc: "Available for end-to-end greenfield builds, design system architecture, or retained fractional technical leadership.",
      icon: Terminal,
    },
  ];

  return (
    <section className="pt-20 md:pt-28 pb-16 border-t border-white/10">
      {/* Section Header */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-12"
      >
        <span
          className="block text-white/40 text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          02 // ENGAGEMENT STANDARDS & FAQ
        </span>
        <h2 className="text-white font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
          COLLABORATION<br />
          <span className="text-white/40">EXPECTATIONS & PROTOCOLS.</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guidelines.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              variants={fadeUp(0.15 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-white/30 text-[11px] font-mono tracking-widest"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    [{item.id}]
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/60">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-white font-bold text-[18px] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-white/55 text-[13px] sm:text-[14px] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-white/30 text-[10px] font-mono">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>PROTOCOL ACTIVE</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[12px] font-mono">
        <p>© {new Date().getFullYear()} Ronik Koirala. Direct Transmission Gateway.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>INBOX DISPATCH MONITORED</span>
        </p>
      </div>
    </section>
  );
}
