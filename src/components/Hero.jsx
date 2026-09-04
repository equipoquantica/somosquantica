import CircuitPattern from "./CircuitPattern";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <CircuitPattern className="hero__circuit" />
      <div className="hero__glow" />
      <div className="container hero__inner">
        <span className="eyebrow">Consultora integral</span>
        <h1 className="hero__title">
          Todo está conectado.
          <br />
          Tu empresa también.
        </h1>
        <p className="hero__subtitle">
          Quantica es un método de gestión, operado por personas con criterio,
          que trata a tu empresa como un ecosistema: liderazgo, procesos,
          resultados y comunicación funcionando en una misma dirección.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn-primary">
            Agendemos una charla
          </a>
          <a href="#areas" className="btn btn-ghost">
            Ver qué hacemos
          </a>
        </div>
      </div>
    </section>
  );
}
