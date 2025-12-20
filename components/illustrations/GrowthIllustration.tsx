// Growth/progress illustration for Call To Action
// Style: unDraw-inspired outline illustration
export default function GrowthIllustration() {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md"
      aria-hidden="true"
    >
      {/* Learning path / upward progression */}
      <path
        d="M50 280 L150 200 L250 140 L350 100 L450 60"
        stroke="#6758E0"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Progress points */}
      <circle cx="150" cy="200" r="8" fill="#6758E0" opacity="0.4" />
      <circle cx="250" cy="140" r="8" fill="#6758E0" opacity="0.5" />
      <circle cx="350" cy="100" r="8" fill="#6758E0" opacity="0.6" />
      <circle cx="450" cy="60" r="12" fill="#6758E0" opacity="0.8" />
      
      {/* Person at start */}
      <circle cx="50" cy="250" r="25" stroke="#5B6072" strokeWidth="2" fill="none" />
      <path
        d="M50 275 L50 310 L35 330 L65 330 L50 310 Z"
        stroke="#5B6072"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Person at end (growth) */}
      <circle cx="450" cy="30" r="30" stroke="#6758E0" strokeWidth="2" fill="none" />
      <path
        d="M450 60 L450 100 L430 130 L470 130 L450 100 Z"
        stroke="#6758E0"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Skills/knowledge blocks along path */}
      <rect x="120" y="180" width="40" height="25" rx="3" stroke="#5B6072" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="220" y="120" width="40" height="25" rx="3" stroke="#5B6072" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="320" y="80" width="40" height="25" rx="3" stroke="#6758E0" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Base ground line */}
      <line x1="30" y1="280" x2="470" y2="280" stroke="#5B6072" strokeWidth="1" opacity="0.2" />
    </svg>
  )
}

