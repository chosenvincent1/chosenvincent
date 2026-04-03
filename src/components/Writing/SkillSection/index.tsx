import { ChevronRight } from 'lucide-react'
import { content } from '../../../config/content'
import usePortfolioMode from '../../../hooks/usePortfolioMode'

const SkillSection = () => {
  const mode = usePortfolioMode()
  const { skills } = content[mode]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 lg:p-8"
        >
          {/* Category Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
            {skill.title}
          </h3>

          {/* Skills List */}
          <ul className="space-y-4">
            {skill.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <ChevronRight size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SkillSection