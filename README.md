# Everyday Performance marketing site

Static marketing homepage for Everyday Performance / Everyday Performance OS. Signup is live. Account buttons go to the app:

- https://app.everydayperform.com/signup
- https://app.everydayperform.com/login

There is no email waitlist form and no GoHighLevel webhook on this site. Do not describe the product as a waitlist or as coming soon.

Offer copy on the homepage matches the app: a free account does not require a card. Pro is $14.99/mo or $149.99/yr. The short pricing line and the fine print both say the 7-day Pro trial requires a card and auto-renews. Cancel Pro anytime in account settings.

This repository publishes **https://everydayperform.com/** on GitHub Pages. Custom-domain cutover is applied in this repo: the production build uses the site root, canonical and social URLs point at the apex, and the Pages artifact includes `dist/CNAME`. This repository does not change DNS or the registrar. The GitHub Pages custom domain is already `everydayperform.com`; do not clear it.

## Run locally

Node.js 22 (Node 18+ works). From the repo root:

```bash
npm install
npm run dev
```

Dev server: http://localhost:8080/ (home, `/features`, `/how-it-works`, `/faq`, `/compare`, `/guides`, `/press-kit`, `/privacy`, `/terms`). GitHub Pages serves those directories with a trailing slash.

```bash
npm run build    # production build, base /
npm run preview  # http://localhost:4173/
npm run lint
npm run test
```

`npm run dev` and `npm run build` use Vite base `/`, matching https://everydayperform.com/. Override with `VITE_PAGES_BASE` (must start with `/`) only for a non-root preview path.

## GitHub Pages

Production URL:

https://everydayperform.com/

The workflow is `.github/workflows/deploy.yml`, adapted from [nextweigh-site](https://github.com/jic52194/nextweigh-site): Node 22, `npm ci`, `npm run build` with `VITE_PAGES_BASE=/`, `actions/upload-pages-artifact`, `actions/deploy-pages`. Pull requests run the build only. A push to `main` (or a manual workflow dispatch on `main`) deploys.

### After merge

1. Merge the pull request.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Keep **Custom domain** set to `everydayperform.com`. It is already configured. Do not clear it.
4. Open the Actions tab and confirm **Build & publish GitHub Pages** is green.
5. Open https://everydayperform.com/ and check `/features/`, `/how-it-works/`, `/faq/`, `/compare/`, `/guides/`, `/guides/five-minute-day/`, `/privacy/`, `/terms/`, and `/press-kit/`.

### SPA routes on Pages

`index.html` includes a static hero (headline, Create an Account link to `https://app.everydayperform.com/signup`, pricing line, and health-disclaimer link) so the first paint and non-JS clients are not an empty `#root`. The shell hides once React renders into `#root`. `scripts/spa-fallback.mjs` removes that hero from the route copies below so `/privacy` and `/terms` are not a second homepage, then inserts a static render of the matching legal page. Without that, a failed script leaves an empty `#root` and a blank white document.

GitHub Pages does not rewrite unknown paths to `index.html`. `scripts/spa-fallback.mjs` (run at the end of `npm run build`) writes the built shell to:

- `features/index.html`
- `how-it-works/index.html`
- `faq/index.html`
- `compare/index.html`
- `guides/index.html`
- `guides/five-minute-day/index.html`
- `privacy/index.html`
- `terms/index.html`
- `press-kit/index.html`
- `404.html` (any other path still loads the app, which shows the not-found page)

`npm run build` also writes `dist/sitemap.xml` and `dist/llms.txt`. `public/robots.txt` points at `https://everydayperform.com/sitemap.xml` and allows common AI crawlers. `public/llms.txt` is the LLM-readable summary at `https://everydayperform.com/llms.txt`.

Add a new public route to that list when you add one in `src/App.tsx`. The same script writes `dist/CNAME` with the single line `everydayperform.com`, matching nextweigh-site (`writeFileSync` of `CNAME` into `dist` during the build). The Pages artifact is `dist`, so that file is published with the site.

## DNS for everydayperform.com

Jared confirmed DNS cutover. This repository does not change the registrar, DNS, or GoHighLevel.

Repo-side cutover is applied:

- Production build sets `VITE_PAGES_BASE=/` (the custom domain is the site root).
- Canonical URL, `og:url`, `og:image`, and `twitter:image` in `index.html` use `https://everydayperform.com/`.
- `npm run build` writes `dist/CNAME` whose only line is `everydayperform.com`.
- GitHub Pages **Settings** already has the custom domain `everydayperform.com`. Do not clear it.

DNS at the registrar (not edited here) is the apex `everydayperform.com` A records used by nextweigh.com:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

and `www` CNAME at `jic52194.github.io`. After GitHub reports the HTTPS certificate is ready, check the apex and `www`.

## Pages

| Path | What |
|---|---|
| `/` | Marketing homepage, including `#pricing` |
| `/features/` | Feature deep-dive |
| `/how-it-works/` | How the daily loop works |
| `/faq/` | Pricing, trial, cancellation, and product questions |
| `/compare/` | Category comparison. No named competitor trademarks and no review counts |
| `/guides/` | Guide index |
| `/guides/five-minute-day/` | Busy-day guide |
| `/press-kit/` | Press kit. Inquiries: press@everydayperform.com |
| `/privacy/` | Privacy Policy aligned with the Everyday Performance OS app (last updated October 25, 2026). Contact: support@everydayperform.com |
| `/terms/` | Terms of Use aligned with the app (last updated October 25, 2026). Same contact. The health section keeps the `#health-disclaimer` anchor used by the homepage. |

App-only chrome (in-app back button) is not on these pages. The policy wording matches the app legal pages published October 25, 2026. Navbar and footer are the marketing site chrome. Do not add an LLC name or mailing address unless one is confirmed.

## Assets

Self-hosted in `public/` (logo, homepage hero, social image, press-kit background):

- `logo.png`
- `hero-bg.webp`
- `og.png`
- `press-bg.jpg`
- `jared-c.jpg`
- `jared-c.mp4`

The homepage shows one note from Jared C under the heading A MESSAGE FROM A USER. His role is Member. Unverified third-party quotes (Sarah Miller, Marcus Thorne) are not on the site. His photo and video are the self-hosted files above.

Social images are the self-hosted `og.png` on `everydayperform.com`. The document author is Everyday Performance. No Google Analytics or Meta pixel. The live site's `/__vibe/*` analytics are not included.

The footer links to `/privacy`, `/terms`, and `support@everydayperform.com`. It does not name an LLC or a mailing address. Do not add either unless one is confirmed.

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — production build, Pages SPA fallback, and `dist/CNAME`
- `npm run preview` — serve the production build
- `npm run lint` — ESLint. The imported export currently reports 3 existing errors (`src/lib/sounds.ts` webkit `AudioContext` cast, and two lines in the homepage testimonial card). They are unchanged and are not part of the Pages build.
- `npm run test` — Vitest once
