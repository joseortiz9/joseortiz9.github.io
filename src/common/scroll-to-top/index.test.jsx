import { describe, it, expect, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import ScrollToTop from "./index";

// Guards the React 19 refactor that inlined the scroll handler into a single
// mount/unmount effect: the button must stay hidden until the page is scrolled
// past the threshold, and clicking it must smooth-scroll back to the top.
describe("ScrollToTop", () => {
  afterEach(() => {
    window.pageYOffset = 0;
    vi.restoreAllMocks();
  });

  it("stays hidden until the page is scrolled past the threshold", () => {
    const { container } = render(<ScrollToTop />);
    const button = container.querySelector("button");

    expect(button).toHaveClass("d-none");

    window.pageYOffset = 500;
    window.dispatchEvent(new Event("scroll"));

    expect(button).toHaveClass("d-flex");
  });

  it("smooth-scrolls to the top on click", () => {
    const scrollTo = vi.fn();
    window.scrollTo = scrollTo;

    const { container } = render(<ScrollToTop />);
    container.querySelector("button").click();

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
