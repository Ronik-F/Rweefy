"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Zap } from "lucide-react";

export default function StatCard({ label, value, unit, trend, accent = false }) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.25)" }}
      transition={{ duration: 0.3 }}
      className={`
        p-5 sm:p-6 rounded-3xl bg-white/[0.02] border transition-colors flex flex-col justify-between
        ${accent ? "border-white/20 bg-white/[0.04]" : "border-white/10"}
      `}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className="text-white/40 text-[10px] sm:text-[11px] tracking-widest uppercase font-mono truncate"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {label}
        </span>
        {accent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
      </div>

      {/* Main Metric Value */}
      <div className="flex items-baseline gap-1.5 mb-2">
        <span
          className="text-white text-[28px] sm:text-[34px] font-bold tracking-tight font-mono"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {value}
        </span>
        {unit && (
          <span className="text-white/40 text-[12px] font-mono uppercase">
            {unit}
          </span>
        )}
      </div>

      {/* Bottom Trend / Subtext */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
        <span>STATUS: VERIFIED</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          <span>{trend || "+8.2%"}</span>
        </span>
      </div>
    </motion.div>
  );
}