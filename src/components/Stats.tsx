import type { SiteConfig } from "../data/types";
import { Reveal } from "./Reveal";

export const Stats = ({ stats }: { stats: SiteConfig["stats"] }) => (
  <section className="stats">
    <div className="container stats__grid">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08} className="stat">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </Reveal>
      ))}
    </div>
  </section>
);
