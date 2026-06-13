"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 sm:py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="04" label="Contact" title="Let's build something." />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal delay={0.1}>
            <div className="space-y-10">
              <p className="text-subtle text-lg leading-relaxed max-w-md">
                Always open to a good conversation — about engineering,
                e-commerce, fintech, or packaging. Reach out.
              </p>

              <div className="space-y-1">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 border-b border-border hover:border-accent/40 transition-colors"
                  >
                    <span className="font-mono text-xs text-muted w-20 uppercase tracking-[0.2em]">
                      {social.label}
                    </span>
                    <span className="text-lg text-text group-hover:text-accent transition-colors">
                      {social.value}
                    </span>
                    <svg
                      className="w-4 h-4 ml-auto text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
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
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-8 sm:p-10 grain-card border border-border">
              <p className="font-mono text-xs text-muted tracking-[0.2em] uppercase mb-6">
                Quick message
              </p>
              {status === "sent" ? (
                <div className="text-center py-8">
                  <p className="font-display italic text-2xl text-text mb-2">
                    Message sent!
                  </p>
                  <p className="text-subtle text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="access_key"
                    value="f012fcb2-f65d-49a6-8ff9-99b9901a4d5e"
                  />
                  <input type="hidden" name="subject" value="New message from christopalis.com" />
                  <input type="checkbox" name="botcheck" className="hidden" />
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-base text-text placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-base text-text placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      required
                      className="w-full bg-bg border border-border rounded-lg px-4 py-3.5 text-base text-text placeholder:text-muted focus:outline-none focus:border-accent/40 transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-accent text-sm">Something went wrong. Try again or email me directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="px-6 py-3.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors duration-200 w-full disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
