import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "named",
        namedExport: "ReactComponent",
        ref: true,
        titleProp: true,
        svgo: false,
      },
    }),
    react(),
    VitePWA({
      registerType: "prompt",
      filename: "service-worker.js",
      injectRegister: false,
      manifest: false,
      includeAssets: [
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
      ],
      workbox: {
        skipWaiting: false,
        clientsClaim: false,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,woff,otf}"],
        navigateFallback: "/index.html",
      },
    }),
  ],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
