/**
 * Ponto ÚNICO de entrada do GSAP no projeto.
 *
 * Por que centralizar?
 * - `gsap.registerPlugin` deve rodar uma única vez; módulos ES são avaliados
 *   uma única vez, então qualquer arquivo que importe daqui recebe o GSAP já
 *   com os plugins registrados.
 * - Nenhum outro arquivo deve importar diretamente de `gsap/*` ou `@gsap/react`.
 */
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin)

export { gsap, ScrollTrigger, useGSAP }

/* -------------------------------------------------------------------------- */
/* horizontalLoop — carrossel infinito ([M3])                                 */
/* -------------------------------------------------------------------------- */

export interface HorizontalLoop {
  /** Avança 1 item. Retorna o tween (ou `null` quando `duration: 0`). */
  next: (vars?: gsap.TweenVars) => gsap.core.Tween | null
  /** Volta 1 item. Retorna o tween (ou `null` quando `duration: 0`). */
  previous: (vars?: gsap.TweenVars) => gsap.core.Tween | null
  /** Vai para um índice qualquer pelo caminho mais curto. */
  toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween | null
  /** Índice (0-based) do item atualmente alinhado à esquerda. */
  current: () => number
  /** Remove o listener de resize (os tweens são revertidos pelo contexto GSAP). */
  destroy: () => void
}

/**
 * Versão tipada e enxuta do helper oficial `horizontalLoop` da GSAP.
 *
 * Ideia central: em vez de mover o trilho inteiro (o que exigiria clonar
 * cards para não "acabar"), cada card ganha sua própria animação de
 * `xPercent`. Quando um card sai pela esquerda, ele é reposicionado
 * instantaneamente depois do último — como uma esteira circular.
 * Tudo isso vive numa timeline PAUSADA; navegar = tweenar o `time` dela.
 *
 * Requisito: largura total dos itens ≥ área visível + 1 item
 * (4 cards com 3 visíveis no desktop atende).
 */
export function horizontalLoop(
  items: HTMLElement[],
  config: { pixelsPerSecond?: number } = {},
): HorizontalLoop {
  const length = items.length
  const pixelsPerSecond = config.pixelsPerSecond ?? 100
  const snap = gsap.utils.snap(1)
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })

  const times: number[] = []
  const widths: number[] = []
  const xPercents: number[] = []
  const spaceBefore: number[] = []
  let startX = items[0].offsetLeft
  let totalWidth = 0
  let curIndex = 0
  let timeWrap = gsap.utils.wrap(0, 1)

  const getTotalWidth = () => {
    const last = items[length - 1]
    return (
      last.offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      spaceBefore[0] +
      last.offsetWidth * Number(gsap.getProperty(last, 'scaleX'))
    )
  }

  /** Mede larguras/espaçamentos reais do layout (responsivo do Tailwind). */
  const populateWidths = () => {
    const container = items[0].parentElement as HTMLElement
    let previousRect = container.getBoundingClientRect()
    items.forEach((el, i) => {
      widths[i] = parseFloat(String(gsap.getProperty(el, 'width', 'px')))
      xPercents[i] = snap(
        (parseFloat(String(gsap.getProperty(el, 'x', 'px'))) / widths[i]) * 100 +
          Number(gsap.getProperty(el, 'xPercent')),
      )
      const rect = el.getBoundingClientRect()
      spaceBefore[i] = rect.left - (i ? previousRect.right : previousRect.left)
      previousRect = rect
    })
    gsap.set(items, { xPercent: (i: number) => xPercents[i] })
    startX = items[0].offsetLeft
    totalWidth = getTotalWidth()
  }

  /** Monta, para cada card, "sair pela esquerda" + "reentrar pela direita". */
  const populateTimeline = () => {
    tl.clear()
    items.forEach((item, i) => {
      const curX = (xPercents[i] / 100) * widths[i]
      const distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0]
      const distanceToLoop =
        distanceToStart + widths[i] * Number(gsap.getProperty(item, 'scaleX'))

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
          {
            xPercent: xPercents[i],
            duration: (totalWidth - distanceToLoop) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add(`label${i}`, distanceToStart / pixelsPerSecond)

      times[i] = distanceToStart / pixelsPerSecond
    })
    timeWrap = gsap.utils.wrap(0, tl.duration())
  }

  const toIndex = (index: number, vars: gsap.TweenVars = {}) => {
    // Caminho mais curto: de 3 para 0 é "+1", não "-3".
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length
    }
    const newIndex = gsap.utils.wrap(0, length, index)
    let time = times[newIndex]

    // Se o destino está "do outro lado" da emenda, anda uma volta completa
    // e usa `modifiers` para embrulhar o tempo (sem salto visual).
    if (time > tl.time() !== index > curIndex && index !== curIndex) {
      time += tl.duration() * (index > curIndex ? 1 : -1)
    }
    const tweenVars: gsap.TweenVars = { ...vars, overwrite: true }
    if (time < 0 || time > tl.duration()) {
      tweenVars.modifiers = { time: timeWrap }
    }
    curIndex = newIndex

    if (tweenVars.duration === 0) {
      tl.time(timeWrap(time))
      return null
    }
    return tl.tweenTo(time, tweenVars)
  }

  const onResize = () => {
    tl.progress(0, true)
    populateWidths()
    populateTimeline()
    tl.time(times[curIndex], true)
  }

  gsap.set(items, { x: 0 })
  populateWidths()
  populateTimeline()
  tl.progress(1, true).progress(0, true) // pré-renderiza para evitar "flash"
  window.addEventListener('resize', onResize)

  return {
    next: (vars) => toIndex(curIndex + 1, vars),
    previous: (vars) => toIndex(curIndex - 1, vars),
    toIndex,
    current: () => curIndex,
    destroy: () => window.removeEventListener('resize', onResize),
  }
}
