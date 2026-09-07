/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module "*.avif" {
  const src: string;
  export default src;
}
