import React from 'react';
import { motion } from 'framer-motion';

export default function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
