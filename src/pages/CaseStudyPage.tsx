import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  X,
  Maximize2,
  Quote,
} from 'lucide-react';
import { getProjectBySlug, allProjects } from '../data/projectsData';
import type { GalleryItem } from '../data/projectsData';
import { ProjectMockup } from '../components/ProjectMockup';
import { soundFx } from '../utils/sound';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const project = slug ? getProjectBySlug(slug) : undefined;

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Track scroll progress for reading indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Safe redirect if invalid slug
  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  // Previous and Next project calculation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id || p.slug === project.slug);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const handleNavigateToProject = (targetSlug: string) => {
    soundFx.playClick();
    navigate(`/projects/${targetSlug}`);
  };

  const handleBackToProjects = () => {
    soundFx.playClick();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Tool icon renderer with bespoke vectors
  const renderToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'figma':
        return (
          <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
            <path d="M0 47.5C0 42.2533 4.2467 38 9.5 38H19V47.5C19 52.7467 14.7533 57 9.5 57C4.2467 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
            <path d="M19 0V19H28.5C33.7467 19 38 14.7533 38 9.5C38 4.2467 33.7467 0 28.5 0H19Z" fill="#FF7262" />
            <path d="M0 9.5C0 14.7533 4.2467 19 9.5 19H19V0H9.5C4.2467 0 0 4.2467 0 9.5Z" fill="#F24E1E" />
            <path d="M0 28.5C0 33.7467 4.2467 38 9.5 38H19V19H9.5C4.2467 19 0 23.2533 0 28.5Z" fill="#A259FF" />
          </svg>
        );
      case 'illustrator':
        return (
          <div className="w-5 h-5 rounded bg-[#330000] border border-[#FF9A00]/50 flex items-center justify-center font-display font-black text-[9px] text-[#FF9A00]">
            Ai
          </div>
        );
      case 'photoshop':
        return (
          <div className="w-5 h-5 rounded bg-[#001E36] border border-[#31A8FF]/50 flex items-center justify-center font-display font-black text-[9px] text-[#31A8FF]">
            Ps
          </div>
        );
      case 'aftereffects':
        return (
          <div className="w-5 h-5 rounded bg-[#00005B] border border-[#9999FF]/50 flex items-center justify-center font-display font-black text-[9px] text-[#9999FF]">
            Ae
          </div>
        );
      case 'framer':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
          </svg>
        );
      default:
        return <Layers className="w-5 h-5 text-[#C5FF45]" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#101010] bg-noise bg-grid-pattern text-[#F5F3EF] selection:bg-[#C5FF45] selection:text-[#101010]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: MINIMAL CASE STUDY NAVIGATION BAR
          ───────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#101010]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-[#C5FF45] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Left: Personal Monogram & Name */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                soundFx.playClick();
                navigate('/');
              }}
              className="group flex items-center gap-3 cursor-pointer"
            >
              <span className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/15 flex items-center justify-center font-display font-extrabold text-sm text-[#F5F3EF] group-hover:border-[#C5FF45] group-hover:text-[#C5FF45] transition-colors">
                SK
              </span>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-display font-bold text-xs tracking-wider text-[#F5F3EF]">
                  SANTHOSH KUMAR
                </span>
                <span className="font-mono-code text-[10px] text-[#8E8E93]">
                  CASE STUDY // {project.number}
                </span>
              </div>
            </button>

            {/* Back to Projects Pill */}
            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono-code text-[#8E8E93] hover:text-[#C5FF45] hover:border-[#C5FF45]/40 transition-all cursor-pointer ml-2 sm:ml-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>
          </div>

          {/* Right: Prev & Next Project Nav + Reading Indicator */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 font-mono-code text-xs text-[#8E8E93] pr-3 border-r border-white/10">
              <span className="text-[#C5FF45] font-bold">{Math.round(scrollProgress)}%</span>
              <span>READ</span>
            </div>

            {/* Prev Project */}
            <button
              onClick={() => handleNavigateToProject(prevProject.slug)}
              title={`Previous: ${prevProject.title}`}
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 text-xs font-mono-code text-[#8E8E93] hover:text-[#F5F3EF] hover:border-white/25 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden lg:inline text-[11px] truncate max-w-[120px]">
                {prevProject.number} Prev
              </span>
            </button>

            {/* Next Project */}
            <button
              onClick={() => handleNavigateToProject(nextProject.slug)}
              title={`Next: ${nextProject.title}`}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5FF45]/10 border border-[#C5FF45]/30 text-xs font-mono-code text-[#C5FF45] hover:bg-[#C5FF45] hover:text-[#101010] transition-all cursor-pointer"
            >
              <span className="hidden lg:inline text-[11px] truncate max-w-[120px] font-bold">
                {nextProject.number} Next
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: PROJECT HERO / BANNER IMAGE (CINEMATIC)
          ───────────────────────────────────────────────────────────── */}
      <header className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-white/10 bg-[#0E0E0E]">
        {/* Dynamic Ambient Color Halo */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Metadata Micro-Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181818] border border-white/15 font-mono-code text-xs text-[#C5FF45] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF45] animate-pulse-subtle" />
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#181818] border border-white/10 font-mono-code text-xs text-[#8E8E93]">
              YEAR: {project.year}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#181818] border border-white/10 font-mono-code text-xs text-[#8E8E93]">
              ROLE: {project.role}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#181818] border border-white/10 font-mono-code text-xs text-[#8E8E93]">
              TIMELINE: {project.timeline}
            </span>
          </motion.div>

          {/* Project Display Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-[#F5F3EF] mb-8"
          >
            {project.title}
          </motion.h1>

          {/* Project Intro Lead Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans-main text-lg sm:text-2xl text-[#8E8E93] max-w-4xl leading-relaxed mb-12"
          >
            {project.heroHeadline}
          </motion.p>

          {/* Visual Dominant Showcase Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121212] shadow-[0_20px_80px_rgba(0,0,0,0.8)] aspect-[16/10] sm:aspect-[16/9] max-h-[640px] flex items-center justify-center group"
          >
            <div className="w-full h-full">
              <ProjectMockup type={project.mockupType} accentColor={project.accentColor} />
            </div>

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: PROJECT OVERVIEW (DESCRIPTION, DETAILS, TOOLS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 7 Cols: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 font-mono-code text-xs text-[#C5FF45] mb-3">
                  <span>03 //</span>
                  <span>PROJECT OVERVIEW</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F5F3EF] tracking-tight mb-6">
                  Executive Brief &amp; Objective
                </h2>
                <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] leading-relaxed">
                  {project.overviewDescription}
                </p>
              </div>

              {/* Target Audience & Overall Objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="p-5 rounded-2xl bg-[#141414] border border-white/10">
                  <span className="font-mono-code text-xs text-[#C5FF45] font-bold block mb-2 uppercase">
                    TARGET AUDIENCE
                  </span>
                  <p className="font-sans-main text-sm text-[#F5F3EF] leading-relaxed">
                    {project.targetAudience}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#141414] border border-white/10">
                  <span className="font-mono-code text-xs text-[#C5FF45] font-bold block mb-2 uppercase">
                    OVERALL OBJECTIVE
                  </span>
                  <p className="font-sans-main text-sm text-[#F5F3EF] leading-relaxed">
                    {project.overallObjective}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Structured Spec Table & Tools */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              {/* Project Specs Table */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
                <span className="font-mono-code text-xs text-[#8E8E93] block mb-4 border-b border-white/10 pb-3">
                  PROJECT SPECIFICATIONS
                </span>

                <div className="grid grid-cols-2 gap-4 font-mono-code text-xs">
                  <div>
                    <span className="text-[#8E8E93] block text-[11px] mb-1">PROJECT NAME</span>
                    <span className="text-[#F5F3EF] font-bold">{project.title.split('—')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8E93] block text-[11px] mb-1">INDUSTRY</span>
                    <span className="text-[#F5F3EF] font-bold">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8E93] block text-[11px] mb-1">MY ROLE</span>
                    <span className="text-[#F5F3EF] font-bold">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8E93] block text-[11px] mb-1">PROJECT TYPE</span>
                    <span className="text-[#F5F3EF] font-bold">{project.projectType}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8E93] block text-[11px] mb-1">TIMELINE</span>
                    <span className="text-[#C5FF45] font-bold">{project.timeline}</span>
                  </div>
                  <div>
                    <span className="text-[#8E8E93] block text-[11px] mb-1">TEAM SIZE</span>
                    <span className="text-[#F5F3EF] font-bold">{project.teamSize}</span>
                  </div>
                </div>

                {/* Deliverables tags */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[#8E8E93] block text-[11px] font-mono-code mb-2">
                    CORE DELIVERABLES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#1E1E1E] border border-white/10 font-mono-code text-[11px] text-[#F5F3EF]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools Used Section */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10">
                <span className="font-mono-code text-xs text-[#8E8E93] block mb-4 border-b border-white/10 pb-3">
                  TOOLS &amp; CREATIVE TECHNOLOGIES
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.toolsUsed.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-[#C5FF45]/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center shrink-0">
                        {renderToolIcon(tool.icon)}
                      </div>
                      <div className="overflow-hidden">
                        <span className="font-display font-bold text-xs text-[#F5F3EF] block truncate">
                          {tool.name}
                        </span>
                        <span className="font-mono-code text-[10px] text-[#8E8E93] block truncate">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: THE CHALLENGE / PROBLEMS
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#FF5F56] mb-3">
              <span>04 //</span>
              <span>IDENTIFIED FRICTION &amp; SYSTEM BOTTLENECKS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F3EF] tracking-tight">
              THE CHALLENGE
            </h2>
            <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-2xl mt-3">
              Unpacking root-cause usability friction and cognitive hurdles before wireframing began.
            </p>
          </div>

          {/* Alternating Problem Blocks */}
          <div className="space-y-12 lg:space-y-16">
            {project.challenges.map((prob, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl bg-[#131313] border border-white/10 ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#FF5F56]/15 border border-[#FF5F56]/40 text-[#FF5F56] font-mono-code text-xs font-bold flex items-center justify-center">
                        {prob.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono-code text-[11px] text-[#8E8E93] uppercase">
                        {prob.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F3EF] mb-4 leading-snug">
                      {prob.title}
                    </h3>

                    <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] leading-relaxed">
                      {prob.explanation}
                    </p>
                  </div>

                  {/* Supporting Visual / Metric Column */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/10 space-y-3">
                      <span className="font-mono-code text-[11px] text-[#8E8E93] block">
                        AUDIT DATA POINT
                      </span>
                      <h4 className="font-display font-bold text-lg text-[#F5F3EF]">
                        {prob.visualTitle}
                      </h4>
                      <div className="p-4 rounded-xl bg-[#101010] border border-[#FF5F56]/30 font-mono-code text-sm text-[#FF5F56] font-bold">
                        {prob.visualMetrics}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: THE SOLUTION (PROBLEM VS SOLUTION SYNTHESIS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#C5FF45] mb-3">
              <span>05 //</span>
              <span>METHODOLOGY &amp; ARCHITECTURAL INTERVENTIONS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F3EF] tracking-tight">
              THE SOLUTION
            </h2>
            <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-2xl mt-3">
              How design strategy, cognitive ergonomics, and systems engineering converged to solve each problem.
            </p>
          </div>

          {/* Editorial Solution Blocks */}
          <div className="space-y-16">
            {project.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/10 space-y-8"
              >
                {/* Solution Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#C5FF45] text-[#101010] font-mono-code font-bold text-sm flex items-center justify-center">
                      {sol.number}
                    </span>
                    <div>
                      <span className="font-mono-code text-xs text-[#C5FF45] block">
                        ARCHITECTURAL STRATEGY
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F3EF]">
                        {sol.title}
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono-code text-xs text-[#8E8E93]">
                    EXECUTION VERIFIED
                  </span>
                </div>

                {/* Multi-angle Solution Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] block mb-2 font-bold uppercase">
                      1. Design Strategy
                    </span>
                    <p className="font-sans-main text-sm text-[#8E8E93] leading-relaxed">
                      {sol.strategy}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] block mb-2 font-bold uppercase">
                      2. UX Improvements
                    </span>
                    <p className="font-sans-main text-sm text-[#8E8E93] leading-relaxed">
                      {sol.uxImprovements}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] block mb-2 font-bold uppercase">
                      3. Information Architecture
                    </span>
                    <p className="font-sans-main text-sm text-[#8E8E93] leading-relaxed">
                      {sol.architecture}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] block mb-2 font-bold uppercase">
                      4. Wireframing Approach
                    </span>
                    <p className="font-sans-main text-sm text-[#8E8E93] leading-relaxed">
                      {sol.wireframing}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] block mb-2 font-bold uppercase">
                      5. Visual Design Decisions
                    </span>
                    <p className="font-sans-main text-sm text-[#8E8E93] leading-relaxed">
                      {sol.visualDecisions}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-white/10">
                    <span className="font-mono-code text-xs text-[#C5FF45] block mb-2 font-bold uppercase">
                      6. Interaction &amp; Handoff
                    </span>
                    <p className="font-sans-main text-sm text-[#8E8E93] leading-relaxed">
                      {sol.interaction}
                    </p>
                  </div>
                </div>

                {/* Engineering Implementation Note */}
                <div className="p-4 rounded-xl bg-[#101010] border border-white/10 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#C5FF45] shrink-0 mt-0.5" />
                  <p className="font-mono-code text-xs text-[#8E8E93]">
                    <strong className="text-[#F5F3EF]">PRODUCTION BRIDGE: </strong>
                    {sol.implementation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: DESIGN PROCESS ("FROM IDEA TO EXPERIENCE")
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mb-16">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#C5FF45] mb-3">
              <span>06 //</span>
              <span>WORKFLOW LIFECYCLE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F3EF] tracking-tight">
              FROM IDEA TO EXPERIENCE
            </h2>
            <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-2xl mt-3">
              A disciplined 7-phase product design methodology from initial telemetry discovery to token handoff.
            </p>
          </div>

          {/* Process Timeline Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.processSteps.map((pStep, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col justify-between h-full group hover:border-[#C5FF45]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-code font-bold text-xs text-[#C5FF45] bg-[#C5FF45]/10 px-2.5 py-1 rounded-md">
                      STEP {pStep.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#C5FF45] transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#F5F3EF] mb-2">
                    {pStep.title}
                  </h3>

                  <p className="font-sans-main text-xs text-[#8E8E93] leading-relaxed mb-6">
                    {pStep.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono-code text-[11px]">
                  <span className="text-[#8E8E93] block text-[10px]">KEY DELIVERABLE</span>
                  <span className="text-[#F5F3EF] font-bold">{pStep.keyDeliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 07: PROJECT GALLERY / IMAGES ("A CLOSER LOOK")
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#101010] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#C5FF45] mb-3">
              <span>07 //</span>
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F3EF] tracking-tight">
              A CLOSER LOOK
            </h2>
            <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-2xl mt-3">
              Interactive high-fidelity screens, atomic design systems, and responsive viewport states. Click any frame to inspect in full-resolution lightbox.
            </p>
          </div>

          {/* Asymmetric Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {project.gallery.map((item, idx) => {
              const isFull = item.type === 'full-width';
              const colSpan = isFull ? 'lg:col-span-12' : 'lg:col-span-6';

              return (
                <div
                  key={item.id || idx}
                  className={`${colSpan} group cursor-pointer`}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveLightbox(item);
                  }}
                >
                  <div className="relative rounded-3xl bg-[#141414] border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#C5FF45]/60 hover:shadow-[0_0_50px_rgba(197,255,69,0.12)]">
                    {/* Visual Viewport */}
                    <div className="relative overflow-hidden bg-[#0C0C0C] aspect-[16/10] min-h-[300px] flex items-center justify-center">
                      <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                        <ProjectMockup type={item.mockupKind} accentColor={project.accentColor} />
                      </div>

                      {/* Click to expand lightbox hover badge */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C5FF45] text-[#101010] font-display font-bold text-xs uppercase tracking-wider shadow-2xl">
                          <Maximize2 className="w-4 h-4" />
                          <span>EXPAND IN LIGHTBOX</span>
                        </div>
                      </div>
                    </div>

                    {/* Gallery Caption Bar */}
                    <div className="p-6 border-t border-white/10 bg-[#141414]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-bold text-lg text-[#F5F3EF] group-hover:text-[#C5FF45] transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-mono-code text-[11px] text-[#8E8E93] uppercase">
                          [{item.type}]
                        </span>
                      </div>
                      <p className="font-sans-main text-xs sm:text-sm text-[#8E8E93] leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 08: FINAL OUTCOME ("THE IMPACT")
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#C5FF45] mb-3">
              <span>08 //</span>
              <span>VERIFIED PERFORMANCE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F3EF] tracking-tight">
              THE IMPACT
            </h2>
            <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-2xl mt-3">
              Measurable outcomes achieved post-launch across enterprise squads and production environments.
            </p>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {project.impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#C5FF45] block mb-2 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="font-display font-bold text-base text-[#F5F3EF] block mb-3">
                    {metric.label}
                  </span>
                </div>
                <p className="font-sans-main text-xs text-[#8E8E93] leading-relaxed pt-4 border-t border-white/10">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Achievements & Testimonial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 6: Key Project Achievements */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="font-mono-code text-xs text-[#C5FF45] font-bold block mb-4 uppercase">
                  KEY RECOGNITION &amp; MILESTONES
                </span>
                <div className="space-y-4">
                  {project.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C5FF45] shrink-0 mt-0.5" />
                      <p className="font-sans-main text-sm sm:text-base text-[#F5F3EF] leading-relaxed">
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6: Stakeholder Testimonial */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#171717] border border-white/10 flex flex-col justify-between relative overflow-hidden">
              <Quote className="w-16 h-16 text-white/5 absolute top-6 right-6 pointer-events-none" />
              <div>
                <span className="font-mono-code text-xs text-[#C5FF45] font-bold block mb-4 uppercase">
                  STAKEHOLDER ENDORSEMENT
                </span>
                <p className="font-sans-main italic text-lg sm:text-xl text-[#F5F3EF] leading-relaxed mb-6">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#202020] border border-white/15 flex items-center justify-center font-display font-bold text-sm text-[#C5FF45]">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div>
                  <span className="font-display font-bold text-sm text-[#F5F3EF] block">
                    {project.testimonial.author}
                  </span>
                  <span className="font-mono-code text-xs text-[#8E8E93] block">
                    {project.testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 09: NEXT PROJECT NAVIGATION (LARGE CTA PREVIEW)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-[#101010] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono-code text-xs text-[#C5FF45] block mb-2">
                09 // CONTINUE DISCOVERY
              </span>
              <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F5F3EF] tracking-tight">
                UP NEXT
              </h2>
            </div>

            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 text-sm font-mono-code text-[#8E8E93] hover:text-[#C5FF45] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Works</span>
            </button>
          </div>

          {/* Large Next Project Preview Card */}
          <div
            onClick={() => handleNavigateToProject(nextProject.slug)}
            className="group relative rounded-3xl bg-[#141414] border border-white/15 overflow-hidden transition-all duration-500 hover:border-[#C5FF45] hover:shadow-[0_20px_80px_rgba(197,255,69,0.15)] cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Column: Info & Button */}
              <div className="lg:col-span-6 p-8 sm:p-14 space-y-6">
                <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93]">
                  <span className="px-2.5 py-1 rounded bg-[#C5FF45] text-[#101010] font-bold">
                    {nextProject.number}
                  </span>
                  <span className="text-[#C5FF45] font-semibold">{nextProject.category}</span>
                  <span>• {nextProject.year}</span>
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F3EF] group-hover:text-[#C5FF45] transition-colors leading-tight">
                  {nextProject.title}
                </h3>

                <p className="font-sans-main text-base text-[#8E8E93] leading-relaxed">
                  {nextProject.shortDesc}
                </p>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#C5FF45] text-[#101010] font-display font-bold text-xs uppercase tracking-wider group-hover:shadow-[0_0_30px_rgba(197,255,69,0.4)] transition-all">
                    <span>EXPLORE PROJECT</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Mockup Viewport */}
              <div className="lg:col-span-6 aspect-[16/10] sm:aspect-[16/9] min-h-[300px] bg-[#0C0C0C] flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <ProjectMockup type={nextProject.mockupType} accentColor={nextProject.accentColor} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: MINIMAL CASE STUDY FOOTER
          ───────────────────────────────────────────────────────────── */}
      <footer className="py-12 bg-[#0C0C0C] border-t border-white/10 text-xs font-mono-code text-[#8E8E93]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#181818] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-[#C5FF45]">
              SK
            </span>
            <span className="text-[#F5F3EF] font-bold">SANTHOSH KUMAR</span>
            <span>• UI/UX DESIGNER</span>
          </div>

          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@santhoshkumar.design"
              className="text-[#F5F3EF] hover:text-[#C5FF45] transition-colors"
            >
              hello@santhoshkumar.design
            </a>
            <a
              href="https://linkedin.com/in/santhosh-kumar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5FF45] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://behance.net/santhoshkumar386"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5FF45] transition-colors flex items-center gap-1"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://dribbble.com/Santhosh_Designs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C5FF45] transition-colors flex items-center gap-1"
            >
              <span>Dribbble</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-[#8E8E93]/70">
            © 2026 Santhosh Kumar. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR GALLERY IMAGES
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between text-xs font-mono-code text-[#8E8E93] pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5FF45]" />
                <span className="text-[#F5F3EF] font-bold">{activeLightbox.title}</span>
                <span className="text-white/20">|</span>
                <span>{project.title}</span>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setActiveLightbox(null);
                }}
                className="w-10 h-10 rounded-full bg-[#181818] border border-white/15 flex items-center justify-center text-[#F5F3EF] hover:text-[#C5FF45] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Large Mockup */}
            <div className="flex-grow flex items-center justify-center my-4 overflow-hidden rounded-2xl border border-white/15 bg-[#121212] shadow-2xl max-w-5xl mx-auto w-full">
              <div className="w-full h-full min-h-[420px] sm:min-h-[540px]">
                <ProjectMockup type={activeLightbox.mockupKind} accentColor={project.accentColor} />
              </div>
            </div>

            {/* Lightbox Caption */}
            <div className="text-center max-w-2xl mx-auto pt-2">
              <p className="font-sans-main text-sm text-[#8E8E93]">
                {activeLightbox.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
