import { allPosts } from "../../.contentlayer/generated";
import { NextResponse } from "next/server";

export const GET = async () => {
  const site = "https://MinoxiDeal.co.il";
  const items = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((p) => `
      <item>
        <title>${escapeXml(p.title)}</title>
        <link>${site}${p.url}</link>
        <guid>${site}${p.url}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        <description>${escapeXml(p.description)}</description>
      </item>
    `)
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>MinoxiDeal</title>
        <link>${site}</link>
        <description>בלוג מינוקסידיל בעברית</description>
        ${items}
      </channel>
    </rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=600, stale-while-revalidate=3600",
    },
  });
};

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
