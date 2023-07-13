"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { staggerVariant } from "../divVariants";

export function Stagger({ children }: PropsWithChildren) {
  return (
    <motion.div variants={staggerVariant} animate="animate">
      {children}{" "}
    </motion.div>
  );
}
