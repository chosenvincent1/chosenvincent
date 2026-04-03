import { Linkedin, Twitter, Github } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-8 md:mb-0 items-center px-8 py-6">
        <div className="text-xl font-light">
          <span className="font-normal">{'{ '}</span>Chosen<span className="font-normal">{' }'}</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/chosenvincent1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors"><Linkedin size={18} /></a>
          <a href="https://x.com/ChosenVincent1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors"><Twitter size={18} /></a>
          <a href="https://github.com/chosenvincent1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors"><Github size={18} /></a>
        </div>
      </nav>
  )
}

export default Navbar