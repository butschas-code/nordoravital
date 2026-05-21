import { getImageProps } from "next/image";

type HomeHeroPictureProps = {
  alt: string;
  desktopSrc: string;
  mobileSrc: string;
};

export function HomeHeroPicture({
  alt,
  desktopSrc,
  mobileSrc,
}: HomeHeroPictureProps) {
  const common = {
    alt,
    className: "absolute inset-0 h-full w-full object-cover object-center",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    width: 1920,
    height: 1080,
    src: desktopSrc,
    quality: 82,
  });
  const {
    props: { srcSet: mobileSrcSet, ...imageProps },
  } = getImageProps({
    ...common,
    width: 1696,
    height: 2528,
    src: mobileSrc,
    quality: 82,
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <picture className="absolute inset-0 block">
      <source media="(min-width: 640px)" srcSet={desktopSrcSet} />
      <source media="(max-width: 639px)" srcSet={mobileSrcSet} />
      <img {...imageProps} alt={alt} />
    </picture>
  );
}
