export default function StatCard({ label, value, unit, accent = false }) {
    return (
        <div
            className="flex flex-col justify-between p-4 h-24 rounded-sm"
            style={{
                backgroundColor: "#0b0b0b",
                border: "1px solid rgba(255,255,255,0.08)",
                borderLeft: `2px solid ${accent ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)"}`,
            }}
        >
            <span
                className="text-white/40 text-[10px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-jetbrains)" }}
            >
                {label}
            </span>
            <span
                className="text-white text-xl tracking-tight"
                style={{ fontFamily: "var(--font-jetbrains)" }}
            >
                {value}
                {unit && (
                    <span className="text-xs text-white/40 ml-1">{unit}</span>
                )}
            </span>
        </div>
    );
}