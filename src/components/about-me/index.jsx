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
                                I'm a Hard-working <u>Colombian</u> software engineer with over 6 years of experience in commercial development, backed by a bachelor's degree in
                                software development from ITMO University.
                            </p>
                            <p>
                                A background of over 15 years in professional sports underscores my strong self-discipline
                                and goal-oriented mindset. Known among colleagues for adaptability, sociability, and teamwork skills. Equipped with extensive
                                development expertise and a commitment to ongoing enhancement, I am eager to make significant contributions as a Fullstack
                                developer in your team. You can rely on my dedication and goal-oriented approach to deliver results.
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
