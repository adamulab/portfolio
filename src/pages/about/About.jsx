import React from "react";
import About from "../../components/about/About";
import "./About.scss";
import Skills from "../../components/skills/Skills";

function AboutPage() {
  return (
    <div className="about">
      <About />
      <Skills />
    </div>
  );
}

export default AboutPage;
