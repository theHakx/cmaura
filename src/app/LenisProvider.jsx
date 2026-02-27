import { useEffect, useRef } from "react";
import Lenis from "lenis";

function usePrefersReducedMotion() {
  const isClient = typeof window !== "undefined";
  const [prefersReduced, setPrefersReduced] = useStateSafe(false);

  useEffect(() => {
    if (!isClient) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onChange = () => setPrefersReduced(media.matches);
    onChange();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, [isClient]);

  return prefersReduced;
}

function useStateSafe(initialValue) {
  const ref = useRef(initialValue);
  const set = (v) => {
    ref.current = typeof v === "function" ? v(ref.current) : v;
  };
  return [ref.current, set];
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
