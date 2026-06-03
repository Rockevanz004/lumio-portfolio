import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Lumio",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-void flex flex-col items-center justify-center px-6 text-center">
      {/* Ghost number */}
      <div className="font-display font-bold text-[clamp(120px,20vw,240px)] leading-none text-stroke-gold opacity-20 select-none mb-4">
        404
      </div>

      {/* Gold divider */}
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

      <h1 className="font-display font-light text-3xl md:text-4xl text-warm/80 mb-4">
        This page doesn&apos;t exist.
      </h1>
      <p className="font-sans text-sm text-secondary max-w-sm leading-relaxed mb-12">
        Maybe it was moved, or perhaps it never existed at all. The best
        digital legacies are always evolving.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-3 border border-gold/30 text-gold font-accent text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-gold hover:text-void transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
