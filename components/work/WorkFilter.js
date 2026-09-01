"use client";

import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { categories } from "@/lib/workData";

export default function WorkFilter({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}) {
  return (
    <div className="py-8 border-b border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`
                relative px-4 py-2.5 rounded-2xl flex items-center gap-2 text-[13px] sm:text-[14px] font-medium transition-all duration-300 cursor-pointer
                ${
                  isSelected
                    ? "text-white bg-white/10 shadow-lg shadow-black/30"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }
              `}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  isSelected ? "bg-white/20 text-white" : "bg-white/5 text-white/40"
                }`}
              >
                {cat.id === "all" ? totalCount : cat.count}
              </span>

              {isSelected && (
                <motion.div
                  layoutId="workFilterPill"
                  className="absolute inset-0 rounded-2xl border border-white/25 pointer-events-none"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Instant Search Bar */}
      <div className="relative w-full md:w-72">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by tech or keyword..."
          className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none text-white placeholder-white/30 text-[13px] font-sans transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
