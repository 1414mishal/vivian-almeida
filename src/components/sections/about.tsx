"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  GraduationCap,
  MapPin,
  Stethoscope,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  BIO,
  CREDENTIALS,
  DOCTOR,
  HIGHLIGHTS,
  QUALIFICATIONS,
  type HighlightKey,
} from "@/lib/clinic";

const QUICK_FACTS = [
  {
    icon: Building2,
    label: "Practice",
    value: `${DOCTOR.practice} · ${DOCTOR.building}`,
  },
  {
    icon: GraduationCap,
    label: "Faculty",
    value: DOCTOR.affiliation,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "KRR Road, Hampankatta, Mangaluru",
  },
  {
    icon: Stethoscope,
    label: "Focus",
    value: "Joint Replacement & Arthroscopic Keyhole Surgery",
  },
];

const HIGHLIGHT_ICONS: Record<HighlightKey, LucideIcon> = {
  faculty: GraduationCap,
  global: Globe,
  focus: Target,
};

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom right-0 top-24 h-72 w-72" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          eyebrow="The Surgeon"
          title="Trained across the world. Practising in Mangaluru."
          description="Joint replacement and arthroscopic keyhole surgery, backed by international fellowships and faculty experience at Fr. Muller Medical College Hospital."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative overflow-hidden p-8 lg:col-span-5"
          >
            <div className="cyan-bloom -right-12 -top-12 h-44 w-44" />

            <div className="relative">
              {/* Monogram medallion */}
              <div className="relative mx-auto grid h-32 w-32 place-items-center">
                <div className="absolute inset-0 animate-float rounded-full border border-primary/25" />
                <div className="absolute inset-[10px] rounded-full border border-primary/15" />
                <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-gradient-to-br from-primary/30 to-primary/5 shadow-glow-sm">
                  <span className="font-display text-3xl font-bold tracking-tight text-primary">
                    VRD
                  </span>
                </div>
              </div>

              <h3 className="mt-6 text-center font-display text-xl font-bold tracking-tight">
                {DOCTOR.name}
              </h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">
                {DOCTOR.title} · {DOCTOR.city}
              </p>

              {/* Credentials */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {CREDENTIALS.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {credential}
                  </span>
                ))}
              </div>

              <div className="my-7 h-px bg-border" />

              <ul className="space-y-5">
                {QUICK_FACTS.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
                      <fact.icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.7}
                      />
                    </span>
                    <span>
                      <span className="eyebrow text-muted-foreground">
                        {fact.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-foreground">
                        {fact.value}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bio + qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:col-span-7"
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {BIO.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 ? (
                    <>
                      <span className="font-medium text-foreground">
                        {DOCTOR.name}
                      </span>
                      {paragraph.replace(DOCTOR.name, "")}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Qualifications timeline */}
            <div className="mt-9 rounded-xl border border-border bg-surface-low/60 p-7 md:p-8">
              <p className="eyebrow text-primary">Qualifications &amp; Training</p>
              <ol className="relative mt-6 space-y-7">
                <span
                  aria-hidden
                  className="absolute bottom-2 left-[5px] top-2 w-px bg-border"
                />
                {QUALIFICATIONS.map((qualification) => (
                  <li key={qualification.title} className="relative pl-7">
                    <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-primary bg-background" />
                    <p className="eyebrow text-primary/80">
                      {qualification.period}
                    </p>
                    <p className="mt-1 font-display text-base font-semibold leading-snug text-foreground">
                      {qualification.title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {qualification.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>

        {/* Professional highlights */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {HIGHLIGHTS.map((highlight, index) => {
            const Icon = HIGHLIGHT_ICONS[highlight.key];
            return (
              <motion.div
                key={highlight.key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel glass-panel-hover p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {highlight.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
