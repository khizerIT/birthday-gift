import { motion } from "motion/react";
import { ViewProps } from "../types";

export default function PageGiftGate({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center gap-10"
    >
      <div className="relative group cursor-pointer" onClick={() => onNavigate('hub')}>
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[180px] md:text-[240px] select-none"
        >
          🎁
        </motion.div>
        
        {/* Floating tulips */}
        <motion.div animate={{ y: [-10, 10, -10] }} className="absolute -left-12 bottom-12 text-6xl">🌷</motion.div>
        <motion.div animate={{ y: [10, -10, 10] }} className="absolute -right-12 bottom-12 text-6xl">🌷</motion.div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-red-400/20 blur-3xl -z-10" />
      </div>

      <div className="space-y-4">
        <h2 className="font-playful text-3xl md:text-4xl text-gray-800">
          Here's a gift box for you
        </h2>
        <motion.p 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-pink-600 font-bold tracking-[0.3em] uppercase text-sm"
        >
          CLICK BOX TO OPEN
        </motion.p>
      </div>
    </motion.div>
  );
}
