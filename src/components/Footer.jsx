import logoMark from "../assets/logo-mark.png";
import "./Footer.css";

const EMAIL = "equipo.quantica@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrap">
      <div className="container">
        <div className="footer-card">
          <div>
            <a href="#top" className="footer-brand">
              <span className="footer-mark">
                <img src={logoMark} alt="" width="20" height="20" />
              </span>
              <span>üantica</span>
            </a>
            <div className="footer-tag">Todo está conectado.</div>
            <p className="footer-desc">
              Consultoría integral en liderazgo, gestión y desarrollo digital
              para empresas que necesitan claridad y organización.
            </p>
          </div>

          <div className="footer-col">
            <h4>Áreas</h4>
            <a href="#areas">Liderazgo — MR</a>
            <a href="#areas">Gestión y optimización</a>
            <a href="#areas">Desarrollo digital</a>
          </div>

          <div className="footer-col">
            <h4>Menú</h4>
            <a href="#nosotros">Nosotros</a>
            <a href="#como-trabajamos">Cómo trabajamos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          © {year} Quantica — {EMAIL}
        </div>
      </div>
    </div>
  );
}
