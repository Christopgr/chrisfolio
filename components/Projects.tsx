"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Lacoste Greece",
    url: "lacoste.gr",
    slug: "lacoste",
    brand: "Iconic French fashion-sport brand",
    description:
      "Built at SLEED on custom nopCommerce. Led the front-end and back-end development for Lacoste's Greek e-commerce — product catalog, multi-category navigation, checkout flows, and ERP integrations.",
    tags: ["nopCommerce", ".NET", "E-Commerce", "MSSQL"],
    color: "#0a6640",
  },
  {
    title: "Bodytalk",
    url: "bodytalk.com",
    slug: "bodytalk",
    brand: "Greek athletic fashion brand",
    description:
      "Built at SLEED on Bizweb, the custom e-commerce platform I helped build as one of the main engineers. Led front-end, back-end, and ERP integrations. Dynamic filtering, analytics (GTM, Skroutz), payments (Simpler), and email marketing (Klaviyo).",
    tags: ["Bizweb", "React", ".NET 8", "ERP"],
    color: "#e11d48",
  },
  {
    title: "Politeia Net",
    url: "politeianet.gr",
    slug: "politeianet",
    brand: "Greece's leading bookstore — 45 years of heritage",
    description:
      "Built at SLEED on Bizweb. Led front-end, back-end, and ERP integrations for one of Greece's most established bookstores. Complex search across hundreds of thousands of titles, curated selections, and editorial content.",
    tags: ["Bizweb", "React", ".NET 8", "MySQL"],
    color: "#c27b1a",
  },
  {
    title: "AntetokounBros",
    url: "antetokounbros.com",
    slug: "antetokounbros",
    brand: "The Antetokounmpo brothers' lifestyle brand",
    description:
      'Built at SLEED on custom nopCommerce. Developed the official e-commerce store for the Antetokounmpo family\'s brand — global shipping, multi-currency support, and premium collection drops.',
    tags: ["nopCommerce", ".NET", "E-Commerce", "Global"],
    color: "#18181b",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-gold tracking-wider uppercase">
              02
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Featured{" "}
              <span className="font-display italic text-accent-light">
                Projects
              </span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.url} delay={i * 0.1}>
              <motion.a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-surface border border-border card-hover relative overflow-hidden"
                whileHover={{ scale: 1.003 }}
                transition={{ duration: 0.2 }}
              >
                {/* Project screenshot */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`/projects/${project.slug}-640w.webp 640w, /projects/${project.slug}-960w.webp 960w, /projects/${project.slug}-1280w.webp 1280w, /projects/${project.slug}-1920w.webp 1920w`}
                      sizes="(max-width: 640px) 640px, (max-width: 960px) 960px, (max-width: 1280px) 1280px, 1920px"
                    />
                    <img
                      src={`/projects/${project.slug}.webp`}
                      alt={`${project.title} website screenshot`}
                      loading={i === 0 ? undefined : "lazy"}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Visit badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-bg/80 backdrop-blur-sm border border-border text-xs text-subtle flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Visit Site
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-xl font-medium text-text group-hover:text-accent-light transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-muted">
                      {project.url}
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-gold-dim font-medium">
                    {project.brand}
                  </p>

                  <p className="text-subtle text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-bg border border-border text-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
