import { Github, Linkedin, Mail, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-inner contact-inner">
        <div data-reveal>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let us build something with signal.</h2>
          <p className="section-copy">
            Available for focused web projects, portfolio systems, dashboards, and React interfaces that need craft and reliability.
          </p>
          <div className="contact-socials">
            <a className="button" href="mailto:karnammanohar@example.com">
              <Mail size={17} /> Email
            </a>
            <a className="button" href="https://github.com/Manohar2405" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a className="button" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form glass" data-reveal>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about the project" rows="6" required />
          </label>
          <button className="button" type="submit">
            <Send size={17} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
