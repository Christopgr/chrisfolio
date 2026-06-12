"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
}

export default function SectionHeading({
  number,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <AnimatedSection>
      <div className="relative mb-16 sm:mb-24">
        <span className="ghost-numeral absolute -top-6 sm:-top-10 -left-2 sm:-left-6 text-[7rem] sm:text-[12rem]">
          {number}
        </span>
        <div className="relative pt-10 sm:pt-16">
          <p className="text-xs font-mono text-gold tracking-[0.25em] uppercase mb-4">
            {number} — {label}
          </p>
          <div className="flex items-end gap-8">
            <h2 className="font-display italic text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-text">
              {title}
            </h2>
            <div className="flex-1 h-px bg-border mb-5 hidden sm:block" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
