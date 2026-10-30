import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "tinted";
};

export const Section = ({ id, title, intro, children, tone = "light" }: SectionProps) => (
  <section id={id} className={`section section--${tone}`}>
    <div className="container">
      <div className="section__head">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      {children}
    </div>
  </section>
);
