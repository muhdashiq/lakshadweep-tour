import type { OceanSoundControls } from "../hooks/useOceanSound";

type SoundToggleProps = OceanSoundControls & { variant: "inline" | "floating" };

const MutedSpeaker = () => (
  <svg className="sound__icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z" fill="currentColor" />
    <path d="M16 9.5l5 5m0-5l-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PlayingBars = () => (
  <span className="sound__bars" aria-hidden="true">
    <i />
    <i />
    <i />
    <i />
  </span>
);

export const SoundToggle = ({ playing, toggle, variant }: SoundToggleProps) => {
  const label = playing ? "Pause sea sounds" : "Play sea sounds";
  return (
    <button
      type="button"
      className={`sound sound--${variant}`}
      aria-label={variant === "floating" ? label : undefined}
      title={variant === "floating" ? label : undefined}
      onClick={toggle}
    >
      {playing ? <PlayingBars /> : <MutedSpeaker />}
      {variant === "inline" && label}
    </button>
  );
};
