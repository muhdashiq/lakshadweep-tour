import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq } from "../data/types";
import { Section } from "./Section";

export const Faqs = ({ faqs }: { faqs: Faq[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" eyebrow="Good to know" title="Questions, answered" tone="tinted">
      <div className="faq">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="faq__item">
              <button
                type="button"
                className="faq__q"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {faq.question}
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} aria-hidden="true">+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq__a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
