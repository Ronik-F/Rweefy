"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { fadeDown } from "@/lib/motionVariants";
import { useNavigation } from "./NavigationContext";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Tracker", href: "/tracker" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { toggle } = useNavigation();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-14 py-5 md:py-6
        transition-all duration-500
        ${
          isScrolled
            ? "bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }
      `}
    >
      <nav className="flex items-center justify-between">
        {/* Logo Left */}
        <Logo />

        <motion.div
          variants={fadeDown(0.2)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-8 md:gap-12"
        >
            <ul className="hidden md:flex items-center gap-10 lg:gap-14 text-white text-[18px] font-medium tracking-tight">
              {navItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`relative group transition-opacity duration-300 ${
                        active ? "opacity-100 font-semibold" : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              aria-label="Open menu"
              onClick={toggle}
              className="text-white hover:opacity-70 transition-opacity duration-300 cursor-pointer"
            >
              <Menu strokeWidth={2} className="w-7 h-7 md:w-8 md:h-8" />
            </button>
          </motion.div>
      </nav>
    </header>
  );
}

