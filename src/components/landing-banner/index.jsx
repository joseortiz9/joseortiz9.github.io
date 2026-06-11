import {useEffect, useRef} from "react";
import * as THREE from "vanta/vendor/three.r134.min";
import Dots from  "vanta/dist/vanta.waves.min";
import {BannerWrapper} from "./styles";
import vars from "../../styles/variables.module.scss";
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import ScrollLink from "../../common/scroll-link";
import SocialMedia from "../../common/social-media";
import {CV_LINK} from "../../data/consts";

const LandingBanner = () => {
    const vantaRef = useRef(null)
    const vantaEffect = useRef(null)
    useEffect(() => {
        // Respect users who prefer reduced motion: skip the animated waves
        // background (WCAG 2.3.3) and fall back to the static theme color.
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        vantaEffect.current = Dots({
            el: vantaRef.current,
            THREE: THREE,
            color: vars.themeWavesDark,
            zoom: 0.6,
        })
        return () => {
            if (vantaEffect.current) vantaEffect.current.destroy()
        };
    }, []);

    return(
        <BannerWrapper ref={vantaRef} id="landing-banner" className="d-flex align-items-center">
            <Container>
                <h1 className="banner-title">Hey! I'm Jose</h1>
                <p className="banner-title-outline">Full-stack developer</p>
                <div className="d-flex flex-column flex-sm-row mt-5 mt-sm-3">
                    <a className="btn btn-solid" href={CV_LINK} target="_blank" rel="noreferrer">CV</a>
                    <a className="btn btn-solid" href="https://github.com/joseortiz9" rel="noreferrer"><FontAwesomeIcon
                        icon={faGithub}/> Github</a>
                    <ScrollLink classes="btn btn-solid" sectionID="portfolio">Portfolio</ScrollLink>
                </div>
            </Container>
            <SocialMedia/>
        </BannerWrapper>
    );
};

export default LandingBanner;
