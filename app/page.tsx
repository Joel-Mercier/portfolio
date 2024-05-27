import Experience from "@/components/experience";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Gitlab,
  Instagram,
} from "lucide-react";
import experiences from "@/data/experiences";
import Link from "next/link";
import Projects from "@/components/projects";
import HomeNav from "@/components/home-nav";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4" id="root">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <div className="absolute top-0 left-0 -z-10">
            <WavyBackground />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Joël Mercier
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Développeur web
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            Je conçois et développe des sites et applications web avec Rails,
            React et React Native.
          </p>
        </div>
        <HomeNav />
        <div>
          <a
            href="mailto:hello@joelmercier.io"
            className="font-medium text-slate-200 hover:text-red-300 focus-visible:text-red-300"
          >
            hello@joelmercier.io
          </a>
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 text-xs shrink-0">
              <a
                href="https://github.com/Joel-Mercier"
                className="block hover:text-slate-200"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="GitHub (opens in a new tab)"
              >
                <Github />
              </a>
            </li>
            <li className="mr-5 text-xs shrink-0">
              <a
                href="https://gitlab.com/SireCuit"
                className="block hover:text-slate-200"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Gitlab (opens in a new tab)"
              >
                <Gitlab />
              </a>
            </li>
            <li className="mr-5 text-xs shrink-0">
              <a
                href="https://www.instagram.com/adventuresincode/"
                className="block hover:text-slate-200"
                rel="noreferrer noopener"
                target="_blank"
                aria-label="Instagram (opens in a new tab)"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <p className="mb-4">
            En 2013 j&apos;ai pris la décision de comprendre comment
            fonctionnaient les sites sur lesquels je passais beaucoup (trop ?)
            de temps. Une fois attéri dans l&apos;univers du développement web,
            cette passion ne m&apos;a pas quitté.
          </p>
          <p className="mb-4">
            Aujourd&apos;hui mes efforts se concentrent sur la création
            d&apos;applications à valeur ajoutée au sein de l&apos;agence{" "}
            <Link
              className="font-medium text-slate-200 hover:text-red-300 focus-visible:text-red-300"
              href="https://ideematic.com"
              target="blank"
              rel="noopener noreferrer"
            >
              Idéematic
            </Link>{" "}
            à Strasbourg. Qu&apos;il s&apos;agisse de proposer de la logique et
            de l&apos;administration de données avec <strong>Ruby on Rails</strong> ou des
            expériences utilisateur avec <strong>React</strong> et <strong>React Native</strong>, j&apos;investi
            mes connaissances dans chaque projet.
          </p>
          <p className="mb-4">
            Dans mon temps libre je fais de la musique, je code toutes sortes de
            projets qui me passent par la tête et je me bagarre sur Azeroth dans
            World of Warcraft.
          </p>
        </section>
        <section
          id="experiences"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Expériences
            </h2>
          </div>
          <ol className="group/list">
            {experiences.map((experience, index) => (
              <li className="mb-12" key={index}>
                <Experience experience={experience} />
              </li>
            ))}
          </ol>
          <Button variant="link" className="group/link" asChild>
            <Link
              href="/cv-joel-mercier-developpeur-web.pdf"
              target="blank"
              rel="noopener noreferrer"
            >
              Voir le CV complet
              <span className="inline-block">
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </Link>
          </Button>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projets
            </h2>
          </div>
          <Projects />

          <Button variant="link" className="group/link" asChild>
            <Link href="/works">
              Voir tous les projets archivés
              <span className="inline-block">
                <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </Link>
          </Button>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Produit et édité avec{" "}
            <Link
              className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300"
              href="https://code.visualstudio.com/"
            >
              Visual Studio Code
            </Link>
            . Construit avec{" "}
            <Link
              className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300"
              href="https://nextjs.org/"
            >
              NextJS
            </Link>
            ,{" "}
            <Link
              className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300"
              href="https://tailwindcss.com/"
            >
              TailwindCSS
            </Link>{" "}
            et{" "}
            <Link
              className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300"
              href="https://ui.shadcn.com/"
            >
              Shadcn/ui
            </Link>{" "}
            ♥️. Hébérgé chez{" "}
            <Link
              className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300"
              href="https://vercel.com/"
            >
              Vercel
            </Link>
            . Tous les textes utilisent la police d&apos;écriture{" "}
            <Link
              className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300"
              href="https://rsms.me/inter/"
            >
              Inter
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
