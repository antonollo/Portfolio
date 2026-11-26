import { Outlet } from 'react-router-dom'
import { FooterSection } from '../components/common/FooterSection'
import { Navbar } from '../components/common/Navbar'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  )
}
