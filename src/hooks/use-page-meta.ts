import { useEffect } from "react";
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  canonicalUrl,
  jsonLd,
  type PageMeta,
} from "../data/site";

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertJsonLd(page: PageMeta) {
  let element = document.getElementById("site-jsonld");
  if (!element) {
    element = document.createElement("script");
    element.id = "site-jsonld";
    element.setAttribute("type", "application/ld+json");
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(jsonLd(page));
}

export default function usePageMeta(page: PageMeta) {
  useEffect(() => {
    const url = page.noindex ? canonicalUrl("/") : canonicalUrl(page.path);
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertMeta("name", "robots", page.noindex ? "noindex, follow" : "index, follow");
    upsertLink("canonical", url);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", page.ogType);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:image:alt", OG_IMAGE_ALT);
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertJsonLd(page);
  }, [page]);
}
