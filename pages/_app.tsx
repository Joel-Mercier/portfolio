import Mask from "@/components/ui/mask";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Mask />
      <main
        className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ${inter.className}`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
