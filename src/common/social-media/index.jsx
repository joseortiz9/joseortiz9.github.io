import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {SocialMediaWrapper} from "./styles";

const SocialMedia = () => {
    return(
        <SocialMediaWrapper className="social-container">
            <a href="https://github.com/joseortiz9" className="github"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/joseortiz09/" className="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://www.instagram.com/joseortiz09" className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
        </SocialMediaWrapper>
    );
};

export default SocialMedia;
