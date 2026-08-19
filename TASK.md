# Task Plan & Goal

## Goal

Build a personal portfolio site for **Natnael Ayalew** (full-stack developer) using Next.js (App Router), TypeScript, and CSS Modules — a fast, static, responsive single-page site presenting the hero, about, projects, experience, and contact sections with a cohesive dark/terminal-inspired design.

## Scope

- **Framework:** Next.js 16 (App Router, Turbopack), TypeScript
- **Styling:** CSS Modules + global variables, Space Grotesk / IBM Plex Mono fonts
- **Data:** Projects and experience defined as typed local data
- **Behavior:** Scroll-reveal animations, smooth-scroll navigation, contact links
- **Deploy:** Static prerendering (`next build` produces static output, Vercel-ready)

## Task Plan

| # | Task | Status |
|---|------|--------|
| 1 | Scaffold Next.js app and clean boilerplate (default assets, page.module.css) | Done |
| 2 | Set up global styles, design tokens, fonts, and root layout | Done |
| 3 | Build navigation with smooth scrolling and mobile behavior | Done |
| 4 | Build hero section (terminal intro + CTA) | Done |
| 5 | Build about section | Done |
| 6 | Build projects section backed by `data/projects.ts` | Done |
| 7 | Build experience section | Done |
| 8 | Build contact section and footer | Done |
| 9 | Add scroll-reveal animation utilities | Done |
| 10 | Replace favicon with custom `app/icon.svg` | Done |
| 11 | Verify: `next build` passes (TypeScript + static generation) | Done |
| 12 | Write task plan & goal document (this file) | Done |

## Verification

- `npm run build` → compiles successfully, all routes prerendered as static (`/`, `/_not-found`, `/icon.svg`)
- `npm run dev` → serves the site at http://localhost:3000

## Future Ideas (not in scope)

- Blog section
- Dark/light theme toggle
- Live deployment + custom domain
- Real analytics