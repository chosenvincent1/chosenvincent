
import { ExternalLink } from 'lucide-react'
import { content } from '../../../config/content'
import type { Project } from '../../../config/content'
import usePortfolioMode from '../../../hooks/usePortfolioMode'

const ProjectsSection = () => {
  const mode = usePortfolioMode()
  const { projects } = content[mode]

  return (
    <section className="bg-[#f0f2f0] py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light mb-12">
          <span className="font-normal">* </span>PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(projects as Project[]).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {project.name}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink size={15} />
                  Visit Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection