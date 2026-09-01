"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Brain,
  Moon,
  Apple,
  CheckCircle2,
  BookOpen,
  Plus,
  Trash2,
  Check,
  Sparkles,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Zap,
} from "lucide-react";
import { getStoredEntries, saveEntry, deleteEntry, TRACKER_EVENT } from "@/lib/trackerStorage";
import { easeOutExpo } from "@/lib/motionVariants";

export const trackerSections = {
  fitness: {
    id: "fitness",
    label: "Fitness",
    icon: Flame,
    eyebrow: "Physical Conditioning & Output",
    description: "Record active minutes, strength training, and cardiovascular performance.",
    field: "Active Duration",
    unit: "minutes",
    presets: [30, 45, 60, 90, 120],
    step: 5,
    min: 0,
    tags: ["#Strength", "#Cardio", "#HIIT", "#Zone2", "#Mobility"],
  },
  "deep-work": {
    id: "deep-work",
    label: "Deep Work",
    icon: Brain,
    eyebrow: "Cognitive Focus & Flow Architecture",
    description: "Log deliberate distraction-free deep work and technical execution sprints.",
    field: "Focus Block Duration",
    unit: "minutes",
    presets: [30, 60, 90, 120, 180],
    step: 15,
    min: 0,
    tags: ["#Architecture", "#CodeReview", "#ZeroDistraction", "#FlowState"],
  },
  sleep: {
    id: "sleep",
    label: "Sleep",
    icon: Moon,
    eyebrow: "Circadian Recovery & Neural Repair",
    description: "Track total restorative sleep cycles, REM density, and wake readiness.",
    field: "Sleep Duration",
    unit: "hours",
    presets: [6.5, 7.0, 7.5, 8.0, 8.5],
    step: 0.5,
    min: 0,
    tags: ["#DeepREM", "#8HoursTarget", "#EarlyWake", "#FullyRested"],
  },
  diet: {
    id: "diet",
    label: "Diet",
    icon: Apple,
    eyebrow: "Nutritional Integrity & Fasting",
    description: "Log clean fuel scoring, micronutrient adherence, and daily hydration.",
    field: "Diet Integrity Score",
    unit: "score / 100",
    presets: [70, 80, 90, 95, 100],
    step: 5,
    min: 0,
    tags: ["#CleanFuel", "#3LHydration", "#IntermittentFast", "#Micronutrients"],
  },
  habits: {
    id: "habits",
    label: "Habits",
    icon: CheckCircle2,
    eyebrow: "Atomic System Consistency",
    description: "Verify core compounding daily habits (Reading, Cold Shower, No Sugar).",
    field: "Completed Habits",
    unit: "routines",
    presets: [1, 2, 3, 4, 5],
    step: 1,
    min: 0,
    tags: ["#ColdShower", "#Read30Min", "#ZeroSugar", "#Meditation", "#PostWorkout"],
  },
  journal: {
    id: "journal",
    label: "Journal",
    icon: BookOpen,
    eyebrow: "Mental Clarity & Executive Signal",
    description: "Quantify daily subjective mood, cognitive clarity, and philosophical insights.",
    field: "Clarity Score",
    unit: "score / 10",
    presets: [6, 7, 8, 9, 10],
    step: 1,
    min: 0,
    tags: ["#FlowState", "#MentalPeace", "#HighOutput", "#Grateful"],
  },
};

