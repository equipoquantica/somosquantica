import { useState } from "react";
import Reveal from "./Reveal";
import "./Signals.css";

const ITEMS = [
  {
    title: "Te cuesta delegar sin estar encima de todo",
    body: "Hiciste crecer la empresa, pero cada vez cuesta más soltar tareas sin perder el control de lo que pasa.",
  },
  {
    title: "Decisiones sin información clara",
    body: "Falta un sistema de indicadores que muestre qué está pasando realmente en el negocio antes de decidir.",
  },
  {
    title: "Áreas que no se hablan entre sí",
    body: "Liderazgo, gestión y comunicación funcionan por separado, en vez de como un mismo sistema.",
  },
  {
    title: "Resultados que no se sostienen",
    body: "Hay mejoras puntuales, pero se pierden con el tiempo por falta de seguimiento continuo.",
  },
];

export default function Signals() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="signals">
      <div className="container">
        <Reveal className="signals-head">
          <span className="eyebrow">Cuando crecer necesita más dirección</span>
          <h2>¿Qué está frenando tu crecimiento?</h2>
          <p>
            Muchas veces el problema no es la falta de ideas, sino tener
            demasiadas acciones sin saber cuáles deberían ser prioridad.
          </p>
        </Reveal>

        <Reveal className="accordion">
          {ITEMS.map((item, i) => {
            const open = i === openIndex;
            return (
              <div
                key={item.title}
                className={`acc-item${open ? " open" : ""}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <div className="acc-row">
                  <h3>{item.title}</h3>
                  <span className="acc-toggle">{open ? "–" : "+"}</span>
                </div>
                <div className="acc-body">
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
