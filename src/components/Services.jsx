import "./Services.css";

const AREAS = [
  {
    tag: "Liderazgo",
    name: "MR — Mejores Relaciones, Mejores Resultados",
    description:
      "El área de liderazgo de Quantica. Trabaja la dirección del equipo, la forma de delegar y las relaciones que sostienen los resultados del negocio.",
    items: ["Dirección de equipos", "Delegación efectiva", "Cultura y liderazgo"],
  },
  {
    tag: "Gestión y optimización",
    name: "Sistemas comerciales y procesos",
    description:
      "Ordenamos la operación para que se pueda medir y decidir con información real, no con intuición.",
    items: ["Análisis y reportes", "Optimización de procesos", "Indicadores para decidir"],
  },
  {
    tag: "Desarrollo digital",
    name: "Desarrollo de Sistemas de Gestión, Web y Comunicación Digital",
    description:
      "Comunicación y presencia digital alineadas con la estrategia del negocio, no como una isla aparte.",
    items: ["Sistemas de gestión a medida", "Desarrollo web", "Estrategia de comunicación"],
  },
];

export default function Services() {
  return (
    <section id="areas" className="services">
      <div className="container">
        <div className="services__header">
          <span className="eyebrow">Qué hacemos</span>
          <h2>Tres áreas. Un mismo ecosistema.</h2>
          <p className="services__intro">
            Quantica trabaja el negocio como un todo. Podés entrar por
            cualquiera de las tres áreas: la lectura siempre es integral.
          </p>
        </div>

        <div className="services__grid">
          {AREAS.map((area, i) => (
            <article className="service-card" key={area.name}>
              <span className="service-card__number">{`0${i + 1}`}</span>
              <span className="service-card__tag">{area.tag}</span>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
