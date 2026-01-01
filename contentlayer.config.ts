import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    updated: { type: "date", required: false },
    image: { type: "string", required: false },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    published: { type: "boolean", default: true },
    slug: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post: any) => `/blog/${post.slug ?? slugify(post.title)}`,
    },
    slug: {
      type: "string",
      resolve: (post: any) => post.slug ?? slugify(post.title),
    },
  },
}));

// Transliterate Hebrew to Latin for shareable URLs; then slugify
function slugify(input: string) {
  const map: Record<string, string> = {
    א: "a",
    ב: "b",
    ג: "g",
    ד: "d",
    ה: "h",
    ו: "v",
    ז: "z",
    ח: "kh",
    ט: "t",
    י: "y",
    כ: "k",
    ך: "k",
    ל: "l",
    מ: "m",
    ם: "m",
    נ: "n",
    ן: "n",
    ס: "s",
    ע: "a",
    פ: "p",
    ף: "p",
    צ: "ts",
    ץ: "ts",
    ק: "q",
    ר: "r",
    ש: "sh",
    ת: "t",
  };
  const withoutNiqqud = input.replace(/[\u0591-\u05C7]/g, "");
  const transliterated = Array.from(withoutNiqqud)
    .map((ch) => (map[ch as keyof typeof map] ?? ch))
    .join("");
  return transliterated
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] },
});
