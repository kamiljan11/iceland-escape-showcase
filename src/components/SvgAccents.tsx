/** Small hand-drawn-style SVG decorations and background patterns */

/* ── Inline decorative elements ── */

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
    <text x="20" y="3" textAnchor="middle" fill="currentColor" fontSize="4" fontWeight="bold" opacity="0.25">N</text>
  </svg>
);

export const LeafAccent = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`${className}`}>
    <path
      d="M12 3C12 3 4 8 4 14C4 18 8 21 12 21C16 21 20 18 20 14C20 8 12 3 12 3Z"
      stroke="currentColor" strokeWidth="1" opacity="0.15" strokeLinecap="round"
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
      stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15"
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

/* ── Background patterns (absolute positioned, used as section backgrounds) ── */

/** Topographic contour lines — great for story/about sections */
export const TopoBg = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 600" fill="none">
    <path d="M-50 300 Q100 200 250 280 Q400 360 550 250 Q700 140 850 220" stroke="currentColor" strokeWidth="0.8" opacity="0.06" />
    <path d="M-50 340 Q120 240 280 320 Q440 400 580 280 Q720 160 850 260" stroke="currentColor" strokeWidth="0.6" opacity="0.05" />
    <path d="M-50 380 Q140 280 310 360 Q480 440 610 310 Q740 180 850 300" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
    <path d="M-50 200 Q80 120 200 180 Q340 250 480 160 Q620 70 850 150" stroke="currentColor" strokeWidth="0.7" opacity="0.05" />
    <path d="M-50 160 Q100 80 240 140 Q380 210 520 120 Q660 30 850 110" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
    <path d="M-50 450 Q160 370 320 430 Q500 500 650 380 Q780 280 850 360" stroke="currentColor" strokeWidth="0.6" opacity="0.04" />
  </svg>
);

/** Scattered organic dots — like volcanic sand grains */
export const DotFieldBg = ({ className = "" }: { className?: string }) => {
  const dots = [
    { x: 5, y: 8 }, { x: 15, y: 45 }, { x: 25, y: 22 }, { x: 35, y: 68 },
    { x: 42, y: 12 }, { x: 55, y: 38 }, { x: 62, y: 72 }, { x: 72, y: 18 },
    { x: 78, y: 55 }, { x: 85, y: 30 }, { x: 92, y: 65 }, { x: 48, y: 85 },
    { x: 18, y: 78 }, { x: 68, y: 42 }, { x: 30, y: 50 }, { x: 88, y: 88 },
    { x: 8, y: 60 }, { x: 52, y: 58 }, { x: 38, y: 32 }, { x: 95, y: 15 },
  ];
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={0.3 + (i % 3) * 0.15} fill="currentColor" opacity={0.06 + (i % 4) * 0.01} />
      ))}
    </svg>
  );
};

/** Glacier crack pattern — subtle branching lines */
export const GlacierCracksBg = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" fill="none">
    <path d="M150 0 L160 80 L140 130 L170 200 L155 280 L180 400" stroke="currentColor" strokeWidth="0.6" opacity="0.05" strokeLinecap="round" />
    <path d="M160 80 L210 110 L250 95" stroke="currentColor" strokeWidth="0.4" opacity="0.04" strokeLinecap="round" />
    <path d="M140 130 L100 160 L80 210" stroke="currentColor" strokeWidth="0.4" opacity="0.04" strokeLinecap="round" />
    <path d="M420 0 L410 60 L430 140 L405 220 L425 320 L410 400" stroke="currentColor" strokeWidth="0.6" opacity="0.05" strokeLinecap="round" />
    <path d="M430 140 L470 165 L510 150" stroke="currentColor" strokeWidth="0.4" opacity="0.04" strokeLinecap="round" />
    <path d="M405 220 L370 250 L340 240" stroke="currentColor" strokeWidth="0.4" opacity="0.04" strokeLinecap="round" />
  </svg>
);

/** Aurora wave bands — flowing curves for dark/CTA backgrounds */
export const AuroraBandsBg = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none">
    <path d="M0 100 Q150 40 300 100 Q450 160 600 80 Q750 0 1000 60" stroke="currentColor" strokeWidth="2" opacity="0.06" strokeLinecap="round" />
    <path d="M0 150 Q200 80 400 140 Q600 200 800 110 Q900 70 1000 100" stroke="currentColor" strokeWidth="1.5" opacity="0.04" strokeLinecap="round" />
    <path d="M0 300 Q180 240 350 290 Q520 340 700 270 Q850 220 1000 260" stroke="currentColor" strokeWidth="1.5" opacity="0.05" strokeLinecap="round" />
    <path d="M0 340 Q200 280 400 330 Q600 380 800 300 Q900 260 1000 290" stroke="currentColor" strokeWidth="1" opacity="0.03" strokeLinecap="round" />
  </svg>
);
