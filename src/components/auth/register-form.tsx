"use client";

import { useActionState } from "react";
import { registerAction } from "@/lib/auth/actions";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/components/auth/auth-field";

export function RegisterForm() {
  const [state, action, pending] = useActionState(registerAction, undefined);

  return (
    <form action={action} className="space-y-4">
      {state?.error && (
        <p role="alert" className="rounded-md bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
          {state.error}
        </p>
      )}
      <AuthField label="Full name" name="name" autoComplete="name" required />
      <AuthField label="Email" name="email" type="email" autoComplete="email" required />
      <AuthField
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
      />
      <AuthField
        label="Confirm password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
      />
      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={pending}>
        {pending ? "Creating account…" : "Create account"}
      </Button>
    </form>
  );
}
