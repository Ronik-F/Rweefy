"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { easeOutExpo } from "@/lib/motionVariants";

export default function ContactForm() {
  const [projectType, setProjectType] = useState("Full-Stack App");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Full-Stack App",
    "Interface & Motion",
    "Technical Advisory",
    "General Inquiry",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    // Create mailto fallback and trigger direct transmission
    const subject = encodeURIComponent(`[Inquiry] ${projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${projectType}\nTimeline/Budget: ${formData.timeline || "Flexible"}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      setStatus("success");
      // Trigger user's mail client as reliable transmission
      window.location.href = `mailto:theronikkoiralaf@gmail.com?subject=${subject}&body=${body}`;
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", timeline: "", message: "" });
    setStatus("idle");
  };

  return (
    <div className="rounded-3xl p-8 sm:p-10 md:p-12 bg-white/[0.02] border border-white/10 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
        <div>
          <span
            className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase block mb-1"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            DISPATCH PROTOCOL
          </span>
          <h3 className="text-white font-bold text-[22px] sm:text-[26px] tracking-tight">
            Send Message
          </h3>
        </div>

        <span
          className="text-white/40 text-[11px] font-mono tracking-wider hidden sm:inline"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          SECURE CHANNEL
        </span>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="py-16 text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-white font-bold text-[24px] sm:text-[28px] tracking-tight">
              Transmission Prepared & Sent
            </h4>
            <p className="text-white/60 text-[15px] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Your default mail client has opened to confirm delivery. I typically respond within 24 hours.
            </p>

            <button
              onClick={handleReset}
              className="mt-6 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium text-[13px] transition-colors cursor-pointer"
            >
              Send Another Transmission
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Type Selector */}
            <div>
              <label
                className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-3"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Inquiry Classification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`
                        px-3.5 py-2.5 rounded-xl text-[12px] font-medium transition-all text-center cursor-pointer
                        ${
                          isSelected
                            ? "bg-white text-[#0a0a0a] font-semibold shadow-md shadow-white/10"
                            : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/5"
                        }
                      `}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label
                  className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Your Name / Org <span className="text-white/30">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Satoshi Nakamoto"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none text-white text-[14px] font-sans placeholder-white/25 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Email Address <span className="text-white/30">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none text-white text-[14px] font-sans placeholder-white/25 transition-all"
                />
              </div>
            </div>

            {/* Timeline / Budget */}
            <div>
              <label
                className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Target Timeline or Scope (Optional)
              </label>
              <input
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                placeholder="e.g. Q4 2026 / 4-Week Sprint / Continuous Advisory"
                className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none text-white text-[14px] font-sans placeholder-white/25 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Message & Architecture Scope <span className="text-white/30">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project vision, target metrics, or technical objectives..."
                className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none text-white text-[14px] font-sans placeholder-white/25 transition-all resize-none"
              />
            </div>

            {/* Error banner */}
            {status === "error" && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[13px] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span
                className="text-white/30 text-[11px] font-mono"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                LATENCY GUARANTEE: &lt; 24H
              </span>

              <button
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-4 rounded-2xl bg-white text-[#0a0a0a] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-white/90 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer disabled:opacity-50"
              >
                {status === "sending" ? (
                  <span>Encrypting & Dispatching...</span>
                ) : (
                  <>
                    <span>Dispatch Transmission</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
