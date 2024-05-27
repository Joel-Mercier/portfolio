import { getWorks } from "@/utils/mdx"
import Project from "./project"

const Projects = () => {
  const projects = getWorks()
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