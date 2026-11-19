import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/sound';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            soundFx.playSuccess();
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0E0E0E] text-[#F5F3EF] p-6 sm:p-12 select-none"
        >
          {/* Top telemetry */}
          <div className="flex items-center justify-between font-mono-code text-xs text-[#8E8E93]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5FF45] animate-pulse-subtle" />
              <span>SANTHOSH KUMAR // PORTFOLIO 2026</span>
            </div>
            <span>SYS.VER 4.2.0</span>
          </div>

          {/* Central Monogram & Progress */}
          <div className="max-w-xl mx-auto w-full text-center flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 sm:w-20 sm:h-20 mb-8 rounded-2xl border border-white/15 bg-[#161616] flex items-center justify-center font-display text-2xl sm:text-3xl font-extrabold text-[#C5FF45] shadow-2xl relative overflow-hidden group"
            >
              <span>SK</span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#C5FF45]/10 to-transparent pointer-events-none" />
            </motion.div>

            <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-4">
              CRAFTING DIGITAL RESONANCE
            </h1>
            <p className="font-mono-code text-xs sm:text-sm text-[#8E8E93] max-w-md">
              INITIALIZING INTERFACE ARCHITECTURES &amp; MOTION TELEMETRY
            </p>

            {/* Progress Bar & Percentage */}
            <div className="w-full mt-10">
              <div className="flex justify-between font-mono-code text-xs text-[#8E8E93] mb-2">
                <span>LOADING ASSETS</span>
                <span className="text-[#C5FF45] font-semibold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#C5FF45]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Footer / Skip */}
          <div className="flex items-center justify-between font-mono-code text-xs text-[#8E8E93]">
            <span className="hidden sm:inline">.</span>
            <button
              onClick={() => {
                setProgress(100);
                setIsDone(true);
                soundFx.playClick();
                setTimeout(onComplete, 400);
              }}
              className="text-[#C5FF45] hover:underline cursor-pointer"
            >
              []
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
