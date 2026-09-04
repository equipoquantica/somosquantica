import "./Contact.css";

const EMAIL = "equipo.quantica@gmail.com";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact__inner">
        <div className="contact__card">
          <span className="eyebrow">Contacto</span>
          <h2>Hablemos de tu empresa</h2>
          <p>
            Contanos qué está pasando hoy en tu negocio y vemos juntos por
            dónde tiene sentido empezar.
          </p>

          <div className="contact__details">
            <a className="contact__item" href={`mailto:${EMAIL}`}>
              <span className="contact__item-label">Email</span>
              <span className="contact__item-value">{EMAIL}</span>
            </a>
            <div className="contact__item contact__item--static">
              <span className="contact__item-label">Teléfono / WhatsApp</span>
              <span className="contact__item-value">
                +54 9 11 0000-0000 <em>(a completar)</em>
              </span>
            </div>
          </div>

          <a href={`mailto:${EMAIL}`} className="btn btn-primary contact__cta">
            Escribinos por mail
          </a>
        </div>
      </div>
    </section>
  );
}
