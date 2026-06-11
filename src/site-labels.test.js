import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The new site is a visually faithful port of the old CRA site, so /old/ and /
// are indistinguishable at a glance. Each page must carry a fixed badge naming
// which deployment it is, and the /old/ snapshot must stay fully self-contained
// (never loading the new Vite bundles, never referencing missing files).
const root = process.cwd();
const newHtml = readFileSync(join(root, "index.html"), "utf-8");
const oldHtml = readFileSync(join(root, "public", "old", "index.html"), "utf-8");

describe("site version badges", () => {
  it("new index.html carries a fixed NEW SITE badge", () => {
    expect(newHtml).toContain('id="site-version-badge"');
    expect(newHtml).toContain("NEW SITE");
  });

  it("old snapshot carries a fixed OLD SITE SNAPSHOT badge", () => {
    expect(oldHtml).toContain('id="site-version-badge"');
    expect(oldHtml).toContain("OLD SITE SNAPSHOT");
  });
});

describe("old snapshot integrity", () => {
  const references = [...oldHtml.matchAll(/(?:href|src)="(\/[^"]+)"/g)].map(
    (m) => m[1],
  );

  it("never loads the new app's Vite bundles", () => {
    expect(oldHtml).not.toMatch(/\/assets\/index-/);
    expect(oldHtml).not.toContain('type="module"');
  });

  it("references only /old/-scoped assets", () => {
    expect(references.length).toBeGreaterThan(0);
    for (const ref of references) {
      expect(ref, `expected ${ref} to be /old/-scoped`).toMatch(/^\/old\//);
    }
  });

  it.each(references)("resolves %s to a file in public/", (ref) => {
    expect(existsSync(join(root, "public", ref))).toBe(true);
  });
});
