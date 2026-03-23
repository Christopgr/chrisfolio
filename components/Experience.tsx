"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Software Engineer",
    company: "Wealthyhood",
    period: "Feb 2025 — Present",
    description:
      "Building fintech products with TypeScript, React, and MongoDB. Working on investment platform features serving thousands of users.",
    current: true,
  },
  {
    role: "Software Engineer",
    company: "SLEED",
    period: "May 2021 — Jan 2025",
    description:
      "Built e-commerce platforms for major brands including Lacoste, Bodytalk, Politeia, and AntetokounBros. Full-stack development with .NET 8, React, and SQL databases.",
    current: false,
  },
  {
    role: ".NET Developer",
    company: "ED EXTEND P.C.",
    period: "May 2020 — May 2021",
    description:
      "Developed high-performance e-commerce sites using nopCommerce (.NET 6) with custom MSSQL/MySQL integrations.",
    current: false,
  },
  {
    role: "Android Developer",
    company: 'NCSR "DEMOKRITOS"',
    period: "Mar 2018 — Jun 2018",
    description:
      "University placement working on the iWelli health platform. Integrated medical IoT devices via BLE API.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              03
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Work{" "}
              <span className="font-display italic text-accent-light">
                Experience
              </span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 0.1}>
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center pt-2">
                    <div
                      className={`w-[15px] h-[15px] rounded-full border-2 ${
                        exp.current
                          ? "border-accent bg-accent/20"
                          : "border-border bg-bg"
                      }`}
                    />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <h3 className="text-lg font-medium text-text">
                        {exp.role}
                      </h3>
                      <span className="text-accent text-sm">
                        @ {exp.company}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-muted">
                      {exp.period}
                    </p>
                    <p className="text-subtle text-sm leading-relaxed max-w-xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
