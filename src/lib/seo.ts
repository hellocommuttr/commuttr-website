const SITE_URL = "https://commuttr.co.za"

type PageMeta = {
  title: string
  description: string
  /** Canonical path this content lives at, e.g. "/" or "/partner". */
  path: string
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

/**
 * Updates the document title, meta description, canonical link, and social
 * preview tags for the current client-side route. Aliased paths (e.g.
 * "/contact") should pass the canonical path they mirror (e.g. "/partner")
 * so crawlers see one consistent URL/title per piece of content.
 */
export function setPageMeta({ title, description, path }: PageMeta) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`

  document.title = title
  upsertMeta("name", "description", description)
  upsertCanonical(url)

  upsertMeta("property", "og:title", title)
  upsertMeta("property", "og:description", description)
  upsertMeta("property", "og:url", url)

  upsertMeta("name", "twitter:title", title)
  upsertMeta("name", "twitter:description", description)
}
