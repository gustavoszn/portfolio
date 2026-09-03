import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme, useScrollSpy } from "../../hooks";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "journey", label: "Jornada" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experiência" },
  { id: "projects", label: "Projetos" },
  { id: "achievements", label: "Conquistas" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [dark, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <button className="navbar-logo" onClick={() => scrollTo("home")}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">GB</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        <nav className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${active === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
