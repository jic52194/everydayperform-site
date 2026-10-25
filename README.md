# Everyday Performance marketing site

Static marketing homepage for Everyday Performance / Everyday Performance OS. It is the July 2026 Vite + React + TypeScript + Tailwind waitlist export, with the stale waitlist title removed. Account buttons go to the existing app:

- https://app.everydayperform.com/signup
- https://app.everydayperform.com/login

There is no email waitlist form and no GoHighLevel webhook on this site.

This repository publishes **https://everydayperform.com/** on GitHub Pages. Custom-domain cutover is applied in this repo: the production build uses the site root, canonical and social URLs point at the apex, and the Pages artifact includes `dist/CNAME`. This repository does not change DNS or the registrar. The GitHub Pages custom domain is already `everydayperform.com`; do not clear it.

## Run locally

Node.js 22 (Node 18+ works). From the repo root:

```bash
npm install
npm run dev
```

Dev server: http://localhost:8080/ (home, `/press-kit`, `/privacy`, `/terms`).

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
5. Open https://everydayperform.com/ and check `/privacy`, `/terms`, and `/press-kit`.

### SPA routes on Pages

GitHub Pages does not rewrite unknown paths to `index.html`. `scripts/spa-fallback.mjs` (run at the end of `npm run build`) copies the built shell to:

- `privacy/index.html`
- `terms/index.html`
- `press-kit/index.html`
- `404.html` (any other path still loads the app, which shows the not-found page)

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
| `/` | Marketing homepage |
| `/press-kit` | Press kit. Inquiries: press@everydayperform.com |
| `/privacy` | Privacy Policy, adapted from the Everyday Performance OS app `Privacy.tsx` (June 4, 2026). Contact: support@everydayperform.com |
| `/terms` | Terms of Service, adapted from the app `Terms.tsx` (June 4, 2026). Same contact. Section numbering matches the app source, including the jump from 5 to 7. |

App-only chrome (in-app back button) is not on these pages. The words of the policies are unchanged. Navbar and footer are the marketing site chrome.

## Assets

Self-hosted in `public/` (logo, homepage hero, social image, press-kit background):

- `logo.png`
- `hero-bg.png`
- `og.png`
- `press-bg.jpg`

Testimonial photos and the testimonial video still load from `assets.cdn.filesafe.space`. Move those into `public/` later if that CDN goes away. No Google Analytics or Meta pixel. The live site's `/__vibe/*` analytics are not included.

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — production build, Pages SPA fallback, and `dist/CNAME`
- `npm run preview` — serve the production build
- `npm run lint` — ESLint. The imported export currently reports 3 existing errors (`src/lib/sounds.ts` webkit `AudioContext` cast, and two lines in the homepage testimonial card). They are unchanged and are not part of the Pages build.
- `npm run test` — Vitest once
