"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="mb-2 text-sm font-medium tracking-widest uppercase text-indigo-400"
          >
            About Me
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mb-8 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Engineering experiences that{" "}
            <span className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              scale
            </span>
            .
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-3xl text-lg leading-relaxed text-zinc-400"
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid gap-4 sm:grid-cols-2"
          >
            {personalInfo.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4"
              >
                <span className="mt-1.5 flex size-2 shrink-0 rounded-full bg-indigo-500" />
                <span className="text-sm leading-relaxed text-zinc-300">
                  {highlight}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
