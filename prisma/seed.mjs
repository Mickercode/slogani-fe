import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Standalone seed (run: npm run db:seed). Uses the pg driver adapter over the
// Supabase pooler. Idempotent: services upsert by slug, locations by name.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const services = [
  {
    slug: "nin-enrollment",
    name: "NIN Enrollment",
    category: "NIN_ENROLLMENT",
    description: "Secure registration for a National Identification Number (NIN) for adults and children.",
  },
  {
    slug: "nin-verification",
    name: "NIN Verification",
    category: "NIN_VERIFICATION",
    description: "Identity verification services for individuals and organizations.",
  },
  {
    slug: "nin-modification",
    name: "NIN Modification",
    category: "NIN_MODIFICATION",
    description: "Updates and corrections to existing identity records.",
  },
  {
    slug: "diaspora-enrollment",
    name: "Diaspora Enrollment",
    category: "DIASPORA_ENROLLMENT",
    description: "Official NIN registration services for Nigerians living abroad.",
  },
  {
    slug: "biometric-capture",
    name: "Biometric Data Capture",
    category: "BIOMETRIC_CAPTURE",
    description: "Secure biometric enrollment services.",
  },
  {
    slug: "corporate-verification",
    name: "Corporate Identity Verification",
    category: "CORPORATE_VERIFICATION",
    description: "Identity verification services for organizations.",
  },
];

const locations = [
  { name: "Lagos — Ikeja", type: "NIGERIA", country: "Nigeria", state: "Lagos", city: "Ikeja", address: "43 Oritshe Street, Off Obafemi Awolowo Way" },
  { name: "Abuja — Wuse Zone 6", type: "NIGERIA", country: "Nigeria", state: "FCT", city: "Abuja", address: "7 Pretoria Street" },
  { name: "Umuahia — Abia", type: "NIGERIA", country: "Nigeria", state: "Abia", city: "Umuahia", address: "No. 2 Ojike Street" },
  { name: "Republic of Ireland", type: "INTERNATIONAL", country: "Ireland" },
  { name: "Côte d’Ivoire", type: "INTERNATIONAL", country: "Côte d’Ivoire" },
  { name: "Niger Republic", type: "INTERNATIONAL", country: "Niger" },
  { name: "Togo", type: "INTERNATIONAL", country: "Togo" },
];

async function main() {
  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: { name: s.name, category: s.category, description: s.description, active: true },
      create: { ...s, active: true },
    });
  }
  console.log(`Services seeded: ${services.length}`);

  let created = 0;
  for (const l of locations) {
    const existing = await prisma.location.findFirst({ where: { name: l.name } });
    if (!existing) {
      await prisma.location.create({ data: { ...l, active: true } });
      created++;
    }
  }
  console.log(`Locations: ${created} created, ${locations.length - created} already present`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed complete ✓");
  })
  .catch(async (e) => {
    console.error("Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
