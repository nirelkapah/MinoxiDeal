import React from "react";

export default function MDXRenderer({ children }: { children: React.ReactNode }) {
  return <div className="prose rtl max-w-none">{children}</div>;
}
