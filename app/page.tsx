import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chris Topalis",
  url: "https://christopalis.com",
  email: "ctopalis@gmail.com",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Wealthyhood",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Athens",
    addressCountry: "GR",
  },
  sameAs: ["https://www.linkedin.com/in/christopgr"],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    ".NET",
    "MongoDB",
    "E-Commerce Development",
    "Full-Stack Development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
