import type { SiteConfig, Testimonial } from "../data/types";
import { Section } from "./Section";
import { Stats } from "./Stats";

type TestimonialsProps = { items: Testimonial[]; stats: SiteConfig["stats"] };

export const Testimonials = ({ items, stats }: TestimonialsProps) => (
  <Section id="reviews" title="What travellers tell us">
    <Stats stats={stats} />
    <div className="reviews">
      {items.map((item) => (
        <figure key={item.name} className="review">
          <blockquote>{item.quote}</blockquote>
          <figcaption>{item.name}, {item.from}</figcaption>
        </figure>
      ))}
    </div>
  </Section>
);
