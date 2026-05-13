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

      {/* TITLE */}
      <motion.div
        className="contact-header"

        initial={{ opacity: 0, y: 40 }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{ duration: 0.7 }}
      >

        <h2>Let’s Work Together</h2>

        <p>
          Open to internships, freelance projects,
          collaborations and exciting opportunities.
        </p>

      </motion.div>

      {/* FORM */}
      <motion.form

        ref={form}

        onSubmit={sendEmail}

        className="contact-form"

        initial={{ opacity: 0, y: 50 }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{ duration: 0.8 }}
      >

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        />

        <button type="submit">
          Send Message →
        </button>

      </motion.form>

      {/* LINKS */}
      <div className="contact-links">

        <a href="mailto:subhamv2003@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/shubham-devx"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-verma-bbb84b1b9"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;