"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";
import { DotsGrid, Crosses, Rings, GeometricShape, CornerAccents } from "@/components/VisualAnchors";

const socials = [
  {
    name: "Instagram",
    handle: "@marlsey.official",
    url: "https://instagram.com/marlsey.official",
  },
  {
    name: "GitHub",
    handle: "marsley01",
    url: "https://github.com/marsley01",
  },
  {
    name: "Email",
    handle: "marsleymash@gmail.com",
    url: "mailto:marsleymash@gmail.com",
  },
  {
    name: "Phone",
    handle: "+254 740 610 772",
    url: "tel:+254740610772",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formState.name);
    form.append("email", formState.email);
    form.append("message", formState.message);

    await fetch("https://formspree.io/f/mgvlbzyp", {
      method: "POST",
      body: form,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-28">
        <DotsGrid density="sparse" className="opacity-40" />
        <Crosses />
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Got a project, collab, or just want to say hi? I&apos;d love to hear
            from you.
          </p>
        </motion.div>
      </section>

      <Section className="relative bg-card/30">
        <GeometricShape />
        <CornerAccents />
        <DotsGrid density="medium" className="opacity-20" />
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight">Send a Message</h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-2xl bg-card p-8 text-center"
              >
                <p className="text-lg font-semibold text-foreground">
                  Message sent!
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-border/40 px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-border/40 bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-text-secondary focus:border-accent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full rounded-xl border border-border/40 bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-text-secondary focus:border-accent"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className="w-full resize-none rounded-xl border border-border/40 bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-text-secondary focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight">
              Connect With Me
            </h2>
            <div className="mt-8 space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-border/40 bg-card p-5 transition-colors hover:border-border"
                >
                  <div>
                    <p className="font-semibold text-foreground">
                      {social.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {social.handle}
                    </p>
                  </div>
                  <span className="text-text-secondary">&rarr;</span>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/40 bg-card p-6">
              <p className="text-sm text-text-secondary">
                Prefer to chat right now? Try the{" "}
                <span className="text-accent">assistant bot</span> in the bottom-right
                corner &mdash; it can answer questions about my projects and
                how to reach me.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
