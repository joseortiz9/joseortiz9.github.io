import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {SocialMediaWrapper} from "./styles";

const SocialMedia = () => {
    return(
        <SocialMediaWrapper className="social-container">
            <a href="https://github.com/joseortiz9" className="github" aria-label="Jose Ortiz on GitHub"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/joseortiz09/" className="linkedin" aria-label="Jose Ortiz on LinkedIn"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://www.instagram.com/joseortiz09" className="instagram" aria-label="Jose Ortiz on Instagram"><FontAwesomeIcon icon={faInstagram}/></a>
        </SocialMediaWrapper>
    );
};

export default SocialMedia;
