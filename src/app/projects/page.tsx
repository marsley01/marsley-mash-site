"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

interface Project {
  title: string;
  description: string;
  gradient: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Munchify",
    description:
      "A food delivery platform focused on student convenience and speed. Fulfilled 5,000+ orders in one semester at Maseno University, revolutionizing campus food access.",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["Delivery", "Food", "Campus", "Mobile"],
  },
  {
    title: "Cyzora",
    description:
      "A web agency that builds and hosts modern framework-based websites for businesses and creators. Focused on performance, design, and developer experience.",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["Web Agency", "Hosting", "Frameworks", "Development"],
  },
  {
    title: "Edyfra",
    description:
      "An edtech platform that helps schools monitor student performance during holidays. Connects tutors with students, enables resource sharing, and bridges the learning gap between terms.",
    gradient: "from-violet-500 to-purple-600",
    tags: ["Edtech", "Schools", "Tutoring", "Performance"],
  },
  {
    title: "Trivo Kenya",
    description:
      "An online store selling premium tech gadgets and accessories. Curated selection of high-quality tech products for the modern consumer.",
    gradient: "from-orange-500 to-red-600",
    tags: ["E-commerce", "Tech Gadgets", "Kenya"],
  },
  {
    title: "Belloria Beauty",
    description:
      "A cosmetic brand showcase site featuring beauty products with a premium, elegant design. Built to display and promote the Belloria Beauty line.",
    gradient: "from-pink-500 to-rose-600",
    tags: ["Beauty", "Cosmetics", "Showcase"],
  },
  {
    title: "Inshot AI",
    description:
      "An AI-powered shop assistant tool that helps customers browse products, get recommendations, and find what they need — acting as an intelligent sales assistant.",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["AI", "Assistant", "Shopping", "Chatbot"],
  },
  {
    title: "WhatsApp Bot",
    description:
      "An automated customer service bot for WhatsApp that handles inquiries, shows product catalogs, answers questions, and acts as a 24/7 shop assistant.",
    gradient: "from-green-500 to-emerald-600",
    tags: ["WhatsApp", "Bot", "Customer Service", "Automation"],
  },
  {
    title: "More SaaS",
    description:
      "Various SaaS products and tools in development — focused on solving real problems with clean, scalable technology.",
    gradient: "from-gray-500 to-zinc-600",
    tags: ["SaaS", "Tools", "Innovation"],
  },
];

export default function Projects() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            A collection of platforms, brands, and tools I&apos;ve built from
            the ground up.
          </p>
        </motion.div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:border-border"
            >
              <div
                className={`mb-4 h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient}`}
              />
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-card-secondary px-3 py-1 text-xs font-medium text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
