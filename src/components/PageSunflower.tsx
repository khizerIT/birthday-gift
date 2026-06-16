import { motion } from "motion/react";
import { ViewProps } from "../types";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function PageSunflower({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center gap-10"
    >
      <div className="relative">
        {/* Retro Disco Ball */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-gray-300 via-white to-gray-400 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.8)] border border-white/20 overflow-hidden"
        >
          <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </motion.div>

        {/* The Cat & Sunflowers */}
        <div className="text-[160px] md:text-[200px] relative select-none">
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            🐱🎀
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-8xl"
          >
            🌻🌻🌻
          </motion.div>
        </div>
      </div>

      <div className="max-w-md space-y-6">
        <h1 className="font-playful text-4xl md:text-5xl text-yellow-600">
          You're my sunflower 🌻
        </h1>
        <p className="font-elegant text-3xl text-gray-700 italic flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          I keep turning back to you, no matter what.
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </p>
      </div>

      <motion.button
        whileHover={{ x: -10 }}
        onClick={() => onNavigate('hub')}
        className="mt-8 flex items-center gap-2 text-yellow-700 font-bold group bg-yellow-100 px-6 py-3 rounded-full"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Box
      </motion.button>
    </motion.div>
  );
}
