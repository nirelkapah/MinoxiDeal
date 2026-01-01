import { MetadataRoute } from "next";
import { allPosts } from "../.contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://MinoxiDeal.co.il";
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = allPosts.filter(p=>p.published).map((p) => ({
    url: `${base}${p.url}`,
    lastModified: p.updated ? new Date(p.updated) : new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
