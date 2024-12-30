import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

function Navbar() {
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
        <div className="menu">
          <Link className="link" to={"/"}>
            <FaHome className="icon" />
            Home
          </Link>
          <Link className="link" to={"/about"}>
            <FaUser className="icon" />
            About
          </Link>
          {/* <Link className="link" to={"/courses"}>
            <img src={Courses} alt="CourseIcon" />
            Courses
          </Link>
          <Link className="link" to={"/blog"}>
            <img src={Blog} alt="BlogIcon" />
            Blog
          </Link> */}
          <Link className="link" to={"/projects"}>
            <FaProjectDiagram className="icon" />
            Projects
          </Link>
          {/* <Link className="link" to={"/videos"}>
            <img src={Videos} alt="VideosIcon" />
            Videos
          </Link> */}
          <Link className="link" to={"/contact"}>
            <FaMapLocation className="icon" />
            Contact
          </Link>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
