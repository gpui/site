import ferrisSticker from "../../public/ferris.png";
import helloMyNameIsSticker from "../../public/hello_my_name_is.png";
import rustSticker from "../../public/rust.png";

import Image, { StaticImageData } from "next/image";

export const sticker = {
  ferris: ferrisSticker,
  helloMyNameIs: helloMyNameIsSticker,
  rust: rustSticker,
};

export const StickerImage = ({
  img,
  alt,
  className,
}: {
  img: StaticImageData;
  alt: string;
  className?: string;
}) => {
  return (
    <Image
      src={img.src}
      width={img.width}
      height={img.height}
      alt={alt}
      className={className}
    />
  );
};
