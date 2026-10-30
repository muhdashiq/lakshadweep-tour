import { useState } from "react";
import { motion } from "framer-motion";
import type { SiteConfig } from "../data/types";
import { ordinal, upcomingAnniversary, whatsappLink } from "../lib";
import { Waves } from "./art/Waves";

type NamesInSandProps = {
  occasions: SiteConfig["couples"]["occasions"];
  whatsapp: string;
};

const NAME_MAX_LENGTH = 18;
const HEART_PATH =
  "M160 222C62 156 18 108 28 66C38 24 112 12 160 70C208 12 282 24 292 66C302 108 258 156 160 222Z";

const nameSize = (name: string) => `${Math.min(2.1, 20 / Math.max(name.length, 8)).toFixed(2)}rem`;

const planMessage = (names: string[], occasionLabel: string, anniversary: number | null) => {
  const intro = names.length === 2 ? `Hi! We're ${names[0]} and ${names[1]}.` : "Hi!";
  const trip = anniversary
    ? `our ${ordinal(anniversary)} wedding anniversary`
    : `our ${occasionLabel.toLowerCase()}`;
  return `${intro} We'd like to plan a Lakshadweep trip for ${trip}. Can you suggest a package and what you can arrange for couples?`;
};

export const NamesInSand = ({ occasions, whatsapp }: NamesInSandProps) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [occasionId, setOccasionId] = useState(occasions[0].id);
  const [weddingDate, setWeddingDate] = useState("");

  const occasion = occasions.find((item) => item.id === occasionId) ?? occasions[0];
  const anniversary = occasion.asksWeddingDate ? upcomingAnniversary(weddingDate) : null;
  const line = anniversary ? `Your ${ordinal(anniversary)} anniversary, on an island` : occasion.line;

  const shownFirst = firstName.trim() || "You";
  const shownSecond = secondName.trim() || "Your love";
  const enteredNames = [firstName.trim(), secondName.trim()].filter(Boolean);

  return (
    <div className="plan">
      <h3>Write your names in the sand</h3>

      <div
        className="sand"
        role="img"
        aria-label={`${shownFirst} and ${shownSecond} written in the sand inside a heart. ${line}.`}
      >
        <svg className="sand__heart" viewBox="0 0 320 240" aria-hidden="true">
          {["sand__groove--light", "sand__groove"].map((className) => (
            <motion.path
              key={className}
              className={className}
              d={HEART_PATH}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
          ))}
        </svg>
        <p className="sand__names" aria-hidden="true">
          <span style={{ fontSize: nameSize(shownFirst) }}>{shownFirst}</span>
          <span className="sand__and">&amp;</span>
          <span style={{ fontSize: nameSize(shownSecond) }}>{shownSecond}</span>
        </p>
        <p className="sand__line" aria-hidden="true">{line}</p>
        <Waves className="sand__water drift" fill="#fff" period={360} amplitude={10} />
      </div>

      <div className="plan__names">
        <label>
          Your name
          <input
            value={firstName}
            maxLength={NAME_MAX_LENGTH}
            autoComplete="off"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Your partner's name
          <input
            value={secondName}
            maxLength={NAME_MAX_LENGTH}
            autoComplete="off"
            onChange={(event) => setSecondName(event.target.value)}
          />
        </label>
      </div>

      <fieldset className="plan__occasions">
        <legend>What are you celebrating?</legend>
        {occasions.map((item) => (
          <label key={item.id} className={item.id === occasion.id ? "chip chip--active" : "chip"}>
            <input
              type="radio"
              name="occasion"
              value={item.id}
              checked={item.id === occasion.id}
              onChange={() => setOccasionId(item.id)}
            />
            {item.label}
          </label>
        ))}
      </fieldset>

      {occasion.asksWeddingDate && (
        <label className="plan__date">
          Wedding date (optional)
          <input type="date" value={weddingDate} onChange={(event) => setWeddingDate(event.target.value)} />
        </label>
      )}

      <a
        className="btn plan__cta"
        href={whatsappLink(whatsapp, planMessage(enteredNames, occasion.label, anniversary))}
        target="_blank"
        rel="noreferrer"
      >
        Plan our trip on WhatsApp
      </a>
    </div>
  );
};
