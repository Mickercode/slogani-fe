# Slogani Consults Digital Platform — Build Roadmap

> Source of truth for the build sequence. Update the **Current Step** marker as we
> progress. Full product spec lives in the PRD (V1.1). This file is the executable plan.

## What we're building

A NIMC-licensed identity enrollment & verification platform for Nigerians at home and in
the diaspora. One Next.js monolith (App Router) serving a public marketing site + four
role-gated portals (Customer, Agent, Corporate, Admin), backed by PostgreSQL via Prisma,
auth via Auth.js (NextAuth v5). Evolves into a KYC-token verification-credit business.

## Tech stack (installed)

Next.js 16.2.9 (App Router) · React 19.2 · TypeScript 5 · Tailwind v4 ·
Prisma 7.8 + @prisma/client 7.8 (PostgreSQL) · next-auth 5.0.0-beta.31 · bcryptjs · zod 4 ·
Cloudinary (storage, later) · Resend (email, later) · Vercel (hosting).

> ⚠️ Next 16 / Prisma 7 / Auth.js v5-beta differ from training data. Per AGENTS.md, read
> `node_modules/next/dist/docs/` before writing Next-specific code, and verify Prisma 7 /
> Auth.js v5 conventions against installed source rather than memory.

## Design rules (non-negotiable)

- **Wallet balance is a CACHE.** Source of truth = `sum(TokenTransaction)`. Ledger is append-only.
- `VerificationLog` + `TokenTransaction` are written in **one DB transaction**.
- **PII never stored raw** (NIN, biometrics) — encrypt at the application layer.
- Role-based access control on every portal route. Audit logs for sensitive actions.
- Mobile-first responsive UI. NIMC + Nigerian Data Protection Act compliance posture.

## Roles

`CUSTOMER` · `AGENT` · `CORPORATE` · `ADMIN` (mirror in `src/lib/auth/roles.ts`).

---

## Phases

### Phase 0 — Foundations  ◀ CURRENT
Everything the features depend on. No user-visible features yet.
- [x] **0.1** Full Prisma data model for Phase 1 (User/Profile/Service/Location/Appointment/
      EnrollmentRequest/Document/Notification/AuditLog) + future-ready Wallet/TokenTransaction/
      VerificationLog. Auth.js adapter models included. Schema validates + client generates. ✅
- [x] **0.5** DB wiring (Supabase Postgres): `prisma.config.ts` + `@prisma/adapter-pg`/`pg` +
      `src/lib/db.ts` singleton + `.env.example` (DATABASE_URL pooled / DIRECT_URL direct). ✅
      Remaining (needs user's Supabase credentials): create `.env`, run `prisma migrate dev`.
- [x] **0.2** `src/lib/auth/roles.ts` — role mirror + RBAC helpers + PROTECTED_PREFIXES. ✅
- [x] **0.3** Auth.js v5 (Prisma adapter, credentials + bcrypt, JWT session, role in session),
      self-service **register** + login + sign-out + protected `/dashboard` + middleware RBAC. ✅
      Remaining for later: email verification + password reset.
- [x] **0.4** App shell: root layout, SessionProvider, shared UI primitives, env validation (`zod`). ✅
      Remaining: PII encryption util (NIN).

### Phase 1 — MVP
- [ ] Public website (Home, About, Services, Diaspora, Agent Network, Corporate, Locations,
      Book Appointment, FAQ, Contact).
- [ ] Auth flows (register, login, email verification, password reset).
- [ ] Appointment booking (service → location → date/time → documents).
- [ ] Customer portal (Dashboard, Appointments, Requests, Documents, Profile).
- [ ] Admin dashboard (overview, user mgmt, appointment oversight, system config).
- [ ] Notifications (appointment confirmations, enrollment/verification updates).

### Phase 2 — Agent Network
- [ ] Agent application + admin approval workflow.
- [ ] Agent portal (Dashboard, Client Mgmt, Appointment Mgmt, Resources, Performance).

### Phase 3 — Corporate + KYC Tokens
- [ ] Corporate portal (Dashboard, Verification Tools, Transactions).
- [ ] KYC token system: Wallet, TokenTransaction ledger, VerificationLog — activate UI.
- [ ] Token packages, admin credit/debit, consumption logging, billing records.

### Phase 4 — Platform
- [ ] External verification API integrations.
- [ ] Advanced verification services.
- [ ] Mobile application.

---

## Current Step

**Phase 0 foundation is COMPLETE** (schema, DB, auth/RBAC, register/login, app shell). Public
website + all 10 marketing pages built (Aurora+Glass aesthetic). Next up (Phase 1 BE):
1. Seed Services/Locations into DB + wire **booking & contact forms** to server actions.
2. PII encryption util (NIN) — design rule.
3. Customer portal data (appointments/requests/documents/profile), then Admin portal.
4. Integrations: Resend (email verification + notifications), Cloudinary (document uploads).
