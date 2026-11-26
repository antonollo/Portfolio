import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin);

export { gsap, ScrollTrigger, useGSAP };

export interface HorizontalLoop {
  next: (vars?: gsap.TweenVars) => gsap.core.Tween | null;

  previous: (vars?: gsap.TweenVars) => gsap.core.Tween | null;

  toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween | null;

  current: () => number;

  destroy: () => void;
}

export function horizontalLoop(
  items: HTMLElement[],
  config: { pixelsPerSecond?: number } = {},
): HorizontalLoop {
  const length = items.length;
  const pixelsPerSecond = config.pixelsPerSecond ?? 100;
  const snap = gsap.utils.snap(1);
  const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });

  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  const spaceBefore: number[] = [];
  let startX = items[0].offsetLeft;
  let totalWidth = 0;
  let curIndex = 0;
  let timeWrap = gsap.utils.wrap(0, 1);

  const getTotalWidth = () => {
    const last = items[length - 1];
    return (
      last.offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      spaceBefore[0] +
      last.offsetWidth * Number(gsap.getProperty(last, "scaleX"))
    );
  };

  const populateWidths = () => {
    const container = items[0].parentElement as HTMLElement;
    let previousRect = container.getBoundingClientRect();
    items.forEach((el, i) => {
      widths[i] = parseFloat(String(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(String(gsap.getProperty(el, "x", "px"))) / widths[i]) *
          100 +
          Number(gsap.getProperty(el, "xPercent")),
      );
      const rect = el.getBoundingClientRect();
      spaceBefore[i] = rect.left - (i ? previousRect.right : previousRect.left);
      previousRect = rect;
    });
    gsap.set(items, { xPercent: (i: number) => xPercents[i] });
    startX = items[0].offsetLeft;
    totalWidth = getTotalWidth();
  };

  const populateTimeline = () => {
    tl.clear();
    items.forEach((item, i) => {
      const curX = (xPercents[i] / 100) * widths[i];
      const distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
      const distanceToLoop =
        distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"));

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
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
            ),
          },
          {
            xPercent: xPercents[i],
            duration: (totalWidth - distanceToLoop) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add(`label${i}`, distanceToStart / pixelsPerSecond);

      times[i] = distanceToStart / pixelsPerSecond;
    });
    timeWrap = gsap.utils.wrap(0, tl.duration());
  };

  const toIndex = (index: number, vars: gsap.TweenVars = {}) => {
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length;
    }
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if (time > tl.time() !== index > curIndex && index !== curIndex) {
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    const tweenVars: gsap.TweenVars = { ...vars, overwrite: true };
    if (time < 0 || time > tl.duration()) {
      tweenVars.modifiers = { time: timeWrap };
    }
    curIndex = newIndex;

    if (tweenVars.duration === 0) {
      tl.time(timeWrap(time));
      return null;
    }
    return tl.tweenTo(time, tweenVars);
  };

  const onResize = () => {
    tl.progress(0, true);
    populateWidths();
    populateTimeline();
    tl.time(times[curIndex], true);
  };

  gsap.set(items, { x: 0 });
  populateWidths();
  populateTimeline();
  tl.progress(1, true).progress(0, true);
  window.addEventListener("resize", onResize);

  return {
    next: (vars) => toIndex(curIndex + 1, vars),
    previous: (vars) => toIndex(curIndex - 1, vars),
    toIndex,
    current: () => curIndex,
    destroy: () => window.removeEventListener("resize", onResize),
  };
}
