import React from 'react';
import type { ProjectDetail } from '../data/projectsData';
import { ProjectMockup } from './ProjectMockup';

export interface MarqueeThumbnailItem {
  key: string;
  project: ProjectDetail;
  variant: 'primary' | 'editorial' | 'tokens' | 'wireframe';
}

interface MarqueeRowProps {
  items: MarqueeThumbnailItem[];
  direction: 'left' | 'right';
  speedSeconds: number;
  activeProjectId: string;
  isPaused: boolean;
  onSelectProject: (project: ProjectDetail) => void;
}

const isRealImageSrc = (src?: string): boolean => {
  if (!src) return false;
  return src.startsWith('http') || src.startsWith('/') || src.startsWith('data:');
};

/**
 * Reusable horizontal infinite marquee row for background project thumbnails.
 * Uses GPU-accelerated CSS transforms and seamless duplicate rendering.
 */
export const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction,
  speedSeconds,
  activeProjectId,
  isPaused,
  onSelectProject,
}) => {
  const trackClass = direction === 'left' ? 'marquee-track-left' : 'marquee-track-right';

  const renderThumbList = (prefix: string, ariaHidden?: boolean) => (
    <div
      className="flex items-center gap-3 sm:gap-4 lg:gap-5 pr-3 sm:pr-4 lg:pr-5"
      aria-hidden={ariaHidden}
    >
      {items.map((item) => {
        const isActive = item.project.id === activeProjectId;
        const shortName = item.project.title.split('—')[0].trim();

        return (
          <button
            key={`${prefix}-${item.key}`}
            type="button"
            onClick={() => onSelectProject(item.project)}
            tabIndex={ariaHidden ? -1 : 0}
            aria-label={`Preview ${shortName}`}
            className={`group relative w-[168px] h-[110px] sm:w-[224px] sm:h-[144px] lg:w-[272px] lg:h-[174px] rounded-xl sm:rounded-2xl overflow-hidden border bg-[#111111] shrink-0 text-left cursor-pointer transition-all duration-500 ${
              isActive
                ? 'opacity-80 blur-0 border-[#C5FF45]/45 shadow-[0_0_24px_rgba(197,255,69,0.14)]'
                : 'opacity-40 blur-[1.5px] border-white/10 hover:opacity-85 hover:blur-0 hover:border-white/25'
            }`}
          >
            {/* Thumbnail Artwork */}
            <div className="w-full h-full pointer-events-none overflow-hidden">
              {renderThumbnailVisual(item)}
            </div>

            {/* Dark Atmospheric Overlay to blend into #0A0A0A */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                isActive ? 'bg-[#0A0A0A]/25' : 'bg-[#0A0A0A]/55 group-hover:bg-[#0A0A0A]/25'
              }`}
            />

            {/* Subtle Bottom Project Label */}
            <div className="absolute inset-x-0 bottom-0 px-2.5 py-1.5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between">
              <span className="font-mono-code text-[9px] sm:text-[10px] text-[#F5F5F5] truncate">
                {shortName}
              </span>
              <span
                className={`font-mono-code text-[8px] uppercase px-1.5 py-0.5 rounded ${
                  isActive
                    ? 'bg-[#C5FF45] text-[#0A0A0A] font-bold'
                    : 'bg-white/10 text-[#999999]'
                }`}
              >
                {item.project.platformType}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`${trackClass} ${isPaused ? 'is-paused' : ''}`}
        style={{ '--marquee-speed': `${speedSeconds}s` } as React.CSSProperties}
      >
        {renderThumbList('set1')}
        {renderThumbList('set2', true)}
      </div>
    </div>
  );
};

/**
 * Renders scaled high-fidelity visual artwork inside each background thumbnail.
 */
function renderThumbnailVisual(item: MarqueeThumbnailItem) {
  const { project, variant } = item;
  const shortName = project.title.split('—')[0].trim().toUpperCase();

  if (variant === 'primary' && isRealImageSrc(project.previewImage)) {
    return (
      <img
        src={project.previewImage}
        alt={shortName}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    );
  }

  if (variant === 'editorial') {
    return (
      <div className="relative w-full h-full p-3.5 sm:p-4 flex flex-col justify-between bg-gradient-to-br from-[#171717] via-[#111111] to-[#0A0A0A]">
        <div
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-30"
          style={{ backgroundColor: project.accentColor }}
        />
        <span className="font-mono-code text-[8px] sm:text-[9px] text-[#999999] relative z-10">
          {project.number} // {project.category.toUpperCase()}
        </span>
        <div className="relative z-10">
          <div className="font-display font-black text-base sm:text-xl tracking-tight text-[#F5F5F5] leading-none truncate">
            {shortName}
          </div>
          <div
            className="font-mono-code text-[9px] sm:text-[10px] mt-1 font-bold"
            style={{ color: project.accentColor }}
          >
            {project.impactMetrics[0]?.value} {project.impactMetrics[0]?.label}
          </div>
        </div>
      </div>
    );
  }

  const mockupKind =
    variant === 'tokens'
      ? 'tokens'
      : variant === 'wireframe'
        ? 'wireframe'
        : project.mockupType;

  return (
    <div className="w-[200%] h-[200%] origin-top-left scale-50">
      <ProjectMockup type={mockupKind} accentColor={project.accentColor} />
    </div>
  );
}
