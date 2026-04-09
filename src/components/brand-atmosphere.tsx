/**
 * BrandAtmosphere — decorative gradient + SVG compositions used in place of
 * stock photography across the homepage. Renders a full-bleed layer sized by
 * its parent (use with an aspect-ratio / sized container).
 *
 * Variants are tuned to the Nordora brand palette (sage, deep green, mauve).
 */

type Variant =
  | "pulse" // concentric PEMF rings with centered glow
  | "aurora" // soft gradient blobs in sage + clay
  | "waves" // layered flowing sine waves
  | "grid" // architectural grid lines with orbiting nodes
  | "lattice" // hex lattice suggesting molecular calm
  | "nightGlow"; // dark variant for dark sections

export function BrandAtmosphere({
  variant,
  className = "",
  latticeFocal,
}: {
  variant: Variant;
  className?: string;
  /** Only for `lattice`: shifts the mauve accent + glow (default center 250×250 in viewBox). */
  latticeFocal?: { x: number; y: number };
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {variant === "pulse" && <PulseArt />}
      {variant === "aurora" && <AuroraArt />}
      {variant === "waves" && <WavesArt />}
      {variant === "grid" && <GridArt />}
      {variant === "lattice" && (
        <LatticeArt focalX={latticeFocal?.x ?? 250} focalY={latticeFocal?.y ?? 250} />
      )}
      {variant === "nightGlow" && <NightGlowArt />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PULSE — concentric PEMF rings radiating from a warm center          */
/* ------------------------------------------------------------------ */
function PulseArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 50% 55%, rgba(111,138,122,0.28) 0%, rgba(14,61,52,0.18) 35%, rgba(246,241,234,0) 72%), linear-gradient(155deg, #F1EADE 0%, #E8DFD0 50%, #DDD2BF 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="pulse-core" cx="50%" cy="52%" r="22%">
            <stop offset="0%" stopColor="#A58592" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#A58592" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#A58592" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pulse-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6F8A7A" />
            <stop offset="100%" stopColor="#0E3D34" />
          </linearGradient>
        </defs>
        <rect width="600" height="600" fill="url(#pulse-core)" />
        {[60, 105, 155, 210, 270, 335].map((r, i) => (
          <circle
            key={r}
            cx="300"
            cy="315"
            r={r}
            stroke="url(#pulse-ring)"
            strokeWidth="0.9"
            opacity={0.55 - i * 0.065}
            style={{
              transformOrigin: "300px 315px",
              animation: `breathe ${7 + i}s ease-in-out ${i * 0.35}s infinite`,
            }}
          />
        ))}
        {/* Warm center dot */}
        <circle cx="300" cy="315" r="6" fill="#A58592" opacity="0.85" />
        <circle cx="300" cy="315" r="14" fill="#A58592" opacity="0.2" />
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* AURORA — soft, drifting colour blobs on warm cream                  */
/* ------------------------------------------------------------------ */
function AuroraArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #F6F1EA 0%, #EDE3D0 50%, #E0D2BA 100%)",
        }}
      />
      <div
        className="absolute -left-10 -top-10 h-[55%] w-[65%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(111,138,122,0.45) 0%, rgba(111,138,122,0) 70%)",
          animation: "breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-8 top-[10%] h-[50%] w-[55%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(165,133,146,0.4) 0%, rgba(165,133,146,0) 72%)",
          animation: "breathe 10s ease-in-out 1.2s infinite",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[60%] w-[75%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(14,61,52,0.32) 0%, rgba(14,61,52,0) 70%)",
          animation: "breathe 12s ease-in-out 0.6s infinite",
        }}
      />
      {/* Delicate floating particles */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[
          [70, 90, 2],
          [140, 60, 1.5],
          [210, 110, 2.5],
          [300, 80, 1.8],
          [340, 180, 2],
          [95, 250, 1.7],
          [200, 290, 2.2],
          [280, 310, 1.5],
          [50, 330, 2],
          [370, 270, 1.9],
        ].map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#0E3D34"
            opacity="0.28"
            style={{ animation: `breathe ${5 + (i % 4)}s ease-in-out ${i * 0.4}s infinite` }}
          />
        ))}
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* WAVES — layered sine waves suggesting calm rhythm                   */
/* ------------------------------------------------------------------ */
function WavesArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #F6F1EA 0%, #E8DDC9 55%, #D4C4A8 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="wave-sage" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6F8A7A" stopOpacity="0" />
            <stop offset="50%" stopColor="#6F8A7A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#6F8A7A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-deep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0E3D34" stopOpacity="0" />
            <stop offset="50%" stopColor="#0E3D34" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0E3D34" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-clay" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A58592" stopOpacity="0" />
            <stop offset="50%" stopColor="#A58592" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A58592" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Decorative horizon glow */}
        <ellipse cx="400" cy="260" rx="360" ry="60" fill="#A58592" opacity="0.12" />
        {/* Waves */}
        <path
          d="M0 200 Q200 150 400 200 T800 200"
          stroke="url(#wave-sage)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M0 240 Q200 190 400 240 T800 240"
          stroke="url(#wave-deep)"
          strokeWidth="1.4"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M0 280 Q200 230 400 280 T800 280"
          stroke="url(#wave-clay)"
          strokeWidth="1.1"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M0 320 Q200 270 400 320 T800 320"
          stroke="url(#wave-sage)"
          strokeWidth="1"
          fill="none"
          opacity="0.55"
        />
        <path
          d="M0 360 Q200 310 400 360 T800 360"
          stroke="url(#wave-deep)"
          strokeWidth="0.9"
          fill="none"
          opacity="0.45"
        />
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* GRID — architectural grid + orbital nodes                           */
/* ------------------------------------------------------------------ */
function GridArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #F1EADE 0%, #E4D8C1 60%, #CFBFA1 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0E3D34" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#0E3D34" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Vertical lines */}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={(i + 1) * 40}
            y1="0"
            x2={(i + 1) * 40}
            y2="500"
            stroke="url(#grid-fade)"
            strokeWidth="0.6"
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: 11 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={(i + 1) * 40}
            x2="400"
            y2={(i + 1) * 40}
            stroke="url(#grid-fade)"
            strokeWidth="0.6"
          />
        ))}
        {/* Orbital nodes */}
        <circle cx="200" cy="250" r="95" stroke="#6F8A7A" strokeWidth="0.8" opacity="0.5" />
        <circle cx="200" cy="250" r="60" stroke="#6F8A7A" strokeWidth="0.7" opacity="0.4" />
        <circle cx="200" cy="250" r="30" stroke="#A58592" strokeWidth="0.9" opacity="0.6" />
        <circle cx="200" cy="250" r="5" fill="#A58592" opacity="0.9" />
        {/* Node dots on the orbits */}
        <circle cx="295" cy="250" r="3" fill="#0E3D34" opacity="0.85" />
        <circle cx="200" cy="190" r="2.5" fill="#6F8A7A" opacity="0.85" />
        <circle cx="140" cy="250" r="3" fill="#A58592" opacity="0.85" />
        <circle cx="200" cy="310" r="2.5" fill="#0E3D34" opacity="0.85" />
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* LATTICE — hex lattice with soft glow                                */
/* ------------------------------------------------------------------ */
function LatticeArt({
  focalX = 250,
  focalY = 250,
}: {
  focalX?: number;
  focalY?: number;
} = {}) {
  const uid = `${focalX}-${focalY}`;
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #F6F1EA 0%, #EBDFCA 55%, #D6C5A3 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient
            id={`hex-glow-${uid}`}
            cx={focalX}
            cy={focalY}
            r="210"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6F8A7A" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#6F8A7A" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#6F8A7A" stopOpacity="0" />
          </radialGradient>
          <pattern
            id={`hex-pattern-${uid}`}
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 2 L56 17 L56 47 L30 62 L4 47 L4 17 Z"
              stroke="#0E3D34"
              strokeWidth="0.6"
              fill="none"
              opacity="0.35"
            />
          </pattern>
        </defs>
        <rect width="500" height="500" fill={`url(#hex-pattern-${uid})`} />
        <rect width="500" height="500" fill={`url(#hex-glow-${uid})`} />
        {/* Accent dots — position follows focal (default dead centre) */}
        <circle cx={focalX} cy={focalY} r="7" fill="#A58592" opacity="0.9" />
        <circle cx={focalX} cy={focalY} r="18" stroke="#A58592" strokeWidth="0.8" opacity="0.5" />
        <circle cx={focalX} cy={focalY} r="32" stroke="#A58592" strokeWidth="0.6" opacity="0.3" />
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* NIGHT GLOW — dark variant for dark sections                         */
/* ------------------------------------------------------------------ */
function NightGlowArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 55% 48%, rgba(111,138,122,0.38) 0%, rgba(14,61,52,0.25) 45%, transparent 80%), linear-gradient(160deg, #082721 0%, #0E3D34 55%, #0A2A24 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[55, 95, 140, 190, 250, 320].map((r, i) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            stroke="#A58592"
            strokeWidth="0.7"
            opacity={0.35 - i * 0.04}
          />
        ))}
        <circle cx="300" cy="300" r="8" fill="#A58592" opacity="0.95" />
        <circle cx="300" cy="300" r="18" fill="#A58592" opacity="0.25" />
      </svg>
      {/* Floating particles */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[
          [60, 80],
          [320, 70],
          [350, 200],
          [80, 300],
          [250, 340],
          [160, 90],
          [300, 280],
          [40, 200],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={1.6}
            fill="#F6F1EA"
            opacity="0.55"
            style={{ animation: `breathe ${4 + (i % 3)}s ease-in-out ${i * 0.3}s infinite` }}
          />
        ))}
      </svg>
    </>
  );
}
