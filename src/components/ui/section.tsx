import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Aurora } from "./aurora";

/**
 * A vertical page section with consistent rhythm.
 * `band` adds a subtle gradient surface; `aurora` adds decorative brand blobs.
 */
export function Section({
  className,
  band = false,
  aurora = false,
  children,
}: {
  className?: string;
  band?: boolean;
  aurora?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative isolate py-16 sm:py-20 lg:py-24",
        band &&
          "border-y border-border bg-gradient-to-b from-muted/70 to-transparent",
        className,
      )}
    >
      {aurora && <Aurora />}
      <Container>
        <div className="reveal">{children}</div>
      </Container>
    </section>
  );
}

/** Eyebrow + heading + optional intro, centered or left-aligned. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </div>
  );
}
