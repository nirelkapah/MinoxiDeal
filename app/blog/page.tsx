import { allPosts } from "../../.contentlayer/generated";
import Link from "next/link";

export const metadata = {
  title: "בלוג",
  description: "כל המאמרים על מינוקסידיל בעברית",
};

export default function BlogIndexPage() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">בלוג</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="border rounded-lg bg-white p-4">
            <h2 className="text-xl font-semibold">
              <Link href={post.url}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-600">{post.description}</p>
            <div className="text-xs text-gray-500 mt-2 flex gap-2">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("he-IL")}</time>
              <span>·</span>
              <span>{post.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
