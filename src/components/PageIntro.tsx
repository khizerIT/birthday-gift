import { useState } from "react";
import { motion } from "motion/react";
import { ViewProps } from "../types";
import { Heart } from "lucide-react";

export default function PageIntro({ onNavigate }: ViewProps) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    // Generate a new random position when the mouse gets close
    const randomX = (Math.random() - 0.5) * 500; // range from -250 to 250
    const randomY = (Math.random() - 0.5) * 300; // range from -150 to 150
    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center text-center gap-8 relative select-none"
    >
      <div className="relative group p-12">
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-[120px] filter drop-shadow-xl select-none"
        >
          😊
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-4 right-4 text-pink-500"
        >
          <Heart fill="currentColor" className="w-8 h-8" />
        </motion.div>
      </div>

      <h1 className="font-playful text-4xl md:text-5xl text-gray-800 tracking-wide">
        Are you ready for the surprise?
      </h1>

      <div className="flex gap-6 mt-4 relative min-h-[100px] w-full justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onNavigate('apology')}
          className="px-10 py-5 bg-white rounded-full text-pink-500 font-bold text-xl shadow-lg hover:shadow-xl transition-all border-4 border-pink-100 flex items-center gap-2 z-10"
        >
          Yes ♡
        </motion.button>

        <motion.button
          animate={{ 
            x: noButtonPos.x, 
            y: noButtonPos.y,
            transition: { type: "spring", stiffness: 100, damping: 10 }
          }}
          onMouseEnter={handleNoHover}
          onClick={handleNoHover} // Just in case they manage to click it
          className="px-10 py-5 bg-gray-200 rounded-full text-gray-500 font-bold text-xl shadow-md cursor-default pointer-events-auto"
        >
          NO!
        </motion.button>
      </div>
    </motion.div>
  );
}
