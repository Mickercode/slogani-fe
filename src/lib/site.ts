/**
 * Shared site configuration — navigation, services, and locations.
 * Sourced from Website-copy.md so pages and the header/footer stay in sync.
 */

export const siteConfig = {
  name: "Slogani Consults",
  legalName: "Slogani Consults Nig. Ltd",
  tagline: "Identity Enrollment & Verification",
  description:
    "NIMC-licensed identity enrollment and verification services for Nigerians at home and in the diaspora.",
};

export type NavItem = { label: string; href: string };

/** Primary navigation (header + footer). */
export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Agents", href: "/agents" },
  { label: "Corporate", href: "/corporate" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  includes: string[];
};

/** Core services (from "Our Services" copy). */
export const services: Service[] = [
  {
    slug: "nin-enrollment",
    name: "NIN Enrollment",
    short:
      "Secure registration for a National Identification Number (NIN) for adults and children.",
    includes: [
      "First-time enrollment",
      "Adult and child registration",
      "Biometric capture",
      "Secure submission to NIMC systems",
    ],
  },
  {
    slug: "nin-verification",
    name: "NIN Verification",
    short: "Identity verification services for individuals and organizations.",
    includes: [
      "Identity validation",
      "Record confirmation",
      "Data matching",
      "Secure verification processing",
    ],
  },
  {
    slug: "nin-modification",
    name: "NIN Modification",
    short: "Updates and corrections to existing identity records.",
    includes: [
      "Name corrections",
      "Date of birth updates",
      "Data adjustments",
      "Record amendments",
    ],
  },
  {
    slug: "diaspora-enrollment",
    name: "Diaspora Enrollment",
    short: "Official NIN registration services for Nigerians living abroad.",
    includes: [
      "Overseas enrollment coordination",
      "Document pre-verification",
      "Appointment scheduling",
      "Biometric capture at approved centers",
    ],
  },
  {
    slug: "biometric-capture",
    name: "Biometric Data Capture",
    short: "Secure biometric enrollment services.",
    includes: [
      "Fingerprint capture",
      "Facial imaging",
      "Identity data validation",
      "Secure submission systems",
    ],
  },
  {
    slug: "corporate-verification",
    name: "Corporate Identity Verification",
    short: "Identity verification services for organizations.",
    includes: [
      "Customer identity verification",
      "Employee KYC validation",
      "Bulk verification services",
      "Enterprise identity solutions",
    ],
  },
];

export type Location = {
  city: string;
  region: string;
  address?: string;
  type: "nigeria" | "international";
};

/** Service locations (from "Our Locations" + "Contact" copy). */
export const locations: Location[] = [
  {
    city: "Lagos",
    region: "Ikeja, Lagos",
    address: "43 Oritshe Street, Off Obafemi Awolowo Way",
    type: "nigeria",
  },
  {
    city: "Abuja",
    region: "Wuse Zone 6, Abuja",
    address: "7 Pretoria Street",
    type: "nigeria",
  },
  {
    city: "Umuahia",
    region: "Abia State",
    address: "No. 2 Ojike Street",
    type: "nigeria",
  },
  { city: "Republic of Ireland", region: "International", type: "international" },
  { city: "Côte d’Ivoire", region: "International", type: "international" },
  { city: "Niger Republic", region: "International", type: "international" },
  { city: "Togo", region: "International", type: "international" },
];

/** Booking service options (from "Book an Appointment" copy). */
export const bookingServices = [
  "NIN Enrollment",
  "NIN Verification",
  "NIN Modification",
  "Diaspora Enrollment Support",
  "Biometric Capture",
];
