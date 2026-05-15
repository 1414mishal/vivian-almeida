import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "node:path";

export default defineConfig({
  // Relative asset paths so the production build also works when opened
  // directly from disk (file://) or hosted in any sub-folder.
  base: "./",
  plugins: [
    react(),
    // Inlines all JS + CSS into a single dist/index.html — double-click to open,
    // easy to email or drop onto any host. Only affects `npm run build`.
    viteSingleFile(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