export default function AddTrackerEntry({ category = "deep-work" }) {
  const [activeCategory, setActiveCategory] = useState(category);
  const section = trackerSections[activeCategory] || trackerSections["deep-work"];

  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    value: String(section.presets[2] || 60),
    note: "",
    selectedTag: "",
  });

  const [entries, setEntries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBadge, setSuccessBadge] = useState(false);

  // Sync stored entries from localStorage and subscribe to updates
  useEffect(() => {
    const refresh = () => setEntries(getStoredEntries());
    refresh();

    window.addEventListener(TRACKER_EVENT, refresh);
    return () => window.removeEventListener(TRACKER_EVENT, refresh);
  }, []);

  // Update preset default value when category switches
  const handleCategorySwitch = (catId) => {
    setActiveCategory(catId);
    const targetSection = trackerSections[catId];
    setForm((prev) => ({
      ...prev,
      value: String(targetSection.presets[2] || 60),
      selectedTag: "",
    }));
  };

  const handlePresetSelect = (presetVal) => {
    setForm((prev) => ({ ...prev, value: String(presetVal) }));
  };

  const handleTagToggle = (tag) => {
    setForm((prev) => {
      const nextTag = prev.selectedTag === tag ? "" : tag;
      const noteWithoutTag = prev.note.replace(prev.selectedTag, "").trim();
      const updatedNote = nextTag ? `${noteWithoutTag} ${nextTag}`.trim() : noteWithoutTag;
      return { ...prev, selectedTag: nextTag, note: updatedNote };
    });
  };

  const adjustValue = (delta) => {
    setForm((prev) => {
      const current = parseFloat(prev.value) || 0;
      const next = Math.max(section.min || 0, current + delta);
      return { ...prev, value: String(Math.round(next * 10) / 10) };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericVal = parseFloat(form.value);
    if (!form.date || isNaN(numericVal) || numericVal < 0) return;

    setIsSubmitting(true);

    const newEntry = {
      id: `entry-${Date.now()}`,
      category: activeCategory,
      value: numericVal,
      note: form.note.trim() || `${section.label} logged via Admin Console`,
      date: form.date,
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      saveEntry(newEntry);
      setIsSubmitting(false);
      setSuccessBadge(true);
      setForm((prev) => ({ ...prev, note: "", selectedTag: "" }));

      setTimeout(() => setSuccessBadge(false), 2500);
    }, 400);
  };

  const handleDelete = (id) => {
    deleteEntry(id);
  };

  const currentCategoryEntries = entries.filter((e) => e.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
        {Object.values(trackerSections).map((item) => {
          const isSelected = activeCategory === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleCategorySwitch(item.id)}
              className={`
                relative px-4 py-3 rounded-2xl flex items-center gap-2.5 text-[13px] font-medium transition-all shrink-0 cursor-pointer
                ${isSelected
                  ? "text-white bg-white/10 shadow-lg shadow-black/40"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
              {isSelected && (
                <motion.div
                  layoutId="adminCategoryPill"
                  className="absolute inset-0 rounded-2xl border border-white/25 pointer-events-none"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Admin Upload Grid (Form + Live History Ledger) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Dispatch Form (7 Cols) */}
        <motion.form
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easeOutExpo }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/10 space-y-8 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span
                className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase block mb-1"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {section.eyebrow}
              </span>
              <h3 className="text-white font-bold text-[24px] sm:text-[28px] tracking-tight">
                Log {section.label} Metric
              </h3>
            </div>

            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
              <section.icon className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Preset Value Chips */}
          <div>
            <label
              className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Quick Value Presets ({section.unit})
            </label>
            <div className="flex flex-wrap gap-2">
              {section.presets.map((preset) => {
                const isSelected = parseFloat(form.value) === preset;
                return (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => handlePresetSelect(preset)}
                    className={`
                      px-4 py-2 rounded-xl text-[13px] font-mono font-medium transition-all cursor-pointer
                      ${isSelected
                        ? "bg-white text-[#0a0a0a] font-bold shadow-md shadow-white/10"
                        : "bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/[0.08] border border-white/5"
                      }
                    `}
                  >
                    {preset} {section.unit === "minutes" ? "min" : section.unit.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date & Precise Stepper Input */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Date */}
            <div>
              <label
                className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Log Date
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:outline-none text-white text-[14px] font-mono transition-all"
              />
            </div>

            {/* Stepper Value */}
            <div>
              <label
                className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Exact Quantity ({section.unit})
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => adjustValue(-section.step)}
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center font-mono text-[18px] transition-colors cursor-pointer shrink-0"
                >
                  -
                </button>
                <input
                  type="number"
                  step="any"
                  min="0"
                  required
                  value={form.value}
                  onChange={(e) => setForm({ ...form, value: e.target.value })}
                  className="w-full text-center px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:outline-none text-white text-[16px] font-bold font-mono transition-all"
                />
                <button
                  type="button"
                  onClick={() => adjustValue(section.step)}
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center font-mono text-[18px] transition-colors cursor-pointer shrink-0"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Context Tags */}
          {section.tags && (
            <div>
              <label
                className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2.5"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Context Tag / Focus Domain
              </label>
              <div className="flex flex-wrap gap-2">
                {section.tags.map((tag) => {
                  const isSelected = form.selectedTag === tag;
                  return (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`
                        px-3 py-1.5 rounded-xl text-[12px] font-mono transition-all cursor-pointer
                        ${isSelected
                          ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"
                          : "bg-white/[0.03] text-white/50 hover:text-white border border-white/5"
                        }
                      `}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Note Input */}
          <div>
            <label
              className="block text-white/50 text-[12px] font-mono uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Reflection & Execution Note (Optional)
            </label>
            <textarea
              rows={3}
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              placeholder={`Key observations or context for this ${section.label.toLowerCase()} sprint...`}
              className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/40 focus:outline-none text-white text-[14px] font-sans placeholder-white/25 transition-all resize-none"
            />
          </div>

          {/* Submit Action Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span
                className="text-white/40 text-[11px] font-mono"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {successBadge ? "✓ ENTRY PERSISTED TO TELEMETRY" : "LOCAL CLIENT ENCRYPTED"}
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 rounded-2xl bg-white text-[#0a0a0a] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-white/90 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Writing to Matrix...</span>
              ) : (
                <>
                  <span>Commit {section.label} Entry</span>
                  <Plus className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>

        {/* Right Column: Live History Ledger & Category Telemetry (5 Cols) */}
        <aside className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-8">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span
                  className="text-white/40 text-[11px] font-mono tracking-[0.2em] uppercase block mb-1"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  LIVE LEDGER
                </span>
                <h4 className="text-white font-bold text-[20px] tracking-tight">
                  {section.label} History
                </h4>
              </div>

              <span
                className="px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-[12px]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {currentCategoryEntries.length} Recorded
              </span>
            </div>

            {/* List */}
            <div className="mt-6 space-y-3 max-h-[380px] overflow-y-auto pr-1">
              <AnimatePresence initial={false}>
                {currentCategoryEntries.length === 0 ? (
                  <p className="text-white/40 text-[13px] py-8 text-center font-light">
                    No entries logged in this category yet. Commit your first signal above.
                  </p>
                ) : (
                  currentCategoryEntries.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all flex items-start justify-between gap-3 group"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-white font-bold font-mono text-[14px]"
                            style={{ fontFamily: "var(--font-jetbrains)" }}
                          >
                            {item.value} {section.unit}
                          </span>
                          <span className="text-white/20">•</span>
                          <span
                            className="text-white/40 text-[11px] font-mono"
                            style={{ fontFamily: "var(--font-jetbrains)" }}
                          >
                            {item.date}
                          </span>
                        </div>
                        <p className="text-white/60 text-[12px] leading-relaxed truncate font-light">
                          {item.note}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
                        aria-label="Delete entry"
                        className="p-2 rounded-xl text-white/20 hover:text-rose-400 hover:bg-rose-500/10 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Dashboard Return Link */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/tracker"
              className="group inline-flex items-center gap-2 text-white/80 hover:text-white text-[13px] font-medium transition-colors"
            >
              <span>Back to Master Telemetry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <span className="text-white/30 text-[11px] font-mono">AUTO-SAVED</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
