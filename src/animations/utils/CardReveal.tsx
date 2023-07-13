"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { itemReveal } from "../divVariants";

export function CardReveal({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={cn(className)}
      variants={itemReveal}
      initial="hidden"
      animate="visible"
    >
      {children}{" "}
    </motion.div>
  );
}
