"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Section from "@/components/Section";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const featuredProjects = [
  {
    title: "Munchify",
    description:
      "Food delivery platform that fulfilled 5,000+ orders in one semester at Maseno University.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Cyzora",
    description:
      "Web agency building and hosting framework-based websites for businesses.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Edyfra",
    description:
      "Edtech platform for holiday performance monitoring, tutor-student connection & resource sharing.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Trivo Kenya",
    description: "Online store selling premium tech gadgets and accessories.",
    gradient: "from-orange-500 to-red-600",
  },
];

const skills = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "AI / LLM Integration",
  "UI/UX Design",
  "Databases (SQL / NoSQL)",
  "Git / GitHub",
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent-start/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-end/10 blur-[140px]" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-3xl text-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block rounded-full border border-border/40 bg-card/50 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-xl">
              Web Developer &middot; Software Developer &middot; Nairobi
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 bg-gradient-to-r from-foreground via-foreground/90 to-text-secondary bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl sm:leading-tight"
          >
            Marsley Mash
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl"
          >
            Building brands, platforms, and digital experiences that shape
            tomorrow. Founder of{" "}
            <span className="text-foreground">Munchify</span>,{" "}
            <span className="text-foreground">Cyzora</span>,{" "}
            <span className="text-foreground">Edyfra</span> & more.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/5 active:scale-[0.97]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-text-secondary/40"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-text-secondary/60"
            />
          </motion.div>
        </motion.div>
      </section>

      <Section id="featured" className="bg-card/30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-text-secondary">
            A glimpse into what I&apos;m building.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:border-border"
            >
              <div
                className={`mb-4 h-2 w-12 rounded-full bg-gradient-to-r ${project.gradient}`}
              />
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-text-secondary">
            Tools I use to bring ideas to life.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/40 bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Whether it&apos;s a web app, a brand, or the next big idea —
            I&apos;m always open to collaborations.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.97]"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
