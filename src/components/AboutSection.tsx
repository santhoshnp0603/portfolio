import React from 'react';
import {
  Compass,
  MapPin,
  Clock,
  Briefcase,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0E0E0E] bg-noise bg-grid-pattern text-[#F5F3EF] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#8E8E93] mb-6">
          <span className="text-[#C5FF45]">02 //</span>
          <span>ABOUT ME &amp; DESIGN ETHOS</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="mb-14 sm:mb-16 max-w-4xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#F5F3EF] leading-tight">
            BEHIND EVERY PIXEL, <br />
            <span className="text-[#C5FF45] font-normal italic">THERE&apos;S A PURPOSE.</span>
          </h2>
        </div>

        {/* Asymmetrical Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 Cols): Editorial Portrait Frame + Personal Details Grid */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Editorial Profile Frame */}
            <div className="relative group overflow-hidden rounded-2xl border border-white/15 bg-[#151515] p-2">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden bg-gradient-to-b from-[#1E1E1E] to-[#121212] flex items-center justify-center">
                {/* Stylized Modern Creative Portrait SVG */}
                <svg
                  viewBox="0 0 400 480"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a1a" />
                      <stop offset="100%" stopColor="#0d0d0d" />
                    </linearGradient>
                    <linearGradient id="limeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C5FF45" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C5FF45" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* Subtle Geometric Graphic Art */}
                  <rect width="400" height="480" fill="url(#bgGrad)" />
                  <circle cx="200" cy="180" r="140" fill="none" stroke="#262626" strokeWidth="1" />
                  <circle cx="200" cy="180" r="100" fill="none" stroke="#C5FF45" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 6" />
                  
                  {/* Stylized Minimalist Silhouette */}
                  <path
                    d="M 200 110 C 160 110 145 140 145 185 C 145 235 170 255 200 255 C 230 255 255 235 255 185 C 255 140 240 110 200 110 Z"
                    fill="#222"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {/* Shoulders */}
                  <path
                    d="M 120 380 C 120 290 150 270 200 270 C 250 270 280 290 280 380 Z"
                    fill="#181818"
                    stroke="#2a2a2a"
                    strokeWidth="2"
                  />
                  {/* Modern Designer Eyewear Accent */}
                  <rect x="165" y="165" width="28" height="18" rx="4" fill="none" stroke="#C5FF45" strokeWidth="3" />
                  <rect x="207" y="165" width="28" height="18" rx="4" fill="none" stroke="#C5FF45" strokeWidth="3" />
                  <line x1="193" y1="174" x2="207" y2="174" stroke="#C5FF45" strokeWidth="3" />

                  {/* Typography overlay */}
                  <text x="200" y="440" textAnchor="middle" fill="#8E8E93" fontFamily="JetBrains Mono" fontSize="12" letterSpacing="3">
                    SANTHOSH KUMAR // BORN TO CRAFT
                  </text>
                  <text x="200" y="458" textAnchor="middle" fill="#C5FF45" fontFamily="JetBrains Mono" fontSize="10">
                    28.6139° N, 77.2090° E • 2Y EXP
                  </text>
                </svg>

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 font-mono-code text-[10px] text-[#C5FF45] bg-[#101010]/80 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  PORTRAIT // ARCHIVE 2026
                </div>
                <div className="absolute bottom-3 right-3 font-mono-code text-[10px] text-[#8E8E93] bg-[#101010]/80 px-2.5 py-1 rounded-md border border-white/10">
                  CREATIVE TECHNOLOGIST
                </div>
              </div>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono-code text-xs">
              <div className="p-4 rounded-xl bg-[#151515] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#8E8E93] mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5FF45]" />
                  <span>BASED IN</span>
                </div>
                <span className="text-[#F5F3EF] font-bold text-sm">India</span>
                <span className="text-[10px] text-[#8E8E93]">New Delhi &amp; Bengaluru</span>
              </div>

              <div className="p-4 rounded-xl bg-[#151515] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#8E8E93] mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#C5FF45]" />
                  <span>ROLE &amp; EXP</span>
                </div>
                <span className="text-[#F5F3EF] font-bold text-sm">UI/UX Designer</span>
                <span className="text-[10px] text-[#C5FF45]">2 Years Experience</span>
              </div>

              <div className="p-4 rounded-xl bg-[#151515] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#8E8E93] mb-1">
                  <Compass className="w-3.5 h-3.5 text-[#C5FF45]" />
                  <span>FOCUS</span>
                </div>
                <span className="text-[#F5F3EF] font-bold text-sm">Product Design</span>
                <span className="text-[10px] text-[#8E8E93]">&amp; Digital Experiences</span>
              </div>

              <div className="p-4 rounded-xl bg-[#151515] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-1.5 text-[#8E8E93] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5FF45]" />
                  <span>AVAILABILITY</span>
                </div>
                <span className="text-[#C5FF45] font-bold text-sm">Open to Opportunities</span>
                <span className="text-[10px] text-[#8E8E93]">Full-Time &amp; High-Growth Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Pure Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-base sm:text-lg lg:text-xl text-[#8E8E93] font-sans-main leading-relaxed">
            <p>
              Over the past 2 years of intensive product design, I have focused on the nexus of{' '}
              <strong className="text-[#F5F3EF] font-semibold">user behavioral psychology</strong>,{' '}
              <strong className="text-[#F5F3EF] font-semibold">systemic component architecture</strong>, and{' '}
              <strong className="text-[#F5F3EF] font-semibold">modern front-end implementation</strong>. I craft software that feels instantly intuitive, aesthetically striking, and engineered for high commercial utility.
            </p>

            <p>
              Combining deep design craft in Figma and Framer with modern web standards, I bridge the critical gap between product ideas, clean design tokens, and production-ready code.
            </p>

            <p>
              My approach centers on stripping away friction, bringing mathematical precision to typographic hierarchy, and ensuring every micro-interaction gives tactile confirmation to the user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
