import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <p className="eyebrow text-primary">{eyebrow}</p>}
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-1 w-12 rounded-full bg-primary",
          centered && "mx-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
