import { getWorks } from "@/utils/mdx"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"
import { MDXRemote } from "next-mdx-remote/rsc";
import { Markdown } from "@/mdx-components"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  const projects = getWorks()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

interface Props {
  params: {
    slug: string
  }
}

const Work = ({ params }: Props) => {

  const project = getWorks().find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="lg:py-24">
      <Link
        href="/works"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-red-500 cursor-pointer"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        Retour
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-12">{project.metadata.title}</h1>
      <div className="flex">
        <div className="prose text-slate-200 prose-h2:font-semibold prose-h3:font-semibold prose-h4:font-semibold prose-h5:font-semibold prose-h6:font-semibold prose-a:font-medium prose-a:text-slate-200 hover:prose-a:text-red-300 focus-visible:prose-a:text-red-300">
          <MDXRemote
            source={project.content}
            options={{
              mdxOptions: {},
            }}
            components={Markdown}
          />
        </div>
        <div className="flex flex-col items-end w-full">
          {project.metadata.url &&
            <Button variant="link" className="group/link text-lg font-bold" asChild>
              <a
                href={project.metadata.url}
                target="blank"
                rel="noopener noreferrer"
              >
                Voir le projet
                <span className="inline-block">
                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </a>
            </Button>
          }
          {project.metadata.code &&
            <Button variant="link" className="group/link text-lg font-bold" asChild>
              <a
                href={project.metadata.code}
                target="blank"
                rel="noopener noreferrer"
              >
                Voir le code
                <span className="inline-block">
                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </a>
            </Button>
          }
        </div>
      </div>

    </div>
  )
}

export default Work