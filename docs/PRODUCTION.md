# Production runbook — Nordora Vital

Hardening pass of 28 October 2026 (production-hardening skill v1.1). This file holds the
status matrix, the manual checklist and the follow-ups. Day-to-day commands are in the
README's "Production" section.

## Baseline vs. after

| Check | Before | After |
| --- | --- | --- |
| `npm audit` | 20 (2 critical, 9 high, 7 moderate, 2 low) | 1 high (`xlsx`, dev-only, see BLOCKED) · `npm audit --omit=dev`: 0 |
| Typecheck (`tsc --noEmit`) | 0 errors | 0 errors |
| Lint | 0 errors, 1 warning (in gitignored `outputs/`) | 0 errors, 0 warnings (local working folders are now ignored) |
| Unit tests | none | 66 passing (Vitest, 9 files) |
| E2E tests (Playwright, production build) | none | Desktop Chrome 66 passed · Pixel 7 39 · iPhone 15 38 · iPad 38 · 0 failed (skips are engine/viewport-specific checks) |
| Build route table | 39 `[locale]` routes `ƒ` dynamic, robots/sitemap `ƒ` | unchanged; added `/api/health` `ƒ`, `/llms.txt` `○`, `/manifest.webmanifest` `○` |
| Next.js | 16.2.2 | 16.4.3 (minor; `eslint-config-next` matched) |

## Project surface

- **Hosting:** Vercel, project `nordoravital` (team `woodlandwonderstudioetsy`), Git integration on `main`. `.github/workflows/trigger-vercel-deploy.yml` is a manual fallback deploy.
- **Domains → surfaces** (`src/lib/domains.ts`, routed in `src/proxy.ts`): `nordoravital.com`/`www` = gateway, `pro.nordoravital.com` = professional site, `homeuse.nordoravital.com` = home-use site, `home.nordoravital.com` = 301 to homeuse.
- **Server entry points:** `POST /api/contact`, `POST /api/booking` (booking, pilot and sector forms), `GET /api/health`, `robots.txt`, `sitemap.xml`, `llms.txt`, the proxy. No server actions, webhooks, database or auth.
- **Third parties:** Resend (email, REST API), PostHog EU (analytics, only after consent), Vercel Analytics (cookieless), Cal.com (outbound links only).
- **Generated content:** see "Scripts that rewrite source files" below.

## Status matrix

Legend: DONE = was already in place · DO = fixed in this pass · MANUAL = needs a dashboard or account · N/A · BLOCKED = waits on an approval or a permission.

### 1. Security & data protection

| Item | Status | Where / why |
| --- | --- | --- |
| Dependency audit | DO | `npm audit fix`, Next 16.2.2 → 16.4.3, `resend` SDK removed (its `svix`/`uuid` chain was vulnerable; replaced by a 60-line REST client `src/lib/server/send-email.ts`) |
| `xlsx` high CVEs (no npm fix) | BLOCKED | Approved switch to SheetJS 0.20.3, but the install from cdn.sheetjs.com was refused by the session's permission check. Run: `npm install -D https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz` |
| Env schema & validation | DO | `src/lib/env.ts` (Zod), called from `next.config.ts`: malformed values fail the build; a missing `RESEND_API_KEY` on Vercel production warns. `.env.example` added, `.gitignore` keeps `.env*` ignored except it |
| Secret scan (code + full git history) | DONE | Nothing found: no keys, private keys, credential URLs, webhooks or passcodes. `.env.local` was never committed |
| Endpoint auth | N/A | No accounts or private endpoints; both POST routes are public forms by design |
| Input validation & body limits | DO | `src/lib/server/enquiry.ts` (Zod with length caps), `src/lib/server/read-json.ts` (32 KB cap counted while streaming, 413; non-JSON 415; malformed 400) |
| Webhook signatures | N/A | No webhooks |
| CORS / origin | DONE | No CORS headers are sent, so browsers block cross-origin reads; there are no server actions |
| CSRF & cookies | DONE | Only cookie is `NEXT_LOCALE` (non-sensitive, `SameSite=Lax`, `src/proxy.ts:76`); POST routes require `application/json`, which a cross-site form cannot send |
| Rate limiting | DO + MANUAL | 5 enquiries / IP / 10 min per instance (`src/lib/server/rate-limit.ts`, bounded memory, keyed on first `x-forwarded-for`). Global limit = Vercel Firewall rule (see MANUAL) |
| Security headers | DO | `src/lib/security-headers.ts` via `next.config.ts`: HSTS (preload), nosniff, `X-Frame-Options: DENY`, Referrer-Policy, Permissions-Policy; `poweredByHeader: false` |
| CSP | DO | No-nonce CSP (keeps a future static build possible); PostHog origins derived from `NEXT_PUBLIC_POSTHOG_HOST`; `'unsafe-eval'` dev only; `frame-ancestors 'none'`. No `upgrade-insecure-requests` (HSTS covers it; the directive broke WebKit on localhost) |
| AI safety | N/A | No AI features |
| PII in logs | DO | Booking route logged full enquiries; contact route logged name and email. Both now log JSON lines with an `event` and no personal data (`src/lib/server/log.ts`), covered by a unit test. Error boundaries log only the digest |

