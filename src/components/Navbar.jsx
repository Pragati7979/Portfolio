import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    let location = useLocation();
   // console.log(location.pathname)
  return (
    <Menu >
          <Link className={`menu-item ${location.pathname==='/'?"active-item":""}`} to="/">
        Home
      </Link>

          <Link className={`menu-item ${location.pathname==='/about'?"active-item":""}`} to="/about">
        About
        </Link>

        <Link className={`menu-item ${location.pathname==='/projects'?"active-item":""}`} to="/projects">
        Projects
        </Link>
        <Link className={`menu-item ${location.pathname==='/skills'?"active-item":""}`} to="/skills">
        Skills
        </Link>

      <Link className={`menu-item ${location.pathname==='/contact'?"active-item":""}`} to="/contact">
        Contact
    </Link>
    </Menu>
  );
};

export default Navbar