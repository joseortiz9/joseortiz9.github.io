# My portfolio page

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
| `pnpm start`   | Run the app locally in development mode      |
| `pnpm build`   | Produce a production build in `build/`       |
| `pnpm test`    | Run the test suite                           |
| `pnpm deploy`  | Build and publish `build/` to GitHub Pages   |
