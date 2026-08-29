"use client";

import AddTrackerEntry, { trackerSections } from "./AddTrackerEntry";

export default function TrackerEntryPage({ category }) {
  const section = trackerSections[category];

  return (
    <main className="min-h-screen px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <section className="mb-10 border-b border-white/10 pb-8">
          <p
            className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/35"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Tracker / {section.label}
          </p>
          <h1 className="text-5xl font-bold leading-none tracking-[-0.04em] text-white sm:text-7xl">
            LOG {section.label.toUpperCase()}.
          </h1>
        </section>
        <AddTrackerEntry category={category} />
      </div>
    </main>
  );
}
