# One-page site (Vite + React)

Landing page built with Vite, React, TypeScript, Tailwind CSS v4, and shadcn/ui (base-nova). See `docs/TODO.md` for the implementation checklist.

## Requirements

- **Node.js** 20.19+ (see `package.json` `engines`)

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm run dev`  | Start dev server   |
| `npm run build`| Production build   |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint             |

## Project layout

- `src/` — application code (`@/` alias → `src/`)
- `src/components/ui/` — shadcn-style UI primitives
- `src/lib/utils.ts` — `cn()` helper (`clsx` + `tailwind-merge`)
- `src/lib/link.tsx` — re-exports `react-router-dom` (`Link`, etc.) instead of `next/link`
- `src/providers/theme-provider.tsx` — `next-themes` (`class` on `<html>`)
- `src/pages/home.tsx` — one-page shell: ordered sections + placeholders (Phase 3 replaces content)
- `src/components/layout/` — `SiteHeader` (sticky nav + theme toggle), `PageSection`, `ThemeToggle`
- `src/lib/site-nav.ts` — section id constants + shell nav config
- `components/*.txt` — section reference specs from the design brief

## Phase 1 dependencies (runtime)

| Area | Packages |
| ---- | -------- |
| Shared | `lucide-react`, `class-variance-authority`, `@radix-ui/react-slot`, `clsx`, `tailwind-merge` |
| Animation | `framer-motion` (hero, testimonials), `motion` (Features spec / `motion/react`). Consider consolidating to one library in a later pass. |
| Hero shaders | `@paper-design/shaders-react` |
| Clients particles | `@tsparticles/react`, `@tsparticles/slim` |
| Theming | `next-themes` |
| Footer utilities | `color-bits`, `@radix-ui/react-icons` |
| Routing | `react-router-dom` |
