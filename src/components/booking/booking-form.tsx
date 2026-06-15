"use client";

import { useActionState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { createBooking } from "@/lib/actions/booking";
import { Button } from "@/components/ui/button";

type Option = { id: string; name: string };

const inputClass =
  "h-11 w-full rounded-md border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function BookingForm({
  services,
  locations,
}: {
  services: Option[];
  locations: Option[];
}) {
  const [state, action, pending] = useActionState(createBooking, undefined);

  if (state?.ok) {
    return (
      <div className="glass-card flex flex-col items-start gap-3 p-8">
        <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        <h2 className="text-lg font-semibold text-foreground">Appointment requested</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Your reference is{" "}
          <span className="font-mono font-semibold text-foreground">{state.reference}</span>.
          We&apos;ll confirm your appointment shortly — you can track it from your dashboard.
        </p>
        <a
          href="/dashboard"
          className="mt-2 text-sm font-medium text-accent hover:underline"
        >
          Go to dashboard
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="glass-card p-6 sm:p-8">
      {state?.error && (
        <p role="alert" className="mb-4 rounded-md bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
          {state.error}
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="serviceId" className="mb-1.5 block text-sm font-medium text-foreground">
            Service
          </label>
          <select id="serviceId" name="serviceId" className={inputClass} defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="locationId" className="mb-1.5 block text-sm font-medium text-foreground">
            Location
          </label>
          <select id="locationId" name="locationId" className={inputClass} defaultValue="" required>
            <option value="" disabled>Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-foreground">
            Preferred date
          </label>
          <input id="date" name="date" type="date" className={inputClass} required />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-foreground">
          Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <Button type="submit" variant="accent" size="lg" className="mt-6 w-full sm:w-auto" disabled={pending}>
        <CalendarCheck className="h-4 w-4" />
        {pending ? "Submitting…" : "Submit Request"}
      </Button>
    </form>
  );
}
