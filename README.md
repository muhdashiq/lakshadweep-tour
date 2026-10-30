# Lakshadweep Escapes

Static tour-operator site: React, TypeScript, Vite and Framer Motion.

## Edit content

All text, prices, packages and activities live in [`src/data/site.ts`](src/data/site.ts). Field types are in [`src/data/types.ts`](src/data/types.ts).

To add photos, drop files in `public/images/` and set `image: { src: "images/name.jpg", alt: "..." }`. Without `src`, a gradient placeholder shows.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. In the repo settings, set Pages > Source to "GitHub Actions". `.github/workflows/deploy.yml` builds and publishes `dist/`.
