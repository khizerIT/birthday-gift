import { motion } from "motion/react";
import { ViewProps } from "../types";
import { ArrowLeft } from "lucide-react";

export default function PageAngryDuck({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col items-center text-center gap-10"
    >
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-[140px] select-none"
      >
        🦆🔪
      </motion.div>
      
      <h1 className="font-playful text-6xl text-red-600 uppercase tracking-tighter animate-bounce">
        HOW DARE YOU? 😡
      </h1>

      <motion.button
        whileHover={{ x: -10 }}
        onClick={() => onNavigate('intro')}
        className="mt-8 flex items-center gap-3 text-gray-600 font-bold hover:text-gray-800 transition-colors bg-white/50 px-8 py-4 rounded-full"
      >
        <ArrowLeft className="w-6 h-6" />
        Go back and pick Yes! 
      </motion.button>
    </motion.div>
  );
}
