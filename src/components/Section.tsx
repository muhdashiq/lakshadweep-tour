import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  tone?: "light" | "tinted";
};

export const Section = ({ id, eyebrow, title, children, tone = "light" }: SectionProps) => (
  <section id={id} className={`section section--${tone}`}>
    <div className="container">
      <Reveal className="section__head">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </div>
  </section>
);
