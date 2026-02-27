import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ParallaxMedia({
  src,
  alt,
  className = "",
  loading = "lazy",
  strength = 16,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  if (shouldReduceMotion) {
    return (
      <img
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        loading={loading}
      />
    );
  }

  return (
    <motion.img
      ref={ref}
      alt={alt}
      className={className}
      src={src}
      loading={loading}
      style={{ y }}
    />
  );
}
