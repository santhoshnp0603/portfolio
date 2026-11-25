import React from 'react';
import { Lock, Maximize2 } from 'lucide-react';
import type { ProjectDetail } from '../data/projectsData';
import { ProjectMockup } from './ProjectMockup';

interface DesktopMockupProps {
  project: ProjectDetail;
  onClick?: () => void;
}

const isRealImageSrc = (src?: string): boolean => {
  if (!src) return false;
  return src.startsWith('http') || src.startsWith('/') || src.startsWith('data:');
};

/**
 * Realistic Desktop Browser Mockup for Web Design projects.
 * Enforces a consistent 16:10 desktop aspect ratio inside the central stage.
 */
export const DesktopMockup: React.FC<DesktopMockupProps> = ({ project, onClick }) => {
  const shortTitle = project.title.split('—')[0].trim();
  const displayUrl = project.browserUrl || `https://${project.slug}.design`;

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
      className="group relative w-full max-w-[720px] aspect-[16/10] rounded-2xl bg-[#171717] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
    >
      {/* Minimal Browser Toolbar */}
      <div className="h-9 sm:h-10 px-3.5 sm:px-4 bg-[#111111] border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
        {/* Window Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* Minimal URL Bar */}
        <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-[#0A0A0A] border border-white/10 font-mono-code text-[10px] sm:text-[11px] text-[#999999] truncate">
          <Lock className="w-2.5 h-2.5 text-[#C5FF45] shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* Platform Indicator */}
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono-code text-[9px] text-[#999999] tracking-wider uppercase shrink-0">
          WEB
        </span>
      </div>

      {/* Browser Viewport Content */}
      <div className="relative flex-1 w-full bg-[#0A0A0A] overflow-hidden">
        {isRealImageSrc(project.webScreenshot) ? (
          <img
            src={project.webScreenshot}
            alt={`${shortTitle} desktop web preview`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        ) : (
          <div className="w-full h-full">
            <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
          </div>
        )}

        {/* Subtle Hover Inspect Cue */}
        {onClick && (
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5FF45] text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-wider shadow-xl">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect {shortTitle}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
