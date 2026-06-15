import { cn } from "@/lib/utils";

/**
 * Decorative aurora background — soft blue + orange gradient blobs (the brand's
 * Aurora complementary pair). Sits behind glass surfaces. `tone="dark"` for the
 * navy hero. Animation is motion-safe only.
 */
export function Aurora({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const blue =
    tone === "dark" ? "rgba(11,92,168,0.55)" : "rgba(11,92,168,0.16)";
  const orange =
    tone === "dark" ? "rgba(234,88,12,0.28)" : "rgba(234,88,12,0.12)";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full blur-3xl motion-safe:animate-aurora"
        style={{ background: `radial-gradient(circle, ${blue}, transparent 70%)` }}
      />
      <div
        className="absolute -right-20 top-0 h-[22rem] w-[22rem] rounded-full blur-3xl motion-safe:animate-aurora [animation-delay:-5s]"
        style={{ background: `radial-gradient(circle, ${orange}, transparent 70%)` }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full blur-3xl motion-safe:animate-aurora [animation-delay:-9s]"
        style={{ background: `radial-gradient(circle, ${blue}, transparent 70%)` }}
      />
    </div>
  );
}
