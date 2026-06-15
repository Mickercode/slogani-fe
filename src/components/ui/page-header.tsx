import { Container } from "./container";
import { Aurora } from "./aurora";

/** Top-of-page title band for inner pages — aurora glass treatment. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-muted/80 to-transparent">
      <Aurora />
      <Container>
        <div className="reveal max-w-3xl py-16 sm:py-24">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          )}
        </div>
      </Container>
    </div>
  );
}
