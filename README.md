# tiagofbsantos.com

Personal portfolio of Tiago Santos, Backend Engineer. A Vite 8 + React 19 + TypeScript SPA, deployed to AWS Amplify from `build/`.

## Scripts

- `npm start` / `npm run dev` — Vite at [http://127.0.0.1:5173](http://127.0.0.1:5173)
- `npm run typecheck` — TypeScript 7
- `npm run lint` — ESLint
- `npm run build` — typecheck, lint, then production build
- `npm run preview` — serve the production build locally

Node 24 (see `.nvmrc`). Amplify build settings are in `amplify.yml`. Custom cache and security headers are in `customHttp.yml`. Paste `amplify-redirects.json` into Amplify Hosting → Rewrites and redirects so project URLs serve their prerendered HTML.
