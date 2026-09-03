import { GraduationCap, Briefcase, Code } from "lucide-react";
import { journey } from "../../data";
import "./Journey.css";

const icons = {
  education: GraduationCap,
  work: Briefcase,
  project: Code,
};

const colors = {
  education: "#6366f1",
  work: "#10b981",
  project: "#f59e0b",
};

export default function Journey() {
  return (
    <section id="journey" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">Trajetória</p>
          <h2 className="section-title">Minha Jornada</h2>
          <p className="section-desc">Do primeiro contato com programação até o mercado de trabalho.</p>
        </div>

        <div className="timeline">
          {journey.map((item, i) => {
            const Icon = icons[item.type];
            return (
              <div key={item.id} className="timeline-item">
                <div className="timeline-line" />
                <div className="timeline-dot" style={{ background: colors[item.type] }}>
                  <Icon size={14} />
                </div>
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <div>
                      <span className="timeline-period">{item.period}</span>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-institution">{item.institution}</p>
                    </div>
                    <span className="timeline-type-badge" style={{ background: colors[item.type] + "20", color: colors[item.type] }}>
                      {item.type === "education" ? "Educação" : item.type === "work" ? "Trabalho" : "Projeto"}
                    </span>
                  </div>
                  <p className="timeline-desc">{item.description}</p>
                  <div className="timeline-highlights">
                    {item.highlights.map((h) => (
                      <span key={h} className="tag">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
