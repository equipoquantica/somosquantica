export default function CircuitPattern({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="circuit-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5aa9f5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5aa9f5" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#circuit-fade)" strokeWidth="2">
        <path d="M0 40 H120 L160 80 V200 L220 260 H340" />
        <path d="M40 0 V60 L90 110 H210 L260 60 V0" />
        <path d="M0 180 H70 L110 220 V340 L150 380 H300" />
        <path d="M400 0 V90 L360 130 H260" />
        <path d="M0 300 H40 L80 340" />
        <path d="M120 400 H260 L300 440 V520" />
      </g>
      <g fill="#5aa9f5">
        <circle cx="120" cy="40" r="6" />
        <circle cx="160" cy="80" r="4" />
        <circle cx="220" cy="260" r="5" />
        <circle cx="90" cy="110" r="4" />
        <circle cx="210" cy="110" r="6" />
        <circle cx="260" cy="60" r="4" />
        <circle cx="110" cy="220" r="5" />
        <circle cx="150" cy="380" r="4" />
        <circle cx="360" cy="130" r="6" />
        <circle cx="80" cy="340" r="4" />
        <circle cx="300" cy="440" r="5" />
      </g>
      <g fill="#1c3f7a">
        <circle cx="340" cy="260" r="6" />
        <circle cx="300" cy="380" r="4" />
        <circle cx="260" cy="130" r="5" />
      </g>
    </svg>
  );
}
