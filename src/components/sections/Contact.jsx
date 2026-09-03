import { useState } from "react";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { IconGithub, IconLinkedin } from "../ui/Icons";
import { personal, faq } from "../../data";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Contato</p>
          <h2 className="section-title">Vamos Conversar</h2>
          <p className="section-desc">Estou disponível para oportunidades, projetos e colaborações.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-left">
            <div className="card contact-info-card">
              <h3>Informações de Contato</h3>
              <div className="contact-items">
                <a href={`mailto:${personal.email}`} className="contact-item">
                  <div className="contact-icon"><Mail size={18} /></div>
                  <div>
                    <p className="contact-item-label">E-mail</p>
                    <p className="contact-item-value">{personal.email}</p>
                  </div>
                </a>
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={18} /></div>
                  <div>
                    <p className="contact-item-label">Localização</p>
                    <p className="contact-item-value">{personal.location}</p>
                  </div>
                </div>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                  <div className="contact-icon"><IconLinkedin size={18} /></div>
                  <div>
                    <p className="contact-item-label">LinkedIn</p>
                    <p className="contact-item-value">Gustavo Brito</p>
                  </div>
                </a>
                <a href={personal.github} target="_blank" rel="noreferrer" className="contact-item">
                  <div className="contact-icon"><IconGithub size={18} /></div>
                  <div>
                    <p className="contact-item-label">GitHub</p>
                    <p className="contact-item-value">gustavobrito</p>
                  </div>
                </a>
              </div>
              <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary whatsapp-btn">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            <div className="faq-section">
              <h3>Perguntas Frequentes</h3>
              <div className="faq-list">
                {faq.map((item, i) => (
                  <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                    <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      {item.q}
                      <span className="faq-arrow">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && <p className="faq-answer">{item.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="card contact-form-card">
              <h3>Enviar Mensagem</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Assunto</label>
                  <input
                    type="text"
                    placeholder="Assunto da mensagem"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mensagem</label>
                  <textarea
                    placeholder="Sua mensagem..."
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className={`btn btn-primary submit-btn ${sent ? "sent" : ""}`}>
                  {sent ? "✓ Mensagem enviada!" : <><Send size={16} /> Enviar Mensagem</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
