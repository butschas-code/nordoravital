/**
 * Subtle arc/spiral inspired SVG ornament — used as section background decoration.
 * Inspired by the overlapping-arc motif of the Nordora spiral mark.
 * Max opacity: 0.04 on beige, 0.06 on dark.  Never shows literal sacred geometry.
 */
export function BrandArc({
  className = "",
  color = "currentColor",
  size = 480,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Overlapping concentric arcs — echoes the spiral logo without copying it */}
      <circle cx="240" cy="240" r="200" stroke={color} strokeWidth="1.2" strokeDasharray="8 6" />
      <circle cx="240" cy="240" r="155" stroke={color} strokeWidth="0.9" />
      <circle cx="240" cy="240" r="105" stroke={color} strokeWidth="0.7" strokeDasharray="4 5" />
      <path
        d="M240 40 C320 40 400 120 400 240 C400 340 340 400 240 420"
        stroke={color}
        strokeWidth="1.1"
        fill="none"
      />
      <path
        d="M240 80 C300 80 380 155 370 260 C360 340 310 390 230 400"
        stroke={color}
        strokeWidth="0.7"
        fill="none"
      />
    </svg>
  );
}
