"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { pageTransition } from "../divVariants";

interface Props {
  className?: string;
}

export function PageWrapper({ children, className }: PropsWithChildren<Props>) {
  return (
    <motion.div
      className={cn(className)}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      {children}
    </motion.div>
  );
}
