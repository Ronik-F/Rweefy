"use client";

import Link from "next/link";
import ProgressRing from "./ProgressRing";
import { Activity, Plus, Sparkles, Zap } from "lucide-react";

const vitals = [
  { value: 7.8, max: 8, unit: "h", label: "Sleep Architecture", target: "8.0h", color: "blue" },
  { value: 92, max: 100, unit: "%", label: "Nutrition & Diet", target: "100%", color: "amber" },
  { value: 60, max: 60, unit: "m", label: "Physical Conditioning", target: "60m Active", color: "emerald" },
];

export default function TrackerCard({ onQuickAdd }) {
  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 flex flex-col justify-between h-full relative overflow-hidden group hover:border-white/20 transition-all duration-500">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              DAILY VITALITY MATRIX
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>94/100 COMPOSITE</span>
          </div>
        </div>

        {/* Progress Rings */}
        <div className="flex flex-col gap-4">
          {vitals.map((v) => (
            <ProgressRing key={v.label} {...v} />
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
        <span
          className="text-white/30 text-[11px] font-mono"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          UPDATED TODAY
        </span>

        <Link
          href="/tracker/add"
          className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0a0a0a] text-[12px] font-medium flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Log Metrics</span>
        </Link>
      </div>
    </div>
  );
}