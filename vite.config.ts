import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
import { ROUTES, applyMetaToHtml, HOME_PAGE } from "./src/data/site.ts";
import { staticBodyHtml } from "./src/data/content.ts";

const themeColor = "#0077b5";

function prerenderRoutes(): Plugin {
  return {
    name: "prerender-routes",
    apply: "build",
    enforce: "post",
    closeBundle() {
      const indexPath = join("build", "index.html");
      const template = readFileSync(indexPath, "utf8");
      for (const page of ROUTES) {
        const html = applyMetaToHtml(template, page).replace(
          '<div id="root"></div>',
          `<div id="root">${staticBodyHtml(page.path)}</div>`,
        );
        if (page.path === "/") {
          writeFileSync(indexPath, html);
          continue;
        }
        const dir = join("build", page.path);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, "index.html"), html);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      filename: "service-worker.js",
      injectRegister: false,
      includeAssets: [
        "favicon.ico",
        "favicon-16x16.png",
        "favicon-32x32.png",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "pwa-maskable-512x512.png",
        "offline.html",
        "llms.txt",
      ],
      manifest: {
        id: "/",
        name: "Tiago Santos - Backend Engineer",
        short_name: "Tiago Santos",
        description: HOME_PAGE.description,
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: themeColor,
        background_color: themeColor,
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,gif,webp,avif,woff2,webmanifest}",
        ],
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^\/offline\.html$/],
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: false,
      },
    }),
    prerenderRoutes(),
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
