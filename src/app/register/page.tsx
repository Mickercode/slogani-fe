import type { Metadata } from "next";
import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Create account",
  description: "Create your Slogani Consults account to book and track services.",
};

export default function RegisterPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <Aurora />
      <Container>
        <div className="mx-auto max-w-md py-20 sm:py-28">
          <div className="glass-card p-8">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Create your account
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Book appointments, submit requests, and track your identity status.
            </p>
            <div className="mt-6">
              <RegisterForm />
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-accent hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
