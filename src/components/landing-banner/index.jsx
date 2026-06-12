import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {BannerWrapper} from "./styles";
import HeroScene from "./hero-scene";
import ScrollLink from "../../common/scroll-link";
import SocialMedia from "../../common/social-media";
import {CV_LINK} from "../../data/consts";

// Hero reframed around the two-line positioning Jose now leads with:
// Senior Software Engineer and independent AI Consultant. The WebGL lattice
// sits behind the copy; on no-WebGL / reduced-motion it degrades to a static
// gradient orb, so the headline is always legible.
const LandingBanner = () => {
    return (
        <BannerWrapper id="landing-banner" className="d-flex align-items-center">
            <HeroScene />
            <Container className="hero-content">
                <span className="kicker">Independent · Málaga, ES</span>
                <h1 className="banner-title">Jose Ortiz</h1>
                <p className="banner-title-outline">
                    Senior Software Engineer<br />
                    <span className="gradient-text">&amp; AI Consultant</span>
                </p>
                <p className="hero-lede">
                    I design and ship production software — and build the autonomous agent
                    systems, multi-agent pipelines and MCP tooling that run on top of it.
                </p>
                <div className="hero-actions d-flex flex-column flex-sm-row">
                    <ScrollLink classes="btn btn-solid" sectionID="agent-systems">
                        Explore the agent work
                    </ScrollLink>
                    <a className="btn btn-solid btn-ghost" href="https://github.com/joseortiz9" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a className="btn btn-solid btn-ghost" href={CV_LINK} target="_blank" rel="noreferrer">
                        CV
                    </a>
                </div>
            </Container>
            <SocialMedia />
            <ScrollLink classes="hero-scroll-cue" sectionID="agent-systems">
                <span>Scroll</span>
            </ScrollLink>
        </BannerWrapper>
    );
};

export default LandingBanner;
