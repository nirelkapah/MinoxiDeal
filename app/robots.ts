import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://MinoxiDeal.co.il";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
