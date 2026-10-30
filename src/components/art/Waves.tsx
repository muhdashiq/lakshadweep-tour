type WavesProps = {
  fill: string;
  className?: string;
  period?: number;
  amplitude?: number;
};

const VIEW_WIDTH = 2880;
const VIEW_HEIGHT = 120;

/** Periodic, so a -50% translate on a 200%-wide svg loops without a seam. */
const wavePath = (period: number, amplitude: number) => {
  const baseline = amplitude * 2;
  const halfPeriod = period / 2;
  const segments = Array.from(
    { length: Math.ceil(VIEW_WIDTH / halfPeriod) - 1 },
    (_, index) => `T${halfPeriod * (index + 2)} ${baseline}`,
  );
  return `M0 ${baseline}Q${period / 4} 0 ${halfPeriod} ${baseline}${segments.join("")}V${VIEW_HEIGHT}H0Z`;
};

export const Waves = ({ fill, className = "", period = 480, amplitude = 18 }: WavesProps) => (
  <svg
    className={`waves ${className}`}
    viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path fill={fill} d={wavePath(period, amplitude)} />
  </svg>
);
