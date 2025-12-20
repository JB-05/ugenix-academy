// Team collaboration illustration for "Why Choose This Academy"
// Style: unDraw-inspired outline illustration
export default function TeamIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-sm"
      aria-hidden="true"
    >
      {/* Person 1 */}
      <circle cx="120" cy="100" r="35" stroke="#5B6072" strokeWidth="2" fill="none" />
      <path
        d="M120 135 L120 200 L100 230 L140 230 L120 200 Z"
        stroke="#5B6072"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Person 2 */}
      <circle cx="280" cy="100" r="35" stroke="#5B6072" strokeWidth="2" fill="none" />
      <path
        d="M280 135 L280 200 L260 230 L300 230 L280 200 Z"
        stroke="#5B6072"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Collaboration/connection */}
      <path
        d="M155 120 L245 120"
        stroke="#6758E0"
        strokeWidth="2"
        strokeDasharray="6 4"
        opacity="0.5"
      />
      
      {/* Shared workspace/system blocks */}
      <rect x="150" y="150" width="100" height="60" rx="6" stroke="#6758E0" strokeWidth="2" fill="none" opacity="0.4" />
      <rect x="160" y="160" width="80" height="40" rx="3" stroke="#6758E0" strokeWidth="1.5" fill="none" opacity="0.3" />
      
      {/* Problem-solving elements */}
      <circle cx="200" cy="50" r="20" stroke="#6758E0" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path
        d="M195 45 L200 50 L205 45"
        stroke="#6758E0"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      
      {/* Structured blocks below */}
      <rect x="80" y="250" width="50" height="30" rx="3" stroke="#5B6072" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="270" y="250" width="50" height="30" rx="3" stroke="#5B6072" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  )
}

