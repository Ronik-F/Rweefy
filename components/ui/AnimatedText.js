"use client";

import { motion } from "framer-motion";
import { staggerContainer, wordSlideUp } from "@/lib/motionVariants";

export default function AnimatedText({
  text,
  className = "",
  wordClassName = "",
  stagger = 0.12,
  delay = 0.2,
  as = "h1",
}) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      animate="show"
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: "0.25em" }}
        >
          <motion.span
            variants={wordSlideUp}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
