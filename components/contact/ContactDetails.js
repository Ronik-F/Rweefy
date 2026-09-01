"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, MapPin, ArrowUpRight, MessageSquare, ShieldCheck } from "lucide-react";
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

export default function ContactDetails() {
  const [copied, setCopied] = useState(false);
  const email = "theronikkoiralaf@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const channels = [
    { name: "GitHub", href: "https://github.com/RonikF", icon: GithubIcon, meta: "Repositories & Open Source" },
    { name: "Twitter / X", href: "https://twitter.com", icon: TwitterIcon, meta: "Dispatches & Thoughts" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon, meta: "Professional Network" },
    { name: "Discord", href: "#", icon: MessageSquare, meta: "ronik.dev (Instant Sync)" },
  ];

  return (
    <div className="space-y-6">
      {/* Primary Email Quick Copy Card */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/15 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            DIRECT ENDPOINT
          </span>
          <Mail className="w-4 h-4 text-white/50" />
        </div>

        <h4 className="text-white font-bold text-[20px] sm:text-[22px] tracking-tight mb-2">
          Primary Electronic Mail
        </h4>
        <p className="text-white/60 text-[13px] leading-relaxed mb-6 font-light">
          For formal inquiries, RFCs, and partnership discussions.
        </p>

        {/* Copy Box */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/50 border border-white/10 font-mono text-[13px] sm:text-[14px]">
          <span className="text-white/90 truncate mr-2">{email}</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[12px] flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-white/70" />
                <span className="font-sans font-medium">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Location & Timezone Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-2 text-white/40 text-[11px] font-mono uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-white/60" />
            <span>OPERATIONAL BASE</span>
          </div>
          <p className="text-white font-bold text-[17px] tracking-tight">
            Kathmandu, Nepal
          </p>
          <p className="text-white/50 text-[12px] mt-1">
            Global Remote Available (All Timezones)
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-2 text-white/40 text-[11px] font-mono uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMMUNICATION SLA</span>
          </div>
          <p className="text-white font-bold text-[17px] tracking-tight">
            &lt; 24 Hour Turnaround
          </p>
          <p className="text-white/50 text-[12px] mt-1">
            Async-First & Structured Syncs
          </p>
        </div>
      </div>

      {/* Social & Channel Network */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10">
        <span
          className="text-white/40 text-[11px] font-mono uppercase tracking-[0.2em] block mb-4"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          CONNECTED CHANNELS
        </span>

        <div className="space-y-2.5">
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-white text-[14px] font-medium leading-tight">
                      {ch.name}
                    </span>
                    <span className="block text-white/40 text-[11px] font-mono leading-tight mt-0.5">
                      {ch.meta}
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
  );
}
