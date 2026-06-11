# Capturing the real-browser artifacts

Run these once dependencies are installed and a browser is reachable (e.g. in
aoforge's ui-validator / Chrome DevTools MCP gate). They are deterministic and
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

Via Chrome DevTools MCP: open `http://localhost:4173/`, set the viewport, wait
for the landing banner to settle, then capture a full-page screenshot. With
Puppeteer the equivalent is `page.setViewport(...)` + `page.screenshot({ path,
fullPage: true })`.

## 3. Accessibility report (axe)

Run axe-core against the served homepage and save the JSON:

- `iteration-N/axe-report.json`

Via Chrome DevTools MCP run an accessibility/axe audit on the page; with
Puppeteer use `@axe-core/puppeteer` (`new AxePuppeteer(page).analyze()`) and
write the result. The pass criterion is **zero `critical` and zero `serious`
violations** on the homepage.

## 4. Iteration mapping

- `iteration-1/` = state after the accessibility-correctness pass.
- `iteration-2/` = final state after the polish & resilience pass.

Capturing both lets the before/after diff in [`README.md`](./README.md) be
backed by real pixels and a real axe delta.
