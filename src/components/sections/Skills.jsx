import { useState } from "react";
import { skills, technologies, hardSkills, softSkills, differentials, studying } from "../../data";
import "./Skills.css";

const CATEGORIES = ["Todos", "Frontend", "Backend", "Database", "Tools"];

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}/5</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${(level / 5) * 100}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Habilidades</p>
          <h2 className="section-title">Tecnologias & Skills</h2>
          <p className="section-desc">Ferramentas e tecnologias que utilizo no dia a dia.</p>
        </div>

        <div className="skills-layout">
          <div className="skills-left">
            <div className="skills-filter">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="skills-bars">
              {filtered.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          <div className="skills-right">
            <div className="card skills-card">
              <h4>Hard Skills</h4>
              <div className="tags-grid">
                {hardSkills.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>

            <div className="card skills-card">
              <h4>Soft Skills</h4>
              <div className="tags-grid">
                {softSkills.map((s) => <span key={s} className="tag soft">{s}</span>)}
              </div>
            </div>

            <div className="card skills-card">
              <h4>🌱 Estudando Atualmente</h4>
              <div className="tags-grid">
                {studying.map((s) => <span key={s} className="tag studying">{s}</span>)}
              </div>
            </div>

            <div className="card skills-card">
              <h4>⭐ Diferenciais</h4>
              <ul className="differentials-list">
                {differentials.map((d) => (
                  <li key={d}><span className="diff-dot" />{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
