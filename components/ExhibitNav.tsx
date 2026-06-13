"use client";

import Link from "next/link";

export default function ExhibitNav({ number }: { number: string }) {
  return (
    <div className="sticky top-0 z-40 bg-bg/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em]">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-text hover:text-accent transition-colors"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            ←
          </span>
          Index
        </Link>
        <span className="text-muted">Exhibit {number}</span>
        <Link
          href="/"
          className="text-text hover:text-accent transition-colors tracking-[0.3em]"
        >
          Chris Topalis
        </Link>
      </div>
    </div>
  );
}
