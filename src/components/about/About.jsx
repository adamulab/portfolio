import React from "react";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="sectionHeader">About Me</h1>
        <div className="content">
          <div className="left">
            <p>
              I’m Adamu Abubakar, a passionate software developer specializing
              in <strong>backend-focused JavaScript and the MERN stack</strong>{" "}
              (MongoDB, Express.js, React, and Node.js). With a sharp focus on
              creating scalable web applications and solving complex problems, I
              bring a results-driven approach to every project I undertake. My
              work is rooted in a deep understanding of web technologies, paired
              with a relentless drive to push the boundaries of what’s possible
              in software development.
            </p>
            <p>
              Through hands-on experience, I’ve developed a knack for turning
              ideas into dynamic, user-centered web solutions. My technical
              expertise spans backend infrastructure development, RESTful API
              design, and cloud integration—making it possible to build
              applications that scale effortlessly as user demands grow. From
              crafting optimized database schemas to implementing robust
              security protocols, I am committed to ensuring that every project
              I work on is built for performance, reliability, and growth.
            </p>
            <p>
              As a backend-focused developer, I thrive on tackling complex,
              multi-faceted problems, whether it's optimizing server-side logic
              for faster response times or enhancing code efficiency to reduce
              technical debt. My love for clean, maintainable code allows me to
              contribute to projects that not only solve immediate challenges
              but also lay the groundwork for future innovations.
            </p>
            <p>
              Whether I’m collaborating with teams or working solo on personal
              projects, my goal is to create impactful digital solutions that
              deliver value and innovation. I’m constantly exploring new
              technologies, frameworks, and best practices to stay ahead of the
              curve and continue growing as a developer.
            </p>
          </div>
          <div className="right">!</div>
        </div>
      </div>
    </section>
  );
}

export default About;
