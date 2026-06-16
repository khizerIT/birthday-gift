import { motion } from "motion/react";
import { ViewProps } from "../types";
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Music2 } from "lucide-react";

const songs = [
  { title: "Sweet Creature", artist: "Harry Styles", color: "bg-rose-200" },
  { title: "Lover", artist: "Taylor Swift", color: "bg-blue-200" },
  { title: "Yellow", artist: "Coldplay", color: "bg-yellow-200" },
];

export default function PagePlaylist({ onNavigate }: ViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-10 w-full max-w-2xl px-6"
    >
      <div className="text-center space-y-2">
        <h1 className="font-playful text-4xl text-blue-600">Our Soundtrack</h1>
        <p className="font-elegant text-2xl text-gray-500 italic">Songs that remind me of us...</p>
      </div>

      <div className="w-full space-y-6">
        {songs.map((song, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="frosted-glass-sub bg-white/60 p-4 rounded-2xl flex items-center gap-6 group hover:bg-white/80 transition-all border-none shadow-lg"
          >
            <div className={`w-16 h-16 rounded-xl ${song.color} flex items-center justify-center text-3xl shadow-inner`}>
              <Music2 className="text-white/60 w-8 h-8" />
            </div>
            <div className="flex-1">
              <h4 className="font-playful text-lg text-gray-800">{song.title}</h4>
              <p className="font-elegant text-xl text-gray-500">{song.artist}</p>
              
              <div className="mt-2 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  className="h-full bg-blue-400"
                />
              </div>
            </div>
            <div className="flex gap-4 text-gray-400">
              <Play className="w-6 h-6 cursor-pointer hover:text-blue-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Music Player Controls mockup */}
      <div className="w-full bg-white/40 p-6 rounded-[32px] border-4 border-white/60 flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <SkipBack className="w-8 h-8 text-gray-400" />
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl">
            <Pause className="w-8 h-8" />
          </div>
          <SkipForward className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      <div className="relative w-full h-20 overflow-hidden">
         <motion.div 
          animate={{ x: [-100, 800] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 text-3xl select-none"
        >
          🕷️🕸️
        </motion.div>
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-playful uppercase tracking-[0.4em] text-gray-300">
          Friendly neighborhood gift
        </p>
      </div>

      <motion.button
        whileHover={{ x: -10 }}
        onClick={() => onNavigate('hub')}
        className="mt-4 flex items-center gap-2 text-blue-600 font-bold group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Box
      </motion.button>
    </motion.div>
  );
}
