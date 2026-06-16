import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Stars, Sparkles } from "lucide-react";

export default function SecretMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-rose-soft to-pink-soft rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative frosted-glass-sub px-8 py-4 rounded-full flex items-center gap-3 aesthetic-shadow border-white/60 hover:bg-white/50 transition-colors">
          <Heart className={`w-5 h-5 ${isOpen ? 'fill-rose-accent text-rose-accent' : 'text-warm-brown'}`} />
          <span className="font-serif italic text-lg">{isOpen ? 'Close your letter' : 'Read my love letter'}</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg frosted-glass-sub p-8 md:p-12 rounded-[32px] aesthetic-shadow relative overflow-hidden"
          >
            <div className="absolute top-6 left-6 text-rose-soft">
              <Stars className="w-6 h-6 opacity-40" />
            </div>
            <div className="absolute bottom-6 right-6 text-rose-soft">
              <Sparkles className="w-6 h-6 opacity-40" />
            </div>

            <p className="font-serif text-xl md:text-2xl leading-relaxed text-warm-brown text-center italic">
              "To my favorite person in the world. You make everything softer and prettier just by being in it. I love you, pooky. 🤍"
            </p>
            
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-px bg-rose-soft/50" />
            </div>
            
            <p className="mt-6 text-center text-rose-accent font-display tracking-widest uppercase text-xs font-bold">
              Yours Forever
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
