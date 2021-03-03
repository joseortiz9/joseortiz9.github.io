import React from "react";
import {FooterWrapper} from "./styles";
import {Container} from "react-bootstrap";

const MainFooter = () => {
    return(
        <FooterWrapper>
            <Container className="d-flex justify-content-between py-3">
                <span>Copyright &copy; 2021</span>
                <span>Developed by Jose Ortiz</span>
                <span>Social media</span>
            </Container>
        </FooterWrapper>
    );
};

export default MainFooter;