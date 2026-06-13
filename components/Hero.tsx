"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function MaskedLine({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        initial={reduceMotion ? { opacity: 0 } : { y: "110%" }}
        animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100svh-72px)] sm:min-h-[calc(100svh-96px)] overflow-hidden flex flex-col">
      {/* Full-bleed B&W backdrop */}
      <picture>
        <source
          type="image/webp"
          srcSet="/hero-1280.webp 1280w, /hero-1920.webp 1920w, /hero-2560.webp 2560w"
          sizes="100vw"
        />
        <img
          src="/hero-1920.webp"
          alt="A cracked-plaster gable in rural Greece, hard shadow and a silhouette"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
        />
      </picture>

      {/* Ink scrim — heaviest lower-left where the type sits */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-[100rem] w-full mx-auto px-6 sm:px-14 py-8 sm:py-10 text-white">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-between font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/70"
        >
          <span>Selected Works — Software Engineer</span>
          <span className="hidden sm:inline">Athens, GR · 2018—2025</span>
        </motion.div>

        {/* Title, lower-left */}
        <div className="mt-auto">
          <h1 className="display text-[clamp(3.5rem,15vw,15rem)]">
            <MaskedLine delay={0.15}>Chris</MaskedLine>
            <MaskedLine delay={0.28}>
              <span className="crimson-block">Topalis</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="font-display italic text-[clamp(1.5rem,3.5vw,2.75rem)] text-white mt-5"
          >
            Building the web, end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10 mt-8"
          >
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Currently building an investment platform at Wealthyhood.
              Previously shipped e-commerce for Lacoste, Politeia, and
              AntetokounBros.
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <a
                href="#work"
                className="px-7 py-3.5 bg-white text-black text-sm font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
              >
                View the catalogue
              </a>
              <a
                href="#contact"
                className="font-display italic text-xl text-white hover:text-accent-light transition-colors duration-300"
              >
                or say hi
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
