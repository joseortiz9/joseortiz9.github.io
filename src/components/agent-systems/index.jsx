import {Container} from "react-bootstrap";
import {SectionWrapper} from "./styles";
import AgentSystems from "../../data/agent-systems";
import {useReveal} from "../../common/hooks";

// Flagship section: pedestals the AI-consultant work. A lead statement plus a
// card grid of the three capability pillars, each revealing on scroll with a
// gradient-edge hover micro-interaction.
const AgentSystemsSection = () => {
    const headingRef = useReveal();
    return (
        <SectionWrapper id="agent-systems" className="section-t-space section-b-space">
            <Container>
                <div ref={headingRef} className="reveal section-head">
                    <span className="kicker">What I consult on</span>
                    <h2>
                        AI systems that <span className="gradient-text">ship themselves</span>
                    </h2>
                    <p className="section-lede">
                        Beyond shipping product, I build the autonomous agent systems that build
                        product — pipelines where AI plans, writes, reviews and validates work
                        behind real approval gates. This is the work I now consult on independently.
                    </p>
                </div>

                <ul className="agent-grid">
                    {AgentSystems.map((item, i) => (
                        <AgentCard key={item.id} item={item} delay={i} />
                    ))}
                </ul>
            </Container>
        </SectionWrapper>
    );
};

const AgentCard = ({item, delay}) => {
    const ref = useReveal();
    return (
        <li
            ref={ref}
            className="reveal agent-card"
            style={{transitionDelay: `${delay * 90}ms`}}
        >
            <span className="agent-index">{item.index}</span>
            <h3 className="agent-title">{item.title}</h3>
            <p className="agent-summary">{item.summary}</p>
            <ul className="agent-tags">
                {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </li>
    );
};

export default AgentSystemsSection;
