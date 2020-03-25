import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { PropTypes } from 'prop-types';

class Header extends Component {
  render() {
      const {match, location, history} = this.props;
      return (
        <React.Fragment>
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
        {/*
          <div>
            <h1>You are at {location.pathname}</h1>
          </div>
          </React.Fr

        */}
        </React.Fragment>


      );
    }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};
export default withRouter(Header);
