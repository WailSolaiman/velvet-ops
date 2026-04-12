# Velvet Ops

**Velvet Ops** (فيلفت أوبس) is a product design and front-end studio. This repository powers our public site: a single-page experience that presents how we work, who we work with, and how to partner with us—built for clarity, motion, and Arabic-first typography.

Live site: https://velvet.wailsolaiman.com/  
Repository: https://github.com/WailSolaiman/velvet-ops/

---

## Local development

**Node.js** 20.19 or newer is required (`engines` in `package.json`).

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (`tsc` + Vite) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

---

## Stack

Vite, React 19, TypeScript, Tailwind CSS v4, and shadcn-style UI primitives. The interface uses thoughtful motion, shader-based hero treatment, and theme support (light / dark) via `next-themes`.

---

## Repository layout

| Path | Role |
| --- | --- |
| `src/pages/` | Page shells and composition |
| `src/components/sections/` | Marketing sections (work, services, process, clients, pricing, testimonials, CTA, footer) |
| `src/components/layout/` | Shared layout pieces (navigation patterns, back-to-top, theme toggle) |
| `src/components/ui/` | Reusable UI and visual treatments |
| `src/providers/` | App-wide providers (e.g. theme) |
| `src/lib/` | Utilities, navigation config, routing helpers |
| `public/` | Static assets |

Path alias: `@/` → `src/`.

Implementation notes and follow-ups live in `docs/TODO.md`.

---

© Velvet Ops. All rights reserved.
