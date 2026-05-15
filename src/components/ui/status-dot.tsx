import { cn } from "@/lib/utils";
import type { ClinicState } from "@/lib/clinic";

const DOT_COLOR: Record<ClinicState, string> = {
  open: "bg-emerald-400",
  "closing-soon": "bg-amber-400",
  "opens-later": "bg-sky-400",
  closed: "bg-rose-400",
};

type StatusDotProps = {
  state: ClinicState;
  size?: "sm" | "md";
  className?: string;
};

export function StatusDot({ state, size = "sm", className }: StatusDotProps) {
  const dim = size === "md" ? "h-3 w-3" : "h-2.5 w-2.5";
  return (
    <span className={cn("relative flex", dim, className)}>
      <span
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
          DOT_COLOR[state]
        )}
      />
      <span
        className={cn(
          "relative inline-flex rounded-full",
          dim,
          DOT_COLOR[state]
        )}
      />
    </span>
  );
}
