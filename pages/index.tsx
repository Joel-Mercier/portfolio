import Experience from "@/components/experience";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, ArrowUpRight, Github, Gitlab, Instagram } from "lucide-react";
import experiences from "@/data/experiences";
import { useIntersectionObserver } from "@/utils/hooks/use-intersection-observer";
import { cn } from "@/utils/cn";
import Link from "next/link";
import projects from "@/data/projects";
import Project from "@/components/project";
import blogPosts from "@/data/blog-posts";
import BlogPost from "@/components/blog-post";

export default function Home() {
  const { isIntersecting: isAboutSectionIntersecting, ref: aboutSectionRef } = useIntersectionObserver({
    threshold: 0.1,
  })
  const { isIntersecting: isExperienceSectionIntersecting, ref: experienceSectionRef } = useIntersectionObserver({
    threshold: 0.1,
  })
  const { isIntersecting: isProjectsSectionIntersecting, ref: projectsSectionRef } = useIntersectionObserver({
    threshold: 0.1,
  })
  const { isIntersecting: isBlogSectionIntersecting, ref: blogSectionRef } = useIntersectionObserver({
    threshold: 0.1,
  })

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
              <a className={cn("group flex items-center py-3", { "active": isAboutSectionIntersecting })} href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">À propos</span>
              </a>
            </li>
            <li>
              <a className={cn("group flex items-center py-3", { "active": isExperienceSectionIntersecting })} href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Expériences</span>
              </a>
            </li>
            <li>
              <a className={cn("group flex items-center py-3", { "active": isProjectsSectionIntersecting })} href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projets</span>
              </a>
            </li>
            <li>
              <a className={cn("group flex items-center py-3", { "active": isBlogSectionIntersecting })} href="#blog">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Blog</span>
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
      <div className="pt-24 lg:w-1/2 lg:py-24">
        <section ref={aboutSectionRef} id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias similique expedita consequuntur numquam non dolores, suscipit aut quo necessitatibus atque corporis voluptatum culpa autem ratione hic quibusdam dolore ex?
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor aliquid consequuntur accusantium optio excepturi cum quod, ullam aut omnis perspiciatis, nesciunt, aliquam hic! Alias perspiciatis accusantium nemo harum placeat.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quis odit pariatur accusamus? Doloremque perspiciatis sequi mollitia iste cum, et quasi, officiis possimus doloribus recusandae totam. Provident nisi suscipit in?
          </p>
        </section>
        <section ref={experienceSectionRef} id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Expériences</h2>
          </div>
          <ol className="group/list">
            {experiences.map((experience, index) => (
              <li className="mb-12" key={index}>
                <Experience experience={experience} />
              </li>
            ))}
          </ol>
          <Button variant="link" className="group/link" asChild>
            <Link href="/cv-joel-mercier-developpeur-web.pdf" target="blank" rel="noopener noreferrer">
              Voir le CV complet
              <span className="inline-block">
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </Link>
          </Button>
        </section>
        <section ref={projectsSectionRef} id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projets</h2>
          </div>
          <ol className="group/list">
            {projects.map((project, index) => (
              <li className="mb-12" key={index}>
                <Project project={project} />
              </li>
            ))}
          </ol>
          <Button variant="link" className="group/link" asChild>
            <Link href="/works">
              Voir tous les projets archivés
              <span className="inline-block">
                <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </Link>
          </Button>
        </section>
        <section ref={blogSectionRef} id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Blog</h2>
          </div>
          <ol className="group/list">
            {blogPosts.map((blogPost, index) => (
              <li className="mb-12" key={index}>
                <BlogPost blogPost={blogPost} />
              </li>
            ))}
          </ol>
          <Button variant="link" className="group/link" asChild>
            <Link href="/blog">
              Voir tous les articles archivés
              <span className="inline-block">
                <ArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </Link>
          </Button>
        </section>
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Produit et édité avec
            <Link className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300" href="https://code.visualstudio.com/">Visual Studio Code</Link>. Construit avec <Link className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300" href="https://nextjs.org/">NextJS</Link>, <Link className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300" href="https://tailwindcss.com/">TailwindCSS</Link> et <Link className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300" href="https://ui.shadcn.com/">Shadn/ui</Link> ♥️. Hébérgé chez <Link className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300" href="https://www.digitalocean.com/">DigitalOcean</Link>. Tous les textes utilisent la police d'écriture <Link className="font-medium text-slate-400 hover:text-red-300 focus-visible:text-red-300" href="https://rsms.me/inter/">Inter</Link>.</p>
        </footer>
      </div>
    </div>

  );
}