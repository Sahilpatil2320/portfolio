import React, { useState, useEffect } from 'react';
import { PROFILE } from '../data/profile';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 ${
        isScrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-5'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border border-[#D8B45A]/20 shadow-[0_8px_30px_rgba(0,0,0,0.85)]'
            : 'bg-[#101010]/70 backdrop-blur-sm border border-[#1F1F1F]'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with SP Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D8B45A] rounded-xl p-1 transition-transform active:scale-95"
            aria-label="Sahil Patil — Return to top"
            onClick={closeMobileMenu}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#101010] border border-[#D8B45A]/40 group-hover:border-[#D8B45A] flex items-center justify-center text-[#D8B45A] font-display font-bold text-sm shadow-[0_0_12px_rgba(216,180,90,0.15)] group-hover:shadow-[0_0_16px_rgba(216,180,90,0.3)] transition-all">
              SP
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-[#F5F2EB] text-sm sm:text-base tracking-wide group-hover:text-[#D8B45A] transition-colors">
                {PROFILE.name}
              </span>
              <span className="text-[10px] font-mono text-[#A7A29A] tracking-wider uppercase">
                Java Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? 'text-[#D8B45A] bg-[#D8B45A]/10 font-bold border border-[#D8B45A]/30 shadow-[0_0_10px_rgba(216,180,90,0.12)]'
                      : 'text-[#A7A29A] hover:text-[#F5F2EB] hover:bg-[#161616]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Resume Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] hover:from-[#E5C77A] hover:to-[#C9A246] active:scale-95 text-[#080808] text-xs font-bold font-mono tracking-wider transition-all shadow-[0_0_18px_rgba(216,180,90,0.25)] hover:shadow-[0_0_24px_rgba(216,180,90,0.4)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Right Controls: Resume quick link + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D8B45A]/15 border border-[#D8B45A]/40 text-[#D8B45A] text-xs font-mono font-medium"
            >
              <Download className="w-3 h-3" />
              <span>CV</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141414] border border-[#222222] text-[#F5F2EB] hover:border-[#D8B45A]/40 transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D8B45A]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D8B45A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#101010] border border-[#222222] shadow-[0_12px_40px_rgba(0,0,0,0.9)] animate-in slide-in-from-top-2 text-left">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`px-3 py-2.5 rounded-lg text-sm font-mono tracking-wide transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#D8B45A] bg-[#D8B45A]/10 font-bold border border-[#D8B45A]/30'
                        : 'text-[#A7A29A] hover:text-[#F5F2EB] hover:bg-[#161616]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#1C1C1C] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    onOpenResumeModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] text-xs font-bold font-mono tracking-wider shadow-[0_0_15px_rgba(216,180,90,0.25)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / View Resume</span>
                </button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};
