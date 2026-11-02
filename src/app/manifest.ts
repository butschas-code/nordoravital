import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nordora Vital",
    short_name: "Nordora Vital",
    description: "sanza in-room wellbeing for professionals in Latvia and the Baltics.",
    start_url: "/",
    display: "browser",
    background_color: "#F6F1EA",
    theme_color: "#0E3D34",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
