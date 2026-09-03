import { Mail, MessageCircle, Download, Heart } from "lucide-react";
import { IconGithub, IconLinkedin } from "./Icons";
import { personal } from "../../data";
import "./Footer.css";

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <button className="footer-logo" onClick={() => scrollTo("home")}>
            <span style={{ color: "var(--accent)" }}>&lt;</span>GB<span style={{ color: "var(--accent)" }}>/&gt;</span>
          </button>
          <p>Desenvolvedor Full Stack apaixonado por criar soluções digitais de impacto.</p>
          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><IconGithub size={18} /></a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedin size={18} /></a>
            <a href={`mailto:${personal.email}`} aria-label="Email"><Mail size={18} /></a>
            <a href={personal.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          {["home", "about", "journey", "skills", "experience", "projects", "achievements", "contact"].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} className="footer-link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <div className="footer-links">
          <h4>Contato</h4>
          <a href={`mailto:${personal.email}`} className="footer-link">{personal.email}</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="/GustavoBritoRodriguesdeSousa.pdf" download className="footer-link footer-cv">
            <Download size={14} /> Baixar Currículo
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Gustavo Brito. Todos os direitos reservados.</p>
          <p className="footer-made">Feito com <Heart size={12} fill="currentColor" /> em React</p>
        </div>
      </div>
    </footer>
  );
}
