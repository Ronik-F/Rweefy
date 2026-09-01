"use client";

// Unified LocalStorage and State Service for Quantified Tracker
export const STORAGE_KEY = "ronik-tracker-entries-v2";
export const TRACKER_EVENT = "ronik-tracker-update";

export const initialDefaultEntries = [
  { id: "e-1", category: "deep-work", value: 120, note: "Architected reactive state broker & animations", date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString() },
  { id: "e-2", category: "fitness", value: 60, note: "High-intensity cardio & strength training", date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString() },
  { id: "e-3", category: "sleep", value: 7.8, note: "92% sleep score · deep REM cycle", date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString() },
  { id: "e-4", category: "diet", value: 92, note: "Clean micronutrient intake · 3L hydration", date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString() },
  { id: "e-5", category: "habits", value: 5, note: "Read 30 pages, cold shower, meditated, code review, zero sugar", date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString() },
  { id: "e-6", category: "journal", value: 9, note: "Extreme mental clarity & flow state achieved", date: new Date().toISOString().slice(0, 10), createdAt: new Date().toISOString() },
];

export function getStoredEntries() {
  if (typeof window === "undefined") return initialDefaultEntries;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialDefaultEntries));
      return initialDefaultEntries;
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : initialDefaultEntries;
  } catch {
    return initialDefaultEntries;
  }
}

export function saveEntry(entry) {
  if (typeof window === "undefined") return;
  const current = getStoredEntries();
  const next = [entry, ...current.filter((e) => e.id !== entry.id)].slice(0, 200);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(TRACKER_EVENT));
  return next;
}

export function deleteEntry(id) {
  if (typeof window === "undefined") return;
  const current = getStoredEntries();
  const next = current.filter((e) => e.id !== id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(TRACKER_EVENT));
  return next;
}
