import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MainFooter from "./index";

// Guards the copyright year staying current instead of the hard-coded "2021".
describe("Footer", () => {
  it("renders the current year in the copyright notice", () => {
    render(<MainFooter />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`Copyright.*${year}`))).toBeInTheDocument();
  });
});
