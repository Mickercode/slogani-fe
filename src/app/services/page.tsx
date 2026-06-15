import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { CheckList } from "@/components/ui/check-list";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Official identity enrollment and verification services under authorization from the National Identity Management Commission (NIMC).",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Official identity enrollment & verification"
        intro="Slogani Consults provides identity services under authorization from the National Identity Management Commission (NIMC)."
      />

      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 glass-card p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-[1fr_1fr] sm:gap-10">
                <div>
                  <p className="text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-foreground">{s.name}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Includes
                  </p>
                  <CheckList items={s.includes} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-primary">
        <Container>
          <div className="flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-2xl text-2xl font-semibold text-white">
              Ready to begin? Book an appointment with Slogani Consults.
            </h2>
            <Link href="/book" className={buttonVariants({ variant: "accent", size: "lg" })}>
              Book Appointment
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
