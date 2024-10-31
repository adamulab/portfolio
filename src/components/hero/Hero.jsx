import React from "react";
import HeroImage from "../../images/myPicSuit.png";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <img src={HeroImage} alt="" />
        </div>
        <div className="right">
          <p>Hi! I am</p>
          <h1>Adamu Abubakar</h1>
          <span>
            With a passion for technology and a commitment to excellence, I
            specialize in building innovative web applications, crafting
            impactful digital marketing strategies, and safeguarding digital
            environments through forensic analysis and incident response.
            Explore my journey, discover my skills, and connect with me to bring
            your next project to life.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
