import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris Topalis — Software Engineer",
  description:
    "Software Engineer specializing in TypeScript, React, and full-stack development. Building digital experiences that matter.",
  openGraph: {
    title: "Chris Topalis — Software Engineer",
    description:
      "Software Engineer specializing in TypeScript, React, and full-stack development.",
    type: "website",
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
