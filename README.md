## KPLauncher Website

A modern marketing website for KPLauncher (a SAMP launcher), built with Next.js 15, React 19, TypeScript, Tailwind CSS, and shadcn/ui. The repo also includes a standalone static HTML demo under `website/` for simple hosting.

### Tech stack
- Next.js (App Router)
- React 19 + TypeScript
- Tailwind CSS + `tailwindcss-animate`
- shadcn/ui + Radix UI + lucide-react icons
- PNPM for package management

### Requirements
- Node.js 18+ (LTS recommended)
- PNPM 9+

### Getting started
```bash
pnpm install
pnpm dev
```
Open `http://localhost:3000` in your browser.

Production build:
```bash
pnpm build
pnpm start
```

### Scripts
- `pnpm dev`: Start Next.js dev server
- `pnpm build`: Build for production
- `pnpm start`: Run the production server
- `pnpm lint`: Run Next.js lint

### Project structure (high level)
```
app/                 # App Router entrypoints (layout, page)
components/          # UI components (shadcn/ui in components/ui)
hooks/               # React hooks
lib/                 # Utilities
public/              # Static assets
styles/              # Global styles (legacy or additional CSS)
website/             # Standalone static HTML + Tailwind (no Next.js)
```

Notes:
- shadcn/ui config is in `components.json` (aliases map to `@/components`, `@/lib`, `@/hooks`).
- Global styles for the Next.js app live in `app/globals.css`.
- The `website/` directory is optional and can be deployed independently as a static site (uses CDN Tailwind, no build step).

### Deployment
- Vercel (recommended): Import the repo, framework auto-detect = Next.js. Use PNPM and Node 18+.
- Other hosts: Build with `pnpm build` and run `pnpm start` behind a Node process manager.
- Static alternative: Serve the `website/` directory on any static host.

### License
This project is released under the MIT License. See `LICENSE` for details.


