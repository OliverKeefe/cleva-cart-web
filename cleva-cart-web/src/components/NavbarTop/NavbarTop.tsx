import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
    background-color: rgb(0, 0, 0);

    .navbar-brand, .nav-link {
        font-family: Gilroy-Bold;
        line-height: 1.5;
        font-weight: 400;
        color: ${(props) => props.theme.colors.white};

        &:hover {
            color: ${(props) => props.theme.colors.dark};
        }
    }
`;

const StyledNavLink = styled(Nav.Link)`
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
`;

const NavbarTop: React.FC = () => {
    return (
        <StyledNavbar expand="lg" variant="light" fixed="top">
            <Container fluid> {/* Fluid container to make it full width */}
                <Navbar.Brand href="/">ClevaCart.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
};

export default NavbarTop;