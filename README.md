# Mkinnonpastery (Next.js)

Production-ready Next.js (App Router + TypeScript) web app for Mark McKinnon, built for Vercel.

## Canonical app root

This repository root is the deployable app root.

- App source: `src/`
- Original source imagery: `Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/`
- Legacy static site (non-deploy): `archive/legacy-site/`
- Original design/content source snapshot: `Mkinnonpastery-main/Mkinnonpastery-main/public/`

Do **not** expose source archives in deployment outputs:

- `Mkinnonpastery-main/Mkinnonpastery-main/content/`
- `archive/`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
```

## Image pipeline

Generate responsive variants (avif/webp/jpeg):

```bash
npm run optimize:images
```

Generated files are written to `public/assets/images/optimized/` while reading source images from `Mkinnonpastery-main/Mkinnonpastery-main/public/assets/images/`.

## Contact API setup

Create `.env.local` from `.env.example` and set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## Deploy to Vercel

1. Import this repository in Vercel.
2. Framework preset: **Next.js**.
3. Build command: `npm run build`.
4. Output: handled automatically by Next.js.
5. Add environment variables from `.env.example`.
