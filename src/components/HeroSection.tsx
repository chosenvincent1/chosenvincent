import { Linkedin, Github, Twitter } from 'lucide-react'
import { ReactTyped } from 'react-typed'

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 mb-[60px] md:mb-[100px]">
        {/* Logo */}
        <div className="text-xl font-light w-full">
          <span className="font-normal">{'{ '}</span>
          Chosen
          <span className="font-normal">{' }'}</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 w-full justify-end">
          <a 
            href="https://www.linkedin.com/in/chosenvincent1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://x.com/ChosenVincent1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://github.com/chosenvincent1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Empty div for spacing */}
        <div className="w-[100px]"></div>
      </nav>

      {/* Hero Content */}
      <div className="flex items-center justify-center px-8">
        <div className="max-w-4xl">
          {/* Main Heading with Typing Animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <ReactTyped
              strings={["Hello, <br/> I'm Chosen, a Technical Writer for Developers."]}
              typeSpeed={60}
              backSpeed={30}
              loop
              backDelay={2000}
              showCursor={true}
              cursorChar="|"
            />
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl font-light">
            I write technical documentation for developers. Over 3 years, I've published 100+ articles for B2B SaaS companies including Middleware, TestMu AI (formerly LambdaTest), Spin.AI, and Autify.
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
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <h2 className="text-[8rem] xl:text-[11rem] font-bold leading-none tracking-tight opacity-90 text-center">
            Chosen Vincent
          </h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection