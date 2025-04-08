import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode; // Typisierung für children
}

const Reveal: React.FC<RevealProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Animation nur beim ersten Mal
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;