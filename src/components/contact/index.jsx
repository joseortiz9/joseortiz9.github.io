import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ReactComponent as ProgrammerImg} from "../../assets/programmer.svg";
import SocialMedia from "../../common/social-media";
import {ContactSectionWrapper} from "./styles";
import {CV_LINK} from "../../data/consts";

const Contact = () => {
    return(
        <ContactSectionWrapper id="contact" className="d-flex align-items-center text-break">
            <Container>
                <Row>
                    <Col xs={12} md={8} className="mb-5 mb-md-0">
                        <h1>
                            I’m always up for new challenges and opportunities. Feel free to say hi via <b>
                            <a href="mailto:joseortiz122799@gmail.com">joseortiz122799@gmail.com</a></b>
                        </h1>
                        <div className="mt-3">
                            <SocialMedia />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="d-flex flex-column align-items-center">
                            <div className="cv-image-container d-none d-sm-block">
                                <ProgrammerImg />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <a className="btn btn-solid" href={CV_LINK} target="_blank" rel="noreferrer">Download CV</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ContactSectionWrapper>
    );
};

export default Contact;
