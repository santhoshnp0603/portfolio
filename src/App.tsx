import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ToolsSection } from './components/ToolsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CaseStudyPage } from './pages/CaseStudyPage';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  // Initialize Lenis smooth scroll engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.20,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.80,
      touchMultiplier: 1.8,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Smooth reset to top on page route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // ScrollSpy to track active section
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'tools', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll animated section navigation
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Smooth back to top animation
  const handleBackToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#101010] text-[#F5F3EF] selection:bg-[#C5FF45] selection:text-[#101010]">
      {/* Custom Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Cinematic Awwwards Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Portfolio Experience */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Sticky Editorial Navigation */}
                <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

                {/* SECTION 01: HOME / HERO */}
                <HeroSection
                  onExploreWork={() => scrollToSection('projects')}
                  onContactClick={() => scrollToSection('contact')}
                />

                {/* SECTION 02: ABOUT ME */}
                <AboutSection />

                {/* SECTION 03: SELECTED PROJECTS */}
                <ProjectsSection />

                {/* SECTION 04: TOOLS I KNOW */}
                <ToolsSection />

                {/* SECTION 05: EXPERIENCE */}
                <ExperienceSection />

                {/* SECTION 06: CONTACT */}
                <ContactSection onOpenResume={() => setIsResumeOpen(true)} />

                {/* FOOTER */}
                <Footer onBackToTop={handleBackToTop} />
              </>
            }
          />
          {/* Individual case study pages */}
          <Route path="/projects/:slug" element={<CaseStudyPage />} />
        </Routes>

        {/* Interactive Resume CV Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </div>
  );
}

export default App;
