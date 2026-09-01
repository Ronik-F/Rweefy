"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Sparkles, Terminal } from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

export default function WorkStats() {
  const stats = [
    { label: "INDEXED REPOSITORIES", value: "06+" },
    { label: "PRODUCTION PERFORMANCE", value: "98+ Avg" },
    { label: "TARGET LATENCY", value: "< 50ms" },
    { label: "DESIGN PHILOSOPHY", value: "Minimal" },
  ];

  return (
    <section className="pt-16 pb-20 border-t border-white/10">
      {/* Telemetry Strip */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 font-mono"
          >
            <span
              className="block text-white/40 text-[10px] sm:text-[11px] tracking-widest uppercase mb-1.5"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {s.label}
            </span>
            <span className="block text-white font-bold text-[22px] sm:text-[26px] tracking-tight">
              {s.value}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Collaboration Prompt Card */}
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="rounded-3xl p-8 sm:p-12 bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
      >
        <div className="space-y-2">
          <span
            className="text-white/40 text-[11px] font-mono tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            COLLABORATION & ADVISORY
          </span>
          <h3 className="text-white font-bold text-[26px] sm:text-[32px] tracking-tight">
            Have a project or architectural vision?
          </h3>
          <p className="text-white/60 text-[14px] sm:text-[15px] max-w-xl font-light">
            Available for select product engineering contracts, interface redesigns, and technical advisory.
          </p>
        </div>

        <Link
          href="/about"
          className="px-7 py-4 rounded-2xl bg-white text-[#0a0a0a] font-semibold text-[14px] flex items-center gap-2 hover:bg-white/90 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] shrink-0"
        >
          <span>Initiate Dialogue</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {/* Footer */}
      <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[12px] font-mono">
        <p>© {new Date().getFullYear()} Ronik Koirala. All systems cataloged.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PORTFOLIO DIRECTORY OPERATIONAL</span>
        </p>
      </div>
    </section>
  );
}
