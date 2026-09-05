import Reveal from "./Reveal";
import "./Contact.css";

const EMAIL = "equipo.quantica@gmail.com";

export default function Contact() {
  return (
    <section id="contacto" className="cta-final">
      <div className="container cta-final__inner">
        <Reveal className="cta-final__text">
          <h2>
            Comienza ya.
            <br />
            <span className="accentline">Escribinos y conversemos.</span>
          </h2>
        </Reveal>

        <Reveal className="cta-final__actions">
          <div className="cta-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-outline">
              {EMAIL}
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btn-cta">
              Agendemos una charla
              <span className="btn-cta__icon">+</span>
            </a>
          </div>
          <p className="cta-final__note">
            Teléfono / WhatsApp: +54 9 11 0000-0000 <em>(a completar)</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
