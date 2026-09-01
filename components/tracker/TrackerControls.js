"use client";

import { motion } from "framer-motion";
import { Calendar, Filter, Sparkles, SlidersHorizontal } from "lucide-react";

const ranges = [
  { id: "4W", label: "4 Weeks", short: "4W" },
  { id: "12W", label: "12 Weeks", short: "12W" },
  { id: "6M", label: "6 Months", short: "6M" },
  { id: "1Y", label: "Full Year", short: "1Y" },
];

export default function TrackerControls({ range, onRangeChange }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
      <div className="flex items-center gap-3">
        <span
          className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          TELEMETRY SAMPLING WINDOW:
        </span>
        <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white font-mono text-[12px]">
          {range === "1Y" ? "Trailing 365 Days" : `Trailing ${range}`}
        </span>
      </div>

      <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/10">
        {ranges.map((item) => {
          const isSelected = range === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onRangeChange(item.id)}
              className={`
                relative px-3.5 py-1.5 rounded-xl text-[12px] font-mono transition-all duration-300 cursor-pointer
                ${
                  isSelected
                    ? "text-white font-bold"
                    : "text-white/45 hover:text-white hover:bg-white/[0.04]"
                }
              `}
            >
              <span className="relative z-10">{item.short}</span>
              {isSelected && (
                <motion.div
                  layoutId="rangeControlPill"
                  className="absolute inset-0 rounded-xl bg-white/15 border border-white/20 pointer-events-none shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
