"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";
import { revealVariant, slideRevealVariant } from "../divVariants";

export function Reveal({ children }: PropsWithChildren) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("animate");
      slideControls.start("animate");
    }
  }, [inView, mainControls, slideControls]);

  return (
    <div className="relative" ref={ref}>
      <motion.div
        variants={revealVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}{" "}
      </motion.div>
      <motion.div
        variants={slideRevealVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="z-5 absolute bottom-2 left-0 right-0 top-2 bg-teal-900"
      />
    </div>
  );
}
