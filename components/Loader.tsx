import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit after 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-[#ccff00] flex flex-col justify-between p-6 md:p-12"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex justify-between items-start">
        <span className="text-black text-sm font-bold tracking-widest uppercase">ADAN ZUKANCIC</span>
        <span className="text-black text-sm font-bold tracking-widest uppercase">Est. 2019</span>
      </div>

      <div className="text-black text-[15vw] leading-none font-bold tracking-tighter self-end mix-blend-multiply">
        {Math.min(count, 100)}%
      </div>

      <div className="border-t border-black/20 pt-4 flex justify-between items-end">
        <p className="text-black text-xs md:text-sm max-w-xs font-medium uppercase tracking-wide">
          Loading assets<br/>
          Calibrating aesthetics<br/>
          Preparing visual experience
        </p>
      </div>
    </motion.div>
  );
};
