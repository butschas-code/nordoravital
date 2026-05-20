"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type OptimizedBackgroundVideoProps = {
  src: string;
  poster: string;
  className?: string;
  posterClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export function OptimizedBackgroundVideo({
  src,
  poster,
  className = "absolute inset-0 h-full w-full object-cover object-center",
  posterClassName = "object-cover object-center",
  sizes = "100vw",
  priority = false,
}: OptimizedBackgroundVideoProps) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let timeoutId: number | undefined;
    const frameId = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(() => setShouldLoadVideo(true), 450);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Image
        src={poster}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        aria-hidden
        className={`${posterClassName} transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      {shouldLoadVideo ? (
        <video
          className={`${className} transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
          onCanPlay={() => setVideoReady(true)}
        >
          <source src={encodeURI(src)} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
