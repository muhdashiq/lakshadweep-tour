import { motion } from "framer-motion";
import type { Memory } from "../data/types";
import { Picture } from "./Picture";
import { Section } from "./Section";

const TILTS = [-2.5, 2, -1.5, 3, 2.5, -2, 1.5, -3];
const PER_LINE = 4;

const toLines = (memories: Memory[]) =>
  Array.from({ length: Math.ceil(memories.length / PER_LINE) }, (_, line) =>
    memories.slice(line * PER_LINE, (line + 1) * PER_LINE),
  );

export const Memories = ({ memories }: { memories: Memory[] }) => (
  <Section id="memories" title="The memories you'll bring home">
    <div className="memories">
      {toLines(memories).map((line, lineIndex) => (
        <div key={lineIndex} className="memories__line">
          {line.map((memory, index) => {
            const tilt = TILTS[(lineIndex * PER_LINE + index) % TILTS.length] ?? 0;
            return (
              <motion.figure
                key={memory.caption}
                className="polaroid"
                initial={{ opacity: 0, rotate: tilt - 14 }}
                whileInView={{ opacity: 1, rotate: tilt }}
                whileHover={{ rotate: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 70, damping: 9, delay: index * 0.08 }}
              >
                <Picture image={memory.image} />
                <figcaption>{memory.caption}</figcaption>
              </motion.figure>
            );
          })}
        </div>
      ))}
    </div>
  </Section>
);
