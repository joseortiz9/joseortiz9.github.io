import React, {useState} from "react";
import {ModalWrapper, SectionWrapper} from "./styles";
import {Col, Container, Image, Modal, Row} from "react-bootstrap";
import Slider from 'react-slick';
import {PortfolioSliderProps} from "../../styles/SliderSettings";
import ProjectsData from "../../data/portfolio.json";
import ProjectCard from "./common/project-card";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ReactComponent as CloseButtonSvg } from "../../assets/icons/close-circle.svg";
import {checkImgPath} from "../../services";

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState({"title":"","shortDesc":"","fullDesc":"","img":"https://via.placeholder.com/300x500","intro":"","site":"","repository":""});
    const handleCardClick = (p) => {
        setProject(p);
        setShowModal(true);
    }
    return(
        <>
            <SectionWrapper id="portfolio" className="d-flex justify-content-center section-t-space position-relative">
                <Container className="py-5">
                    <h2 className="mb-5 text-center">
                        Portfolio <span style={{fontStyle: "italic", fontSize: "10px"}}>(In progress*)</span>
                    </h2>
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
                        <Col xs={12} md={5} className="mb-4 mb-md-0">
                            <Image src={checkImgPath(project.img)} alt={project.title} fluid={true} className="rounded shadow" />
                        </Col>
                        <Col xs={12} md={7}>
                            <p className="font-italic">"{project.shortDesc}"</p>
                            <p>{project.fullDesc}</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <a className={"btn btn-solid " + (project.site === "" ? "disabled" : "")} href={project.site} target="_blank" rel="noreferrer">Check site</a>
                    <a className={"btn btn-solid " + (project.repository === "" ? "disabled" : "")} href={project.repository} target="_blank" rel="noreferrer">Check repository</a>
                </Modal.Footer>
            </ModalWrapper>
        </>
    );
};

export default Portfolio;
