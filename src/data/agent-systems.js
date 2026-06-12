// Flagship "AI consultant" work, framed independently — no client names. Each
// entry is a capability Jose builds and consults on, not a deliverable for a
// named engagement.
const AgentSystems = [
    {
        id: "harnesses",
        index: "01",
        title: "Autonomous delivery harnesses",
        summary:
            "End-to-end harnesses that plan an issue, implement the change, run the full validation gate, and open the PR — with human approval kept on the critical path.",
        tags: ["Planning", "Validation gates", "Human-in-the-loop"],
    },
    {
        id: "pipelines",
        index: "02",
        title: "Multi-agent pipelines",
        summary:
            "Orchestrated agent roles — planner, builder, reviewer, optimizer — wired into deterministic stages so output is reproducible and auditable, not a one-shot prompt.",
        tags: ["Orchestration", "Reviewer agents", "Reproducible"],
    },
    {
        id: "mcp",
        index: "03",
        title: "MCP tooling",
        summary:
            "Model Context Protocol servers and tools that connect agents to real systems — repositories, browsers, design loops — under typed, permissioned interfaces.",
        tags: ["MCP servers", "Browser tooling", "Typed interfaces"],
    },
];

export default AgentSystems;
