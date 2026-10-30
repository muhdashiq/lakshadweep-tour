const SILHOUETTE = "#1f0d33";

export const CoupleBoat = () => (
  <svg className="art" viewBox="0 0 360 210" aria-hidden="true">
    <path d="M312 150V66" stroke={SILHOUETTE} strokeWidth="4" />
    <path d="M312 66H296" stroke={SILHOUETTE} strokeWidth="4" />
    <circle className="lamp-glow" cx="296" cy="82" r="22" fill="#ffc531" opacity="0.28" />
    <rect x="288" y="70" width="16" height="22" rx="4" fill="#ffc531" />
    <path d="M122 150C120 112 134 92 156 92C172 92 182 108 184 150z" fill={SILHOUETTE} />
    <circle cx="160" cy="74" r="16" fill={SILHOUETTE} />
    <path d="M178 150C178 116 188 98 208 98C226 98 236 116 238 150z" fill={SILHOUETTE} />
    <circle cx="192" cy="80" r="15" fill={SILHOUETTE} />
    <path d="M28 142Q180 176 334 136Q320 188 252 196H106Q50 190 28 142z" fill={SILHOUETTE} />
  </svg>
);

/** A leaning coconut palm, in silhouette, for the edge of the sunset. */
export const Palm = () => (
  <svg className="art" viewBox="0 0 220 340" aria-hidden="true">
    <path d="M28 340C50 260 62 170 118 96" fill="none" stroke={SILHOUETTE} strokeWidth="13" strokeLinecap="round" />
    <path d="M118 96Q70 46 8 74Q66 66 118 96z" fill={SILHOUETTE} />
    <path d="M118 96Q90 28 28 16Q84 40 118 96z" fill={SILHOUETTE} />
    <path d="M118 96Q130 26 186 6Q142 44 118 96z" fill={SILHOUETTE} />
    <path d="M118 96Q172 58 218 88Q168 76 118 96z" fill={SILHOUETTE} />
    <path d="M118 96Q164 112 196 170Q156 124 118 96z" fill={SILHOUETTE} />
    <path d="M118 96Q78 110 56 166Q86 122 118 96z" fill={SILHOUETTE} />
  </svg>
);
