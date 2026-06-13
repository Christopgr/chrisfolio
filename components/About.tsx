"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: [".NET", "Node.js", "REST APIs", "MongoDB"] },
  { category: "Databases", items: ["MongoDB", "MSSQL", "MySQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "Azure"] },
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="02" label="About" title="The artist." />

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Portrait — cropped above the cup, kept in colour (crimson light = the accent) */}
          <Reveal delay={0.1} className="md:col-span-4">
            <div className="relative aspect-[4/5] border border-border overflow-hidden">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/portrait-800.webp 800w, /portrait-1200.webp 1200w"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <img
                  src="/portrait-1200.webp"
                  alt="Chris Topalis, lit in red on an Athens rooftop at night"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </picture>
              <div className="absolute bottom-0 inset-x-0 border-t border-white/20 bg-black/40 backdrop-blur-sm px-5 py-3 flex items-center justify-between text-white">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em]">
                  Athens, GR
                </span>
                <span className="font-display italic text-sm">Αθήνα</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-8">
            <div className="space-y-8">
              <p className="text-2xl sm:text-[2rem] font-light leading-snug tracking-tight text-text">
                Software engineer based in Athens, Greece — working at{" "}
                <span className="font-display italic text-accent">
                  Wealthyhood
                </span>
                , an investment platform that makes wealth-building accessible
                to everyone.
              </p>
              <p className="text-subtle text-lg leading-relaxed">
                Before fintech, I spent nearly five years building e-commerce
                platforms as one of the core developers at SLEED for brands
                like Lacoste, Politeia, and AntetokounBros — product catalogs,
                checkout flows, search engines, analytics, payment and ERP
                integrations.
              </p>
              <div className="border-l-2 border-accent/40 pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-3">
                  Beyond code
                </p>
                <p className="text-subtle text-lg leading-relaxed">
                  I also own a family packaging business! My family has been in
                  the packaging sector for over 25 years and most of my working
                  life has been spent there — sales, designing, deliveries,
                  partner relations, transitioning through the financial
                  crisis, I have lived through a lot of ups and downs. Nowadays
                  I mostly help with admin, imports and the occasional
                  delivery.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-12">
            {skills.map((skill) => (
              <div key={skill.category} className="space-y-4">
                <h3 className="font-mono text-xs text-muted tracking-wider uppercase">
                  {skill.category}
                </h3>
                <ul className="space-y-2.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-subtle flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
