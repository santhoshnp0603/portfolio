import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { InteractiveCoreCanvas } from './InteractiveCoreCanvas';
import { soundFx } from '../utils/sound';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

// 10 curated expressive fonts for kinetic morphing
const FONTS = [
  { name: 'Syne Display', family: "'Syne', sans-serif", weight: 800, italic: false },
  { name: 'Playfair Serif', family: "'Playfair Display', serif", weight: 700, italic: true },
  { name: 'Bebas Condensed', family: "'Bebas Neue', sans-serif", weight: 400, italic: false },
  { name: 'JetBrains Code', family: "'JetBrains Mono', monospace", weight: 700, italic: false },
  { name: 'Abril Fatface', family: "'Abril Fatface', serif", weight: 400, italic: false },
  { name: 'Dancing Script', family: "'Dancing Script', cursive", weight: 700, italic: false },
  { name: 'Cinzel Trajan', family: "'Cinzel', serif", weight: 800, italic: false },
  { name: 'Space Grotesk', family: "'Space Grotesk', sans-serif", weight: 700, italic: false },
  { name: 'Geist Modern', family: "'Geist', sans-serif", weight: 800, italic: false },
  { name: 'Jakarta Italic', family: "'Plus Jakarta Sans', sans-serif", weight: 800, italic: true },
];

// Calibrated slot widths for each letter of "Designing"
// Strict fixed width per slot guarantees 0px Cumulative Layout Shift (CLS)
const WORD_LETTERS = [
  { char: 'D', width: 0.74 },
  { char: 'e', width: 0.52 },
  { char: 's', width: 0.48 },
  { char: 'i', width: 0.30 },
  { char: 'g', width: 0.54 },
  { char: 'n', width: 0.54 },
  { char: 'i', width: 0.30 },
  { char: 'n', width: 0.54 },
  { char: 'g', width: 0.54 },
];

const TOTAL_WORD_WIDTH_EM = WORD_LETTERS.reduce((acc, curr) => acc + curr.width, 0); // 4.50em

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onContactClick }) => {
  // Each letter tracks its own active font index independently
  const [letterFonts, setLetterFonts] = useState<number[]>(
    Array(WORD_LETTERS.length).fill(0)
  );
  const targetFontRef = useRef(0);
  const timeoutsRef = useRef<number[]>([]);

  // Smooth letter-by-letter cascade transition
  const triggerLetterByLetterWave = (nextFontIndex: number) => {
    // Clear any previous active timers
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    // Trigger each letter with a 70ms stagger
    WORD_LETTERS.forEach((_, charIndex) => {
      const timer = window.setTimeout(() => {
        setLetterFonts((prev) => {
          const next = [...prev];
          next[charIndex] = nextFontIndex;
          return next;
        });
      }, charIndex * 70);

      timeoutsRef.current.push(timer);
    });
  };

  // Automatic cycle: cascades letter-by-letter every 2.4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      targetFontRef.current = (targetFontRef.current + 1) % FONTS.length;
      triggerLetterByLetterWave(targetFontRef.current);
    }, 2400);

    return () => {
      clearInterval(interval);
      timeoutsRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  const handleManualShuffle = () => {
    soundFx.playClick();
    targetFontRef.current = (targetFontRef.current + 1) % FONTS.length;
    triggerLetterByLetterWave(targetFontRef.current);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#101010] bg-noise bg-grid-pattern px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* 3D Kinetic Torus Centered Background Animation */}
      <InteractiveCoreCanvas backgroundMode />

      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C5FF45]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Centered Middle-Aligned Hero Content */}
      <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center justify-center text-center">
        {/* Kinetic Hero Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-[1.14] sm:leading-[1.06] text-[#F5F3EF] max-w-5xl mx-auto text-center select-none">
          {/* Kinetic "Designing" word: Letter-by-letter font morphing with ZERO layout shift */}
          <span
            className="relative inline-block mr-3 sm:mr-4 align-baseline text-left select-none cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
            style={{
              width: `${TOTAL_WORD_WIDTH_EM}em`,
              minWidth: `${TOTAL_WORD_WIDTH_EM}em`,
              maxWidth: `${TOTAL_WORD_WIDTH_EM}em`,
            }}
            onClick={handleManualShuffle}
            onMouseEnter={() => soundFx.playHover()}
            title="Kinetic Type: Smooth letter-by-letter font wave (Click to shuffle)"
          >
            {WORD_LETTERS.map((item, idx) => {
              const fontIndex = letterFonts[idx];
              const currentFont = FONTS[fontIndex];

              return (
                <span
                  key={idx}
                  className="relative inline-block align-baseline overflow-visible"
                  style={{
                    width: `${item.width}em`,
                    minWidth: `${item.width}em`,
                    maxWidth: `${item.width}em`,
                  }}
                >
                  {/* Invisible template character in normal flow: locks natural line-height & baseline */}
                  <span className="invisible select-none pointer-events-none" aria-hidden="true">
                    {item.char}
                  </span>

                  {/* Absolutely positioned morphing letter: 0px layout impact, smooth crossfade */}
                  <AnimatePresence initial={false}>
                    <motion.span
                      key={`${idx}-${fontIndex}`}
                      initial={{ opacity: 0, y: 7, filter: 'blur(3px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -7, filter: 'blur(3px)' }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        fontFamily: currentFont.family,
                        fontWeight: currentFont.weight,
                        fontStyle: currentFont.italic ? 'italic' : 'normal',
                      }}
                      className="absolute left-0 top-0 w-full text-center text-[#C5FF45] select-none pointer-events-none drop-shadow-[0_0_16px_rgba(197,255,69,0.25)]"
                    >
                      {item.char}
                    </motion.span>
                  </AnimatePresence>
                </span>
              );
            })}
          </span>

          <span className="inline-block mr-3 sm:mr-4">digital</span>
          <span className="inline-block mr-3 sm:mr-4">experiences</span>
          <span className="inline-block mr-3 sm:mr-4">that</span>
          <span className="inline-block mr-3 sm:mr-4">make</span>
          <span className="inline-block mr-3 sm:mr-4">an</span>
          <span className="inline-block text-[#C5FF45] underline decoration-[#C5FF45]/40 decoration-wavy decoration-2 underline-offset-8">
            impact.
          </span>
        </h1>

        {/* CTA Buttons - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10 sm:mt-12"
        >
          <button
            onClick={() => {
              soundFx.playClick();
              onExploreWork();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C5FF45] text-[#101010] font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_35px_rgba(197,255,69,0.5)] hover:scale-105 cursor-pointer"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onContactClick();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#181818]/90 backdrop-blur-md border border-white/15 text-[#F5F3EF] hover:border-[#C5FF45] hover:text-[#C5FF45] font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
