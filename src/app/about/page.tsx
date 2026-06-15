import type { Metadata } from "next";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { CheckList } from "@/components/ui/check-list";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Slogani Consults Nig. Ltd is a registered, NIMC-licensed identity enrollment and verification company incorporated in Nigeria.",
};

const whatWeDo = [
  "NIN enrollment services",
  "Identity verification solutions",
  "Biometric data capture",
  "Record modification services",
  "Diaspora enrollment support",
  "Corporate identity verification",
];

const commitments = [
  "Data security and privacy",
  "Compliance with NIMC regulations",
  "Accuracy in identity processing",
  "Reliable service delivery",
  "Continuous operational expansion",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Slogani Consults"
        title="Simplifying access to official identity systems"
        intro="Slogani Consults Nig. Ltd is a registered and NIMC-licensed identity enrollment and verification company incorporated in Nigeria. We provide secure, structured, and compliant enrollment and verification services for individuals and organizations."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="glass-card p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              To provide trusted identity infrastructure that connects Nigerians to
              essential national and global systems through secure enrollment and
              verification services.
            </p>
          </div>
          <div className="glass-card p-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Eye className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-foreground">Our Vision</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              To become a leading identity services provider across Africa and the
              diaspora, enabling seamless access to verified identity for all
              Nigerians worldwide.
            </p>
          </div>
        </div>
      </Section>

      <Section band>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What We Do" intro="We operate within Nigeria's official identity framework to deliver:" />
            <CheckList items={whatWeDo} className="mt-6" columns={2} />
          </div>
          <div>
            <SectionHeading title="Our Commitment" />
            <CheckList items={commitments} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Global Reach</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Slogani Consults serves clients across Nigeria and internationally,
              ensuring Nigerians abroad can access identity services without
              geographical barriers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Leadership</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Led by experienced professionals in identity management and public
              service systems, Slogani Consults continues to expand its operational
              footprint across Africa and the diaspora.
            </p>
          </div>
        </div>
        <p className="mt-10 flex items-center gap-2 text-sm font-medium text-primary">
          <ShieldCheck className="h-5 w-5 text-gold" />
          NIMC-licensed · NDPA-aligned data handling
        </p>
      </Section>
    </>
  );
}
