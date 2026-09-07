export const SITE_ORIGIN = "https://www.tiagofbsantos.com";
export const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;
export const OG_IMAGE_ALT = "Tiago Santos, Lead Software Engineer";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";

export type OgType = "profile" | "website";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  ogType: OgType;
  noindex?: boolean;
};

export const HOME_PAGE: PageMeta = {
  path: "/",
  title: "Tiago Santos | Lead Software Engineer",
  description:
    "Tiago Santos - Lead Software Engineer. Portfolio of full-stack web applications in TypeScript, Node.js, and React.",
  ogType: "profile",
};

export const NOT_FOUND_PAGE: PageMeta = {
  path: "/404",
  title: "Page not found | Tiago Santos",
  description: "That address is not a page on this site.",
  ogType: "website",
  noindex: true,
};

export const ROUTES: PageMeta[] = [
  HOME_PAGE,
  {
    path: "/projects/smartvision",
    title: "Smart Vision | Tiago Santos",
    description:
      "A React Progressive Web App for detecting faces and recognizing celebrities in pictures, with PostgreSQL and Redis.",
    ogType: "website",
  },
  {
    path: "/projects/kittengenerator",
    title: "Kitten Generator | Tiago Santos",
    description:
      "An interactive Progressive Web App with React and Redux for generating kittens.",
    ogType: "website",
  },
  {
    path: "/projects/tiagofbsantoscom",
    title: "Tiago F. B. Santos .com | Tiago Santos",
    description:
      "A React Progressive Web App portfolio showcasing work as a Lead Software Engineer.",
    ogType: "website",
  },
];

export function canonicalUrl(path: string): string {
  if (path === "/") {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${path}`;
}

export function metaForPath(pathname: string): PageMeta {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return ROUTES.find((page) => page.path === normalized) ?? NOT_FOUND_PAGE;
}

export function jsonLd(page: PageMeta): object {
  const personId = `${SITE_ORIGIN}/#person`;
  const websiteId = `${SITE_ORIGIN}/#website`;
  const person = {
    "@type": "Person",
    "@id": personId,
    name: "Tiago Santos",
    url: `${SITE_ORIGIN}/`,
    image: OG_IMAGE,
    jobTitle: "Lead Software Engineer",
    email: "mailto:santosfbtiago@gmail.com",
    sameAs: [
      "https://github.com/tiagofbsantos",
      "https://www.linkedin.com/in/tiagofbsantos",
      "https://medium.com/@tiagofbsantos",
    ],
  };
  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${SITE_ORIGIN}/`,
    name: "Tiago Santos",
    description: HOME_PAGE.description,
    publisher: { "@id": personId },
  };

  if (page.path === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [person, website],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    url: canonicalUrl(page.path),
    description: page.description,
    isPartOf: { "@id": websiteId },
    author: { "@id": personId },
  };
}

function escapeAttr(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceTagged(
  html: string,
  tag: string,
  value: string,
): string {
  const re = new RegExp(`(<${tag}>)([\\s\\S]*?)(</${tag}>)`);
  return html.replace(re, `$1${value}$3`);
}

function replaceMeta(
  html: string,
  attr: "name" | "property",
  key: string,
  content: string,
): string {
  const re = new RegExp(
    `(<meta ${attr}="${key}" content=")([^"]*)("\\s*/>)`,
  );
  return html.replace(re, `$1${escapeAttr(content)}$3`);
}

function replaceHref(html: string, rel: string, href: string): string {
  const re = new RegExp(`(<link rel="${rel}" href=")([^"]*)("\\s*/>)`);
  return html.replace(re, `$1${escapeAttr(href)}$3`);
}

function replaceScriptJsonLd(html: string, json: string): string {
  return html.replace(
    /(<script type="application\/ld\+json" id="site-jsonld">)[\s\S]*?(<\/script>)/,
    `$1\n${json}\n  $2`,
  );
}

export function applyMetaToHtml(html: string, page: PageMeta): string {
  const url = page.noindex ? `${SITE_ORIGIN}/` : canonicalUrl(page.path);
  const robots = page.noindex ? "noindex, follow" : "index, follow";
  let next = html;
  next = replaceTagged(next, "title", escapeAttr(page.title));
  next = replaceMeta(next, "name", "description", page.description);
  next = replaceMeta(next, "name", "robots", robots);
  next = replaceHref(next, "canonical", url);
  next = replaceMeta(next, "property", "og:title", page.title);
  next = replaceMeta(next, "property", "og:description", page.description);
  next = replaceMeta(next, "property", "og:url", url);
  next = replaceMeta(next, "property", "og:type", page.ogType);
  next = replaceMeta(next, "property", "og:image", OG_IMAGE);
  next = replaceMeta(next, "name", "twitter:title", page.title);
  next = replaceMeta(next, "name", "twitter:description", page.description);
  next = replaceMeta(next, "name", "twitter:image", OG_IMAGE);
  next = replaceScriptJsonLd(next, JSON.stringify(jsonLd(page)));
  if (page.ogType !== "profile") {
    next = next.replace(
      /\s*<meta property="profile:first_name" content="[^"]*"\s*\/>/,
      "",
    );
    next = next.replace(
      /\s*<meta property="profile:last_name" content="[^"]*"\s*\/>/,
      "",
    );
  }
  return next;
}
