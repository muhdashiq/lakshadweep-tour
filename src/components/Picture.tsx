import type { Image } from "../data/types";
import { assetUrl } from "../lib";

type PictureProps = {
  image: Image;
  fallback: string;
};

/** Shows the configured photo, or a gradient placeholder until one is added. */
export const Picture = ({ image, fallback }: PictureProps) =>
  image.src ? (
    <img className="picture" src={assetUrl(image.src)} alt={image.alt} loading="lazy" />
  ) : (
    <div className="picture picture--placeholder" role="img" aria-label={image.alt}>
      <span aria-hidden="true">{fallback}</span>
    </div>
  );
