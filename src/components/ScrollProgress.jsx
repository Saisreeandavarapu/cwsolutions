import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#2567A8] origin-left z-[100] pointer-events-none shadow-[0_0_8px_rgba(37,103,168,0.4)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
