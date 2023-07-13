"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { staggeredContainer } from "../divVariants";

export function StaggeredContainer({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={staggeredContainer}
      whileInView="show"
      initial="hidden"
      exit="exit"
      viewport={{ once: false }}
    >
      {" "}
      {children}
    </motion.div>
  );
}
