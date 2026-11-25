import React from 'react';
import { Wifi, Battery, Signal, Maximize2, Search, ArrowUpRight, Flame } from 'lucide-react';
import type { ProjectDetail } from '../data/projectsData';

interface MobileMockupProps {
  project: ProjectDetail;
  onClick?: () => void;
}

const isRealImageSrc = (src?: string): boolean => {
  if (!src) return false;
  return src.startsWith('http') || src.startsWith('/') || src.startsWith('data:');
};

/**
 * Realistic Smartphone Frame Mockup for Mobile App Design projects.
 * Preserves authentic 9:19.5 mobile proportions inside a fixed-height stage.
 */
export const MobileMockup: React.FC<MobileMockupProps> = ({ project, onClick }) => {
  const shortTitle = project.title.split('—')[0].trim();

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative h-[390px] sm:h-[445px] lg:h-[490px] aspect-[9/19] rounded-[36px] sm:rounded-[42px] bg-[#171717] border-[3px] border-white/15 p-2.5 sm:p-3 shadow-[0_30px_100px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
    >
      {/* Inner Phone Screen Container */}
      <div className="relative w-full h-full rounded-[26px] sm:rounded-[30px] bg-[#0A0A0A] border border-white/10 overflow-hidden flex flex-col justify-between">
        {/* Status Bar + Dynamic Island */}
        <div className="px-4 pt-2.5 pb-1.5 flex items-center justify-between text-[10px] font-mono-code text-[#F5F5F5] shrink-0 z-10 bg-[#0A0A0A]/90">
          <span className="font-bold tracking-tight">9:41</span>
          <div className="w-16 sm:w-20 h-4 rounded-full bg-black border border-white/10 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF45]/70" />
          </div>
          <div className="flex items-center gap-1 text-[#999999]">
            <Signal className="w-2.5 h-2.5" />
            <Wifi className="w-2.5 h-2.5" />
            <Battery className="w-3 h-3" />
          </div>
        </div>

        {/* Mobile App Screen Content */}
        <div className="relative flex-1 w-full overflow-hidden">
          {isRealImageSrc(project.mobileScreenshot) ? (
            <img
              src={project.mobileScreenshot}
              alt={`${shortTitle} mobile app preview`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          ) : (
            renderMobileScreen(project)
          )}

          {/* Subtle Hover Inspect Overlay */}
          {onClick && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] z-20">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#C5FF45] text-[#0A0A0A] font-display font-bold text-[11px] uppercase tracking-wider shadow-xl">
                <Maximize2 className="w-3 h-3" />
                <span>Inspect</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Home Gesture Bar */}
        <div className="py-2 bg-[#0A0A0A] flex items-center justify-center shrink-0">
          <div className="w-20 sm:w-24 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
};

/**
 * Tailored native mobile UI layout rendered inside the smartphone screen.
 */
function renderMobileScreen(project: ProjectDetail) {
  const shortTitle = project.title.split('—')[0].trim().toUpperCase();
  const accent = project.accentColor || '#C5FF45';
  const metric0 = project.impactMetrics[0];
  const metric1 = project.impactMetrics[1];

  if (project.mockupType === 'edtech') {
    return (
      <div className="w-full h-full px-3.5 py-2 flex flex-col justify-between bg-gradient-to-b from-[#120E16] via-[#0E0B12] to-[#0A0A0A] text-[#F5F5F5] select-none">
        {/* App Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-md bg-[#FF6584]/20 border border-[#FF6584]/40 flex items-center justify-center text-[10px]">
              ⚡
            </span>
            <span className="font-display font-extrabold text-xs tracking-wider">{shortTitle}</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FF6584]/15 border border-[#FF6584]/30 font-mono-code text-[9px] text-[#FF6584]">
            <Flame className="w-2.5 h-2.5" />
            14D
          </span>
        </div>

        {/* Greeting Card */}
        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
          <span className="font-display font-bold text-xs block text-[#F5F5F5]">
            Neural Constellation
          </span>
          <span className="font-sans-main text-[10px] text-[#999999] block mt-0.5">
            Level 08 • Algorithmic Game Theory
          </span>
        </div>

        {/* Search Input Bar */}
        <div className="px-2.5 py-1.5 rounded-lg bg-[#16121D] border border-white/10 flex items-center gap-2 text-[10px] text-[#999999]">
          <Search className="w-3 h-3 text-[#FF6584]" />
          <span>Explore concept nodes...</span>
        </div>

        {/* Spatial Constellation Mini Graph */}
        <div className="relative h-28 rounded-xl bg-[#16111D] border border-white/10 p-2 flex items-center justify-center overflow-hidden">
          <svg viewBox="0 0 220 110" className="w-full h-full">
            <line x1="110" y1="55" x2="55" y2="30" stroke="#FF6584" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="110" y1="55" x2="170" y2="30" stroke="#C5FF45" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="110" y1="55" x2="65" y2="85" stroke="#8B5CF6" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="110" y1="55" x2="165" y2="85" stroke="#FF6584" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="110" cy="55" r="16" fill="#FF6584" fillOpacity="0.2" stroke="#FF6584" strokeWidth="1.5" />
            <text x="110" y="58" textAnchor="middle" fill="#F5F5F5" fontSize="7" fontWeight="bold">SYNAPSE</text>
            <circle cx="55" cy="30" r="11" fill="#1E1428" stroke="#FF6584" strokeWidth="1.2" />
            <text x="55" y="33" textAnchor="middle" fill="#FF6584" fontSize="6">LOGIC</text>
            <circle cx="170" cy="30" r="12" fill="#1E1428" stroke="#C5FF45" strokeWidth="1.2" />
            <text x="170" y="33" textAnchor="middle" fill="#C5FF45" fontSize="6">RECALL</text>
            <circle cx="65" cy="85" r="10" fill="#1E1428" stroke="#8B5CF6" strokeWidth="1.2" />
            <circle cx="165" cy="85" r="10" fill="#1E1428" stroke="#FF6584" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Horizontal Sprint Cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#FF6584]/25 to-[#16111D] border border-[#FF6584]/30">
            <span className="font-mono-code text-[8px] text-[#FF6584] block">SPRINT 01</span>
            <span className="font-display font-bold text-[11px] text-[#F5F5F5] block mt-0.5">Nash Matrix</span>
            <span className="font-mono-code text-[8px] text-[#999999] mt-1 block">84% Mastery</span>
          </div>
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#C5FF45]/20 to-[#141714] border border-[#C5FF45]/30">
            <span className="font-mono-code text-[8px] text-[#C5FF45] block">SPRINT 02</span>
            <span className="font-display font-bold text-[11px] text-[#F5F5F5] block mt-0.5">Min-Max</span>
            <span className="font-mono-code text-[8px] text-[#999999] mt-1 block">3 Min Left</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.mockupType === 'fintech') {
    return (
      <div className="w-full h-full px-3.5 py-2 flex flex-col justify-between bg-gradient-to-b from-[#0E1012] to-[#0A0A0A] text-[#F5F5F5] select-none">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="font-display font-black text-xs tracking-wider text-[#C5FF45]">{shortTitle}</span>
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono-code text-[8px] text-[#999999]">
            FX 0% FEE
          </span>
        </div>

        {/* Liquidity Balance */}
        <div className="p-2.5 rounded-xl bg-[#111111] border border-white/10">
          <span className="font-mono-code text-[8px] text-[#999999] block">GLOBAL TREASURY</span>
          <div className="flex items-baseline justify-between mt-0.5">
            <span className="font-display font-black text-lg text-[#F5F5F5]">$148,290</span>
            <span className="font-mono-code text-[9px] text-[#C5FF45]">+4.8% APY</span>
          </div>
        </div>

        {/* Titanium Virtual Card */}
        <div className="relative h-24 rounded-2xl bg-gradient-to-tr from-[#15171A] via-[#262A31] to-[#121316] border border-white/15 p-3 flex flex-col justify-between overflow-hidden shadow-lg">
          <div className="flex items-center justify-between">
            <span className="px-1.5 py-0.5 rounded bg-[#C5FF45]/15 border border-[#C5FF45]/40 font-mono-code text-[8px] text-[#C5FF45]">
              CHIP
            </span>
            <span className="font-display font-black text-[10px] tracking-widest">VAULTX</span>
          </div>
          <div>
            <span className="font-mono-code text-[10px] tracking-widest block">•••• •••• •••• 9842</span>
            <span className="font-mono-code text-[8px] text-[#999999] mt-0.5 block">DYNAMIC CVV • 52s</span>
          </div>
        </div>

        {/* Currency Swap Action */}
        <div className="p-2.5 rounded-xl bg-[#141414] border border-white/10 space-y-1.5">
          <div className="flex items-center justify-between font-mono-code text-[9px]">
            <span className="text-[#999999]">USD → EUR</span>
            <span className="text-[#C5FF45] font-bold">0.9184 LIVE</span>
          </div>
          <div className="w-full py-1.5 rounded-lg bg-[#C5FF45] text-[#0A0A0A] font-display font-bold text-[10px] text-center flex items-center justify-center gap-1">
            <span>SWAP INSTANTLY</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    );
  }

  // Generic mobile view fallback for any project
  return (
    <div className="w-full h-full px-3.5 py-2 flex flex-col justify-between bg-gradient-to-b from-[#111111] to-[#0A0A0A] text-[#F5F5F5] select-none">
      <div className="flex items-center justify-between">
        <span className="font-display font-extrabold text-xs tracking-wider" style={{ color: accent }}>
          {shortTitle}
        </span>
        <span className="font-mono-code text-[8px] text-[#999999]">{project.category}</span>
      </div>

      <div className="p-3 rounded-xl bg-[#171717] border border-white/10">
        <span className="font-mono-code text-[8px] text-[#999999] block">KEY OUTCOME</span>
        <span className="font-display font-black text-xl block mt-0.5" style={{ color: accent }}>
          {metric0?.value || '99.9%'}
        </span>
        <span className="font-sans-main text-[10px] text-[#F5F5F5] block">
          {metric0?.label || 'Performance'}
        </span>
      </div>

      <div className="p-2.5 rounded-xl bg-[#141414] border border-white/10">
        <svg viewBox="0 0 160 45" className="w-full h-11">
          <path
            d="M 0 36 Q 30 24, 60 28 T 110 14 T 160 8"
            fill="none"
            stroke={accent}
            strokeWidth="2"
          />
          <circle cx="160" cy="8" r="3" fill={accent} />
        </svg>
      </div>

      <div className="p-2.5 rounded-xl bg-[#171717] border border-white/10 flex items-center justify-between">
        <span className="font-mono-code text-[9px] text-[#999999]">{metric1?.label || 'STATUS'}</span>
        <span className="font-mono-code text-[10px] font-bold" style={{ color: accent }}>
          {metric1?.value || 'ACTIVE'}
        </span>
      </div>
    </div>
  );
}
