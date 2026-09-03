import { Target, Lightbulb, User } from "lucide-react";
import { about } from "../../data";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Sobre Mim</p>
          <h2 className="section-title">Quem sou eu</h2>
          <p className="section-desc">Conheça minha trajetória, filosofia e objetivos profissionais.</p>
        </div>

        <div className="about-grid">
          <div className="about-main card">
            <div className="about-avatar">
              <div className="avatar-placeholder">
                <User size={48} />
              </div>
              <div className="avatar-badge">
                <span>Full Stack</span>
              </div>
            </div>
            <div className="about-text">
              <h3>Gustavo Brito</h3>
              <p className="about-role">Desenvolvedor Full Stack</p>
              <p className="about-bio">{about.who}</p>
            </div>
          </div>

          <div className="about-cards">
            <div className="card about-card">
              <div className="about-card-icon">
                <Lightbulb size={20} />
              </div>
              <h4>Minha Filosofia</h4>
              <p>{about.philosophy}</p>
            </div>

            <div className="card about-card">
              <div className="about-card-icon">
                <Target size={20} />
              </div>
              <h4>Objetivos</h4>
              <p>{about.goal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
