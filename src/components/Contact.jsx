import Reveal from "./Reveal";
import "./Contact.css";

const EMAIL = "equipo.quantica@gmail.com";
const WHATSAPP_LINK = "https://wa.me/5491158037288";

export default function Contact() {
  return (
    <section id="contacto" className="cta-final">
      <div className="container cta-final__inner">
        <Reveal className="cta-final__text">
          <h2>
            Comienza ya.
            <br />
            <span className="accentline">Escribinos y comenzamos.</span>
          </h2>
        </Reveal>

        <Reveal className="cta-final__actions">
          <div className="cta-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-outline">
              {EMAIL}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta"
            >
              Agenda una conversación
              <span className="btn-cta__icon">+</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
