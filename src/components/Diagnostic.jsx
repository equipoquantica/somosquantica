import { useState } from "react";
import Reveal from "./Reveal";
import "./Diagnostic.css";

const CARDS = [
  { area: "liderazgo", text: "Cuando te tomás un día libre, algo en la empresa se frena." },
  { area: "liderazgo", text: "Trabajás más que antes, pero la empresa sigue dependiendo de vos igual." },
  { area: "liderazgo", text: "Te cuesta delegar sin sentir que perdés el control de lo importante." },
  { area: "gestion", text: "Decidís con lo que tenés a mano, no con la información que necesitarías." },
  { area: "gestion", text: "Los procesos existen en la cabeza de algunas personas, no en un lugar que el resto pueda consultar." },
  { area: "gestion", text: "Sabés que algo no funciona, pero no exactamente en qué punto se traba." },
  { area: "digital", text: "Publicás porque hay que estar, más que porque sepas qué efecto tiene." },
  { area: "digital", text: "Lo que mostrás afuera cuenta una historia distinta a la que pasa puertas adentro." },
  { area: "digital", text: "Generás contactos o consultas, pero no tenés claro qué pasa con ellos después." },
];

const RESULTS = {
  liderazgo: {
    tag: "Tu principal freno hoy — Liderazgo",
    text: "Elegiste sobre todo liderazgo. Tiene sentido: cuando la empresa depende de una sola persona para funcionar, el problema no se resuelve trabajando más — se resuelve cambiando cómo esa persona lidera. Ese es el trabajo de MR, el área de liderazgo de Qüantica.",
  },
  gestion: {
    tag: "Tu principal freno hoy — Gestión y optimización",
    text: "Elegiste sobre todo gestión. No es falta de esfuerzo, es falta de información al momento de decidir. Ahí trabajamos: procesos e indicadores que muestran exactamente dónde se traba lo que hoy no rinde.",
  },
  digital: {
    tag: "Tu principal freno hoy — Desarrollo digital",
    text: "Elegiste sobre todo comunicación y presencia. Lo que se ve afuera no está contando lo mismo que pasa adentro. Ahí trabajamos: que tu comunicación digital refleje lo que realmente estás construyendo.",
  },
  mixto: {
    tag: "Tu diagnóstico",
    text: "No marcaste una sola área — marcaste varias. Tiene sentido: liderazgo, gestión y comunicación no funcionan por separado. Hablemos de las tres juntas.",
  },
};

export default function Diagnostic() {
  const [selected, setSelected] = useState(() => new Set());
  const [result, setResult] = useState(null);

  const toggle = (i) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const handleSubmit = () => {
    const counts = { liderazgo: 0, gestion: 0, digital: 0 };
    selected.forEach((i) => counts[CARDS[i].area]++);
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const [topKey, topCount] = entries[0];
    const [, secondCount] = entries[1];
    const key = topCount > 0 && topCount > secondCount ? topKey : "mixto";
    setResult(RESULTS[key]);
  };

  const reset = () => {
    setSelected(new Set());
    setResult(null);
  };

  return (
    <section className="diagnostic" id="diagnostico">
      <div className="container diagnostic__wrap">
        <Reveal className="diagnostic__head">
          <span className="eyebrow diagnostic__eyebrow">Diagnóstico</span>
          <h2>¿Qué está frenando tu crecimiento?</h2>
          <p>
            Marcá lo que te resuena. No hace falta que sea todo — con lo que
            elijas alcanza para ver dónde está tu principal freno hoy.
          </p>
        </Reveal>

        {!result && (
          <Reveal>
            <div className="diagnostic__grid">
              {CARDS.map((card, i) => {
                const sel = selected.has(i);
                return (
                  <div
                    key={card.text}
                    className={`diag-card${sel ? " sel" : ""}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="diag-card__box">
                      {sel && (
                        <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                          <path
                            d="M1 5L4.5 8.5L12 1"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    {card.text}
                  </div>
                );
              })}
            </div>

            <div className="diagnostic__actions">
              <button
                className="diagnostic__submit"
                disabled={selected.size === 0}
                onClick={handleSubmit}
              >
                Ver mi diagnóstico →
              </button>
            </div>
            {selected.size === 0 && (
              <p className="diagnostic__hint">Elegí al menos una que te resuene.</p>
            )}
          </Reveal>
        )}

        {result && (
          <div className="diagnostic__result">
            <div className="diagnostic__result-tag">{result.tag}</div>
            <p>{result.text}</p>
            <a href="#contacto" className="btn btn-cta">
              Agendemos una charla
              <span className="btn-cta__icon">+</span>
            </a>
            <button className="diagnostic__reset" onClick={reset}>
              Volver a elegir
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
