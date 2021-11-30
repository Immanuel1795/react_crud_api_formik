import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"

function Header(props) {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
     
    >
      <Navbar.Brand
        className="navbar-brand-name"
      >
        Freelance
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            <Navbar.Text className="nav-text">Users</Navbar.Text>
          </Link>

          <Link to="/add-users" className="nav-link active">
            <Navbar.Text className="nav-text">Add Users</Navbar.Text>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
