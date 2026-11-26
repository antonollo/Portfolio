import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CASE_STUDIES } from '../../lib/portfolio-data'
import { CaseStudyCard } from './CaseStudyCard'

export function CaseStudiesSection() {
  const totalFormatted = String(CASE_STUDIES.length).padStart(2, '0')

  return (
    <section id="case-studies" className="relative bg-brand py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-9">
        <h2 className="mb-10 px-3 text-center font-display text-5xl tracking-wide text-ink uppercase sm:mb-14 sm:text-6xl lg:text-7xl">
          CASE STUDIES
        </h2>

        <div data-animate="experience-carousel" className="overflow-hidden py-2">
          <div data-animate="carousel-track" className="flex items-stretch">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            data-animate="carousel-prev"
            aria-label="Projeto anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <span
            data-carousel-counter
            aria-live="polite"
            className="min-w-[4.5rem] text-center font-display text-2xl tracking-wider text-ink sm:text-3xl"
          >
            01 / {totalFormatted}
          </span>

          <button
            type="button"
            data-animate="carousel-next"
            aria-label="Próximo projeto"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
