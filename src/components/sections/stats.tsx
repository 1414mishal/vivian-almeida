"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/clinic";

export function Stats() {
  return (
    <section className="border-y border-border/70 bg-surface-low">
      <div className="mx-auto w-full max-w-container">
        <div className="grid grid-cols-2 gap-px bg-border/60 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col items-center bg-surface-low px-4 py-10 text-center md:px-6 md:py-14"
            >
              <div className="font-display text-[2rem] font-bold tracking-tight text-primary transition-transform duration-300 group-hover:scale-110 sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="eyebrow mt-3 text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
