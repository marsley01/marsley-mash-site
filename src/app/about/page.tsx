"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { DotsGrid, Crosses, Rings, GeometricShape, CornerAccents } from "@/components/VisualAnchors";
import { TechIcon } from "@/components/TechIcons";

const milestones = [
  {
    year: "2023",
    title: "Started the Journey",
    description:
      "Began learning IT at JKUAT while diving into web development and entrepreneurship.",
  },
  {
    year: "2024",
    title: "Founded Cyzora",
    description:
      "Started a web agency focused on building and hosting modern framework-based websites for businesses.",
  },
  {
    year: "2024",
    title: "Built Edyfra",
    description:
      "Created an edtech platform connecting tutors and students with performance monitoring and resource sharing.",
  },
  {
    year: "2025",
    title: "Expanded Portfolio",
    description:
      "Launched Trivo Kenya (tech gadgets), Belloria Beauty (cosmetics showcase), Inshot AI (shop assistant bot), and more.",
  },
  {
    year: "2026",
    title: "Building the Future",
    description:
      "Building SaaS products, growing Cyzora, and integrating AI into practical tools. Always learning, always shipping.",
  },
];

const values = [
  {
    title: "Build with Purpose",
    description: "Every project solves a real problem for real people.",
  },
  {
    title: "Ship Fast, Improve Always",
    description: "Launch early, iterate often, and never stop learning.",
  },
  {
    title: "Design Matters",
    description: "Great products need great experiences — form meets function.",
  },
  {
    title: "Empower Others",
    description: "Sharing knowledge and inspiring the next generation of creators.",
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

export default function About() {
  return (
    <>
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-28">
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
            About Me
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            I&apos;m Marsley Mash — a web & software developer based in Nairobi,
            Kenya. I build brands, platforms, and tools that solve real
            problems.
          </p>
        </motion.div>
      </section>

      <Section className="relative bg-card/30">
        <GeometricShape />
        <CornerAccents />
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight">Background</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              I&apos;m an IT student at JKUAT and a self-taught developer who
              learns by building. What started as curiosity turned into a
              full-blown passion for creating digital products that make a
              difference.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Today I run Cyzora, Edyfra, and I&apos;m constantly exploring how AI
              and software can solve everyday problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight">
              Current Focus
            </h2>
            <ul className="mt-4 space-y-4">
              {[
                "Building and scaling SaaS products",
                "Growing Cyzora — my web development agency",
                "Integrating AI into practical tools and bots",
                "Exploring new tech and shipping projects",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      <Section className="relative">
        <DotsGrid density="medium" className="opacity-30" />
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold tracking-tight"
          >
            Skills
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                <TechIcon name={skill} />
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative bg-card/30">
        <Rings className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" count={2} />
        <Crosses />
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold tracking-tight"
          >
            My Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-[19px] top-0 h-full w-px bg-border/40" />

            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative mb-10 flex gap-6 pl-12 last:mb-0"
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-card text-xs font-semibold text-accent">
                  {item.year.slice(2)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative">
        <GeometricShape />
        <CornerAccents />
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center text-3xl font-bold tracking-tight"
          >
            What Drives Me
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/40 bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
