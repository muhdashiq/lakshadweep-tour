import { motion } from "framer-motion";
import type { Activity } from "../data/types";
import { formatPrice } from "../lib";
import { Picture } from "./Picture";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type ActivitiesProps = { activities: Activity[]; currency: string };

export const Activities = ({ activities, currency }: ActivitiesProps) => (
  <Section id="activities" eyebrow="Things to do" title="Dive in, glide over, or just float">
    <div className="grid grid--3">
      {activities.map((activity, index) => (
        <Reveal key={activity.id} delay={(index % 3) * 0.1}>
          <motion.article className="card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
            <Picture image={activity.image} fallback={activity.icon} />
            <div className="card__body">
              <h3>{activity.icon} {activity.title}</h3>
              <p>{activity.description}</p>
              <div className="card__meta">
                <span>{activity.duration}</span>
                <strong>from {formatPrice(currency, activity.priceFrom)}</strong>
              </div>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  </Section>
);
