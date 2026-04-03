import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { content } from '../../../config/content'
import type { Company } from '../../../config/content'
import usePortfolioMode from '../../../hooks/usePortfolioMode'


const CompaniesSection = () => {
  const mode = usePortfolioMode()
  const { companies } = content[mode]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)


  const handlePrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : companies.length - 1))
      setIsTransitioning(false)
    }, 150)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev < companies.length - 1 ? prev + 1 : 0))
      setIsTransitioning(false)
    }, 150)
  }

  const currentCompany: Company = companies[currentIndex]

  return (
    <section className="bg-[#1a1a1a] text-white py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light mb-12 px-6 py-4 text-center">
          <span className="font-normal">* </span>COMPANIES I'VE WORKED WITH
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-2 z-10 w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-all"
            aria-label="Previous company"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Company Display - Centered */}
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className={`bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 space-y-4 shadow-lg transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {/* Company Name with Logo */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={currentCompany.logo} 
                    alt={`${currentCompany.name} logo`}
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="text-2xl md:text-3xl font-medium">
                    {currentCompany.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {currentCompany.description}
                </p>

                {/* Preview Link */}
                <a
                  href={currentCompany.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:-translate-x-2 z-10 w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-all"
            aria-label="Next company"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CompaniesSection