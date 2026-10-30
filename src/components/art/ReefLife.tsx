type FishProps = { color: string; stripe?: string; x?: number; y?: number; scale?: number };

const Fish = ({ color, stripe, x = 0, y = 0, scale = 1 }: FishProps) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M12 15L0 4q3 11 0 22z" fill={color} />
    <path d="M10 15C18 3 40 3 52 15C40 27 18 27 10 15z" fill={color} />
    {stripe && <path d="M24 7q5 8 0 16M36 7q4 8 0 16" fill="none" stroke={stripe} strokeWidth="3.5" />}
    <circle cx="44" cy="13" r="2" fill="#06283a" />
  </g>
);

const SCHOOL = [
  [0, 40, 1],
  [70, 12, 0.85],
  [64, 66, 0.9],
  [140, 36, 1.05],
  [130, 0, 0.75],
  [204, 58, 0.8],
  [216, 18, 0.95],
] as const;

export const FishSchool = ({ color }: { color: string }) => (
  <svg className="art" viewBox="0 0 280 100" aria-hidden="true">
    {SCHOOL.map(([x, y, scale]) => (
      <Fish key={`${x}-${y}`} color={color} x={x} y={y} scale={scale} />
    ))}
  </svg>
);

export const ClownFish = () => (
  <svg className="art" viewBox="0 0 54 30" aria-hidden="true">
    <Fish color="#ff6b4a" stripe="#fff" />
  </svg>
);

export const Turtle = () => (
  <svg className="art" viewBox="0 0 170 100" aria-hidden="true">
    <path className="flipper" d="M56 66Q40 84 22 86Q32 72 44 60z" fill="#2c6e57" />
    <path d="M118 48Q134 34 150 40Q160 48 152 58Q136 66 118 60z" fill="#3f9273" />
    <circle cx="146" cy="47" r="2.6" fill="#06283a" />
    <ellipse cx="82" cy="50" rx="46" ry="30" fill="#2c6e57" />
    <path d="M56 28L70 50L56 72M82 21V79M108 28L94 50L108 72M70 50H94" fill="none" stroke="#7cc0a0" strokeWidth="3" />
    <path className="flipper flipper--front" d="M104 66Q116 92 96 98Q78 98 74 90Q90 84 88 68z" fill="#3f9273" />
  </svg>
);

const mulberry = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const branch = (
  x: number,
  y: number,
  angle: number,
  length: number,
  depth: number,
  random: () => number,
): string => {
  if (depth === 0) return "";
  const endX = x + Math.cos(angle) * length;
  const endY = y + Math.sin(angle) * length;
  const spread = 0.3 + random() * 0.4;
  return (
    `M${x.toFixed(1)} ${y.toFixed(1)}L${endX.toFixed(1)} ${endY.toFixed(1)}` +
    branch(endX, endY, angle - spread, length * 0.74, depth - 1, random) +
    branch(endX, endY, angle + spread, length * 0.74, depth - 1, random)
  );
};

const FLOOR_Y = 280;

const BRANCH_CORALS = [
  { x: 120, length: 46, depth: 5, color: "#ff6b4a", width: 9, seed: 3 },
  { x: 330, length: 34, depth: 5, color: "#ffc531", width: 7, seed: 8 },
  { x: 560, length: 52, depth: 5, color: "#e8568f", width: 10, seed: 13 },
  { x: 760, length: 38, depth: 5, color: "#ff6b4a", width: 8, seed: 21 },
  { x: 980, length: 48, depth: 5, color: "#8e6bd8", width: 9, seed: 34 },
  { x: 1230, length: 54, depth: 5, color: "#ffc531", width: 10, seed: 55 },
].map((coral) => ({
  ...coral,
  path: branch(coral.x, FLOOR_Y, -Math.PI / 2, coral.length, coral.depth, mulberry(coral.seed)),
}));

const BRAIN_CORALS = [
  { x: 230, rx: 62, ry: 46, fill: "#8e6bd8", ridge: "#b79cec" },
  { x: 670, rx: 54, ry: 40, fill: "#12a59b", ridge: "#5dd6c8" },
  { x: 1090, rx: 70, ry: 50, fill: "#e8568f", ridge: "#f59abb" },
  { x: 1380, rx: 50, ry: 38, fill: "#12a59b", ridge: "#5dd6c8" },
];

const GRASS_X = [36, 60, 440, 468, 492, 860, 884, 908, 1160, 1320];

export const Reef = () => (
  <svg className="reef-art" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    {GRASS_X.map((x, index) => (
      <path
        key={x}
        className={`grass ${index % 2 ? "grass--late" : ""}`}
        d={`M${x} ${FLOOR_Y + 10}Q${x - 18} ${FLOOR_Y - 60} ${x + 6} ${FLOOR_Y - 120}`}
        fill="none"
        stroke="#1d8f76"
        strokeWidth="9"
        strokeLinecap="round"
      />
    ))}
    {BRANCH_CORALS.map((coral) => (
      <path
        key={coral.x}
        d={coral.path}
        fill="none"
        stroke={coral.color}
        strokeWidth={coral.width}
        strokeLinecap="round"
      />
    ))}
    {BRAIN_CORALS.map((coral) => (
      <g key={coral.x}>
        <ellipse cx={coral.x} cy={FLOOR_Y} rx={coral.rx} ry={coral.ry} fill={coral.fill} />
        <path
          d={`M${coral.x - coral.rx * 0.7} ${FLOOR_Y}a${coral.rx * 0.7} ${coral.ry * 0.7} 0 0 1 ${coral.rx * 1.4} 0M${coral.x - coral.rx * 0.4} ${FLOOR_Y}a${coral.rx * 0.4} ${coral.ry * 0.4} 0 0 1 ${coral.rx * 0.8} 0`}
          fill="none"
          stroke={coral.ridge}
          strokeWidth="4"
        />
      </g>
    ))}
    <path
      d="M0 276Q180 256 380 274T760 270T1140 276T1440 266V320H0z"
      fill="#e9d6a8"
    />
    <path d="M0 300Q240 284 520 298T1040 296T1440 292V320H0z" fill="#d6bd88" />
  </svg>
);
