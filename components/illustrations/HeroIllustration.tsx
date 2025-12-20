// Hero illustration: Person learning/working with technology
// Style: unDraw-inspired outline illustration
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-lg"
      aria-hidden="true"
    >
      {/* Person at laptop */}
      <circle cx="300" cy="200" r="50" stroke="#5B6072" strokeWidth="2" fill="none" />
      <path
        d="M300 250 L300 350 L280 380 L320 380 L300 350 Z"
        stroke="#5B6072"
        strokeWidth="2"
        fill="none"
      />
      <rect x="200" y="300" width="200" height="120" rx="8" stroke="#5B6072" strokeWidth="2" fill="none" />
      <rect x="220" y="320" width="160" height="80" rx="4" stroke="#6758E0" strokeWidth="2" fill="none" />
      
      {/* Abstract code/system blocks */}
      <rect x="100" y="100" width="60" height="40" rx="4" stroke="#5B6072" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="100" y="150" width="40" height="30" rx="4" stroke="#5B6072" strokeWidth="1.5" fill="none" opacity="0.6" />
      <rect x="440" y="120" width="60" height="40" rx="4" stroke="#6758E0" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="460" y="170" width="40" height="30" rx="4" stroke="#6758E0" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Connection lines */}
      <path
        d="M160 120 L240 320"
        stroke="#6758E0"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.3"
      />
      <path
        d="M440 140 L360 320"
        stroke="#6758E0"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.3"
      />
      
      {/* Learning/thinking elements */}
      <circle cx="150" cy="80" r="25" stroke="#6758E0" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path
        d="M145 75 L150 80 L155 75"
        stroke="#6758E0"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

