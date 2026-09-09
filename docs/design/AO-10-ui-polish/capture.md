> Browser validation policy: Use Codex/Claude native computer or browser use first. Playwright is the only fallback when native tools are unavailable or cannot perform the check.

# Capturing the real-browser artifacts

Run these once dependencies are installed and native browser tools are reachable. They are deterministic and
re-runnable; nothing here is committed automatically.

## 1. Serve the production build

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm preview --port 4173   # serves dist/ at http://localhost:4173/
```

## 2. Screenshots (desktop + mobile)

Per iteration, capture the homepage at two viewports and save into the matching
folder:

- Desktop: 1440×900 → `iteration-N/homepage-desktop.png`
- Mobile: 390×844 (iPhone 12/13) → `iteration-N/homepage-mobile.png`

Via native browser tools: open `http://localhost:4173/`, set the viewport, wait
for the landing banner to settle, then capture a full-page screenshot. If native tools cannot perform the check, use Playwright through the shared
`playwright-browser` skill to set the viewport and capture the screenshot.

## 3. Accessibility report (axe)

Run axe-core against the served homepage and save the JSON:

- `iteration-N/axe-report.json`

Run axe-core through native browser tools if supported; otherwise use the
Playwright fallback to run the audit and write its result. The pass criterion is **zero `critical` and zero `serious`
violations** on the homepage.

## 4. Iteration mapping

- `iteration-1/` = state after the accessibility-correctness pass.
- `iteration-2/` = final state after the polish & resilience pass.

Capturing both lets the before/after diff in [`README.md`](./README.md) be
backed by real pixels and a real axe delta.
