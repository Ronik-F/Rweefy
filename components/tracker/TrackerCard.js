import ProgressRing from "./ProgressRing";

const vitals = [
    { value: 7.5, max: 8, unit: "h", label: "Sleep Cycle", target: "8.0h", color: "white" },
    { value: 90, max: 100, unit: "%", label: "Diet (Clean)", target: "100%", color: "gold" },
    { value: 45, max: 90, unit: "m", label: "Exercise", target: "90m Active", color: "dim" },
];

export default function TrackerCard() {
    return (
        <div
            className="flex flex-col p-6 md:p-8 rounded-sm h-full"
            style={{
                backgroundColor: "#0b0b0b",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-8">
                <span
                    className="text-white/40 text-[11px] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    Daily Vitality
                </span>
            </div>

            {/* Rings — top aligned, not pushed to bottom */}
            <div className="flex flex-col gap-8">
                {vitals.map((v) => (
                    <ProgressRing key={v.label} {...v} />
                ))}
            </div>
        </div>
    );
}