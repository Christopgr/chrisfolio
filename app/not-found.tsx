import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[100svh] px-6 text-center relative">
      <span className="ghost-numeral absolute text-[clamp(14rem,45vw,32rem)]" aria-hidden="true">
        404
      </span>
      <div className="relative">
        <p className="text-xs font-mono text-gold tracking-[0.25em] uppercase mb-6">
          Page not found — χάθηκες;
        </p>
        <h1 className="font-display italic text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight mb-10">
          This page
          <br />
          wandered off.
        </h1>
        <Link
          href="/"
          className="inline-block px-8 py-4 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200"
        >
          Take me home
        </Link>
      </div>
    </main>
  );
}
