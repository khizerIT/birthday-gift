import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageId } from "./types";
import BackgroundMusic from "./components/BackgroundMusic";

// Page Components
import PageIntro from "./components/PageIntro";
import PageAngryDuck from "./components/PageAngryDuck";
import PageApology from "./components/PageApology";
import PageGiftGate from "./components/PageGiftGate";
import PageBoxHub from "./components/PageBoxHub";
import PageLetter from "./components/PageLetter";
import PageMemories from "./components/PageMemories";
import PageSunflower from "./components/PageSunflower";
import PagePlaylist from "./components/PagePlaylist";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('intro');

  const renderPage = () => {
    switch (currentPage) {
      case 'intro': return <PageIntro onNavigate={setCurrentPage} />;
      case 'angry-duck': return <PageAngryDuck onNavigate={setCurrentPage} />;
      case 'apology': return <PageApology onNavigate={setCurrentPage} />;
      case 'gift-gate': return <PageGiftGate onNavigate={setCurrentPage} />;
      case 'hub': return <PageBoxHub onNavigate={setCurrentPage} />;
      case 'letter': return <PageLetter onNavigate={setCurrentPage} />;
      case 'memories': return <PageMemories onNavigate={setCurrentPage} />;
      case 'sunflower': return <PageSunflower onNavigate={setCurrentPage} />;
      case 'playlist': return <PagePlaylist onNavigate={setCurrentPage} />;
      default: return <PageIntro onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 selection:bg-rose-soft bg-pastel-pink overflow-x-hidden">
      {/* Decorative Background floating hearts/shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", x: Math.random() * 100 + "%", opacity: 0 }}
            animate={{ y: "-10%", opacity: [0, 0.4, 0] }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-white/40 text-2xl"
          >
            {i % 2 === 0 ? "♡" : "✨"}
          </motion.div>
        ))}
      </div>

      <BackgroundMusic />

      <main className="relative z-10 w-full max-w-5xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full flex items-center justify-center"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Aesthetic Footer / Attribution */}
      <div className="fixed bottom-6 right-6 pointer-events-none hidden md:block">
        <p className="font-playful text-[10px] tracking-[0.4em] uppercase text-white/60">
          Birthday Edition / 2026
        </p>
      </div>
    </div>
  );
}
