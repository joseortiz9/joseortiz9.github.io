import React from "react";
import Tilt from "react-parallax-tilt";
import {Card} from "react-bootstrap";
import {checkImgPath} from "../../../../services";

const ProjectCard = (props) => {
    const {img, title, shortDesc} = props;
    const imgPath = checkImgPath(img);
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
            <Card className="shadow border-0">
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