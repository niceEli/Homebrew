import { defineConfig } from "vite";
import path from "node:path";
import electron from "vite-plugin-electron/simple";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: "electron/main.ts",
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__dirname, "electron/preload.ts"),
      },
      // Ployfill the Electron and Node.js built-in modules for Renderer process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: {},
    }),
  ],
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
console.log(
  "KaboomTS Game Engine  Copyright (C) 2024  Eli Cardoso\nThis program comes with ABSOLUTELY NO WARRANTY.\nThis is free software, and\nyou are welcome to redistribute it\nunder certain conditions."
);
