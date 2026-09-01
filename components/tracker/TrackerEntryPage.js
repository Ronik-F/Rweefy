"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Terminal } from "lucide-react";
import AddTrackerEntry, { trackerSections } from "./AddTrackerEntry";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp } from "@/lib/motionVariants";

export default function TrackerEntryPage({ category }) {
  const section = trackerSections[category] || trackerSections["deep-work"];

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-14 pt-32 sm:pt-40 pb-20 overflow-x-hidden selection:bg-white selection:text-[#0a0a0a]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-white/[0.015] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header Breadcrumb & Status */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10"
        >
          <Link
            href="/tracker"
            className="group flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-mono transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN TO MASTER TELEMETRY</span>
          </Link>

          <div
            className="flex items-center gap-3 text-white/40 text-[11px] font-mono uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>QUANTIFIED SUITE: {section.label.toUpperCase()}</span>
          </div>
        </motion.div>

        {/* Title */}
        <div className="mb-12">
          <AnimatedText
            text={`LOG ${section.label.toUpperCase()}.`}
            className="text-white font-bold leading-[0.92] tracking-[-0.035em] text-[48px] sm:text-[68px] md:text-[88px] lg:text-[104px]"
            delay={0.2}
          />
          <p className="text-white/60 text-[16px] sm:text-[18px] max-w-xl font-light mt-4">
            {section.description}
          </p>
        </div>

        {/* Entry Component */}
        <AddTrackerEntry category={category} />
      </div>
    </main>
  );
}
