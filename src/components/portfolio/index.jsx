import React, {useState} from "react";
import {ModalWrapper, SectionWrapper} from "./styles";
import {Col, Container, Modal, Row} from "react-bootstrap";
import Slider from 'react-slick';
import {PortfolioSliderProps} from "../../styles/SliderSettings";
import ProjectsData from "../../data/portfolio.json";
import ProjectCard from "./common/project-card";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ReactComponent as CloseButtonSvg } from "../../assets/icons/close-circle.svg";

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState({"title":"","shortDesc":"","fullDesc":"","img":"","intro":"","link":""});
    const handleCardClick = (p) => {
        setProject(p);
        setShowModal(true);
    }
    return(
        <>
            <SectionWrapper id="portfolio" className="d-flex justify-content-center section-t-space position-relative">
                <Container className="py-5">
                    <h2 className="mb-5 text-center">Portfolio</h2>
                    <Slider {...PortfolioSliderProps} className="portfolio-slider">
                        {
                            ProjectsData.map((project, index) =>
                                <div key={index} onClick={() => handleCardClick(project)}>
                                    <ProjectCard {...project} />
                                </div>)
                        }
                    </Slider>
                    <div className="d-flex justify-content-center button-container">
                        <a className="btn btn-solid dark-border" href="https://github.com/joseortiz9">
                            <FontAwesomeIcon icon={faGithub}/> Check my Github
                        </a>
                    </div>
                </Container>
            </SectionWrapper>

            <ModalWrapper show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                <Modal.Header>
                    <Modal.Title>{project.title}</Modal.Title>
                    <button type="button" className="close" onClick={() => setShowModal(false)}>
                        <span aria-hidden="true"><CloseButtonSvg /></span>
                        <span className="sr-only">Close</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} md={5}>

                        </Col>
                        <Col xs={12} md={7}>

                        </Col>
                    </Row>
                </Modal.Body>
            </ModalWrapper>
        </>
    );
};

export default Portfolio;