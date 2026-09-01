"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Activity, ArrowUpRight } from "lucide-react";

function smoothPath(points) {
  return points.reduce((path, point, index) => {
    if (index === 0) return `M${point[0]},${point[1]}`;
    const previous = points[index - 1];
    const controlX = (previous[0] + point[0]) / 2;
    return `${path} C${controlX},${previous[1]} ${controlX},${point[1]} ${point[0]},${point[1]}`;
  }, "");
}

export default function TrendChart({ values, range }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const max = Math.max(50, ...values);
  const min = Math.min(...values);

  const chartPoints = values.map((value, index) => [
    (index / Math.max(values.length - 1, 1)) * 100,
    100 - (value / max) * 82 - 9,
  ]);

  const linePath = smoothPath(chartPoints);
  const areaPath = `${linePath} L100,100 L0,100 Z`;
  const average = (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-all duration-500">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/10">
        <div>
          <span
            className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase block mb-1"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            FOCUS DENSITY & VELOCITY TREND
          </span>
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold text-[18px] sm:text-[20px] tracking-tight">
              {average}h Weekly Mean
            </h3>
            <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-mono">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.4% Velocity</span>
            </span>
          </div>
        </div>

        <div
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[11px] font-mono"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <Activity className="w-3 h-3 text-white/70" />
          <span>SAMPLE: {range}</span>
        </div>
      </div>

      {/* Interactive Chart Canvas */}
      <div className="relative h-[200px] sm:h-[230px] border-b border-l border-white/10 px-2 pt-6 pb-6 mt-2">
        {/* Y Axis Guide Labels */}
        <div
          className="absolute -left-7 top-0 h-full flex flex-col justify-between text-white/30 text-[10px] pb-6 pointer-events-none"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {[`${max}h`, `${Math.round(max * 0.75)}h`, `${Math.round(max * 0.5)}h`, "0h"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>

        {/* Horizontal Subtle Guide Grids */}
        {[25, 50, 75].map((pct) => (
          <div
            key={pct}
            className="absolute left-0 right-0 border-t border-white/[0.04] pointer-events-none"
            style={{ top: `${pct}%` }}
          />
        ))}

        {/* SVG Graphic Curve */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trend-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Area Fill */}
          <path d={areaPath} fill="url(#trend-area-grad)" />

          {/* Glowing Stroke Path */}
          <path
            d={linePath}
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            filter="url(#line-glow)"
          />

          {/* Interactive Data Points */}
          {chartPoints.map(([cx, cy], index) => {
            const isHovered = activeIndex === index;
            return (
              <g key={`${cx}-${cy}`}>
                {/* Vertical Crosshair on Hover */}
                {isHovered && (
                  <line
                    x1={cx}
                    y1={0}
                    x2={cx}
                    y2={100}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                )}

                {/* Point Circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 4 : 2.5}
                  fill={isHovered ? "#10b981" : "#ffffff"}
                  stroke="#0a0a0a"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                />

                {/* Floating Tooltip Pill */}
                {isHovered && (
                  <g pointerEvents="none">
                    <rect
                      x={Math.max(2, Math.min(cx - 14, 72))}
                      y={Math.max(2, cy - 22)}
                      width="28"
                      height="15"
                      rx="4"
                      fill="#ffffff"
                      stroke="#0a0a0a"
                      strokeWidth="0.5"
                    />
                    <text
                      x={Math.max(2, Math.min(cx - 14, 72)) + 14}
                      y={Math.max(2, cy - 22) + 10}
                      textAnchor="middle"
                      fill="#0a0a0a"
                      fontSize="6.5"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                    >
                      {values[index]}h Focus
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* X Axis Range Markers */}
        <div
          className="absolute -bottom-6 left-0 w-full flex justify-between text-white/30 text-[10px] font-mono"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span>START ({range})</span>
          <span>MIDPOINT</span>
          <span>CURRENT WEEK</span>
        </div>
      </div>
    </div>
  );
}