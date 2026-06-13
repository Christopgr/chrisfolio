"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Career", href: "#experience" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Flip to dark chrome exactly when the hero (first section) leaves the
    // header band, so the bone bar never appears over the photo.
    const hero = document.querySelector("main section");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Dark chrome when scrolled past the hero (or when the mobile menu is open).
  const darkChrome = scrolled;

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        const [first] = visible;
        setActiveSection(first ? `#${first}` : null);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        darkChrome
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div
        className={`px-5 sm:px-14 transition-all duration-500 ${
          darkChrome ? "py-3" : "pt-4 sm:pt-6 pb-2"
        }`}
      >
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left: nav links stacked vertically */}
          <div className="flex flex-col items-start gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative font-mono text-xs uppercase tracking-[0.2em] leading-tight inline-flex transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-accent"
                    : darkChrome
                      ? "text-text"
                      : "text-white"
                }`}
              >
                <span className="relative">
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-px w-full h-px origin-left transition-transform duration-300 ease-out ${
                      activeSection === link.href
                        ? "bg-accent scale-x-100"
                        : `${darkChrome ? "bg-text" : "bg-white"} scale-x-0 group-hover:scale-x-100`
                    }`}
                  />
                </span>
              </a>
            ))}
          </div>

          {/* Center: wordmark */}
          <a
            href="#"
            className={`font-mono text-sm uppercase tracking-[0.35em] hover:text-accent transition-colors justify-self-center whitespace-nowrap ${
              darkChrome ? "text-text" : "text-white"
            }`}
          >
            Chris Topalis
          </a>

          {/* Right: spacer to keep the wordmark centred */}
          <div aria-hidden="true" />
        </div>

        {/* Mobile header */}
        <div className="flex md:hidden items-center justify-between">
          <a
            href="#"
            className={`font-mono text-sm uppercase tracking-[0.3em] ${
              menuOpen || darkChrome ? "text-text" : "text-white"
            }`}
          >
            Chris Topalis
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${
                menuOpen
                  ? "bg-text rotate-45 translate-y-[4.5px]"
                  : darkChrome
                    ? "bg-text"
                    : "bg-white"
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${
                menuOpen ? "bg-text opacity-0" : darkChrome ? "bg-text" : "bg-white"
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] transition-all duration-300 ${
                menuOpen
                  ? "bg-text -rotate-45 -translate-y-[4.5px]"
                  : darkChrome
                    ? "bg-text"
                    : "bg-white"
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
                  className="font-display italic text-4xl text-text"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="font-display italic text-4xl text-accent"
              >
                Say hi
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
