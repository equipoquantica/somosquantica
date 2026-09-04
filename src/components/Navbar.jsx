import { useEffect, useState } from "react";
import logoMark from "../assets/logo-mark.png";
import "./Navbar.css";

const LINKS = [
  { href: "#areas", label: "Áreas" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__mark">
            <img src={logoMark} alt="" width="28" height="28" />
          </span>
          <span className="navbar__name">Quantica</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn-primary navbar__cta">
          Agendemos una charla
        </a>

        <button
          className="navbar__toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Agendemos una charla
          </a>
        </div>
      )}
    </header>
  );
}
