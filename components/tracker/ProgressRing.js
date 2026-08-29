"use client";

export default function ProgressRing({ value, max, unit, label, target, color = "white" }) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const percentage = Math.min(value / max, 1);
    const offset = circumference * (1 - percentage);

    const colorMap = {
        white: "#ffffff",
        gold: "#e9c349",
        dim: "#c6c6c7",
    };

    return (
        <div className="flex items-center gap-6">
            <div className="relative w-16 h-16 flex-shrink-0">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50" cy="50" r={radius}
                        fill="transparent"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="4"
                    />
                    <circle
                        cx="50" cy="50" r={radius}
                        fill="transparent"
                        stroke={colorMap[color] || colorMap.white}
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%",
                            transition: "stroke-dashoffset 0.6s ease",
                        }}
                    />
                </svg>
                <div
                    className="absolute inset-0 flex items-center justify-center text-white text-[11px] tracking-tight"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    {value}{unit}
                </div>
            </div>
            <div>
                <div className="text-white font-semibold text-[15px] mb-0.5">{label}</div>
                <div
                    className="text-white/40 text-[11px] tracking-wide uppercase"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    Target: {target}
                </div>
            </div>
        </div>
    );
}