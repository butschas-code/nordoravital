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
- Logic lives in `src/lib/locale-from-request.ts` and `src/proxy.ts`.

## Branding placeholders

- Colours and surfaces: CSS variables in `src/app/globals.css` (`--brand-*`).
- Logo: replace `public/brand/logo-placeholder.svg` with your asset (keep path or update `SiteHeader`).
- Font: Inter via `next/font` in `src/app/[locale]/layout.tsx` — swap for your corporate typeface when ready.

### Home hero background

The hero uses `public/references/hero/hero-background.svg` (copied from `References/` during setup). For deployment, replace that file with a calming, professional **JPG/WebP** (e.g. from your `References` image set) and keep the same filename, or update the `backgroundImage` URL in `src/components/home/home-hero.tsx`.

## Enquiry forms

- Contact form and drawer → `POST /api/contact`; booking, pilot and sector forms → `POST /api/booking`.
- Both go through `src/lib/server/enquiry.ts`: rate limit → 32 KB body limit → Zod schema → email via Resend to `CONTACT_EMAIL_TO`. Logs carry no personal data.

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

## Production

Status matrix, manual checklist and follow-ups from the hardening pass: [`docs/PRODUCTION.md`](docs/PRODUCTION.md).

### Verify locally

```bash
npm run check       # typecheck + lint + unit tests
npm run typecheck
npm test            # Vitest unit tests (no network)
npm run build && npm run test:e2e   # Playwright against the production build, 4 devices
```

The first E2E run needs the browsers: `npx playwright install chromium webkit`. The E2E server starts with `RESEND_API_KEY` blanked and the form tests stub the API, so no test can send an email. CI (`.github/workflows/ci.yml`) runs audit → lint → typecheck → unit → build → E2E on every push and pull request.

### Environment variables

| Name | Where | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | server | Sends enquiry emails. Missing in production → forms answer 503, `/api/health` shows `"email":"missing"` |
| `CONTACT_EMAIL_TO` | server | Enquiry inbox (default `info@nordoravital.com`) |
| `CONTACT_EMAIL_FROM` | server | Sender on the Resend-verified domain, e.g. `Nordora Vital <hello@nordoravital.com>` |
| `NEXT_PUBLIC_CAL_DISCOVERY_URL` | client | Discovery-call booking link |
| `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` / `NEXT_PUBLIC_POSTHOG_HOST` | client | Analytics after consent; the host is allowed by the CSP automatically |

`src/lib/env.ts` validates them at build time; see `.env.example`.

### Deploy and roll back

- Deploy: push to `main`; Vercel builds it. Manual fallback: Actions → "Deploy production (Vercel)" → Run workflow.
- Check after deploy: `https://pro.nordoravital.com/api/health` returns `"status":"ok"` and the new `commit`.
- Roll back: Vercel → project **nordoravital** → Deployments → last good deployment → ⋯ → **Instant Rollback**. Then revert the bad commit on `main` so the next push doesn't redeploy it.
- There is no database, so there is nothing to restore.

### Scripts that rewrite `messages/`

`apply-lv-from-xlsx.mjs` and `apply-deck-ru-tr-from-xlsx.mjs` now do a dry run by default and list every key they would change; add `--write` to apply. The Latvian sheet is older than `lv.json` (a dry run would change 182 strings), so review the list before writing. `npm test` fails if a locale gains or loses keys.
