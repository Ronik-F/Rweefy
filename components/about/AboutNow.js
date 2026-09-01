"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Radio, BookOpen, Activity, ArrowUpRight, Flame, Target } from "lucide-react";
import { fadeUp, easeOutExpo } from "@/lib/motionVariants";

export default function AboutNow() {
  const currentReads = [
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", topic: "Distributed Systems" },
    { title: "The Elements of Typographic Style", author: "Robert Bringhurst", topic: "Visual Craft" },
    { title: "Deep Work", author: "Cal Newport", topic: "Cognitive Focus" },
  ];

  const focusAreas = [
    { title: "Autonomous Interface Systems", desc: "Crafting fluid reactive interfaces with micro-interactions and zero UI lag." },
    { title: "Quantified Self Architecture", desc: "Developing personal tracking algorithms for habit compounding and cognitive output." },
    { title: "Editorial Design Engineering", desc: "Exploring the boundary between brutalist minimalism and haute couture digital magazines." },
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
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span
              className="text-white/40 text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              05 // REAL-TIME DISPATCHES (NOW)
            </span>
          </div>
          <h2 className="text-white font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
            CURRENT FOCUS &<br className="hidden sm:inline" /> OBSESSIONS.
          </h2>
        </div>
        <p className="text-white/50 max-w-sm text-[14px] sm:text-[15px] leading-relaxed">
          A living snapshot of what I am currently researching, building, and exploring in real time.
        </p>
      </motion.div>

      {/* Grid of Now Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: What I'm Building (7 cols) */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-white/80" />
                <h3 className="text-white font-bold text-[20px] tracking-tight">
                  Active Engineering Directives
                </h3>
              </div>
              <span
                className="text-white/40 text-[11px] font-mono uppercase"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Q3 / 2026
              </span>
            </div>

            <div className="space-y-6">
              {focusAreas.map((item, idx) => (
                <div key={item.title} className="group flex items-start gap-4">
                  <span
                    className="text-white/30 text-[12px] font-mono shrink-0 mt-0.5"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    0{idx + 1}.
                  </span>
                  <div>
                    <h4 className="text-white font-medium text-[16px] group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/55 text-[14px] leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
            <span
              className="text-white/30 text-[11px] font-mono tracking-wider uppercase"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              STATE: IN ACTIVE EXECUTION
            </span>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 text-white text-[13px] font-medium hover:opacity-75 transition-opacity"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Reading & Quantified Tracker Link (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Reading List */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10"
          >
            <div className="flex items-center gap-2.5 mb-6 text-white/80">
              <BookOpen className="w-4 h-4" />
              <h3 className="text-white font-bold text-[18px] tracking-tight">
                Currently Digesting
              </h3>
            </div>

            <div className="space-y-4">
              {currentReads.map((book) => (
                <div
                  key={book.title}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-white text-[14px] font-medium truncate">
                      {book.title}
                    </p>
                    <span
                      className="text-white/40 text-[10px] uppercase font-mono shrink-0"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {book.topic}
                    </span>
                  </div>
                  <p className="text-white/50 text-[12px] mt-0.5">
                    by {book.author}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tracker Bridge Card */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -3, transition: { duration: 0.3, ease: easeOutExpo } }}
            className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/15 hover:border-white/30 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-mono uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>Life Tracker Integration</span>
              </div>
              <Activity className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
            </div>

            <h4 className="text-white font-bold text-[20px] tracking-tight mb-2">
              Quantified Self Telemetry
            </h4>
            <p className="text-white/60 text-[13px] leading-relaxed mb-5">
              Live biometric habits, deep focus hours, and study density are tracked dynamically.
            </p>

            <Link
              href="/tracker/add"
              className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-white text-[#0a0a0a] font-semibold text-[13px] hover:bg-white/90 transition-colors"
            >
              <span>View Live Metrics</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
