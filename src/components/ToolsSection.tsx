import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/sound';

interface Tool {
  name: string;
  category: string;
  experience: string;
  usage: string;
  color: string;
  icon: string; // SVG path or type
}

export const ToolsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const categories = [
    { id: 'all', label: 'All Tools (10)' },
    { id: 'ui', label: '1. UI/UX & Product Design' },
    { id: 'visual', label: '2. Visual & Graphic Design' },
    { id: 'motion', label: '3. Motion & Interaction' },
    { id: 'dev', label: '4. Development & Prototyping' },
  ];

  const tools: Tool[] = [
    // 1. UI/UX & Product Design
    {
      name: 'Figma',
      category: 'ui',
      experience: 'Daily Driver (2+ Years)',
      usage: 'Design Systems, Tokens, Auto-layout, Variants & Complex Wireframing',
      color: '#F24E1E',
      icon: 'figma',
    },
    {
      name: 'Framer',
      category: 'ui',
      experience: 'Advanced Specialist',
      usage: 'Interactive Web Experiences, Physics-Based Prototyping & Live CMS Sites',
      color: '#0055FF',
      icon: 'framer',
    },
    {
      name: 'Webflow',
      category: 'ui',
      experience: 'Production Prototyping',
      usage: 'Semantic HTML/CSS Architecture, Micro-interactions & CMS Architecture',
      color: '#146EF5',
      icon: 'webflow',
    },

    // 2. Visual & Graphic Design
    {
      name: 'Adobe Photoshop',
      category: 'visual',
      experience: 'Advanced (3+ Years)',
      usage: 'Raster Editing, UI Mockup Compositing, Texture Generation & Retouching',
      color: '#31A8FF',
      icon: 'photoshop',
    },
    {
      name: 'Adobe Illustrator',
      category: 'visual',
      experience: 'Master Level',
      usage: 'Vector Iconography, Bespoke Brand Marks, Grid Systems & SVG Export',
      color: '#FF9A00',
      icon: 'illustrator',
    },
    {
      name: 'Blender',
      category: 'visual',
      experience: 'Advanced 3D',
      usage: 'Procedural 3D Modeling, Hard-Surface Renders & WebGL Asset Pipeline',
      color: '#EA7600',
      icon: 'blender',
    },

    // 3. Motion & Interaction
    {
      name: 'Adobe After Effects',
      category: 'motion',
      experience: 'Senior Choreographer',
      usage: 'UI Motion Choreography, Kinetic Typography, Lottie JSON Animations',
      color: '#9999FF',
      icon: 'aftereffects',
    },
    {
      name: 'Adobe Premiere Pro',
      category: 'motion',
      experience: 'Professional Editor',
      usage: 'Product Showreel Production, Case Study Videos & Motion Pacing',
      color: '#9999FF',
      icon: 'premiere',
    },

    // 4. Development & Prototyping
    {
      name: 'HTML & CSS',
      category: 'dev',
      experience: 'Semantic Master',
      usage: 'Modern Flexbox, CSS Grid, Container Queries & WCAG AAA Accessibility',
      color: '#E34F26',
      icon: 'htmlcss',
    },
    {
      name: 'JavaScript / TypeScript',
      category: 'dev',
      experience: 'Creative Technologist',
      usage: 'DOM Interactions, Canvas API, Three.js, React Hooks & Tailwind',
      color: '#F7DF1E',
      icon: 'javascript',
    },
  ];

  const filteredTools =
    activeCategory === 'all'
      ? tools
      : tools.filter((t) => t.category === activeCategory);

  const renderToolIcon = (icon: string, _color: string) => {
    switch (icon) {
      case 'figma':
        return (
          <svg viewBox="0 0 38 57" className="w-6 h-6">
            <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE" />
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
          </svg>
        );
      case 'framer':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
          </svg>
        );
      case 'webflow':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#146EF5">
            <path d="M17.472 6.883l-3.235 9.771-3.235-9.771H7.834L4 17.117h3.197l1.79-5.753 2.822 8.441h2.766l2.842-8.441 1.77 5.753h3.213L18.57 6.883z" />
          </svg>
        );
      case 'photoshop':
        return (
          <div className="w-7 h-7 rounded bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center font-bold text-xs text-[#31A8FF]">
            Ps
          </div>
        );
      case 'illustrator':
        return (
          <div className="w-7 h-7 rounded bg-[#330000] border border-[#FF9A00]/40 flex items-center justify-center font-bold text-xs text-[#FF9A00]">
            Ai
          </div>
        );
      case 'aftereffects':
        return (
          <div className="w-7 h-7 rounded bg-[#00005B] border border-[#9999FF]/40 flex items-center justify-center font-bold text-xs text-[#9999FF]">
            Ae
          </div>
        );
      case 'premiere':
        return (
          <div className="w-7 h-7 rounded bg-[#00005B] border border-[#EA77FF]/40 flex items-center justify-center font-bold text-xs text-[#EA77FF]">
            Pr
          </div>
        );
      case 'blender':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#EA7600">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        );
      case 'htmlcss':
        return (
          <div className="w-7 h-7 rounded bg-[#251b14] border border-[#E34F26]/40 flex items-center justify-center font-bold text-xs text-[#E34F26]">
            &lt;/&gt;
          </div>
        );
      default:
        return (
          <div className="w-7 h-7 rounded bg-[#252312] border border-[#F7DF1E]/40 flex items-center justify-center font-bold text-xs text-[#F7DF1E]">
            JS
          </div>
        );
    }
  };

  return (
    <section
      id="tools"
      className="relative py-24 lg:py-32 bg-[#0E0E0E] bg-noise bg-grid-pattern text-[#F5F3EF] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93] mb-4">
            <span className="text-[#C5FF45]">04 //</span>
            <span>PROFICIENCY &amp; WORKFLOW</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-[#F5F3EF]">
            MY CREATIVE TOOLKIT
          </h2>
          <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-2xl mt-3">
            The tools I use to transform ideas into meaningful experiences.
          </p>
        </div>

        {/* Category Tabs: Positioned directly under the title in a horizontal row */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-2 p-1.5 bg-[#161616] rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playHover();
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5FF45] text-[#101010] font-bold shadow-sm'
                    : 'text-[#8E8E93] hover:text-[#F5F3EF] hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Modern Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onMouseEnter={() => {
                soundFx.playHover();
                setSelectedTool(tool);
              }}
              onClick={() => {
                soundFx.playClick();
                setSelectedTool(tool);
              }}
              className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF45]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:bg-[#181818]"
            >
              <div>
                {/* Tool Icon + Proficiency Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {renderToolIcon(tool.icon, tool.color)}
                  </div>
                  <span className="font-mono-code text-[10px] text-[#C5FF45] bg-[#C5FF45]/10 px-2.5 py-1 rounded-full border border-[#C5FF45]/20">
                    {tool.experience}
                  </span>
                </div>

                {/* Name */}
                <h4 className="font-display font-bold text-lg text-[#F5F3EF] mb-2 group-hover:text-[#C5FF45] transition-colors">
                  {tool.name}
                </h4>

                {/* Primary Workflow */}
                <p className="font-sans-main text-xs text-[#8E8E93] leading-relaxed">
                  {tool.usage}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Workflow Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono-code text-xs text-[#8E8E93]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5FF45] animate-pulse-subtle" />
            <span className="text-[#F5F3EF] font-bold">
              {selectedTool
                ? `ACTIVE INSPECTION: ${selectedTool.name.toUpperCase()} • ${selectedTool.experience.toUpperCase()}`
                : 'ZERO CODE-DESIGN HANDOFF FRICTION'}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>FIGMA TO REACT TOKENS</span>
            <span className="text-white/20">→</span>
            <span>GSAP MOTION CURVES</span>
            <span className="text-white/20">→</span>
            <span>PRODUCTION COMPONENT TESTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
