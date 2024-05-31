import "@/styles/globals.css";
import Mask from "@/components/ui/mask";
import { Inter } from "next/font/google";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";

export const metadata = {
  title: "Joël Mercier",
  description:
    "Développeur web dynamique et soucieux de fournir un travail performant.",
  openGraph: {
    title: "Joël Mercier",
    description:
      "Développeur web dynamique et soucieux de fournir un travail performant.",
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return getStaticParams();
}

export default function RootLayout({
  params: { locale },
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="fr">
      <body className="dark bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <div className="relative">
          <Mask />
          <main
            className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ${inter.className}`}
          >
            <I18nProviderClient locale={locale}> {children}</I18nProviderClient>
          </main>
        </div>
      </body>
    </html>
  );
}
