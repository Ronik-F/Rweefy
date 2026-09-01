"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Calendar, Sparkles } from "lucide-react";

const LEVELS = [
  "rgba(255, 255, 255, 0.04)",
  "rgba(52, 211, 153, 0.25)",
  "rgba(52, 211, 153, 0.50)",
  "rgba(52, 211, 153, 0.75)",
  "rgba(52, 211, 153, 1.00)",
];

const daysOfWeek = ["M", "", "W", "", "F", "", "S"];

const cells = Array.from({ length: 52 * 7 }, (_, index) => {
  const wave = (index * 19 + Math.floor(index / 7) * 13) % 100;
  let level = 0;
  if (wave > 90) level = 4;
  else if (wave > 70) level = 3;
  else if (wave > 45) level = 2;
  else if (wave > 22) level = 1;

  const dayIndex = index % 7;
  const weekIndex = Math.floor(index / 7) + 1;
  const hours = [0, 1.5, 3.5, 6, 8.5][level];

  return {
    level,
    day: dayIndex,
    week: weekIndex,
    hours,
  };
});

export default function Heatmap() {
  const [activeCell, setActiveCell] = useState(null);

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/10">
        <div>
          <span
            className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase block mb-1"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            ANNUAL ACTIVITY & FOCUS MATRIX (52 WEEKS)
          </span>
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold text-[18px] sm:text-[20px] tracking-tight">
              1,248 Focus Hours
            </h3>
            <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-mono">
              <Flame className="w-3.5 h-3.5" />
              <span>12-Day Streak</span>
            </span>
          </div>
        </div>

        {/* Legend */}
        <div
          className="flex items-center gap-2 text-white/40 text-[11px] font-mono"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span>Less</span>
          <div className="flex gap-1">
            {LEVELS.map((bg, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-[3px] transition-transform hover:scale-125"
                style={{ backgroundColor: bg }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Heatmap Grid Container */}
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="flex gap-2 min-w-[620px]">
          {/* Day Axis */}
          <div className="flex flex-col justify-between py-1 text-[9px] text-white/30 font-mono pr-1">
            {daysOfWeek.map((d, idx) => (
              <span key={idx} className="h-3 leading-3">
                {d}
              </span>
            ))}
          </div>

          {/* 52-Column Grid */}
          <div
            className="grid grid-rows-7 gap-[3px] flex-1"
            style={{
              gridAutoFlow: "column",
              gridAutoColumns: "11px",
            }}
          >
            {cells.map((cell, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Week ${cell.week}, Day ${cell.day + 1}: ${cell.hours} hours`}
                onMouseEnter={() => setActiveCell(cell)}
                onMouseLeave={() => setActiveCell(null)}
                onFocus={() => setActiveCell(cell)}
                onBlur={() => setActiveCell(null)}
                className="h-3 w-3 rounded-[2.5px] transition-all duration-150 hover:scale-150 hover:z-20 hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] focus:scale-150 focus:outline-none cursor-pointer"
                style={{ backgroundColor: LEVELS[cell.level] }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Telemetry Status / Month labels */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
        <div className="text-emerald-400">
          {activeCell ? (
            <span>
              WEEK {activeCell.week} · DAY {activeCell.day + 1} ·{" "}
              <strong className="text-white">{activeCell.hours} ACTIVE HOURS</strong>
            </span>
          ) : (
            <span className="text-white/40">Hover over any day coordinate to inspect telemetry</span>
          )}
        </div>

        <div className="hidden sm:flex gap-4 text-white/30 text-[10px]">
          {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}