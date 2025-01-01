import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.scss";
import emailjs from "@emailjs/browser";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bugaerl", // Replace with your EmailJS Service ID
        "template_uep9h5e", // Replace with your EmailJS Template ID
        formData,
        "Twnqm9L3EAgfzeaFD" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <footer className="footer">
      <section className="contact-section">
        <h2 className="sectionHeader">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                <span>Location:</span> Colab Innovation Campus, Barnawa, Kaduna.
              </p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>
                <span>Email:</span>{" "}
                <a href="mailto:info@adamudevlab.com.ng">
                  info@adamudevlab.com.ng
                </a>
              </p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>
                <span>Phone:</span>{" "}
                <a href="tel:+2349022624051">+234 902 262 4051</a>
              </p>
            </div>
          </div>
          {isSubmitted ? (
            <p className="success-message">
              Thank you! Your message has been sent successfully.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </section>
      <p>
        &copy; {new Date().getFullYear()} AdamuDevLab | All right reserved |
        Creating Content for the Internet since 2012.
      </p>
    </footer>
  );
}

export default Footer;
