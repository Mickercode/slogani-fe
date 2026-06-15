import "dotenv/config"; // Prisma 7 does not auto-load .env in this config file
import { defineConfig, env } from "prisma/config";

// Prisma 7 moved connection config out of schema.prisma into this file.
// `datasource.url` is used by Migrate / introspection (CLI). The runtime
// PrismaClient connects via a driver adapter — see src/lib/db.ts (Phase 0.5).
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Migrations need a DIRECT connection (Supabase Session mode, port 5432) —
    // the pooled runtime connection can't run DDL / advisory locks reliably.
    url: env("DIRECT_URL"),
  },
});
