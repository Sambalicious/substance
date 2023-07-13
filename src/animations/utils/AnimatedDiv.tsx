"use client";

import { slideInVariant } from "@/animations/divVariants";
import { motion } from "framer-motion";

export function AnimatedDiv() {
  return (
    <motion.div variants={slideInVariant} initial="initial" animate="animate">
      <div>Hello </div>
    </motion.div>
  );
}
