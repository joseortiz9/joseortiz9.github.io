import React, {useEffect, useRef, useState} from "react";
import * as THREE from "vanta/vendor/three.r119.min";
import Dots from  "vanta/src/vanta.waves";
import {BannerWrapper} from "./styles";
import vars from "../../styles/variables.module.scss";
import {Container} from "react-bootstrap";

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
        <BannerWrapper ref={vantaRef} className="d-flex align-items-center">
            <Container>
                <h1 className="banner-title">Jose Ortiz</h1>
                <h1 className="banner-title-outline">Full-stack developer</h1>
                {/*<h4>Colombian ITMO student</h4>*/}
                <div>
                    <a href="https://github.com/joseortiz9">Repositories</a>
                </div>
            </Container>
        </BannerWrapper>
    );
};

export default LandingBanner;