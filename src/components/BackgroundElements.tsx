import { motion } from "motion/react";

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Rose Blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[100px] -left-[100px] w-[600px] h-[600px] bg-rose-soft rounded-full blur-[120px]"
      />
      
      {/* Bottom Right Orange Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[100px] -right-[100px] w-[700px] h-[700px] bg-orange-soft rounded-full blur-[150px]"
      />
      
      {/* Mid Right Pink Blob */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] -right-[100px] w-[500px] h-[500px] bg-pink-soft rounded-full blur-[100px] opacity-40"
      />
    </div>
  );
}
