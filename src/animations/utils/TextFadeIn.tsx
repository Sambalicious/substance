"use client";

import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { slowTextReveal, textFadeIn, textFadeStyle } from "../textVariant";

export function TextFadeInUp({ children }: PropsWithChildren) {
  return (
    <motion.p variants={slowTextReveal} initial="initial" animate="animate">
      {children}
    </motion.p>
  );
}
export function TextFadeIn({ children }: PropsWithChildren) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.p
      ref={ref}
      variants={textFadeStyle}
      initial="initial"
      animate={inView ? "animate" : ""}
    >
      {children}
    </motion.p>
  );
}

export function TextFadeInUpWithDelay({
  children,
  delay = 1.8,
  duration = 0.5,
  className,
}: PropsWithChildren<{
  delay?: number;
  duration?: number;
  className?: string;
}>) {
  return (
    <motion.p
      className={className}
      variants={textFadeIn}
      initial="initial"
      animate="animate"
      transition={{ delay, duration }}
    >
      {children}
    </motion.p>
  );
}
