import spikesSvg from '../../assets/spikes.svg'

export type SectionDividerVariant = 'surface-to-brand' | 'brand-to-surface'

interface SectionDividerProps {
  variant: SectionDividerVariant
}

export function SectionDivider({ variant }: SectionDividerProps) {
  const isInverted = variant === 'brand-to-surface'

  return (
    <div
      aria-hidden="true"
      className="relative z-10 -mt-px -mb-px w-full overflow-hidden bg-surface leading-none pointer-events-none select-none"
    >
      <img
        src={spikesSvg}
        alt=""
        draggable={false}
        className={`block h-auto w-full select-none ${isInverted ? 'rotate-180' : ''}`}
      />
    </div>
  )
}
