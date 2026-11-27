import { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { NAV_ITEMS, PROFILE_LINKS } from '../../lib/portfolio-data'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand text-ink">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12"
      >
        <a
          href="#intro"
          onClick={handleMobileLinkClick}
          className="font-display text-2xl tracking-wider text-ink uppercase transition-opacity duration-200 hover:opacity-85"
        >
          {PROFILE_LINKS.brand}
        </a>

        <ul className="hidden items-center gap-9 md:flex lg:gap-12">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-sans text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-80"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={PROFILE_LINKS.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 font-button text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-80 md:inline-flex"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span>{PROFILE_LINKS.cvLabel}</span>
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={
            isMobileMenuOpen
              ? 'Fechar menu de navegação'
              : 'Abrir menu de navegação'
          }
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink transition-opacity duration-200 hover:opacity-80 md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-nav-menu"
        className={
          isMobileMenuOpen
            ? 'border-t border-surface/25 bg-brand px-6 pt-3 pb-5 md:hidden'
            : 'hidden md:hidden'
        }
      >
        <ul className="flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleMobileLinkClick}
                className="block py-1.5 font-sans text-base font-medium text-ink transition-opacity duration-200 hover:opacity-80"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-surface/20 pt-4">
          <a
            href={PROFILE_LINKS.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMobileLinkClick}
            className="inline-flex items-center gap-2 font-button text-base font-semibold text-ink transition-opacity duration-200 hover:opacity-80"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>{PROFILE_LINKS.cvLabel}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
