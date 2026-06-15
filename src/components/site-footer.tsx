import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { mainNav, services, locations, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;
  const nigeriaLocations = locations.filter((l) => l.type === "nigeria");

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-white/70">
              {siteConfig.legalName} — a NIMC-licensed identity enrollment and
              verification company serving Nigerians worldwide.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-white/80 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              Offices
            </p>
            <ul className="space-y-3 text-sm">
              {nigeriaLocations.map((l) => (
                <li key={l.city} className="flex gap-2 text-white/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="block font-medium text-white">{l.region}</span>
                    {l.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <p>NIMC-licensed enrollment agent. NDPA-aligned data handling.</p>
        </div>
      </Container>
    </footer>
  );
}
