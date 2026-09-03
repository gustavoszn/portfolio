import { achievements, certificates, stats, education } from "../../data";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Conquistas</p>
          <h2 className="section-title">Formação & Conquistas</h2>
          <p className="section-desc">Trajetória acadêmica e reconhecimentos ao longo da jornada.</p>
        </div>

        <div className="achievements-layout">
          <div className="ach-col">
            <h3 className="ach-col-title">🎓 Formação</h3>
            <div className="edu-list">
              {education.map((e) => (
                <div key={e.institution} className="card edu-card">
                  <span className="edu-type">{e.type}</span>
                  <h4>{e.course}</h4>
                  <p>{e.institution}</p>
                  <span className="edu-period">{e.period}</span>
                </div>
              ))}
            </div>

            <h3 className="ach-col-title" style={{ marginTop: 32 }}>🏅 Medalhas</h3>
            <div className="medals-list">
              {achievements.map((a, i) => (
                <div key={i} className="card medal-card">
                  <span className="medal-emoji">{a.medal}</span>
                  <div>
                    <p className="medal-title">{a.title}</p>
                    <p className="medal-event">{a.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ach-col">
            <h3 className="ach-col-title">📊 Estatísticas</h3>
            <div className="stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="card stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <h3 className="ach-col-title" style={{ marginTop: 32 }}>📚 Certificados</h3>
            <div className="certs-list">
              {certificates.map((c) => (
                <div key={c} className="cert-item">
                  <span className="cert-icon">✓</span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
