 import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
    return(
        <>

    <section className="contact-container">
      <h2>Contact Me</h2>

      <p className="contact-tagline">
        Let's connect! Whether it’s a project, job opportunity, or just tech talk — I’d love to hear from you.
      </p>

      <div className="contact-details">
        <p>
          📧 Email: <a href="mailto:mudhenanarasimharao@gmail.com">mudhenanarasimharao@gmail.com</a>
        </p>
        <p>
          🔗 LinkedIn: <a href="https://www.linkedin.com/in/narasimharao-mudhena-42079726a/" target="_blank" rel="noreferrer">www.linkedin.com/in/narasimharao-mudhena-42079726a/</a>
        </p>
        <p>
          💻 GitHub: <a href="https://github.com/Narasimha0001" target="_blank" rel="noreferrer">github.com/Narasimha0001</a>
        </p>
      </div>

      <div className="contact-icons">
        <a href="mailto:mudhenanarasimharao@gmail.com"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/narasimharao-mudhena-42079726a/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Narasimha0001" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      {/* Optional Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
 
        </>
    )
}