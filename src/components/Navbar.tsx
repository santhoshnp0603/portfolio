import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'tools', label: 'Toolkit' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    soundFx.playClick();
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#101010]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleLinkClick('hero')}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#161616] border border-white/15 flex items-center justify-center font-display font-black text-sm text-[#C5FF45] group-hover:border-[#C5FF45] transition-colors duration-300 shadow-md">
              SK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-[#F5F3EF] group-hover:text-[#C5FF45] transition-colors duration-200">
                SANTHOSH KUMAR
              </span>
              <span className="font-mono-code text-[10px] text-[#8E8E93] tracking-wider uppercase">
                UI/UX DESIGNER • 2Y EXP
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#161616]/70 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono-code tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#101010] font-semibold bg-[#C5FF45]'
                      : 'text-[#8E8E93] hover:text-[#F5F3EF] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Let's Talk CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F3EF] text-[#101010] hover:bg-[#C5FF45] font-display font-bold text-xs tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(197,255,69,0.3)] cursor-pointer"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                soundFx.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Open navigation menu"
              className="md:hidden w-10 h-10 rounded-xl bg-[#161616] border border-white/10 flex items-center justify-center text-[#F5F3EF] hover:text-[#C5FF45] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0E0E0E]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 md:hidden">
          <div className="flex flex-col gap-2">
            <span className="font-mono-code text-[11px] text-[#8E8E93] mb-4 tracking-widest uppercase">
              // NAVIGATION DIRECTORY
            </span>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="flex items-center justify-between py-3 border-b border-white/10 text-left group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono-code text-xs text-[#C5FF45]">0{idx + 1}</span>
                  <span
                    className={`font-display text-2xl font-bold uppercase transition-colors ${
                      activeSection === link.id
                        ? 'text-[#C5FF45]'
                        : 'text-[#F5F3EF] group-hover:text-[#C5FF45]'
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#8E8E93] group-hover:text-[#C5FF45] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4 font-mono-code text-xs text-[#8E8E93]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5FF45] animate-pulse-subtle" />
              <span className="text-[#F5F3EF]">Open for opportunities</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <a
                href="mailto:hello@santhoshkumar.design"
                className="text-[#C5FF45] underline underline-offset-4"
              >
                hello@santhoshkumar.design
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
