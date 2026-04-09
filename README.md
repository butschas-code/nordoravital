# Nordora Vital — website

Next.js (App Router) with **next-intl**, Tailwind CSS v4, and locale-aware routing (`de`, `en`, `lv`). Intended for deployment on **Vercel** (free tier compatible).

## Scripts

```bash
npm run dev    # local development
npm run build  # production build
npm run start  # run production server locally
npm run lint
```

## Internationalisation

- Message files: `messages/de.json`, `messages/en.json`, `messages/lv.json` (add or edit keys as needed).
- Default language is resolved in this order: **cookie** (`NEXT_LOCALE`) → **country** from Vercel (`x-vercel-ip-country`, mapped e.g. DE/AT/CH → `de`, LV → `lv`) → **Accept-Language** → fallback **`en`**.
- Logic lives in `src/lib/locale-from-request.ts` and `src/middleware.ts`.

## Branding placeholders

- Colours and surfaces: CSS variables in `src/app/globals.css` (`--brand-*`).
- Logo: replace `public/brand/logo-placeholder.svg` with your asset (keep path or update `SiteHeader`).
- Font: Inter via `next/font` in `src/app/[locale]/layout.tsx` — swap for your corporate typeface when ready.

### Home hero background

The hero uses `public/references/hero/hero-background.svg` (copied from `References/` during setup). For deployment, replace that file with a calming, professional **JPG/WebP** (e.g. from your `References` image set) and keep the same filename, or update the `backgroundImage` URL in `src/components/home/home-hero.tsx`.

## Booking form

- Client form: `src/components/booking-form.tsx` (react-hook-form + zod).
- Demo API: `src/app/api/booking/route.ts` — replace with email, CRM, or a headless CMS workflow.

## Deploy on Vercel

1. Push this `web` folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. In [Vercel](https://vercel.com), **Add New Project** → import the repo.
3. Set **Root Directory** to `web` if the repo contains other folders (e.g. `References`).
4. Framework preset: **Next.js**. Deploy — builds run `next build` automatically.

### Connect **nordoravital.com**

1. In the Vercel project: **Settings → Domains → Add** → enter `nordoravital.com` and `www.nordoravital.com` if you use both.
2. Follow Vercel’s DNS instructions at your registrar:
   - Often an **A** record to Vercel’s IP, or **CNAME** `cname.vercel-dns.com` for `www`.
3. Wait for DNS propagation (minutes to hours). Enable **HTTPS** (automatic on Vercel once the domain verifies).

Optional: set `metadataBase` in `src/app/[locale]/layout.tsx` if the canonical URL should differ from `https://nordoravital.com`.

## Optional CMS later

Contentful, Sanity, or similar can feed copy into the same routes; keep JSON files for UI chrome or migrate strings gradually — no CMS is required for the current static-message setup.
