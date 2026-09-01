"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import { fadeUp } from "@/lib/motionVariants";

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

function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function AboutCTA() {
  const [copied, setCopied] = useState(false);
  const email = "theronikkoiralaf@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/RonikF", icon: GithubIcon, handle: "@RonikF" },
    { name: "Twitter / X", href: "https://twitter.com", icon: TwitterIcon, handle: "@ronik_k" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, handle: "/in/ronik" },
    { name: "Discord", href: "#", icon: MessageSquare, handle: "ronik.dev" },
  ];

  return (
    <section className="pt-20 md:pt-28 pb-16">
      {/* Editorial Meta Header */}
      <motion.div
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-12"
      >
        <span
          className="block text-white/40 text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          06 // INITIATE DIALOGUE
        </span>
        <h2 className="text-white font-bold tracking-tight text-[38px] sm:text-[56px] md:text-[72px] lg:text-[84px] leading-[0.95]">
          LET&apos;S BUILD SOMETHING<br />
          <span className="text-white/40">TIMELESS TOGETHER.</span>
        </h2>
      </motion.div>

      {/* Main Dialogue Box */}
      <motion.div
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-white/[0.02] border border-white/10 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-white/80 text-[18px] sm:text-[20px] font-light leading-relaxed">
              Whether you are looking to architect a new high-leverage product, overhaul an interface design system, or discuss distributed systems and minimalist craft — my inbox is open.
            </p>

            {/* Interactive Email Copy Module */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <div className="flex-1 flex items-center justify-between px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/15 font-mono text-[14px] sm:text-[15px] text-white">
                <span className="truncate">{email}</span>
                <button
                  onClick={handleCopy}
                  aria-label="Copy email address"
                  className="ml-3 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400 hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white/70" />
                      <span className="text-[11px] text-white/70 hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="px-7 py-4 rounded-2xl bg-white text-[#0a0a0a] font-semibold text-[14px] sm:text-[15px] flex items-center justify-center gap-2 hover:bg-white/90 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>

            <p
              className="text-white/30 text-[11px] font-mono tracking-wider uppercase pt-1"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              TYPICAL RESPONSE LATENCY: &lt; 24 HOURS
            </p>
          </div>

          {/* Right Column: Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            <span
              className="text-white/40 text-[11px] font-mono uppercase tracking-widest mb-1"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              CONNECT VIA CHANNELS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-white text-[13px] font-medium leading-tight">
                          {social.name}
                        </span>
                        <span className="block text-white/40 text-[11px] font-mono leading-tight">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Page Footer Note */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[12px] font-mono">
        <p>© {new Date().getFullYear()} Ronik Koirala. Designed & Engineered with precision.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>ALL SYSTEMS OPERATIONAL</span>
        </p>
      </div>
    </section>
  );
}
