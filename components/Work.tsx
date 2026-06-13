"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { projects } from "@/lib/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WebGLImage from "./WebGLImage";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const previewX = useSpring(mouseX, { stiffness: 180, damping: 24 });
  const previewY = useSpring(mouseY, { stiffness: 180, damping: 24 });

  function onMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }
  function onMouseEnter(e: React.MouseEvent) {
    // Jump (no spring) on entry so the preview doesn't fly in from the corner.
    mouseX.jump(e.clientX);
    mouseY.jump(e.clientY);
  }

  return (
    <section id="work" className="py-28 sm:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="01" label="Selected Work" title="The catalogue." />

        {/* Desktop: typographic catalogue with cursor-following preview */}
        <div
          onMouseMove={onMouseMove}
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => setHovered(null)}
          className="hidden lg:block border-t border-border relative"
        >
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <Link
                href={`/work/${project.slug}`}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                className="index-row group grid grid-cols-12 items-center gap-6 py-8 border-b border-border"
              >
                <span className="col-span-1 font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-7">
                  <span className="text-outline display text-[clamp(2.5rem,5vw,4.5rem)]">
                    {project.title}
                  </span>
                </span>
                <span className="col-span-3">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted group-hover:text-text transition-colors">
                    {project.role}
                  </span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted/60 mt-1.5">
                    {project.year}
                  </span>
                </span>
                <span className="col-span-1 justify-self-end font-mono text-lg text-muted group-hover:text-accent transition-colors">
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}

          {/* Cursor-following preview — hover-driven, not scroll-linked */}
          <AnimatePresence>
            {hovered !== null && !reduceMotion && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ x: previewX, y: previewY }}
                className="fixed top-0 left-0 z-30 w-[22rem] pointer-events-none"
                aria-hidden="true"
              >
                <div className="-translate-x-1/2 -translate-y-[112%] overflow-hidden border border-border shadow-[0_24px_80px_rgba(20,20,20,0.18)]">
                  <div className="aspect-[16/10] duotone-hover-color">
                    <WebGLImage
                      slug={projects[hovered].slug}
                      alt=""
                      eager
                      sizes="352px"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: framed catalogue cards */}
        <div className="lg:hidden space-y-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="overflow-hidden border border-border">
                  <div className="aspect-[16/10]">
                    <WebGLImage
                      slug={project.slug}
                      alt={`${project.title} screenshot`}
                      eager={i === 0}
                      sizes="100vw"
                    />
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-4 mt-4">
                  <span className="display text-3xl">
                    <span className="font-mono text-sm text-muted mr-3 normal-case">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted shrink-0">
                    {project.year}
                  </span>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted mt-2">
                  {project.role}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
