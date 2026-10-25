import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "@leadconnector/vibe-tagger";

function withTrailingSlash(base: string) {
  if (!base.endsWith("/")) return `${base}/`;
  return base;
}

// https://vitejs.dev/config/
// Production custom domain is https://everydayperform.com/ at the site root.
// `npm run dev` and `npm run build` use base `/`. The Pages workflow sets
// VITE_PAGES_BASE=/. Override VITE_PAGES_BASE (must start with `/`) only
// to preview a different base path.
export default defineConfig(({ mode }) => ({
  base: withTrailingSlash(process.env.VITE_PAGES_BASE ?? "/"),
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
