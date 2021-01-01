import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">John Bentley</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >Home</Link>
          <Link to="/project" className={location.pathname === "/project" ? "nav-link active" : "nav-link"} >Projects</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} >Contact</Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
