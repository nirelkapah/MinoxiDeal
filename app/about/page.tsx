export const metadata = {
  title: "אודות",
  description: "מי אנחנו ומה מטרת MinoxiDeal",
};

export default function AboutPage() {
  return (
    <article className="prose rtl prose-lg max-w-none bg-white p-6 rounded-lg border">
      <h1>אודות MinoxiDeal</h1>
      <p>
        MinoxiDeal הוא בלוג בעברית שמציג מידע מהימן, עדכני ומאורגן על טיפול במינוקסידיל לצמיחת שיער.
        המטרה שלנו היא לעזור לכם להבין איך הטיפול פועל, איך להתחיל בצורה נכונה, ומה חשוב לדעת לאורך הדרך.
      </p>
      <p>
        אנחנו משלבים מדריכים מעשיים, תמצות מחקרים, תשובות לשאלות נפוצות וטיפים לניהול שגרת הטיפול.
      </p>
    </article>
  );
}