### 2. SEO, AEO & discovery

| Item | Status | Where / why |
| --- | --- | --- |
| Sitemap | DONE + DO | `src/app/sitemap.ts` per host with hreflang alternates. Removed `/pilot-program`, which only redirects to `/pilot` |
| robots.txt | DO | `src/app/robots.ts`: now also disallows `/api/`; explicit allow group for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended. No `public/robots.txt` shadows it |
| Canonical & hreflang | DONE | `src/lib/seo.ts` `pageAlternates`, per-language canonicals (commit b63a86b) |
| Metadata parity / one h1 | DONE | Verified by the E2E SEO and smoke specs on one page per template |
| JSON-LD | DO | Pages published `MedicalBusiness` with free-text `medicalSpecialty`, contradicting PRODUCT.md ("must not be presented as a medical treatment"). Now `Service` provided by Nordora Vital SIA with a `BusinessAudience` (`src/components/seo/json-ld.tsx`). `<` is escaped in all JSON-LD. No ratings or reviews were added |
| OG / Twitter | DO | Default share image per surface and `summary_large_image` card in `src/app/[locale]/layout.tsx`; six homeuse pages that replaced `openGraph` without an image now include one |
| Favicon & manifest | DONE + DO | `src/app/icon.png` 192, `apple-icon.png` 180, `favicon.ico`; added `src/app/manifest.ts`. No SVG favicon exists (needs a brand asset, MANUAL) |
| llms.txt | DO | `src/app/llms.txt/route.ts` (static), wording kept to the wellbeing positioning |

### 3. Performance, rendering & caching

