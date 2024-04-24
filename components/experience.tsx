import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Experience as ExperienceType } from "@/data/experiences";
import { parseISO } from "date-fns";

interface Props {
  experience: ExperienceType;
}

const Experience = ({ experience }: Props) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label="2024 — Present"
      >
        {parseISO(experience.dateBegin).getFullYear()} —{" "}
        {parseISO(experience.dateEnd).getFullYear() || experience.dateEnd}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <Link
            href={experience.companyUrl}
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-red-500 focus-visible:text-red-500  group/link text-base"
            target="blank"
            rel="noreferrer noopener"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {experience.role}
              {" · "}
              <span className="inline-block">
                {experience.title}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-normal whitespace-pre-wrap">
          {experience.body}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies utilisées">
          {experience.technologies.split(", ").map((technology, index) => (
            <li className="mr-1.5 mt-2" key={index}>
              <Badge>{technology}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
