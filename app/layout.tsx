import "@/styles/globals.css";
import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  // Production domain
  metadataBase: new URL("https://MinoxiDeal.co.il"),
  title: {
    default: "MinoxiDeal - כל מה שצריך לדעת על מינוקסידיל",
    template: "%s | MinoxiDeal",
  },
  description:
    "בלוג בעברית על טיפול במינוקסידיל: מדריכים, מחקרים, תופעות לוואי, תוצאות ועוד.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "MinoxiDeal",
    title: "MinoxiDeal - בלוג מינוקסידיל בעברית",
    description:
      "בלוג בעברית על טיפול במינוקסידיל: מדריכים, מחקרים, תופעות לוואי, תוצאות ועוד.",
    url: "https://MinoxiDeal.co.il",
  },
  twitter: { card: "summary_large_image", title: "MinoxiDeal" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.className}>
      <body>
        <div className="min-h-dvh flex flex-col">
          <header className="border-b bg-white">
            <div className="container flex items-center justify-between py-4">
              <a href="/" className="text-xl font-bold">MinoxiDeal</a>
              <nav className="flex gap-4 text-sm">
                <a href="/blog" className="hover:underline">בלוג</a>
                <a href="/about" className="hover:underline">אודות</a>
                <a href="/contact" className="hover:underline">צור קשר</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 bg-gray-50">
            <div className="container py-8">
              {children}
            </div>
          </main>
          <footer className="border-t bg-white">
            <div className="container py-6 text-sm text-gray-600 flex items-center justify-between">
              <p>© {new Date().getFullYear()} MinoxiDeal</p>
              <a className="hover:underline" href="/rss.xml">RSS</a>
            </div>
          </footer>
        </div>
        {/* Structured Data: Website + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MinoxiDeal",
              url: "https://MinoxiDeal.co.il",
              inLanguage: "he-IL",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://MinoxiDeal.co.il/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MinoxiDeal",
              url: "https://MinoxiDeal.co.il",
              logo: "https://MinoxiDeal.co.il/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}
