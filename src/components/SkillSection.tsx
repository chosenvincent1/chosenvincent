import { ChevronRight } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Technical Writing',
      skills: [
        'API Documentation',
        'Developer Tutorials',
        'Product Documentation',
        'Technical Guides'
      ]
    },
    {
      id: 2,
      title: 'Development',
      skills: [
        'React & TypeScript',
        'Node.js & Express',
        'Cypress & Playwright',
        'HTML/CSS/JavaScript'
      ]
    },
    {
      id: 3,
      title: 'Tools & Technologies',
      skills: [
        'Git & GitHub',
        'Markdown & Postman',
        'GitBook, ReadMe, and Mintlify',
        'OpenAPI Specification'
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {skillCategories.map((category) => (
        <div
          key={category.id}
          className="bg-white shadow-md rounded-2xl p-6 lg:p-8"
        >
          {/* Category Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
            {category.title}
          </h3>

          {/* Skills List */}
          <ul className="space-y-4">
            {category.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <ChevronRight size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SkillsSection