"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, Layers, Info } from "lucide-react";
import { fadeUp, easeOutExpo } from "@/lib/motionVariants";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function WorkCard({ project, index, onInspect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: easeOutExpo }}
      className="group relative rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Media Slot (Flexible Fullfill Aspect Ratio Container) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-white/10">
        {/* Editorial Background Canvas */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`}
        >
          {/* Subtle Grid / Scanline Motif */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Center Graphic Placeholder / Watermark */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <span
              className="text-white/20 text-[11px] font-mono tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {"// ARCHITECTURE PREVIEW"}
            </span>
            <p className="text-white/80 font-bold text-[20px] sm:text-[24px] tracking-tight max-w-xs">
              {project.title}
            </p>
          </div>
        </div>

        {/* Real Image Layer (Fulfills container if provided and loaded) */}
        {project.image && !imgError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
            className="object-cover transition-all duration-700 group-hover:scale-105 opacity-0 data-[loaded=true]:opacity-100"
            onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span
            className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[11px] font-mono tracking-wider uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {project.category}
          </span>
          <span
            className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-mono tracking-wider"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {project.year}
          </span>
        </div>

        {/* Hover Inspect Quick Trigger Overlay */}
        <button
          onClick={() => onInspect(project)}
          aria-label={`Inspect ${project.title}`}
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300 cursor-pointer"
        >
          <span className="px-4 py-2 rounded-full bg-white text-[#0a0a0a] font-semibold text-[13px] flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Info className="w-4 h-4" />
            <span>Inspect Architecture</span>
          </span>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
        <div>
          {/* Client & Role */}
          <div className="flex items-center justify-between text-white/40 text-[12px] font-mono mb-2">
            <span>{project.client}</span>
            <span>{project.role}</span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-[22px] sm:text-[24px] tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>

          {/* Subtitle / Summary */}
          <p className="text-white/60 text-[14px] sm:text-[15px] leading-relaxed mt-2 font-light line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Strip */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-white/[0.02] border border-white/5 font-mono text-center">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <span className="block text-[9px] text-white/40 uppercase tracking-wider">{m.label}</span>
                <span className="block text-[12px] text-white/90 font-semibold">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-white/60 text-[11px] font-mono tracking-tight"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-white/30 text-[11px] font-mono">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => onInspect(project)}
            className="text-white/60 hover:text-white text-[13px] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Detailed Spec</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && project.demoUrl !== "#" && (
              <Link
                href={project.demoUrl}
                aria-label="Live Demo"
                className="px-3.5 py-2 rounded-xl bg-white text-[#0a0a0a] font-semibold text-[12px] flex items-center gap-1.5 hover:bg-white/90 transition-colors"
              >
                <span>Launch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
