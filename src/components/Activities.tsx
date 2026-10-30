import type { Activity } from "../data/types";
import { formatPrice } from "../lib";
import { Picture } from "./Picture";
import { Section } from "./Section";

type ActivitiesProps = { activities: Activity[]; currency: string };

export const Activities = ({ activities, currency }: ActivitiesProps) => (
  <Section id="activities" title="Everything you can do out here">
    <div className="activities">
      {activities.map((activity) => (
        <article key={activity.id} className="activity">
          <Picture image={activity.image} />
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <p className="activity__meta">
            {activity.duration}, from {formatPrice(currency, activity.priceFrom)}
          </p>
        </article>
      ))}
    </div>
  </Section>
);
