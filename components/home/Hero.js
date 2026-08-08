"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";
import { fadeUp } from "@/lib/motionVariants";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-[#0a0a0a]">
      {/* Background Portrait */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Ronik Koirala"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-10 lg:px-14">
        <div className="max-w-[600px] w-full">
          {/* Main Headline */}
          <AnimatedText
            text="minimal,"
            className="text-white font-bold leading-[0.95] tracking-[-0.03em] text-[64px] md:text-[88px] lg:text-[104px]"
            delay={0.4}
          />
          <AnimatedText
            text="works &"
            className="text-white font-bold leading-[0.95] tracking-[-0.03em] text-[64px] md:text-[88px] lg:text-[104px]"
            delay={0.55}
          />
          <AnimatedText
            text="even"
            className="text-white font-bold leading-[0.95] tracking-[-0.03em] text-[64px] md:text-[88px] lg:text-[104px]"
            delay={0.7}
          />
          <AnimatedText
            text="better."
            className="text-white font-bold leading-[0.95] tracking-[-0.03em] text-[64px] md:text-[88px] lg:text-[104px]"
            delay={0.85}
          />

          {/* Subtext (mono) */}
          <motion.p
            variants={fadeUp(1.4)}
            initial="hidden"
            animate="show"
            className="mt-8 md:mt-10 max-w-[280px] text-white/85 font-mono text-[12px] md:text-[13px] leading-[1.7] tracking-tight"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            i don&apos;t like unnecessary complexity — in design, or in life.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
