/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// Migrated from Create React App. `outDir: "build"` keeps the CI workflow and
// `gh-pages -d build` deploy working without changes. svgr is configured with a
// named export so existing `import { ReactComponent as X } from "./x.svg"`
// imports keep working during the transition.
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: { exportType: "named" },
    }),
  ],
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
