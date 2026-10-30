import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Package } from "../data/types";
import { formatPrice, whatsappLink } from "../lib";
import { Picture } from "./Picture";
import { Section } from "./Section";

type PackagesProps = { packages: Package[]; currency: string; whatsapp: string };

type PackageCardProps = { pkg: Package; currency: string; whatsapp: string };

const PackageCard = ({ pkg, currency, whatsapp }: PackageCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`ticket ${pkg.featured ? "ticket--featured" : ""}`}>
      {pkg.featured && <span className="badge">Most popular</span>}
      <Picture image={pkg.image} />
      <div className="ticket__body">
        <p className="ticket__route">
          {pkg.nights} nights, {pkg.days} days in {pkg.islands.join(", ")}
        </p>
        <h3>{pkg.name}</h3>
        <p>{pkg.tagline}</p>

        <button
          type="button"
          className="toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Hide details" : "What's included"}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} aria-hidden="true">⌄</motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4>Included</h4>
              <ul className="ticks">
                {pkg.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4>Not included</h4>
              <ul className="ticks ticks--no">
                {pkg.exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ticket__foot">
          <strong>{formatPrice(currency, pkg.priceFrom)}</strong>
          <a
            className="btn btn--small"
            href={whatsappLink(whatsapp, `Hi! I'm interested in the ${pkg.name} package (${pkg.nights}N/${pkg.days}D).`)}
            target="_blank"
            rel="noreferrer"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
};

const PackageComparison = ({ packages, currency }: Omit<PackagesProps, "whatsapp">) => {
  const rows = Array.from(new Set(packages.flatMap((pkg) => pkg.inclusions)));
  const excludedEverywhere = (packages[0]?.exclusions ?? []).filter((item) =>
    packages.every((pkg) => pkg.exclusions.includes(item)),
  );

  return (
    <>
      <h3 className="compare__title">Compare side by side</h3>
      <div className="compare" tabIndex={0} role="region" aria-label="Package comparison table">
        <table>
          <thead>
            <tr>
              <td />
              {packages.map((pkg) => (
                <th key={pkg.id} scope="col">{pkg.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="compare__price">
              <th scope="row">Price</th>
              {packages.map((pkg) => (
                <td key={pkg.id}>{formatPrice(currency, pkg.priceFrom)}</td>
              ))}
            </tr>
            <tr>
              <th scope="row">Length</th>
              {packages.map((pkg) => (
                <td key={pkg.id}>{pkg.nights}N / {pkg.days}D</td>
              ))}
            </tr>
            {rows.map((row) => (
              <tr key={row}>
                <th scope="row">{row}</th>
                {packages.map((pkg) =>
                  pkg.inclusions.includes(row) ? (
                    <td key={pkg.id} className="compare__yes" aria-label="Included">✓</td>
                  ) : (
                    <td key={pkg.id} className="compare__no" aria-label="Not included">–</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {excludedEverywhere.length > 0 && (
        <p className="compare__note">Not included in any package: {excludedEverywhere.join(", ")}.</p>
      )}
    </>
  );
};

export const Packages = ({ packages, currency, whatsapp }: PackagesProps) => (
  <Section id="packages" title="Pick your island escape" tone="tinted">
    <div className="tickets">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} currency={currency} whatsapp={whatsapp} />
      ))}
    </div>
    <PackageComparison packages={packages} currency={currency} />
  </Section>
);
