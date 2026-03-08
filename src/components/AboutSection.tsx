import SkillsSection from "./SkillSection"

const AboutSection = () => {
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
            {/* Description - Takes up more space */}
            <div className="flex-1 md:flex-[2]">
                <p className="text-xl mb-4 md:text-2xl font-light leading-relaxed">
                    I'm Chosen Vincent, a software developer and technical writer with a B.Sc in Computer Science. I code before I write.
                </p>
                <p className="text-xl mb-4 md:text-2xl font-light leading-relaxed">
                    My background in development means I test every code example before publishing it. If it doesn't work on my machine, it doesn't go in the article. This approach helps me create documentation that developers actually want to read.
                </p>
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                    I've worked with companies like Middleware on infrastructure monitoring guides, TestMu AI on test automation tutorials, and built API documentation for a payment and delivery system.
                </p>
            </div>

            {/* Image - Fixed width */}
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

        <SkillsSection />
      </div>
    </section>
  )
}

export default AboutSection