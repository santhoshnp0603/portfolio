import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] bg-noise bg-grid-pattern text-[#8E8E93] border-t border-white/10 pt-16 pb-12 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#141414] border border-white/15 flex items-center justify-center font-display font-black text-sm text-[#C5FF45]">
              SK
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#F5F3EF] block">
                SANTHOSH KUMAR
              </span>
              <span className="text-[11px] text-[#8E8E93]">
                Product Designer
              </span>
            </div>
          </div>

          {/* Magnetic Back to top button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onBackToTop();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#161616] hover:bg-[#C5FF45] hover:text-[#101010] text-[#F5F3EF] border border-white/15 transition-all duration-300 group cursor-pointer self-start sm:self-auto"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Middle Tier: Live System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-white/10 text-[11px]">
          <div>
            <span className="text-white/40 block mb-1">LOCATION</span>
            <span className="text-[#F5F3EF]">NEW DELHI &amp; BANGALORE, IN</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1">LOCAL TIME</span>
            <span className="text-[#C5FF45]">GMT +5:30 (IST)</span>
          </div>
          <div>
            <span className="text-white/40 block mb-1">STATUS</span>
            <span className="text-[#F5F3EF] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C5FF45] inline-block animate-pulse-subtle" />
              ACCEPTING NEW PROJECTS
            </span>
          </div>
          <div>
            <span className="text-white/40 block mb-1">COLOPHON</span>
            <span className="text-[#F5F3EF]">REACT 19 • LENIS • TAILWIND V4</span>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Ethos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {currentYear} Santhosh Kumar. All Rights Reserved. Engineered with precision &amp; intention.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/santhosh-kumar-b5a685441/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5FF45] transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.behance.net/santhoshkumar386"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5FF45] transition-colors"
            >
              BEHANCE
            </a>
            <a
              href="https://dribbble.com/Santhosh_Designs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5FF45] transition-colors"
            >
              DRIBBBLE
            </a>
            <a
              href="https://www.instagram.com/santhosh___0607"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5FF45] transition-colors"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
