import { useState } from "react";
import type { Image } from "../data/types";
import { assetUrl } from "../lib";

type PictureProps = {
  image: Image;
  showPlaceholder?: boolean;
};

const SCENES = [
  { sky: "#7fe0d8", sun: "#ffc531", far: "#12c4c0", near: "#0a8aa0", sunX: 300 },
  { sky: "#ffd9a0", sun: "#ff6b4a", far: "#0a8aa0", near: "#07344a", sunX: 110 },
  { sky: "#0a8aa0", sun: "#ffe08a", far: "#0a5f7c", near: "#07344a", sunX: 220 },
  { sky: "#f7b7c6", sun: "#fff1c9", far: "#c23c74", near: "#5b1f63", sunX: 290 },
];

const sceneFor = (text: string) => {
  const hash = Array.from(text).reduce((total, character) => total + character.charCodeAt(0), 0);
  return SCENES[hash % SCENES.length] ?? SCENES[0];
};

const PhotoSlot = ({ image }: { image: Image }) => {
  const scene = sceneFor(image.alt);
  return (
    <div className="picture picture--slot" role="img" aria-label={image.alt}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="300" fill={scene?.sky} />
        <circle cx={scene?.sunX} cy="150" r="52" fill={scene?.sun} />
        <path d="M0 176Q50 158 100 176T200 176T300 176T400 176V300H0z" fill={scene?.far} />
        <path d="M0 226Q66 204 133 226T266 226T400 226V300H0z" fill={scene?.near} />
      </svg>
      {import.meta.env.DEV && image.src && <small>Add photo: public/{image.src}</small>}
    </div>
  );
};

/** Shows the photo at `image.src`, or an illustrated slot until that file is added. */
export const Picture = ({ image, showPlaceholder = true }: PictureProps) => {
  const [missing, setMissing] = useState(false);

  if (image.src && !missing) {
    return (
      <img
        className="picture"
        src={assetUrl(image.src)}
        alt={image.alt}
        loading="lazy"
        onError={() => setMissing(true)}
      />
    );
  }
  return showPlaceholder ? <PhotoSlot image={image} /> : null;
};
