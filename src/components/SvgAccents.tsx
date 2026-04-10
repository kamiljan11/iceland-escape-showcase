/** Small hand-drawn-style SVG decorations used across sections */

export const MountainDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 60" fill="none" className={`w-full ${className}`} preserveAspectRatio="none">
    <path
      d="M0 45 L80 30 L140 42 L220 18 L280 35 L340 22 L420 38 L480 12 L540 32 L600 20 L660 36 L720 14 L800 28 L860 40 L920 16 L980 34 L1040 24 L1100 38 L1160 28 L1200 35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.2"
    />
  </svg>
);

export const WindLines = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 30" fill="none" className={`${className}`}>
    <path d="M5 15 Q20 8 40 15 Q60 22 80 12 Q95 5 115 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
    <path d="M10 22 Q30 16 50 22 Q70 28 90 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
  </svg>
);

export const CompassRose = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={`${className}`}>
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.8" opacity="0.15" />
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.2" />
    <line x1="20" y1="4" x2="20" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.25" strokeLinecap="round" />
    <line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeLinecap="round" />
    <line x1="4" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeLinecap="round" />
    <line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.15" strokeLinecap="round" />
    {/* N marker */}
    <text x="20" y="3" textAnchor="middle" fill="currentColor" fontSize="4" fontWeight="bold" opacity="0.25">N</text>
  </svg>
);

export const LeafAccent = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${className}`}>
    <path
      d="M12 3C12 3 4 8 4 14C4 18 8 21 12 21C16 21 20 18 20 14C20 8 12 3 12 3Z"
      stroke="currentColor"
      strokeWidth="1"
      opacity="0.15"
      strokeLinecap="round"
    />
    <path d="M12 6V18" stroke="currentColor" strokeWidth="0.8" opacity="0.12" strokeLinecap="round" />
    <path d="M8 12Q10 10 12 11" stroke="currentColor" strokeWidth="0.6" opacity="0.1" strokeLinecap="round" />
    <path d="M16 10Q14 9 12 10" stroke="currentColor" strokeWidth="0.6" opacity="0.1" strokeLinecap="round" />
  </svg>
);

export const WaveDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1200 40" fill="none" className={`w-full ${className}`} preserveAspectRatio="none">
    <path
      d="M0 20 Q100 5 200 20 Q300 35 400 20 Q500 5 600 20 Q700 35 800 20 Q900 5 1000 20 Q1100 35 1200 20"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.15"
    />
  </svg>
);

export const NorthernLightsAccent = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 40" fill="none" className={`${className}`}>
    <path d="M10 35 Q30 5 60 20 Q90 35 120 10 Q150 -5 180 15 Q195 22 200 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
    <path d="M20 38 Q50 15 80 28 Q110 38 140 15 Q160 5 190 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.12" />
  </svg>
);

export const DotTrail = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 8" fill="none" className={`${className}`}>
    {[10, 22, 36, 52, 70, 82, 92].map((x, i) => (
      <circle key={i} cx={x} cy="4" r={1.2 - i * 0.08} fill="currentColor" opacity={0.3 - i * 0.03} />
    ))}
  </svg>
);
