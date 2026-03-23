import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://christopalis.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chris Topalis — Software Engineer",
    template: "%s | Chris Topalis",
  },
  description:
    "Software Engineer based in Athens, Greece. Specializing in TypeScript, React, .NET, and full-stack e-commerce development. Currently building fintech products at Wealthyhood.",
  keywords: [
    "Chris Topalis",
    "Software Engineer",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    ".NET",
    "E-Commerce Developer",
    "Athens Greece",
    "Wealthyhood",
    "Portfolio",
  ],
  authors: [{ name: "Chris Topalis", url: SITE_URL }],
  creator: "Chris Topalis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Chris Topalis",
    title: "Chris Topalis — Software Engineer",
    description:
      "Full-stack engineer crafting high-performance e-commerce platforms and fintech products. TypeScript, React, .NET.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Chris Topalis — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Topalis — Software Engineer",
    description:
      "Full-stack engineer crafting high-performance e-commerce platforms and fintech products.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
