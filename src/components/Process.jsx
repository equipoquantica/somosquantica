import "./Process.css";

const STEPS = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Miramos antes de tocar nada: procesos, equipo y números tal como están hoy.",
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Una solución a medida del negocio real, no una plantilla genérica.",
  },
  {
    step: "03",
    title: "Implementación",
    description:
      "Trabajamos junto al equipo, dentro de la operación diaria.",
  },
  {
    step: "04",
    title: "Mejora continua",
    description:
      "Ajustamos con datos y resultados medibles, no con intuición.",
  },
];

const ACTIVE_INDEX = 1;

export default function Process() {
  return (
    <section id="como-trabajamos" className="process">
      <div className="container">
        <div className="process__header">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>Empecemos a calibrar tu negocio.</h2>
        </div>

        <div className="process__track">
          <span className="process__pill">
            <span className="process__pill-icon">❙❙</span> Diagnóstico
          </span>
          <div className="process__line">
            <div className="process__line-fill" style={{ width: "50%" }} />
            <span className="process__dot" style={{ left: "50%" }} />
          </div>
          <span className="process__pill">
            <span className="process__pill-icon">▶</span> Resultado
          </span>
        </div>

        <div className="process__grid">
          {STEPS.map((item, i) => (
            <div
              className={`process-card${i === ACTIVE_INDEX ? " process-card--active" : ""}`}
              key={item.step}
            >
              <span className="process-card__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
