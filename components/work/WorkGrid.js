"use client";

import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "./WorkCard";
import { Sparkles, Terminal } from "lucide-react";

export default function WorkGrid({ projects, onInspect }) {
  if (projects.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white/40 mb-4">
          <Terminal className="w-6 h-6" />
        </div>
        <h3 className="text-white font-bold text-[20px] mb-2">No Matching Projects Found</h3>
        <p className="text-white/50 text-[14px] max-w-sm mx-auto">
          Try clearing your search query or selecting another category to view indexed works.
        </p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              onInspect={onInspect}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
