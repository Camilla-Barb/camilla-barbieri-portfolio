"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-indigo-400">
            Featured Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Enterprise solutions I&apos;ve{" "}
            <span className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              delivered
            </span>
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.li
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 md:p-8"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 md:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{project.role}</p>
                </div>
                <ExternalLink className="mt-1 size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-indigo-400" />
              </div>

              <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <ul className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 text-xs text-zinc-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-950/50 px-3 py-1.5 text-xs font-medium text-indigo-300">
                <span className="size-1.5 rounded-full bg-indigo-500" />
                {project.metric}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
