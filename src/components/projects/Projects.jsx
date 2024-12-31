import React, { useState } from "react";
import "./Projects.scss";

const projectsData = {
  client: [
    {
      id: 1,
      title: "Janiba Ginger Ltd.",
      description:
        "Specialize in the cultivation, processing, and export of high-quality dried ginger, Hibiscus sabdariffa, and a healthy line of ginger spiced fruit juices",
      technologies: "Reactjs, Framer Motion",
      links: {
        demo: "https://janibaginger.com/",
        code: "#",
      },
      image: "https://i.ibb.co/d4b6fYy/janiba.png",
    },
    {
      id: 2,
      title: "Noon Capital and Finance Ltd",
      description: "A dynamic and forward-thinking financial institution",
      technologies: "Reactjs, Framer Motion",
      links: {
        demo: "#",
        code: "https://www.nooncapitalandfinance.com/",
      },
      image: "https://i.ibb.co/3TgwNTk/nooncapital.png",
    },
    {
      id: 3,
      title: "Five Star College of Health Technology",
      description:
        "Institution is dedicated to providing world-class education in the healthcare sector",
      technologies: "Reactjs, Framer Motion",
      links: {
        demo: "#",
        code: "https://fivestarcollegeofhealthtech.ng/",
      },
      image: "https://i.ibb.co/GcJcjFH/fivestar.png",
    },
    {
      id: 4,
      title: "Janiba Intercontinental Network Ltd.",
      description:
        "A dynamic and versatile multiservice company dedicated to delivering a diverse array of services",
      technologies: "Reactjs, Framer Motion",
      links: {
        demo: "#",
        code: "https://janibaintercontinentalnetwork.com/",
      },
      image: "https://i.ibb.co/RPPtWtH/jinl.png",
    },
  ],
  personal: [
    {
      id: 5,
      title: "Mini JavaScript Project Collections",
      description: "A collection of Javascript mini projects",
      technologies: "HTML, CSS, JavaScript, Netlify",
      links: {
        demo: "#",
        code: "https://adamulab-js-mini-projects.netlify.app/",
      },
      image: "https://i.ibb.co/TY0T6Sr/js-mini-projects.png",
    },
    {
      id: 6,
      title: "Centralized Patients Record Management System",
      description: "A centralized record management system for patients",
      technologies: "Reactjs, Nodejs, MongoDB, Vercel",
      links: {
        demo: "#",
        code: "https://patients-record.vercel.app/",
      },
      image: "https://i.ibb.co/L8WNW7J/cprms.png",
    },
    {
      id: 7,
      title: "Mobiile Web School - UI",
      description: "UI for an online mobile web school",
      technologies: "HTML, CSS, JavaScript, Github Pages",
      links: {
        demo: "#",
        code: "https://adamulab.github.io/mws/",
      },
      image: "https://i.ibb.co/M16XnyT/mobi-school.png",
    },
  ],
  course: [
    {
      id: 8,
      title: "3MTT Capstone Project - Task Manager App",
      description: "Capstone project for the 3 Months Tech Talent Training",
      technologies: "HTML, CSS, JavaScript, Nodejs, Express, MongoDB, Vercel",
      links: {
        demo: "#",
        code: "https://capstone-project-client.vercel.app/",
      },
      image: "https://i.ibb.co/cLRpLpq/3mtt-capstone.png",
    },
  ],
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("client");
  const [visibleCounts, setVisibleCounts] = useState({
    client: 2,
    personal: 2,
    course: 2,
  });

  const handleLoadMore = (category) => {
    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [category]: Math.min(
        prevCounts[category] + 2,
        projectsData[category].length
      ),
    }));
  };

  const categories = Object.keys(projectsData);

  return (
    <section className="projects-section">
      <h2 className="sectionHeader">My Projects</h2>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`tab-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} Projects
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="projects-container">
        {projectsData[activeCategory]
          .slice(0, visibleCounts[activeCategory])
          .map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
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
      {/* Load More Button */}
      {visibleCounts[activeCategory] < projectsData[activeCategory].length && (
        <button
          className="load-more-btn"
          onClick={() => handleLoadMore(activeCategory)}
        >
          Load More
        </button>
      )}
    </section>
  );
}

export default Projects;
