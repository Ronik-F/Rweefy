"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutArsenal from "@/components/about/AboutArsenal";
import AboutNow from "@/components/about/AboutNow";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutContent() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-14 overflow-x-hidden selection:bg-white selection:text-[#0a0a0a]">
      {/* Background Ambience / Subtle Vignette */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* 01 // Hero Dossier & Bio */}
        <AboutHero />

        {/* 02 // Core Philosophy & Bento */}
        <AboutPrinciples />

        {/* 03 // Career Trajectory & Experience */}
        <AboutTimeline />

        {/* 04 // Capabilities & Arsenal */}
        <AboutArsenal />

        {/* 05 // Real-Time Focus & Reading */}
        <AboutNow />

        {/* 06 // Initiate Dialogue & Socials */}
        <AboutCTA />
      </div>
    </main>
  );
}
