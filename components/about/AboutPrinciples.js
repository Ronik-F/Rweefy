"use client";

import { motion } from "framer-motion";
import { Zap, Minimize2, Layers, Cpu } from "lucide-react";
import { fadeUp, easeOutExpo } from "@/lib/motionVariants";

export default function AboutPrinciples() {
  const principles = [
    {
      id: "01",
      title: "Function Over Friction",
      tagline: "RADICAL SUBTRACTION",
      desc: "Minimalism is not the absence of energy; it is the deliberate presence of focus. Every button, border, and animation must earn its place on the screen through clear utility.",
      icon: Minimize2,
      accent: "from-blue-500/10 to-transparent",
    },
    {
      id: "02",
      title: "Fluid 60FPS Tactility",
      tagline: "MOTION WITH INTENTION",
      desc: "Digital interfaces should feel physical, responsive, and alive. Spring physics and calibrated cubic-beziers transform static tools into kinetic extensions of thought.",
      icon: Zap,
      accent: "from-amber-500/10 to-transparent",
    },
    {
      id: "03",
      title: "Holistic Architecture",
      tagline: "END-TO-END COHESION",
      desc: "True craft spans from sub-millisecond database queries to sub-pixel typography. Bridging deep systems engineering with world-class frontend execution.",
      icon: Layers,
      accent: "from-emerald-500/10 to-transparent",
    },
    {
      id: "04",
      title: "Autonomous Longevity",
      tagline: "ENGINEERED TO LAST",
      desc: "Avoiding fleeting design fads in favor of timeless typography, robust type systems, and maintainable software patterns that endure over years.",
      icon: Cpu,
      accent: "from-purple-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/10">
      {/* Section Header */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
      >
        <div>
          <span
            className="block text-white/40 text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            02 // WORKING PHILOSOPHY
          </span>
          <h2 className="text-white font-bold tracking-tight text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
            CORE ETHOS &<br className="hidden sm:inline" /> PRINCIPLES.
          </h2>
        </div>
        <p className="text-white/50 max-w-sm text-[14px] sm:text-[15px] leading-relaxed">
          The mental models and engineering standards governing every system, interface, and project I build.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              variants={fadeUp(0.15 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: easeOutExpo } }}
              className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/10 hover:border-white/25 transition-colors overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Top Row: Index & Icon */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <span
                  className="text-white/30 group-hover:text-white/70 text-[13px] tracking-widest transition-colors font-mono"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  [{item.id}] // {item.tagline}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-white font-bold text-[22px] sm:text-[26px] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[14px] sm:text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Hairline Highlight */}
              <div className="relative z-10 mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-white/30 text-[11px] font-mono">
                <span>STATUS: APPLIED</span>
                <span className="group-hover:text-white/80 transition-colors">VERIFIED &bull;</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
