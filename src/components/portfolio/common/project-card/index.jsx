import React from "react";
import Tilt from "react-parallax-tilt";
import {Card} from "react-bootstrap";

const ProjectCard = (props) => {
    const {img, title, shortDesc} = props;
    const imgPath = img.substring(0, 4) === "http" ? img : require("../../../../assets/projects/"+img).default;
    return(
        <Tilt
            className="parallax-portfolio-effect"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.13}
            transitionSpeed={1500}
            onClick={props.onClick}
        >
            <Card className="shadow">
                <Card.Img src={imgPath} alt={title} />
                <Card.ImgOverlay className="parallax-inner-wrapper">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{shortDesc}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Tilt>
    );
};

export default ProjectCard;