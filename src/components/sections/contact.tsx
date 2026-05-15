"use client";

import { motion } from "framer-motion";
import { Building2, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { DOCTOR, MAPS_EMBED, MAPS_LINK } from "@/lib/clinic";
import { useClinicStatus } from "@/hooks/use-clinic-status";

export function Contact() {
  const status = useClinicStatus();

  const INFO = [
    {
      icon: MapPin,
      label: "Clinic address",
      lines: [DOCTOR.address.line1, DOCTOR.address.line2],
    },
    {
      icon: Building2,
      label: "Practice",
      lines: [DOCTOR.practice, `at ${DOCTOR.building}`],
    },
    {
      icon: Phone,
      label: "Phone",
      lines: [DOCTOR.phoneDisplay],
      href: DOCTOR.phoneHref,
    },
    {
      icon: Clock,
      label: "Visiting hours",
      lines: [`${status.label} · ${status.detail}`, "Open Monday to Saturday"],
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="cyan-bloom -right-28 top-10 h-80 w-80" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          eyebrow="Visit the Clinic"
          title="Find us in Hampankatta"
          description="Centrally located on KRR Road in the heart of Mangaluru — easy to reach, with the full address and live directions below."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel p-8 lg:col-span-5"
          >
            <ul className="space-y-6">
              {INFO.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow text-muted-foreground">
                      {item.label}
                    </p>
                    <div className="mt-1.5 space-y-0.5">
                      {item.lines.map((line, idx) =>
                        item.href && idx === 0 ? (
                          <a
                            key={line}
                            href={item.href}
                            className="block text-sm font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {line}
                          </a>
                        ) : (
                          <p
                            key={line}
                            className="text-sm font-medium text-foreground"
                          >
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 flex-1 gap-2 font-semibold shadow-glow-sm"
              >
                <a href={DOCTOR.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call Clinic
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 flex-1 gap-2 border-primary/40 font-semibold text-foreground hover:bg-primary/10 hover:text-foreground"
              >
                <a href={MAPS_LINK} target="_blank" rel="noreferrer">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel overflow-hidden p-2 lg:col-span-7"
          >
            <div className="relative h-[340px] overflow-hidden rounded-lg sm:h-[440px] lg:h-[520px]">
              <iframe
                title={`Map to ${DOCTOR.building}, Hampankatta`}
                src={MAPS_EMBED}
                className="absolute inset-0 h-full w-full dark:[filter:invert(0.92)_hue-rotate(180deg)_brightness(0.95)_contrast(0.95)]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
