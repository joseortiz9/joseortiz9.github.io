# My portfolio page

Built with [Vite](https://vitejs.dev/) and React. TypeScript is the default for
new code (`.ts` / `.tsx` work out of the box); existing `.js` / `.jsx` files keep
working during the transition.

## Setup

This project uses [pnpm](https://pnpm.io/) as its package manager and is pinned to
Node 20 LTS (see `.nvmrc` / `.node-version`).

```bash
# 1. Use the pinned Node version (nvm/fnm read .nvmrc automatically)
nvm use            # or: fnm use

# 2. Enable pnpm (ships with Node via Corepack)
corepack enable

# 3. Install dependencies
pnpm install
```

## Scripts

| Command        | Description                                  |
| -------------- | -------------------------------------------- |
| `pnpm dev`       | Run the Vite dev server with hot reload      |
| `pnpm start`     | Alias for `pnpm dev`                         |
| `pnpm build`     | Produce a production build in `build/`       |
| `pnpm preview`   | Preview the production build locally         |
| `pnpm test`      | Run the test suite (Vitest)                  |
| `pnpm typecheck` | Type-check the project with `tsc --noEmit`   |
| `pnpm deploy`    | Build and publish `build/` to GitHub Pages   |
