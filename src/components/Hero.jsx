import CircuitPattern from "./CircuitPattern";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <CircuitPattern className="hero__circuit" />
      <div className="hero__glow" />
      <div className="container hero__inner">
        <span className="eyebrow">Qüantica</span>

        <p className="hero__lead">
          Una decisión impacta en otra.
          <br />
          Un proceso afecta un resultado.
          <br />
          Tu liderazgo condiciona tu equipo.
        </p>

        <h1 className="hero__title">Todo está conectado.</h1>

        <div className="hero__body">
          <p>Pero probablemente no estés mirando todas las conexiones.</p>
          <p>
            Por eso algunas decisiones te cuestan más de lo que deberían,
            algunos procesos no rinden como deberían, y algunos resultados
            dependen solo de vos.
          </p>
          <p className="hero__body-strong">
            Nosotros sí miramos todas las conexiones. Y sabemos exactamente
            dónde están los puntos que, si se ordenan, cambian todo.
          </p>
        </div>

        <div className="hero__actions">
          <a href="#contacto" className="btn btn-cta">
            Agendar conversación
            <span className="btn-cta__icon">+</span>
          </a>
        </div>
      </div>
    </section>
  );
}
