"use client";

import AnimatedSection from "./AnimatedSection";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: [".NET", "Node.js", "REST APIs", "MongoDB"] },
  { category: "Databases", items: ["MongoDB", "MSSQL", "MySQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "Azure"] },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-gold tracking-wider uppercase">
              01
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              About <span className="font-display italic text-accent-light">Me</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-subtle leading-relaxed">
              <p>
                Software engineer based in Athens, Greece. Working at{" "}
                <span className="text-text font-medium">Wealthyhood</span>,
                an investment platform that makes wealth-building accessible
                to everyone.
              </p>
              <p>
                Before fintech, I spent nearly five years building e-commerce
                platforms as one of the core developers at SLEED for brands 
                like Lacoste, Politeia, and AntetokounBros — product catalogs, 
                checkout flows, search engines, analytics, payment and ERP integrations.
              </p>
              <p>
                I also own a family packaging business! My family has been in 
                the packaging sector for over 25 years and most of my working 
                life has been spent there — sales, designing, deliveries, partner relations, 
                transitiong through the financial crisis, I have lived 
                through a lot of up and downs. Nowadays I mostly help with admin, 
                imports and the occasional delivery.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.category} className="space-y-3">
                  <h3 className="text-xs font-mono text-gold-dim tracking-wider uppercase">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-subtle flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
