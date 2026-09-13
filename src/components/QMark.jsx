export default function QMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="-2 -2 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="rgba(8, 18, 38, 0.4)" strokeWidth="4" strokeLinecap="round">
        <path
          d="M25.3 5.43 A15.5 15.5 0 1 1 14.7 5.43"
          transform="translate(1.2, 1.5)"
        />
        <path d="M23 25 L36 38" transform="translate(1.2, 1.5)" />
      </g>
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M25.3 5.43 A15.5 15.5 0 1 1 14.7 5.43" />
        <path d="M23 25 L36 38" />
      </g>
      <circle cx="20" cy="3.8" r="1.6" fill="currentColor" />
    </svg>
  );
}
