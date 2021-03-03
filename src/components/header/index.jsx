import React from "react";
import Sticky from "react-stickynode";
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {HeaderWrapper} from "./styles";

const Header = () => {
    return(
        <HeaderWrapper>
            <Sticky top={0} innerZ={1000} activeClass="sticky-nav-active">
                <Navbar className="m-md-0" fixed="top">
                    <Container className="container-wrapper border-section border-top-0">
                        <NavbarBrand as={"a"} href="/" className="font-weight-bold">
                            Jose Ortiz
                        </NavbarBrand>
                        <Nav>
                            <Nav.Link>Portfolio</Nav.Link>
                            <Nav.Link>About me</Nav.Link>
                            {/*<Nav.Link>Skills</Nav.Link>*/}
                            {/*<Nav.Link>Contact</Nav.Link>*/}
                        </Nav>
                    </Container>
                </Navbar>
            </Sticky>
        </HeaderWrapper>
    );
};

export default Header;