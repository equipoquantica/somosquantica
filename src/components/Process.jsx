import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
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

export default function Process() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = trackRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const total = rect.height + vh * 0.5;
          const passed = vh * 0.8 - rect.top;
          setProgress(Math.max(0, Math.min(1, passed / total)));
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pct = `${(progress * 100).toFixed(1)}%`;
  const activeIndex = Math.min(3, Math.floor(progress * 4));

  return (
    <section id="como-trabajamos" className="method">
      <div className="container">
        <Reveal as="span" className="eyebrow method__eyebrow">
          Cómo trabajamos
        </Reveal>
        <Reveal as="h2" className="method__title">
          Empecemos a calibrar tu negocio.
        </Reveal>

        <div className="scrubber" ref={trackRef}>
          <div className="scrub-row">
            <div className="scrub-end">‖ Diagnóstico</div>
            <div className="scrub-track">
              <div className="scrub-fill" style={{ width: pct }} />
              <div className="scrub-dot" style={{ left: pct }} />
            </div>
            <div className="scrub-end">▶ Resultado</div>
          </div>

          <div className="method-steps">
            {STEPS.map((item, i) => (
              <div
                className={`method-step${i === activeIndex ? " active" : ""}`}
                key={item.step}
              >
                <span className="n">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
