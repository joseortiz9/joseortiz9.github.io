import { describe, it, expect } from "vitest";
import { checkImgPath } from "./index";

describe("checkImgPath", () => {
  it("returns absolute http(s) urls unchanged", () => {
    const url = "https://example.com/cover.jpg";
    expect(checkImgPath(url)).toBe(url);
  });

  it("resolves a bundled project image filename to a url string", () => {
    const path = checkImgPath("code-placeholder.jpg");
    expect(typeof path).toBe("string");
    expect(path).toContain("code-placeholder.jpg");
  });
});
