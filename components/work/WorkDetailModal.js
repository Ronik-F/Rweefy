"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Terminal, Layers, Sparkles } from "lucide-react";
import { easeOutExpo } from "@/lib/motionVariants";

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

export default function WorkDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e0e] border border-white/15 p-6 sm:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8 pr-12">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-mono tracking-wider uppercase"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {project.category}
              </span>
              <span className="text-white/40 text-[12px] font-mono">{project.year}</span>
            </div>

            <h2 className="text-white font-bold text-[28px] sm:text-[36px] tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="text-white/60 text-[15px] sm:text-[16px] mt-2 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Overview */}
          <div className="space-y-6 text-white/80 text-[15px] sm:text-[16px] leading-relaxed mb-8">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-2">
                PROJECT BRIEF & PURPOSE
              </h4>
              <p>{project.summary}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-2">
                  CORE CHALLENGE
                </h4>
                <p className="text-white/70 text-[14px]">{project.challenge}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-2">
                  OUTCOME & IMPACT
                </h4>
                <p className="text-white/70 text-[14px]">{project.outcome}</p>
              </div>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="mb-8">
              <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-3">
                SYSTEM TELEMETRY
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center font-mono">
                    <span className="block text-[10px] text-white/40 uppercase mb-1">{m.label}</span>
                    <span className="block text-[16px] text-white font-bold">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="mb-10">
            <h4 className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-3">
              TECHNOLOGY ARSENAL
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-white/80 text-[12px] font-mono"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-white/40 text-[12px] font-mono">
              ROLE: {project.role}
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-[13px] flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.demoUrl && project.demoUrl !== "#" && (
                <Link
                  href={project.demoUrl}
                  className="px-6 py-3 rounded-2xl bg-white text-[#0a0a0a] font-semibold text-[13px] flex items-center gap-2 hover:bg-white/90 transition-colors"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
