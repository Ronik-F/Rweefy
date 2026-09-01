"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Radio, Terminal } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import { fadeUp } from "@/lib/motionVariants";

export default function ContactHero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-12 border-b border-white/10">
      {/* Editorial Meta Bar */}
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
          <span>01 // DIRECT TRANSMISSION PROTOCOL</span>
        </div>

        <div
          className="flex items-center gap-6 text-white/40 text-[11px] tracking-wider uppercase font-mono"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span className="flex items-center gap-2 text-white/70">
            <Clock className="w-3.5 h-3.5 text-white/50" />
            <span>KATHMANDU {time || "--:--:--"} (NPT)</span>
          </span>
          <span className="hidden sm:inline-block text-white/20">•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>ACCEPTING INQUIRIES</span>
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <div className="mb-10">
        <AnimatedText
          text="INITIATE"
          className="text-white font-bold leading-[0.92] tracking-[-0.035em] text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px]"
          delay={0.2}
        />
        <AnimatedText
          text="DIRECT DIALOGUE."
          className="text-white/40 font-bold leading-[0.92] tracking-[-0.035em] text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px]"
          delay={0.35}
        />
      </div>

      {/* Intro Text */}
      <motion.p
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="show"
        className="text-white/70 text-[16px] sm:text-[18px] leading-relaxed font-light max-w-2xl"
      >
        Whether proposing an ambitious new software project, an interface design overhaul, or discussing systems architecture — your transmission is delivered directly to my personal inbox.
      </motion.p>
    </section>
  );
}
