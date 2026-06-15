import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, CreditCard, Smartphone, Briefcase, GraduationCap, Coins } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { CheckList } from "@/components/ui/check-list";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Corporate Solutions",
  description:
    "Trusted KYC and identity verification infrastructure for organizations — customer verification, employee KYC, and bulk verification.",
};

const offers = [
  "Customer identity verification",
  "Employee KYC validation",
  "Identity data matching",
  "Bulk verification services",
  "Secure enrollment support",
];

const benefits = [
  "Improved onboarding accuracy",
  "Fraud reduction",
  "Compliance support",
  "Secure identity validation",
  "Scalable verification processes",
];

const useCases = [
  { icon: Landmark, label: "Financial institutions" },
  { icon: CreditCard, label: "Fintech platforms" },
  { icon: Smartphone, label: "Telecom companies" },
  { icon: Briefcase, label: "Recruitment agencies" },
  { icon: GraduationCap, label: "Educational institutions" },
];

export default function CorporatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Corporate Identity Verification Solutions"
        title="Trusted KYC and identity infrastructure for organizations"
        intro="Secure and reliable customer or employee validation for businesses that depend on accurate identity verification."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What we offer" />
            <CheckList items={offers} className="mt-6" />
          </div>
          <div>
            <SectionHeading title="Benefits" />
            <CheckList items={benefits} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section band>
        <SectionHeading eyebrow="Use Cases" title="Built for identity-critical industries" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4 glass-card p-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border border-gold/30 bg-gold/5 p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold">
              <Coins className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Future-ready infrastructure</h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
                Our system is designed to support a future KYC token-based
                verification model — prepaid verification credits for scalable
                enterprise usage, bulk verification, and API-ready integration.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-primary">
        <Container>
          <div className="flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-2xl text-2xl font-semibold text-white">
              Talk to us about corporate verification.
            </h2>
            <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
              Contact Sales
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
