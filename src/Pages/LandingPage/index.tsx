import PortfolioCard from '../../components/Shared/PortfolioCard'
import Navbar from '../../components/Shared/Navbar'

export default function LandingPage () {

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8 md:pb-48 text-center relative z-10">

        {/* Profile Image */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 mb-6">
          <img
            src="/images/Chosen_DP.jpeg"
            alt="Chosen Vincent"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs md:text-lg uppercase tracking-widest text-white/40 mb-5">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4">
          What brings you here?
        </h1>
        <p className="text-white/40 text-sm md:text-lg max-w-2xl mb-10 font-light leading-relaxed">
          I'm Chosen — a technical writer and frontend developer. I write developer docs and build web applications. Choose what you're here for.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
          <PortfolioCard
            tag="For Writers"
            title="Technical Writing"
            description="Documentation, tutorials, guides, and developer content."
            ctaText="View writing work"
            route="/writing"
            accent="white"
          />

          <PortfolioCard
            tag="For Developers"
            title="Frontend Development"
            description="Production-ready, accessible web applications with clean, maintainable code."
            ctaText="View dev work"
            route="/development"
            accent="yellow"
          />
        </div>
      </div>

      {/* Watermark */}
      <div className="hidden lg:block overflow-hidden absolute bottom-0 left-0 right-0 text-center text-[8rem] xl:text-[10rem] font-extrabold text-white/[0.04] leading-none tracking-tight pointer-events-none select-none z-0">
        Chosen Vincent
      </div>
    </div>
  )
}