# Lakshadweep Escapes

Static tour-operator site: React, TypeScript, Vite and Framer Motion.

## Edit content

All text, prices, packages, quotes and couple extras live in [`src/data/site.ts`](src/data/site.ts). Field types are in [`src/data/types.ts`](src/data/types.ts).

## Add photos

Every photo has a named slot. Save your file at the path below and it replaces the illustrated placeholder, with no code change. When you run `npm run dev`, each empty slot shows the path it expects.

| Slot | Save as (inside `public/`) |
|---|---|
| Hero background | `images/hero.jpg` |
| Link preview on WhatsApp and social apps (1200x630) | `images/share.jpg` |
| Activities | `images/activities/scuba.jpg`, `snorkeling.jpg`, `glass-boat.jpg`, `kayaking.jpg`, `sunset-cruise.jpg`, `fishing.jpg` |
| Packages | `images/packages/kalpitti-classic.jpg`, `kalpitti-plus.jpg`, `three-island-explorer.jpg`, `kalpitti-dive-special.jpg` |
| Memory wall | `images/memories/sunset.jpg`, `lagoon.jpg`, `dive.jpg`, `anniversary.jpg`, `family.jpg`, `turtle.jpg`, `dinner.jpg`, `footprints.jpg` |

Photos are cropped to fit, so keep the subject near the middle. Aim for under 300 KB each so the site stays quick on phones.

## Sound

The sea sound is generated in the browser, so there's no audio file to license. To use a real recording instead, save it as `public/audio/ocean.mp3`. Browsers don't allow sound before a visitor interacts with the page, so it starts from the "Play sea sounds" button.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. In the repo settings, set Pages > Source to "GitHub Actions". `.github/workflows/deploy.yml` builds and publishes `dist/`.
