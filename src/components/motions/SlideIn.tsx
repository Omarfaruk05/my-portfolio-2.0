"use client";
import React from "react";
import { motion } from "framer-motion";

type Direction = "left" | "right" | "top" | "bottom";

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const SlideIn: React.FC<SlideInProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "bottom",
}) => {
  const getVariants = () => {
    const distance = 100;
    const from = {
      left: { x: -distance, opacity: 0 },
      right: { x: distance, opacity: 0 },
      top: { y: -distance, opacity: 0 },
      bottom: { y: distance, opacity: 0 },
    };

    const to = {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay,
      },
    };

    return {
      offscreen: from[direction],
      onscreen: to,
    };
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      initial="offscreen"
      animate="onscreen"
      exit="offscreen"
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
