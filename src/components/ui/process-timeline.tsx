import { cn } from "@/lib/utils";

/**
 * Signature connected process timeline — numbered nodes joined by a gradient
 * rail (horizontal on desktop, vertical on mobile). Replaces generic numbered grids.
 */
export function ProcessTimeline({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  return (
    <ol className={cn("relative grid gap-6 md:grid-cols-3 lg:grid-cols-6", className)}>
      {/* connecting rail */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-5 top-5 hidden h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-primary/60 to-accent/40 md:left-0 md:top-5 md:block md:h-px md:w-full md:bg-gradient-to-r"
      />
      {steps.map((step, i) => (
        <li key={step} className="relative">
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#1684c9] text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(11,92,168,0.8)] ring-4 ring-[var(--color-background)]">
            {i + 1}
          </span>
          <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">{step}</p>
        </li>
      ))}
    </ol>
  );
}
