import portraitOriginal from '../../assets/antonollo_original.png'
import portraitStylized from '../../assets/antonollo_vermelho.jpg'
import { ABOUT_CONTENT } from '../../lib/portfolio-data'

export function AboutSection() {
  return (
    <section
      id="sobre-mim"
      data-animate="about-section"
      className="bg-surface py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-10 lg:px-12">
        <div className="lg:col-span-7 lg:col-start-1">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-ink/20 bg-surface px-4 py-1.5 font-sans text-xs font-medium text-ink sm:text-sm">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
              aria-hidden="true"
            />
            <span>{ABOUT_CONTENT.badge}</span>
          </div>

          <h2 className="font-display text-5xl leading-[0.96] tracking-wide uppercase sm:text-6xl lg:text-7xl">
            <span className="text-ink">{ABOUT_CONTENT.titleLead}</span>{' '}
            <span className="text-brand">{ABOUT_CONTENT.titleAccent}</span>
          </h2>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-24 lg:self-start">
          <div className="mx-auto w-full max-w-sm lg:mr-0 lg:ml-auto lg:max-w-[23rem]">
            <div
              data-animate="about-portrait"
              className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-2 border-brand bg-surface"
            >
              <img
                src={portraitOriginal}
                alt={ABOUT_CONTENT.portraitAlt}
                data-animate="about-portrait-original"
                className="relative z-0 h-full w-full object-cover"
              />
              <img
                src={portraitStylized}
                alt={ABOUT_CONTENT.portraitAlt}
                data-animate="about-portrait-stylized"
                className="absolute inset-0 z-10 h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-brand/35 bg-surface px-4 py-3 font-sans text-xs font-medium text-ink/90">
              <span className="inline-flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <span>{ABOUT_CONTENT.portraitCaption}</span>
              </span>
              <span className="shrink-0 font-display text-base leading-none tracking-wider text-brand uppercase">
                {ABOUT_CONTENT.portraitBadge}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7 lg:col-start-1">
          {ABOUT_CONTENT.chapters.map((chapter) => (
            <article
              key={chapter.id}
              data-animate="about-paragraph"
              className="rounded-3xl border border-brand/35 bg-surface p-6 transition-colors duration-200 hover:border-brand/70 sm:p-7"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="font-display text-2xl leading-none tracking-wider text-brand sm:text-3xl">
                  {chapter.number}
                </span>
                <h3 className="font-display text-2xl leading-tight tracking-wide text-ink uppercase sm:text-3xl">
                  {chapter.title}
                </h3>
              </div>

              <p className="font-sans text-sm leading-relaxed text-ink/90 sm:text-base">
                {chapter.segments.map((segment, index) =>
                  segment.bold ? (
                    <strong key={index} className="font-bold text-ink">
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={index}>{segment.text}</span>
                  ),
                )}
              </p>

              {chapter.tags.length > 0 && (
                <ul
                  aria-label={`Destaques de ${chapter.title}`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {chapter.tags.map((tag) => (
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
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
