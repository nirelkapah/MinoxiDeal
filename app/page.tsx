import { allPosts } from "../.contentlayer/generated";
import Link from "next/link";

export default function HomePage() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 6);

  return (
    <div className="space-y-8">
      <section className="prose prose-lg rtl max-w-none">
        <h1>ברוכים הבאים ל‑MinoxiDeal</h1>
        <p>
          כאן תמצאו מדריכים, מחקרים ותשובות לשאלות נפוצות על מינוקסידיל וצמיחת שיער.
        </p>
        <p>
          התחילו עם הפוסטים האחרונים, או גלשו לקטגוריות בהתאם לנושא שמעניין אתכם.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">פוסטים אחרונים</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post._id} className="rounded-lg border bg-white p-4">
              <h3 className="text-lg font-semibold mb-2">
                <Link href={post.url}>{post.title}</Link>
              </h3>
              <p className="text-sm text-gray-600 mb-3">{post.description}</p>
              <div className="text-xs text-gray-500">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("he-IL")}</time>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
