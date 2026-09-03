import { Mail, MapPin, GraduationCap, Briefcase, Download, ArrowDown } from "lucide-react";
import { IconGithub, IconLinkedin } from "../ui/Icons";
import { personal } from "../../data";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-up">
          <span className="badge-dot" />
          Disponível para oportunidades
        </div>

        <h1 className="hero-name animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {personal.name}
        </h1>

        <h2 className="hero-role animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {personal.role}
        </h2>

        <p className="hero-subtitle animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {personal.impact}
        </p>

        <div className="hero-actions animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            Ver Projetos
          </button>
          <a className="btn btn-outline" href="/GustavoBritoRodriguesdeSousa.pdf" download>
            <Download size={16} />
            Baixar Currículo
          </a>
          <a className="btn btn-outline" href={personal.github} target="_blank" rel="noreferrer">
            <IconGithub size={16} />
            GitHub
          </a>
          <a className="btn btn-outline" href={personal.linkedin} target="_blank" rel="noreferrer">
            <IconLinkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="hero-info animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <span className="info-item"><MapPin size={14} />{personal.location}</span>
          <span className="info-item"><GraduationCap size={14} />{personal.education}</span>
          <span className="info-item"><Briefcase size={14} />{personal.role}</span>
        </div>

        <div className="hero-socials animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a href={personal.github} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <IconGithub size={20} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <IconLinkedin size={20} />
          </a>
          <a href={`mailto:${personal.email}`} className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => scrollTo("about")} aria-label="Scroll down">
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
