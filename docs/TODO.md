# One-page site — project to-dos

Build order for the Vite (React) landing page from `components/*.txt` specs. Section **#6** is a **CTA (Call to Action)** block—not a second full hero; keep it compact and conversion-focused. Later passes will align typography, colors, spacing, and components across sections.

---

## Phase 0 — Project foundation

- [x] Scaffold **Vite + React + TypeScript** (e.g. `npm create vite@latest`).
- [x] Add **Tailwind CSS** and configure `content` paths for `src`.
- [x] Add **path aliases** (e.g. `@/` → `src/`) in `vite.config` + `tsconfig`.
- [x] Add **`src/lib/utils.ts`** with `cn` (`clsx` + `tailwind-merge`) for shadcn-style class merging.
- [x] Initialize **shadcn/ui** for Vite (or manually add `components.json` + base styles) and wire **CSS variables** / `globals.css` for theme tokens (`background`, `foreground`, `primary`, `muted`, `card`, etc.).
- [x] Document **Node/npm** version expectations in README if needed.

---

## Phase 1 — Dependencies (install as each section needs them)

- [x] **Shared:** `lucide-react`, `class-variance-authority`, `@radix-ui/react-slot`, `framer-motion` and/or `motion` (pick one motion library and use consistently).
- [x] **Section 1 (Hero):** `@paper-design/shaders-react`, `framer-motion` (if not already).
- [x] **Section 3 (Clients):** `@tsparticles/react`, `@tsparticles/slim`; theme hook (e.g. `next-themes` alternative for Vite or `prefers-color-scheme` + small context).
- [x] **Section 7 (Footer):** `clsx`, `tailwind-merge`, `color-bits`, `@radix-ui/react-icons` (or replace chevron with `lucide-react` for fewer deps).
- [x] Replace **Next.js-only** APIs: `next/link` → `react-router-dom` `Link` or `<a href="#...">`; remove `"use client"` directives.

---

## Phase 2 — Layout shell

- [x] Single **`App`** (or `pages/Home`) composing sections in order.
- [x] **Anchor IDs** for in-page nav: e.g. `#features`, `#clients`, `#pricing`, `#testimonials`, `#cta`, `#footer` (match hero nav links).
- [x] Optional: **scroll margin** on sections so fixed/sticky nav does not cover headings.

---

## Phase 3 — Sections (step by step)

Build and smoke-test each block before moving on.

1. [x] **Hero (shader)** — `ShaderBackground`, `Header`, `HeroContent`, `PulsingCircle`; verify WebGL/shader performance and mobile behavior.
2. [x] **Features** — `FeatureCard` grid + demo data; `motion` scroll-in animations; respect `prefers-reduced-motion`.
3. [x] **Clients / trust** — headline row + logo SVGs + `Sparkles` background; wire particle colors to light/dark theme.
4. [x] **Pricing** — `PricingCard` ×2, shadcn `Button`, section `id="pricing"`.
5. [x] **Testimonials** — `TestimonialSection` with props + Unsplash (or local) images; fix any invalid Tailwind classes from the spec (e.g. `h-120`).
6. [x] **CTA** — Dedicated **Call to Action** section (not a second full-height shader hero): short headline, one line of supporting copy, primary + secondary actions; reuse `Button` and tokens. **Do not** paste the long “enterprise hero” demo as-is if it duplicates the top hero’s role.
7. [x] **Footer** — `flickering-footer` / `FlickeringGrid`; resolve duplicate `cn` vs `lib/utils`; swap `Link` to Vite-friendly routing.

---

## Phase 4 — Consistency pass (later)

- [x] Single **font stack** (e.g. Geist, Inter) via Tailwind `fontFamily` or `@fontsource`.
- [x] Unify **heading scale** (h1–h3) and **section vertical rhythm** (`py-*`).
- [x] Align **border radius**, **button styles**, and **card surfaces** across Features, Pricing, Testimonials, CTA.
- [x] **Dark mode** toggle or class strategy consistent across shader hero, clients sparkles, and footer.
- [x] **Accessibility:** focus states, contrast on shader/gradient areas, reduced motion.

---

## Phase 5 — Polish & ship

- [ ] **SEO:** `index.html` title, meta description, OG tags if needed.
- [ ] **Performance:** lazy-load heavy sections (particles, shaders) if metrics warrant it.
- [ ] **Build:** `npm run build` clean; fix any SSR-incompatible assumptions (all client-only APIs behind `useEffect` or dynamic import).

---

## Notes

- Source specs live in `components/*.txt`; treat them as **reference**, adapting imports and framework-specific bits for Vite.
- **#6 CTA:** prioritize clarity and a single conversion goal; reserve the big visual moments for Hero (#1) and Footer (#7) so the page does not feel like two competing heroes.
