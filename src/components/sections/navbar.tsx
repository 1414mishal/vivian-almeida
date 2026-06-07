"use client";

import { useEffect, useState } from "react";
import { Bone, Menu, Phone, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { DOCTOR } from "@/lib/clinic";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Specialties", href: "#specialties" },
  { label: "Conditions", href: "#conditions" },
  { label: "About", href: "#about" },
  { label: "Watch", href: "#watch" },
  { label: "Journey", href: "#journey" },
  { label: "Hours", href: "#hours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

function BrandMark() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 shadow-glow-sm">
      <Bone className="h-[18px] w-[18px] -rotate-45 text-primary" strokeWidth={2} />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass-nav" : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-5 md:px-12">
        {/* Brand */}
        <a href="#home" className="group flex min-w-0 items-center gap-2.5">
          <BrandMark />
          <span className="font-display text-base font-bold tracking-tight whitespace-nowrap sm:text-lg md:text-xl">
            {DOCTOR.name}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <span className="hidden sm:inline-flex">
            <AnimatedThemeToggler />
          </span>
          <a
            href={DOCTOR.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Message the doctor on WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary transition-colors hover:bg-primary/15 sm:inline-flex"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </a>
          <Button
            asChild
            className="hidden h-10 gap-2 px-5 font-semibold shadow-glow-sm md:inline-flex"
          >
            <a href={DOCTOR.phoneHref}>
              <Phone className="h-4 w-4" />
              Book Appointment
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-primary/10 hover:text-primary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 xl:hidden">
          <div className="mx-auto flex w-full max-w-container flex-col gap-1 px-5 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-3">
              <Button asChild className="h-11 flex-1 gap-2 font-semibold">
                <a href={DOCTOR.phoneHref} onClick={() => setOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Book Appointment
                </a>
              </Button>
              <a
                href={DOCTOR.whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Message the doctor on WhatsApp"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary transition-colors hover:bg-primary/15"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border sm:hidden">
                <AnimatedThemeToggler />
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
