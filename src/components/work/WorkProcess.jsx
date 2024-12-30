import React from "react";
import "./WorkProcess.scss";

const workProcessData = [
  {
    step: "1",
    title: "Consultation",
    description:
      "Understanding your goals, requirements, and challenges to tailor a solution that fits your needs.",
  },
  {
    step: "2",
    title: "Planning",
    description:
      "Creating a detailed plan with timelines, milestones, and resource allocation to ensure smooth execution.",
  },
  {
    step: "3",
    title: "Development",
    description:
      "Building your project with the latest technologies, ensuring high-quality performance and scalability.",
  },
  {
    step: "4",
    title: "Delivery & Support",
    description:
      "Delivering the final product and providing ongoing support to help you achieve continuous success.",
  },
];

function WorkProcess() {
  return (
    <section className="work-process-section">
      <h2 className="sectionHeader">Work Process</h2>
      <div className="work-process-container">
        {workProcessData.map((process, index) => (
          <div key={index} className="process-step">
            <div className="step-number">{process.step}</div>
            <h3 className="process-title">{process.title}</h3>
            <p className="process-description">{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkProcess;
