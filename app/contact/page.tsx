export const metadata = {
  title: "צור קשר",
  description: "יצירת קשר עם MinoxiDeal",
};

export default function ContactPage() {
  return (
    <article className="prose rtl prose-lg max-w-none bg-white p-6 rounded-lg border">
      <h1>צור קשר</h1>
      <p>
        נשמח לשמוע מכם! ניתן לפנות אלינו בשאלות, הצעות לשיפור ונושאים מקצועיים.
      </p>
      <ul>
        <li>אימייל: <a href="mailto:contact@minoxideal.com">contact@minoxideal.com</a></li>
      </ul>
    </article>
  );
}
