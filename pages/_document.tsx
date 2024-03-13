import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="dark bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
