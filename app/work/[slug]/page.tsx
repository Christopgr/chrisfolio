import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAdjacent,
  getProject,
  projects,
} from "@/lib/projects";
import Reveal from "@/components/Reveal";
import WebGLImage from "@/components/WebGLImage";
import ExhibitNav from "@/components/ExhibitNav";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — ${project.brand}`;
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [{ url: `/projects/${project.slug}.webp` }],
    },
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ExhibitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const number = String(index + 1).padStart(2, "0");
  const { prev, next } = getAdjacent(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    about: project.brand,
    url: `https://${project.url}`,
    creator: { "@type": "Person", name: "Chris Topalis" },
    keywords: project.stack.join(", "),
  };

  const placard: { label: string; value: React.ReactNode }[] = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Client", value: project.client },
    { label: "Stack", value: project.stack.join(", ") },
    {
      label: "Live",
      value: (
        <a
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-dim transition-colors"
        >
          {project.url} ↗
        </a>
      ),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExhibitNav number={number} />

      <article className="max-w-5xl mx-auto px-6 pb-12">
        {/* Title wall */}
        <header className="pt-16 sm:pt-24 pb-12 sm:pb-16">
          <p className="font-mono text-xs text-muted uppercase tracking-[0.25em] mb-6">
            ({number}) &nbsp;Selected Work
          </p>
          <h1 className="display text-[clamp(3rem,10vw,8rem)]">
            {project.title}
          </h1>
          <p className="font-display italic text-2xl sm:text-3xl text-accent mt-6">
            {project.brand}
          </p>
        </header>

        {/* Metadata placard */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-8 border-y border-border py-8 mb-12 sm:mb-16">
          {placard.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] mb-2">
                {item.label}
              </p>
              <p className="text-sm text-text leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        {/* The work, shown large in full colour */}
        <Reveal>
          <figure className="mb-14 sm:mb-20">
            <div className="border border-border overflow-hidden">
              <div className="aspect-[16/10]">
                <WebGLImage
                  slug={project.slug}
                  alt={`${project.title} website`}
                  eager
                  duotone={false}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
            <figcaption className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] mt-3">
              {project.url}
            </figcaption>
          </figure>
        </Reveal>

        {/* Wall text + contributions */}
        <div className="grid md:grid-cols-12 gap-10 mb-16 sm:mb-24">
          <div className="md:col-span-7 space-y-6">
            <p className="font-mono text-xs text-muted uppercase tracking-[0.25em]">
              The work
            </p>
            {project.story.map((para) => (
              <p
                key={para}
                className="text-subtle text-lg leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-[0.25em] mb-5">
                Contributions
              </p>
              <ul className="space-y-4">
                {project.contributions.map((c, i) => (
                  <li key={c} className="flex gap-4 text-base text-subtle">
                    <span className="font-mono text-xs text-accent pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div>
                <p className="font-mono text-xs text-muted uppercase tracking-[0.25em] mb-5">
                  By the numbers
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-medium text-3xl tracking-tight">
                        {m.value}
                      </p>
                      <p className="text-sm text-muted mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next exhibits */}
        <nav className="grid sm:grid-cols-2 border-t border-border">
          <Link
            href={`/work/${prev.slug}`}
            className="index-row group py-8 sm:pr-8 border-b sm:border-b-0 sm:border-r border-border"
          >
            <p className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] mb-3">
              ← Previous
            </p>
            <span className="text-outline display text-[clamp(1.75rem,4vw,3rem)]">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="index-row group py-8 sm:pl-8 sm:text-right"
          >
            <p className="font-mono text-[11px] text-muted uppercase tracking-[0.2em] mb-3">
              Next →
            </p>
            <span className="text-outline display text-[clamp(1.75rem,4vw,3rem)]">
              {next.title}
            </span>
          </Link>
        </nav>
      </article>
    </>
  );
}
