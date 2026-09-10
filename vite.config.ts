import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
import { ROUTES, applyMetaToHtml, HOME_PAGE } from "./src/data/site.ts";
import { staticBodyHtml } from "./src/data/content.ts";

const themeColor = "#0077b5";
const assetsDir = join("build", "assets");

function findAsset(files: string[], pattern: RegExp): string | undefined {
  return files.find((file) => pattern.test(file));
}

function inlineCss(html: string): string {
  return html.replace(
    /<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"[^>]*>/,
    (_match, href: string) => {
      const file = href.replace(/^\/assets\//, "");
      const css = readFileSync(join(assetsDir, file), "utf8");
      return `<style>${css}</style>`;
    },
  );
}

function homepageLcp(html: string): string {
  const files = readdirSync(assetsDir);
  const avif = findAsset(files, /^profile_pic-[^.]+\.avif$/);
  const avif320 = findAsset(files, /^profile_pic_320-[^.]+\.avif$/);
  const webp = findAsset(files, /^profile_pic-[^.]+\.webp$/);
  const webp320 = findAsset(files, /^profile_pic_320-[^.]+\.webp$/);
  const jpg = findAsset(files, /^profile_pic-[^.]+\.jpg$/);
  const jpg320 = findAsset(files, /^profile_pic_320-[^.]+\.jpg$/);
  if (!avif || !webp || !jpg) {
    return html.replace("<!--PROFILE_PICTURE-->", "");
  }
  const avifSrcSet = avif320
    ? `/assets/${avif320} 320w, /assets/${avif} 640w`
    : `/assets/${avif}`;
  const webpSrcSet = webp320
    ? `/assets/${webp320} 320w, /assets/${webp} 640w`
    : `/assets/${webp}`;
  const jpgSrcSet = jpg320
    ? `/assets/${jpg320} 320w, /assets/${jpg} 640w`
    : undefined;
  const picture = `<div class="profilePicWrap"><picture><source type="image/avif" srcset="${avifSrcSet}" sizes="320px"><source type="image/webp" srcset="${webpSrcSet}" sizes="320px"><img class="profilePic" alt="Tiago Santos" width="640" height="649" src="/assets/${jpg}"${jpgSrcSet ? ` srcset="${jpgSrcSet}" sizes="320px"` : ""} loading="eager" decoding="async" fetchpriority="high"></picture></div>`;
  const preload = `<link rel="preload" as="image" type="image/avif" href="/assets/${avif}" imagesrcset="${avifSrcSet}" imagesizes="320px" fetchpriority="high" />`;
  return html
    .replace("<!--PROFILE_PICTURE-->", picture)
    .replace("</head>", `    ${preload}\n  </head>`);
}

function prerenderRoutes(): Plugin {
  return {
    name: "prerender-routes",
    apply: "build",
    enforce: "post",
    closeBundle() {
      const indexPath = join("build", "index.html");
      const template = inlineCss(readFileSync(indexPath, "utf8"));
      for (const page of ROUTES) {
        let html = applyMetaToHtml(template, page).replace(
          '<div id="root"></div>',
          `<div id="root">${staticBodyHtml(page.path)}</div>`,
        );
        if (page.path === "/") {
          html = homepageLcp(html);
          writeFileSync(indexPath, html);
          continue;
        }
        html = html.replace("<!--PROFILE_PICTURE-->", "");
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
