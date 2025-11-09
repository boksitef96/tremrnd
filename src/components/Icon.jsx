const icons = {
  gear: (
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 1.5l1.2 2.7 2.8.4-2 2 0.5 2.8-2.5-1.4-2.5 1.4 0.5-2.8-2-2 2.8-.4L10 1.5z"
    />
  ),
  scalpel: (
    <>
      <path
        d="M4 12l7-7c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1l-7 7H4v-2z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 15h5l-2 2H2.5L3 15z" fill="currentColor" />
    </>
  ),
  prototype: (
    <>
      <rect x="3.5" y="3.5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  clock: (
    <>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M10 5.5V10l2.5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  limit: (
    <>
      <rect x="4" y="4" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M7 7l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  network: (
    <>
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
      <path d="M10 2v3.5m0 11V18M2 10h3.5m11 0H18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="10" cy="2" r="1" fill="currentColor" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
      <circle cx="2" cy="10" r="1" fill="currentColor" />
      <circle cx="18" cy="10" r="1" fill="currentColor" />
    </>
  ),
  arrow: (
    <path
      d="M5 10h10m0 0-3.5-3.5M15 10l-3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  star: (
    <path
      d="M10 3l1.8 3.9 4.2.5-3.1 3.1.8 4.6L10 13.5 6.3 15.1l.8-4.6L4 7.4l4.2-.5L10 3z"
      stroke="currentColor"
      strokeWidth="1.1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  chart: (
    <>
      <path d="M4 5h2v9H4zM8 9h2v5H8zM12 7h2v7h-2zM16 3h2v11h-2z" fill="currentColor" />
      <path d="M3 15h14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </>
  ),
}

export const Icon = ({ name, className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    {icons[name] ?? icons.gear}
  </svg>
)

