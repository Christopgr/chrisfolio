export type Metric = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  url: string;
  client: string;
  brand: string;
  year: string;
  role: string;
  stack: string[];
  /** One-line summary for the catalogue index. */
  summary: string;
  /** Wall-text paragraphs for the exhibit page. */
  story: string[];
  /** Concrete things shipped — seeded from existing copy, to be enriched from commit history. */
  contributions: string[];
  /** Real numbers — populate from commit history / analytics when available. */
  metrics?: Metric[];
};

/**
 * Single source of truth for both the home catalogue and the /work/[slug] exhibits.
 * Screenshots live at /public/projects/<slug>{,-640w,-960w,-1280w,-1920w}.webp.
 *
 * NOTE: `story`, `contributions`, and `metrics` are currently seeded from existing
 * factual copy. They are placeholders pending the commit-history pass.
 */
export const projects: Project[] = [
  {
    slug: "wealthyhood",
    title: "Wealthyhood",
    url: "wealthyhood.com",
    client: "Wealthyhood",
    brand: "Investment platform for everyone",
    year: "2025",
    role: "Software Engineer, Full Stack",
    stack: ["TypeScript", "React", "MongoDB", "Node.js"],
    summary:
      "An investment platform making wealth-building accessible to everyone.",
    story: [
      "Wealthyhood is an investment platform on a mission to make wealth-building accessible to everyone — not just the already-wealthy.",
      "I work across the full stack, primarily on the API layer, with contributions to internal web projects and tooling. The work ships to thousands of investors who rely on the platform daily.",
    ],
    contributions: [
      "Core work on the API layer powering the investment platform",
      "Contributions to internal web projects and developer tooling",
      "Features shipping to thousands of investors daily",
    ],
  },
  {
    slug: "lacoste",
    title: "Lacoste Greece",
    url: "lacoste.gr",
    client: "Lacoste · via SLEED",
    brand: "Iconic French fashion-sport brand",
    year: "2021–2025",
    role: "Front-end & Back-end · ERP owner",
    stack: ["nopCommerce", ".NET", "MSSQL", "E-Commerce"],
    summary:
      "Custom e-commerce for the iconic French brand's Greek market.",
    story: [
      "Lacoste needed a custom storefront tailored to the Greek market, built on nopCommerce.",
      "I worked across the front-end and back-end team and owned the ERP integration end to end — keeping the catalogue, inventory, and orders in sync between the storefront and the back office.",
    ],
    contributions: [
      "Owned the ERP integration end to end",
      "Product catalogue and multi-category navigation",
      "Checkout flows for the Greek-market storefront",
    ],
  },
  {
    slug: "bodytalk",
    title: "Bodytalk",
    url: "bodytalk.com",
    client: "Bodytalk · via SLEED",
    brand: "Greek athletic fashion brand",
    year: "2021–2025",
    role: "Front-end & Back-end owner",
    stack: ["Bizweb", "React", ".NET 8", "ERP"],
    summary:
      "Storefront, discovery, payments and analytics on the Bizweb platform.",
    story: [
      "Bodytalk is a Greek athletic-fashion brand. The storefront was built on Bizweb, the custom e-commerce platform developed at SLEED.",
      "I owned the front-end and back-end and helped with the ERP integration, wiring up product discovery, analytics, payments, and lifecycle marketing.",
    ],
    contributions: [
      "Owned front-end and back-end on the Bizweb platform",
      "Dynamic filtering and product discovery",
      "Analytics (GTM, Skroutz), payments (Klarna), and Klaviyo",
    ],
  },
  {
    slug: "politeianet",
    title: "Politeia Net",
    url: "politeianet.gr",
    client: "Politeia · via SLEED",
    brand: "Greece's leading bookstore — 45 years of heritage",
    year: "2021–2025",
    role: "Front-end & Back-end owner",
    stack: ["Bizweb", "React", ".NET 8", "MSSQL"],
    summary:
      "Search and discovery across hundreds of thousands of titles.",
    story: [
      "Politeia is one of Greece's most established bookstores, with 45 years of heritage and a catalogue spanning hundreds of thousands of titles.",
      "Built on Bizweb, I owned the front-end and back-end — focusing on complex search at scale, curated and editorial content, and social features like reviews and reading lists.",
    ],
    contributions: [
      "Complex search across hundreds of thousands of titles",
      "Curated selections and editorial content",
      "Social features — reviews and reading lists",
    ],
  },
  {
    slug: "antetokounbros",
    title: "AntetokounBros",
    url: "antetokounbros.com",
    client: "AntetokounBros · via SLEED",
    brand: "The Antetokounmpo brothers' lifestyle brand",
    year: "2021–2025",
    role: "Front-end, Back-end & ERP",
    stack: ["nopCommerce", ".NET", "MySQL", "Global"],
    summary:
      "Global, multi-currency storefront for the Antetokounmpo family's brand.",
    story: [
      "AntetokounBros is the lifestyle brand of the Antetokounmpo family, selling to a global audience.",
      "I built the custom nopCommerce storefront — owning front-end, back-end, and the ERP integration — with global shipping, multi-currency support, and premium collection drops.",
    ],
    contributions: [
      "Owned front-end, back-end, and the ERP integration",
      "Global shipping and multi-currency support",
      "Premium collection drops",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string): { prev: Project; next: Project } {
  const i = projects.findIndex((p) => p.slug === slug);
  const len = projects.length;
  return {
    prev: projects[(i - 1 + len) % len],
    next: projects[(i + 1) % len],
  };
}

/** Responsive srcSet for a project's screenshot set. */
export function projectSrcSet(slug: string): string {
  return [640, 960, 1280, 1920]
    .map((w) => `/projects/${slug}-${w}w.webp ${w}w`)
    .join(", ");
}
