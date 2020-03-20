import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap'

class Header extends Component {
render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link}  to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link}  to="/trainer">Trainer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
