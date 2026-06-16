import { motion } from "motion/react";
import { ViewProps } from "../types";
import { ArrowLeft, Pin } from "lucide-react";

const photos = [
  { emoji: "🍦", caption: "Sweet moments", rotation: -5, delay: 0.1 },
  { emoji: "🌅", caption: "Golden hours", rotation: 3, delay: 0.2 },
  { emoji: "🎞️", caption: "Movie nights", rotation: -2, delay: 0.3 },
  { emoji: "🌙", caption: "Stargazing", rotation: 6, delay: 0.4 },
];

export default function PageMemories({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center gap-12 w-full"
    >
      <h1 className="font-handwritten text-5xl md:text-6xl text-gray-800 drop-shadow-sm">
        our memories
      </h1>

      {/* The clothesline */}
      <div className="relative w-full max-w-5xl h-64 border-t-4 border-dashed border-gray-300 mt-12 flex justify-around px-8">
        {photos.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: item.delay, type: 'spring' }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            className="relative"
          >
            {/* Clothespin */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-1 bg-pastel-yellow rounded-sm shadow-sm z-20">
              <Pin className="w-6 h-6 text-yellow-600 rotate-45" />
            </div>

            {/* Polaroid Frame */}
            <div 
              style={{ rotate: `${item.rotation}deg` }}
              className="bg-white p-4 pb-12 shadow-xl border border-gray-100 w-40 md:w-56 aspect-[4/5] flex flex-col gap-4 cursor-zoom-in"
            >
              <div className="flex-1 bg-gray-50 rounded flex items-center justify-center text-5xl md:text-6xl grayscale hover:grayscale-0 transition-all">
                {item.emoji}
              </div>
              <p className="text-center font-elegant text-lg md:text-2xl text-gray-400">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ x: -10 }}
        onClick={() => onNavigate('hub')}
        className="mt-24 flex items-center gap-2 text-gray-600 font-bold group bg-white/50 px-6 py-3 rounded-full"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Box
      </motion.button>
    </motion.div>
  );
}
