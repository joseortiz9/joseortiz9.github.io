import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import MyselfImg from "../../assets/myself.jpg";
import {SkillsWrapper} from "./styles";
import {SkillsSliderProps} from "../../styles/SliderSettings";
import Slider from "react-slick";
import SkillsIcons from "../../data/skills.js";

const AboutMe = () => {
    return(
        <>
            <section id="about-me" className="section-t-space section-b-space">
                <Container>
                    <h2 className="text-center mb-5">About me</h2>
                    <Row>
                        <Col xs={5}>
                            <Image src={MyselfImg} fluid={true} />
                        </Col>
                        <Col xs={7}>
                            <p>
                                Hard-working <u>Colombian</u> software developer currently attending ITMO university in Russia, with more than 2 years of
                                work experience. Aiming to leverage a proven knowledge of programming, full-stack web development, and
                                software architecture skills to successfully fill the Web Developer role at your company.
                                I'm a highperformance athlete for more than 10 years and I'm frequently praised as an adaptable, communicative,
                                and outgoing person by my peers, I can be relied upon to help your company achieve its goals.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <SkillsWrapper>
                <Container fluid={true} className="py-4">
                    <Slider {...SkillsSliderProps} className="skills-slider">
                        {
                            SkillsIcons.map((v, index) => <i key={index} dangerouslySetInnerHTML={{ __html: v.icon }} />)
                        }
                    </Slider>
                </Container>
            </SkillsWrapper>
        </>
    );
};

export default AboutMe;