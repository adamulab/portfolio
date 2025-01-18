import React, { useState } from "react";
import "./Certificates.scss";

const certificates = [
  {
    title: "Learn the Command Line in Terminal",
    issuer: "OpenCLassroom",
    date: "September 2019",
    link: "https://openclassrooms.com/en/course-certificates/7541985403",
  },
  {
    title: "Web Development Path (Node.js)",
    issuer: "Progate",
    date: "May 2020",
    link: "https://progate.com/path_certificate/729ee015qanq68",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCmp",
    date: "February 2021",
    link: "https://www.freecodecamp.org/certification/adamudevlab/responsive-web-design",
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    date: "July 2024",
    link: "https://www.linkedin.com/learning/certificates/8e926ff18cc0aeee8ebf09b0bfb50fc86c0baa31b7bff706bdec9bf63b093b1a",
  },
  {
    title: "English for IT 1",
    issuer: "Cisco Networking Academy",
    date: "July 2024",
    link: "https://drive.google.com/file/d/1DACiC8b-xbqRlKqWv7NDll8NBiTEcVjg/view?usp=sharing",
  },
  {
    title:
      "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    date: "August 2024",
    link: "https://www.linkedin.com/learning/certificates/b1dea2b4584bba368d338c37c9836c75764830a79ce73fcbd42eb7f96fa726e5",
  },
  {
    title:
      "Career Essentials in Software Development by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    date: "September 2024",
    link: "https://www.linkedin.com/learning/certificates/67306d30791cbb2c2220f2e0606744df0f85ddedf7677aba421363242aa6339c",
  },
  {
    title: "Software Development Course",
    issuer: "3MTT & NITDA",
    date: "December 2024",
    link: "https://drive.google.com/file/d/1-pDD4VSAps9wZGzw6FB3ncSz3XXChuYT/view?usp=sharing",
  },
];
function Certificates() {
  const [visibleCertificates, setVisibleCertificates] = useState(6);

  const handleLoadMore = () => {
    setVisibleCertificates((prevCount) =>
      Math.min(prevCount + 6, certificates.length)
    );
  };
  return (
    <section className="certificates-section">
      <h2 className="sectionHeader">Certifications Obtained</h2>
      <div className="certificates-grid">
        {certificates
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, visibleCertificates)
          .map((cert, index) => (
            <div className="certificate-card" key={index}>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">Issued by: {cert.issuer}</p>
              <p className="certificate-date">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          ))}
      </div>
      {visibleCertificates < certificates.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </section>
  );
}

export default Certificates;
