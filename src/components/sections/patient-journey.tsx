"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PATIENT_JOURNEY } from "@/lib/clinic";

export function PatientJourney() {
  return (
    <section id="journey" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom -right-24 top-16 h-72 w-72" />
      <div className="cyan-bloom -left-20 bottom-0 h-72 w-72" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Patient Journey"
          title="What working with us looks like"
          description="From the first consultation to full recovery — a clear, predictable path, with nothing done before it has been explained."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {PATIENT_JOURNEY.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel glass-panel-hover group relative flex flex-col overflow-hidden p-6"
            >
              {/* hover accent line */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="font-display text-3xl font-bold leading-none text-primary/30 transition-colors duration-300 group-hover:text-primary/60">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
