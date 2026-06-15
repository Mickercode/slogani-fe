import type { Metadata } from "next";
import { MapPin, Globe2 } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Slogani Consults operates across Nigeria and selected international locations to support identity enrollment services.",
};

export default function LocationsPage() {
  const nigeria = locations.filter((l) => l.type === "nigeria");
  const intl = locations.filter((l) => l.type === "international");

  return (
    <>
      <PageHeader
        eyebrow="Our Locations"
        title="Service centers across Nigeria and abroad"
        intro="Slogani Consults operates across Nigeria and selected international locations to support identity enrollment services."
      />

      <Section>
        <SectionHeading title="Nigeria" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nigeria.map((l) => (
            <div key={l.city} className="glass-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{l.city}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{l.region}</p>
              {l.address && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{l.address}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section band>
        <SectionHeading title="International" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {intl.map((l) => (
            <div key={l.city} className="flex items-center gap-3 glass-card p-5">
              <Globe2 className="h-5 w-5 text-accent" />
              <span className="font-medium text-foreground">{l.city}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground">Global access</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Our distributed service network ensures Nigerians can access identity
            services both locally and abroad through approved centers and partners.
          </p>
        </div>
      </Section>
    </>
  );
}
