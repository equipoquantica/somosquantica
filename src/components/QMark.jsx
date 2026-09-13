export default function QMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="-2 -2 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="rgba(8, 18, 38, 0.4)" strokeWidth="6.2" strokeLinecap="round">
        <path
          d="M24.96 6.37 A14.5 14.5 0 1 1 15.04 6.37"
          transform="translate(1.6, 2)"
        />
        <path d="M23 24 L35.5 36.5" transform="translate(1.6, 2)" />
      </g>
      <g stroke="currentColor" strokeWidth="6.2" strokeLinecap="round">
        <path d="M24.96 6.37 A14.5 14.5 0 1 1 15.04 6.37" />
        <path d="M23 24 L35.5 36.5" />
      </g>
      <circle cx="20" cy="5.1" r="2.1" fill="currentColor" />
    </svg>
  );
}
