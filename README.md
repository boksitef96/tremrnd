# TREM Landing Page

Modern, single-page marketing site for **TREM — Technology Research and Engineering (in Medicine)**.  
Built with React and Tailwind CSS, optimised for investors, hospitals, and strategic partners.

## Tech Stack

- React (Vite)
- Tailwind CSS 3
- Netlify-ready contact form
- Intersection Observer powered motion + accessible fallbacks

## Getting Started

```bash
npm install
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm run preview
```

## Customising Content

All editable copy and structured data live in `src/content/siteContent.js`.  
Update section text, metrics, team members, partner lists, and CTA URLs directly in that file.

### Images

- Place optimised assets under `public/images/`.
- Replace `hero-operating-room.png` with a final hero background.
- Provide team headshots and partner logos; set their paths in `siteContent.js`.

## Key Features

- Clinical visual palette (`navy`, `teal`, `gold`) with accessible contrast.
- Hero parallax + Ken Burns effect (disabled when `prefers-reduced-motion`).
- Metric counters and animated bars triggered via Intersection Observer.
- Responsive layout from 320px to wide desktop, tested through Tailwind breakpoints.
- SEO metadata (title, description, Open Graph preview).
- Contact form ready for Netlify Forms (`data-netlify="true"`) with spam honeypot.

## Accessibility & Performance

- Keyboard navigable (visible focus outlines via `focus-outline` utility).
- Motion reduced automatically when users prefer reduced motion.
- Lazy loaded imagery (`loading="lazy"`) where appropriate.
- Font preconnects, small CSS bundle (Tailwind `content` purging enabled).

## Replacing Assets

1. Save final images in `public/images/` (preferably WebP when available).
2. Update references in `src/content/siteContent.js`.
3. Run `npm run build` to verify output size and image usage.

## Deployment

- Static files in `dist/` after `npm run build`.
- Works on Netlify, Vercel (static export), or any static host.
- Ensure contact form endpoint supports Netlify or replace with your backend handler.

## License

Internal use for TREM. Update if distributing publicly.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
