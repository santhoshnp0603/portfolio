import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Award, Briefcase, GraduationCap } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-2 sm:p-6 md:p-10 print:p-0 print:bg-white">
        <div className="fixed inset-0 cursor-pointer print:hidden" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#141414] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-[#F5F3EF] print:border-none print:bg-white print:text-black print:rounded-none"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#161616]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#8E8E93]">
              <span className="w-2 h-2 rounded-full bg-[#C5FF45]" />
              <span>SANTHOSH KUMAR // OFFICIAL CURRICULUM VITAE (2Y EXP)</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#222] hover:bg-[#C5FF45] hover:text-[#101010] text-xs font-mono-code transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE PDF</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="w-8 h-8 rounded-full bg-[#202020] border border-white/15 flex items-center justify-center text-[#F5F3EF] hover:text-[#C5FF45] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-8 sm:p-12 space-y-10 max-h-[85vh] overflow-y-auto print:max-h-none print:p-8 print:text-black">
            {/* Top Identity Block */}
            <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 print:border-black/20">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-[#F5F3EF] tracking-tight print:text-black">
                  SANTHOSH KUMAR
                </h1>
                <p className="font-mono-code text-sm text-[#C5FF45] mt-1 print:text-black font-bold">
                  UI/UX Designer &amp; Creative Technologist (2 Years Experience)
                </p>
                <p className="font-sans-main text-xs sm:text-sm text-[#8E8E93] max-w-lg mt-2 print:text-gray-700">
                  Passionate product designer specializing in modern web interfaces, atomic design systems, and fluid micro-interactions with 2 years of proven industry impact.
                </p>
              </div>

              <div className="font-mono-code text-xs text-[#8E8E93] space-y-1 text-left sm:text-right print:text-gray-700">
                <div>hello@santhoshkumar.design</div>
                <div>+91 98712 34560</div>
                <div>Bengaluru &amp; New Delhi, India</div>
                <div className="text-[#C5FF45] print:text-black font-semibold">santhoshkumar.design</div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-mono-code text-xs text-[#C5FF45] font-bold uppercase tracking-widest mb-6 print:text-black flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>PROFESSIONAL WORK EXPERIENCE (2 YEARS)</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-display font-bold text-lg text-[#F5F3EF] print:text-black">
                      UI/UX &amp; Product Designer — HyperScale Systems
                    </h3>
                    <span className="font-mono-code text-xs text-[#8E8E93] print:text-gray-700">2024 — Present</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] mb-2 print:text-gray-600">Bengaluru, India (Hybrid)</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#8E8E93] space-y-1 print:text-gray-800">
                    <li>Architected an atomic Figma token system covering 160+ components, accelerating sprint delivery velocity by 2.8x.</li>
                    <li>Redesigned core telemetry and analytics screens, driving an average 24% increase in user task completion speed.</li>
                    <li>Collaborated closely with front-end engineers to implement pixel-perfect Tailwind CSS components and motion curves.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-display font-bold text-lg text-[#F5F3EF] print:text-black">
                      Associate UI/UX &amp; Interaction Designer — Kinetic Digital Global
                    </h3>
                    <span className="font-mono-code text-xs text-[#8E8E93] print:text-gray-700">2023 — 2024</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] mb-2 print:text-gray-600">Remote / India</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#8E8E93] space-y-1 print:text-gray-800">
                    <li>Designed end-to-end user flows for 6 mobile apps across healthcare, edtech, and modern fintech.</li>
                    <li>Created interactive high-fidelity prototypes in Framer and Figma, securing client stakeholder sign-offs in initial reviews.</li>
                    <li>Audited interface accessibility against WCAG 2.1 AA standards across contrast, tap target sizing, and keyboard navigation.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-display font-bold text-lg text-[#F5F3EF] print:text-black">
                      UI/UX Design Intern &amp; Freelance Designer — Studio Mono
                    </h3>
                    <span className="font-mono-code text-xs text-[#8E8E93] print:text-gray-700">2022 — 2023</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] mb-2 print:text-gray-600">India &amp; Remote</p>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-[#8E8E93] space-y-1 print:text-gray-800">
                    <li>Designed high-converting landing pages and Webflow prototypes with custom CSS and smooth scroll animations.</li>
                    <li>Conducted competitor UI benchmark studies and user interview syntheses for 4 0-to-1 startup incubations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 print:border-black/20">
              <div>
                <h2 className="font-mono-code text-xs text-[#C5FF45] font-bold uppercase tracking-widest mb-3 print:text-black">
                  CORE EXPERTISE
                </h2>
                <div className="flex flex-wrap gap-2 text-xs font-mono-code">
                  {[
                    'Design Systems & Tokens',
                    'Figma Auto-Layout & Variants',
                    'Mobile UX (iOS & Android)',
                    'Micro-interactions & Motion',
                    'User Research & Usability Audits',
                    'Information Architecture',
                    'WCAG 2.1 AA Accessibility',
                    'Front-End Collaboration',
                  ].map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-[#202020] print:bg-gray-200 print:text-black text-[#F5F3EF]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-mono-code text-xs text-[#C5FF45] font-bold uppercase tracking-widest mb-3 print:text-black">
                  SOFTWARE TOOLKIT
                </h2>
                <div className="flex flex-wrap gap-2 text-xs font-mono-code">
                  {[
                    'Figma (Daily Driver)',
                    'Framer (Interactive Prototyping)',
                    'Webflow (Responsive CMS)',
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Adobe After Effects',
                    'Blender 3D (Basic)',
                    'HTML5 / CSS3 Grid & Flexbox',
                    'JavaScript Basics & Tailwind',
                  ].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-[#202020] print:bg-gray-200 print:text-black text-[#F5F3EF]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Awards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 print:border-black/20">
              <div>
                <h2 className="font-mono-code text-xs text-[#C5FF45] font-bold uppercase tracking-widest mb-3 print:text-black flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION</span>
                </h2>
                <h3 className="font-display font-bold text-base text-[#F5F3EF] print:text-black">
                  Bachelor of Design (B.Des) — Interaction &amp; Digital Media
                </h3>
                <p className="font-mono-code text-xs text-[#8E8E93] print:text-gray-700">
                  National Institute of Design &amp; Technology • 2019 — 2023
                </p>
                <p className="text-xs text-[#8E8E93] mt-1 print:text-gray-600">
                  First Class Honors, Dean’s List. Specialization in Cognitive Ergonomics &amp; Micro-Haptics.
                </p>
              </div>

              <div>
                <h2 className="font-mono-code text-xs text-[#C5FF45] font-bold uppercase tracking-widest mb-3 print:text-black flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>HONORS &amp; RECOGNITION</span>
                </h2>
                <ul className="text-xs text-[#8E8E93] space-y-1.5 print:text-gray-800">
                  <li>🏆 <strong>Awwwards Site of the Day Nominee</strong> (2024)</li>
                  <li>🏆 <strong>Best UI Design Capstone Award</strong> (2023)</li>
                  <li>🏆 <strong>Behance Curated Showcase</strong> — Mobile Interaction Architecture</li>
                  <li>🏆 <strong>Dribbble Weekly Top Shot</strong> — Dark Mode Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
