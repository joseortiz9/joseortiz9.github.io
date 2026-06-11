import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Portfolio from "./index";
import ProjectsData from "../../data/portfolio.json";

// Smoke test guarding the React 19 carousel swap (react-slick ->
// @ant-design/react-slick): the project slides must still mount and render.
describe("Portfolio carousel", () => {
  it("renders a slide for each project", () => {
    render(<Portfolio />);
    for (const { title } of ProjectsData) {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    }
  });

  it("renders the GitHub call-to-action", () => {
    render(<Portfolio />);
    expect(screen.getByText(/Check my Github/i)).toBeInTheDocument();
  });
});
