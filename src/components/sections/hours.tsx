"use client";

import { motion } from "framer-motion";
import { CalendarDays, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";
import { Button } from "@/components/ui/button";
import { DOCTOR, SCHEDULE, hoursLabel } from "@/lib/clinic";
import { useClinicStatus } from "@/hooks/use-clinic-status";
import { cn } from "@/lib/utils";

/** Display the week starting Monday. */
const DISPLAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

export function Hours() {
  const status = useClinicStatus();
  const today = SCHEDULE[status.todayIndex];

  return (
    <section
      id="hours"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="cyan-bloom -left-28 top-1/3 h-80 w-80" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          eyebrow="Visiting Hours"
          title="When to see Dr. D'Almeida"
          description="Consultation hours rotate through the week — mornings, afternoons and evenings — so there is a slot that works around your day."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          {/* Live status panel */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative overflow-hidden p-8 lg:col-span-5"
          >
            <div className="cyan-bloom -right-12 -top-12 h-40 w-40" />

            <div className="relative">
              <p className="eyebrow text-primary">Right now</p>
              <div className="mt-4 flex items-center gap-3">
                <StatusDot state={status.state} size="md" />
                <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {status.label}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {status.detail}
              </p>

              <div className="mt-7 rounded-xl border border-border bg-surface-high/50 p-5">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <p className="eyebrow text-muted-foreground">
                    Today · {today.day}
                  </p>
                </div>
                <p className="mt-2 font-display text-lg font-semibold">
                  {status.todayHoursLabel}
                </p>
              </div>

              <Button
                asChild
                className="mt-6 h-12 w-full gap-2 font-semibold shadow-glow-sm"
              >
                <a href={DOCTOR.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call {DOCTOR.phoneDisplay}
                </a>
              </Button>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Hours are shown in India Standard Time (IST) and update live.
                Walk-in slots are limited — calling ahead to confirm is
                recommended.
              </p>
            </div>
          </motion.div>

          {/* Weekly schedule */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel p-3 sm:p-4 lg:col-span-7"
          >
            <ul>
              {DISPLAY_ORDER.map((dayIndex) => {
                const entry = SCHEDULE[dayIndex];
                const isToday = dayIndex === status.todayIndex;
                const closed = !entry.hours;

                return (
                  <li key={entry.day}>
                    <div
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-4 transition-colors sm:px-5",
                        isToday
                          ? "bg-primary/10 ring-1 ring-inset ring-primary/30"
                          : "hover:bg-surface-high/60"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-display text-sm font-semibold",
                            closed ? "text-muted-foreground" : "text-foreground"
                          )}
                        >
                          {entry.day}
                        </span>
                        {isToday && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-primary">
                            <StatusDot state={status.state} />
                            Today
                          </span>
                        )}
                      </div>
                      <span
                        className={cn(
                          "text-sm tabular-nums",
                          closed
                            ? "text-muted-foreground/55"
                            : "font-medium text-foreground"
                        )}
                      >
                        {hoursLabel(entry.hours)}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