| Item | Status | Where / why |
| --- | --- | --- |
| Static vs dynamic | DEFERRED | Every page renders per request because `src/app/[locale]/layout.tsx` reads the host header to pick the surface. Fixing it means moving the surface into the URL the proxy rewrites to; deferred by the user as a separate task. No page became dynamic in this pass |
| Images & media | DONE + DO | `next/image` throughout; videos `preload="metadata"` with poster (`src/components/optimized-background-video.tsx`). Fixed: `sanza, less wired.jpg` 404'd through `next/image` because the comma split `srcset`; references now use the copy `sanza-less-wired.jpg` |
| Fonts | DONE | `next/font` Inter + Manrope, `display: "swap"` |
| Cache headers | DO | `/images/*` and `/downloads/*` get `public, max-age=604800, stale-while-revalidate=86400`; `/_next/static` stays immutable (Next default); API responses `no-store` |
| Bundle & asset hygiene | MANUAL | `public/` is 139 MB (two hero videos are 14 MB and 12 MB). Unreferenced files listed below, nothing deleted (user's choice) |
| Connection pooling | N/A | No database |

### 4. UX resilience

| Item | Status | Where / why |
| --- | --- | --- |
| 404 | DO | Localized `src/app/[locale]/not-found.tsx` (h1, home and contact links); Next adds `noindex`; status 404 checked in E2E |
| Error boundaries | DO | `src/app/[locale]/error.tsx` (localized, `unstable_retry` per the bundled 16.4 docs) and `src/app/global-error.tsx` (inline styles, no dependency on the root layout) |
| Async form states | DONE | All five forms disable submit while sending and show success / error / network messages |
| Hydration | DONE | Cookie banner reads storage through `useSyncExternalStore` with a server snapshot |
| Unsaved form warning | N/A | Single-step short forms |
| Network resilience | DONE | Forms report network errors and never auto-retry |

### 5. Accessibility

| Item | Status | Where / why |
| --- | --- | --- |
| axe on every template | DO | Fixed invalid `<ul>`/`<dl>` structure (`src/components/fade-up.tsx` `as="li"`, `home-client-outcomes.tsx`, `home-story-sections.tsx`) and the contrast failures below. 0 critical/serious on all 17 template pages |
| Skip link | DO | `src/components/skip-link.tsx` in the shared layout; focuses whichever `<main>` the surface renders |
| Focus & dialogs | DO | Contact drawer and mobile menu now move focus in, trap Tab and return focus to the opener, including on Safari, which doesn't focus tapped buttons (`src/lib/use-dialog-focus.ts`); both already closed on Escape. The compare table's horizontal scroll area is now keyboard-focusable (its label is English-only) |
| Accessible forms | DO | Labels existed; added `aria-invalid` + `aria-describedby` linking errors on all five forms |
| Label in name | DONE | Every `aria-label` is on an icon-only control, a logo link (`src/components/site-header.tsx:28`) or a landmark; none overrides visible text |
| Contrast | DO | Approved brand-colour change, see "Contrast" below |
| Reduced motion | DONE | `prefers-reduced-motion` handled in `globals.css` and motion components |

### 6. Legal & compliance

| Item | Status | Where / why |
| --- | --- | --- |
| Privacy & terms | DONE + MANUAL | Pages exist for both surfaces and are linked in the footer. They describe processors generically ("hosting, email delivery, CRM"); naming Vercel, Resend and PostHog is a legal-text decision (MANUAL) |
| Cookie consent | DONE + DO | PostHog only starts after "Accept all" (`src/components/posthog-analytics.tsx`). Added: footer "Cookie settings" reopens the banner; choosing "Essential only" afterwards opts PostHog out and clears its storage. Removed a duplicate banner that homeuse pages rendered twice |
| Account deletion | N/A | No accounts |
| Auth flows | N/A | No auth |

### 7. Operations

| Item | Status | Where / why |
| --- | --- | --- |
| Health check | DO | `GET /api/health` → `{status, time, commit, email}`, `no-store`; `email: "missing"` shows the key problem at a glance |
| Error tracking | MANUAL | No Sentry. Vercel runtime logs now carry structured `event` lines; add Sentry (and its ingest origin to the CSP) if alerts are wanted |
| Structured logging & uptime | DO + MANUAL | JSON log lines; uptime monitor to configure (below) |
| Web Vitals & analytics | DONE | Vercel Analytics + consent-gated PostHog |
| Domain, SSL, email DNS | MANUAL | Below |
| Staging & rollback | DONE + MANUAL | Vercel preview deployments; rollback steps in README |
| Spend caps & backups | MANUAL / N/A | No database to back up; set Vercel and Resend spend alerts |
| Branch protection | MANUAL | Below |

## Contrast (approved and applied)

All failures came from two brand colours. Applied with the user's approval (A–D), using DESIGN.md tokens where they pass:

| Use | Before | Ratio | After | Ratio |
| --- | --- | --- | --- | --- |
| Primary buttons, white text | Sage `#6F8A7A` | 3.75 | Moss `#507040` (hover now darker towards Deep Green) | 5.63 |
| Links and eyebrow labels on beige panels | Sage `#6F8A7A` on `#EFE9E2`–`#F7FAF7` | 3.11–3.57 | Moss `#507040` | 4.67–5.19 |
| Mauve secondary buttons, white text | `#A58592` | 3.29 | New token Mauve Ink `#7D5F6C` (`--brand-secondary-ink`) | 5.64 |
| Compare-page badge text | `#1E2A22` at 60% on `#F2F2F2` (3.93) | 3.93 | Taupe `--muted` `#6D6158` | 5.36 |

Implemented in `src/app/globals.css` (`--brand-primary` alias now points at Moss; `.btn-primary`, `.btn-secondary`, `.link-inline`, `.text-kicker`, `.legal-prose a`), sage text classes swapped to Moss across components, and DESIGN.md updated. Sage stays for borders, icon fields and decoration. The internal deck (`/deck`, noindex) was left unchanged.

Before / after (`/en/contact`, 1280×900): `docs/hardening/contrast-before-contact.png`, `docs/hardening/contrast-after-contact.png`. axe reports no critical or serious violations on any template afterwards.

## Final verification (2 November 2026, after the last change)

`npm run check` (typecheck, lint 0 problems, 66 unit tests), `next build` (exit 0), `playwright test` on all four device projects: 0 failures. The suite now catches real bugs it found during this pass: the comma-named image 404, the sitemap redirect, the missing og:image, the WebKit focus return and the unfocusable scroll region.

## Scripts that rewrite source files

| Script | Writes | Risk found | Now |
| --- | --- | --- | --- |
| `scripts/apply-lv-from-xlsx.mjs` | `messages/lv.json` | "Sheet wins": a dry run against today's `translations-review.xlsx` would change **182** Latvian strings, reverting edits made in `lv.json` since | Dry run by default; prints every key with old and new value; `--write` to apply |
| `scripts/apply-deck-ru-tr-from-xlsx.mjs` | `messages/ru.json`, `messages/tr.json` | Rebuilt both files from `en.json`, wiping all Russian site copy outside the deck | Keeps current ru/tr values, only replaces deck keys; dry run by default, `--write` to apply. Today it stops anyway: the sheet lacks `HowItWorks.block2Paragraph1` |
| `scripts/apply-sanza-branding.mjs` | all `messages/*.json` | Idempotent (avoids double-wrapping) | Unchanged |
| `export-*.mjs`, `generate-deck-copy-xlsx.mjs` | spreadsheets only | Read `messages/`, never write them | Unchanged |

`tests/unit/i18n-parity.test.ts` fails CI if any locale misses or adds a key, so a script run that drops keys is caught. It found and this pass fixed three keys missing in `ru`/`tr` (`Contact.bookingTitle`, `bookingLead`, `bookingCta`; the Russian text is a new translation worth a native check).

## Unreferenced files in `public/` (nothing deleted)

| File | Size |
| --- | --- |
| `public/images/sanza, less wired.jpg` (replaced by `sanza-less-wired.jpg`) | 1.4 MB |
| `public/images/sanza hand electrode 02.jpg` | 1268 KB |
| `public/images/campaign/dentist-fit-03.jpg` | 800 KB |
| `public/images/sanza_animation_1920.gif` | 760 KB |
| `public/images/campaign/between_modalities-02.jpg` | 628 KB |
| `public/images/brand/nordora_logo_trans_01.png` | 560 KB |
| `public/images/brand/nordora_logo_trans.png` | 512 KB |
| `public/images/campaign/dentist-fit-03-wide.jpg` | 396 KB |
| `public/images/homeuse-personal-settings.jpg` | 260 KB |
| `public/images/homeuse-card-personal-wellbeing.jpg` | 260 KB |
| `public/images/campaign/physio_hero.jpg` | 192 KB |
| `public/images/references/lifestyle/bg-waves-abstract-1920.png` | 120 KB |
| `public/images/02_sanza_bf-plates_700.jpg` | 64 KB |
| `public/downloads/sanza-deck-copy.xlsx` (publicly downloadable) | 60 KB |
| `public/images/brand/nordora-logo-spiral.png` | 56 KB |
| `public/{file,globe,next,vercel,window}.svg` (Next starter files) | 4 KB each |
| `public/images/references/sectors/default.svg`, `public/images/MANIFEST.txt` | 4 KB each |

Found by searching `src/` and `messages/` for each file name; a path built at runtime from parts would not be found, so check before deleting.

## MANUAL checklist

### Email (urgent)
1. **Vercel has no `RESEND_API_KEY`**, so the live contact form currently answers 503 and every enquiry is lost (and now the booking, pilot and sector forms too, since they send through the same path). Vercel → project **nordoravital** → Settings → Environment Variables → add `RESEND_API_KEY` (Production and Preview), plus `CONTACT_EMAIL_TO` if the inbox is not `info@nordoravital.com`.
2. Resend → Domains → add `nordoravital.com`, create the DKIM/SPF records it shows at the DNS host, wait for "Verified".
3. Add `CONTACT_EMAIL_FROM` = `Nordora Vital <hello@nordoravital.com>` (any address on the verified domain). Without it mail comes from `onboarding@resend.dev`, which Resend only delivers to the account owner.
4. Redeploy (Deployments → ⋯ → Redeploy), then open `https://pro.nordoravital.com/api/health` and check `"email": "configured"`. Send one real test enquiry yourself.

### Hosting (Vercel)
5. Firewall → Rules → New rule: "Request path equals `/api/contact` or `/api/booking`" → Rate limit 10 requests / 60 s per IP → Deny (429). This is the global limit; the in-code limiter only covers one instance.
6. Environment Variables → delete `CAL_API_KEY` wherever it is set (only in `.env.local` today; no code reads it).
7. Settings → Deployment Protection: keep previews protected; production rollback = Deployments → pick the last good one → ⋯ → **Instant Rollback**.
8. Settings → Billing → Spend Management: set a monthly cap and alert.

### Monitoring
9. Uptime: point a monitor (Vercel Checks, Better Stack or UptimeRobot) at `https://pro.nordoravital.com/api/health` every 5 min; alert on non-200 or `"email":"missing"`.
10. Optional error tracking: create a Sentry Next.js project, run its wizard, and add `https://*.ingest.de.sentry.io` to `connect-src` in `src/lib/security-headers.ts`.

### DNS
11. Apex and `www`: both on Vercel with automatic TLS; keep apex → `www` redirect (Vercel → Domains shows it).
12. `nordoravital.com` sends mail (Resend, and any mailbox provider): one SPF record including every sender (e.g. `v=spf1 include:amazonses.com include:<mailbox provider> -all` per Resend's instructions), DKIM from Resend, and `_dmarc` TXT `v=DMARC1; p=quarantine; rua=mailto:dmarc@nordoravital.com`, moving to `p=reject` once reports are clean.
13. Subdomains that send no mail (`pro`, `homeuse`, `home`): TXT `v=spf1 -all`; DMARC at `_dmarc.<sub>`: `v=DMARC1; p=reject; adkim=s; aspf=s;`.
14. After HSTS has run a while without issues, submit `nordoravital.com` at hstspreload.org (the header already asks for preload, which covers all subdomains).

### Analytics & legal
15. Cookie policy and privacy policy: name PostHog (EU, cookies `ph_*`), Vercel (hosting, cookieless analytics), Resend (email delivery) and Cal.com, per surface. Have the legal text reviewed.
16. PostHog → Project settings → keep session replay off, or confirm input masking, since forms carry health-adjacent personal data.

### Git host (GitHub `butschas-code/nordoravital`, public)
17. Settings → Branches → Add rule for `main` → Require status checks → select **CI / check** → Save. Do this after the first CI run passes.
18. Watch the first CI run: it is the first time the E2E suite runs on Linux, so a failure there may come from the CI environment rather than the site.

## Follow-ups

- **Static rendering** (deferred by the user): move the surface (pro/home/root) from the host header into the path the proxy rewrites to (e.g. `/_pro/[locale]/…`), drop `headers()` from the layout and metadata, then make robots/sitemap per-host route handlers. Expect most pages to become `○`/`●`.
- **`xlsx`** install command above.

## Exposed secrets

None found in the code or in any commit of the git history (searched `git log --all -p` for private keys, `sk_`/`re_`/`AKIA`/`ghp_`/`xox`/`phc_` prefixes, credential URLs, `token=`/`secret=`/`pwd=`, Slack/Discord webhooks). Nothing needs rotating. `.env.local` holds `CAL_API_KEY` and PostHog values locally and has never been committed.
