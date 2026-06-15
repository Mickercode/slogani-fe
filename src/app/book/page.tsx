import type { Metadata } from "next";
import { CalendarCheck, CircleAlert } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { bookingServices, locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your identity enrollment or verification session with Slogani Consults.",
};

const steps = [
  "Select your service",
  "Choose your location",
  "Pick a preferred date",
  "Submit your request",
  "Receive confirmation",
];

export default function BookPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Book an Appointment"
        title="Schedule your enrollment or verification session"
        intro="Select a service and location, choose a date, and submit your request. You'll receive a confirmation with the details."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Booking form (UI scaffold — submission wired in a later phase) */}
        <form className="glass-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="name">
              <input id="name" name="name" type="text" autoComplete="name" className={inputClass} required />
            </Field>
            <Field label="Email" htmlFor="email">
              <input id="email" name="email" type="email" autoComplete="email" className={inputClass} required />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
            </Field>
            <Field label="Preferred date" htmlFor="date">
              <input id="date" name="date" type="date" className={inputClass} />
            </Field>
            <Field label="Service" htmlFor="service">
              <select id="service" name="service" className={inputClass} defaultValue="" required>
                <option value="" disabled>Select a service</option>
                {bookingServices.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Location" htmlFor="location">
              <select id="location" name="location" className={inputClass} defaultValue="" required>
                <option value="" disabled>Select a location</option>
                {locations.map((l) => (
                  <option key={l.city} value={l.city}>
                    {l.city}{l.type === "nigeria" ? ` — ${l.region}` : " (International)"}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Notes (optional)" htmlFor="notes" className="mt-5">
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </Field>

          <Button type="submit" variant="accent" size="lg" className="mt-6 w-full sm:w-auto">
            <CalendarCheck className="h-4 w-4" />
            Submit Request
          </Button>
        </form>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-foreground">How it works</h3>
            <ol className="mt-4 space-y-3">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-3 rounded-lg border border-gold/30 bg-gold/5 p-5">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-foreground">
              Please arrive with all required documents to avoid delays in
              processing.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}

const inputClass =
  "h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}
