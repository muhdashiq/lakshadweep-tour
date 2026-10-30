import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ROTATE_MS = 6500;

export const QuoteBand = ({ quotes }: { quotes: string[] }) => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const rotating = !paused && !reduceMotion;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % quotes.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, [rotating, quotes.length]);

  return (
    <section className="quotes" aria-label="Travel quotes">
      <div className="container">
        {/* Every quote shares one grid cell, so the band keeps the height of the longest. */}
        <div className="quotes__stack">
          {quotes.map((quote, index) => (
            <motion.blockquote
              key={quote}
              aria-hidden={index !== activeIndex}
              initial={false}
              animate={{ opacity: index === activeIndex ? 1 : 0, y: index === activeIndex ? 0 : 10 }}
              transition={{ duration: 0.8 }}
            >
              {quote}
            </motion.blockquote>
          ))}
        </div>
        <div className="quotes__controls">
          {quotes.map((quote, index) => (
            <button
              key={quote}
              type="button"
              className={`quotes__dot ${index === activeIndex ? "quotes__dot--active" : ""}`}
              aria-label={`Show quote ${index + 1} of ${quotes.length}`}
              aria-current={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                setPaused(true);
              }}
            />
          ))}
          {!reduceMotion && (
            <button type="button" className="quotes__pause" onClick={() => setPaused((value) => !value)}>
              {paused ? "Play" : "Pause"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
