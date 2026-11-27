import type { RefObject } from 'react'
import Lenis from 'lenis'
import { gsap, horizontalLoop, ScrollTrigger, useGSAP } from '../lib/gsap'

/**
 * Orquestrador de motion da Landing Page ([M1]–[M6] + Lenis + âncoras).
 *
 * Leitura recomendada (de cima para baixo):
 * 1. `usePortfolioMotion` — o "índice": decide QUAIS animações rodam em cada
 *    cenário de acessibilidade via `gsap.matchMedia()`.
 * 2. Funções `setupX()` — uma por responsabilidade, cada uma auto-contida.
 *
 * Regra de ouro: todo estado inicial "escondido" (`opacity: 0`, `y: 24`...) é
 * aplicado aqui, em runtime, dentro do branch `no-preference`. Quando o
 * branch é revertido (unmount, Strict Mode, troca de preferência), o GSAP
 * devolve cada elemento ao estado original — visível.
 */

const PRELOAD_STORAGE_KEY = 'portfolio_preloaded'
const NAVBAR_FALLBACK_HEIGHT = 64
const TYPING_CURSOR_CLASS = 'is-typing'

const MEDIA = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
} as const

type Cleanup = () => void

/** Envolve handlers para que tweens criados DEPOIS do setup também sejam revertidos. */
type Safe = <T extends (...args: never[]) => unknown>(fn: T) => T

interface ScrollLock {
  readonly isLocked: boolean
  lock: () => void
  unlock: () => void
}

interface MotionEnv {
  root: HTMLElement
  lenis: Lenis | null
  scrollLock: ScrollLock
  motion: boolean
  safe: Safe
  cleanups: Cleanup[]
}

const sel = (target: string) => `[data-animate="${target}"]`

/* ========================================================================== */
/* Hook                                                                       */
/* ========================================================================== */

export function usePortfolioMotion(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current
      if (!root) return

      const mm = gsap.matchMedia()

      // Cenário principal: muda apenas com a preferência de movimento.
      mm.add(MEDIA, (context, contextSafe) => {
        const { motion } = context.conditions as Record<keyof typeof MEDIA, boolean>
        const cleanups: Cleanup[] = []
        const lenis = motion ? setupLenis(cleanups) : null
        const env: MotionEnv = {
          root,
          lenis,
          scrollLock: createScrollLock(lenis),
          motion,
          safe: (fn) => (contextSafe ? (contextSafe(fn) as typeof fn) : fn),
          cleanups,
        }

        setupAnchorNavigation(env) //   smooth scroll das âncoras
        setupCarousel(env) //            [M3] funciona nos dois cenários

        if (motion) {
          setupHeroIntro(env) //         [M1] + [M2]
          setupAboutParagraphs(env) //   [M4] parágrafos
          setupMarquee(env) //           [M5]
          setupFooterTyping(env) //      [M6]
        } else {
          setupHeroStatic(env) //        ondas paradas no estado idle
        }

        // LIFO: desfaz na ordem inversa da criação (como uma pilha).
        return () => cleanups.splice(0).reverse().forEach((cleanup) => cleanup())
      })

      // [M4] retrato: depende TAMBÉM do breakpoint. Fica num `add` separado
      // para que redimensionar a janela não reinicie o preloader/Lenis.
      mm.add(`(min-width: 1024px) and ${MEDIA.motion}`, () =>
        setupAboutPortrait(root, 'desktop'),
      )
      mm.add(`(max-width: 1023.98px) and ${MEDIA.motion}`, () =>
        setupAboutPortrait(root, 'mobile'),
      )

      const stopLayoutRefresh = setupLayoutRefresh()
      return () => {
        stopLayoutRefresh()
        mm.revert()
      }
    },
    { scope },
  )
}

/* ========================================================================== */
/* Infra: Lenis, trava de scroll, recálculo de layout                         */
/* ========================================================================== */

/**
 * Lenis + GSAP num ÚNICO relógio: o `gsap.ticker` dirige o Lenis e cada
 * scroll do Lenis avisa o ScrollTrigger. Sem isso haveria dois loops de
 * `requestAnimationFrame` e o ScrollTrigger leria posições atrasadas.
 */
function setupLenis(cleanups: Cleanup[]) {
  const lenis = new Lenis()
  const offScroll = lenis.on('scroll', () => ScrollTrigger.update())
  const tick = (time: number) => lenis.raf(time * 1000) // ticker usa s, Lenis usa ms

  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  cleanups.push(() => {
    offScroll()
    gsap.ticker.remove(tick) // mesma referência de função usada no add
    gsap.ticker.lagSmoothing(500, 33) // valores padrão do GSAP
    lenis.destroy()
  })
  return lenis
}

