import TrackerDashboard from "@/components/tracker/TrackerDashboard";
import AnimatedText from "@/components/ui/AnimatedText";

export const metadata = {
  title: "Tracker & Telemetry — Ronik Koirala",
  description:
    "Real-time quantified self metrics, deep work focus density, circadian vitality, and habit compounding matrix.",
  openGraph: {
    title: "Tracker & Telemetry — Ronik Koirala",
    description:
      "Quantified self metrics and vital statistics monitored for peak cognitive and physical performance.",
    type: "website",
  },
};

export default function TrackerPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-14 pt-32 sm:pt-40 pb-20 overflow-x-hidden selection:bg-white selection:text-[#0a0a0a]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[900px] h-[500px] bg-white/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <section className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-8 gap-6">
          <div>
            <div
              className="flex items-center gap-3 text-white/50 text-[12px] tracking-[0.2em] uppercase mb-4 font-mono"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>01 // QUANTIFIED SELF & BIOMETRICS</span>
            </div>

            <AnimatedText
              text="SYSTEM TELEMETRY."
              className="text-white font-bold tracking-tight text-[48px] sm:text-[64px] lg:text-[84px] leading-none mb-3"
              delay={0.2}
            />

            <p className="text-white/60 max-w-xl text-[15px] sm:text-[16px] leading-relaxed font-light mt-4">
              Real-time quantified metrics, cognitive deep focus density, circadian vitality, and habit compounding matrix.
            </p>
          </div>

          <div
            className="flex flex-col items-start md:items-end gap-1.5 text-white/40 text-[11px] font-mono tracking-wider"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STATUS: NOMINAL</span>
            </span>
            <span>TELEMETRY: CLIENT-SIDE ENCRYPTED</span>
            <span>STORAGE: 100% PERSISTENT</span>
          </div>
        </section>

        {/* Master Dashboard */}
        <TrackerDashboard />
      </div>
    </main>
  );
}