import { useEffect } from "react";
import { motion } from "motion/react";
import { ViewProps, PageId } from "../types";
import { Mail, Camera, Heart, Disc, Stars } from "lucide-react";
import { ReactNode } from "react";
import confetti from "canvas-confetti";

interface ItemCardProps {
  id: PageId;
  icon: ReactNode;
  label: string;
  onNavigate: (page: PageId) => void;
  color: string;
}

function ItemCard({ id, icon, label, onNavigate, color }: ItemCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => onNavigate(id)}
      className={`relative group cursor-pointer w-32 h-32 md:w-48 md:h-48 rounded-[40px] flex flex-col items-center justify-center p-6 shadow-2xl transition-all border-4 border-white/40 ${color}`}
    >
      <div className="text-white group-hover:scale-110 transition-transform mb-4">
        {icon}
      </div>
      <span className="text-white font-playful text-xs md:text-sm uppercase tracking-widest text-center">
        {label}
      </span>
      <Stars className="absolute top-4 right-4 w-4 h-4 text-white/50 animate-pulse" />
    </motion.div>
  );
}

export default function PageBoxHub({ onNavigate }: ViewProps) {
  useEffect(() => {
    // Fire confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ['#FFD1DC', '#E0BBE4', '#FFF9C4', '#B3E5FC'] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ['#FFD1DC', '#E0BBE4', '#FFF9C4', '#B3E5FC'] });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full min-h-[600px] flex flex-col items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/crinkled-paper-dark.png')] bg-red-900 rounded-[60px] overflow-hidden"
    >
      {/* Glowing background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-950/40 pointer-events-none" />
      
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="font-playful text-3xl md:text-5xl text-white mb-12 drop-shadow-lg text-center"
      >
        Inside your box! ✨
      </motion.h1>

      <div className="grid grid-cols-2 gap-8 md:gap-12 relative z-10">
        <ItemCard 
          id="letter" 
          icon={<Mail className="w-12 h-12 md:w-20 md:h-20" />} 
          label="The Letter" 
          color="bg-purple-400" 
          onNavigate={onNavigate} 
        />
        <ItemCard 
          id="memories" 
          icon={<Camera className="w-12 h-12 md:w-20 md:h-20" />} 
          label="Memories" 
          color="bg-rose-400" 
          onNavigate={onNavigate} 
        />
        <ItemCard 
          id="sunflower" 
          icon={<Heart className="w-12 h-12 md:w-20 md:h-20" />} 
          label="Cute Message" 
          color="bg-yellow-400" 
          onNavigate={onNavigate} 
        />
        <ItemCard 
          id="playlist" 
          icon={<Disc className="w-12 h-12 md:w-20 md:h-20 animate-spin-slow" />} 
          label="Soundtrack" 
          color="bg-blue-400" 
          onNavigate={onNavigate} 
        />
      </div>

      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 text-white/40 font-elegant italic text-xl"
      >
        Pick something to open...
      </motion.div>
    </motion.div>
  );
}
