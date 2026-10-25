import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "@leadconnector/vibe-tagger";

function withTrailingSlash(base: string) {
  if (!base.endsWith("/")) return `${base}/`;
  return base;
}

// https://vitejs.dev/config/
// Project Pages preview: https://jic52194.github.io/everydayperform-site/
// `npm run dev` stays at /. Set VITE_PAGES_BASE=/ only for the custom-domain
// cutover in the README. Do not do that until Jared confirms.
export default defineConfig(({ mode }) => ({
  base: withTrailingSlash(
    process.env.VITE_PAGES_BASE ??
      (mode === "development" ? "/" : "/everydayperform-site/"),
  ),
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".modal.host"],
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger({ tailwindConfig: true }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
