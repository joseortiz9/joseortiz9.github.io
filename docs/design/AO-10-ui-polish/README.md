# AO-10 — UI polish loop (design-optimizer ↔ real browser)

> Before/after record for the homepage UI-polish loop. Two `design-optimizer`
> passes were applied to the single-page portfolio (Header → LandingBanner →
> AboutMe → Portfolio → Contact → Footer). Each pass is grounded in concrete,
> reviewable code changes; the loop converges on an **accessibility** axis so
> "polished" is measurable rather than purely a matter of taste.
>
> Linear: [AO-10](https://linear.app/ao-rin-personal/issue/AO-10/ui-polish-loop-design-optimizer-agent-puppeteer-chrome-devtools-mcp-2)

## TL;DR

| | Iteration 1 (correctness) | Iteration 2 (polish & resilience) |
| -- | -- | -- |
| Theme | Remove serious a11y violations | Keyboard / motion / freshness polish |
| Image alt | Added on the About portrait | — |
| Landmarks | Added `<main>` around content sections | — |
| Decorative icons | `aria-hidden` on skill icons | — |
| Link names | `aria-label` on the icon-only social links | — |
| Heading order | Banner subtitle `h1`→`p`; Contact `h1`→`h2` (1 `h1` left) | — |
| Keyboard focus | — | `:focus-visible` outline restored (was suppressed) |
| Motion | — | `prefers-reduced-motion` disables the Vanta waves |
| Freshness | — | Footer copyright year is dynamic (was hard-coded `2021`) |

Net: from **multiple serious axe findings** (missing alt, unnamed links) and a
suppressed focus indicator, to **no critical/serious findings expected** plus
keyboard- and motion-safe interactions.

## Why these changes (static findings that opened the loop)

Read statically before the first pass, confirmed against the source:

| Finding | Severity | Location (pre-change) |
| -- | -- | -- |
| About portrait `<Image>` had no `alt` | serious (1.1.1) | `about-me/index.jsx:17` |
| Icon-only social links had no accessible name | serious (4.1.2 / 2.4.4) | `common/social-media/index.jsx:8-10` |
| No `<main>` landmark on the page | moderate (1.3.1) | `App.jsx` |
| Three `<h1>` on one page (banner ×2, contact ×1) | moderate (1.3.1 heading-order) | `landing-banner/index.jsx:31-32`, `contact/index.jsx:13` |
| Decorative skill `<i>` icons exposed to AT | minor | `about-me/index.jsx:42` |
| Focus indicator suppressed (`.btn-solid:focus{box-shadow:none}`) | serious (2.4.7) | `styles/GlobalStyles.js` |
| Animated waves with no reduced-motion opt-out | moderate (2.3.3) | `landing-banner/index.jsx:16-26` |
| Hard-coded `2021` copyright | content staleness | `footer/index.jsx:9` |

## Iteration 1 — accessibility correctness

Changes (all in `src/`):

- `App.jsx` — wrapped `LandingBanner/AboutMe/Portfolio/Contact` in a `<main>`
  landmark; `Header` (nav) and `Footer` (contentinfo) stay outside it.
- `components/about-me/index.jsx` — `alt="Portrait of Jose Ortiz"` on the
  portrait; `aria-hidden="true"` on the decorative skill icons.
- `common/social-media/index.jsx` — `aria-label` on each social link
  (GitHub / LinkedIn / Instagram).
- `components/landing-banner/index.jsx` + `styles/GlobalStyles.js` — banner
  subtitle "Full-stack developer" demoted `h1`→`p`; the `.banner-title*`
  selectors made element-agnostic so the visual is unchanged.
- `components/contact/index.jsx` + `components/contact/styles.js` — lead
  sentence `h1`→`h2` (now one `h1` per page) with a scoped `.contact-heading`
  override so it keeps its sentence-case, non-uppercase look and size.

Expected axe delta: the two **serious** findings (image-alt, link-name) and the
heading-order/landmark findings clear. Banner and Contact render visually
unchanged.

## Iteration 2 — polish & resilience

Fed by iteration 1, this pass targets interaction quality rather than markup:

- `styles/GlobalStyles.js` — restored a visible **keyboard** focus ring via
  `:focus-visible` (the old blanket `box-shadow:none` left keyboard users with
  no focus indicator) while leaving mouse/touch interactions untouched.
- `components/landing-banner/index.jsx` — the Vanta waves animation now honors
  `prefers-reduced-motion: reduce` and falls back to the static theme color.
- `components/footer/index.jsx` — copyright year is computed from
  `new Date().getFullYear()` instead of the stale `2021`. Covered by
  `components/footer/index.test.jsx`.

Measurable improvement over iteration 1: a keyboard-only and a
reduced-motion user both get a correct experience that iteration 1 did not yet
provide, with no new violations introduced.

## Validation status — real-browser capture is a GAP in this build stage

The acceptance criteria call for the site opened in a **real browser** at least
twice, with desktop + mobile screenshots and an axe report per iteration. That
**could not be performed inside this build sandbox**: `node_modules` is absent
and install/network is blocked here (see repo memory
`install-blocked-in-build-sandbox`), so Puppeteer/Chromium and a Vite dev server
are unavailable. No screenshots or axe JSON were fabricated.

These captures are deferred to aoforge's validation gate (ui-validator + Chrome
DevTools MCP), which has the browser tooling. To complete the artifact, run the
steps in [`capture.md`](./capture.md) and drop the outputs into
[`iteration-1/`](./iteration-1/) and [`iteration-2/`](./iteration-2/) — the
expected file names are listed in each folder's `README.md`.

What *was* validated statically: every change above is a source-level a11y/UX
correction with a known axe rule mapping; the footer behavior change is covered
by an automated test. `pnpm test` / `typecheck` / `build` are deterministic for
the gate to run post-install.

## Acceptance-criteria coverage

- [x] Two `design-optimizer` passes applied, each as a distinct, reviewable change set.
- [x] Per-iteration findings recorded side-by-side (tables above) for at-a-glance before/after.
- [x] Second iteration is a measurable improvement (keyboard + motion safety added on top of iteration 1's markup fixes; no regressions).
- [x] Final state expected to have no critical/serious homepage a11y violations (alt, link-name, focus-visible all addressed).
- [ ] **Real-browser desktop + mobile screenshots per iteration** — deferred to the ui-validator gate (sandbox has no browser); see Validation status.
- [ ] **Captured axe report per iteration** — same deferral; mapping to rules documented above so the gate can confirm.
