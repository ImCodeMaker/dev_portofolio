import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const motionSafe = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (motionSafe) {
  gsap.set("[data-animate]", { autoAlpha: 0, y: 28 });
  gsap.set("[data-animate='panel']", { autoAlpha: 0, y: 36, scale: 0.98 });
  gsap.set("[data-animate='line']", { scaleX: 0, transformOrigin: "left center" });

  gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element) => {
    const isPanel = element.dataset.animate === "panel";
    const isLine = element.dataset.animate === "line";

    gsap.to(element, {
      autoAlpha: 1,
      y: isLine ? 0 : 0,
      scale: isPanel ? 1 : undefined,
      scaleX: isLine ? 1 : undefined,
      duration: isPanel ? 0.9 : 0.72,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 82%",
        once: true,
      },
    });
  });
}
