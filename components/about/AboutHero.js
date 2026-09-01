"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Terminal } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp, easeOutExpo } from "@/lib/motionVariants";

export default function AboutHero() {
  const stats = [
    { label: "EXPERIENCE", value: "4+ Years", detail: "Full-Stack & Product Architecture" },
    { label: "DISCIPLINE", value: "Design + Code", detail: "Zero Compromise on Polish" },
    { label: "METHODOLOGY", value: "Minimalism", detail: "Radical Simplicity & Speed" },
    { label: "LOCATION", value: "Kathmandu", detail: "Building Globally (UTC+5:45)" },
  ];

  return (
    <section className="relative pt-32 md:pt-40 pb-16 border-b border-white/10">
      {/* Editorial Meta Header */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-white/10"
      >
        <div
          className="flex items-center gap-3 text-white/50 text-[12px] tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>01 // DOSSIER & PROFILE</span>
        </div>

        <div
          className="flex items-center gap-6 text-white/40 text-[11px] tracking-wider uppercase"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-white/60" />
            Kathmandu, NP
          </span>
          <span className="hidden sm:inline-block text-white/20">•</span>
          <span className="flex items-center gap-1.5 text-white/60">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            OPEN FOR SELECT WORK
          </span>
        </div>
      </motion.div>

      {/* Main Title Section */}
      <div className="mb-14">
        <AnimatedText
          text="ARCHITECTING"
          className="text-white font-bold leading-[0.92] tracking-[-0.035em] text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px]"
          delay={0.2}
        />
        <AnimatedText
          text="DIGITAL CLARITY."
          className="text-white/40 font-bold leading-[0.92] tracking-[-0.035em] text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px]"
          delay={0.35}
        />
      </div>

      {/* Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Editorial Statement */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-6 text-white/80 text-[17px] sm:text-[19px] leading-[1.7] font-light">
            <p className="text-white text-[22px] sm:text-[25px] font-medium leading-[1.4] tracking-tight">
              I am <span className="text-white underline decoration-white/30 underline-offset-8">Ronik Koirala</span> — a software engineer and interface designer dedicated to building high-performance, intentionally minimal digital experiences.
            </p>
            <p>
              I thrive at the intersection where rigorous systems engineering meets nuanced visual craft. Rather than chasing superficial trends, I build resilient systems that prioritize speed, clarity, and uncompromising aesthetic longevity.
            </p>
            <p className="text-white/60 text-[15px] sm:text-[16px]">
              Whether architecting robust full-stack applications, fine-tuning 60fps micro-animations, or optimizing life trackers, my north star remains constant: <span className="text-white font-normal">eliminate unnecessary friction, amplify human agency.</span>
            </p>
          </div>

          {/* Quick quote box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-white/10 group-hover:text-white/20 transition-colors">
              <Sparkles className="w-8 h-8" />
            </div>
            <p
              className="text-white/40 text-[11px] tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Guiding Principle
            </p>
            <blockquote className="text-white/90 text-[16px] sm:text-[17px] italic font-serif leading-relaxed">
              &ldquo;Simplicity is not about having less. It is about making room for what truly matters.&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* Right Column: Portrait Card & Key Telemetry */}
        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Portrait Container */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 p-2 shadow-2xl transition-all duration-700 hover:border-white/30">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-900">
              <Image
                src="/heroimage/RonikF.png"
                alt="Ronik Koirala"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              
              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Badges on image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div
                  className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[11px] tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Ronik Koirala // Lead
                </div>
                <div
                  className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 text-[11px] tracking-wider"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  EST. 2004
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.25)" }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 transition-colors"
              >
                <span
                  className="block text-white/40 text-[10px] tracking-[0.2em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {stat.label}
                </span>
                <span className="block text-white font-semibold text-[17px] tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="block text-white/50 text-[12px] leading-tight">
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
