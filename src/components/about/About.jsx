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
            <p>
              I am Adamu Abubakar, a passionate and results-driven Software
              Developer, Digital Marketer, and Digital Content Creator. With a
              strong foundation in JavaScript and expertise in the MERN stack, I
              build innovative and user-focused applications that solve
              real-world problems.
            </p>
            <p>
              Beyond coding, I enjoy creating engaging digital content, teaching
              coding to beginners, and leveraging marketing strategies to drive
              impactful results. I am committed to lifelong learning,
              continuously enhancing my skills to deliver exceptional value to
              clients and projects.
            </p>
            <p>
              As a dedicated family person and empathic individual, I bring a
              unique balance of technical expertise and human connection to my
              work, always striving to make a meaningful difference. My mission
              is to combine creativity, technical expertise, and problem-solving
              skills to contribute to impactful projects.
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
