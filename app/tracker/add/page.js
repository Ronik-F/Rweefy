import TrackerEntryPage from "@/components/tracker/TrackerEntryPage";

export const metadata = {
  title: "Admin Log Console — Tracker",
  description: "Log quantified focus, sleep, vitality, and habit metrics with instant persistence.",
};

export default function AddTrackerPage() {
  return <TrackerEntryPage category="deep-work" />;
}
