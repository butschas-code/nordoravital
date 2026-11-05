export function FloorDiagram() {
  return (
    <svg
      viewBox="0 0 760 420"
      role="img"
      aria-labelledby="floor-title floor-desc"
      className="h-auto w-full"
    >
      <title id="floor-title">Principa shēma: Sanza stacija blakus esošajai zālei</title>
      <desc id="floor-desc">
        Fitnesa zāle un boksa zona paliek. Sanza stacija ir pievienota kā atsevišķs stūris
        bez norādītiem izmēriem.
      </desc>
      <rect x="1" y="1" width="758" height="418" fill="none" stroke="rgba(244,240,232,0.35)" />
      <rect x="28" y="28" width="470" height="250" fill="none" stroke="rgba(244,240,232,0.45)" />
      <text x="44" y="54" fill="#f4f0e8" fontSize="14" fontFamily="inherit">
        Fitnesa zāle
      </text>
      <g fill="none" stroke="rgba(244,240,232,0.4)" strokeWidth="1.5">
        <rect x="48" y="78" width="70" height="54" />
        <rect x="132" y="78" width="70" height="54" />
        <rect x="48" y="148" width="154" height="36" />
        <path d="M250 90 h90 M250 110 h90 M250 130 h70" />
      </g>
      <text x="250" y="168" fill="#c9c1b6" fontSize="12" fontFamily="inherit">
        Esošais treniņu laukums
      </text>

      <rect x="520" y="28" width="212" height="250" fill="none" stroke="rgba(244,240,232,0.45)" />
      <text x="536" y="54" fill="#f4f0e8" fontSize="14" fontFamily="inherit">
        Boksa zona
      </text>
      <circle cx="626" cy="150" r="36" fill="none" stroke="rgba(244,240,232,0.4)" />
      <text x="548" y="210" fill="#c9c1b6" fontSize="12" fontFamily="inherit">
        Paliek savā grafikā
      </text>

      <rect x="28" y="300" width="250" height="92" fill="rgba(80,112,64,0.28)" stroke="#b7cbb8" />
      <text x="44" y="334" fill="#f4f0e8" fontSize="15" fontFamily="inherit">
        Sanza stacija
      </text>
      <text x="44" y="358" fill="#e4ddd4" fontSize="12" fontFamily="inherit">
        Pievienota. Pēc pieraksta.
      </text>
      <path
        d="M278 346 H470"
        fill="none"
        stroke="#b7cbb8"
        strokeDasharray="4 5"
      />
      <text x="300" y="334" fill="#c9c1b6" fontSize="12" fontFamily="inherit">
        pēc treniņa, nevis tā vietā
      </text>
      <text x="520" y="346" fill="#c9c1b6" fontSize="12" fontFamily="inherit">
        Izmēri nav noteikti.
      </text>
      <text x="520" y="368" fill="#c9c1b6" fontSize="12" fontFamily="inherit">
        Telpas nav apsekotas.
      </text>
    </svg>
  );
}
