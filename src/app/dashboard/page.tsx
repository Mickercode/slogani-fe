import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CalendarDays, FileText, IdCard } from "lucide-react";
import { auth } from "@/auth";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { GlassCard, IconChip } from "@/components/ui/glass-card";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const name = session.user.name ?? session.user.email;

  const cards = [
    { icon: CalendarDays, title: "Appointments", body: "Book, reschedule, or cancel your sessions.", href: "/book" },
    { icon: FileText, title: "Requests", body: "Track enrollment, modification, and verification requests." },
    { icon: IdCard, title: "Identity status", body: "View your enrollment and verification status." },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`Signed in · ${session.user.role}`}
        title={`Welcome, ${name}`}
        intro="Your Slogani Consults dashboard. Manage appointments, requests, and your identity status."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <GlassCard key={title} className="p-6">
              <IconChip>
                <Icon className="h-5 w-5" />
              </IconChip>
              <h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
