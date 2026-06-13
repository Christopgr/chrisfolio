"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
}

/**
 * Museum catalogue heading: mono index label over a large title, with a hairline
 * rule running to the margin. Monochrome — no gold, no italic-accent-word tic.
 */
export default function SectionHeading({
  number,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="relative mb-16 sm:mb-24">
        <span className="ghost-numeral absolute -top-6 sm:-top-10 -left-2 sm:-left-6 text-[7rem] sm:text-[12rem]">
          {number}
        </span>
        <div className="relative pt-10 sm:pt-16">
          <p className="font-mono text-xs text-muted tracking-[0.25em] uppercase mb-5">
            ({number}) &nbsp;{label}
          </p>
          <div className="flex items-end gap-8">
            <h2 className="text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-text">
              {title}
            </h2>
            <div className="flex-1 h-px bg-border mb-4 hidden sm:block" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
