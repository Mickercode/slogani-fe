import type { Metadata } from "next";
import Link from "next/link";
import { Globe2 } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { CheckList } from "@/components/ui/check-list";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { buttonVariants } from "@/components/ui/button";
import { locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diaspora Enrollment",
  description:
    "Official NIN registration services for Nigerians living abroad through approved international processes.",
};

const whoFor = [
  "Nigerians living abroad",
  "Students and professionals in diaspora",
  "Dual citizens requiring Nigerian identity registration",
  "Individuals needing official identity updates or enrollment",
];

const steps = [
  "Book your appointment",
  "Submit required documents",
  "Receive enrollment instructions",
  "Visit approved biometric center",
  "Complete biometric capture",
  "Receive confirmation and tracking details",
];

const requirements = [
  "Valid international passport or government ID",
  "Supporting identity documents",
  "Proof of Nigerian nationality",
  "Completed application form",
];

export default function DiasporaPage() {
  const intl = locations.filter((l) => l.type === "international");

  return (
    <>
      <PageHeader
        eyebrow="Diaspora Enrollment Services"
        title="Official NIN registration for Nigerians abroad"
        intro="Structured National Identification Number (NIN) enrollment for Nigerians living outside the country through approved international processes — without traveling back to Nigeria."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Who this is for" />
            <CheckList items={whoFor} className="mt-6" />
          </div>
          <div className="rounded-lg border border-border bg-muted p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Why diaspora enrollment matters
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The National Identification Number (NIN) is required for access to
              banking, telecommunications, and government services in Nigeria. Our
              diaspora services ensure you can complete enrollment without
              traveling back to Nigeria.
            </p>
          </div>
        </div>
      </Section>

      <Section band>
        <SectionHeading eyebrow="Process Overview" title="How diaspora enrollment works" />
        <ProcessTimeline className="mt-14" steps={steps} />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Requirements" />
            <CheckList items={requirements} className="mt-6" />
          </div>
          <div>
            <SectionHeading title="International coverage" intro="We support diaspora enrollment through partner locations in:" />
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {intl.map((l) => (
                <li
                  key={l.city}
                  className="flex items-center gap-2 glass-card p-3 text-sm font-medium text-foreground"
                >
                  <Globe2 className="h-4 w-4 text-accent" />
                  {l.city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-primary">
        <Container>
          <div className="flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-white">Secure &amp; compliant</h2>
              <p className="mt-2 text-white/80">
                All diaspora enrollment services follow NIMC-approved standards to
                ensure security, accuracy, and compliance.
              </p>
            </div>
            <Link href="/book" className={buttonVariants({ variant: "accent", size: "lg" })}>
              Start Diaspora Enrollment
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
