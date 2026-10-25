# Everyday Performance marketing site

Static marketing homepage for Everyday Performance / Everyday Performance OS. It is the July 2026 Vite + React + TypeScript + Tailwind waitlist export, with the stale waitlist title removed. Account buttons go to the existing app:

- https://app.everydayperform.com/signup
- https://app.everydayperform.com/login

There is no email waitlist form and no GoHighLevel webhook on this site.

This repository publishes a **GitHub Pages preview only**. It does not change DNS for everydayperform.com.

## Run locally

Node.js 22 (Node 18+ works). From the repo root:

```bash
npm install
npm run dev
```

Dev server: http://localhost:8080/ (home, `/press-kit`, `/privacy`, `/terms`).

```bash
npm run build    # production build, base /everydayperform-site/
npm run preview  # http://localhost:4173/everydayperform-site/
npm run lint
npm run test
```

`npm run dev` uses Vite base `/`. `npm run build` defaults to base `/everydayperform-site/` so the preview matches project Pages. Override with `VITE_PAGES_BASE` (must start with `/`).

## GitHub Pages preview

Expected URL after merge, once Pages is enabled:

https://jic52194.github.io/everydayperform-site/

The workflow is `.github/workflows/deploy.yml`, adapted from [nextweigh-site](https://github.com/jic52194/nextweigh-site): Node 22, `npm ci`, `npm run build`, `actions/upload-pages-artifact`, `actions/deploy-pages`. Pull requests run the build only. A push to `main` (or a manual workflow dispatch on `main`) deploys.

### Manual steps (Jared)

1. Merge the pull request.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Leave **Custom domain** empty. Do not add `everydayperform.com`.
4. Open the Actions tab and confirm **Build & publish GitHub Pages** is green.
5. Open https://jic52194.github.io/everydayperform-site/ and check `/privacy`, `/terms`, and `/press-kit`.

### SPA routes on Pages

GitHub Pages does not rewrite unknown paths to `index.html`. `scripts/spa-fallback.mjs` (run at the end of `npm run build`) copies the built shell to:

- `privacy/index.html`
- `terms/index.html`
- `press-kit/index.html`
- `404.html` (any other path still loads the app, which shows the not-found page)

Add a new public route to that list when you add one in `src/App.tsx`. There is **no `CNAME` file**. nextweigh-site writes `CNAME` into its build because that site is meant to serve nextweigh.com. A `CNAME` containing `everydayperform.com` would make Pages treat the custom domain as the site URL and send the github.io preview at it. Do not add one until the cutover below is approved.

## DNS cutover for everydayperform.com

**DO NOT RUN until Jared confirms.**

Nothing in this repo changes the registrar, DNS, GoHighLevel, or the live site. Enabling a custom domain in GitHub Settings is a separate manual step and must wait for that confirmation.

When, and only when, Jared confirms:

1. In DNS, point the apex `everydayperform.com` A records at the GitHub Pages addresses used by nextweigh.com:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Point `www` CNAME at `jic52194.github.io`.
3. Set `VITE_PAGES_BASE=/` for the production build (custom domain is the site root, not `/everydayperform-site/`). Update the canonical URL, `og:url`, and `og:image` in `index.html` from `https://jic52194.github.io/everydayperform-site/` to `https://everydayperform.com/`.
4. Add a `CNAME` file whose only line is `everydayperform.com`, and make sure the Pages artifact includes it (nextweigh places `CNAME` in `dist`). Then, in **Settings → Pages**, set the custom domain to `everydayperform.com`. That settings click is manual and still waits on approval.
5. Wait until GitHub reports the HTTPS certificate is ready, then check apex and `www`.

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
- `npm run build` — production build plus Pages SPA fallback
- `npm run preview` — serve the production build
- `npm run lint` — ESLint. The imported export currently reports 3 existing errors (`src/lib/sounds.ts` webkit `AudioContext` cast, and two lines in the homepage testimonial card). They are unchanged and are not part of the Pages build.
- `npm run test` — Vitest once
