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
import logo from "./Track-a-Book.png";

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
        <Navbar className="navbar" dark expand="sm">
          <Container>
            <NavbarBrand href="/">
              <h1>
                <img src={logo} alt="logo" className="logo" />
                Track-a-Book
              </h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml auto" navbar>
                <NavItem>
                  <NavLink className="navItem" href="/Saved">
                    <h4>Saved Books</h4>
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
