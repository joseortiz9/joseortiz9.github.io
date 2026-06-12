import Sticky from "react-stickynode";
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {HeaderWrapper} from "./styles";
import ScrollLink from "../../common/scroll-link";
import BrandMark from "../../common/brand-mark";
import {useScrolled} from "../../common/hooks";

const Header = () => {
    const scrolled = useScrolled(40);
    return (
        <HeaderWrapper>
            <Sticky top={0} innerZ={1000} activeClass="sticky-nav-active">
                <Navbar className={`brand-nav ${scrolled ? "is-condensed" : ""}`} fixed="top">
                    <Container className="container-wrapper">
                        <NavbarBrand as={ScrollLink} sectionID="landing-banner" classes="navbar-brand">
                            <BrandMark size={26} />
                            <span className="brand-name">Jose Ortiz</span>
                        </NavbarBrand>
                        <Nav>
                            <ScrollLink classes="nav-link" sectionID="agent-systems">Agents</ScrollLink>
                            <ScrollLink classes="nav-link" sectionID="about-me">About</ScrollLink>
                            <ScrollLink classes="nav-link" sectionID="portfolio">Work</ScrollLink>
                            <ScrollLink classes="nav-link" sectionID="contact">Contact</ScrollLink>
                        </Nav>
                    </Container>
                </Navbar>
            </Sticky>
        </HeaderWrapper>
    );
};

export default Header;
