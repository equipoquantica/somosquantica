import logoMark from "../assets/logo-mark.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          <span className="footer__mark">
            <img src={logoMark} alt="" width="20" height="20" />
          </span>
          <span>Quantica</span>
        </a>
        <p>© {year} Quantica. Todo está conectado.</p>
      </div>
    </footer>
  );
}
