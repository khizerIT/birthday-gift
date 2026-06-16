import { motion } from "motion/react";

export default function BackgroundMusic() {
  // YouTube Video ID for "Sparkle"
  const videoId = "Skmt64bZYLU";
  const startTime = 6;

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 w-0 h-0 overflow-hidden opacity-0">
      {/* Hidden YouTube Player that autoplays from 6s */}
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}&loop=1&playlist=${videoId}&mute=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      
      {/* Subtle indicator that music is playing (non-interactive) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-6 left-6 flex items-center gap-2 text-white/20 font-playful text-[10px] uppercase tracking-[0.3em]"
      >
        <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" />
        Audio Active
      </motion.div>
    </div>
  );
}
