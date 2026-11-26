import { useMemo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'

/**
 * [M1] Ondas luminosas procedurais da Hero.
 *
 * Arquitetura:
 * - Cada "fita de seda" é um <svg> PRÓPRIO, absolutamente posicionado.
 *   Animar `transform` no elemento <svg> raiz permite ao navegador promovê-lo
 *   a uma camada da GPU (compositor). Animar <g> internos forçaria
 *   re-rasterizar o SVG inteiro a cada frame.
 * - Este componente cuida apenas do loop AMBIENTE (vida própria das ondas).
 *   O preloader (zoom/opacidade do container `hero-waves`) é coreografado
 *   em `usePortfolioMotion`, pois envolve a Navbar e o conteúdo da Hero.
 */

type Point = readonly [number, number]

/** Uma curva cúbica: início, controle 1, controle 2, fim. */
type Curve = readonly [Point, Point, Point, Point]

interface WaveLayerConfig {
  id: string
  /** Borda "superior" e "inferior" da fita. */
  edges: readonly [Curve, Curve]
  /** Quantidade de fios finos interpolados entre as bordas. */
  strands: number
  /** Opacidade máxima dos fios. */
  strandOpacity: number
  /** Opacidade do preenchimento com glow. */
  glowOpacity: number
  /** Parâmetros do loop ambiente (yoyo). */
  drift: { y: number; rotation: number; scaleY: number; duration: number }
}

const VIEWBOX = { width: 1600, height: 1000 }
const BRAND = '#CC2936'
const BRAND_HIGHLIGHT = '#FF5A66'

const WAVE_LAYERS: readonly WaveLayerConfig[] = [
  {
    id: 'sweep-low',
    edges: [
      [[300, 920], [780, 700], [1180, 900], [1700, 640]],
      [[480, 1080], [900, 860], [1300, 1010], [1700, 830]],
    ],
    strands: 16,
    strandOpacity: 0.45,
    glowOpacity: 0.18,
    drift: { y: 26, rotation: -2, scaleY: 1.08, duration: 11 },
  },
  {
    id: 'cross-mid',
    edges: [
      [[380, 400], [820, 520], [1120, 300], [1700, 110]],
      [[440, 520], [860, 650], [1170, 430], [1700, 330]],
    ],
    strands: 18,
    strandOpacity: 0.55,
    glowOpacity: 0.22,
    drift: { y: -22, rotation: 2.5, scaleY: 1.06, duration: 9 },
  },
  {
    id: 'rise-main',
    edges: [
      [[680, 1060], [1000, 900], [1150, 500], [1700, 230]],
      [[820, 1110], [1160, 960], [1260, 660], [1700, 440]],
    ],
    strands: 22,
    strandOpacity: 0.85,
    glowOpacity: 0.32,
    drift: { y: 18, rotation: -1.5, scaleY: 1.1, duration: 8 },
  },
  {
    id: 'top-faint',
    edges: [
      [[880, -60], [1100, 200], [1320, 130], [1700, -20]],
      [[940, 90], [1200, 310], [1420, 260], [1700, 170]],
    ],
    strands: 12,
    strandOpacity: 0.35,
    glowOpacity: 0.14,
    drift: { y: -16, rotation: 1.5, scaleY: 1.05, duration: 12 },
  },
]

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const lerpPoint = (a: Point, b: Point, t: number): Point => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
]
const toPath = ([p0, c1, c2, p1]: Curve) =>
  `M${p0[0].toFixed(1)} ${p0[1].toFixed(1)} C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p1[0].toFixed(1)} ${p1[1].toFixed(1)}`

/**
 * Gera os fios de uma fita. O 2º ponto de controle é interpolado no sentido
 * INVERSO (B→A) — isso faz os fios se cruzarem no meio, criando a "torção"
 * de seda vista em `01_Hero_clean.png`.
 */
function buildStrands([edgeA, edgeB]: readonly [Curve, Curve], count: number) {
  return Array.from({ length: count }, (_, index) => {
    const t = count === 1 ? 0 : index / (count - 1)
    const curve: Curve = [
      lerpPoint(edgeA[0], edgeB[0], t),
      lerpPoint(edgeA[1], edgeB[1], t),
      lerpPoint(edgeB[2], edgeA[2], t),
      lerpPoint(edgeA[3], edgeB[3], t),
    ]
    // Fios do centro mais brilhantes que os das bordas.
    const weight = Math.sin(Math.PI * t)
    return { d: toPath(curve), opacity: 0.25 + weight * 0.75 }
  })
}

/** Área fechada entre as duas bordas (borda A → borda B invertida). */
function buildGlowPath([edgeA, edgeB]: readonly [Curve, Curve]) {
  const [b0, b1, b2, b3] = edgeB
  return `${toPath(edgeA)} L${b3[0]} ${b3[1]} C${b2[0]} ${b2[1]} ${b1[0]} ${b1[1]} ${b0[0]} ${b0[1]} Z`
}

export function HeroWaves() {
  const rootRef = useRef<HTMLDivElement>(null)

  // Geometria é pura (não depende de estado) → calculada uma única vez.
  const layers = useMemo(
    () =>
      WAVE_LAYERS.map((layer) => ({
        ...layer,
        strandPaths: buildStrands(layer.edges, layer.strands),
        glowPath: buildGlowPath(layer.edges),
      })),
    [],
  )

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Com `prefers-reduced-motion: reduce` nada é registrado: ondas estáticas.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<SVGSVGElement>('[data-wave-layer]').forEach((el, index) => {
          const { drift } = WAVE_LAYERS[index]
          gsap.to(el, {
            y: drift.y,
            rotation: drift.rotation,
            scaleY: drift.scaleY,
            transformOrigin: '100% 50%',
            duration: drift.duration,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            // Começa cada camada num ponto diferente do ciclo (dessincroniza).
            delay: -drift.duration * (index / WAVE_LAYERS.length),
          })
        })
      })
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="absolute inset-0">
      {layers.map((layer) => (
        <svg
          key={layer.id}
          data-wave-layer={layer.id}
          viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          focusable="false"
          className="absolute inset-0 h-full w-full mix-blend-screen will-change-transform"
        >
          <defs>
            <linearGradient
              id={`wave-stroke-${layer.id}`}
              gradientUnits="userSpaceOnUse"
              x1="250"
              y1="0"
              x2="1650"
              y2="0"
            >
              <stop offset="0" stopColor={BRAND} stopOpacity="0" />
              <stop offset="0.35" stopColor={BRAND} stopOpacity="0.55" />
              <stop offset="0.7" stopColor={BRAND_HIGHLIGHT} stopOpacity="1" />
              <stop offset="1" stopColor={BRAND} stopOpacity="0.8" />
            </linearGradient>
            <linearGradient
              id={`wave-glow-${layer.id}`}
              gradientUnits="userSpaceOnUse"
              x1="250"
              y1="0"
              x2="1650"
              y2="0"
            >
              <stop offset="0" stopColor={BRAND} stopOpacity="0" />
              <stop offset="0.6" stopColor={BRAND} stopOpacity="0.9" />
              <stop offset="1" stopColor={BRAND_HIGHLIGHT} stopOpacity="0.6" />
            </linearGradient>
            <filter
              id={`wave-blur-${layer.id}`}
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="28" />
            </filter>
          </defs>

          <path
            d={layer.glowPath}
            fill={`url(#wave-glow-${layer.id})`}
            opacity={layer.glowOpacity}
            filter={`url(#wave-blur-${layer.id})`}
          />

          <g
            stroke={`url(#wave-stroke-${layer.id})`}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity={layer.strandOpacity}
          >
            {layer.strandPaths.map((strand, index) => (
              <path key={index} d={strand.d} strokeOpacity={strand.opacity} />
            ))}
          </g>
        </svg>
      ))}
    </div>
  )
}
