"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    title: "Wealthyhood",
    url: "wealthyhood.com",
    slug: "wealthyhood",
    brand: "Investment platform for everyone",
    meta: "2025 — Now",
    role: "Software Engineer, Full Stack",
    description:
      "An investment platform making wealth-building accessible. Primarily working on the API layer with some contributions to internal web projects. TypeScript, React, MongoDB.",
    highlights: [
      "Core work on the API layer of the investment platform",
      "Contributions to internal web projects and tooling",
      "Features shipping to thousands of investors daily",
    ],
    tags: ["Fintech", "TypeScript", "React", "MongoDB"],
  },
  {
    title: "Lacoste Greece",
    url: "lacoste.gr",
    slug: "lacoste",
    brand: "Iconic French fashion-sport brand",
    meta: "via SLEED",
    role: "Front-end & Back-end, ERP owner",
    description:
      "Custom nopCommerce e-commerce for Lacoste's Greek market. Part of the front-end and back-end team, owned the ERP integration. Product catalog, multi-category navigation, and checkout flows.",
    highlights: [
      "Owned the ERP integration end to end",
      "Product catalog and multi-category navigation",
      "Checkout flows for the Greek market storefront",
    ],
    tags: ["nopCommerce", ".NET", "E-Commerce", "MSSQL"],
  },
  {
    title: "Bodytalk",
    url: "bodytalk.com",
    slug: "bodytalk",
    brand: "Greek athletic fashion brand",
    meta: "via SLEED",
    role: "Front-end & Back-end owner",
    description:
      "Built on Bizweb. Owned front-end and back-end, helped with ERP integration. Dynamic filtering, analytics (GTM, Skroutz), payments (Klarna), and Klaviyo.",
    highlights: [
      "Owned front-end and back-end on the Bizweb platform",
      "Dynamic filtering and product discovery",
      "Analytics (GTM, Skroutz), payments (Klarna), and Klaviyo",
    ],
    tags: ["Bizweb", "React", ".NET 8", "ERP"],
  },
  {
    title: "Politeia Net",
    url: "politeianet.gr",
    slug: "politeianet",
    brand: "Greece's leading bookstore — 45 years of heritage",
    meta: "via SLEED",
    role: "Front-end & Back-end owner",
    description:
      "Built on Bizweb. Owned front-end and back-end for one of Greece's most established bookstores. Complex search across hundreds of thousands of titles, curated selections, editorial content, and social features like reviews and reading lists.",
    highlights: [
      "Complex search across hundreds of thousands of titles",
      "Curated selections and editorial content",
      "Social features — reviews and reading lists",
    ],
    tags: ["Bizweb", "React", ".NET 8", "MSSQL"],
  },
  {
    title: "AntetokounBros",
    url: "antetokounbros.com",
    slug: "antetokounbros",
    brand: "The Antetokounmpo brothers' lifestyle brand",
    meta: "via SLEED",
    role: "Front-end, Back-end & ERP",
    description:
      "Custom nopCommerce e-commerce for the Antetokounmpo family's brand. Owned front-end, back-end, and ERP integration. Global shipping, multi-currency support, and premium collection drops.",
    highlights: [
      "Owned front-end, back-end, and the ERP integration",
      "Global shipping and multi-currency support",
      "Premium collection drops",
    ],
    tags: ["nopCommerce", ".NET", "MySQL", "Global"],
  },
];

type Project = (typeof projects)[number];

function Screenshot({
  project,
  duotone,
  eager,
  sizes,
}: {
  project: Project;
  duotone?: boolean;
  eager?: boolean;
  sizes: string;
}) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`/projects/${project.slug}-640w.webp 640w, /projects/${project.slug}-960w.webp 960w, /projects/${project.slug}-1280w.webp 1280w, /projects/${project.slug}-1920w.webp 1920w`}
        sizes={sizes}
      />
      <img
        src={`/projects/${project.slug}.webp`}
        alt={`${project.title} website screenshot`}
        loading={eager ? undefined : "lazy"}
        decoding="async"
        className={`w-full h-full object-cover object-top ${
          duotone ? "duotone" : ""
        }`}
      />
    </picture>
  );
}

