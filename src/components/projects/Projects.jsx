import React, { useState } from "react";
import "./Projects.scss";

const projectsData = {
  client: [
    {
      id: 1,
      title: "Janiba Ginger Ltd.",
      description: "Description of client project one",
      technologies: "Next.js, Markdown",
      links: {
        demo: "https://janibaginger.com/",
        code: "#",
      },
      image: "https://placehold.co/600x400.png",
    },
    {
      id: 2,
      title: "Noon Capital and Finance Ltd",
      description: "Description of client project two",
      technologies: "Next.js, Markdown",
      links: {
        demo: "#",
        code: "https://www.nooncapitalandfinance.com/",
      },
      image: "https://placehold.co/600x400.png",
    },
    {
      id: 3,
      title: "Five Star College of Health Technology",
      description: "Description of client project two",
      technologies: "Next.js, Markdown",
      links: {
        demo: "#",
        code: "https://fivestarcollegeofhealthtech.ng/",
      },
      image: "https://placehold.co/600x400.png",
    },
    {
      id: 4,
      title: "Janiba Intercontinental Network Ltd.",
      description: "Description of client project two",
      technologies: "Next.js, Markdown",
      links: {
        demo: "#",
        code: "https://janibaintercontinentalnetwork.com/",
      },
      image: "https://placehold.co/600x400.png",
    },
  ],
  personal: [
    {
      id: 5,
      title: "Mini JavaScript Project Collections",
      description: "Description of personal project one",
      technologies: "Next.js, Markdown",
      links: {
        demo: "#",
        code: "https://adamulab-js-mini-projects.netlify.app/",
      },
      image: "https://placehold.co/600x400.png",
    },
    {
      id: 6,
      title: "Centralized Patients Record Management System",
      description: "Description of personal project two",
      technologies: "Next.js, Markdown",
      links: {
        demo: "#",
        code: "https://patients-record.vercel.app/",
      },
      image: "https://placehold.co/600x400.png",
    },
  ],
  course: [
    {
      id: 7,
      title: "3MTT Capstone Project - Task Manager App",
      description: "Description of course project one",
      technologies: "Next.js, Markdown",
      links: {
        demo: "#",
        code: "https://capstone-project-client.vercel.app/",
      },
      image: "https://placehold.co/600x400.png",
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
