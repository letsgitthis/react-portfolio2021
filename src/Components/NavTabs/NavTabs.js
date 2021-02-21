import React from "react";
import 'materialize-css';
import { Navbar, NavItem } from 'react-materialize';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {

  const location = useLocation();

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar href="/">John Bentley</Navbar>
        <NavItem className="mr-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} >Home</Link>
          <Link to="/project" className={location.pathname === "/project" ? "nav-link active" : "nav-link"} >Projects</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} >Contact</Link>
        </NavItem>
      </Navbar>
    </header>
  );
}

export default NavTabs;
