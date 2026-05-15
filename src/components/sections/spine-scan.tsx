"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

/* Stylised vertebra widths, top → bottom (cervical → lumbar).
   Twelve vertebrae, each pitch = 32px in the SVG. */
const VERTEBRAE = [
  { w: 22, region: "C" },
  { w: 24, region: "C" },
  { w: 26, region: "C" },
  { w: 30, region: "T" },
  { w: 32, region: "T" },
  { w: 34, region: "T" },
  { w: 36, region: "T" },
  { w: 38, region: "T" },
  { w: 40, region: "T" },
  { w: 42, region: "L" },
  { w: 44, region: "L" },
  { w: 46, region: "L" },
];

const TOP = 28;
const PITCH = 32;
const VERT_H = 22;
const CENTER_X = 100;

function SpineSvg() {
  return (
    <svg
      viewBox="0 0 200 440"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Animated spine scan illustration"
    >
      <defs>
        {/* Faint grid pattern — medical-imaging feel */}
        <pattern
          id="spine-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="hsl(var(--primary) / 0.08)"
            strokeWidth="0.5"
          />
        </pattern>

        {/* Horizontal beam — fades at the sides */}
        <linearGradient id="spine-beam" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>

        {/* Tall vertical halo — soft glow above & below the beam */}
        <linearGradient id="spine-halo" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid background */}
      <rect width="100%" height="100%" fill="url(#spine-grid)" />

      {/* Corner viewfinder brackets */}
      <g
        stroke="hsl(var(--primary) / 0.55)"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M 6 18 L 6 6 L 18 6" />
        <path d="M 182 6 L 194 6 L 194 18" />
        <path d="M 6 422 L 6 434 L 18 434" />
        <path d="M 182 434 L 194 434 L 194 422" />
      </g>

      {/* Central dashed axis (the line of the spine) */}
      <line
        x1={CENTER_X}
        y1={TOP - 4}
        x2={CENTER_X}
        y2={TOP + PITCH * VERTEBRAE.length - 6}
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="0.6"
        strokeDasharray="2 3"
      />

      {/* Measurement tick marks (left rail) */}
      <g stroke="hsl(var(--primary) / 0.45)" strokeWidth="0.8">
        {VERTEBRAE.map((_, i) => (
          <line
            key={i}
            x1="20"
            x2="28"
            y1={TOP + VERT_H / 2 + i * PITCH}
            y2={TOP + VERT_H / 2 + i * PITCH}
          />
        ))}
      </g>

      {/* Region labels (right rail) */}
      <g
        fontFamily="Geist, Inter, sans-serif"
        fontSize="7"
        fontWeight="700"
        fill="hsl(var(--primary))"
        letterSpacing="1.5"
      >
        <text x="160" y={TOP + 14}>CERVICAL</text>
        <text x="160" y={TOP + 5 * PITCH + 14}>THORACIC</text>
        <text x="160" y={TOP + 10 * PITCH + 14}>LUMBAR</text>
      </g>

      {/* Vertebrae & discs */}
      <g>
        {VERTEBRAE.map((v, i) => {
          const y = TOP + i * PITCH;
          const isLast = i === VERTEBRAE.length - 1;
          return (
            <g key={i}>
              {/* Vertebral body */}
              <rect
                x={CENTER_X - v.w / 2}
                y={y}
                width={v.w}
                height={VERT_H}
                rx="5"
                fill="hsl(var(--foreground) / 0.14)"
                stroke="hsl(var(--primary) / 0.55)"
                strokeWidth="0.7"
              />
              {/* Spinous process notch (centre detail) */}
              <rect
                x={CENTER_X - 2}
                y={y + 4}
                width="4"
                height={VERT_H - 8}
                rx="1"
                fill="hsl(var(--primary) / 0.5)"
              />
              {/* Disc cushion to the next vertebra */}
              {!isLast && (
                <rect
                  x={CENTER_X - (v.w - 12) / 2}
                  y={y + VERT_H + 1}
                  width={v.w - 12}
                  height="7"
                  rx="2.5"
                  fill="hsl(var(--primary) / 0.4)"
                />
              )}
            </g>
          );
        })}
      </g>

      {/* Soft scan halo — tall, gentle glow */}
      <g
        className="animate-spine-scan-halo"
        style={{ transformBox: "view-box" }}
      >
        <rect x="0" y="-40" width="200" height="80" fill="url(#spine-halo)" />
      </g>

      {/* Sharp scan beam — the cyan line itself */}
      <g
        className="animate-spine-scan-beam"
        style={{ transformBox: "view-box" }}
      >
        <rect x="6" y="-1" width="188" height="2" fill="url(#spine-beam)" />
        <rect
          x="6"
          y="0.4"
          width="188"
          height="0.5"
          fill="hsl(var(--primary))"
        />
      </g>
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/60 p-3 text-center">
      <div className="font-display text-2xl font-bold text-primary">
        {value}
      </div>
      <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function SpineScan() {
  return (
    <section
      id="spine"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="cyan-bloom -left-24 top-12 h-72 w-72" />
      <div className="cyan-bloom -right-24 bottom-12 h-72 w-72" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Spine Care"
          title="Inside the spine."
          description="Modern imaging informs every diagnosis — clear pictures of the bones and discs that move you."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="glass-panel overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Copy + stats */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="data-chip w-fit">Spine &amp; Backache</span>
                <h3 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl">
                  <span className="text-gradient">Scan</span> · plan · restore.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Back pain rarely has one cause. A focused look at the
                  vertebrae, discs and surrounding tissue is what turns
                  "something hurts" into a precise plan you actually understand.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  <Stat value="7" label="Cervical" />
                  <Stat value="12" label="Thoracic" />
                  <Stat value="5" label="Lumbar" />
                </div>
              </div>

              {/* Scan viewport */}
              <div className="relative aspect-[5/8] overflow-hidden border-t border-border/60 bg-surface-low/60 md:aspect-auto md:min-h-[520px] md:border-l md:border-t-0">
                {/* SCANNING badge */}
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Scanning
                  </span>
                </div>

                {/* Readout chips */}
                <div className="absolute right-4 top-4 z-10 font-display text-[0.62rem] font-semibold tabular-nums text-primary/80">
                  24 VERT
                </div>
                <div className="absolute bottom-4 left-4 z-10 font-display text-[0.62rem] font-semibold tabular-nums text-primary/80">
                  T1 · 17.2°
                </div>
                <div className="absolute bottom-4 right-4 z-10 font-display text-[0.62rem] font-semibold tabular-nums text-primary/80">
                  LIVE
                </div>

                <SpineSvg />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
