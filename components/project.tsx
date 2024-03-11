import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Experience } from "@/data/experiences"
import { parseISO } from "date-fns"
import { Project } from "@/data/projects"
import Image from "next/image"
import Test from "../public/portfolio/covers/pixseb.jpg"

interface Props {
  project: Project
}

const Project = ({ project }: Props) => {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <Link href={project.websiteUrl} className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-rose-600 focus-visible:text-rose-600  group/link text-base" target="blank" rel="noreferrer noopener">
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {project.title}
              <span className="inline-block">
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-normal whitespace-pre-wrap">{project.lead}</p>

      </div>
      <Image src={project.cover} alt={project.title} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" />
    </div>
  )
}

export default Project