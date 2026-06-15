"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const schema = z.object({
  name: z.string().min(2, "Enter your name.").max(120),
  email: z.string().email("Enter a valid email."),
  phone: z.string().max(40).optional().or(z.literal("")),
  subject: z.string().max(160).optional().or(z.literal("")),
  message: z.string().min(5, "Your message is too short.").max(4000),
});

export type ContactState = { ok?: boolean; error?: string } | undefined;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  const { name, email, phone, subject, message } = parsed.data;
  await prisma.contactMessage.create({
    data: {
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    },
  });

  return { ok: true };
}
