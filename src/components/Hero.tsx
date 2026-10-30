import { motion } from "framer-motion";
import type { SiteConfig } from "../data/types";
import { whatsappLink } from "../lib";

type HeroProps = { hero: SiteConfig["hero"]; whatsapp: string };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Hero = ({ hero, whatsapp }: HeroProps) => (
  <section id="top" className="hero">
    <div className="hero__bubbles" aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.span
          key={i}
          className="bubble"
          style={{ left: `${8 + i * 12}%`, width: 10 + (i % 3) * 8, height: 10 + (i % 3) * 8 }}
          animate={{ y: [0, -420], opacity: [0, 0.6, 0] }}
          transition={{ duration: 7 + (i % 4) * 2, repeat: Infinity, delay: i * 0.9, ease: "easeOut" }}
        />
      ))}
    </div>

    <motion.div className="container hero__content" variants={container} initial="hidden" animate="show">
      <motion.span className="eyebrow eyebrow--light" variants={item}>{hero.eyebrow}</motion.span>
      <motion.h1 variants={item}>{hero.title}</motion.h1>
      <motion.p className="hero__sub" variants={item}>{hero.subtitle}</motion.p>
      <motion.div className="hero__actions" variants={item}>
        <a className="btn" href="#packages">{hero.ctaLabel}</a>
        <a
          className="btn btn--ghost"
          href={whatsappLink(whatsapp, "Hi! I'd like to enquire about a Lakshadweep tour.")}
          target="_blank"
          rel="noreferrer"
        >
          {hero.secondaryCtaLabel}
        </a>
      </motion.div>
    </motion.div>

    <svg className="hero__waves" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        fill="rgba(255,255,255,0.35)"
        d="M0 60c120-40 240 40 360 0s240-40 360 0 240 40 360 0 240-40 360 0v60H0z"
        animate={{ x: [0, -120, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        fill="var(--sand)"
        d="M0 80c120-30 240 30 360 0s240-30 360 0 240 30 360 0 240-30 360 0v40H0z"
        animate={{ x: [0, 120, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </section>
);
