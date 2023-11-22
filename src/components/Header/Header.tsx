import React, { useState } from "react";
import { Navbar, Nav, Form, Container, NavbarBrand } from "react-bootstrap";
import { FaBusAlt } from "react-icons/fa";
import "./Header.css";

interface Props {
  switchTheme?: () => void;
  showThemeSwitch?: boolean;
}

function Header({ switchTheme, showThemeSwitch }: Props) {
  const [checked, setChecked] = useState<boolean>(false);
  const switchMyTheme = () => {
    setChecked(!checked);
    switchTheme();
  };
  return (
    <>
      <div className="header">
        <Navbar bg="dark" fixed="top" data-bs-theme="dark">
          <Container className="ps-sm-4 ps-md-5" fluid>
            <NavbarBrand className="ps-sm-1 ps-md-3" href="#home">
              <FaBusAlt size={30} /> <span className="ps-2">Bus Service</span>
            </NavbarBrand>
            {showThemeSwitch && (
              <Nav>
                <div className="nav-item text-end pe-sm-5">
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
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default Header;
