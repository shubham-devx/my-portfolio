import "../styless/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Yr2Mizn9clBOdb63-wvbz",     // Service ID
        "template_jyhthhc",         // Template ID
        form.current,
        "WFF-R36gGSw8EcmQB"          // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I’m open to opportunities, internships, and collaborations.
        Feel free to reach out!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
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
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="mailto:subhamv2003@gmail.com">📧 Email</a>

        <a
          href="https://github.com/shubham-devx"
          target="_blank"
          rel="noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-verma-bbb84b1b9"
          target="_blank"
          rel="noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;