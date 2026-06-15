"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContact } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";

const inputClass =
  "h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, undefined);

  if (state?.ok) {
    return (
      <div className="glass-card flex flex-col items-start gap-3 p-8">
        <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        <h2 className="text-lg font-semibold text-foreground">Message sent</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our team will respond as quickly as possible
          during working hours.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="glass-card p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-foreground">Get in touch</h2>
      {state?.error && (
        <p role="alert" className="mt-3 rounded-md bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
          {state.error}
        </p>
      )}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Subject" name="subject" />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <Button type="submit" variant="accent" size="lg" className="mt-6 w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input id={name} name={name} type={type} autoComplete={autoComplete} required={required} className={inputClass} />
    </div>
  );
}
