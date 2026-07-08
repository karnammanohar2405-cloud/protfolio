import { Github, Linkedin, Mail, Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const whatsappMessage = `Hello Karnam,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from your Portfolio Website.`;

    // Replace with your WhatsApp number
    const phoneNumber = "+918317538503";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <div data-reveal>
          <p className="section-eyebrow">Contact</p>

          <h2 className="section-title">
            Let's Build Something Amazing Together.
          </h2>

          <p className="section-copy">
            Have a project in mind, a freelance opportunity, or just want to
            connect? Fill out the form and send me a message directly on
            WhatsApp.
          </p>

          <div className="contact-socials">
            <a
              className="button"
              href="mailto:karnammanohar2405@gmail.com"
            >
              <Mail size={17} />
              Email
            </a>

            <a
              className="button"
              href="https://github.com/karnammanohar2405-cloud"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>

            <a
              className="button"
              href="https://www.linkedin.com/in/manohar-karnam-b86639362"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>

        <form
          className="contact-form glass"
          data-reveal
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              required
            />
          </label>

          <button className="button" type="submit">
            <Send size={17} />
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;