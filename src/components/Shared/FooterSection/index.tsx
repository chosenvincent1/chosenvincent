import { User } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            <User size={20} />
            Looking to Hire?
          </button>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-8">
          LET'S TALK :)
        </h2>

        {/* Footer Info - Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-800 justify-items-center">
          {/* Designed By */}
          <div>
            <p className="text-xs text-gray-500 mb-1">DESIGNED BY:</p>
            <a 
                href="https://graysondaniel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                GRAYSON DANIEL
              </a>
          </div>

          {/* Developed By */}
          <div>
            <p className="text-xs text-gray-500 mb-1">DEVELOPED BY:</p>
            <a 
                href="https://www.linkedin.com/in/chosenvincent1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                CHOSEN VINCENT
              </a>
          </div>

          {/* Socials */}
          <div className=''>
            <p className="text-xs text-gray-500 mb-1">SOCIALS:</p>
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/chosenvincent1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                LINKEDIN
              </a>
              <a 
                href="https://x.com/ChosenVincent1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                X
              </a>
              <a 
                href="https://github.com/chosenvincent1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>

        

        {/* Footer Info - Mobile Layout */}
        <div className="md:hidden space-y-8 pt-8 border-t border-gray-800">
          {/* Designed By */}
          <div>
            <p className="text-xs text-gray-500 mb-1">DESIGNED BY:</p>
            <p className="font-medium">DANIEL GRAYSON</p>
          </div>

          {/* Developed By */}
          <div>
            <p className="text-xs text-gray-500 mb-1">DEVELOPED BY:</p>
            <p className="font-medium">CHOSEN VINCENT</p>
          </div>


          {/* Socials */}
          <div>
            <p className="text-xs text-gray-500 mb-3">SOCIALS:</p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                LINKEDIN
              </a>
              <a 
                href="https://twitter.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                X
              </a>
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer