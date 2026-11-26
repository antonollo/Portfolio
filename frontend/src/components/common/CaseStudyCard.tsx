import { ArrowRight } from 'lucide-react'
import type { CaseStudy } from '../../types/portfolio'
import { TechIcon } from './TechIcon'

interface CaseStudyCardProps {
  study: CaseStudy
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article
      data-animate="carousel-card"
      className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
    >
      <div className="flex h-full flex-col rounded-3xl bg-surface p-5 text-ink sm:p-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface">
          {study.logoSrc ? (
            <img
              src={study.logoSrc}
              alt={study.logoAlt}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div
              role="img"
              aria-label={study.logoAlt}
              className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-brand/45 bg-surface px-4 text-center"
            >
              <svg
                viewBox="0 0 320 200"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
              >
                <path
                  d="M24 156L92 64L164 132L236 48L296 108"
                  stroke="#CC2936"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 52L96 138L164 72L238 150L296 84"
                  stroke="#F7F3E3"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <circle cx="92" cy="64" r="5" fill="#CC2936" />
                <circle cx="164" cy="132" r="5" fill="#F7F3E3" />
                <circle cx="236" cy="48" r="5" fill="#CC2936" />
                <circle cx="96" cy="138" r="4" fill="#F7F3E3" />
                <circle cx="164" cy="72" r="4" fill="#CC2936" />
                <circle cx="238" cy="150" r="4" fill="#F7F3E3" />
              </svg>

              {study.fallbackBadge && (
                <span className="relative z-10 mb-2 inline-flex items-center gap-1.5 rounded-full border border-brand/50 bg-surface px-3 py-0.5 font-sans text-[10px] font-semibold tracking-wider text-ink uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {study.fallbackBadge}
                </span>
              )}
              <span className="relative z-10 font-display text-4xl tracking-wider text-ink uppercase sm:text-5xl">
                {study.fallbackHeadline ?? study.title}
              </span>
              {study.fallbackSubline && (
                <span className="relative z-10 mt-1 font-sans text-xs font-medium text-brand">
                  {study.fallbackSubline}
                </span>
              )}
            </div>
          )}
        </div>

        <h3 className="mt-5 font-display text-2xl leading-tight tracking-wide text-ink uppercase sm:text-[1.75rem]">
          {study.title}
        </h3>

        <p className="mt-1 font-sans text-xs leading-relaxed text-ink/85 sm:text-sm">
          {study.subtitle}
        </p>

        <ul
          aria-label={`Categorias de ${study.title}`}
          className="mt-4 flex flex-wrap gap-2"
        >
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-3 py-1 font-sans text-[11px] font-medium text-ink/90"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <span>{tag}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <ul
            aria-label={`Stack principal de ${study.title}`}
            className="flex items-center gap-3 text-brand"
          >
            {study.stackIcons.map((tech) => (
              <li key={tech.key} title={tech.label}>
                <TechIcon
                  name={tech.key}
                  label={tech.label}
                  className={
                    tech.key === 'scikit-learn' ? 'h-6 w-9' : 'h-6 w-6'
                  }
                />
              </li>
            ))}
          </ul>

          <a
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-4 py-2 font-button text-xs font-semibold text-ink transition-transform duration-200 hover:scale-[1.03]"
          >
            <span>{study.ctaLabel}</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
