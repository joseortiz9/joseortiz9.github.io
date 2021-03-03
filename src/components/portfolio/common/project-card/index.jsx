import React from "react";
import Tilt from "react-parallax-tilt";
import {Card} from "react-bootstrap";

const ProjectCard = (props) => {
    return(
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.1}
            transitionSpeed={2500}
        >
            <Card className="shadow">
                <Card.Img src={props.img} alt={props.title} />
                <Card.ImgOverlay>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.shortDesc}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Tilt>
    );
};

export default ProjectCard;