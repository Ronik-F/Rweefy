import TrackerDashboard from "@/components/tracker/TrackerDashboard";

export const metadata = {
    title: "Tracker — Ronik Koirala",
    description: "Quantified self metrics and vital statistics.",
};

export default function TrackerPage() {
    return (
        <main className="min-h-screen px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-20">
          <div className="mx-auto w-full max-w-6xl">

            {/* Header */}
            <section className="mb-12 flex justify-between items-end border-b border-white/10 pb-8">
                <div>
                    <h1 className="text-white font-bold tracking-tight text-[44px] sm:text-[60px] lg:text-[72px] leading-none mb-3">
                        TRACKER.
                    </h1>
                    <p className="text-white/50 max-w-xl text-[15px] leading-relaxed">
                        Quantified self metrics and vital statistics. Monitored for optimization.
                    </p>
                </div>
                <div
                    className="hidden md:flex flex-col items-end gap-1 text-white/30 text-[11px] tracking-wider"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                    <span>STATUS: NOMINAL</span>
                    <span>SYSTEM: ONLINE</span>
                </div>
                </section>

                <TrackerDashboard />
            </div>
        </main>
    );
}