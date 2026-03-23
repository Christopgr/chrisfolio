"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center pt-8 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Software Engineer @ Wealthyhood
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] tracking-tight mb-6"
        >
          <span className="gradient-text">Crafting Digital</span>
          <br />
          <span className="font-display italic text-accent-light">
            Experiences
          </span>{" "}
          <span className="gradient-text">That Matter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-subtle text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Full-stack engineer with a focus on building high-performance
          e-commerce platforms and fintech products. TypeScript, React, and
          modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-transparent text-text text-sm font-medium border border-border hover:border-muted transition-colors duration-200"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}
