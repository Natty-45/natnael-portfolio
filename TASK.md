# Task Plan & Goal

## Goal

Build a personal portfolio site for **Natnael Ayalew** (full-stack developer, web & mobile) using Next.js (App Router), TypeScript, and CSS Modules — a fast, static, responsive single-page site that presents the hero, about, projects, experience, and contact sections cleanly and professionally, with one source of truth for site data.

## Scope

- **Framework:** Next.js 16 (App Router, Turbopack), TypeScript
- **Styling:** CSS Modules + global tokens, Space Grotesk / IBM Plex Mono fonts
- **Data:** Single source in `data/` — `site.ts` (nav links, socials, toolbox, stats) and `projects.ts`
- **Behavior:** Scroll-reveal animations, smooth-scroll navigation, contact form → mailto
- **Deploy:** Static prerendering (`next build` produces static output, Vercel-ready)
- **Recruiter-focused:** no fake metrics, no dead links, no demo/dev notes on the page

## Task Plan

| # | Task | Status |
|---|------|--------|
| 1 | Scaffold Next.js app and clean boilerplate | Done |
| 2 | Set up global styles, design tokens, fonts, root layout | Done |
| 3 | Build navigation (desktop rail + mobile top bar/menu) | Done |
| 4 | Build hero section (name, role, summary, CTAs) | Done |
| 5 | Build about section (bio + stats strip) | Done |
| 6 | Build projects section backed by `data/projects.ts` | Done |
| 7 | Build experience section (toolbox + timeline) | Done |
| 8 | Build contact section (validated form → mailto) and footer | Done |
| 9 | Add scroll-reveal animation utility | Done |
| 10 | Replace favicon with custom `app/icon.svg` | Done |
| 11 | Centralize site data in `data/site.ts`; remove duplicated copy | Done |
| 12 | Remove gimmick terminal, dead links, fake claims, dev-note copy | Done |
| 13 | Position as web & mobile full-stack developer | Done |
| 14 | Mobile-responsive review (rail → top bar, single-column grids) | Done |
| 15 | Verify: `next build` passes, `/` returns 200 | Done |
| 16 | Write task plan & goal document (this file) | Done |

## Verification

- `npm run build` → compiles successfully, all routes prerendered as static (`/`, `/_not-found`, `/icon.svg`)
- `npm run dev` → serves the site at http://localhost:3000
- If `/` ever returns 404: kill the dev server, delete `.next`, restart (stale-server cache)

## Future Ideas (not in scope)

- Real project thumbnails + live demo/GitHub links
- Real LinkedIn URL in `data/site.ts`
- Blog section
- Form backend (e.g. Formspree) instead of mailto
- Dark/light theme toggle
- Live deployment + custom domain