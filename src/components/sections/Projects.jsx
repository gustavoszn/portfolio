import { useState } from "react";
import { ExternalLink, X, ChevronRight } from "lucide-react";
import { IconGithub } from "../ui/Icons";
import { projects } from "../../data";
import "./Projects.css";

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={20} /></button>

        <div className="modal-header">
          <h2>{project.name}</h2>
          <div className="modal-techs">
            {project.techs.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4>Descrição</h4>
            <p>{project.description}</p>
          </div>
          <div className="modal-section">
            <h4>Objetivo</h4>
            <p>{project.objective}</p>
          </div>
          <div className="modal-grid">
            <div className="modal-section">
              <h4>Problema</h4>
              <p>{project.problem}</p>
            </div>
            <div className="modal-section">
              <h4>Solução</h4>
              <p>{project.solution}</p>
            </div>
          </div>
          <div className="modal-section">
            <h4>Funcionalidades</h4>
            <div className="modal-features">
              {project.features.map((f) => (
                <span key={f} className="feature-item"><ChevronRight size={14} />{f}</span>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <h4>Arquitetura</h4>
            <p>{project.architecture}</p>
          </div>
          <div className="modal-grid">
            <div className="modal-section">
              <h4>Desafios</h4>
              <ul>{project.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="modal-section">
              <h4>Aprendizados</h4>
              <ul>{project.learnings.map((l) => <li key={l}>{l}</li>)}</ul>
            </div>
          </div>
          <div className="modal-section">
            <h4>Resultado</h4>
            <p>{project.result}</p>
          </div>
        </div>

        <div className="modal-footer">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <IconGithub size={16} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Projetos</p>
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-desc">Soluções desenvolvidas com foco em qualidade e impacto real.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card" onClick={() => setSelected(project)}>
              <div className="project-image">
                <div className="project-image-placeholder">
                  <span>{project.name[0]}</span>
                </div>
                {project.featured && <span className="project-featured">Destaque</span>}
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-techs">
                  {project.techs.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-actions">
                  <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); setSelected(project); }}>
                    Ver Detalhes
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" onClick={(e) => e.stopPropagation()}>
                      <IconGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
