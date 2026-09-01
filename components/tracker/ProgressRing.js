"use client";

import { motion } from "framer-motion";

export default function ProgressRing({
  value,
  max,
  unit,
  label,
  target,
  color = "emerald",
  accentGradient,
}) {
  const radius = 38;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(Math.max(value / max, 0), 1);
  const offset = circumference * (1 - percentage);

  const gradients = {
    emerald: {
      from: "#34d399",
      to: "#059669",
      glow: "rgba(52, 211, 153, 0.35)",
      bg: "rgba(52, 211, 153, 0.1)",
    },
    amber: {
      from: "#fbbf24",
      to: "#d97706",
      glow: "rgba(251, 191, 36, 0.35)",
      bg: "rgba(251, 191, 36, 0.1)",
    },
    blue: {
      from: "#60a5fa",
      to: "#2563eb",
      glow: "rgba(96, 165, 250, 0.35)",
      bg: "rgba(96, 165, 250, 0.1)",
    },
    violet: {
      from: "#a78bfa",
      to: "#7c3aed",
      glow: "rgba(167, 139, 250, 0.35)",
      bg: "rgba(167, 139, 250, 0.1)",
    },
    white: {
      from: "#ffffff",
      to: "#a3a3a3",
      glow: "rgba(255, 255, 255, 0.3)",
      bg: "rgba(255, 255, 255, 0.1)",
    },
  };

  const scheme = gradients[color] || gradients.white;
  const gradId = `ring-grad-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="flex items-center gap-5 group p-2 rounded-2xl hover:bg-white/[0.02] transition-colors">
      {/* Ring Container */}
      <div className="relative w-18 h-18 flex-shrink-0 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={scheme.from} />
              <stop offset="100%" stopColor={scheme.to} />
            </linearGradient>
            <filter id={`glow-${gradId}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
          />

          {/* Animated Glowing Foreground Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={`url(#${gradId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            strokeLinecap="round"
            filter={`url(#glow-${gradId})`}
          />
        </svg>

        {/* Center Value */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-[12px] font-bold font-mono tracking-tight"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span>
            {value}
            <span className="text-[10px] text-white/50">{unit}</span>
          </span>
        </div>
      </div>

      {/* Label and Target Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-white font-semibold text-[15px] tracking-tight group-hover:text-white transition-colors truncate">
            {label}
          </h4>
          <span
            className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: scheme.bg,
              color: scheme.from,
              fontFamily: "var(--font-jetbrains)",
            }}
          >
            {Math.round(percentage * 100)}%
          </span>
        </div>

        <div
          className="text-white/40 text-[11px] tracking-wider uppercase font-mono flex items-center justify-between"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span>Target: {target}</span>
          <span className="text-white/20">•</span>
          <span className="text-white/50">{value >= max ? "OPTIMAL" : "PACING"}</span>
        </div>
      </div>
    </div>
  );
}