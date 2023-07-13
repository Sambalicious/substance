"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { fadeInUp } from "../textVariant";

export function FadeIn({ children }: PropsWithChildren) {
  return (
    <div>
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        {" "}
        {children}{" "}
      </motion.div>
    </div>
  );
}
