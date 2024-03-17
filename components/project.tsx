import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project as ProjectType } from "@/data/projects";
import ExportedImage from "next-image-export-optimizer";
import { Badge } from "./ui/badge";

interface Props {
  project: ProjectType;
}

const Project = ({ project }: Props) => {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <Link
            href={project.path || project.websiteUrl || "#"}
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-emerald-500 focus-visible:text-emerald-500  group/link text-base"
            target={!project.path ? "blank" : undefined}
            rel={!project.path ? "noreferrer noopener" : undefined}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {project.title}
              {!project.path && (
                <span className="inline-block">
                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              )}
            </span>
          </Link>
        </h3>
        <p
          className="mt-2 text-sm leading-normal whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: project.lead }}
        ></p>
        {project.technologies && (
          <ul
            className="mt-2 flex flex-wrap"
            aria-label="Technologies utilisées"
          >
            {project.technologies.split(", ").map((technology, index) => (
              <li className="mr-1.5 mt-2" key={index}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ExportedImage
        src={project.cover}
        alt={project.title}
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 aspect-square object-cover"
      />
    </div>
  );
};

export default Project;