/**
 * Trava `html` E `body`: como `globals.css` aplica `overflow-x: hidden` no
 * `html`, o overflow do `body` NÃO é propagado para a viewport — travar só o
 * `body` não impediria o scroll neste projeto.
 */
function createScrollLock(lenis: Lenis | null): ScrollLock {
  let locked = false
  return {
    get isLocked() {
      return locked
    },
    lock() {
      locked = true
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      lenis?.stop()
    },
    unlock() {
      locked = false
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      lenis?.start()
    },
  }
}

/** Fontes do Google e imagens mudam alturas → recalcula os ScrollTriggers. */
function setupLayoutRefresh(): Cleanup {
  let active = true
  const refresh = () => {
    if (active) ScrollTrigger.refresh()
  }

  document.fonts.ready.then(refresh)
  if (document.readyState !== 'complete') {
    window.addEventListener('load', refresh, { once: true })
  }

  return () => {
    active = false
    window.removeEventListener('load', refresh)
  }
}

/* ========================================================================== */
/* Navegação por âncoras (Navbar + CTAs da Hero)                              */
/* ========================================================================== */

function setupAnchorNavigation({ root, lenis, scrollLock, motion, safe, cleanups }: MotionEnv) {
  // Mede o <nav> (h-16) e não o <header>: com o menu mobile aberto no
  // instante do clique, o header está temporariamente mais alto.
  const getOffsetY = () =>
    root.querySelector<HTMLElement>('header nav')?.offsetHeight ?? NAVBAR_FALLBACK_HEIGHT

  const resumeLenis = () => {
    if (!scrollLock.isLocked) lenis?.start()
  }

  // Um único listener delegado cobre todos os links internos do escopo.
  const onClick = safe((event: MouseEvent) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return
    }

    const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]')
    const hash = link?.getAttribute('href') ?? ''
    if (!link || hash.length < 2) return

    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!target) return

    event.preventDefault()
    if (scrollLock.isLocked) return // preloader em andamento

    // Pausa a inércia do Lenis para ele não "brigar" com o ScrollToPlugin.
    lenis?.stop()
    gsap.to(window, {
      duration: motion ? 0.9 : 0,
      ease: 'power3.inOut',
      overwrite: 'auto',
      scrollTo: { y: target, offsetY: getOffsetY() },
      onComplete: resumeLenis,
      onInterrupt: resumeLenis,
    })
  })

  root.addEventListener('click', onClick)
  cleanups.push(() => root.removeEventListener('click', onClick))
}

/* ========================================================================== */
/* [M1] Preloader das ondas + [M2] entrada da Navbar/Hero                     */
/* ========================================================================== */

function readPreloaded() {
  try {
    return sessionStorage.getItem(PRELOAD_STORAGE_KEY) === 'true'
  } catch {
    return false // storage bloqueado (modo privado restrito)
  }
}

function writePreloaded() {
  try {
    sessionStorage.setItem(PRELOAD_STORAGE_KEY, 'true')
  } catch {
    /* sem persistência: o preloader apenas roda de novo */
  }
}

function setupHeroIntro({ root, scrollLock, cleanups }: MotionEnv) {
  const waves = root.querySelector<HTMLElement>(sel('hero-waves'))
  const navbar = root.querySelector<HTMLElement>('header')
  const heroItems = gsap.utils.toArray<HTMLElement>(`${sel('hero-content')} > *`, root)

  // Estado inicial do [M2] (aplicado antes do primeiro paint pelo useGSAP).
  if (navbar) gsap.set(navbar, { y: -20, opacity: 0 })
  gsap.set(heroItems, { y: 24, opacity: 0 })

  const buildEntrance = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'power3.out' } })
    if (navbar) tl.to(navbar, { y: 0, opacity: 1 }, 0)
    tl.to(heroItems, { y: 0, opacity: 1, stagger: 0.08 }, 0.1)
    return tl
  }

  // Sessão já viu a intro, ou a página abriu fora do topo (ex.: link com
  // #contatos): nunca prender o usuário — ondas direto no idle + [M2].
  if (!waves || readPreloaded() || window.scrollY > 0) {
    if (waves) gsap.set(waves, { scale: 1, opacity: 0.65, transformOrigin: '100% 50%' })
    buildEntrance()
    return
  }

  scrollLock.lock()
  cleanups.push(() => scrollLock.unlock()) // salvaguarda: reload/unmount no meio

  const finishPreload = () => {
    scrollLock.unlock()
    writePreloaded()
    ScrollTrigger.refresh()
  }

  // Preload: ondas em foco (zoom 1.15 ancorado à direita, UI oculta).
  gsap.set(waves, { scale: 1.15, opacity: 1, transformOrigin: '100% 50%' })

  gsap
    .timeline()
    .addLabel('transition', 1) //                                   hold ~1.0s
    .to(waves, { scale: 1, opacity: 0.65, duration: 1, ease: 'power3.inOut' }, 'transition')
    .add(buildEntrance(), 'transition+=0.5') //                      [M2] aos 50%
    .call(finishPreload, undefined, 'transition+=1') //              fim da transição
}

function setupHeroStatic({ root }: MotionEnv) {
  const waves = root.querySelector<HTMLElement>(sel('hero-waves'))
  if (waves) gsap.set(waves, { opacity: 0.65 })
}

/* ========================================================================== */
/* [M3] Carrossel infinito de Case Studies                                    */
/* ========================================================================== */

const pad = (value: number) => String(value).padStart(2, '0')

function setupCarousel({ root, motion, safe, cleanups }: MotionEnv) {
  const cards = gsap.utils.toArray<HTMLElement>(sel('carousel-card'), root)
  const prevButton = root.querySelector<HTMLButtonElement>(sel('carousel-prev'))
  const nextButton = root.querySelector<HTMLButtonElement>(sel('carousel-next'))
  const counter = root.querySelector<HTMLElement>('[data-carousel-counter]')
  if (cards.length < 2 || !prevButton || !nextButton) return

  const initialCounterText = counter?.textContent ?? ''
  const total = pad(cards.length)
  const loop = horizontalLoop(cards)
  let activeTween: gsap.core.Tween | null = null

  const go = safe((direction: 1 | -1) => {
    if (activeTween?.isActive()) return // trava contra cliques duplos

    // Em reduced-motion o carrossel continua funcional, só que instantâneo.
    const vars = { duration: motion ? 0.5 : 0, ease: 'power2.inOut' }
    activeTween = direction === 1 ? loop.next(vars) : loop.previous(vars)

    // Seguro: CaseStudiesSection não tem state/props, logo nunca re-renderiza.
    if (counter) counter.textContent = `${pad(loop.current() + 1)} / ${total}`
  })

  const onPrev = () => go(-1)
  const onNext = () => go(1)
  prevButton.addEventListener('click', onPrev)
  nextButton.addEventListener('click', onNext)

  cleanups.push(() => {
    prevButton.removeEventListener('click', onPrev)
    nextButton.removeEventListener('click', onNext)
    loop.destroy()
    if (counter) counter.textContent = initialCounterText
  })
}

/* ========================================================================== */
/* [M4] Sobre Mim: parágrafos + retrato com crossfade                         */
/* ========================================================================== */

function setupAboutParagraphs({ root, safe }: MotionEnv) {
  const paragraphs = gsap.utils.toArray<HTMLElement>(sel('about-paragraph'), root)
  if (!paragraphs.length) return

  gsap.set(paragraphs, { y: 20, opacity: 0 })

  // `batch` agrupa os parágrafos que entram juntos na tela e aplica stagger
  // só entre eles → revelação incremental conforme o scroll avança.
  ScrollTrigger.batch(paragraphs, {
    start: 'top 85%',
    once: true,
    onEnter: safe((batch: Element[]) =>
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        overwrite: true,
      }),
    ),
  })
}

/**
 * Timeline com `scrub: 1` e duração total 1.0 → posições = progresso do scroll.
 * Sincronizada com os 4 capítulos enquanto o retrato permanece `sticky` no desktop:
 * - 0.00 -> 0.18: retrato entra em `antonollo_vermelho.jpg` (`opacity: 0 -> 1, scale: 0.96 -> 1`) no Cap. 01
 * - 0.26 -> 0.44: crossfade de ida (`stylized` `opacity: 1 -> 0`) na transição para o Cap. 02
 * - 0.44 -> 0.68: permanência em `antonollo_original.png` durante a leitura dos Cap. 02 e 03
 * - 0.68 -> 0.88: crossfade de retorno (`stylized` `opacity: 0 -> 1`) na chegada ao Cap. 04
 * - 0.88 -> 1.00: margem estabilizada em `antonollo_vermelho.jpg` antes de deixar `#sobre-mim`
 *
 * No mobile (grid de 1 coluna), o retrato fica empilhado logo após o cabeçalho;
 * ancorar o trigger no próprio `portrait` (`top 90%` -> `top 12%`) garante que
 * todo o ciclo ocorra enquanto a foto está 100% visível abaixo da Navbar fixa.
 */
