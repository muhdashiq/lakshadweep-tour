import { useCallback, useEffect, useState } from "react";
import { createOceanSound } from "../sound/oceanSound";

export type OceanSoundControls = { playing: boolean; toggle: () => void };

export const useOceanSound = (fileUrl: string): OceanSoundControls => {
  const [sound] = useState(() => createOceanSound(fileUrl));
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    if (playing) {
      sound.stop();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    sound.start().catch(() => setPlaying(false));
  }, [playing, sound]);

  // Don't keep playing from a tab nobody is looking at.
  useEffect(() => {
    if (!playing) return;
    const onVisibilityChange = () => {
      if (document.hidden) sound.stop();
      else void sound.start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [playing, sound]);

  return { playing, toggle };
};
