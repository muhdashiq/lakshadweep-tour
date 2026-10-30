import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { DiveStop, SiteConfig } from "../data/types";
import { HullFromBelow } from "./art/Boats";
import { Diver, Snorkeler } from "./art/Divers";
import { ClownFish, FishSchool, Reef, Turtle } from "./art/ReefLife";

type DiveStoryProps = { dive: SiteConfig["dive"] };

const CAPTION_FADE = 0.05;

const captionRange = (index: number, count: number) => {
  const span = 1 / count;
  const start = index * span;
  const end = start + span;
  if (index === 0) return { input: [0, end - CAPTION_FADE, end], output: [1, 1, 0] };
  if (index === count - 1) return { input: [start, start + CAPTION_FADE, 1], output: [0, 1, 1] };
  return { input: [start, start + CAPTION_FADE, end - CAPTION_FADE, end], output: [0, 1, 1, 0] };
};

type DiveCaptionProps = {
  stop: DiveStop;
  index: number;
  count: number;
  progress: MotionValue<number>;
};

const DiveCaption = ({ stop, index, count, progress }: DiveCaptionProps) => {
  const { input, output } = captionRange(index, count);
  const opacity = useTransform(progress, input, output);
  return (
    <motion.div className="dive__caption" style={{ opacity }}>
      <h2>{stop.title}</h2>
      <p>{stop.text}</p>
    </motion.div>
  );
};

const RISING_BUBBLES = [6, 18, 27, 41, 55, 63, 78, 92];

const DiveScroll = ({ dive }: DiveStoryProps) => {
  const { stops } = dive;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  const waterY = useTransform(progress, [0, 1], ["0%", "-66.66%"]);
  const raysOpacity = useTransform(progress, [0, 0.7], [0.55, 0]);
  const hintOpacity = useTransform(progress, [0, 0.07], [1, 0]);
  const hullY = useTransform(progress, [0, 0.28], ["0%", "-170%"]);

  const schoolX = useTransform(progress, [0.04, 0.6], ["105vw", "-70vw"]);
  const schoolY = useTransform(progress, [0.04, 0.6], ["0vh", "-16vh"]);
  const snorkelerX = useTransform(progress, [0.24, 0.46], ["80vw", "0vw"]);
  const snorkelerY = useTransform(progress, [0.54, 0.7], ["0vh", "-40vh"]);
  const turtleX = useTransform(progress, [0.42, 0.9], ["-30vw", "115vw"]);
  const turtleY = useTransform(progress, [0.42, 0.9], ["6vh", "-8vh"]);
  const diverX = useTransform(progress, [0.62, 0.95], ["-110vw", "0vw"]);
  const reefY = useTransform(progress, [0.56, 0.96], ["100%", "0%"]);

  const gaugeY = useTransform(progress, [0, 1], ["0%", "100%"]);
  const depth = useTransform(progress, [0.08, 0.45, 0.9], stops.map((stop) => stop.depth));
  const depthLabel = useTransform(depth, (value) => `${Math.round(value)} m`);

  return (
    <section id="dive" ref={sectionRef} className="dive" aria-label="Three ways to see the reef">
      <div className="dive__stage">
        <motion.div className="dive__water" style={{ y: waterY }} aria-hidden="true" />
        <motion.svg
          className="dive__rays"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          style={{ opacity: raysOpacity }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dive-ray" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.32" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M240 0L60 800H380L420 0zM640 0L560 800H860L780 0zM1080 0L1020 800H1400L1240 0z" fill="url(#dive-ray)" />
        </motion.svg>

        <div className="dive__bubbles" aria-hidden="true">
          {RISING_BUBBLES.map((left, index) => (
            <i key={left} style={{ left: `${left}%`, animationDelay: `${index * -1.3}s` }} />
          ))}
        </div>

        <motion.div className="dive__school" style={{ x: schoolX, y: schoolY }}>
          <FishSchool color="#ffe08a" />
        </motion.div>
        <motion.div className="dive__turtle" style={{ x: turtleX, y: turtleY }}>
          <Turtle />
        </motion.div>
        <motion.div className="dive__snorkeler" style={{ x: snorkelerX, y: snorkelerY }}>
          <Snorkeler />
        </motion.div>
        <motion.div className="dive__hull" style={{ y: hullY }}>
          <HullFromBelow />
        </motion.div>

        <motion.div className="dive__reef" style={{ y: reefY }}>
          <Reef />
          <div className="dive__clown dive__clown--a"><ClownFish /></div>
          <div className="dive__clown dive__clown--b"><ClownFish /></div>
        </motion.div>

        <div className="dive__diver">
          <motion.div style={{ x: diverX }}>
            <div className="dive__diver-bob">
              <Diver />
              <div className="dive__breath" aria-hidden="true"><i /><i /><i /></div>
            </div>
          </motion.div>
        </div>

        <div className="dive__gauge" aria-hidden="true">
          <motion.div className="dive__gauge-marker" style={{ y: gaugeY }}>
            <motion.span>{depthLabel}</motion.span>
          </motion.div>
        </div>

        <div className="dive__captions">
          {stops.map((stop, index) => (
            <DiveCaption key={stop.title} stop={stop} index={index} count={stops.length} progress={progress} />
          ))}
        </div>

        <motion.p className="dive__hint" style={{ opacity: hintOpacity }} aria-hidden="true">
          Keep scrolling to dive
        </motion.p>
        <a className="dive__skip" href="#activities">Skip the dive</a>
      </div>
    </section>
  );
};

/** For visitors who've asked for reduced motion: the same story, without scroll-driven movement. */
const DiveStatic = ({ dive }: DiveStoryProps) => (
  <section id="dive" className="dive dive--static" aria-label="Three ways to see the reef">
    <div className="container dive__static-list">
      {dive.stops.map((stop) => (
        <div key={stop.title} className="dive__caption">
          <h2>{stop.title}</h2>
          <p>{stop.text}</p>
        </div>
      ))}
    </div>
    <div className="dive__static-art"><Diver /></div>
    <div className="dive__static-reef"><Reef /></div>
  </section>
);

export const DiveStory = ({ dive }: DiveStoryProps) => {
  const reduceMotion = useReducedMotion();
  return reduceMotion ? <DiveStatic dive={dive} /> : <DiveScroll dive={dive} />;
};
