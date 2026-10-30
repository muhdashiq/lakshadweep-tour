import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { SiteConfig } from "../data/types";
import type { OceanSoundControls } from "../hooks/useOceanSound";
import { whatsappLink } from "../lib";
import { GlassBoat, Gull, SailBoat } from "./art/Boats";
import { Waves } from "./art/Waves";
import { Picture } from "./Picture";
import { SoundToggle } from "./SoundToggle";

type HeroProps = {
  hero: SiteConfig["hero"];
  whatsapp: string;
  startingPrice: string;
  sound: OceanSoundControls;
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const title = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const letter = {
  hidden: { opacity: 0, y: "0.5em", rotate: 6 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

const details = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay: 0.8 } },
};

export const Hero = ({ hero, whatsapp, startingPrice, sound }: HeroProps) => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const boatX = useTransform(scrollY, [0, 700], [0, 280]);
  const sunY = useTransform(scrollY, [0, 700], [0, 90]);

  return (
    <section id="top" className="hero">
      <motion.div className="hero__sun" style={reduceMotion ? undefined : { y: sunY }} aria-hidden="true" />
      <div className="hero__photo">
        <Picture image={hero.image} showPlaceholder={false} />
      </div>
      <div className="hero__gulls" aria-hidden="true">
        <Gull />
        <Gull />
        <Gull />
      </div>

      <div className="container hero__content">
        <motion.h1 aria-label={hero.title} variants={title} initial="hidden" animate="show">
          {Array.from(hero.title).map((character, index) => (
            <motion.span key={index} className="hero__letter" variants={letter} aria-hidden="true">
              {character}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div variants={details} initial="hidden" animate="show">
          <p className="hero__sub">{hero.subtitle}</p>
          <p className="hero__price">
            Trips from <strong>{startingPrice}</strong>, with permit, stay and meals included
          </p>
          <div className="hero__actions">
            <a className="btn" href="#packages">{hero.ctaLabel}</a>
            <a
              className="btn btn--ghost"
              href={whatsappLink(whatsapp, "Hi! I'd like to enquire about a Lakshadweep tour.")}
              target="_blank"
              rel="noreferrer"
            >
              {hero.secondaryCtaLabel}
            </a>
            <SoundToggle {...sound} variant="inline" />
          </div>
        </motion.div>
      </div>

      <div className="hero__sea" aria-hidden="true">
        <Waves className="hero__wave hero__wave--far drift" fill="#0d8ea0" period={360} amplitude={10} />
        <div className="hero__sail"><SailBoat /></div>
        <Waves className="hero__wave hero__wave--mid drift drift--reverse" fill="#10a9ae" period={480} amplitude={14} />
        <motion.div className="hero__boat" style={reduceMotion ? undefined : { x: boatX }}>
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [-1.6, 1.6, -1.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <GlassBoat />
          </motion.div>
        </motion.div>
        <Waves className="hero__wave hero__wave--near drift" fill="var(--lagoon)" period={720} amplitude={18} />
      </div>
    </section>
  );
};
