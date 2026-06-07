"use client";

import { motion } from "framer-motion";
import { Bandage, Bone, Quote, Stethoscope } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    icon: Stethoscope,
    quote:
      "Dr. D'Almeida never rushed the consultation. My knee problem was explained in plain language, and I understood every option before deciding anything.",
    role: "Knee consultation · Mangaluru",
  },
  {
    icon: Bone,
    quote:
      "The procedure was explained step by step, and recovery went exactly the way I was told it would. Calm, precise and genuinely reassuring.",
    role: "Joint replacement · Mangaluru",
  },
  {
    icon: Bandage,
    quote:
      "After my fracture I expected months of uncertainty. Instead the plan was clear from day one, and every follow-up was thorough.",
    role: "Fracture & trauma care · Mangaluru",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom left-1/2 top-0 h-72 w-72 -translate-x-1/2" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Patient Voices"
          title="In patients' words"
          description="Patients consistently mention the same things — time taken to explain, a calm manner, and care that is honest about what surgery can and cannot do."
        />

        {/* Testimonials */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.figure
              key={testimonial.role}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel glass-panel-hover flex flex-col p-7"
            >
              <Quote
                className="h-7 w-7 fill-primary/20 text-primary/30"
                strokeWidth={1}
              />
              <blockquote className="mt-5 flex-grow text-sm leading-relaxed text-foreground/90">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                  <testimonial.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    Verified patient
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-muted-foreground">
            Patient feedback shared with consent · names withheld for privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
