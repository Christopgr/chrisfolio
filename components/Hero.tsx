"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-muted flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-subtle" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
