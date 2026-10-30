import type { Testimonial } from "../data/types";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export const Testimonials = ({ items }: { items: Testimonial[] }) => (
  <Section id="reviews" eyebrow="Reviews" title="Travellers talk about the trip">
    <div className="grid grid--3">
      {items.map((item, index) => (
        <Reveal key={item.name} delay={index * 0.1}>
          <figure className="quote">
            <blockquote>“{item.quote}”</blockquote>
            <figcaption>
              <strong>{item.name}</strong> · {item.from}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </Section>
);
