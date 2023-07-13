"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { slowTextReveal, textFadeIn } from "../textVariant";

export function TextFadeInUp({ children }: PropsWithChildren) {
  return (
    <motion.p variants={slowTextReveal} initial="initial" animate="animate">
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
