import React from "react";
import Sticky from "react-stickynode";
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {HeaderWrapper} from "./styles";
import ScrollLink from "../../common/scroll-link";

const Header = () => {
    return(
        <HeaderWrapper>
            <Sticky top={0} innerZ={1000} activeClass="sticky-nav-active">
                <Navbar className="m-md-0" fixed="top">
                    <Container className="container-wrapper border-section border-top-0">
                        <NavbarBrand as={ScrollLink} sectionID="landing-banner" classes="font-weight-bold navbar-brand">
                            Jose Ortiz
                        </NavbarBrand>
                        <Nav>
                            <ScrollLink classes="nav-link" sectionID="portfolio">Portfolio</ScrollLink>
                            <ScrollLink classes="nav-link" sectionID="about-me">About me</ScrollLink>
                            <ScrollLink classes="nav-link" sectionID="contact">Contact</ScrollLink>
                        </Nav>
                    </Container>
                </Navbar>
            </Sticky>
        </HeaderWrapper>
    );
};

export default Header;