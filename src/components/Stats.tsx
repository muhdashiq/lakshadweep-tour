import type { SiteConfig } from "../data/types";

export const Stats = ({ stats }: { stats: SiteConfig["stats"] }) => (
  <div className="stats">
    {stats.map((stat) => (
      <div key={stat.label} className="stat">
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
    ))}
  </div>
);
