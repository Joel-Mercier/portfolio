import { getWorks } from "@/utils/mdx"
import Project from "./project"
import { getCurrentLocale } from "@/locales/server"

const Projects = () => {
  const locale = getCurrentLocale()
  const projects = getWorks(locale)
  return (
    <ol className="group/list">
      {projects.slice(0, 4).map((project, index) => (
        <li className="mb-12" key={index}>
          <Project project={project} />
        </li>
      ))}
    </ol>
  )
}

export default Projects