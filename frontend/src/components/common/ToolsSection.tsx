import { TOOLS_LIST } from '../../lib/portfolio-data'
import { TechIcon } from './TechIcon'

export function ToolsSection() {
  return (
    <section id="ferramentas" className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-12 font-display text-5xl tracking-wide text-ink uppercase sm:text-6xl lg:text-7xl">
          FERRAMENTAS
        </h2>
      </div>

      <div data-animate="tools-marquee" className="w-full overflow-hidden py-4">
        <div data-animate="marquee-track" className="flex w-max items-center">
          {[0, 1].map((groupIndex) => (
            <ul
              key={groupIndex}
              aria-hidden={groupIndex === 1 ? true : undefined}
              className="flex shrink-0 items-center gap-6 pr-6"
            >
              {TOOLS_LIST.map((tool) => (
                <li
                  key={`${groupIndex}-${tool.id}`}
                  className="flex shrink-0 items-center gap-4 rounded-2xl border border-brand/40 bg-surface px-6 py-4 text-ink"
                >
                  <TechIcon
                    name={tool.icon}
                    label={groupIndex === 0 ? tool.name : undefined}
                    className={
                      tool.icon === 'scikit-learn' || tool.icon === 'n8n'
                        ? 'h-8 w-14 text-brand'
                        : 'h-8 w-8 text-brand'
                    }
                  />
                  <div className="flex flex-col">
                    <span className="font-display text-2xl leading-none tracking-wide text-ink uppercase">
                      {tool.name}
                    </span>
                    <span className="mt-1 font-sans text-xs font-medium text-ink/75">
                      {tool.category}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
