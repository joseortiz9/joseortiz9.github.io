import {describe, it, expect, afterEach} from "vitest";
import {render, screen, cleanup} from "@testing-library/react";
import LandingBanner from "./index";

// Critical regression guard (AO-11 class of bug): in a headless / no-WebGL
// environment (jsdom has no WebGL context) the hero must still render its copy
// rather than a blank canvas, and must never throw. The reduced-motion path is
// exercised the same way: both fall back to the static gradient orb.
describe("LandingBanner hero", () => {
    afterEach(cleanup);

    it("renders the new SWE + AI Consultant positioning without WebGL", () => {
        expect(() => render(<LandingBanner />)).not.toThrow();
        expect(screen.getByText("Jose Ortiz")).toBeInTheDocument();
        expect(screen.getByText(/Senior Software Engineer/i)).toBeInTheDocument();
        expect(screen.getByText(/AI Consultant/i)).toBeInTheDocument();
    });

    it("does not draw a WebGL canvas when no context is available", () => {
        const {container} = render(<LandingBanner />);
        expect(container.querySelector("canvas")).toBeNull();
    });

    it("renders content under prefers-reduced-motion", () => {
        const original = window.matchMedia;
        window.matchMedia = (query) => ({
            matches: /prefers-reduced-motion/.test(query),
            media: query,
            onchange: null,
            addEventListener: () => {},
            removeEventListener: () => {},
            addListener: () => {},
            removeListener: () => {},
            dispatchEvent: () => false,
        });
        try {
            expect(() => render(<LandingBanner />)).not.toThrow();
            expect(screen.getByText("Jose Ortiz")).toBeInTheDocument();
        } finally {
            window.matchMedia = original;
        }
    });

    it("does not leak client names", () => {
        const {container} = render(<LandingBanner />);
        expect(container.textContent).not.toMatch(/YUM|nvp|oggi|tuplaa/i);
    });
});
