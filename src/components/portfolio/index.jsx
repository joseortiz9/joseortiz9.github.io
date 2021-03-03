import React from "react";
import {SectionWrapper} from "./styles";
import {Container} from "react-bootstrap";
import Slider from 'react-slick';
import {PortfolioSliderProps} from "../../styles/SliderSettings";
import ProjectsData from "../../data/portfolio.json";
import ProjectCard from "./common/project-card";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Portfolio = () => {
    return(
        <SectionWrapper id="portfolio" className="d-flex justify-content-center section-t-space position-relative">
            <Container className="py-5">
                <h2 className="mb-5 text-center">Portfolio</h2>
                <Slider {...PortfolioSliderProps} className="portfolio-slider">
                    {
                        ProjectsData.map((project, index) => <ProjectCard key={index} {...project} />)
                    }
                </Slider>
                <div className="d-flex justify-content-center button-container">
                    <a className="btn btn-solid" href="https://github.com/joseortiz9"><FontAwesomeIcon icon={faGithub}/> Check my Github</a>
                </div>
            </Container>
        </SectionWrapper>
    );
};

export default Portfolio;