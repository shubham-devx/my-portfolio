import "../styless/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I’m open to opportunities, internships, and collaborations.  
        Feel free to reach out!
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="mailto:subhamv2003@gmail.com">📧 Email</a>
        <a href="https://github.com/shubham-devx" target="_blank" rel="noreferrer">
          💻 GitHub
        </a>
        <a href="https://www.linkedin.com/in/shubham-verma-bbb84b1b9?" target="_blank" rel="noreferrer">
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;