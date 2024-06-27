import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    minify: "terser", // or "terser" but you need terser installed
    target: "esnext",
    chunkSizeWarningLimit: 10000,
    sourcemap: "inline",
  },
});