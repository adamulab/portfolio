import React from "react";
import "./Skills.scss";

const skillsData = [
  {
    category: "Frontend Development",
    details: [
      "Languages & Frameworks: JavaScript (ES6+), ReactJS, HTML, CSS",
      "Tools & Technologies: Redux, Tailwind CSS, Bootstrap",
      "Specialization: Responsive design, Single Page Applications (SPAs), UI optimization",
    ],
  },
  {
    category: "Backend Development",
    details: [
      "Languages & Frameworks: Node.js, Express.js",
      "Database Management: MongoDB, MySQL",
      "Specialization: RESTful APIs, Authentication & Authorization, Server-side logic",
    ],
  },
  {
    category: "Version Control & Deployment",
    details: ["Tools: Git, GitHub", "CI/CD Platforms: Netlify, Vercel, Heroku"],
  },
  {
    category: "Fullstack Tools",
    details: ["Webpack", "Postman for API Testing", "Jest for Testing"],
  },
];
function Skills() {
  return (
    <section className="skills-section">
      <h2 className="sectionHeader">Skills and Expertise</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-category">{skill.category}</h3>
            <ul className="skill-details">
              {skill.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
