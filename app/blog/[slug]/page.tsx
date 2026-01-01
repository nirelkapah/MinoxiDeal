import { allPosts } from "../../../.contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      url: post.url,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug && p.published);
  if (!post) return notFound();
  const MDX = useMDXComponent(post.body.code);
  const base = "https://MinoxiDeal.co.il";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "דף הבית",
        item: `${base}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "בלוג",
        item: `${base}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${base}${post.url}`,
      },
    ],
  } as const;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "he-IL",
    mainEntityOfPage: `${base}${post.url}`,
    author: {
      "@type": "Organization",
      name: "MinoxiDeal",
      url: base,
    },
    publisher: {
      "@type": "Organization",
      name: "MinoxiDeal",
      url: base,
    },
    articleSection: post.category,
  } as const;
  return (
    <article className="prose rtl prose-lg max-w-none bg-white p-6 rounded-lg border">
      <h1>{post.title}</h1>
      <div className="text-sm text-gray-500 flex gap-2">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("he-IL")}</time>
        {post.updated && (
          <span>(עודכן {new Date(post.updated).toLocaleDateString("he-IL")})</span>
        )}
      </div>
      <div className="mt-6">
        <MDX />
      </div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
    </article>
  );
}
