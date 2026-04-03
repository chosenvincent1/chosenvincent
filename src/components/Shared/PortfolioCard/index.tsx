
import { useNavigate } from 'react-router-dom'

interface PortfolioCardProps {
  tag: string
  title: string
  description: string
  ctaText: string
  route: string
  accent?: 'white' | 'yellow'
}

const PortfolioCard = ({ tag, title, description, ctaText, route, accent = 'white' }: PortfolioCardProps) => {
  const navigate = useNavigate()

  const isYellow = accent === 'yellow'

  return (
    <button
      onClick={() => navigate(route)}
      className={`flex-1 text-left rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200 group
        ${isYellow
          ? 'border border-[#d4f000]/10 bg-[#d4f000]/[0.02] hover:border-[#d4f000]/40 hover:bg-[#d4f000]/[0.05]'
          : 'border border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]'
        }`}
    >
      <p className={`text-[10px] uppercase tracking-widest mb-3 ${isYellow ? 'text-[#d4f000]/40' : 'text-white/30'}`}>
        ✦ {tag}
      </p>
      <h2 className="text-xl font-extrabold mb-2 tracking-wide">{title}</h2>
      <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">{description}</p>
      <span className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${isYellow ? 'text-[#d4f000]' : 'text-white'}`}>
        {ctaText}
        <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </button>
  )
}

export default PortfolioCard