import Link from "next/link";
import { ShieldCheck, ArrowRight, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Aurora } from "@/components/ui/aurora";
import { Avatar } from "@/components/ui/avatar";
import { trustAvatars } from "@/lib/images";

/**
 * Home hero — matches the chosen "Variant 5" design (immersive dark-navy hero,
 * centered content, trust badge, two-tone headline, three CTAs, stats strip),
 * applied to the Slogani brand (navy field + orange primary CTA from the logo).
 * Stats use truthful figures from the site copy — replace with real performance
 * metrics when available.
 */

const primaryCta =
  "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-medium text-accent-foreground transition-colors hover:bg-[var(--color-accent-hover)] shadow-[0_12px_34px_-10px_rgba(234,88,12,0.65)]";
const outlineCta =
  "inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 text-base font-medium text-white transition-colors hover:bg-white/10";

const stats = [
  { value: "7", label: "Service Locations" },
  { value: "6", label: "Core Identity Services" },
  { value: "100%", label: "NIMC-Compliant" },
];

export function Hero() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-[var(--hero-bg)] pt-16 text-white">
      {/* Aurora blobs + faint grid (evokes the map/tech texture) */}
      <Aurora tone="dark" />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <Container>
        <div className="flex flex-col items-center py-28 text-center sm:py-36">
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-white/90">
            <ShieldCheck className="h-4 w-4 text-gold" />
            NIMC-Licensed &amp; Verified
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Trusted Identity Infrastructure
            <span className="mt-1 block text-[#6db1ee]">for Nigerians Everywhere</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Secure, fast, and compliant identity services — NIN registration,
            biometric capture, verification, and diaspora enrollment — for
            Nigerians at home and in the diaspora.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link href="/book" className={primaryCta}>
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className={outlineCta}>
              Explore Services
            </Link>
            <Link href="/agents" className={outlineCta}>
              <Users className="h-4 w-4" />
              Become an Agent
            </Link>
          </div>

          {/* Human trust row */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {trustAvatars.map((p) => (
                <Avatar key={p.name} name={p.name} src={p.img} size={40} />
              ))}
            </div>
            <p className="text-left text-sm text-white/70">
              Real people, verified identities — at home and across the diaspora.
            </p>
          </div>

          <dl className="glass-dark mt-12 grid w-full max-w-2xl grid-cols-3 gap-6 rounded-2xl px-6 py-7">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <dt className="text-3xl font-semibold text-white sm:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-center text-sm text-white/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
