import { useLocation } from 'react-router-dom'

export type PortfolioMode = 'writing' | 'development'

const usePortfolioMode = (): PortfolioMode => {
  const { pathname } = useLocation()
  return pathname.startsWith('/development') ? 'development' : 'writing'
}

export default usePortfolioMode