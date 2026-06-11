# AO-11 — Deployed GitHub Pages build verification

> Closing gate for the refresh: confirm the deployed site at
> <https://joseortiz9.github.io/> matches the new local build and is healthy.
>
> Linear: [AO-11](https://linear.app/ao-rin-personal/issue/AO-11/validate-the-deployed-github-pages-build)

## What this build changed

The planning pass found three concrete defects behind the "validate the deploy"
chore. This build fixes the two that are decision-light and automatable, and
records the operator/CI-gated remainder.

| AC | Status | Where |
| -- | -- | -- |
| Favicon resolves (no 404s) | **Fixed** — `index.html` referenced five missing `/favicon/*` files; replaced with one shipped `public/favicon.svg` | `index.html`, `public/favicon.svg` |
| Web manifest resolves | **Fixed** — referenced a missing `/favicon/site.webmanifest`; now points at the (previously unused) `public/manifest.json`, refreshed to the current identity | `index.html`, `public/manifest.json` |
| Open Graph / social preview present | **Fixed** — no OG/Twitter tags existed; added `og:*` + `twitter:*` with `og:image` → `public/social-preview.jpg` | `index.html`, `public/social-preview.jpg` |
| Page title reflects identity | Already correct (`Jose Ortiz | Software Engineer`) | `index.html` |
| Missing-asset regression guard | **Added** — a Vitest check fails if any local `href`/`src` in `index.html` lacks a file in `public/` | `src/static-assets.test.js` |

`og:description` is kept identical to the existing `<meta name="description">` so
the social card matches the rendered page. The bio recalibration from
[AO-5](../identity/AO-5-about-bio-framing.md) is a separate `about-me` edit and is
intentionally **not** pulled into the meta here.

## Verification performed (code level)

- **Date:** 2026-06-12
- **Environment:** static review + Node-level dry run of the asset guard; the
  sandbox has no `node_modules` (install is network-blocked), so build/preview and
  a real browser were not run in this session.
- Confirmed every root-relative `href`/`src` in `index.html`
  (`/favicon.svg`, `/manifest.json`) resolves to a file under `public/`; the Vite
  dev entry `/src/index.jsx` is correctly excluded by the guard.
- Confirmed `public/manifest.json` is valid JSON and references `favicon.svg`.
- Base path is `/` (Vite default) which is correct for a `user.github.io` root
  site; no base override needed.

## Open validation gaps (operator / CI gated)

These cannot be honestly closed from the build sandbox and are handed to the
review gate / operator:

1. **Live browser validation against the deployed site.** Per the plan, the
   deployed `gh-pages` build still serves the pre-refresh CRA design — AO-7…AO-10
   are unmerged and the workflow only deploys on push to `master`. The screenshot
   diff, console-error/warning check, and mobile-viewport (no horizontal scroll)
   checks must run after those branches merge and redeploy. Capture date + browser
   used there and append to this note.
2. **Favicon as final identity art.** `public/favicon.svg` is a neutral "JO"
   monogram chosen as a safe default so the deploy has no 404 and a real icon.
   Replace with finalized brand art if/when the operator provides it.
3. **Social preview image.** `public/social-preview.jpg` reuses the existing
   portrait (`src/assets/myself.jpg`, 2000×2032). It works as a `summary_large_image`
   card; swap for a purpose-built 1200×630 image if a dedicated card is wanted.
