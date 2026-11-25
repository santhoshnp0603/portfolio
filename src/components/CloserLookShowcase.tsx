import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Pause, Play } from 'lucide-react';
import { allProjects } from '../data/projectsData';
import type { ProjectDetail, GalleryItem } from '../data/projectsData';
import { MarqueeRow } from './MarqueeRow';
import type { MarqueeThumbnailItem } from './MarqueeRow';
import { DesktopMockup } from './DesktopMockup';
import { MobileMockup } from './MobileMockup';
import { soundFx } from '../utils/sound';

interface CloserLookShowcaseProps {
  currentProject: ProjectDetail;
  onInspectItem: (item: GalleryItem) => void;
}

const AUTO_SWITCH_INTERVAL_MS = 3500;

/**
 * Section 07 – Animated Project Showcase.
 * Features three continuous counter-directional marquee rows behind a dominant
 * central device mockup that automatically cycles across projects and switches
 * between Desktop Browser and Smartphone frames based on project type.
 */
export const CloserLookShowcase: React.FC<CloserLookShowcaseProps> = ({
  currentProject,
  onInspectItem,
}) => {
  // Order projects starting from the active case study project, interleaving Web & Mobile
  const orderedProjects = useMemo(() => {
    const others = allProjects.filter((p) => p.id !== currentProject.id);
    const webOthers = others.filter((p) => p.platformType === 'web');
    const mobileOthers = others.filter((p) => p.platformType === 'mobile');

    const interleaved: ProjectDetail[] = [currentProject];
    let wantMobile = currentProject.platformType === 'web';

    while (webOthers.length > 0 || mobileOthers.length > 0) {
      if (wantMobile && mobileOthers.length > 0) {
        interleaved.push(mobileOthers.shift()!);
      } else if (!wantMobile && webOthers.length > 0) {
        interleaved.push(webOthers.shift()!);
      } else if (mobileOthers.length > 0) {
        interleaved.push(mobileOthers.shift()!);
      } else if (webOthers.length > 0) {
        interleaved.push(webOthers.shift()!);
      }
      wantMobile = !wantMobile;
    }

    return interleaved;
  }, [currentProject]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isBgHovered, setIsBgHovered] = useState(false);
  const [isDeviceHovered, setIsDeviceHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  // Respect prefers-reduced-motion accessibility preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const isMarqueePaused = isBgHovered || isManuallyPaused || prefersReducedMotion;

  // Automatic project switching every 3.5 seconds with proper cleanup
  useEffect(() => {
    if (isManuallyPaused || isDeviceHovered || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orderedProjects.length);
    }, AUTO_SWITCH_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [orderedProjects.length, isManuallyPaused, isDeviceHovered, prefersReducedMotion]);

  const activeProject = orderedProjects[activeIndex] || currentProject;
  const isMobileProject = activeProject.platformType === 'mobile';

  // Build 3 distinct thumbnail strips from project data
  const { topItems, middleItems, bottomItems } = useMemo(() => {
    const top: MarqueeThumbnailItem[] = orderedProjects.map((proj, i) => ({
      key: `top-${proj.id}-${i}`,
      project: proj,
      variant: i % 2 === 0 ? 'primary' : 'editorial',
    }));

    const rotated = [...orderedProjects.slice(2), ...orderedProjects.slice(0, 2)];
    const middle: MarqueeThumbnailItem[] = rotated.map((proj, i) => ({
      key: `mid-${proj.id}-${i}`,
      project: proj,
      variant: i % 2 === 0 ? 'editorial' : 'wireframe',
    }));

    const rotatedBottom = [...orderedProjects.slice(4), ...orderedProjects.slice(0, 4)];
    const bottom: MarqueeThumbnailItem[] = rotatedBottom.map((proj, i) => ({
      key: `bot-${proj.id}-${i}`,
      project: proj,
      variant: i % 2 === 0 ? 'tokens' : 'primary',
    }));

    return { topItems: top, middleItems: middle, bottomItems: bottom };
  }, [orderedProjects]);

  const handleSelectProject = (proj: ProjectDetail) => {
    const targetIdx = orderedProjects.findIndex((p) => p.id === proj.id);
    if (targetIdx !== -1) {
      soundFx.playClick();
      setActiveIndex(targetIdx);
    }
  };

  const handleInspectActive = () => {
    soundFx.playClick();
    onInspectItem({
      id: `showcase-${activeProject.id}`,
      title: activeProject.title,
      caption: activeProject.heroHeadline,
      type: isMobileProject ? 'mobile-mockup' : 'full-width',
      mockupKind: activeProject.mockupType,
      viewportType: isMobileProject ? 'mobile' : 'web',
    });
  };

  return (
    <div className="relative w-full bg-[#0A0A0A]">
      {/* Interactive Showcase Stage */}
      <div className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* ───────────────────────────────────────────────────────────
            LAYER 1: THREE HORIZONTAL MARQUEE ROWS (BACKGROUND)
            Top & Bottom roll RIGHT (Left → Right)
            Middle rolls LEFT (Right → Left)
            ─────────────────────────────────────────────────────────── */}
        <div
          onMouseEnter={() => setIsBgHovered(true)}
          onMouseLeave={() => setIsBgHovered(false)}
          className="relative z-0 flex flex-col gap-3.5 sm:gap-4 lg:gap-5"
        >
          {/* Top Row: LEFT TO RIGHT (Right Side Rolling) */}
          <MarqueeRow
            items={topItems}
            direction="right"
            speedSeconds={42}
            activeProjectId={activeProject.id}
            isPaused={isMarqueePaused}
            onSelectProject={handleSelectProject}
          />

          {/* Middle Row: RIGHT TO LEFT (Left Side Rolling, distinct speed) */}
          <MarqueeRow
            items={middleItems}
            direction="left"
            speedSeconds={54}
            activeProjectId={activeProject.id}
            isPaused={isMarqueePaused}
            onSelectProject={handleSelectProject}
          />

          {/* Bottom Row: LEFT TO RIGHT (Right Side Rolling) */}
          <MarqueeRow
            items={bottomItems}
            direction="right"
            speedSeconds={46}
            activeProjectId={activeProject.id}
            isPaused={isMarqueePaused}
            onSelectProject={handleSelectProject}
          />
        </div>

        {/* Left & Right Edge Fading Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-52 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-52 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent z-10" />

        {/* Subtle Vertical Vignette Blend */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/75 via-transparent to-[#0A0A0A]/85 z-10" />

        {/* Subtle Center Radial Spotlight & Glow Behind Mockup */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
          <div className="w-[340px] sm:w-[540px] h-[280px] sm:h-[380px] rounded-full bg-[#0A0A0A]/70 blur-3xl" />
          <div
            className="absolute w-[260px] sm:w-[420px] h-[220px] sm:h-[320px] rounded-full blur-[120px] opacity-20 transition-colors duration-700"
            style={{ backgroundColor: activeProject.accentColor || '#C5FF45' }}
          />
        </div>

        {/* ───────────────────────────────────────────────────────────
            LAYER 2: CENTRAL AUTO-SWITCHING DEVICE MOCKUP (FOREGROUND)
            Fixed-height stage prevents layout jumps between Desktop & Mobile
            ─────────────────────────────────────────────────────────── */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 pointer-events-none">
          <div className="w-full max-w-4xl h-[400px] sm:h-[460px] lg:h-[510px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject.id}-${activeProject.platformType}`}
                onMouseEnter={() => setIsDeviceHovered(true)}
                onMouseLeave={() => setIsDeviceHovered(false)}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.96 }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1 }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.96 }
                }
                transition={{ duration: prefersReducedMotion ? 0.15 : 0.45, ease: 'easeInOut' }}
                className={`pointer-events-auto flex items-center justify-center ${
                  isMobileProject ? 'w-auto' : 'w-full max-w-[720px]'
                }`}
              >
                {isMobileProject ? (
                  <MobileMockup project={activeProject} onClick={handleInspectActive} />
                ) : (
                  <DesktopMockup project={activeProject} onClick={handleInspectActive} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SYNCHRONIZED ACTIVE PROJECT HUD & MANUAL CONTROLS
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Active Project Identity */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-[#C5FF45] text-[#0A0A0A] font-mono-code font-bold text-xs">
              {activeProject.number}
            </span>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F5F5]">
                  {activeProject.title.split('—')[0].trim()}
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono-code text-[10px] text-[#C5FF45] uppercase">
                  {isMobileProject ? (
                    <>
                      <Smartphone className="w-3 h-3" />
                      <span>Mobile App</span>
                    </>
                  ) : (
                    <>
                      <Monitor className="w-3 h-3" />
                      <span>Web Platform</span>
                    </>
                  )}
                </span>
              </div>
              <p className="font-mono-code text-[11px] text-[#999999] mt-0.5">
                {activeProject.category} • {activeProject.projectType}
              </p>
            </div>
          </div>

          {/* Synchronized Project Switcher Dots + Pause Toggle */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center gap-1.5">
              {orderedProjects.map((proj, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => handleSelectProject(proj)}
                    title={proj.title}
                    aria-label={`Switch showcase to ${proj.title}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'w-7 bg-[#C5FF45]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setIsManuallyPaused((prev) => !prev);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171717] border border-white/10 font-mono-code text-[11px] text-[#F5F5F5] hover:border-[#C5FF45]/50 hover:text-[#C5FF45] transition-colors cursor-pointer"
            >
              {isManuallyPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#C5FF45] fill-current" />
                  <span>Resume Cycle</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#C5FF45]" />
                  <span>{isBgHovered || isDeviceHovered ? 'Hover Paused' : 'Auto-Cycling'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
