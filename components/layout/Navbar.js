"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { fadeDown } from "@/lib/motionVariants";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Tracker", href: "/tracker" },
  { label: "Contacts", href: "/contacts" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-14 py-6 md:py-7">
      <nav className="flex items-center justify-between">
        {/* Logo Left */}
        <Logo />

        {/* Right Side */}
        <motion.div
          variants={fadeDown(0.2)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-8 md:gap-12"
        >
          <ul className="hidden md:flex items-center gap-10 lg:gap-14 text-white text-[19px] font-medium tracking-tight">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative group transition-opacity duration-300 hover:opacity-70"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu Icon */}
          <button
            aria-label="Open menu"
            className="text-white hover:opacity-70 transition-opacity duration-300"
          >
            <Menu strokeWidth={2} className="w-7 h-7 md:w-8 md:h-8" />
          </button>
        </motion.div>
      </nav>
    </header>
  );
}
