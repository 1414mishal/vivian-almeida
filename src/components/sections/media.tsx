"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  HeartHandshake,
  Newspaper,
  Play,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  MEDIA,
  MEDIA_CATEGORY_LABEL,
  type MediaCategory,
} from "@/lib/clinic";

const CATEGORY_ICON: Record<MediaCategory, LucideIcon> = {
  research: FlaskConical,
  article: BookOpen,
  video: Play,
  community: HeartHandshake,
  press: Newspaper,
};

export function Media() {
  return (
    <section id="media" className="section-pad relative overflow-hidden">
      <div className="cyan-bloom left-1/2 top-0 h-72 w-72 -translate-x-1/2" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Press, Research & Education"
          title="Articles, papers and appearances"
          description="A small reading list — published health-education articles, peer-reviewed research, community work and press recognition."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MEDIA.map((item, index) => {
            const Icon = CATEGORY_ICON[item.category];
            return (
              <motion.a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 6) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel glass-panel-hover group relative flex flex-col overflow-hidden p-6"
              >
                {/* hover accent line */}
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">
                    <Icon className="h-3 w-3" strokeWidth={2} />
                    {MEDIA_CATEGORY_LABEL[item.category]}
                  </span>
                  {item.date && (
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {item.date}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="mt-2 line-clamp-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                  <span className="font-medium text-muted-foreground">
                    {item.source}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
