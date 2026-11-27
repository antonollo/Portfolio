import { ArrowRight, ChevronDown } from 'lucide-react'
import { HERO_CONTENT } from '../../lib/portfolio-data'
import { HeroWaves } from './HeroWaves'
import { TechIcon } from './TechIcon'

export function HeroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      <div
        data-animate="hero-waves"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <HeroWaves />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div
          data-animate="hero-content"
          className="flex max-w-xl flex-col items-start"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-ink/20 bg-surface px-4 py-2 font-sans text-xs font-medium text-ink sm:text-sm">
            <span
              className="h-3 w-3 shrink-0 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span>{HERO_CONTENT.badge}</span>
          </div>

          <h1 className="mb-6 font-display text-6xl leading-[0.94] tracking-wide uppercase sm:text-7xl lg:text-[5.4rem]">
            <span className="block text-ink">{HERO_CONTENT.titleLead}</span>{' '}
            <span className="block text-brand">{HERO_CONTENT.titleAccent}</span>
          </h1>

          <p className="mb-9 max-w-lg font-sans text-base leading-relaxed text-ink/90 sm:text-lg">
            {HERO_CONTENT.description.map((segment, index) =>
              segment.bold ? (
                <strong key={index} className="font-bold text-ink">
                  {segment.text}
                </strong>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </p>

          <div className="mb-12 flex flex-wrap items-center gap-4">
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 font-button text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.02] sm:text-base"
            >
              <span>{HERO_CONTENT.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex items-center gap-3 rounded-full border border-brand bg-surface px-6 py-3 font-button text-sm font-semibold text-ink transition-transform duration-200 hover:scale-[1.02] sm:text-base"
            >
              <span>{HERO_CONTENT.secondaryCta.label}</span>
              <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <ul
            aria-label="Principais tecnologias"
            className="flex flex-wrap items-center gap-6 text-ink sm:gap-7"
          >
            {HERO_CONTENT.stackIcons.map((tech) => (
              <li key={tech.key} title={tech.label}>
                <TechIcon
                  name={tech.key}
                  label={tech.label}
                  className={
                    tech.key === 'scikit-learn' || tech.key === 'n8n'
                      ? 'h-8 w-14 sm:h-9 sm:w-16'
                      : 'h-8 w-8 sm:h-9 sm:w-9'
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
