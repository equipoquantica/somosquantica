import Reveal from "./Reveal";
import "./Approach.css";

export default function Approach() {
  return (
    <section className="approach-dark" id="enfoque">
      <div className="container approach-grid">
        <Reveal as="svg" className="venn" viewBox="0 0 300 220" fill="none">
          <g className="venn__group">
            <circle cx="110" cy="110" r="85" stroke="var(--border-strong)" />
            <circle cx="190" cy="110" r="85" stroke="var(--accent)" />
            <circle cx="150" cy="60" r="55" stroke="var(--accent-2)" opacity=".6" />
          </g>
        </Reveal>
        <Reveal>
          <span className="eyebrow">Todo está conectado</span>
          <h2>¿Por qué Quantica no separa liderazgo, gestión y comunicación?</h2>
          <p>
            <strong>Liderazgo:</strong> dirección de equipo, delegación y
            las relaciones que sostienen los resultados del negocio.
          </p>
          <p>
            <strong>Gestión y optimización:</strong> procesos e indicadores
            que permiten decidir con información real, no con intuición.
          </p>
          <p>
            <strong>Desarrollo digital:</strong> sistemas de gestión,
            desarrollo web y comunicación alineados con la estrategia, no
            como una isla aparte.
          </p>
          <p className="bold-line">— un mismo sistema, sin partes sueltas —</p>
          <a href="#contacto" className="btn btn-cta">
            Agendemos una charla
            <span className="btn-cta__icon">+</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
