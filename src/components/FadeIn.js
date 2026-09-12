'use client';

import { motion } from 'framer-motion';

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  fullWidth = false,
  className = ''
}) {
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
    none: 0,
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === 'up' || direction === 'down' ? directionOffset[direction] : 0,
        x: direction === 'left' || direction === 'right' ? directionOffset[direction] : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ width: fullWidth ? '100%' : 'auto' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
