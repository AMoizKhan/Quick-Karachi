"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileCardReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    let observer = null;

    const clearActive = () => {
      document
        .querySelectorAll("[data-reveal-card].in-view")
        .forEach((el) => el.classList.remove("in-view"));
    };

    const setup = () => {
      if (observer) observer.disconnect();
      clearActive();

      if (!mq.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("in-view", entry.isIntersecting);
          });
        },
        { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );

      document
        .querySelectorAll("[data-reveal-card]")
        .forEach((card) => observer.observe(card));
    };

    // Run after the new page's cards have rendered.
    const raf = requestAnimationFrame(setup);

    const handleChange = () => setup();
    mq.addEventListener("change", handleChange);

    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", handleChange);
      if (observer) observer.disconnect();
      clearActive();
    };
  }, [pathname]);

  return null;
}
