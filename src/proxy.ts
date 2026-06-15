import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Edge-safe instance built from the config WITHOUT the Credentials provider /
// Prisma adapter (those are Node-only). The `authorized` callback enforces RBAC.
// (Next 16 renamed "middleware" to "proxy" — same functionality.)
export default NextAuth(authConfig).auth;

export const config = {
  // Run on everything except static assets and the auth API.
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|logo.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
