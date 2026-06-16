import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function BirthdayCountdown({ targetDate, onComplete }: { targetDate: Date, onComplete: () => void }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeft: TimeLeft | null = null;

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        onComplete();
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (!timeLeft) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center space-y-8"
    >
      <h2 className="font-serif text-3xl md:text-4xl text-warm-brown text-center italic">
        The magic begins in...
      </h2>
      
      <div className="flex gap-4 md:gap-8">
        {[
          { label: "days", value: timeLeft.days },
          { label: "hours", value: timeLeft.hours },
          { label: "mins", value: timeLeft.minutes },
          { label: "secs", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 frosted-glass-sub rounded-2xl flex items-center justify-center aesthetic-shadow mb-2 border-white/60">
              <span className="font-serif italic text-2xl md:text-3xl text-warm-brown">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs uppercase tracking-widest text-warm-brown/60 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
