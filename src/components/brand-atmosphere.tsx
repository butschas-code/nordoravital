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
  | "nightGlow" // dark variant for dark sections
  | "homeRecovery" // effort lines resolving into calm recovery rings
  | "homeReset" // structured day grid softening toward balance
  | "homeRest" // evening arc with quiet sleep-preparation glow
  | "homeWellbeing"; // personal rhythm with balanced orbit paths

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
      {variant === "homeRecovery" && <HomeRecoveryArt />}
      {variant === "homeReset" && <HomeResetArt />}
      {variant === "homeRest" && <HomeRestArt />}
      {variant === "homeWellbeing" && <HomeWellbeingArt />}
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

/* ------------------------------------------------------------------ */
/* HOME RECOVERY - mat ritual after effort                             */
/* ------------------------------------------------------------------ */
function HomeRecoveryArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 46% 38% at 78% 20%, rgba(246,241,234,0.82) 0%, rgba(246,241,234,0) 66%), radial-gradient(ellipse 58% 44% at 22% 72%, rgba(14,61,52,0.22) 0%, rgba(14,61,52,0) 68%), linear-gradient(152deg, #F7F0E5 0%, #E7DCC8 48%, #BCA98B 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="home-recovery-mat" x1="18%" y1="10%" x2="92%" y2="100%">
            <stop offset="0%" stopColor="#F6F1EA" stopOpacity="0.96" />
            <stop offset="58%" stopColor="#AEB9A4" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#0E3D34" stopOpacity="0.78" />
          </linearGradient>
          <linearGradient id="home-recovery-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F6F1EA" stopOpacity="0.05" />
            <stop offset="42%" stopColor="#F6F1EA" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#F6F1EA" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="home-recovery-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A58592" stopOpacity="0.62" />
            <stop offset="44%" stopColor="#A58592" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#A58592" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="332" cy="356" rx="260" ry="82" fill="#061A16" opacity="0.22" />
        <path
          d="M124 330 C182 276 380 242 516 266 C558 274 570 296 536 322 C466 378 246 407 116 368 C88 360 94 346 124 330Z"
          fill="url(#home-recovery-mat)"
          opacity="0.94"
        />
        <path
          d="M154 326 C212 286 384 260 494 280"
          stroke="url(#home-recovery-edge)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.72"
        />
        <path
          d="M170 356 C260 382 430 360 516 310"
          stroke="#0E3D34"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.32"
        />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M82 ${172 + i * 34} C152 ${132 + i * 18} 238 ${144 + i * 16} 302 ${190 + i * 8}`}
            stroke="#0E3D34"
            strokeWidth={i === 1 ? 2 : 1.25}
            strokeLinecap="round"
            opacity={0.28 - i * 0.045}
          />
        ))}
        <circle cx="402" cy="218" r="78" fill="url(#home-recovery-core)" />
        {[34, 58, 86, 118].map((r, i) => (
          <circle
            key={r}
            cx="402"
            cy="218"
            r={r}
            stroke={i === 0 ? "#A58592" : "#0E3D34"}
            strokeWidth={i === 0 ? 1.4 : 0.85}
            opacity={0.52 - i * 0.09}
          />
        ))}
        <path
          d="M352 214 C378 238 424 240 454 204"
          stroke="#0E3D34"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.58"
        />
        <circle cx="402" cy="218" r="6" fill="#A58592" opacity="0.88" />
        <circle cx="204" cy="298" r="10" fill="#F6F1EA" opacity="0.58" />
        <circle cx="236" cy="290" r="10" fill="#F6F1EA" opacity="0.48" />
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HOME RESET - workday pressure clearing into balance                 */
/* ------------------------------------------------------------------ */
function HomeResetArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 46% at 70% 26%, rgba(111,138,122,0.34) 0%, rgba(111,138,122,0) 70%), radial-gradient(ellipse 55% 58% at 10% 80%, rgba(165,133,146,0.24) 0%, rgba(165,133,146,0) 68%), linear-gradient(145deg, #F6F1EA 0%, #E8DDCA 52%, #CDBB9B 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="home-reset-card" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6F1EA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D6C7AE" stopOpacity="0.38" />
          </linearGradient>
          <radialGradient id="home-reset-aperture" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E3D34" stopOpacity="0.72" />
            <stop offset="54%" stopColor="#6F8A7A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6F8A7A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g opacity="0.8">
          <rect
            x="72"
            y="82"
            width="138"
            height="206"
            rx="24"
            fill="url(#home-reset-card)"
            stroke="#0E3D34"
            strokeOpacity="0.18"
          />
          <rect x="98" y="120" width="72" height="8" rx="4" fill="#0E3D34" opacity="0.28" />
          <rect x="98" y="146" width="84" height="6" rx="3" fill="#A58592" opacity="0.28" />
          <rect x="98" y="174" width="58" height="6" rx="3" fill="#0E3D34" opacity="0.2" />
          <rect
            x="164"
            y="54"
            width="156"
            height="238"
            rx="28"
            fill="url(#home-reset-card)"
            stroke="#0E3D34"
            strokeOpacity="0.16"
          />
          <rect x="194" y="100" width="84" height="8" rx="4" fill="#0E3D34" opacity="0.26" />
          <rect x="194" y="130" width="58" height="6" rx="3" fill="#A58592" opacity="0.26" />
          <rect x="194" y="158" width="78" height="6" rx="3" fill="#0E3D34" opacity="0.18" />
        </g>
        <circle cx="430" cy="210" r="118" fill="url(#home-reset-aperture)" />
        <circle cx="430" cy="210" r="66" stroke="#F6F1EA" strokeWidth="1" opacity="0.42" />
        <circle cx="430" cy="210" r="28" stroke="#A58592" strokeWidth="1.4" opacity="0.62" />
        <circle cx="430" cy="210" r="7" fill="#A58592" opacity="0.9" />
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M80 ${330 + i * 20} C190 ${292 + i * 5} 286 ${286 + i * 8} 382 ${242 + i * 6} C450 ${210 + i * 4} 512 ${206 + i * 8} 594 ${226 + i * 12}`}
            stroke={i % 2 === 0 ? "#0E3D34" : "#A58592"}
            strokeWidth={i === 1 ? 1.4 : 0.9}
            strokeLinecap="round"
            opacity={0.34 - i * 0.045}
          />
        ))}
        {[
          [526, 108, 3.2],
          [548, 150, 2.4],
          [508, 282, 2.7],
          [560, 322, 2.1],
        ].map(([cx, cy, r], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#0E3D34"
            opacity={0.42 - i * 0.05}
          />
        ))}
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HOME REST - evening room and soft sleep transition                  */
/* ------------------------------------------------------------------ */
function HomeRestArt() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 38% at 72% 18%, rgba(246,241,234,0.56) 0%, rgba(246,241,234,0) 70%), radial-gradient(ellipse 72% 48% at 50% 86%, rgba(14,61,52,0.58) 0%, rgba(14,61,52,0) 72%), linear-gradient(160deg, #F1E5D1 0%, #879D8A 48%, #082721 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 480"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="home-rest-bed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6F1EA" stopOpacity="0.86" />
            <stop offset="52%" stopColor="#9EAD99" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#0E3D34" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="home-rest-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F6F1EA" stopOpacity="0.02" />
            <stop offset="48%" stopColor="#F6F1EA" stopOpacity="0.56" />
            <stop offset="100%" stopColor="#F6F1EA" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <circle cx="446" cy="132" r="48" fill="#F6F1EA" opacity="0.76" />
        <circle cx="464" cy="116" r="48" fill="#A7B49C" opacity="0.82" />
        <path
          d="M92 330 C176 280 372 260 540 298 C588 308 596 334 548 356 C430 412 212 400 94 362 C60 352 60 344 92 330Z"
          fill="url(#home-rest-bed)"
          opacity="0.92"
        />
        <path
          d="M126 318 C218 290 404 294 520 326"
          stroke="#F6F1EA"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.48"
        />
        <path
          d="M154 350 C264 376 424 366 522 328"
          stroke="#082721"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.3"
        />
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M-20 ${216 + i * 28} C130 ${184 + i * 12} 258 ${242 + i * 8} 392 ${212 + i * 12} C490 ${190 + i * 10} 552 ${206 + i * 12} 670 ${178 + i * 18}`}
            stroke="url(#home-rest-line)"
            strokeWidth={i === 0 ? 1.35 : 0.85}
            opacity={0.64 - i * 0.1}
          />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle
            key={i}
            cx={104 + i * 72}
            cy={116 + (i % 3) * 24}
            r={1.7}
            fill="#F6F1EA"
            opacity={0.5 - i * 0.035}
          />
        ))}
        <path
          d="M224 244 C262 274 340 274 386 236"
          stroke="#A58592"
          strokeWidth="1.35"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HOME WELLBEING - personal daily rhythm with sanza modules           */
/* ------------------------------------------------------------------ */
function HomeWellbeingArt() {
  const rhythmNodes: Array<[number, number, number, string]> = [
    [150, 188, 3.2, "#0E3D34"],
    [402, 286, 3.6, "#6F8A7A"],
    [220, 332, 2.8, "#A58592"],
    [344, 150, 2.8, "#0E3D34"],
    [108, 304, 2.4, "#6F8A7A"],
    [462, 172, 2.4, "#A58592"],
  ];

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 54% 50% at 52% 40%, rgba(111,138,122,0.38) 0%, rgba(111,138,122,0.06) 62%, rgba(111,138,122,0) 78%), radial-gradient(ellipse 42% 38% at 84% 24%, rgba(165,133,146,0.28) 0%, rgba(165,133,146,0) 68%), linear-gradient(150deg, #F8F1E6 0%, #E6DAC4 56%, #C9B796 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 640 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="home-wellbeing-orbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0E3D34" stopOpacity="0.12" />
            <stop offset="46%" stopColor="#6F8A7A" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#A58592" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="home-wellbeing-module" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6F1EA" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#6F8A7A" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <ellipse
          cx="320"
          cy="228"
          rx="218"
          ry="104"
          stroke="url(#home-wellbeing-orbit)"
          strokeWidth="1.05"
          opacity="0.72"
          transform="rotate(-18 320 228)"
        />
        <ellipse
          cx="320"
          cy="228"
          rx="156"
          ry="64"
          stroke="#0E3D34"
          strokeWidth="0.85"
          opacity="0.33"
          transform="rotate(18 320 228)"
        />
        <ellipse
          cx="320"
          cy="228"
          rx="92"
          ry="36"
          stroke="#A58592"
          strokeWidth="0.9"
          opacity="0.45"
          transform="rotate(-8 320 228)"
        />
        <rect
          x="272"
          y="188"
          width="96"
          height="76"
          rx="24"
          fill="url(#home-wellbeing-module)"
          stroke="#0E3D34"
          strokeOpacity="0.18"
        />
        <rect x="296" y="212" width="48" height="8" rx="4" fill="#0E3D34" opacity="0.38" />
        <circle cx="320" cy="242" r="8" fill="#A58592" opacity="0.88" />
        <circle cx="320" cy="242" r="22" stroke="#A58592" strokeWidth="0.8" opacity="0.34" />
        <rect x="146" y="214" width="82" height="28" rx="14" fill="#F6F1EA" opacity="0.62" />
        <rect x="444" y="170" width="96" height="20" rx="10" fill="#0E3D34" opacity="0.28" />
        <rect x="478" y="198" width="22" height="88" rx="11" fill="#A58592" opacity="0.38" />
        {rhythmNodes.map(([cx, cy, r, fill], i) => (
          <circle key={i} cx={cx + 40} cy={cy - 8} r={r} fill={fill} opacity="0.72" />
        ))}
        <path
          d="M168 372 C254 334 386 338 488 382"
          stroke="#0E3D34"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.28"
        />
      </svg>
    </>
  );
}
