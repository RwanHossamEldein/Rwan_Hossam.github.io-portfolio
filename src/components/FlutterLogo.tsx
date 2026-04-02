import { motion } from "framer-motion";

const FlutterLogo = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 256 317"
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <filter id="neonGlow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#neonGlow)">
      <polygon
        points="157.665,0.000 0.000,157.665 48.800,206.465 255.265,0.000"
        fill="#2563EB"
        opacity="0.8"
      />
      <polygon
        points="156.567,145.396 72.105,229.858 120.905,278.658 169.705,229.858 255.265,145.396"
        fill="#2563EB"
        opacity="0.9"
      />
      <polygon
        points="120.905,278.658 169.705,229.858 120.905,181.058 72.105,229.858"
        fill="#1E40AF"
      />
    </g>
  </motion.svg>
);

export default FlutterLogo;
