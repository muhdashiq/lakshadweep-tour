import type { OceanSoundControls } from "../hooks/useOceanSound";
import { whatsappLink } from "../lib";
import { SoundToggle } from "./SoundToggle";

type FloatingActionsProps = { sound: OceanSoundControls; whatsapp: string };

export const FloatingActions = ({ sound, whatsapp }: FloatingActionsProps) => (
  <div className="floating">
    <SoundToggle {...sound} variant="floating" />
    <a
      className="floating__chat"
      href={whatsappLink(whatsapp, "Hi! I'd like to enquire about a Lakshadweep tour.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" fill="currentColor" />
      </svg>
    </a>
  </div>
);
