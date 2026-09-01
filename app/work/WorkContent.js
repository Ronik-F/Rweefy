"use client";

import { useState, useMemo } from "react";
import WorkHero from "@/components/work/WorkHero";
import WorkFilter from "@/components/work/WorkFilter";
import WorkGrid from "@/components/work/WorkGrid";
import WorkStats from "@/components/work/WorkStats";
import WorkDetailModal from "@/components/work/WorkDetailModal";
import { projects } from "@/lib/workData";

export default function WorkContent({ initialCategory = "all" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectingProject, setInspectingProject] = useState(null);

  // Memoized filter for sub-millisecond responsiveness
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category check
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      // Search query check
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.role.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-14 overflow-x-hidden selection:bg-white selection:text-[#0a0a0a]">
      {/* Background Ambience / Subtle Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[900px] h-[500px] bg-white/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[400px] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Editorial Hero Header */}
        <WorkHero />

        {/* Instant Category & Search Filter */}
        <WorkFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={projects.length}
        />

        {/* Animated Work Grid with Fullfill Media Containers */}
        <WorkGrid
          projects={filteredProjects}
          onInspect={setInspectingProject}
        />

        {/* Global Work Telemetry & CTA */}
        <WorkStats />

        {/* Quick Inspection Specification Modal */}
        <WorkDetailModal
          project={inspectingProject}
          onClose={() => setInspectingProject(null)}
        />
      </div>
    </main>
  );
}
