/**
 * App-level mirror of the Prisma `Role` enum + RBAC helpers.
 * Keep in sync with `prisma/schema.prisma`.
 */

export const ROLES = ["CUSTOMER", "AGENT", "CORPORATE", "ADMIN"] as const;
export type Role = (typeof ROLES)[number];

/** Where each role lands after signing in. */
export const ROLE_HOME: Record<Role, string> = {
  CUSTOMER: "/dashboard",
  AGENT: "/agent",
  CORPORATE: "/corporate-portal",
  ADMIN: "/admin",
};

/** Route prefixes that require authentication, and which roles may enter. */
export const PROTECTED_PREFIXES: { prefix: string; roles: Role[] }[] = [
  { prefix: "/dashboard", roles: ["CUSTOMER", "ADMIN"] },
  { prefix: "/agent", roles: ["AGENT", "ADMIN"] },
  { prefix: "/corporate-portal", roles: ["CORPORATE", "ADMIN"] },
  { prefix: "/admin", roles: ["ADMIN"] },
];

export function isRole(value: unknown): value is Role {
  return typeof value === "string" && (ROLES as readonly string[]).includes(value);
}

/** Does `role` satisfy one of `allowed`? */
export function hasRole(role: Role | undefined | null, allowed: Role[]): boolean {
  return !!role && allowed.includes(role);
}

/** The protection rule matching a pathname, if any. */
export function matchProtected(pathname: string) {
  return PROTECTED_PREFIXES.find((p) => pathname.startsWith(p.prefix));
}
