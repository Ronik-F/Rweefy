"use client";

import { useState } from "react";

const LEVELS = [
    "rgba(255,255,255,0.04)",
    "rgba(255,255,255,0.12)",
    "rgba(255,255,255,0.30)",
    "rgba(255,255,255,0.60)",
    "rgba(255,255,255,1.00)",
];

const cells = Array.from({ length: 52 * 7 }, (_, index) => {
    const wave = (index * 17 + Math.floor(index / 7) * 11) % 100;
    if (wave > 91) return 4;
    if (wave > 73) return 3;
    if (wave > 48) return 2;
    if (wave > 27) return 1;
    return 0;
}).map((level, index) => ({
    level,
    day: index % 7,
    week: Math.floor(index / 7) + 1,
    hours: [0, 1, 2, 4, 7][level],
}));

export default function Heatmap() {
    const [activeCell, setActiveCell] = useState(null);

    return (
        <div
            className="flex flex-col gap-5 rounded-sm p-5 sm:p-6"
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
                    Daily Activity (Last Year)
                </span>
                <div
                    className="flex items-center gap-3 text-white/30 text-[10px]"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    <span className="hidden sm:inline">Less</span>
                    <div className="flex gap-1">
                        {LEVELS.map((bg, i) => (
                            <div key={i} className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: bg }} />
                        ))}
                    </div>
                    <span className="hidden sm:inline">More</span>
                </div>
            </div>

            <div className="overflow-x-auto pb-1">
                <div
                    className="grid grid-rows-7 gap-[3px]"
                    style={{
                        gridAutoFlow: "column",
                        gridAutoColumns: "12px",
                        width: "fit-content",
                    }}
                >
                    {cells.map((cell, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Week ${cell.week}, day ${cell.day + 1}: ${cell.hours} active hours`}
                            onMouseEnter={() => setActiveCell(cell)}
                            onMouseLeave={() => setActiveCell(null)}
                            onFocus={() => setActiveCell(cell)}
                            onBlur={() => setActiveCell(null)}
                            className="h-3 w-3 rounded-[2px] transition-transform duration-200 hover:scale-150 focus:scale-150 focus:outline-none focus:ring-1 focus:ring-white"
                            style={{ backgroundColor: LEVELS[cell.level] }}
                        />
                    ))}
                </div>
            </div>

            <div className="h-4 text-[10px] text-white/45" style={{ fontFamily: "var(--font-jetbrains)" }}>
                {activeCell ? `WEEK ${activeCell.week} · DAY ${activeCell.day + 1} · ${activeCell.hours} ACTIVE HRS` : "Hover or focus a day to inspect activity"}
            </div>

            <div
                className="flex justify-between text-white/30 text-[10px]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
            >
                {["Jan", "Apr", "Jul", "Oct", "Dec"].map((m) => (
                    <span key={m}>{m}</span>
                ))}
            </div>
        </div>
    );
}