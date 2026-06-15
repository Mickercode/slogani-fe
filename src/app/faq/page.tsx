import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Slogani Consults identity enrollment and verification services.",
};

const faqs = [
  {
    q: "What is Slogani Consults?",
    a: "Slogani Consults is a NIMC-licensed enrollment agent providing identity enrollment and verification services.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is processed in accordance with identity management regulations and secure data handling standards.",
  },
  {
    q: "Can I enroll from outside Nigeria?",
    a: "Yes. We provide diaspora enrollment support through approved international channels.",
  },
  {
    q: "How long does NIN enrollment take?",
    a: "Processing time depends on verification requirements and enrollment volume.",
  },
  {
    q: "Do you support corrections to existing NIN?",
    a: "Yes. We provide modification and correction services for existing records.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Answers to common questions"
        intro="Enrollment, diaspora, agent, and corporate questions — answered."
      />

      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border glass-card">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                <span className="text-lg font-semibold text-foreground">{item.q}</span>
                <Plus className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          Still have questions?{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            Contact our team
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
