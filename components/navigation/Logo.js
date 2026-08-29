"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { scaleIn } from "@/lib/motionVariants";
import { useNavigation } from "./NavigationContext";

export default function Logo() {
  const { isOpen, toggle } = useNavigation();

  return (
    <motion.div
      variants={scaleIn(0.1)}
      initial="hidden"
      animate="show"
      className="relative z-[70]"
    >
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 cursor-pointer"
      >
        {/* Outer Grey Ring — expands slightly on hover, more when open */}
        <span
          className={`
            absolute inset-0 rounded-full
            bg-white/10 ring-1 ring-white/15
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-110 group-hover:bg-white/15 group-hover:ring-white/25
            ${isOpen ? "scale-110 bg-white/20 ring-white/30" : ""}
          `}
        />

        {/* Inner Logo / Close indicator */}
        <span className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-1 ring-white/20 transition-all duration-500 group-hover:ring-white/40">
          <AnimatePresence mode="wait" initial={false}>
            {!isOpen ? (
              <motion.span
                key="logo"
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/logo/rk-logo.jpg"
                  alt="Ronik Koirala Logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </motion.span>
            ) : (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]"
              >
                {/* Editorial close mark — two thin lines */}
                <span className="relative w-4 h-4">
                  <span className="absolute top-1/2 left-0 w-full h-px bg-white rotate-45" />
                  <span className="absolute top-1/2 left-0 w-full h-px bg-white -rotate-45" />
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>
    </motion.div>
  );
}
