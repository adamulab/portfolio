import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Testimonial.scss";

const testimonialsData = [
  {
    name: "Abdulkarim Sule",
    position: "Operations Manager, Noon Capital and Finance Ltd.",
    feedback:
      "Working with Adamu was a seamless experience. The project was delivered on time, and the quality was top-notch!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Kowni Lekwot (Mrs)",
    position: "Managing Director, Janiba Ginger Ltd.",
    feedback:
      "Adamu exceeded our expectations with his skills and professionalism. Highly recommend his services!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Michael Johnson",
    position: "Founder, StartUp Hub",
    feedback:
      "The best developer I’ve worked with. Adamu understands business needs and delivers beyond expectations.",
    avatar: "https://via.placeholder.com/100",
  },
];
function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2 className="sectionHeader">Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-info">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="avatar"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
              <p className="testimonial-feedback">
                <FaQuoteLeft className="quote-icon" /> {testimonial.feedback}{" "}
                <FaQuoteRight className="quote-icon" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
