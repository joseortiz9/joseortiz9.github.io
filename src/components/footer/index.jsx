import {FooterWrapper} from "./styles";
import {Container} from "react-bootstrap";
import {SocialMedia} from "../../common";
import BrandMark from "../../common/brand-mark";

const MainFooter = () => {
    const year = new Date().getFullYear();
    return (
        <FooterWrapper>
            <Container className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-4">
                <span className="footer-brand">
                    <BrandMark size={22} />
                    <span>Copyright &copy; {year} <span className="d-inline d-sm-none">Jose Ortiz</span></span>
                </span>
                <span className="d-none d-sm-inline footer-tag">Senior Software Engineer &amp; AI Consultant</span>
                <span><SocialMedia /></span>
            </Container>
        </FooterWrapper>
    );
};

export default MainFooter;
