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
                I&apos;m a software engineer based in Athens, Greece, with a passion for
                building polished, high-performance web applications. Currently
                crafting fintech solutions at{" "}
                <span className="text-text font-medium">Wealthyhood</span>.
              </p>
              <p>
                With experience spanning e-commerce platforms for major fashion
                brands to fintech products, I bring a full-stack perspective to
                every project. I thrive at the intersection of clean code and
                great user experience.
              </p>
              <p>
                Beyond engineering, I run a family packaging business — giving me
                a unique perspective on both the technical and business side of
                building products.
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
