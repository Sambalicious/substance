"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { hoverEffect } from "../divVariants";

export function AnimateHover({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={cn(className)}
      variants={hoverEffect}
      whileTap="whileTap"
      whileHover="whileHover"
    >
      {children}
    </motion.div>
  );
}
