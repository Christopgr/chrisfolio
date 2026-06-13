"use client";

import { projectSrcSet } from "@/lib/projects";

interface WebGLImageProps {
  slug: string;
  alt: string;
  /** Render eagerly (above-the-fold / first item). */
  eager?: boolean;
  sizes: string;
  className?: string;
  /** Duotone at rest (catalogue). Set false to show full colour (exhibit pages). */
  duotone?: boolean;
}

/**
 * Project artwork. Currently renders a duotone <picture> that lifts to full colour
 * on hover (calm, off-scroll). A subtle ogl/WebGL hover treatment is layered on top
 * of this same markup in a later pass; this static version is the graceful fallback
 * for no-WebGL and prefers-reduced-motion, so it must always stand on its own.
 */
export default function WebGLImage({
  slug,
  alt,
  eager,
  sizes,
  className = "",
  duotone = true,
}: WebGLImageProps) {
  return (
    <picture>
      <source type="image/webp" srcSet={projectSrcSet(slug)} sizes={sizes} />
      <img
        src={`/projects/${slug}.webp`}
        alt={alt}
        loading={eager ? undefined : "lazy"}
        decoding="async"
        className={`w-full h-full object-cover object-top ${
          duotone ? "duotone" : ""
        } ${className}`}
      />
    </picture>
  );
}
