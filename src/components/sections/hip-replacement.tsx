"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

/* ── The four engineered components of a Total Hip Arthroplasty (THA) ─── */

const COMPONENTS = [
  {
    n: "01",
    name: "Acetabular shell",
    material: "Titanium (Ti-6Al-4V)",
    detail:
      "Porous-coated hemispherical cup, press-fit into the prepared acetabulum so bone grows into the surface.",
  },
  {
    n: "02",
    name: "Acetabular liner",
    material: "Cross-linked polyethylene · ceramic",
    detail:
      "Snap-fits inside the shell and articulates with the femoral head — the low-friction bearing surface.",
  },
  {
    n: "03",
    name: "Femoral head",
    material: "Ceramic (alumina / zirconia) · CoCr",
    detail:
      "Tapered ball that replaces the patient's natural head. Standard diameters 28–40 mm.",
  },
  {
    n: "04",
    name: "Femoral stem",
    material: "Titanium · cementless or cemented",
    detail:
      "Tapered stem inserted down the femoral canal — anchors the implant to the femur.",
  },
];

/* ── Anatomically-positioned diagram in SVG.
      AP view, right hip. Bone outlines neutral; implants in surgical cyan. ─ */

function HipImplantDiagram() {
  return (
    <svg
      viewBox="0 0 480 620"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of a total hip replacement — labeled components"
    >
      <defs>
        <linearGradient id="bone-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--foreground) / 0.08)" />
          <stop offset="100%" stopColor="hsl(var(--foreground) / 0.16)" />
        </linearGradient>
        <linearGradient id="implant-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.95)" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.65)" />
        </linearGradient>
        <pattern
          id="medical-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="hsl(var(--primary) / 0.06)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      {/* faint medical grid */}
      <rect width="100%" height="100%" fill="url(#medical-grid)" />

      {/* corner viewfinder brackets */}
      <g
        stroke="hsl(var(--primary) / 0.5)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M 8 22 L 8 8 L 22 8" />
        <path d="M 458 8 L 472 8 L 472 22" />
        <path d="M 8 598 L 8 612 L 22 612" />
        <path d="M 458 612 L 472 612 L 472 598" />
      </g>

      {/* AP-view chart label */}
      <g
        fontFamily="Geist, Inter, sans-serif"
        fontWeight="700"
        letterSpacing="2"
      >
        <text
          x="240"
          y="28"
          fontSize="9"
          fill="hsl(var(--primary))"
          textAnchor="middle"
        >
          AP VIEW · RIGHT HIP
        </text>
      </g>

      {/* ─── BONES ─── */}

      {/* Pelvic bone — right iliac, simplified outline */}
      <path
        d="
          M 70 95
          C 70 45, 170 30, 260 45
          C 350 35, 430 60, 432 110
          C 434 155, 418 195, 380 215
          L 322 222
          C 308 224, 296 230, 286 240
          C 274 252, 258 260, 240 260
          L 212 260
          C 192 260, 174 252, 162 238
          C 142 215, 118 198, 100 192
          C 80 184, 70 145, 70 110
          Z
        "
        fill="url(#bone-fill)"
        stroke="hsl(var(--foreground) / 0.4)"
        strokeWidth="1.4"
      />

      {/* Femur — head + neck + trochanter + shaft */}
      <path
        d="
          M 178 290
          Q 174 296 176 308
          L 176 560
          Q 176 584 200 584
          L 264 584
          Q 286 584 286 560
          L 286 308
          Q 290 296 296 282
          Q 308 268 302 252
          Q 298 238 286 234
          L 326 234
          Q 344 238 344 258
          Q 344 282 326 296
          L 286 296
          L 264 290
          L 200 290
          Z
        "
        fill="url(#bone-fill)"
        stroke="hsl(var(--foreground) / 0.4)"
        strokeWidth="1.4"
      />

      {/* ─── IMPLANT COMPONENTS ─── */}

      {/* 1 · Acetabular shell — hemispherical cup */}
      <path
        d="
          M 158 170
          A 64 58 0 0 1 290 170
          L 286 196
          Q 274 204 258 204
          L 192 204
          Q 174 204 162 196
          Z
        "
        fill="hsl(var(--primary) / 0.35)"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />

      {/* 2 · Acetabular liner — sits inside the shell */}
      <path
        d="
          M 174 170
          A 48 42 0 0 1 274 170
          L 270 188
          L 178 188
          Z
        "
        fill="hsl(var(--primary) / 0.16)"
        stroke="hsl(var(--primary) / 0.85)"
        strokeWidth="1"
      />

      {/* 3 · Femoral head — ceramic/metal ball */}
      <circle
        cx="224"
        cy="178"
        r="36"
        fill="url(#implant-fill)"
        stroke="hsl(var(--primary))"
        strokeWidth="1.8"
      />
      {/* head highlight for ceramic gloss */}
      <ellipse
        cx="212"
        cy="166"
        rx="10"
        ry="6"
        fill="hsl(var(--primary) / 0.35)"
      />

      {/* 4 · Femoral stem — tapered, into the femur canal */}
      <path
        d="
          M 214 210
          L 246 210
          L 252 240
          L 256 270
          L 256 296
          L 252 322
          L 248 560
          Q 246 572 234 572
          Q 222 572 220 560
          L 216 322
          L 212 296
          L 212 270
          L 216 240
          Z
        "
        fill="url(#implant-fill)"
        stroke="hsl(var(--primary))"
        strokeWidth="1.4"
      />
      {/* stem highlight */}
      <path
        d="M 220 240 L 222 296 L 224 540"
        stroke="hsl(var(--primary) / 0.4)"
        strokeWidth="1"
        fill="none"
      />

      {/* ─── LABEL CALLOUTS ─── */}
      <g
        fontFamily="Geist, Inter, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="hsl(var(--foreground))"
      >
        {/* 01 Acetabular shell */}
        <g stroke="hsl(var(--primary) / 0.7)" fill="none" strokeWidth="1">
          <line x1="284" y1="155" x2="370" y2="120" />
          <circle cx="284" cy="155" r="2.5" fill="hsl(var(--primary))" />
        </g>
        <g>
          <text
            x="376"
            y="116"
            fontSize="9"
            fill="hsl(var(--primary))"
            letterSpacing="1.5"
            fontWeight="700"
          >
            01
          </text>
          <text x="376" y="130">Acetabular shell</text>
          <text
            x="376"
            y="144"
            fontSize="9"
            fill="hsl(var(--muted-foreground))"
          >
            Titanium · press-fit
          </text>
        </g>

        {/* 02 Acetabular liner */}
        <g stroke="hsl(var(--primary) / 0.7)" fill="none" strokeWidth="1">
          <line x1="226" y1="182" x2="110" y2="120" />
          <circle cx="226" cy="182" r="2.5" fill="hsl(var(--primary))" />
        </g>
        <g textAnchor="end">
          <text
            x="106"
            y="116"
            fontSize="9"
            fill="hsl(var(--primary))"
            letterSpacing="1.5"
            fontWeight="700"
          >
            02
          </text>
          <text x="106" y="130">Acetabular liner</text>
          <text
            x="106"
            y="144"
            fontSize="9"
            fill="hsl(var(--muted-foreground))"
          >
            Polyethylene · ceramic
          </text>
        </g>

        {/* 03 Femoral head */}
        <g stroke="hsl(var(--primary) / 0.7)" fill="none" strokeWidth="1">
          <line x1="262" y1="180" x2="395" y2="220" />
          <circle cx="262" cy="180" r="2.5" fill="hsl(var(--primary))" />
        </g>
        <g>
          <text
            x="400"
            y="216"
            fontSize="9"
            fill="hsl(var(--primary))"
            letterSpacing="1.5"
            fontWeight="700"
          >
            03
          </text>
          <text x="400" y="230">Femoral head</text>
          <text
            x="400"
            y="244"
            fontSize="9"
            fill="hsl(var(--muted-foreground))"
          >
            Ceramic · CoCr
          </text>
        </g>

        {/* 04 Femoral stem */}
        <g stroke="hsl(var(--primary) / 0.7)" fill="none" strokeWidth="1">
          <line x1="252" y1="420" x2="395" y2="420" />
          <circle cx="252" cy="420" r="2.5" fill="hsl(var(--primary))" />
        </g>
        <g>
          <text
            x="400"
            y="416"
            fontSize="9"
            fill="hsl(var(--primary))"
            letterSpacing="1.5"
            fontWeight="700"
          >
            04
          </text>
          <text x="400" y="430">Femoral stem</text>
          <text
            x="400"
            y="444"
            fontSize="9"
            fill="hsl(var(--muted-foreground))"
          >
            Titanium · tapered
          </text>
        </g>

        {/* Anatomy labels */}
        <g
          fontSize="9"
          fontWeight="700"
          letterSpacing="2"
          fill="hsl(var(--muted-foreground))"
        >
          <text x="280" y="80">PELVIS</text>
          <text x="170" y="500">FEMUR</text>
        </g>
      </g>
    </svg>
  );
}

