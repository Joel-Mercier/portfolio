"use client"

import { cn } from "@/utils/cn"
import useScrollspy from "@/utils/hooks/use-scroll-spy";
import { useState, useEffect } from "react";

const HomeNav = () => {
  const ids = ['about', 'experiences', 'projects'];
  const [elements, setElements] = useState<(Element | null)[]>([]);
  const [currentActiveIndex] = useScrollspy(elements, {
    offset: 20,
  });

  useEffect(() => {
    const widgetElements = ids.map((item) =>
      document.querySelector(`section[id="${item}"]`)
    );

    setElements(widgetElements);
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a
            className={cn("group flex items-center py-3", {
              active: currentActiveIndex === 0,
            })}
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              À propos
            </span>
          </a>
        </li>
        <li>
          <a
            className={cn("group flex items-center py-3", {
              active: currentActiveIndex === 1,
            })}
            href="#experiences"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Expériences
            </span>
          </a>
        </li>
        <li>
          <a
            className={cn("group flex items-center py-3", {
              active: currentActiveIndex === 2,
            })}
            href="#projects"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projets
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HomeNav