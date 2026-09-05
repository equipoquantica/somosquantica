import "./About.css";

const CHAIN = [
  { label: "Liderazgo", detail: "Un cambio en el liderazgo modifica la manera de delegar." },
  { label: "Gestión", detail: "Eso permite una mejor organización de la gestión." },
  { label: "Indicadores", detail: "Una gestión con mejores indicadores genera información para decidir." },
  { label: "Comunicación", detail: "Esas decisiones modifican la estrategia de comunicación y desarrollo digital." },
];

const TRAITS = [
  "Profesional",
  "Estratégica",
  "Humana",
  "Sólida",
  "Precisa sin ser fría",
  "Cercana sin ser blanda",
];

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="eyebrow">Nosotros</span>
          <h2>Todo está conectado.</h2>
          <p>
            No creemos en resolver un área aislada del negocio. Una decisión
            de liderazgo impacta en la gestión; la gestión impacta en los
            indicadores; los indicadores cambian cómo comunicás. Quantica
            mira ese recorrido completo, no un tramo suelto.
          </p>
          <div className="about__traits">
            {TRAITS.map((trait) => (
              <span key={trait} className="about__trait">
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="about__chain">
          {CHAIN.map((step, i) => (
            <div className="chain-step" key={step.label}>
              <div className="chain-step__marker">
                <span>{i + 1}</span>
                {i < CHAIN.length - 1 && <div className="chain-step__line" />}
              </div>
              <div className="chain-step__body">
                <h4>{step.label}</h4>
                <p>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
