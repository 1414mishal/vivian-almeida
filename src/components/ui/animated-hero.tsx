"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CREDENTIALS_SHORT, DOCTOR, SPECIALTIES } from "@/lib/clinic";
import { useClinicStatus } from "@/hooks/use-clinic-status";
import { cn } from "@/lib/utils";

const STATUS_DOT: Record<string, string> = {
  open: "bg-emerald-400",
  "closing-soon": "bg-amber-400",
  "opens-later": "bg-sky-400",
  closed: "bg-rose-400",
};

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => SPECIALTIES.map((s) => s.title), []);
  const status = useClinicStatus();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(titleNumber === titles.length - 1 ? 0 : titleNumber + 1);
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <AuroraBackground
      id="home"
      className="h-auto min-h-svh justify-start bg-background dark:bg-background"
    >
      {/* fade the aurora into the section below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-5 pb-28 pt-32 text-center md:px-12 md:pt-36"
      >
        {/* clinic eyebrow */}
        <p className="eyebrow text-primary">
          {DOCTOR.practice} · {DOCTOR.city}
        </p>

        {/* headline */}
        <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.06] tracking-tight text-balance sm:text-6xl md:text-7xl">
          Surgical Precision.
          <br />
          <span className="text-gradient">Human Connection.</span>
        </h1>

        {/* rotating specialty line */}
        <div className="mt-7 flex flex-col items-center justify-center gap-1 font-display text-xl font-medium sm:flex-row sm:gap-2.5 md:text-3xl">
          <span className="text-muted-foreground">Expertise in</span>
          <span className="relative inline-flex h-[1.5em] w-[270px] justify-center overflow-hidden md:w-[360px]">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-semibold text-primary"
                initial={{ opacity: 0, y: "-120%" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </div>

        {/* subtitle */}
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Joint replacement and keyhole arthroscopic surgery, led by{" "}
          {DOCTOR.name} — international training paired with a calm,
          patient-first approach to restoring how you move.
        </p>

        {/* credentials */}
        <p className="mt-5 max-w-xl text-sm font-medium text-muted-foreground/90">
          {CREDENTIALS_SHORT}
        </p>

        {/* primary actions */}
        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 gap-2 px-7 text-[0.95rem] font-semibold shadow-glow"
          >
            <a href={DOCTOR.phoneHref}>
              <Phone className="h-4 w-4" />
              Book Appointment
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 gap-2 border-primary/40 px-7 text-[0.95rem] font-semibold text-foreground hover:bg-primary/10 hover:text-foreground"
          >
            <a href="#specialties">
              <Stethoscope className="h-4 w-4" />
              View Specialties
            </a>
          </Button>
        </div>

        {/* live status strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 glass-panel rounded-full px-6 py-3 text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                  STATUS_DOT[status.state]
                )}
              />
              <span
                className={cn(
                  "relative inline-flex h-2.5 w-2.5 rounded-full",
                  STATUS_DOT[status.state]
                )}
              />
            </span>
            <span className="font-semibold text-foreground">{status.label}</span>
            <span className="hidden text-muted-foreground sm:inline">
              · {status.detail}
            </span>
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Hampankatta, Mangaluru
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <a
            href={DOCTOR.phoneHref}
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" />
            {DOCTOR.phoneDisplay}
          </a>
        </div>

        {/* scroll cue */}
        <a
          href="#specialties"
          className="mt-12 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-label text-muted-foreground transition-colors hover:text-primary"
        >
          Explore the practice
          <ArrowRight className="h-3.5 w-3.5 rotate-90" />
        </a>
      </motion.div>
    </AuroraBackground>
  );
}

export { Hero };
