"use client";

import { motion } from "framer-motion";
import {
  Bandage,
  Bone,
  Dumbbell,
  Hand,
  Microscope,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SPECIALTIES, type SpecialtyKey } from "@/lib/clinic";

const ICONS: Record<SpecialtyKey, LucideIcon> = {
  joint: Bone,
  back: PersonStanding,
  sports: Dumbbell,
  hand: Hand,
  arthroscopy: Microscope,
  fractures: Bandage,
};

export function Specialties() {
  return (
    <section id="specialties" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom -left-20 top-10 h-72 w-72" />
      <div className="cyan-bloom -right-24 bottom-0 h-80 w-80" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Clinical Expertise"
          title="Elite Specialties"
          description="Specialised orthopaedic procedures carried out with meticulous attention to detail — using minimally invasive techniques wherever possible."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map((specialty, index) => {
            const Icon = ICONS[specialty.key];
            return (
              <motion.article
                key={specialty.key}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel glass-panel-hover group relative flex flex-col overflow-hidden p-7"
              >
                {/* hover accent line */}
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>

                <p className="eyebrow text-primary/70">{specialty.blurb}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {specialty.title}
                </h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {specialty.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {specialty.chips.map((chip) => (
                    <span key={chip} className="data-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
