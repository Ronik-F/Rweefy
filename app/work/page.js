import WorkContent from "./WorkContent";

export const metadata = {
  title: "Work — Ronik Koirala",
  description:
    "Curated catalog of production web applications, distributed architecture tools, and interactive interface experiments built with uncompromising aesthetic standards and speed.",
  openGraph: {
    title: "Work & Projects — Ronik Koirala",
    description:
      "Curated catalog of production web applications, distributed architecture tools, and interactive interface experiments.",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkContent initialCategory="all" />;
}
