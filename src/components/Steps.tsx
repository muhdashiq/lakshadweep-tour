import type { Step } from "../data/types";
import { Section } from "./Section";

export const Steps = ({ steps }: { steps: Step[] }) => (
  <Section id="how" title="How it works" tone="tinted">
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  </Section>
);
