import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Footer() {
  return (
    <Navbar fixed="bottom" bg="light" data-bs-theme="light">
      <Container className="justify-content-end">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link href="#action1">Home</Nav.Link>
          <span className="align-self-center px-2">|</span>
          <Nav.Link href="#action2">About</Nav.Link>
          <span className="align-self-center px-2">|</span>
          <Nav.Link href="#action3">Copyright</Nav.Link>
          <span className="align-self-center px-2">|</span>
          <Nav.Link href="#action4">Services</Nav.Link>
          <span className="align-self-center px-2">|</span>
          <Nav.Link href="#action5">Contact Us</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
