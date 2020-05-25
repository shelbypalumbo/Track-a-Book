import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "./Track-A-Book.png";

class NavBar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="warning" className="navbar" dark expand="sm">
          <Container>
            <NavbarBrand href="/">
              <img src={logo} className="logo" /> Track-a-Book
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml auto" navbar>
                <NavItem>
                  <NavLink className="navItem" href="/">
                    Books
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
