import { motion } from "motion/react";
import { ViewProps } from "../types";
import { ArrowRight } from "lucide-react";

export default function PageApology({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center gap-10 max-w-lg"
    >
      <motion.div 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-[120px] select-none"
      >
        😭
      </motion.div>
      
      <p className="font-handwritten text-3xl md:text-4xl text-gray-700 leading-tight">
        "I AM SMRRY, I AM NOT NEAR YOU BUT I AM SENDING YOU SOMETHING ❤️"
      </p>

      <motion.button
        whileHover={{ x: 10 }}
        onClick={() => onNavigate('gift-gate')}
        className="group mt-8 flex items-center justify-center w-20 h-20 bg-pink-500 rounded-full shadow-lg text-white"
      >
        <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
      </motion.button>
    </motion.div>
  );
}
