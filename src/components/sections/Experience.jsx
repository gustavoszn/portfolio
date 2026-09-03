import { experience } from "../../data";
import "./Experience.css";

export default function Experience() {
  const exp = experience[0];

  return (
    <section id="experience" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experiência</p>
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-desc">Minha atuação no mercado de trabalho.</p>
        </div>

        <div className="exp-card card">
          <div className="exp-header">
            <div className="exp-company-logo">VM</div>
            <div className="exp-info">
              <h3 className="exp-company">{exp.company}</h3>
              <p className="exp-role">{exp.role}</p>
              <span className="exp-period">{exp.period}</span>
            </div>
          </div>

          <div className="exp-body">
            <div className="exp-section">
              <h4>Principais Atividades</h4>
              <div className="exp-activities">
                {exp.activities.map((a) => (
                  <div key={a} className="exp-activity">
                    <span className="activity-dot" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            <div className="exp-section">
              <h4>Tecnologias Utilizadas</h4>
              <div className="exp-techs">
                {exp.techs.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
