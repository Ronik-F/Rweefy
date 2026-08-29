"use client";

import { useState } from "react";

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
    const chartPoints = values.map((value, index) => [
        (index / Math.max(values.length - 1, 1)) * 100,
        100 - (value / max) * 86 - 7,
    ]);
    const linePath = smoothPath(chartPoints);
    const areaPath = `${linePath} L100,100 L0,100 Z`;
    const average = (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);

    return (
        <div
            className="flex flex-col gap-4 rounded-sm p-5 sm:p-6"
            style={{
                backgroundColor: "#0b0b0b",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span
                    className="text-white/40 text-[11px] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    Weekly Focus Density · {range}
                </span>
                <span
                    className="text-white text-[11px] tracking-wider"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    AVG: {average} HRS
                </span>
            </div>

            <div className="relative h-[190px] border-b border-l border-white/10 px-2 pt-5 pb-4 sm:h-[220px]">
                {/* Y labels */}
                <div
                    className="absolute -left-6 top-0 h-full flex flex-col justify-between text-white/30 text-[10px] pb-4"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    {[`${max}h`, `${Math.round(max * 0.75)}h`, `${Math.round(max * 0.5)}h`, `${Math.round(max * 0.25)}h`, "0h"].map((l) => <span key={l}>{l}</span>)}
                </div>

                {/* Grid lines */}
                {[20, 40, 60, 80].map((pct) => (
                    <div
                        key={pct}
                        className="absolute left-0 right-0 border-t border-white/5"
                        style={{ top: `${pct}%` }}
                    />
                ))}

                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d={areaPath} fill="url(#area-gradient)" />
                    <path d={linePath} fill="none" stroke="white" strokeWidth="1.5" />
                    {chartPoints.map(([cx, cy], index) => (
                        <g key={`${cx}-${cy}`}>
                            <circle
                                cx={cx}
                                cy={cy}
                                r={activeIndex === index ? "3" : "2"}
                                fill={activeIndex === index ? "white" : "#0b0b0b"}
                                stroke="white"
                                strokeWidth="1"
                                className="cursor-pointer transition-all"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            />
                            {activeIndex === index && (
                                <g pointerEvents="none">
                                    <rect x={Math.max(1, cx - 10)} y={Math.max(1, cy - 19)} width="20" height="11" rx="2" fill="white" />
                                    <text x={cx} y={Math.max(9, cy - 11)} textAnchor="middle" fill="#0b0b0b" fontSize="5">{values[index]}h</text>
                                </g>
                            )}
                        </g>
                    ))}
                </svg>

                {/* X labels */}
                <div
                    className="absolute -bottom-6 left-0 w-full flex justify-between text-white/30 text-[10px]"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    {["W1", "W4", "W8", "W12"].map((w) => <span key={w}>{w}</span>)}
                </div>
            </div>
        </div>
    );
}