"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Software Engineer",
    company: "Wealthyhood",
    period: "Feb 2025 — Present",
    year: "Now",
    description:
      "Working across the full stack on an investment platform — TypeScript, React, MongoDB. Shipping features used by thousands of investors daily.",
    current: true,
  },
  {
    role: "Software Engineer",
    company: "SLEED",
    period: "May 2021 — Jan 2025",
    year: "2021",
    description:
      "One of the core developers of Bizweb, a custom e-commerce platform built with .NET 8 and React. Shipped storefronts for Lacoste, Bodytalk, Politeia, and AntetokounBros.",
    current: false,
  },
  {
    role: ".NET Developer",
    company: "ED EXTEND P.C.",
    period: "May 2020 — May 2021",
    year: "2020",
    description:
      "Developed high-performance e-commerce sites using nopCommerce (.NET 6) with custom MSSQL/MySQL integrations.",
    current: false,
  },
  {
    role: "Android Developer",
    company: 'NCSR "DEMOKRITOS"',
    period: "Mar 2018 — Jun 2018",
    year: "2018",
    description:
      "University placement working on the iWelli health platform. Integrated medical IoT devices via BLE API.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="03" label="Career" title="Provenance." />

        <div className="border-t border-border">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <div className="group grid sm:grid-cols-12 gap-4 sm:gap-8 items-baseline py-10 sm:py-14 border-b border-border transition-colors duration-500 hover:bg-surface/60 sm:px-6 sm:-mx-6">
                {/* Oversized year */}
                <div className="sm:col-span-3">
                  <span
                    className={`font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-none ${
                      exp.current ? "text-accent" : "text-border"
                    } group-hover:text-text transition-colors duration-500`}
                  >
                    {exp.year}
                  </span>
                </div>

                <div className="sm:col-span-9 space-y-3">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-text">
                      {exp.role}
                    </h3>
                    <span className="font-display italic text-xl sm:text-2xl text-accent">
                      {exp.company}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-muted tracking-wide">
                    {exp.period}
                  </p>
                  <p className="text-subtle text-base leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
