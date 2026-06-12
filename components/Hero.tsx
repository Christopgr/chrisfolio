"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const brands = [
  "Wealthyhood",
  "Lacoste",
  "AntetokounBros",
  "Politeia",
  "Bodytalk",
];

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
    <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
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
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="relative flex flex-col min-h-[calc(100svh-72px)] sm:min-h-[calc(100svh-96px)]">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[92rem] mx-auto px-6 sm:px-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="mb-8 sm:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Software Engineer @ Wealthyhood
            </span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,11vw,11rem)] font-normal leading-[0.95] tracking-[-0.02em] mb-10 sm:mb-14">
            <MaskedLine delay={0.15}>Building the web,</MaskedLine>
            <MaskedLine delay={0.32} className="italic text-accent">
              end to end.
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="text-subtle text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Currently building an investment platform at Wealthyhood.
            Previously shipped e-commerce for brands like Lacoste and
            AntetokounBros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200"
            >
              View the Work
            </a>
            <a
              href="#contact"
              className="group font-display italic text-xl text-text hover:text-accent transition-colors duration-300"
            >
              or just say hi
              <span className="block h-px bg-current scale-x-100 group-hover:scale-x-75 origin-left transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Brand marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="overflow-hidden border-y border-border/70 py-5 sm:py-6"
        aria-hidden="true"
      >
        <div
          className="flex w-max animate-marquee"
          style={{ "--marquee-duration": "35s" } as React.CSSProperties}
        >
          {marqueeBrands.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="flex items-center shrink-0 font-display italic text-2xl sm:text-3xl text-muted/50 px-6 sm:px-10"
            >
              {brand}
              <span className="ml-12 sm:ml-20 w-1.5 h-1.5 rounded-full bg-gold/40" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
