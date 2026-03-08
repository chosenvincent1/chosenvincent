import { Mail, BookOpen, Linkedin, Github, X, FileDown } from 'lucide-react'

const ContactSection = () => {
  const contactLinks = [
    {
      id: 1,
      icon: <Mail size={48} />,
      title: 'Email',
      link: 'mailto:chosendev2000@gmail.com',
      linkText: 'chosendev2000@gmail.com'
    },
    {
      id: 2,
      icon: <FileDown size={48} />,
      title: 'Resume',
      link: '/images/ChosenVincent-TechnicalWriting-Resume.pdf', // Update with your actual resume path
      linkText: 'View resume',
      download: false
    },
    {
      id: 3,
      icon: <BookOpen size={48} />,
      title: 'Blog',
      link: 'https://chosenvincent.hashnode.dev/',
      linkText: 'View blog',
    },
    {
      id: 3,
      icon: <Linkedin size={48} />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/chosenvincent1/',
      linkText: 'Connect with me'
    },
    {
      id: 4,
      icon: <Github size={48} />,
      title: 'GitHub',
      link: 'https://github.com/chosenvincent1',
      linkText: 'View my code'
    },
    {
      id: 5,
      icon: <X size={48} />,
      title: 'X',
      link: 'https://x.com/ChosenVincent1',
      linkText: 'Follow me'
    }
  ]

  return (
    <section id='contact' className="bg-[#0a0a0a] text-white py-20 px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          Let's Connect
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              download={contact.download}
              target='_blank'
              rel='noopener noreferrer'
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-gray-600 hover:bg-[#222] transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-6 text-gray-400 group-hover:text-white transition-colors">
                {contact.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {contact.title}
              </h3>

              {/* Link Text */}
              <p className="text-gray-400 group-hover:text-white transition-colors">
                {contact.linkText}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection