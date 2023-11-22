import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Footer() {
  return (
    <Navbar fixed="bottom" expand="md" bg="dark" data-bs-theme="dark">
      <Container className="p-2 pe-3 text-light" fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav">
          <Nav.Link href="#action1" className="px-3 px-md-3">
            Home
          </Nav.Link>
          <span className="align-self-center d-none d-md-inline px-md-2">
            |
          </span>
          <Nav.Link href="#action2" className="px-2 px-sm-3 px-md-3">
            About
          </Nav.Link>
          <span className="align-self-center d-none d-md-inline px-md-2">
            |
          </span>
          <Nav.Link href="#action3" className="px-2 px-sm-3 px-md-3">
            Copyright
          </Nav.Link>
          <span className="align-self-center d-none d-md-inline px-md-2">
            |
          </span>
          <Nav.Link href="#action4" className="px-2 px-sm-3 px-md-3">
            Services
          </Nav.Link>
          <span className="align-self-center d-none d-md-inline px-md-2">
            |
          </span>
          <Nav.Link href="#action5" className="px-2 px-sm-3 px-md-3">
            Contact Us
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
