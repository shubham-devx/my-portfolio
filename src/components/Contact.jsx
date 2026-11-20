import "../styless/Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact({ contact }) {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not send your message.");

      form.reset();
      setStatus({ type: "success", message: "Message sent. A confirmation email is on its way to you." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Could not send your message. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <motion.div className="contact-header" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h2>{contact.title}</h2>
        <p>{contact.intro}</p>
      </motion.div>

      <motion.form onSubmit={sendMessage} className="contact-form" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" required />
        <textarea name="message" placeholder="Your Message" aria-label="Your Message" rows="6" required />
        <button type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message →"}</button>
        {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
      </motion.form>

      <div className="contact-links">
        <a href={`mailto:${contact.email}`}>Email</a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
