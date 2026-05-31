"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  detail: string;
};

const EVENT = {
  title: "Own Your Pause",
  subtitle: "Women's Health Day — KMC Hospital, Mangalore",
  blurb:
    "Dr. D'Almeida joined a multidisciplinary panel for a Women's Day session on menopause and bone health — explaining how oestrogen protects the skeleton and why osteoporosis risk rises after menopause.",
};

const PHOTOS: Photo[] = [
  {
    src: "./images/speaking-1.jpg",
    alt: "Dr. D'Almeida presenting 'Estrogen: Guardian of the Skeleton' on bone remodeling",
    caption: "Estrogen — Guardian of the Skeleton",
    detail: "Bone remodeling, resorption and the role of oestrogen",
  },
  {
    src: "./images/speaking-2.jpg",
    alt: "Dr. D'Almeida presenting 'Bone Health: Strength Within' on menopause and osteoporosis risk",
    caption: "Bone Health — Strength Within",
    detail: "Menopause and osteoporosis risk in women",
  },
  {
    src: "./images/speaking-3.jpg",
    alt: "Dr. D'Almeida speaking on the Own Your Pause Women's Day panel in Mangalore",
    caption: "Own Your Pause — Women's Day panel",
    detail: "Bringing menopause to the frontline · Mangalore",
  },
];

export function Speaking() {
  return (
    <section id="speaking" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom -left-20 top-12 h-72 w-72" />
      <div className="cyan-bloom -right-24 bottom-12 h-80 w-80" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Outside the Clinic"
          title="On the stage."
          description="Beyond the operating theatre, Dr. D'Almeida invests in patient education — speaking at community programmes on bone health, joint care and the orthopaedic side of women's health."
        />

        {/* Event header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5">
            <Mic className="h-3.5 w-3.5 text-primary" />
            <span className="eyebrow text-primary">{EVENT.subtitle}</span>
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            "{EVENT.title}"
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {EVENT.blurb}
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PHOTOS.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel glass-panel-hover group relative overflow-hidden p-0"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* gradient mask so the caption stays legible over any photo */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* mic chip */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                  <Mic className="h-3 w-3 text-primary" />
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white">
                    Speaking
                  </span>
                </div>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-sm font-semibold leading-snug text-white">
                  {photo.caption}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/75">
                  {photo.detail}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
