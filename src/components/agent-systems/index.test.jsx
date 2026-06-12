import {describe, it, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import AgentSystemsSection from "./index";

// The flagship AI-consultant section: it must surface the agent/MCP work as
// headline content, and — like every independent-engagement surface — must never
// leak client names (regression guard shared with AboutMe).
describe("AgentSystemsSection", () => {
    it("pedestals the autonomous agent / multi-agent / MCP work", () => {
        render(<AgentSystemsSection />);
        expect(screen.getByText(/autonomous delivery harnesses/i)).toBeInTheDocument();
        expect(screen.getByText(/multi-agent pipelines/i)).toBeInTheDocument();
        expect(screen.getByText(/MCP tooling/i)).toBeInTheDocument();
    });

    it("frames the work as independent consulting", () => {
        const {container} = render(<AgentSystemsSection />);
        expect(container.querySelector("#agent-systems")).toBeInTheDocument();
        expect(screen.getByText(/consult on independently/i)).toBeInTheDocument();
    });

    it("does not leak client names", () => {
        const {container} = render(<AgentSystemsSection />);
        expect(container.textContent).not.toMatch(/YUM|nvp|oggi|tuplaa/i);
    });
});
