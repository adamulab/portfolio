import React from "react";
import "./About.scss";
import AboutOne from "../../images/about-1.jpg";
import AboutTwo from "../../images/about-2.jpg";
import AboutThree from "../../images/about-3.jpg";
import AboutFour from "../../images/about-4.jpg";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="sectionHeader">About Me</h1>
        <div className="content">
          <div className="left">
            <p>I am dedicated to continuous learning and innovation</p>
            <p>
              Leveraging modern tools and technologies to build scalable,
              user-friendly applications.
            </p>
            <p>
              My mission is to combine creativity, technical expertise, and
              problem-solving skills to contribute to impactful projects.
            </p>
          </div>
          <div className="right">
            <div className="about-images">
              <img src={AboutOne} alt="About One" />
            </div>
            <div className="about-images">
              <img src={AboutTwo} alt="About Two" />
            </div>
            <div className="about-images">
              <img src={AboutThree} alt="About Three" />
            </div>
            <div className="about-images">
              <img src={AboutFour} alt="About Four" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
