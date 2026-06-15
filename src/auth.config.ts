import type { NextAuthConfig } from "next-auth";
import { matchProtected, hasRole, isRole } from "@/lib/auth/roles";

/**
 * Edge-safe Auth.js config. Contains NO Node-only deps (Prisma, bcrypt) so it can
 * run in middleware. The Credentials provider + Prisma adapter are added in
 * `src/auth.ts` (Node runtime only).
 */
export const authConfig = {
  trustHost: true,
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    // Persist id + role onto the JWT at sign-in.
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        if (isRole(user.role)) token.role = user.role;
      }
      return token;
    },
    // Expose id + role on the session.
    session({ session, token }) {
      if (typeof token.id === "string") session.user.id = token.id;
      if (isRole(token.role)) session.user.role = token.role;
      return session;
    },
    // Route protection for middleware.
    authorized({ auth, request: { nextUrl } }) {
      const { pathname } = nextUrl;
      const role = auth?.user?.role;
      const isLoggedIn = !!auth?.user;

      // Signed-in users shouldn't see login/register.
      if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      const rule = matchProtected(pathname);
      if (!rule) return true; // public route

      if (!isLoggedIn) return false; // -> redirect to signIn page
      return hasRole(role, rule.roles);
    },
  },
} satisfies NextAuthConfig;
