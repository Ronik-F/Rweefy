import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Entry — Tracker",
  description: "Add a personal activity entry to the tracker.",
};

export default function AddTrackerPage() {
  redirect("/tracker/fitness");
}
