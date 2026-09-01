"use client";

import { motion } from "framer-motion";
import { Terminal, Layers, Sparkles } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp } from "@/lib/motionVariants";

export default function WorkHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 border-b border-white/10">
      {/* Editorial Meta Bar */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10"
      >
        <div
          className="flex items-center gap-3 text-white/50 text-[12px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>01 // INDEXED WORKS & EXPERIMENTAL LABS</span>
        </div>

        <div
          className="flex items-center gap-6 text-white/40 text-[11px] tracking-wider uppercase"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span className="flex items-center gap-1.5 text-white/60">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            ARCHIVE: ACTIVE
          </span>
          <span className="hidden sm:inline-block text-white/20">•</span>
          <span>EST. 2022 — 2026</span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <div className="mb-10">
        <AnimatedText
          text="SELECTED WORKS &"
          className="text-white font-bold leading-[0.92] tracking-[-0.035em] text-[50px] sm:text-[72px] md:text-[92px] lg:text-[112px]"
          delay={0.2}
        />
        <AnimatedText
          text="SYSTEM LABS."
          className="text-white/40 font-bold leading-[0.92] tracking-[-0.035em] text-[50px] sm:text-[72px] md:text-[92px] lg:text-[112px]"
          delay={0.35}
        />
      </div>

      {/* Subtext and positioning */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end justify-between">
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="md:col-span-8 text-white/70 text-[16px] sm:text-[18px] leading-relaxed font-light max-w-2xl"
        >
          A curated catalog of production web applications, distributed architecture tools, and interactive interface experiments built with uncompromising aesthetic standards and speed.
        </motion.p>

        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="show"
          className="md:col-span-4 flex md:justify-end items-center gap-3 text-white/40 text-[12px] font-mono"
        >
          <Layers className="w-4 h-4 text-white/60" />
          <span>PRODUCTION-READY SYSTEMS</span>
        </motion.div>
      </div>
    </section>
  );
}
