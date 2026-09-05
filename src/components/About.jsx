import Reveal from "./Reveal";
import "./About.css";

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
      <div className="container">
        <Reveal as="span" className="eyebrow about__eyebrow">
          El punto de partida
        </Reveal>
        <Reveal as="h2" className="about__title">
          Todo negocio es un ecosistema en movimiento.{" "}
          <span className="fade">
            Cuando una pieza se desalinea, el resto pierde dirección.
          </span>
        </Reveal>

        <div className="about-body">
          <Reveal>
            <p>
              Quantica es un método de gestión, operado por personas con
              criterio, que trata a tu empresa como un ecosistema: liderazgo,
              procesos, resultados y comunicación funcionando en una misma
              dirección.
            </p>
            <p>
              No creemos en resolver un área aislada del negocio. Una decisión
              de liderazgo impacta en la gestión; la gestión impacta en los
              indicadores; los indicadores cambian cómo comunicás.
            </p>
            <p>
              Trabajamos junto al equipo, no desde afuera: criterio,
              compromiso y resultados medibles en cada etapa.
            </p>
            <div className="about__traits">
              {TRAITS.map((trait) => (
                <span key={trait} className="about__trait">
                  {trait}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="about-note">
            "Todo está conectado."
          </Reveal>
        </div>
      </div>
    </section>
  );
}
