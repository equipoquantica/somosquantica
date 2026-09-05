import Reveal from "./Reveal";
import "./Services.css";

const AREAS = [
  {
    tag: "01. Liderazgo",
    name: "MR — Mejores Relaciones, Mejores Resultados",
    description:
      "El área de liderazgo de Quantica. Trabaja la dirección del equipo, la forma de delegar y las relaciones que sostienen los resultados del negocio.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="12" cy="12" r="0.6" fill="var(--accent)" />
      </svg>
    ),
  },
  {
    tag: "02. Gestión y optimización",
    name: "Sistemas comerciales y procesos",
    description:
      "Ordenamos la operación para que se pueda medir y decidir con información real, no con intuición.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    tag: "03. Desarrollo digital",
    name: "Presencia y comunicación",
    description:
      "Comunicación y presencia digital alineadas con la estrategia del negocio, no como una isla aparte.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="areas" className="services">
      <div className="container">
        <Reveal className="services__header">
          <span className="eyebrow">Nuestros servicios</span>
          <h2>Podemos ayudarte a ordenar tu estrategia y hacer crecer tu empresa.</h2>
        </Reveal>

        <div className="services-grid">
          {AREAS.map((area) => (
            <Reveal as="article" className="service-card" key={area.name}>
              <div className="service-icon">{area.icon}</div>
              <span className="service-card__tag">{area.tag}</span>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
