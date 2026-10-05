// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Big Shoulders",
      cssVariable: "--font-bigshoulders",
      weights: ["700 900"],
      fallbacks: ["Arial Narrow", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Newsreader",
      cssVariable: "--font-newsreader",
      weights: ["400 500"],
      styles: ["normal", "italic"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-atkinson",
      weights: ["400", "700"],
      styles: ["normal", "italic"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
});
