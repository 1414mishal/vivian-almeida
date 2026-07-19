"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Bone,
  ScanLine,
  Sparkles,
  Timer,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Highlight = {
  icon: typeof ScanLine;
  label: string;
};

const HIGHLIGHTS: Highlight[] = [
  { icon: ScanLine, label: "Personalised 3D surgical planning" },
  { icon: Bone, label: "Enhanced implant precision" },
  { icon: Timer, label: "Less pain, faster recovery" },
  { icon: Sparkles, label: "Improved joint function & stability" },
];

const POSTERS = [
  {
    src: "./images/robotic-hip-first-poster.jpg",
    alt: "Poster — First full robotic hip replacement in South Kanara, led by Dr. Vivian Roshan D'Almeida at Father Muller Medical College Hospital",
  },
  {
    src: "./images/mako-robotic-poster.jpg",
    alt: "Poster — Experience precision with MAKO robotic knee and hip replacement by Dr. Vivian D'Almeida",
  },
];

const ARTICLE_URL =
  "https://newskarnataka.com/mangaluru/father-muller-performs-coastal-karnatakas-first-robotic-hip-replacement-surgery/17072026/";

export function RoboticMilestone() {
  return (
    <section
      id="robotic-milestone"
      className="section-pad relative overflow-hidden"
    >
      <div className="cyan-bloom -right-24 top-10 h-80 w-80" />
      <div className="cyan-bloom -left-20 bottom-10 h-72 w-72" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="A Regional First"
          title="Coastal Karnataka's first robotic hip replacement"
          description="At Father Muller Medical College Hospital, Mangaluru, Dr. Vivian Roshan D'Almeida led the region's first full robotic total hip replacement — bringing world-class, precision-guided joint care closer to home."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* Posters */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {POSTERS.map((poster, index) => (
              <motion.figure
                key={poster.src}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel glass-panel-hover group relative overflow-hidden p-0"
              >
                <div className="relative aspect-[1046/1500] w-full overflow-hidden">
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.figure>
            ))}
          </div>

          {/* Detail card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative flex flex-col p-7 md:p-8"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <Award className="h-3.5 w-3.5" strokeWidth={2} />
              Landmark in South Kanara healthcare
            </span>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-[1.7rem]">
              Precision. Technology. Expertise.
            </h3>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Robotic-assisted surgery combines the surgeon's expertise with
              SmartRobotics&trade; technology and real-time 3D guidance — for
              implant positioning tailored to each patient's anatomy, better
              stability and a smoother recovery. It means patients no longer
              need to travel to metro centres for this level of joint care.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="glass-panel flex items-center gap-3 p-3.5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 border-t border-border/60 pt-6">
              <a
                href={ARTICLE_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Read the news coverage
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                As reported by News Karnataka · 17 July 2026
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
