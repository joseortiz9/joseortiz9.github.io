import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutMe from "./index";

describe("AboutMe", () => {
  it("renders the post-Gaembla independent fullstack framing", () => {
    const { container } = render(<AboutMe />);
    const aboutText = container.querySelector("#about-me").textContent;

    expect(aboutText).toMatch(/Colombian fullstack engineer based in Málaga/i);
    expect(screen.getByText(/worked independently as an autónomo/i)).toBeInTheDocument();
    expect(screen.getByText(/Go with Temporal/i)).toBeInTheDocument();
  });

  it("does not leak client names from independent engagements", () => {
    render(<AboutMe />);

    expect(screen.queryByText(/YUM|nvp|oggi|tuplaa/i)).not.toBeInTheDocument();
  });
});
