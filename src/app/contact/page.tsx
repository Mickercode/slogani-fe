import type { Metadata } from "next";
import { MapPin, Building2, Headset } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Slogani Consults for identity enrollment and verification inquiries, bookings, or partnership requests.",
};

export default function ContactPage() {
  const hq = locations[0];
  const otherOffices = locations.filter((l) => l.type === "nigeria").slice(1);

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We're available to assist"
        intro="For all identity enrollment and verification inquiries, bookings, or partnership requests — reach out and we'll respond as quickly as possible during working hours."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-foreground">Headquarters</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {hq.address}
                <br />
                {hq.region}, Nigeria
              </p>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Other locations</h2>
              <ul className="mt-3 space-y-2">
                {otherOffices.map((l) => (
                  <li key={l.city} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    {l.region}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 rounded-lg border border-border bg-muted p-6">
              <Headset className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-foreground">
                For inquiries, bookings, or partnership requests, please reach out
                through our official channels.
              </p>
            </div>
          </div>

          {/* Contact form — wired to ContactMessage */}
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
