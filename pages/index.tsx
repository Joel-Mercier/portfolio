import { WavyBackground } from "@/components/ui/wavy-background";
import { Github, Gitlab, Instagram } from "lucide-react";


export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <div className="absolute top-0 left-0 -z-10"><WavyBackground /></div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Joël Mercier</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Développeur web - Rails, React, React Native</h2>
        </div>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">À propos</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3 active" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Expériences</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projets</span>
              </a>
            </li>
          </ul>
        </nav>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs shrink-0">
            <a href="#" className="block hover:text-slate-200" rel="noreferrer noopener" target="_blank" aria-label="GitHub (opens in a new tab)">
              <Github />
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a href="#" className="block hover:text-slate-200" rel="noreferrer noopener" target="_blank" aria-label="Gitlab (opens in a new tab)">
              <Gitlab />
            </a>
          </li>
          <li className="mr-5 text-xs shrink-0">
            <a href="#" className="block hover:text-slate-200" rel="noreferrer noopener" target="_blank" aria-label="Instagram (opens in a new tab)">
              <Instagram />
            </a>
          </li>
        </ul>
      </header>
      <section className="pt-24 lg:w-1/2 lg:py-24">
        <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <p className="mb-4">
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
          </p>
          <p className="mb-4">
            My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          </p>
          <p className="mb-4">
            When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
          </p>
        </div>

      </section>
    </div>

  );
}
