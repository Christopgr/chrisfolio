"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="px-5 sm:px-14 pt-3 sm:pt-5">
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left: nav links stacked vertically */}
          <div className="flex flex-col items-start gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[15px] leading-tight text-text inline-flex"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 -bottom-px w-full h-px bg-text origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </span>
              </a>
            ))}
          </div>

          {/* Center: logo */}
          <a
            href="#"
            className="font-logo text-3xl sm:text-4xl text-text hover:opacity-70 transition-opacity justify-self-center whitespace-nowrap"
          >
            Chris Topalis
          </a>

          {/* Right: CTA button */}
          <div className="flex items-center justify-end">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent-dim"
            >
              <span className="relative z-10">Let&apos;s Connect</span>
              <svg
                className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between">
          <a
            href="#"
            className="font-logo text-2xl text-text"
          >
            Chris Topalis
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-bg z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-2xl text-text font-light"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-4 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg"
              >
                Let&apos;s Connect
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
