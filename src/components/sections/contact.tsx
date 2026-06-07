"use client";

import { motion } from "framer-motion";
import { CalendarClock, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  DOCTOR,
  LOCATIONS,
  MAPS_EMBED,
  MAPS_LINK,
  type Location,
} from "@/lib/clinic";
import { useClinicStatus } from "@/hooks/use-clinic-status";
import { cn } from "@/lib/utils";

const KIND_BADGE: Record<Location["kind"], string> = {
  primary: "Main clinic",
  weekly: "Weekly visit",
  monthly: "Monthly visit",
  appointment: "By appointment",
};

function LocationCard({
  location,
  featured,
}: {
  location: Location;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-panel glass-panel-hover flex flex-col p-7",
        featured && "border-primary/30"
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className={cn(
            "data-chip",
            featured && "bg-primary/15 text-primary"
          )}
        >
          {KIND_BADGE[location.kind]}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold tracking-tight">
        {location.name}
      </h3>

      <address className="not-italic mt-3 space-y-0.5 text-sm leading-relaxed text-muted-foreground">
        {location.building && <div>{location.building}</div>}
        {location.street && <div>{location.street}</div>}
        <div>{location.area}</div>
        <div>{location.city}</div>
      </address>

      <div className="mt-5 space-y-2.5 text-sm">
        {location.timing && (
          <div className="flex items-start gap-2.5">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-foreground">{location.timing}</span>
          </div>
        )}
        {location.phones?.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="flex items-start gap-2.5 text-foreground transition-colors hover:text-primary"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="font-medium">{phone.display}</span>
          </a>
        ))}
        {location.whatsapp && (
          <a
            href={location.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-2.5 text-foreground transition-colors hover:text-primary"
          >
            <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="font-medium">
              Message on WhatsApp · {location.whatsapp.display}
            </span>
          </a>
        )}
      </div>

      <a
        href={location.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        <Navigation className="h-4 w-4" />
        Get directions
      </a>
    </div>
  );
}

export function Contact() {
  const status = useClinicStatus();
  const primary = LOCATIONS.find((l) => l.kind === "primary")!;
  const others = LOCATIONS.filter((l) => l.kind !== "primary");

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="cyan-bloom -right-28 top-10 h-80 w-80" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          eyebrow="Visit the Clinic"
          title="Three locations across Mangaluru"
          description="The main clinic in Hampankatta runs Monday to Saturday — with additional weekly visits at two partner clinics. Pick whichever is easiest to reach."
        />

        {/* Primary clinic — info + map */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel border-primary/30 p-8 lg:col-span-5"
          >
            <span className="data-chip bg-primary/15 text-primary">
              {KIND_BADGE.primary}
            </span>

            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
              {primary.name}
            </h3>
            <address className="not-italic mt-3 space-y-0.5 text-sm leading-relaxed text-muted-foreground">
              <div className="text-foreground">{primary.building}</div>
              <div>{primary.street}</div>
              <div>{primary.area}</div>
              <div>{primary.city}</div>
            </address>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">
                  <span className="font-semibold">{status.label}</span>{" "}
                  <span className="text-muted-foreground">
                    · {status.detail}
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">Open Monday to Saturday</span>
              </div>
              {primary.phones?.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-start gap-2.5 text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="font-medium">{phone.display}</span>
                </a>
              ))}
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground">
                  {DOCTOR.address.full}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                <a href={DOCTOR.whatsappHref} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp the Doctor
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
                title={`Map to ${primary.building}, Mangaluru`}
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

        {/* Other locations */}
        <div className="mt-10">
          <p className="eyebrow text-primary">Other weekly visits</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 md:max-w-2xl">
            {others.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
