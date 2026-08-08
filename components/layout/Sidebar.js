"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { useNavigation } from "./NavigationContext";

const easeOut = [0.22, 1, 0.36, 1];

// Drawer container animation
const drawerVariants = {
  hidden: { x: "-100%", opacity: 0.6 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
  exit: {
    x: "-100%",
    opacity: 0.4,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// Backdrop blur animation
const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  show: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: { duration: 0.6, ease: easeOut },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: { duration: 0.4, ease: easeOut },
  },
};

// Staggered list of nav items
const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Sidebar() {
  const { isOpen, close } = useNavigation();
  const pathname = usePathname();
  const [expanded, setExpanded] = useState({});

  // Auto-expand parent of active route
  useEffect(() => {
    const next = {};
    navigation.forEach((item) => {
      if (item.children?.some((c) => pathname.startsWith(c.href))) {
        next[item.label] = true;
      }
    });
    setExpanded((prev) => ({ ...prev, ...next }));
  }, [pathname]);

  const toggleExpand = (label) => {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop — click to close, but does NOT lock body scroll */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={close}
            className="fixed inset-0 z-[55] bg-black/30"
            style={{ pointerEvents: "auto" }}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              fixed top-0 left-0 z-[60]
              h-screen
              w-[85vw] sm:w-[420px] md:w-[440px]
              bg-[#0a0a0a]/75
              backdrop-blur-2xl
              border-r border-white/10
              shadow-[8px_0_40px_rgba(0,0,0,0.5)]
              overflow-y-auto overflow-x-hidden
              overscroll-contain
            "
            // Independent scroll: this element scrolls on its own,
            // main page scroll is untouched.
          >
            <div className="min-h-full flex flex-col px-8 md:px-10 pt-28 pb-14">
              {/* Header label */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="show"
                className="mb-14"
              >
                <p
                  className="text-white/40 text-[11px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Navigation
                </p>
                <div className="mt-4 h-px w-10 bg-white/20" />
              </motion.div>

              {/* Nav List */}
              <motion.nav
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex-1"
              >
                <ul className="flex flex-col gap-1">
                  {navigation.map((item, index) => (
                    <NavItem
                      key={item.label}
                      item={item}
                      index={index}
                      isActive={isActive}
                      expanded={expanded}
                      toggleExpand={toggleExpand}
                      onNavigate={close}
                    />
                  ))}
                </ul>
              </motion.nav>

              {/* Footer */}
              <motion.div
                variants={itemVariants}
                className="mt-16 pt-8 border-t border-white/10"
              >
                <p
                  className="text-white/40 text-[11px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Ronik Koirala
                </p>
                <p
                  className="mt-2 text-white/30 text-[11px] tracking-wide"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  © {new Date().getFullYear()} — Portfolio & Life Tracker
                </p>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Nav Item (with recursive children) ---------------- */

function NavItem({
  item,
  index,
  isActive,
  expanded,
  toggleExpand,
  onNavigate,
}) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = expanded[item.label];
  const active = isActive(item.href);

  return (
    <motion.li variants={itemVariants} className="overflow-hidden">
      <div className="flex items-center justify-between group">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`
            flex items-baseline gap-4 py-3 flex-1
            transition-opacity duration-300
            ${active ? "opacity-100" : "opacity-70 hover:opacity-100"}
          `}
        >
          <span
            className="text-white/40 text-[11px] tabular-nums tracking-wider"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="relative text-white text-[26px] md:text-[30px] font-semibold tracking-[-0.02em] leading-none">
            {item.label}
            {active && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white"
              />
            )}
          </span>
        </Link>

        {hasChildren && (
          <button
            onClick={() => toggleExpand(item.label)}
            aria-label={isOpen ? "Collapse" : "Expand"}
            className="p-2 text-white/50 hover:text-white transition-colors duration-300"
          >
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="block"
            >
              <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
            </motion.span>
          </button>
        )}
      </div>

      {/* Children — smooth expand/collapse */}
      {hasChildren && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: easeOut }}
              className="overflow-hidden pl-10 border-l border-white/10 ml-2 mb-2"
            >
              {item.children.map((child) => {
                const childActive = isActive(child.href);
                return (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className={`
                        block py-2 text-[14px] tracking-tight
                        transition-all duration-300
                        ${
                          childActive
                            ? "text-white translate-x-1"
                            : "text-white/50 hover:text-white hover:translate-x-1"
                        }
                      `}
                    >
                      {child.label}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </motion.li>
  );
}
