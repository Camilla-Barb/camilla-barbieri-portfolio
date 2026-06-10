"use client";

import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-indigo-400">
            How I Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            An engineering{" "}
            <span className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              workflow
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative mt-12"
        >
          <div className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-indigo-500 via-violet-500 to-transparent md:block" />
          <ol className="space-y-8 md:space-y-12">
            {workflowSteps.map((step) => (
              <motion.li
                key={step.number}
                variants={stepVariants}
                className="relative md:pl-16"
              >
                <div className="absolute left-4 top-1 hidden size-4 rounded-full border-2 border-indigo-500 bg-zinc-950 md:block" />
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-950/50 text-sm font-bold text-indigo-400 md:hidden">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
