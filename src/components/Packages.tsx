import { motion } from "framer-motion";
import type { Package } from "../data/types";
import { formatPrice, whatsappLink } from "../lib";
import { Picture } from "./Picture";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type PackagesProps = { packages: Package[]; currency: string; whatsapp: string };

export const Packages = ({ packages, currency, whatsapp }: PackagesProps) => (
  <Section id="packages" eyebrow="Tour packages" title="Pick your island escape" tone="tinted">
    <div className="grid grid--3">
      {packages.map((pkg, index) => (
        <Reveal key={pkg.id} delay={index * 0.1}>
          <motion.article
            className={`card ${pkg.featured ? "card--featured" : ""}`}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {pkg.featured && <span className="badge">Most popular</span>}
            <Picture image={pkg.image} fallback="🏝️" />
            <div className="card__body">
              <p className="card__kicker">
                {pkg.days}D / {pkg.nights}N · {pkg.islands.join(", ")}
              </p>
              <h3>{pkg.name}</h3>
              <p>{pkg.tagline}</p>
              <ul className="ticks">
                {pkg.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="card__meta">
                <strong>from {formatPrice(currency, pkg.priceFrom)}</strong>
                <a
                  className="btn btn--small"
                  href={whatsappLink(whatsapp, `Hi! I'm interested in the ${pkg.name} package.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire
                </a>
              </div>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  </Section>
);
