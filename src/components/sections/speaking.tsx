"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

type Photo = {
  src: string;
  alt: string;
};

/* Only the photos themselves — no claims about the event, host or content
   that aren't verifiable. Update captions/description if real details are
   confirmed. */
const PHOTOS: Photo[] = [
  {
    src: "./images/speaking-1.jpg",
    alt: "Dr. Vivian R D'Almeida speaking at a health-awareness talk",
  },
  {
    src: "./images/speaking-2.jpg",
    alt: "Dr. Vivian R D'Almeida presenting at a health-awareness talk",
  },
  {
    src: "./images/speaking-3.jpg",
    alt: "Dr. Vivian R D'Almeida addressing the audience at a health event",
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
          eyebrow="Beyond the Clinic"
          title="On the stage."
          description="Dr. D'Almeida also takes part in public health-awareness talks — sharing orthopaedic and bone-health guidance beyond the consulting room."
        />

        {/* Photo gallery */}
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
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
