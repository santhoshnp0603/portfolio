import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'project' | 'drag' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor-project]');
      const clickable = target.closest('button, a, input, select, textarea, [data-cursor-pointer]');
      const dragArea = target.closest('[data-cursor-drag]');

      if (projectCard) {
        setCursorVariant('project');
        setCursorText(projectCard.getAttribute('data-cursor-project') || 'VIEW CASE');
      } else if (dragArea) {
        setCursorVariant('drag');
        setCursorText('DRAG');
      } else if (clickable) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setCursorVariant('hidden');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice || cursorVariant === 'hidden') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Central Cursor Point */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#C5FF45] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* Outer Magnetic Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-mono-code text-[10px] tracking-wider uppercase font-semibold text-[#101010] shadow-2xl"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: cursorVariant === 'project' ? 88 : cursorVariant === 'hover' ? 44 : 28,
          height: cursorVariant === 'project' ? 88 : cursorVariant === 'hover' ? 44 : 28,
          backgroundColor:
            cursorVariant === 'project'
              ? '#C5FF45'
              : cursorVariant === 'hover'
              ? 'rgba(197, 255, 69, 0.2)'
              : 'transparent',
          borderColor:
            cursorVariant === 'project'
              ? '#C5FF45'
              : cursorVariant === 'hover'
              ? '#C5FF45'
              : 'rgba(245, 243, 239, 0.4)',
          borderWidth: cursorVariant === 'project' ? 0 : 1.5,
          borderRadius: 9999,
          scale: cursorVariant === 'hover' ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorVariant === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center font-bold px-2 leading-tight"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
