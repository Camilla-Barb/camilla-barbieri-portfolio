# camilla-barbieri-portfolio

## Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | Next.js 16.3.0-canary.46 (App Router) | Must match `@next/swc-darwin-arm64` for native builds on Apple Silicon |
| Styling | Tailwind v4 + `tw-animate-css` | **No `tailwind.config.js`** — CSS-first via `@import "tailwindcss"` in `app/globals.css` |
| UI library | shadcn/ui (Radix-Nova style) | icon: lucide, style: `radix-nova`, RSC: yes |
| Animation | framer-motion | All section components are `"use client"` for animation hooks |
| Path alias | `@/` → project root | e.g. `import { cn } from "@/lib/utils"` |
| Lint | `eslint` (eslint-config-next core-web-vitals + typescript) | |

## Commands

```sh
npm run dev     # next dev (Turbopack)
npm run build   # next build
npm run lint    # eslint
```

**Run order before committing:** `npm run lint && npm run build`

## Portfolio structure

All content lives in `lib/data.ts`. Sections in `components/sections/`:

| Section | Component | Key contents |
|---|---|---|
| Hero | `hero.tsx` | Name, role, tagline, specialty tags, social links, scroll indicator |
| About | `about.tsx` | Bio, highlights grid |
| Metrics | `metrics.tsx` | Animated counters (scroll-triggered) |
| Projects | `projects.tsx` | 4 enterprise project cards with tags + metrics |
| Skills | `skills.tsx` | 6 category groups with skill lists |
| Workflow | `workflow.tsx` | 5-step timeline with connecting line |
| Contact | `contact.tsx` | Availability, contact info, social buttons, footer |

## Conventions

- **No test runner configured** — do not add tests without installing a runner first.
- **Sections** use `<section id="...">` with `py-24 md:py-32` padding and `max-w-6xl mx-auto px-6` containers.
- **Heading pattern**: `<p>` uppercase label (`text-indigo-400`) above `<h2>` with gradient accent via `bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent`.
- **Project cards**: `rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8` with tag pills and metric badge.
- **Skill groups**: `rounded-xl border border-zinc-800 bg-zinc-900/50 p-6` with bullet list.
- **Workflow**: Desktop timeline via left vertical gradient line + dot; mobile: inline number badge.
- **Dark mode**: Default via `.dark` class on `<html>`. CSS variables use `oklch()` color space.
- **Accessibility**: Skip link in layout, semantic HTML (`<section>`, `<article>`, `<nav>`), `aria-label` on icon-only links, proper heading hierarchy (`h1 → h2 → h3`), `focus-visible` ring styles.
- **Icons**: Use inline SVG for brand icons (LinkedIn, GitHub) since this lucide-react version lacks them; use lucide for generic icons (ArrowDown, Mail, Phone, MapPin).
- **Animations**: `motion.div` with `whileInView` + `viewport: { once: true, margin: "-100px" }` for scroll entrance. `staggerChildren` for lists. No `useEffect` mount guards needed.
- **Button component** uses `data-slot`, `data-variant`, `data-size` attributes and Radix `Slot.Root` for `asChild`.
- `class-variance-authority` (CVA) + `clsx` + `tailwind-merge` (`cn()` in `lib/utils.ts`) for class composition.
