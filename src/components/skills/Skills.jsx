import React from "react";
import "./Skills.scss";

const mySkills = [
  {
    id: 1,
    skill: "JavaScript",
  },
  {
    id: 2,
    skill: "Reactjs",
  },
  {
    id: 3,
    skill: "Nextjs",
  },
  {
    id: 4,
    skill: "Nodejs",
  },
  {
    id: 5,
    skill: "Nestjs",
  },

  {
    id: 6,
    skill: "MySQL",
  },
  {
    id: 7,
    skill: "MongoDB",
  },
  {
    id: 8,
    skill: "Git",
  },
  {
    id: 9,
    skill: "Command Line",
  },
];
function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h1 className="sectionHeader">My Skillset</h1>
        <ul>
          {mySkills.map((s) => (
            <li key={s.id}>🚀 {s.skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
