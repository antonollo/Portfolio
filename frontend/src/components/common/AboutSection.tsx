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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-14 lg:px-12">
        <div className="lg:col-span-5">
          <div
            data-animate="about-portrait"
            className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border-2 border-brand bg-surface lg:mx-0"
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
        </div>

        <div className="lg:col-span-7">
          <h2 className="mb-6 font-display text-5xl tracking-wide text-ink uppercase sm:text-6xl lg:text-7xl">
            {ABOUT_CONTENT.title}
          </h2>

          <div className="space-y-4">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => {
              const paragraphClassName =
                paragraph.variant === 'callout'
                  ? 'py-1 text-right font-sans text-lg font-bold text-ink sm:text-2xl'
                  : paragraph.variant === 'placeholder'
                    ? 'font-sans text-sm leading-relaxed text-ink/80 sm:text-base'
                    : 'font-sans text-sm leading-relaxed text-ink/90 sm:text-base'

              return (
                <p
                  key={paragraph.id}
                  data-animate="about-paragraph"
                  className={paragraphClassName}
                >
                  {paragraph.segments.map((segment, index) =>
                    segment.bold ? (
                      <strong key={index} className="font-bold text-ink">
                        {segment.text}
                      </strong>
                    ) : (
                      <span key={index}>{segment.text}</span>
                    ),
                  )}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
