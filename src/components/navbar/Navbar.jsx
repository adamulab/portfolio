import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link logoItem">
            <h1 className="logoText">
              Adamu<span>DevLab</span>
            </h1>
            {/* <img src={Logo} alt="Logo" /> */}
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="hamburgerIcon" />
          ) : (
            <FaBars className="hamburgerIcon" />
          )}
        </div>

        {/* Menu Links */}
        <div className={`menu ${isMenuOpen ? "menuOpen" : ""}`}>
          <Link className="link" to={"/"} onClick={() => setIsMenuOpen(false)}>
            <FaHome className="icon" />
            Home
          </Link>
          <Link
            className="link"
            to={"/about"}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUser className="icon" />
            About
          </Link>
          <Link
            className="link"
            to={"/projects"}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaProjectDiagram className="icon" />
            Projects
          </Link>
          <Link
            className="link"
            to={"/contact"}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaMapLocation className="icon" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
