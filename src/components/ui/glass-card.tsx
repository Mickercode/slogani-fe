import { cn } from "@/lib/utils";

/** Frosted-glass surface. `hover` adds a lift + glow for interactive cards. */
export function GlassCard({
  className,
  hover = false,
  children,
}: {
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("glass-card", hover && "glass-card-hover", className)}>
      {children}
    </div>
  );
}

/** Gradient icon chip used inside glass cards. */
export function IconChip({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#1684c9] text-white shadow-[0_8px_20px_-8px_rgba(11,92,168,0.7)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
