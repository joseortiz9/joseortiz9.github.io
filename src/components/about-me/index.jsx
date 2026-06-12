import {Col, Container, Image, Row} from "react-bootstrap";
import MyselfImg from "../../assets/myself.jpg";
import {SkillsWrapper, AboutWrapper} from "./styles";
import {SkillsSliderProps} from "../../styles/SliderSettings";
import Slider from "@ant-design/react-slick";
import SkillsIcons from "../../data/skills.js";
import {useReveal} from "../../common/hooks";

const AboutMe = () => {
    const reveal = useReveal();
    return (
        <>
            <AboutWrapper id="about-me" className="section-t-space section-b-sm-space">
                <Container>
                    <div ref={reveal} className="reveal">
                        <span className="kicker">About</span>
                        <h2 className="mb-5">The engineer behind the systems</h2>
                        <Row className="align-items-center">
                            <Col xs={12} sm={5} className="d-flex justify-content-center">
                                <div className="portrait">
                                    <Image src={MyselfImg} alt="Portrait of Jose Ortiz" fluid={true} />
                                </div>
                            </Col>
                            <Col xs={12} sm={7} className="mt-4 mt-sm-0">
                                <p>
                                    I'm a <u>Colombian</u> fullstack engineer based in Málaga, Spain, with a
                                    software-engineering degree from ITMO University and a bit over six years
                                    building commercial software.
                                </p>
                                <p>
                                    Up to 2024 I spent a couple of years at Gaembla in Cyprus. Since then I've
                                    worked independently as an autónomo, usually across several fullstack
                                    engagements at once — web platforms, internal admin tools, deploy
                                    infrastructure, and design-system work. I pick the stack to fit the project:
                                    mostly TypeScript on Node/NestJS with React, Next, and React Native, and more
                                    recently Go with Temporal on the backend and React with TanStack on the
                                    frontend.
                                </p>
                                <p>
                                    That senior-engineering foundation is what lets me consult on AI seriously:
                                    the agent harnesses and pipelines I build are held to the same production bar —
                                    typed, tested, reviewable. Here are some of the <b>tools</b> I reach for:
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </AboutWrapper>
            <SkillsWrapper>
                <Container fluid={true} className="py-4">
                    <Slider {...SkillsSliderProps} className="skills-slider">
                        {
                            SkillsIcons.map((v, index) => <i key={index} aria-hidden="true" dangerouslySetInnerHTML={{ __html: v.icon }} />)
                        }
                    </Slider>
                </Container>
            </SkillsWrapper>
        </>
    );
};

export default AboutMe;
