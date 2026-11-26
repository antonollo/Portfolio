import { FOOTER_CONTENT, PROFILE_LINKS } from '../../lib/portfolio-data'
import { TechIcon } from './TechIcon'

export function FooterSection() {
  return (
    <footer id="contatos" className="bg-brand text-ink">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center sm:py-20">
        <h2
          data-animate="footer-typing"
          data-text={FOOTER_CONTENT.heading}
          className="font-display text-4xl tracking-wide text-ink uppercase sm:text-6xl lg:text-[4rem]"
        >
          {FOOTER_CONTENT.heading}
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16 lg:gap-24">
          <div className="inline-flex items-center gap-4 text-surface">
            <a
              href={PROFILE_LINKS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub de ${PROFILE_LINKS.githubLabel}`}
              className="transition-transform duration-200 hover:scale-105"
            >
              <TechIcon name="github" className="h-11 w-11 sm:h-12 sm:w-12" />
            </a>
            <a
              href={PROFILE_LINKS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-animate="footer-typing"
              data-text={PROFILE_LINKS.githubLabel}
              className="font-display text-2xl tracking-wide text-surface uppercase transition-opacity duration-200 hover:opacity-80 sm:text-3xl"
            >
              {PROFILE_LINKS.githubLabel}
            </a>
          </div>

          <div className="inline-flex items-center gap-4 text-surface">
            <a
              href={PROFILE_LINKS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${PROFILE_LINKS.linkedinLabel}`}
              className="transition-transform duration-200 hover:scale-105"
            >
              <TechIcon name="linkedin" className="h-11 w-11 sm:h-12 sm:w-12" />
            </a>
            <a
              href={PROFILE_LINKS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-animate="footer-typing"
              data-text={PROFILE_LINKS.linkedinLabel}
              className="font-display text-2xl tracking-wide text-surface uppercase transition-opacity duration-200 hover:opacity-80 sm:text-3xl"
            >
              {PROFILE_LINKS.linkedinLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-surface py-4 text-brand">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 font-display text-lg tracking-wide uppercase sm:flex-row sm:text-xl lg:px-12">
          <span>{FOOTER_CONTENT.copyrightLeft}</span>
          <span>{FOOTER_CONTENT.copyrightRight}</span>
        </div>
      </div>
    </footer>
  )
}
