import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "client", "assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // The SSR bundle only feeds scripts/prerender.mjs, which deletes it afterwards.
    outDir: path.resolve(import.meta.dirname, isSsrBuild ? "dist-ssr" : "dist"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
}));
