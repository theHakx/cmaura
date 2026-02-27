import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import PageTransition from "../components/motion/PageTransition";

export default function AppShell() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="cm-bg relative min-h-screen text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="cm-bg-layer cm-huecycle"
          style={shouldReduceMotion ? undefined : { y: bgY }}
        />
        <div className="cm-grain" />
      </div>
      <div className="relative z-10">
        <motion.div
          className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-fuchsia-400/80 via-violet-300/70 to-indigo-400/80"
          style={shouldReduceMotion ? undefined : { scaleX: progressX }}
        />
        <Navbar />
        <main className="mx-auto max-w-6xl px-4">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}
