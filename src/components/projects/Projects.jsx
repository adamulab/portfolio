import React from "react";
import "./Projects.scss";

const projectsData = [
  {
    title: "Health Facility Finder",
    description:
      "An application that uses geolocation to fetch nearby health facilities in Nigeria.",
    technologies: "HTML, CSS, JavaScript, Node.js, Express",
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Task Tracker Application",
    description:
      "A productivity app to help users manage tasks efficiently with priority settings and deadlines.",
    technologies: "ReactJS, Node.js, MongoDB",
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce application for small businesses.",
    technologies: "ReactJS, Node.js, MySQL",
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Personal Blog",
    description:
      "A platform to share insights and tutorials on software development and digital content creation.",
    technologies: "Next.js, Markdown",
    links: {
      demo: "#",
      code: "#",
    },
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="sectionHeader">My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <div className="project-links">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