export function HipReplacement() {
  return (
    <section
      id="hip-replacement"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="cyan-bloom -left-24 top-12 h-72 w-72" />
      <div className="cyan-bloom -right-24 bottom-12 h-72 w-72" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Procedure Focus"
          title="Total hip replacement, inside out."
          description="Replacing a worn hip joint involves four engineered components fitted with millimetre precision. Here's what goes where."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="glass-panel overflow-hidden">
            <div className="grid md:grid-cols-12">
              {/* Component breakdown */}
              <div className="md:col-span-5 md:border-r md:border-border/60">
                <div className="p-8 md:p-10">
                  <p className="data-chip w-fit">Total Hip Arthroplasty</p>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    Four components.{" "}
                    <span className="text-gradient">One restored joint.</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    A modern hip replacement is engineered, not improvised —
                    each component selected and sized to the individual hip
                    before the first incision.
                  </p>

                  <ol className="mt-7 space-y-5">
                    {COMPONENTS.map((c) => (
                      <li key={c.n} className="flex gap-4">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 font-display text-xs font-bold tracking-tight text-primary">
                          {c.n}
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-sm font-semibold text-foreground">
                            {c.name}
                          </p>
                          <p className="mt-0.5 font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary/80">
                            {c.material}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {c.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Diagram */}
              <div className="relative md:col-span-7 border-t border-border/60 bg-card/30 md:border-l-0 md:border-t-0">
                <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full md:min-h-[640px]">
                  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                    <HipImplantDiagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
