import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { SiteConfig } from "../data/types";
import { CoupleBoat, Palm } from "./art/CoupleBoat";
import { Waves } from "./art/Waves";
import { NamesInSand } from "./NamesInSand";

type CouplesProps = { couples: SiteConfig["couples"]; whatsapp: string };

const STARS = [
  [6, 8], [14, 22], [23, 6], [31, 16], [44, 5], [52, 20], [61, 9], [72, 18], [81, 6], [90, 15], [96, 28],
] as const;
const LANTERNS = [12, 30, 68, 86];

export const Couples = ({ couples, whatsapp }: CouplesProps) => {
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ["start end", "end start"] });
  const sunY = useTransform(scrollYProgress, [0.15, 0.8], ["-6%", "48%"]);

  return (
    <section id="couples" className="couples">
      <div ref={sceneRef} className="couples__scene">
        <div className="couples__stars" aria-hidden="true">
          {STARS.map(([left, top], index) => (
            <i key={left} style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${index * 0.4}s` }} />
          ))}
        </div>
        <div className="couples__lanterns" aria-hidden="true">
          {LANTERNS.map((left, index) => (
            <i key={left} style={{ left: `${left}%`, animationDelay: `${index * -4.5}s` }} />
          ))}
        </div>
        <motion.div className="couples__sun" style={reduceMotion ? undefined : { y: sunY }} aria-hidden="true" />

        <div className="container couples__head">
          <h2>{couples.title}</h2>
          <p>{couples.intro}</p>
        </div>

        <div className="couples__palm"><Palm /></div>
        <div className="couples__sea" aria-hidden="true">
          <Waves className="couples__wave couples__wave--far drift" fill="#8d2a68" period={360} amplitude={8} />
          <Waves className="couples__wave couples__wave--mid drift drift--reverse" fill="#5b1f63" period={480} amplitude={12} />
          <div className="couples__boat">
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [-1.2, 1.2, -1.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <CoupleBoat />
            </motion.div>
          </div>
          <Waves className="couples__wave couples__wave--near drift" fill="var(--dusk)" period={720} amplitude={14} />
        </div>
      </div>

      <div className="couples__plan">
        <div className="container couples__grid">
          <div className="extras">
            <h3>{couples.extrasTitle}</h3>
            <ul>
              {couples.extras.map((extra) => (
                <li key={extra.title}>
                  <strong>{extra.title}</strong>
                  <span>{extra.text}</span>
                </li>
              ))}
            </ul>
            <p className="extras__note">{couples.extrasNote}</p>
          </div>
          <NamesInSand occasions={couples.occasions} whatsapp={whatsapp} />
        </div>
      </div>
    </section>
  );
};
