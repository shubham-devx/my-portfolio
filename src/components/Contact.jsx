import "../styless/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ngbdt7x",
        "template_jyhthhc",
        form.current,
        "WFF-R36gGSw8EcmQB"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      });
  };

  return (
    <section className="contact" id="contact">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Get in touch
      </motion.h2>

      <p className="contact-text">
        Open to opportunities, internships and collaborations.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <input type="text" name="from_name" placeholder="Your Name" required />

        <input type="email" name="from_email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" rows="5" required />

        <button type="submit">Send Message →</button>

      </form>

      <div className="contact-links">
        <a href="mailto:subhamv2003@gmail.com">Email</a>
        <a href="https://github.com/shubham-devx" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/shubham-verma-bbb84b1b9" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

    </section>
  );
}

export default Contact;