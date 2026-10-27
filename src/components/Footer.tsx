import React from 'react';
import { PROFILE } from '../data/profile';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  return (
    <footer className="py-14 bg-[#080808] border-t border-[#1C1C1C] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Wordmark & Section Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1A1A1A] items-start">
          
          {/* Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E1E1E] to-[#121212] border border-[#D8B45A]/40 flex items-center justify-center text-[#D8B45A] font-display font-bold text-sm shadow-[0_0_12px_rgba(216,180,90,0.15)]">
                SP
              </div>
              <span className="font-display font-extrabold text-[#F5F2EB] text-xl tracking-wide">
                {PROFILE.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-[#D8B45A] font-medium">
              {PROFILE.role}
            </p>

            <p className="text-xs text-[#A7A29A] leading-relaxed max-w-sm">
              Computer Science &amp; Engineering student at D. Y. Patil College of Engineering and Technology, Kolhapur. Focused on Java, practical systems, and algorithmic problem solving.
            </p>
          </div>

          {/* Section Navigation (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8B45A] mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#A7A29A] hover:text-[#D8B45A] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8B45A]">
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/50 text-[#A7A29A] hover:text-[#F5F2EB] active:scale-95 transition-all"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/50 text-[#A7A29A] hover:text-[#D8B45A] active:scale-95 transition-all"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/50 text-[#A7A29A] hover:text-[#D8B45A] active:scale-95 transition-all"
                title="Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/50 text-[#A7A29A] hover:text-[#E5A93C] active:scale-95 transition-all"
                title="LeetCode"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/50 text-[#A7A29A] hover:text-emerald-400 active:scale-95 transition-all"
                title="CodeChef"
                aria-label="CodeChef Profile"
              >
                <CodeChefIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/40 text-[#A7A29A] hover:text-[#F5F2EB] text-xs font-mono transition-all self-start mt-2"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D8B45A]" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Tier: Minimal Copyright Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736F67] font-mono gap-3 text-center sm:text-left">
          <p>
            &copy; {currentYear} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-[#A7A29A]/60">
            Crafted for Software Engineering &amp; Java Development
          </p>
        </div>

      </div>
    </footer>
  );
};
