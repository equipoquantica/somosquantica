import "./Audience.css";

const POINTS = [
  "Hiciste crecer la empresa, pero cada vez te cuesta más delegar sin estar encima de todo.",
  "Tenés equipo y trayectoria, pero falta información clara para tomar decisiones a tiempo.",
  "Sentís que cada área tira para un lado distinto y nadie ve el negocio como un todo.",
];

export default function Audience() {
  return (
    <section className="audience">
      <div className="container audience__inner">
        <p className="audience__lead">¿Te suena familiar?</p>
        <div className="audience__grid">
          {POINTS.map((text) => (
            <div className="audience__card" key={text}>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
