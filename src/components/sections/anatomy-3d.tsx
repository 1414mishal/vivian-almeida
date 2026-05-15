"use client";

import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SkullScene } from "@/components/ui/skull-scene";
import { SectionHeading } from "@/components/ui/section-heading";

export function Anatomy3D() {
  return (
    <section
      id="anatomy"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Interactive 3D"
          title="Anatomy you can rotate."
          description="Drag to explore — a small interactive tribute to the elegant biomechanics behind every procedure."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <Card className="relative h-auto w-full overflow-hidden border-primary/15 bg-card md:h-[520px]">
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="#41e4c0"
            />

            <div className="flex h-full flex-col md:flex-row">
              {/* Left content */}
              <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                  <MousePointerClick className="h-3.5 w-3.5 text-primary" />
                  <span className="eyebrow text-foreground/90">
                    Drag to rotate
                  </span>
                </span>
                <h3 className="mt-4 max-w-md font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  <span className="bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
                    Movement,
                  </span>
                  <br />
                  <span className="text-gradient">visualised.</span>
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                  Every consultation begins with anatomy. Take a moment to
                  explore the model — the same kind of detail used to explain
                  your diagnosis at the clinic.
                </p>
              </div>

              {/* Right content — 3D skull */}
              <div className="relative h-[420px] flex-1 md:h-full">
                <SkullScene className="h-full w-full" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
