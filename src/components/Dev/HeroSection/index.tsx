import { ReactTyped } from 'react-typed'
import { content } from '../../../config/content'
import usePortfolioMode from '../../../hooks/usePortfolioMode'
import Navbar from '../../Shared/Navbar'

const HeroSection = () => {
  const mode = usePortfolioMode()
  const { hero } = content[mode]

  return (
    <div className="bg-[#0a0a0a] text-white pb-16 lg:pb-0 lg:min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex items-center justify-center mt-20 px-8">
        <div className="max-w-4xl">
          {/* Main Heading with Typing Animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <ReactTyped
              strings={[`${hero.typed}`]}
              typeSpeed={60}
              backSpeed={30}
              loop
              backDelay={2000}
              showCursor={true}
              cursorChar="__"
            />
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl font-light">
            {hero.description}
          </p>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="flex items-center w-fit gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            LET'S TALK
          </a>
        </div>

        {/* Large Name Display - Desktop (Static) */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none py-2">
          <h2 className="text-[8rem] xl:text-[10rem] font-bold leading-none tracking-tight opacity-90 text-center text-gray-400">
            Chosen Vincent
          </h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection