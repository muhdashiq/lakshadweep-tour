const SUIT = "#06283a";
const SUIT_LIGHT = "#0f4c68";
const FIN = "#ff6b4a";
const TANK = "#ffc531";
const LENS = "#bff3f2";
const SKIN = "#b97a4f";

export const Diver = () => (
  <svg className="art" viewBox="0 0 300 130" aria-hidden="true">
    <g className="kick kick--back">
      <path d="M122 72L66 86" stroke={SUIT_LIGHT} strokeWidth="14" strokeLinecap="round" />
      <path d="M70 80L14 84q-10 8 0 15l58-7z" fill="#e4553a" />
    </g>
    <g className="kick kick--front">
      <path d="M122 66L64 60" stroke={SUIT} strokeWidth="15" strokeLinecap="round" />
      <path d="M68 53L12 42q-10 6-2 15l58 11z" fill={FIN} />
    </g>
    <rect x="136" y="24" width="78" height="23" rx="11.5" fill={TANK} />
    <rect x="150" y="24" width="7" height="23" fill="#e0a51c" />
    <rect x="212" y="30" width="9" height="11" rx="2" fill={SUIT} />
    <path
      d="M112 62C122 42 196 38 218 50C232 60 226 80 208 82C180 86 134 86 118 78C110 74 108 68 112 62z"
      fill={SUIT}
    />
    <path d="M203 68L250 88" stroke={SUIT_LIGHT} strokeWidth="11" strokeLinecap="round" />
    <circle cx="255" cy="90" r="6.5" fill={SKIN} />
    <circle cx="238" cy="48" r="17" fill={SUIT} />
    <rect x="238" y="37" width="20" height="15" rx="6" fill={LENS} stroke={SUIT_LIGHT} strokeWidth="2.5" />
    <path d="M221 38Q232 76 250 64" fill="none" stroke={TANK} strokeWidth="3" />
    <circle cx="252" cy="62" r="5.5" fill={TANK} />
  </svg>
);

export const Snorkeler = () => (
  <svg className="art" viewBox="0 0 260 110" aria-hidden="true">
    <g className="kick kick--back">
      <path d="M100 66L52 72" stroke="#a66b43" strokeWidth="11" strokeLinecap="round" />
      <path d="M56 66L10 66q-8 6 0 12l48 2z" fill="#e0a51c" />
    </g>
    <g className="kick kick--front">
      <path d="M100 62L50 52" stroke={SKIN} strokeWidth="12" strokeLinecap="round" />
      <path d="M54 46L8 34q-9 5-2 13l48 13z" fill={TANK} />
    </g>
    <path
      d="M92 58C104 42 166 40 184 50C194 58 190 72 176 74C150 78 110 78 98 72C90 68 88 64 92 58z"
      fill={FIN}
    />
    <path d="M170 60L214 70" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
    <circle cx="202" cy="48" r="15" fill={SKIN} />
    <path d="M188 42a15 15 0 0 1 24-6l-4 6z" fill={SUIT} />
    <rect x="202" y="40" width="17" height="12" rx="5" fill={LENS} stroke={SUIT} strokeWidth="2" />
    <path d="M194 34V8" stroke={TANK} strokeWidth="5" strokeLinecap="round" />
  </svg>
);
