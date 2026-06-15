# Slogani Consults — Design System (MASTER)

> Global source of truth for UI. Derived via the `ui-ux-pro-max` skill for a
> **Government / Public Service** product (identity enrollment & verification).
> Colors are PLACEHOLDERS — structured as semantic tokens so brand colors swap in one place.
> Page-specific overrides (if any) live in `design-system/pages/<page>.md` and win over this file.

## Product profile

- Type: Government/Public Service + B2B Service (row 13 / row 5 of products).
- Principles: **Trust paramount · Accessibility (WCAG AA+, aim AAA) · Minimal & direct.**
- Landing pattern: Minimal & Direct — hero → core services → why-us → proof → CTA.
- Anti-patterns to avoid: emoji as icons, gray-on-gray low contrast, decorative-only motion,
  mixing icon styles, hardcoded hex in components (use tokens).

## Color tokens (BRAND — from the Slogani logo: blue base + orange-gold sun)

| Token            | Hex       | Use |
|------------------|-----------|-----|
| primary          | `#0B5CA8` | brand blue (logo base): header wordmark, primary buttons, footer, links |
| primary-fg       | `#FFFFFF` | text on primary |
| primary-hover    | `#094B8A` | primary hover |
| accent           | `#EA580C` | brand orange (logo sun): primary CTAs, highlights |
| accent-fg        | `#FFFFFF` | text on accent |
| accent-hover     | `#C2410C` | accent hover |
| gold             | `#F59E0B` | sun gold: NIMC/license badges, small marks — sparingly |
| background       | `#F8FAFC` | page background |
| foreground       | `#0F172A` | body text |
| card             | `#FFFFFF` | surfaces |
| card-fg          | `#0F172A` | text on cards |
| muted            | `#EEF2F6` | subtle fills, section bands |
| muted-fg         | `#5B6B7B` | secondary text, captions (~4.6:1 on white) |
| border           | `#E2E8F0` | hairlines, dividers, input borders |
| destructive      | `#DC2626` | errors |
| ring             | `#0B5CA8` | focus ring |

Contrast: blue `#0B5CA8` on white ≈ 5.6:1 (AA); orange `#EA580C` reserved for large/bold
button text (≥3:1) — don't use orange for small body text on white. Logo file: `public/logo.png`.

## Typography — "Corporate Trust" pairing (best for government/finance/accessibility)

- Headings: **Lexend** (high legibility, weights 500–700).
- Body: **Source Sans 3** (weights 400–600).
- Scale: 12 · 14 · 16(base) · 18 · 20 · 24 · 30 · 36 · 48. Body line-height 1.6; headings 1.15–1.25.
- Line length 60–75ch desktop, 35–60ch mobile. Base body ≥16px.

## Layout & spacing

- 8pt rhythm (4/8/12/16/24/32/48/64/96). Container max-width `max-w-6xl` (72rem), px-4 → px-6 → px-8.
- Mobile-first; breakpoints 375 / 640(sm) / 768(md) / 1024(lg) / 1280(xl).
- Section vertical padding: py-16 mobile → py-24 desktop. One primary CTA per section.

## Effects — Aurora + Glassmorphism (the "innovative" layer)

The site uses a premium **Aurora UI + Glassmorphism** aesthetic (per the user's direction).
Aurora's recommended palette is Blue–Orange — which is exactly the Slogani brand.

- **Aurora background**: soft blue + orange radial blobs behind content, motion-safe slow
  drift (`--animate-aurora`, ~14s). Light tone on pages, `tone="dark"` on the navy hero/CTA.
  Component: `components/ui/aurora.tsx`. Body has a fixed subtle blue/orange gradient wash.
- **Glass surfaces** (`globals.css`):
  - `.glass-card` — `backdrop-blur(16px) saturate(140%)`, translucent card (~70%), hairline
    white border, inset top-shine + soft shadow, radius 1rem. `.glass-card-hover` adds lift+glow.
  - `.glass-nav` — frosted header. `.glass-dark` — translucent white-on-navy (hero badge/stats, overlay header).
  - Components: `components/ui/glass-card.tsx` exports `<GlassCard>` + `<IconChip>` (gradient blue chip).
- **Inputs stay solid** (`bg-card`) for form legibility — glass is for cards/panels/nav, not fields.
- Radius: `1rem` glass cards, `rounded-md` buttons, `rounded-full` pills. Buttons keep an
  accent glow on primary CTAs.
- Motion: 150–250ms ease-out; transform/opacity only; all decorative motion is `motion-safe:`
  and the global `prefers-reduced-motion` block disables it.
- **Accessibility guard**: glass opacity kept high enough that body text stays ≥4.5:1; never
  put small body text in orange on light. Verify contrast when tinting glass further.

## Icons

- **Lucide** SVG icons only (no emoji). Consistent stroke 1.75–2px, size tokens 16/20/24.

## Components baseline

- Buttons: primary (navy), accent (blue), outline, ghost. Min height 44px, visible focus ring.
- Header: sticky, white surface, navy wordmark, primary "Book Appointment" CTA, mobile drawer.
- Footer: navy, grouped links, locations, license/compliance note.
- Cards: white, border, subtle shadow, generous padding (p-6).
