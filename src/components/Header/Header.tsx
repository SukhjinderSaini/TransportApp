import React, { useState } from "react";
import { Navbar, Nav, Form, Container, NavbarBrand } from "react-bootstrap";
import { FaBus } from "react-icons/fa";
import "./Header.css";

interface Props {
  switchTheme: () => void;
}

function Header({ switchTheme }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  const switchMyTheme = () => {
    setChecked(!checked);
    switchTheme();
  };
  return (
    <>
      <div className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <NavbarBrand href="#home">
              <FaBus size={30} /> <span className="ps-2">Bus Reports</span>
            </NavbarBrand>
            <Nav>
              <div className="nav-item text-end">
                <div className="form-check form-switch">
                  <Form className="input-switch">
                    <Form.Switch.Input
                      id="custom-switch"
                      onChange={switchMyTheme}
                    />
                    <Form.Switch.Label className="align-self-center ps-2 pt-2">
                      {!checked ? " Normal" : " Fancy"}
                    </Form.Switch.Label>
                  </Form>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default Header;
