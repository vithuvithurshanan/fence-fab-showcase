// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    nitro: {
      preset: process.env.NITRO_PRESET ?? "cloudflare-module",
    },
  },
  vite: {
    plugins: [
      ViteImageOptimizer({
        jpg: { quality: 60 },
        jpeg: { quality: 60 },
        png: { quality: 60 },
        webp: { lossless: false, quality: 60 },
      }),
    ],
  },
});
