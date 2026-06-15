import type { Metadata } from "next";
import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { Container } from "@/components/ui/container";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Slogani Consults account.",
};

export default function LoginPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <Aurora />
      <Container>
        <div className="mx-auto max-w-md py-20 sm:py-28">
          <div className="glass-card p-8">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to manage your appointments and requests.
            </p>
            <div className="mt-6">
              <LoginForm />
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-medium text-accent hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
