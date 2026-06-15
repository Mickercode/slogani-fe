import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Brand lockup: logo mark + wordmark. Drop the official logo at `public/logo.png`.
 * If the file is missing the wordmark still anchors the brand.
 */
export function SiteLogo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={40}
        height={40}
        priority
        className="h-9 w-auto"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-base font-semibold tracking-tight",
            invert ? "text-white" : "text-primary",
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "text-[11px] font-medium uppercase tracking-wide",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
