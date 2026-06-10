"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/lib/data";

function Counter({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 30;
    const stepDuration = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      setCount(Math.round(target * progress));
      if (current >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
    >
      <div className="mb-1 text-4xl font-bold tracking-tight md:text-5xl">
        <span className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
          {count}
          {suffix}
        </span>
      </div>
      <div className="text-sm text-zinc-500">{label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-indigo-400">
            By the Numbers
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Results that{" "}
            <span className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              speak
            </span>
          </h2>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => (
            <motion.li
              key={metric.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Counter
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
