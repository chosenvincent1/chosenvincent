import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { content } from '../../../config/content'
import type { Project } from '../../../config/content'
import usePortfolioMode from '../../../hooks/usePortfolioMode'


const SampleProjects = () => {
  const mode = usePortfolioMode()
  const { projects } = content[mode]
  
  const [activeCategory, setActiveCategory] = useState<string>('Guide')

  const categories = ['Guide', 'Tutorial', 'API Docs', 'Explanation']

  const filteredArticles = (projects as Project[]).filter((article) => article.category === activeCategory)

  return (
    <section className="bg-white py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-light">
            <span className="font-normal">* </span>SAMPLE PROJECTS
          </h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-all ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
            <article 
            key={article.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
            {/* Card Content */}
            <div className="p-6">
                {/* Published By */}
                <p className="text-sm text-gray-500 mb-2">
                {`${article.category} | Published by ${article.company}`}
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {article.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                {article.description}
                </p>

                {/* Read Article Link */}
                <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:gap-3 transition-all"
                >
                Read article
                <ArrowRight size={18} />
                </a>
            </div>
            </article>
        ))}
        </div>

        {/* No Results Message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SampleProjects