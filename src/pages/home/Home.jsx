import React from "react";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import Services from "../../components/services/Services";
import WorkProcess from "../../components/work/WorkProcess";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <WorkProcess />
      <Testimonial />
    </div>
  );
}

export default Home;
