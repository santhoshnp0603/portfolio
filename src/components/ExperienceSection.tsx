import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  shortDesc: string;
  responsibilities: string[];
  skills: string[];
}

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  const timelineData: ExperienceItem[] = [
    {
      id: 'exp-1',
      type: 'work',
      role: 'UI/UX & Product Designer',
      company: 'HyperScale Systems',
      period: '2024 — Present',
      location: 'Bengaluru, India (Hybrid)',
      isCurrent: true,
      shortDesc:
        'Spearheading core UI/UX design, interactive SaaS dashboards, and multi-brand design system governance for high-growth tech platforms.',
      responsibilities: [
        'Architected an atomic Figma token system covering 160+ components, accelerating sprint delivery velocity by 2.8x.',
        'Redesigned core telemetry and analytics screens, driving an average 24% increase in user task completion speed.',
        'Collaborated closely with front-end engineers to implement pixel-perfect Tailwind CSS components and motion curves.',
        'Organized weekly usability feedback sessions and synthetic cognitive walkthroughs with active beta users.',
      ],
      skills: ['Design Systems', 'Figma Tokens', 'SaaS Dashboards', 'User Testing', 'Micro-interactions'],
    },
    {
      id: 'exp-2',
      type: 'work',
      role: 'Associate UI/UX & Interaction Designer',
      company: 'Kinetic Digital Global',
      period: '2023 — 2024',
      location: 'Remote / India',
      shortDesc:
        'Crafted user-centric mobile applications, responsive web interfaces, and fluid micro-interaction specifications for international client projects.',
      responsibilities: [
        'Designed end-to-end user flows for 6 mobile apps (iOS & Android) across healthcare, edtech, and modern fintech.',
        'Created interactive high-fidelity prototypes in Framer and Figma, securing client stakeholder sign-offs in initial reviews.',
        'Audited interface accessibility against WCAG 2.1 AA standards across contrast, tap target sizing, and keyboard navigation.',
      ],
      skills: ['Mobile App Design', 'Framer Prototyping', 'WCAG Accessibility', 'Wireframing', 'User Flows'],
    },
    {
      id: 'exp-3',
      type: 'work',
      role: 'UI/UX Design Intern & Freelance Designer',
      company: 'Studio Mono & Global Founders',
      period: '2022 — 2023',
      location: 'India & Remote',
      shortDesc:
        'Delivered brand guidelines, responsive landing page designs, and rapid MVP wireframes for early-stage startup ventures.',
      responsibilities: [
        'Designed high-converting landing pages and Webflow prototypes with custom CSS and smooth scroll animations.',
        'Conducted competitor UI benchmark studies and user interview syntheses for 4 0-to-1 startup incubations.',
        'Established component style guides, icon libraries, and visual hierarchy standards for web products.',
      ],
      skills: ['Landing Page Design', 'Webflow', 'Visual Hierarchy', 'Rapid Prototyping', 'User Research'],
    },
    {
      id: 'exp-4',
      type: 'education',
      role: 'Bachelor of Design (B.Des) in Interaction & Digital Media',
      company: 'National Institute of Design & Technology',
      period: '2019 — 2023',
      location: 'India',
      shortDesc:
        'Four-year comprehensive design degree focusing on cognitive psychology, user experience architecture, spatial ergonomics, and visual design.',
      responsibilities: [
        'Graduated with First Class Honors and Academic Excellence Award in Interaction Design.',
        'Completed capstone research project on "Micro-Interactions and Cognitive Load in Mobile Financial Apps".',
        'Led student design workshops on design thinking, typography, and interactive prototyping.',
      ],
      skills: ['Interaction Design', 'Cognitive Psychology', 'Information Architecture', 'Design Thinking'],
    },
  ];

  const toggleExpand = (id: string) => {
    soundFx.playClick();
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-36 bg-[#101010] bg-noise bg-grid-pattern text-[#F5F3EF] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93] mb-4">
            <span className="text-[#C5FF45]">05 //</span>
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-[#F5F3EF]">
            MY JOURNEY SO FAR
          </h2>
          <p className="font-sans-main text-base sm:text-lg text-[#8E8E93] max-w-xl mt-3">
            A chronological timeline of roles, milestones, and high-impact design leadership.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-10">
          {timelineData.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    item.isCurrent
                      ? 'bg-[#C5FF45] border-[#C5FF45] shadow-[0_0_15px_#C5FF45]'
                      : 'bg-[#101010] border-white/40 group-hover:border-[#C5FF45]'
                  }`}
                >
                  {item.isCurrent && (
                    <span className="absolute -inset-1 rounded-full bg-[#C5FF45]/30 animate-ping" />
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={`p-6 sm:p-8 rounded-2xl bg-[#141414] border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'border-[#C5FF45]/50 shadow-[0_0_30px_rgba(197,255,69,0.08)] bg-[#171717]'
                      : 'border-white/10 hover:border-white/30 hover:bg-[#161616]'
                  }`}
                >
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {item.type === 'education' ? (
                          <GraduationCap className="w-4 h-4 text-[#C5FF45]" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-[#C5FF45]" />
                        )}
                        <span className="font-mono-code text-xs text-[#C5FF45] font-semibold">
                          {item.company}
                        </span>
                        {item.isCurrent && (
                          <span className="text-[10px] font-mono-code bg-[#C5FF45] text-[#101010] px-2 py-0.5 rounded-full font-bold">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F3EF] group-hover:text-[#C5FF45] transition-colors">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#202020] flex items-center justify-center text-[#8E8E93] group-hover:text-[#C5FF45] transition-colors">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Short Summary */}
                  <p className="font-sans-main text-sm sm:text-base text-[#8E8E93] leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Expandable Key Responsibilities */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-white/10 space-y-4"
                    >
                      <span className="font-mono-code text-xs text-[#C5FF45] block font-semibold uppercase">
                        // KEY RESPONSIBILITIES &amp; DELIVERABLES
                      </span>
                      <ul className="space-y-2.5">
                        {item.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F3EF]">
                            <CheckCircle2 className="w-4 h-4 text-[#C5FF45] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Chips */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-[#202020] border border-white/10 font-mono-code text-[11px] text-[#8E8E93]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
