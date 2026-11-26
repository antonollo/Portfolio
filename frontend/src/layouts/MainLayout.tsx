import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { FooterSection } from '../components/common/FooterSection'
import { Navbar } from '../components/common/Navbar'
import { usePortfolioMotion } from '../hooks/usePortfolioMotion'

export function MainLayout() {
  // Escopo do motion: único ancestral comum de Navbar, página e Footer.
  const scopeRef = useRef<HTMLDivElement>(null)
  usePortfolioMotion(scopeRef)

  return (
    <div ref={scopeRef} className="flex min-h-screen flex-col bg-surface text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  )
}
