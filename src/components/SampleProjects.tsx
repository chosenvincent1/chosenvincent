import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

// interface Article {
//   id: number
//   title: string
//   description: string
//   category: string
//   publishedBy: string
//   link: string
// }

const SampleProjects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Guide')

  const articles = [
  {
    id: 1,
    title: 'Linux Infrastructure Monitoring with Middleware',
    category: 'Guide',
    description: 'Complete guide to monitoring Linux servers covering agent installation, key metrics, alert configuration, and troubleshooting.',
    link: 'https://middleware.io/blog/linux-infrastructure-monitoring-with-middleware/',
    company: 'Middleware'
  },
  {
    id: 2,
    title: 'Windows Infrastructure Monitoring: A Complete Guide',
    category: 'Guide',
    description: 'Complete guide to monitoring Windows Server with agent installation, metric interpretation, and production troubleshooting.',
    link: 'https://middleware.io/blog/windows-infrastructure-monitoring-with-middleware/',
    company: 'Middleware'
  },
  {
    id: 3,
    title: 'What Are AI Agents? A Complete Guide',
    category: 'Explanation',
    description: 'Complete guide to AI agents covering architecture, use cases, and practical DevOps applications.',
    link: 'https://middleware.io/blog/what-are-ai-agents/',
    company: 'Middleware'
  },
  {
    id: 4,
    title: 'Memory Leaks: Detection and Prevention Guide',
    category: 'Guide',
    description: 'Guide to detecting and preventing memory leaks across frontend, backend, and microservices architectures.',
    link: 'https://middleware.io/blog/memory-leaks/',
    company: 'Middleware'
  },
  
  // TUTORIALS
  {
    id: 5,
    title: 'Cypress Component Testing: A Complete Tutorial',
    category: 'Tutorial',
    description: 'Step-by-step guide to testing React components with Cypress including local setup and cloud execution.',
    link: 'https://www.lambdatest.com/blog/cypress-component-testing/',
    company: 'TestMu AI (formerly LambdaTest)'
  },
  {
    id: 6,
    title: 'Getting Started with Playwright and JavaScript',
    category: 'Tutorial',
    description: 'Beginner-friendly tutorial on browser automation with Playwright covering setup, test creation, and CI/CD integration.',
    link: 'https://autify.com/blog/playwright-javascript',
    company: 'Autify'
  },
  
  // EXPLANATIONS
  {
    id: 7,
    title: 'Exit Code 137 in Kubernetes: Causes and Fixes',
    category: 'Explanation',
    description: 'Deep dive into Kubernetes OOMKilled errors covering root cause analysis and production troubleshooting strategies.',
    link: 'https://middleware.io/blog/exit-code-137-in-kubernetes-causes-diagnosis-fixes/',
    company: 'Middleware'
  },
  {
    id: 8,
    title: 'Mock Delivery API Documentation',
    category: 'API Docs',
    description: 'Complete API documentation for 50+ endpoints covering delivery management, tracking, and analytics built with GitBook and OpenAPI.',
    link: 'https://chosen-1.gitbook.io/mock-delivery-api-doc/',
    company: 'Me with GitBook'
  },
  {
    id: 9,
    title: 'Plaid API Documentation',
    category: 'API Docs',
    description: 'Technical documentation for 20+ Plaid payment and banking endpoints with authentication, transactions, and account verification.',
    link: 'https://documenter.getpostman.com/view/26275816/2sBXVme8Mj',
    company: 'Me with Postman'
  },
]

  const categories = ['Guide', 'Tutorial', 'API Docs', 'Explanation']

  const filteredArticles = articles.filter(article => article.category === activeCategory)

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

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {article.title}
                </h3>

                {/* Description */}
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