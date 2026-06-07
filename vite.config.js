import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Base URL for the application (root domain - no subdirectory)
  // Change to '/subdirectory/' if deploying to a subdirectory
  base: "/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Improve performance with optimal chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-redux": ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://www.postalpincode.in",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    hmr: {
      overlay: false, // Disables the overlay
    },
  },

  plugins: [react()],
});
