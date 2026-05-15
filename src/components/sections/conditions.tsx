"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CONDITIONS, DOCTOR } from "@/lib/clinic";

export function Conditions() {
  return (
    <section id="conditions" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom left-1/2 top-1/4 h-72 w-72 -translate-x-1/2" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Conditions Treated"
          title="The problems we help solve"
          description="From sudden sports injuries to long-standing joint pain — if it affects how you move, it is worth getting checked."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {CONDITIONS.map((condition) => (
            <span
              key={condition}
              className="glass-panel glass-panel-hover inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {condition}
            </span>
          ))}
        </motion.div>

        <div className="mt-11 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-sm text-muted-foreground">
            Not sure what is causing your pain? A consultation is the quickest
            way to find out.
          </p>
          <Button
            asChild
            size="lg"
            className="h-12 gap-2 px-7 font-semibold shadow-glow-sm"
          >
            <a href={DOCTOR.phoneHref}>
              <Phone className="h-4 w-4" />
              Book a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
