/**
 * People registry — single place to manage photography.
 *
 * `img` currently points at Unsplash stock from a "Nigerian people" search
 * (verified to load). ⚠️ Review each for fit and REPLACE with the client's own
 * consented Nigerian photography (staff, agents, customers) before launch.
 * If `img` is removed, the component falls back to a branded initials placeholder.
 */

const U = "https://images.unsplash.com/";
const portrait = (id: string) =>
  `${U}${id}?w=640&h=800&fit=crop&crop=faces&q=80&auto=format`;
const face = (id: string) =>
  `${U}${id}?w=160&h=160&fit=crop&crop=faces&q=80&auto=format`;

export type Person = {
  name: string;
  role: string;
  img?: string;
};

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** "Who we serve" — illustrative Nigerian audience segments. */
export const audience: Person[] = [
  { name: "Adaeze Okafor", role: "Diaspora professional", img: portrait("photo-1668246153111-07549350eda7") },
  { name: "Ibrahim Bello", role: "First-time registrant", img: portrait("photo-1604489387925-89f9fc20e448") },
  { name: "Chidinma Eze", role: "Student abroad", img: portrait("photo-1598890335561-884eccb92531") },
  { name: "Tunde Adeyemi", role: "Enrollment agent", img: portrait("photo-1657356217673-4f7000f768b4") },
];

/** Verification mock card subject. */
export const verifiedSubject: Person = {
  name: "Amara Okeke",
  role: "Verified identity",
  img: face("photo-1639283283022-ddeed766f2cc"),
};

/** Hero trust row. */
export const trustAvatars: Person[] = [
  { name: "Ngozi A.", role: "Customer", img: face("photo-1729974897977-0696b5e90aa8") },
  { name: "Emeka U.", role: "Customer", img: face("photo-1729974737647-3f4f310a6953") },
  { name: "Fatima S.", role: "Customer", img: face("photo-1703883635837-932563331641") },
  { name: "Olu B.", role: "Customer", img: face("photo-1714575628092-aefd4e5d4291") },
  { name: "Zainab M.", role: "Customer", img: face("photo-1661335909373-216738af201e") },
];
