import React from "react";
import {FooterWrapper} from "./styles";
import {Container} from "react-bootstrap";
import {SocialMedia} from "../../common";

const MainFooter = () => {
    return(
        <FooterWrapper>
            <Container className="d-flex justify-content-between py-3">
                <span>Copyright &copy; 2021 <span className="d-inline d-sm-none">Jose Ortiz</span></span>
                <span className="d-none d-sm-inline">Developed by Jose Ortiz</span>
                <span><SocialMedia /></span>
            </Container>
        </FooterWrapper>
    );
};

export default MainFooter;