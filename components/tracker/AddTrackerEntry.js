"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ronik-tracker-entries";

export const trackerSections = {
  fitness: {
    label: "Fitness",
    eyebrow: "Body / movement",
    description: "Capture the movement that keeps your energy and body in rhythm.",
    field: "Active minutes",
    unit: "minutes",
    placeholder: "45",
    links: ["diet", "journal", "habits", "sleep"],
  },
  diet: {
    label: "Diet",
    eyebrow: "Body / nutrition",
    description: "Log a simple daily nutrition score and the context behind it.",
    field: "Daily score",
    unit: "out of 100",
    placeholder: "80",
    links: ["fitness", "journal", "habits", "sleep"],
  },
  journal: {
    label: "Journal",
    eyebrow: "Mind / reflection",
    description: "Leave a small signal about how the day felt, not a perfect diary.",
    field: "Mood score",
    unit: "out of 10",
    placeholder: "7",
    links: ["fitness", "diet", "habits", "sleep"],
  },
  habits: {
    label: "Habits",
    eyebrow: "Systems / consistency",
    description: "Record whether the routines you care about showed up today.",
    field: "Habit completion",
    unit: "completed habits",
    placeholder: "3",
    links: ["fitness", "diet", "journal", "sleep"],
  },
  sleep: {
    label: "Sleep",
    eyebrow: "Body / recovery",
    description: "Track the recovery that shapes your focus, mood, and performance.",
    field: "Sleep duration",
    unit: "hours",
    placeholder: "7.5",
    links: ["fitness", "diet", "journal", "habits"],
  },
  "deep-work": {
    label: "Deep work",
    eyebrow: "Mind / concentration",
    description: "Capture the focused time that moves meaningful work forward.",
    field: "Focus duration",
    unit: "minutes",
    placeholder: "90",
    links: ["fitness", "diet", "journal", "habits"],
  },
};

const initialForm = {
  date: new Date().toISOString().slice(0, 10),
  value: "",
  note: "",
};

export default function AddTrackerEntry({ category = "fitness" }) {
  const section = trackerSections[category] || trackerSections.fitness;
  const [form, setForm] = useState(initialForm);
  const [entries, setEntries] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setEntries(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const sectionEntries = entries.filter((entry) => entry.category === category);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const value = Number(form.value);
    if (!form.date || !Number.isFinite(value) || value < 0) return;

    const entry = { id: crypto.randomUUID(), ...form, category, value, createdAt: new Date().toISOString() };
    const nextEntries = [entry, ...entries].slice(0, 100);
    setEntries(nextEntries);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextEntries));
    setForm((current) => ({ ...current, value: "", note: "" }));
    setSaved(true);
  }

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <nav className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {Object.entries(trackerSections).map(([id, item]) => (
          <Link key={id} href={`/tracker/${id}`} className={`shrink-0 border px-4 py-2 text-xs transition-colors ${id === category ? "border-white bg-white text-black" : "border-white/10 text-white/45 hover:border-white/35 hover:text-white"}`}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.form onSubmit={handleSubmit} className="border border-white/10 bg-[#0b0b0b] p-6 sm:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
          <div className="mb-12 border-b border-white/10 pb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35" style={{ fontFamily: "var(--font-jetbrains)" }}>{section.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">{section.label} log</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">{section.description}</p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <label className="text-xs text-white/55">Date
              <input className="mt-3 w-full border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-colors focus:border-white/60" type="date" name="date" value={form.date} onChange={updateField} required />
            </label>
            <label className="text-xs text-white/55">{section.field} <span className="text-white/25">({section.unit})</span>
              <input className="mt-3 w-full border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-colors focus:border-white/60" type="number" name="value" min="0" step="any" placeholder={section.placeholder} value={form.value} onChange={updateField} required />
            </label>
          </div>

          <label className="mt-7 block text-xs text-white/55">Note <span className="text-white/25">(optional)</span>
            <textarea className="mt-3 min-h-32 w-full resize-y border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-colors focus:border-white/60" name="note" placeholder={`What should you remember about this ${section.label.toLowerCase()} entry?`} value={form.note} onChange={updateField} />
          </label>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <span className="text-[11px] text-white/35">{saved ? "Entry saved locally." : "Private to this browser for now."}</span>
            <button className="bg-white px-6 py-3 text-xs font-semibold tracking-wide text-black transition-transform hover:-translate-y-0.5" type="submit">Save {section.label.toLowerCase()} entry</button>
          </div>
        </motion.form>

        <aside className="border border-white/10 bg-[#0b0b0b] p-6 sm:p-10">
          <div className="flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35" style={{ fontFamily: "var(--font-jetbrains)" }}>This section</p>
              <p className="mt-2 text-4xl text-white">{sectionEntries.length}</p>
            </div>
            <span className="text-[11px] text-white/30">entries</span>
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.16em] text-white/35" style={{ fontFamily: "var(--font-jetbrains)" }}>Recent {section.label}</p>
            {sectionEntries.length === 0 ? <p className="mt-5 text-sm leading-relaxed text-white/35">Nothing logged here yet. Start with one honest signal.</p> : (
              <ul className="mt-5 space-y-4">{sectionEntries.slice(0, 5).map((entry) => <li key={entry.id} className="flex items-center justify-between border-b border-white/5 pb-3 text-sm"><span className="text-white/70">{entry.value} {section.unit}</span><span className="text-[11px] text-white/30">{entry.date}</span></li>)}</ul>
            )}
          </div>
          <Link className="mt-10 inline-block text-xs text-white/55 underline decoration-white/20 underline-offset-4 hover:text-white" href="/tracker">Open dashboard →</Link>
        </aside>
      </div>
    </motion.div>
  );
}
