import type { MetadataRoute } from "next";

const BASE = "https://ulrik.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/work/celsia`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/work/nam`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/work/nav`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/work/sanity`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/work/ask`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/work/on-design-and-ai`, lastModified: new Date(), priority: 0.6 },
  ];
}
