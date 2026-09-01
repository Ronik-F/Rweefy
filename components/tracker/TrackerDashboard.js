"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heatmap from "./Heatmap";
import StatCard from "./StatCard";
import TrackerCard from "./TrackerCard";
import TrackerControls from "./TrackerControls";
import TrendChart from "./TrendChart";
import AddTrackerEntry from "./AddTrackerEntry";
import { LayoutDashboard, PlusCircle, Activity, Sparkles, Flame, Zap } from "lucide-react";
import { getStoredEntries, TRACKER_EVENT } from "@/lib/trackerStorage";
import { easeOutExpo } from "@/lib/motionVariants";

const chartData = {
  "4W": [32, 38, 29, 44],
  "12W": [24, 29, 21, 34, 31, 38, 35, 42, 37, 44, 40, 48],
  "6M": [18, 25, 22, 31, 28, 36, 33, 40, 37, 43, 39, 48],
  "1Y": [14, 20, 18, 24, 22, 29, 26, 34, 31, 38, 35, 48],
};

export default function TrackerDashboard() {
  const [range, setRange] = useState("12W");
  const [viewMode, setViewMode] = useState("dashboard"); // dashboard | log
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const refresh = () => setEntries(getStoredEntries());
    refresh();

    window.addEventListener(TRACKER_EVENT, refresh);
    return () => window.removeEventListener(TRACKER_EVENT, refresh);
  }, []);

  const totalDeepWorkMinutes = entries
    .filter((e) => e.category === "deep-work")
    .reduce((sum, e) => sum + (parseFloat(e.value) || 0), 0);

  const stats = [
    { label: "Deep Work Total", value: `${Math.round(totalDeepWorkMinutes / 60) || 142}h`, trend: "+14.2%", accent: true },
    { label: "Books Read YTD", value: "18", unit: "VOL", trend: "On Target" },
    { label: "Resting Heart Rate", value: "52", unit: "BPM", trend: "Optimal (Top 1%)" },
    { label: "Consecutive Streak", value: "12", unit: "DAYS", trend: "+100% Flow", accent: true },
  ];

  return (
    <div className="space-y-8">
      {/* Top View Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2 p-1 rounded-2xl bg-white/[0.03] border border-white/10">
          <button
            onClick={() => setViewMode("dashboard")}
            className={`
              relative px-4 py-2 rounded-xl text-[13px] font-medium flex items-center gap-2 transition-all cursor-pointer
              ${
                viewMode === "dashboard"
                  ? "text-white font-semibold"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }
            `}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Master Telemetry</span>
            {viewMode === "dashboard" && (
              <motion.div
                layoutId="trackerViewPill"
                className="absolute inset-0 rounded-xl bg-white/15 border border-white/20 pointer-events-none"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>

          <button
            onClick={() => setViewMode("log")}
            className={`
              relative px-4 py-2 rounded-xl text-[13px] font-medium flex items-center gap-2 transition-all cursor-pointer
              ${
                viewMode === "log"
                  ? "text-white font-semibold"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
              }
            `}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Admin Log Console</span>
            {viewMode === "log" && (
              <motion.div
                layoutId="trackerViewPill"
                className="absolute inset-0 rounded-xl bg-white/15 border border-white/20 pointer-events-none"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        </div>

        <div
          className="flex items-center gap-3 text-white/40 text-[11px] font-mono tracking-wider"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS_METRICS: REAL-TIME</span>
        </div>
      </div>

      {/* Main Mode View */}
      <AnimatePresence mode="wait">
        {viewMode === "dashboard" ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="space-y-8"
          >
            {/* Range Controls */}
            <TrackerControls range={range} onRangeChange={setRange} />

            {/* Core Telemetry Grid: Left Vitality Matrix (4 Cols) + Right Heatmap & Trend (8 Cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-4">
                <TrackerCard onQuickAdd={() => setViewMode("log")} />
              </div>

              <div className="lg:col-span-8 flex flex-col gap-6">
                <Heatmap />
                <TrendChart values={chartData[range] || chartData["12W"]} range={range} />
              </div>
            </div>

            {/* Bottom 4 Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="log"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
          >
            <AddTrackerEntry category="deep-work" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
