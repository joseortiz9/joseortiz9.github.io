import React from "react";
import {SectionWrapper} from "./styles";
import {Container} from "react-bootstrap";
import Slider from 'react-slick';
import {PortfolioSliderProps} from "../../styles/SliderSettings";

const Portfolio = () => {
    return(
        <SectionWrapper className="d-flex justify-content-center mt-5 position-relative">
            <Container>
                <h2 className="my-5 text-center">Portfolio</h2>
            </Container>
            <Container fluid={true} className="position-absolute">
                <Slider {...PortfolioSliderProps}>
                    <span>AAA</span>
                    <span>AAA</span>
                    <span>AAA</span>
                    <span>AAA</span>
                </Slider>
            </Container>
        </SectionWrapper>
    );
};

export default Portfolio;