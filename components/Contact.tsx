"use client";

import AnimatedSection from "./AnimatedSection";

const socials = [
  {
    label: "Email",
    value: "ctopalis@gmail.com",
    href: "mailto:ctopalis@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "christopgr",
    href: "https://www.linkedin.com/in/christopgr",
  },
  {
    label: "GitHub",
    value: "christopgr",
    href: "https://github.com/christopgr",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-mono text-gold tracking-wider uppercase">
              04
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
              Get in{" "}
              <span className="font-display italic text-accent-light">
                Touch
              </span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-subtle leading-relaxed max-w-md">
                I have low availability for new projects, but always open to a good
                conversation. Feel free to reach out.
              </p>

              <div className="space-y-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-3 border-b border-border hover:border-muted transition-colors"
                  >
                    <span className="text-xs font-mono text-muted w-20">
                      {social.label}
                    </span>
                    <span className="text-text group-hover:text-accent-light transition-colors">
                      {social.value}
                    </span>
                    <svg
                      className="w-3.5 h-3.5 ml-auto text-muted group-hover:text-accent-light group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-2xl bg-surface border border-border glow">
              <p className="text-xs font-mono text-gold-dim tracking-wider uppercase mb-6">
                Quick message
              </p>
              <form
                action={`mailto:ctopalis@gmail.com`}
                method="GET"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="body"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
