# Teudy Encarnación Portfolio

Dark, minimal personal portfolio for a Full Stack Engineer specializing in backend systems, APIs, fintech platforms, and distributed architecture.

## Scripts

```sh
pnpm run dev
pnpm run build
pnpm run preview
pnpm run check
```

## Deployment

The site builds as static Astro output and is ready to deploy on Vercel. The configured site URL is `https://teudy.vercel.app`.

## Architecture

This project uses a screaming architecture: top-level folders inside `src/` describe the product domains before they describe technical layers.

- `src/brand` owns positioning, identity, hero content, and personal-brand copy.
- `src/work` owns portfolio projects and work presentation.
- `src/experience` owns skills, timeline, services, and credibility signals.
- `src/contact` owns calls to action and contact paths.
- `src/app` owns app-level layout, metadata, and global styling.
- `src/shared` owns reusable primitives that do not belong to one domain.

Astro pages stay thin. A route imports domain sections and composes them into a page.

## Styling

Tailwind CSS 4 is wired through Astro's Vite config with `@tailwindcss/vite`. Design tokens for the dark Linear-inspired direction live in `src/app/styles/global.css`, with near-black and white as the dominant colors and electric blue used as the single accent.

## Motion

GSAP powers scroll-triggered reveals from `src/app/animations/scroll.ts`. Add `data-animate`, `data-animate="panel"`, or `data-animate="line"` to opt new elements into the motion system.

The navigation is a React island powered by Framer Motion in `src/app/components/DynamicIslandNav.tsx`. It compresses on scroll into a dynamic-island style pill and includes language, large-text, high-contrast, and reduced-motion controls.

## Internationalization

The site uses the `i18n` npm package with an in-memory static catalog in `src/app/i18n/translations.ts`. English is served at `/`; localized pages are generated at `/de/`, `/it/`, `/pt/`, `/es/`, `/no/`, `/da/`, `/sv/`, and `/is/`.
