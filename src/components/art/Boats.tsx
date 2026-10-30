const REEF = "#07344a";
const CORAL = "#ff6b4a";
const SUN = "#ffc531";
const GLASS = "#bff3f2";

export const GlassBoat = () => (
  <svg className="art" viewBox="0 0 240 130" aria-hidden="true">
    <path d="M20 78V44" stroke={REEF} strokeWidth="3" strokeLinecap="round" />
    <path className="flag" d="M20 44l20 7-20 7z" fill={SUN} />
    <path d="M58 78V42M178 78V42" stroke={REEF} strokeWidth="3.5" />
    <circle cx="84" cy="60" r="7" fill={REEF} />
    <path d="M73 78v-5a11 9 0 0 1 22 0v5z" fill={REEF} />
    <circle cx="112" cy="60" r="7" fill={CORAL} />
    <path d="M101 78v-5a11 9 0 0 1 22 0v5z" fill={CORAL} />
    <circle cx="142" cy="60" r="7" fill={REEF} />
    <path d="M131 78v-5a11 9 0 0 1 22 0v5z" fill={REEF} />
    <path d="M42 42Q118 22 194 42v5H42z" fill={CORAL} />
    <path
      d="M42 47q6.3 8 12.7 0q6.3 8 12.6 0q6.4 8 12.7 0q6.3 8 12.7 0q6.3 8 12.6 0q6.4 8 12.7 0q6.3 8 12.7 0q6.3 8 12.6 0q6.4 8 12.7 0q6.3 8 12.7 0q6.3 8 12.6 0q6.4 8 12.7 0z"
      fill="#fff"
    />
    <path
      d="M6 78H226q10 0 6 6l-18 28q-6 8-18 8H44q-14 0-22-10L4 84q-2-6 2-6z"
      fill="#fff"
    />
    <path d="M6.5 88H229l-5 8H12z" fill={CORAL} />
    <rect x="52" y="100" width="40" height="10" rx="3" fill={GLASS} />
    <rect x="100" y="100" width="40" height="10" rx="3" fill={GLASS} />
    <rect x="148" y="100" width="40" height="10" rx="3" fill={GLASS} />
  </svg>
);

/** A lateen sail, the shape of the traditional boats around these islands. */
export const SailBoat = () => (
  <svg className="art" viewBox="0 0 120 110" aria-hidden="true">
    <path d="M58 86V10" stroke={REEF} strokeWidth="3" />
    <path d="M60 8Q112 40 106 78H60z" fill="#fff" />
    <path d="M56 26Q24 50 20 78H56z" fill={SUN} />
    <path d="M10 84H110L98 102H22z" fill={REEF} />
  </svg>
);

export const Gull = () => (
  <svg className="gull" viewBox="0 0 40 16" aria-hidden="true">
    <path
      d="M2 12Q10 0 20 10Q30 0 38 12"
      fill="none"
      stroke="#fff"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

/** The same glass boat seen from underwater, as the page slides beneath it. */
export const HullFromBelow = () => (
  <svg className="art" viewBox="0 0 480 130" aria-hidden="true">
    <path d="M6 0H474Q466 58 382 94Q240 126 98 94Q14 58 6 0z" fill="#0a4a63" />
    <path d="M62 20H418Q404 62 340 82Q240 100 140 82Q76 62 62 20z" fill={REEF} />
    <rect x="146" y="30" width="188" height="42" rx="10" fill={GLASS} />
    <circle cx="186" cy="50" r="10" fill="#0a4a63" />
    <circle cx="240" cy="48" r="10" fill={CORAL} />
    <circle cx="294" cy="50" r="10" fill="#0a4a63" />
    <path d="M170 72a16 12 0 0 1 32 0zM224 72a16 12 0 0 1 32 0zM278 72a16 12 0 0 1 32 0z" fill="#0a4a63" />
  </svg>
);
