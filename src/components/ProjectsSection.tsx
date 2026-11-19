import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { ProjectDetail } from '../data/projectsData';
import { allProjects } from '../data/projectsData';
import { ProjectMockup } from './ProjectMockup';
import { soundFx } from '../utils/sound';

interface ProjectsSectionProps {
  onSelectProject?: (project: ProjectDetail) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: ProjectDetail) => {
    soundFx.playClick();
    navigate(`/projects/${project.slug}`);
  };

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-36 bg-[#08090B] bg-noise bg-grid-pattern text-[#F5F3EF] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93] mb-3">
            <span className="text-[#C5FF45]">03 //</span>
            <span>FEATURED SHOWCASE</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3EF]">
            SELECTED WORKS
          </h2>
        </div>

        {/* 3-Column Desktop, 2-Column Tablet, 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {allProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Large Portrait-Oriented Project Thumbnail */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#111316] border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
                </div>

                {/* Subtle Hover Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Only Project Name Directly Below Image */}
              <div className="mt-5">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F3EF] group-hover:text-[#C5FF45] transition-colors duration-300 tracking-tight leading-snug">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
