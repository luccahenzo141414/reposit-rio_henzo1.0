import { FaGithub, FaLinkedin,  } from "react-icons/fa";

const Contact = () => (
  <section id="contact">
    <h2>Contato</h2>
    <p>Aberto a vagas júnior/trainee e projetos freelance.</p>

    <div className="contact-links">
      

      <a
        href="https://github.com/luccahenzo141414"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <FaGithub className="contact-icon" />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/henzo-lucca/"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <FaLinkedin className="contact-icon" />
        <span>LinkedIn</span>
      </a>
    </div>
  </section>
);

export default Contact;