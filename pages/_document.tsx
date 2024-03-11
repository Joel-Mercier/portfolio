import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-blue-300 selection:text-blue-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
