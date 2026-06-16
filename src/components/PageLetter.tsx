import { motion } from "motion/react";
import { ViewProps } from "../types";
import { ArrowLeft, Flower2 } from "lucide-react";

export default function PageLetter({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: -90 }}
      className="relative w-full max-w-4xl bg-[#fdfaf5] p-8 md:p-16 rounded-xl shadow-2xl border-[12px] border-purple-100 overflow-hidden"
    >
      {/* Floral Border Accents */}
      <div className="absolute top-0 right-0 p-4 text-purple-200">
        <Flower2 className="w-24 h-24 rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-purple-200">
        <Flower2 className="w-24 h-24 -rotate-135" />
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
        {/* Photo Frame */}
        <div className="w-full md:w-1/3 aspect-[3/4] bg-white p-4 shadow-lg rotate-[-2deg] border border-gray-100 flex flex-col gap-4">
          <div className="flex-1 bg-gray-100 rounded flex items-center justify-center text-gray-300 text-6xl">
            🖼️
          </div>
          <p className="text-center font-elegant font-bold text-xl text-gray-500">
            Us ♡
          </p>
        </div>

        {/* The Letter Text */}
        <div className="flex-1 space-y-6">
          <h2 className="font-handwritten text-4xl text-purple-600 mb-8">
            Happy Birthday, My Love
          </h2>
          
          <div className="font-elegant text-2xl md:text-3xl text-gray-700 leading-relaxed space-y-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-200">
            <p>
              Today feels a little brighter, sunnier, and softer, simply because it's your day.
            </p>
            <p>
              May this year be gentle on your head, and wildly generous with your happiness. You deserve every bit of beauty this world has to offer.
            </p>
            <p>
              I am so grateful for every laugh, every quiet moment, and every single day I get to be by your side (even when I'm physically far).
            </p>
            <p className="italic">
              Always and forever yours.
            </p>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ x: -10 }}
        onClick={() => onNavigate('hub')}
        className="mt-12 flex items-center gap-2 text-purple-600 font-bold group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Box
      </motion.button>
    </motion.div>
  );
}
