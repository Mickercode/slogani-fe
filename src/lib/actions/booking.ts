"use server";

import { randomBytes } from "crypto";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { auth } from "@/auth";

const schema = z.object({
  serviceId: z.string().min(1, "Select a service."),
  locationId: z.string().min(1, "Select a location."),
  date: z.string().min(1, "Pick a preferred date."),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

export type BookingState =
  | { ok?: boolean; reference?: string; error?: string }
  | undefined;

export async function createBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Please sign in to book an appointment." };
  }

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  const { serviceId, locationId, date, notes } = parsed.data;

  const [service, location] = await Promise.all([
    prisma.service.findUnique({ where: { id: serviceId } }),
    prisma.location.findUnique({ where: { id: locationId } }),
  ]);
  if (!service || !location) {
    return { error: "The selected service or location is unavailable." };
  }

  const scheduledFor = new Date(date);
  if (Number.isNaN(scheduledFor.getTime())) {
    return { error: "Please choose a valid date." };
  }

  const reference = `SLG-${randomBytes(4).toString("hex").toUpperCase()}`;

  await prisma.appointment.create({
    data: {
      reference,
      customerId: session.user.id,
      serviceId,
      locationId,
      scheduledFor,
      status: "PENDING",
      notes: notes || null,
    },
  });

  return { ok: true, reference };
}
