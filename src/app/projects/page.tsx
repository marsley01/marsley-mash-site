"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { DotsGrid, Crosses, Rings, GeometricShape, CornerAccents } from "@/components/VisualAnchors";
import ProjectCard, { allProjects } from "@/components/ProjectCard";

export default function Projects() {
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
            Projects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            A collection of platforms, brands, and tools I&apos;ve built from
            the ground up.
          </p>
        </motion.div>
      </section>

      <Section className="relative">
        <GeometricShape />
        <CornerAccents />
        <DotsGrid density="medium" className="opacity-20" />
        <div className="grid gap-6 sm:grid-cols-2">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
