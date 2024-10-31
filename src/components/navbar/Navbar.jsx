import React from "react";
import { Link } from "react-router-dom";
import Home from "../../images/home.png";
import About from "../../images/profile.png";
import Courses from "../../images/fire.png";
import Blog from "../../images/pencil.png";
import Projects from "../../images/portfolio.png";
import Videos from "../../images/video.png";
import Contact from "../../images/contact.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link logoItem">
            <h1 className="logoText">
              A<span>damu</span> A<span>bubakar</span>
            </h1>
            {/* <img src={Logo} alt="Logo" /> */}
          </Link>
        </div>
        <div className="menu">
          <Link className="link" to={"/"}>
            <img src={Home} alt="HomeIcon" />
            Home
          </Link>
          <Link className="link" to={"/about"}>
            <img src={About} alt="AboutIcon" />
            About
          </Link>
          <Link className="link" to={"/courses"}>
            <img src={Courses} alt="CourseIcon" />
            Courses
          </Link>
          <Link className="link" to={"/blog"}>
            <img src={Blog} alt="BlogIcon" />
            Blog
          </Link>
          <Link className="link" to={"/projects"}>
            <img src={Projects} alt="ProjectsIcon" />
            Projects
          </Link>
          <Link className="link" to={"/videos"}>
            <img src={Videos} alt="VideosIcon" />
            Videos
          </Link>
          <Link className="link" to={"/contact"}>
            <img src={Contact} alt="ContactIcon" />
            Contact
          </Link>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
