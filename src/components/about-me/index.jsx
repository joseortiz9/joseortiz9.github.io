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
            <section id="about-me" className="section-t-space section-b-sm-space">
                <Container>
                    <h2 className="text-center mb-5">About me</h2>
                    <Row>
                        <Col xs={12} sm={5} className="d-flex justify-content-center">
                            <div style={{maxWidth: "300px"}}>
                                <Image src={MyselfImg} fluid={true} rounded={true} />
                            </div>
                        </Col>
                        <Col xs={12} sm={7} className="mt-4 mt-sm-0">
                            <p>
                                My name is <b>Jose Ortiz</b>. I'm a Hard-working <u>Colombian</u> software developer currently attending ITMO university in Russia,
                                with more than 2 years of experience developing systems to make peoples life easier. I love programming, solving tasks and working in teams.
                            </p>
                            <p>
                                I'm a high performance water polo for more than 10 years and my friends describe me as an adaptable, communicative,
                                and outgoing person, hope to be to your liking and we can develop something new and fancy together!
                            </p>
                            <p>
                                Here you can check some of my <b>skills</b>:
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