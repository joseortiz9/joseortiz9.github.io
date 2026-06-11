import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Guards against the class of bug AO-11 found: index.html referencing favicon /
// manifest / social-preview assets that don't exist in public/, producing 404s on
// the deployed GitHub Pages build. Every root-relative href/src in index.html must
// resolve to a file Vite will copy from public/ (the /src/* dev entry is resolved
// by Vite itself, not served from public/, so it is excluded).
describe("index.html static assets", () => {
  const root = process.cwd();
  const html = readFileSync(join(root, "index.html"), "utf-8");

  const references = [...html.matchAll(/(?:href|src)="(\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((ref) => !ref.startsWith("/src/"));

  it("references at least one local asset", () => {
    expect(references.length).toBeGreaterThan(0);
  });

  it.each(references)("resolves %s to a file in public/", (ref) => {
    expect(existsSync(join(root, "public", ref))).toBe(true);
  });
});
