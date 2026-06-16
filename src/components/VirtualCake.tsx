import { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

export default function VirtualCake() {
  const [isBlown, setIsBlown] = useState(false);

  const handleBlow = () => {
    if (!isBlown) {
      setIsBlown(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#fecdd3', '#fed7aa', '#f9a8d4'],
        scalar: 1.2,
        shapes: ['circle', 'square'],
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 py-8">
      <div className="relative cursor-pointer group" onClick={handleBlow}>
        {/* The Cake */}
        <div className="relative w-48 md:w-64 h-32 md:h-40">
          {/* Base */}
          <div className="absolute bottom-0 w-full h-full bg-rose-soft/60 backdrop-blur-md rounded-t-3xl aesthetic-shadow border border-white/40" />
          {/* Icing drip effect */}
          <div className="absolute top-0 w-full h-4 bg-white/40 backdrop-blur-sm rounded-full" />
          
          {/* Candle */}
          <motion.div 
            initial={false}
            animate={{ y: isBlown ? 5 : 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-16 bg-gradient-to-b from-rose-accent to-pink-soft rounded-full"
          >
            {/* Flame */}
            {!isBlown && (
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-8 bg-orange-200 rounded-full blur-[2px] shadow-[0_0_15px_rgba(255,200,150,0.8)]"
              />
            )}
          </motion.div>
        </div>
        
        {/* Simple instructional text */}
        {!isBlown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-warm-brown/40 font-display italic tracking-[0.2em] text-[10px] uppercase font-bold"
          >
            Click to blow the candle
          </motion.div>
        )}
      </div>

      {isBlown && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="font-serif italic text-4xl md:text-5xl text-warm-brown mb-2">
            Make a wish!
          </h3>
          <p className="font-sans text-warm-brown/50 tracking-wide">
            Everything you dream of will come true. 🤍
          </p>
        </motion.div>
      )}
    </div>
  );
}
