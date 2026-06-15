import Link from "next/link";
import {
  Fingerprint,
  BadgeCheck,
  FileText,
  Globe2,
  ScanFace,
  Building2,
  ShieldCheck,
  Network,
  MapPinned,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/home/hero";
import { VerificationCard } from "@/components/home/verification-card";
import { Audience } from "@/components/home/audience";
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Aurora } from "@/components/ui/aurora";
import { GlassCard, IconChip } from "@/components/ui/glass-card";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { CheckList } from "@/components/ui/check-list";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/site";

const serviceIcons: Record<string, React.ElementType> = {
  "nin-enrollment": Fingerprint,
  "nin-verification": BadgeCheck,
  "nin-modification": FileText,
  "diaspora-enrollment": Globe2,
  "biometric-capture": ScanFace,
  "corporate-verification": Building2,
};

const whyUs = [
  "NIMC-licensed enrollment partner",
  "Secure biometric verification systems",
  "Multi-location service network",
  "Trusted by individuals and organizations",
  "Structured diaspora support system",
  "Professional agent network across regions",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Core services */}
      <Section>
        <SectionHeading
          eyebrow="Our Core Services"
          title="Official identity enrollment and verification"
          intro="Provided under authorization from the National Identity Management Commission (NIMC)."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug] ?? BadgeCheck;
            return (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="group glass-card glass-card-hover p-6"
              >
                <IconChip>
                  <Icon className="h-5 w-5" />
                </IconChip>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Verification in action — signature product visual */}
      <Section band aurora>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How verification works"
              title="Identity verification, made simple and secure"
              intro="Every check runs against approved national frameworks with secure biometric matching — so individuals and organizations get a clear, trusted result."
            />
            <CheckList
              className="mt-6"
              items={[
                "Secure biometric matching",
                "Real-time status confirmation",
                "Privacy-first, encrypted handling",
                "Auditable verification records",
              ]}
              columns={2}
            />
          </div>
          <VerificationCard />
        </div>
      </Section>

      {/* Who we serve — human imagery */}
      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for people, agents, and organizations"
          intro="From first-time registrants to Nigerians in the diaspora and corporate partners — identity access, without the complexity."
          align="center"
        />
        <div className="mt-12">
          <Audience />
        </div>
      </Section>

      {/* Why Slogani */}
      <Section band aurora>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Why Slogani Consults"
            title="Identity is foundational to access, inclusion, and opportunity"
            intro="We provide structured identity services across Nigeria and internationally, so individuals, agents, and organizations can access verified identity systems without delay or complexity."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <li key={item} className="glass-card flex items-start gap-3 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Serving Nigerians Globally */}
      <Section>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Secure & Compliant",
              body: "Services follow NIMC-approved standards for security, accuracy, and compliance.",
            },
            {
              icon: Network,
              title: "Agent Network",
              body: "A professional enrollment agent network operating across regions.",
            },
            {
              icon: MapPinned,
              title: "Local & International",
              body: "Centers across Lagos, Abuja, Umuahia, and partners in Ireland, Togo, Niger Republic, and Côte d’Ivoire.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <GlassCard key={title} className="p-6">
              <IconChip>
                <Icon className="h-5 w-5" />
              </IconChip>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* How it works — signature timeline */}
      <Section band>
        <SectionHeading
          eyebrow="How it works"
          title="From booking to confirmation in five steps"
          align="center"
        />
        <ProcessTimeline
          className="mt-14"
          steps={[
            "Select your service",
            "Choose your location",
            "Pick a preferred date",
            "Submit your request",
            "Complete enrollment",
            "Receive confirmation",
          ]}
        />
      </Section>

      {/* CTA band */}
      <section className="relative isolate overflow-hidden bg-[var(--hero-bg)]">
        <Aurora tone="dark" />
        <Container>
          <div className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white">
                Start your process
              </h2>
              <p className="mt-3 text-lg text-white/80">
                Whether you are registering for the first time, updating your
                records, or verifying identity for official use — we are ready to
                support you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/book" className={buttonVariants({ variant: "accent", size: "lg" })}>
                Book Appointment
              </Link>
              <Link
                href="/services"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "border-white/30 bg-transparent text-white hover:bg-white/10",
                })}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
