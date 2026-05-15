import { Bone, MapPin, Phone } from "lucide-react";
import { CREDENTIALS_SHORT, DOCTOR, MAPS_LINK, SPECIALTIES } from "@/lib/clinic";

const QUICK_LINKS = [
  { label: "Specialties", href: "#specialties" },
  { label: "Conditions", href: "#conditions" },
  { label: "About", href: "#about" },
  { label: "Patient Journey", href: "#journey" },
  { label: "Visiting Hours", href: "#hours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Press & Research", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface-lowest">
      <div className="mx-auto w-full max-w-container px-5 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10">
                <Bone
                  className="h-[18px] w-[18px] -rotate-45 text-primary"
                  strokeWidth={2}
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {DOCTOR.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {DOCTOR.title} at {DOCTOR.practice}, {DOCTOR.building} — joint
              replacement, arthroscopic keyhole surgery, sports medicine and
              trauma care in the heart of Mangaluru.
            </p>
            <p className="mt-3 text-xs font-medium text-muted-foreground/80">
              {CREDENTIALS_SHORT}
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href={DOCTOR.phoneHref}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {DOCTOR.phoneDisplay}
              </a>
              <a
                href={DOCTOR.secondaryPhoneHref}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                {DOCTOR.secondaryPhoneDisplay}
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {DOCTOR.address.full}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="eyebrow text-foreground">Explore</p>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Specialties */}
          <div className="md:col-span-4">
            <p className="eyebrow text-foreground">Specialties</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {SPECIALTIES.map((specialty) => (
                <li key={specialty.key}>
                  <a
                    href="#specialties"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {specialty.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {DOCTOR.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            For general information only — not a substitute for professional
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
