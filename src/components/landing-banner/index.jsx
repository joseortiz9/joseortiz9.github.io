import React, {useEffect, useRef, useState} from "react";
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
    const [vantaEffect, setVantaEffect] = useState()
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Dots({
                el: vantaRef.current,
                THREE: THREE,
                color: vars.themeWavesDark,
                zoom: 0.6,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        };
    }, [vantaEffect]);

    return(
        <BannerWrapper ref={vantaRef} id="landing-banner" className="d-flex align-items-center">
            <Container>
                <h1 className="banner-title">Hey! I'm Jose</h1>
                <h1 className="banner-title-outline">Full-stack developer</h1>
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