function setupAboutPortrait(root: HTMLElement, layout: 'desktop' | 'mobile') {
  const section = root.querySelector<HTMLElement>(sel('about-section'))
  const portrait = root.querySelector<HTMLElement>(sel('about-portrait'))
  const stylized = root.querySelector<HTMLElement>(sel('about-portrait-stylized'))
  if (!section || !portrait || !stylized) return

  const isDesktop = layout === 'desktop'

  gsap
    .timeline({
      defaults: { ease: 'none' },
      scrollTrigger: isDesktop
        ? { trigger: section, start: 'top 75%', end: 'bottom 85%', scrub: 1 }
        : { trigger: portrait, start: 'top 90%', end: 'top 12%', scrub: 1 },
    })
    .fromTo(
      portrait,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.18 },
      0,
    )
    .fromTo(
      stylized,
      { opacity: 1 },
      { opacity: 0, duration: 0.18 },
      0.26,
    )
    .fromTo(
      stylized,
      { opacity: 0 },
      { opacity: 1, duration: 0.2, immediateRender: false },
      0.68,
    )
    .to({}, { duration: 0.12 }, 0.88)
}

/* ========================================================================== */
/* [M5] Marquee de ferramentas                                                */
/* ========================================================================== */

function setupMarquee({ root, safe, cleanups }: MotionEnv) {
  const marquee = root.querySelector<HTMLElement>(sel('tools-marquee'))
  const track = root.querySelector<HTMLElement>(sel('marquee-track'))
  if (!marquee || !track) return

  // A UI renderiza 2 grupos idênticos: -50% = exatamente 1 grupo → emenda invisível.
  const loop = gsap.to(track, { xPercent: -50, duration: 22, ease: 'none', repeat: -1 })

  // Tweenar o `timeScale` (em vez de setá-lo) desacelera sem "freio brusco".
  const slowDown = safe(() =>
    gsap.to(loop, { timeScale: 0.2, duration: 0.6, ease: 'power2.out', overwrite: true }),
  )
  const speedUp = safe(() =>
    gsap.to(loop, { timeScale: 1, duration: 0.6, ease: 'power2.in', overwrite: true }),
  )

  marquee.addEventListener('mouseenter', slowDown)
  marquee.addEventListener('mouseleave', speedUp)
  cleanups.push(() => {
    marquee.removeEventListener('mouseenter', slowDown)
    marquee.removeEventListener('mouseleave', speedUp)
  })
}

/* ========================================================================== */
/* [M6] Footer typing                                                         */
/* ========================================================================== */

function setupFooterTyping({ root, cleanups }: MotionEnv) {
  const footer = root.querySelector<HTMLElement>('#contatos')
  // Copyright NÃO tem data-animate → nunca entra nesta lista.
  const items = gsap.utils.toArray<HTMLElement>(sel('footer-typing'), root)
  if (!footer || !items.length) return

  // Texto vazio colapsaria o <h2> (altura 0) e o footer "pularia". Travamos
  // o tamanho atual durante a digitação e liberamos no fim.
  const lockSizes = () =>
    items.forEach((el) => {
      if (el.tagName === 'H2') el.style.minHeight = `${el.offsetHeight}px`
      else el.style.minWidth = `${el.offsetWidth}px`
    })
  const releaseSizes = () =>
    items.forEach((el) => {
      el.style.minHeight = ''
      el.style.minWidth = ''
      el.classList.remove(TYPING_CURSOR_CLASS)
    })

  // `opacity` esconde SEM alterar o layout (o texto continua ocupando espaço).
  gsap.set(items, { opacity: 0 })

  const tl = gsap
    .timeline({ scrollTrigger: { trigger: footer, start: 'top 85%', once: true } })
    .call(lockSizes)
    .set(items, { text: '', opacity: 1, immediateRender: false })

  items.forEach((el) => {
    const finalText = el.dataset.text ?? el.textContent ?? ''
    const duration = gsap.utils.clamp(0.8, 1.2, finalText.length * 0.045)
    tl.call(() => el.classList.add(TYPING_CURSOR_CLASS))
      .to(el, { text: { value: finalText }, duration, ease: 'none' })
      .call(() => el.classList.remove(TYPING_CURSOR_CLASS))
  })

  tl.call(releaseSizes)
  cleanups.push(releaseSizes)
}
