import "dotenv/config"; // Prisma 7 does not auto-load .env in this config file
import { defineConfig } from "prisma/config";

// Prisma 7 moved connection config out of schema.prisma into this file.
// `datasource.url` is used by Migrate / introspection (CLI). The runtime
// PrismaClient connects via a driver adapter — see src/lib/db.ts (Phase 0.5).
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Used only by Migrate/introspection. Read via process.env (not the throwing
    // `env()` helper) so `prisma generate` succeeds at build time even when
    // DIRECT_URL isn't present (e.g. CI). Runtime DB access uses the pg adapter.
    url: process.env.DIRECT_URL ?? "",
  },
});
