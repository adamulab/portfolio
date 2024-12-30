import React from "react";
import "./Services.scss";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Custom and responsive websites built using the latest technologies, ensuring optimal performance and user experience.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications tailored to your business needs, delivering seamless performance.",
    icon: "📱",
  },
  {
    title: "Backend Development",
    description:
      "Robust backend systems with efficient APIs and database management using Node.js, Express, MongoDB, and MySQL.",
    icon: "💾",
  },
  {
    title: "Digital Consulting",
    description:
      "Comprehensive guidance to help you scale your business digitally and integrate the right technologies.",
    icon: "💡",
  },
];
function Services() {
  return (
    <section className="services-section">
      <h2 className="sectionHeader">Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
