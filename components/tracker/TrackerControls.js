"use client";

const ranges = ["4W", "12W", "6M", "1Y"];

export default function TrackerControls({ range, onRangeChange }) {

    return (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
                <p
                    className="text-[10px] uppercase tracking-[0.18em] text-white/35"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    View range
                </p>
                <p className="mt-1 text-sm text-white/65">{range === "1Y" ? "Last 12 months" : `Last ${range}`}</p>
            </div>
            <div className="flex rounded-sm border border-white/10 bg-white/[0.03] p-1" aria-label="Select tracker range">
                {ranges.map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => onRangeChange(item)}
                        className={`px-3 py-1.5 text-[10px] tracking-[0.12em] transition-colors ${
                            range === item ? "bg-white text-black" : "text-white/45 hover:text-white"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
