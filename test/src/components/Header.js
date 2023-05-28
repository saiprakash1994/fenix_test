import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img src="images\fenix-insight-logo-white.png" style={{ height:40 }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="ml-auto "
            style={{ maxHeight: '100px' }}
            navbarScroll >
            <Nav.Link >About Us</Nav.Link>
            <Nav.Link >Contact US</Nav.Link>
            <Nav.Link >Pricing Packages</Nav.Link>
            <Nav.Link >Get Started Now</Nav.Link>
            <Nav.Link >Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  );
};

export default Header;
