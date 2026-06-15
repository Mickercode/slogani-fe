import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { CheckList } from "@/components/ui/check-list";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Become an Enrollment Agent",
  description:
    "Join the Slogani Consults agent network supporting identity registration and verification across Nigeria and the diaspora.",
};

const benefits = [
  "Official enrollment opportunities",
  "Access to structured identity workflows",
  "Training and onboarding support",
  "Operational tools and dashboards",
  "Performance tracking system",
];

const whoCanApply = [
  "ICT service providers",
  "Consultants",
  "Business owners",
  "Community representatives",
  "Enrollment professionals",
];

const responsibilities = [
  "Assist customers with enrollment",
  "Support biometric registration processes",
  "Manage appointment workflows",
  "Provide local identity service support",
];

const steps = [
  "Submit application",
  "Verification and review",
  "Training and onboarding",
  "Approval",
  "Access to agent dashboard",
];

const requirements = [
  "Valid identification",
  "Operational base or access to service point",
  "Basic technical capability",
  "Commitment to service delivery standards",
];

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Become an Enrollment Agent"
        title="Join the Slogani Consults agent network"
        intro="We are building a nationwide and global network of enrollment agents who support identity registration and verification services."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why become an agent" />
            <CheckList items={benefits} className="mt-6" />
          </div>
          <div>
            <SectionHeading title="Who can apply" />
            <CheckList items={whoCanApply} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section band>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What you will do" />
            <CheckList items={responsibilities} className="mt-6" />
          </div>
          <div>
            <SectionHeading title="Requirements" />
            <CheckList items={requirements} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="From application to dashboard access" />
        <ProcessTimeline className="mt-14" steps={steps} />
      </Section>

      <section className="bg-primary">
        <Container>
          <div className="flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-white">Join the network</h2>
              <p className="mt-2 text-white/80">
                Become part of a growing identity services network across Nigeria
                and the diaspora.
              </p>
            </div>
            <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
              Apply Now
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
