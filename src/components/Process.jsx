import "./Process.css";

const STEPS = [
  {
    step: "01",
    title: "Diagnóstico integral",
    description:
      "Miramos liderazgo, gestión y comunicación juntos para entender dónde está el cuello de botella real, no solo el síntoma.",
  },
  {
    step: "02",
    title: "Intervención por área",
    description:
      "Definimos qué área o combinación de áreas necesita el negocio hoy: liderazgo, gestión y optimización, o desarrollo digital.",
  },
  {
    step: "03",
    title: "Indicadores y seguimiento",
    description:
      "Ponemos en marcha información concreta para tomar decisiones, con revisiones periódicas del avance.",
  },
  {
    step: "04",
    title: "Evolución continua",
    description:
      "El negocio cambia y el método también. Ajustamos la estrategia a medida que la empresa crece.",
  },
];

export default function Process() {
  return (
    <section id="como-trabajamos" className="process">
      <div className="container">
        <div className="process__header">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>Un método, no una receta fija</h2>
        </div>

        <div className="process__grid">
          {STEPS.map((item) => (
            <div className="process-card" key={item.step}>
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
