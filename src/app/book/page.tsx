import type { Metadata } from "next";
import Link from "next/link";
import { CircleAlert, Lock } from "lucide-react";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { BookingForm } from "@/components/booking/booking-form";

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

export default async function BookPage() {
  const session = await auth();

  const [services, locations] = await Promise.all([
    prisma.service.findMany({
      where: { active: true },
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
    prisma.location.findMany({
      where: { active: true },
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
  ]);

  return (
    <Section>
      <SectionHeading
        eyebrow="Book an Appointment"
        title="Schedule your enrollment or verification session"
        intro="Select a service and location, choose a date, and submit your request. You'll receive a confirmation with a reference you can track from your dashboard."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {session?.user ? (
          <BookingForm services={services} locations={locations} />
        ) : (
          <div className="glass-card flex flex-col items-start gap-4 p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Lock className="h-5 w-5" />
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              Sign in to book your appointment
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Create a free account or sign in so we can attach your appointment to
              your profile and let you track its status.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className={buttonVariants({ variant: "accent", size: "lg" })}>
                Create account
              </Link>
              <Link href="/login" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Sign in
              </Link>
            </div>
          </div>
        )}

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
