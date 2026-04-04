import SkillSection from "../../Writing/SkillSection"
import { content } from "../../../config/content"
import usePortfolioMode from "../../../hooks/usePortfolioMode"

const AboutSection = () => {
  const mode = usePortfolioMode()
  const { about } = content[mode]

  return (
    <section className="bg-gray-100 py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* About Header and Content */}
        <div className="mb-16">
        {/* Title */}
        <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light">
            <span className="font-normal">* </span>ABOUT
            </h2>
        </div>

        {/* Description and Image */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 md:flex-[2] about-text">
              {about.paragraphs.map((para, index) => (
                <p 
                  key={index}
                  dangerouslySetInnerHTML={{ __html: para }}
                  className="text-xl mb-4 md:text-2xl font-light leading-[1.5]"
                />
              ))}
            </div>

            <div className="flex-shrink-0">
            <div className="w-full md:w-[250px] lg:w-[300px] bg-gray-300 aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                src="/images/Chosen_DP.jpeg" 
                alt="Chosen Vincent" 
                className="w-full h-full object-cover"
                />
            </div>
            </div>
        </div>
        </div>


        {/* Skills Grid */}
        <SkillSection />
      </div>
    </section>
  )
}

export default AboutSection