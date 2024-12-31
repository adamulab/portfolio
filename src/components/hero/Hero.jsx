import React from "react";
import HeroImage from "../../images/myPicSuit.png";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <div className="image-layer"></div>
          <img src={HeroImage} alt="" />
        </div>
        <div className="right">
          <p>Hi! I'm</p>
          <h1>Adamu Abubakar.</h1>
          <span>
            Welcome to <span className="brand">AdamuDevLab</span>, my own corner
            of the internet where I craft dynamic and efficient web and mobile
            applications. With a deep passion for technology and a focus on
            full-stack development, I aim to create seamless digital experiences
            that solve real-world problems.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