function ChromeFrame({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-surface border border-border overflow-hidden shadow-[0_1px_2px_rgba(26,26,26,0.04),0_12px_48px_rgba(26,26,26,0.07)]">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <span className="text-[11px] font-mono text-muted mx-auto">
          {project.url}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

function CaseStudy({
  project,
  index,
  onClose,
  onNext,
}: {
  project: Project;
  index: number;
  onClose: () => void;
  onNext: () => void;
}) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const next = projects[(index + 1) % projects.length];

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
      animate={reduceMotion ? { opacity: 1 } : { y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { y: "100%" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-0 z-[70] bg-bg overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="max-w-5xl mx-auto px-6 py-8 sm:py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <p className="text-xs font-mono text-gold tracking-[0.25em] uppercase">
            {String(index + 1).padStart(2, "0")} — Case Study
          </p>
          <button
            onClick={onClose}
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-subtle hover:border-accent hover:text-accent transition-colors"
            aria-label="Close case study"
          >
            Close
            <span className="group-hover:rotate-90 transition-transform duration-300">
              ✕
            </span>
          </button>
        </div>

        {/* Title */}
        <h3 className="font-display italic text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tight mb-4">
          {project.title}
        </h3>
        <p className="text-sm uppercase tracking-[0.25em] text-gold-dim font-medium mb-12 sm:mb-16">
          {project.brand}
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-y border-border py-8 mb-12 sm:mb-16">
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-2">
              Role
            </p>
            <p className="text-sm text-text">{project.role}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-2">
              Context
            </p>
            <p className="text-sm text-text">{project.meta}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-2">
              Stack
            </p>
            <p className="text-sm text-text">{project.tags.join(", ")}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-muted uppercase tracking-wider mb-2">
              Live
            </p>
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-dim transition-colors"
            >
              {project.url} ↗
            </a>
          </div>
        </div>

        {/* Full-color screenshot — the duotone lifts inside the case study */}
        <div className="mb-12 sm:mb-16">
          <ChromeFrame project={project}>
            <Screenshot
              project={project}
              eager
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </ChromeFrame>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-12 gap-10 mb-16 sm:mb-24">
          <div className="md:col-span-7">
            <p className="text-xs font-mono text-gold-dim tracking-[0.25em] uppercase mb-5">
              The work
            </p>
            <p className="text-subtle text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-xs font-mono text-gold-dim tracking-[0.25em] uppercase mb-5">
              Highlights
            </p>
            <ul className="space-y-4">
              {project.highlights.map((h, i) => (
                <li key={h} className="flex gap-4 text-base text-subtle">
                  <span className="font-mono text-xs text-gold pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next project */}
        <button
          onClick={onNext}
          className="index-row group w-full text-left border-t border-border pt-8 pb-4"
        >
          <p className="text-xs font-mono text-muted uppercase tracking-[0.25em] mb-3">
            Next project
          </p>
          <span className="text-outline font-display italic text-[clamp(2.5rem,6vw,4.5rem)] leading-none">
            {next.title} →
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const previewX = useSpring(mouseX, { stiffness: 180, damping: 24 });
  const previewY = useSpring(mouseY, { stiffness: 180, damping: 24 });

  function onMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  function onMouseEnter(e: React.MouseEvent) {
    // Skip the spring on entry so the preview doesn't fly in from (0,0)
    mouseX.jump(e.clientX);
    mouseY.jump(e.clientY);
  }

  return (
    <section id="projects" className="py-28 sm:py-40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="02"
          label="Selected Work"
          title="Things I've shipped."
        />

        {/* Desktop: typographic index with cursor-following preview */}
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => setHovered(null)}
          className="hidden lg:block border-t border-border relative"
        >
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.06}>
              <button
                onClick={() => setOpenIndex(i)}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="index-row group w-full grid grid-cols-12 items-baseline gap-6 py-9 border-b border-border text-left cursor-pointer"
              >
                <span className="col-span-1 font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-8">
                  <span className="text-outline font-display text-[clamp(3rem,5.5vw,5rem)] leading-none tracking-tight">
                    {project.title}
                  </span>
                </span>
                <span className="col-span-3 text-right">
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted group-hover:text-gold-dim transition-colors">
                    {project.role}
                  </span>
                  <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted/60 mt-1.5">
                    {project.meta}
                  </span>
                </span>
              </button>
            </AnimatedSection>
          ))}

          {/* Cursor-following preview */}
          <AnimatePresence>
            {hovered !== null && !reduceMotion && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{ x: previewX, y: previewY }}
                className="fixed top-0 left-0 z-30 w-[24rem] pointer-events-none"
                aria-hidden="true"
              >
                <div className="-translate-x-1/2 -translate-y-[110%] rounded-lg overflow-hidden border border-border shadow-[0_24px_80px_rgba(26,26,26,0.18)]">
                  <div className="aspect-[16/10]">
                    <Screenshot
                      project={projects[hovered]}
                      duotone
                      eager
                      sizes="384px"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: tappable framed cards */}
        <div className="lg:hidden space-y-12">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={0.05}>
              <button
                onClick={() => setOpenIndex(i)}
                className="group block w-full text-left"
              >
                <ChromeFrame project={project}>
                  <Screenshot
                    project={project}
                    duotone
                    eager={i === 0}
                    sizes="100vw"
                  />
                </ChromeFrame>
                <div className="flex items-baseline justify-between gap-4 mt-4">
                  <span className="font-display italic text-3xl text-text">
                    {project.title}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted shrink-0">
                    {project.meta}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-dim mt-2">
                  {project.brand}
                </p>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Case-study overlay */}
      <AnimatePresence>
        {openIndex !== null && (
          <CaseStudy
            project={projects[openIndex]}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNext={() => setOpenIndex((openIndex + 1) % projects.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
