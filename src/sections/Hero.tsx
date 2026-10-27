import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Code2, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon } from '../components/Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#080808] bg-subtle-grid overflow-hidden"
    >
      {/* Cinematic Ambient Gold & Navy Lighting */}
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-[#D8B45A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#D8B45A]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#1B2744]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          {/* Left Column: Text & Actions (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal direction="up" distance={30} duration={0.7} delay={0.1} className="space-y-6">
            
            {/* Top Status & Location Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#262626] text-xs font-mono text-[#D8B45A] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[#F5F2EB] font-medium">{PROFILE.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-xs font-mono text-[#A7A29A]">
                <MapPin className="w-3.5 h-3.5 text-[#D8B45A]" />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            {/* Exact Content Required by User */}
            <div>
              {/* Small Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-[#D8B45A]/60" />
                <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D8B45A] uppercase font-semibold">
                  {PROFILE.heroGreeting}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#F5F2EB] mb-3 leading-[1.08]">
                {PROFILE.name}
              </h1>

              {/* Role */}
              <div className="text-lg sm:text-2xl font-mono text-[#D8B45A] font-semibold tracking-wide mb-4">
                {PROFILE.role}
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#A7A29A] leading-relaxed max-w-xl font-normal">
                {PROFILE.heroBio}
              </p>
            </div>

            {/* CTAs: Primary, Secondary, Additional */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] hover:from-[#E5C77A] hover:to-[#C9A246] active:scale-95 text-[#080808] font-bold text-xs sm:text-sm font-mono tracking-wider transition-all shadow-[0_0_20px_rgba(216,180,90,0.25)] hover:shadow-[0_0_30px_rgba(216,180,90,0.45)]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] active:scale-95 text-[#F5F2EB] font-semibold text-xs sm:text-sm font-mono tracking-wide border border-[#262626] hover:border-[#D8B45A]/50 transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-[#D8B45A]" />
                <span>Download Resume</span>
              </button>

              {/* Additional CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-[#A7A29A] hover:text-[#D8B45A] active:scale-95 text-xs sm:text-sm font-mono font-medium transition-colors"
              >
                <span>Let's Connect</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Social & Coding Profile Links */}
            <div className="pt-4 border-t border-[#1C1C1C] flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono text-[#736F67] uppercase tracking-wider">
                Profiles:
              </span>

              <div className="flex items-center gap-2.5">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/60 text-[#A7A29A] hover:text-[#F5F2EB] transition-all hover:scale-105 active:scale-95"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/60 text-[#A7A29A] hover:text-[#D8B45A] transition-all hover:scale-105 active:scale-95"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/60 text-[#A7A29A] hover:text-[#E5A93C] transition-all hover:scale-105 active:scale-95"
                  title="LeetCode (200+ Solved)"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121212] border border-[#222222] hover:border-[#D8B45A]/60 text-[#A7A29A] hover:text-emerald-400 transition-all hover:scale-105 active:scale-95"
                  title="CodeChef (500+ Solved)"
                  aria-label="CodeChef Profile"
                >
                  <CodeChefIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Quick Stat Pill */}
              <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#D8B45A] ml-auto">
                <Sparkles className="w-3.5 h-3.5" />
                <span>700+ DSA Problems Solved</span>
              </div>
            </div>

            </Reveal>
          </div>

          {/* Right Column: Real Profile Photo with Luxury Frame (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal direction="up" distance={30} duration={0.7} delay={0.25} className="w-full max-w-sm sm:max-w-md">
            <div className="relative w-full">
              
              {/* Subtle Ambient Backing Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D8B45A]/20 via-[#1A1A1A] to-transparent rounded-3xl blur-xl opacity-75" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-[#101010] border border-[#262626] hover:border-[#D8B45A]/40 p-3 sm:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all duration-500 group">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#1F1F1F]">
                  <img
                    src={PROFILE.profileImage}
                    alt="Sahil Patil — Java Developer and Software Developer"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03] ${
                      imageLoaded ? 'opacity-100 filter-none' : 'opacity-80 blur-sm'
                    }`}
                  />

                  {/* Gradient vignette along bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-transparent pointer-events-none" />

                  {/* Top-Left Floating Badge: CGPA */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-[#080808]/85 backdrop-blur-md border border-[#D8B45A]/30 text-xs font-mono text-[#F5F2EB] flex items-center gap-2 shadow-lg">
                    <GraduationCap className="w-4 h-4 text-[#D8B45A]" />
                    <span className="font-bold text-[#D8B45A]">8.02 CGPA</span>
                  </div>

                  {/* Bottom-Right Floating Badge: LeetCode & CodeChef */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#080808]/90 backdrop-blur-md border border-[#2A2A2A] text-xs font-mono text-[#F5F2EB] flex items-center gap-2 shadow-lg">
                    <Code2 className="w-4 h-4 text-[#D8B45A]" />
                    <span>200+ LeetCode • 100D</span>
                  </div>
                </div>

                {/* Card Footer Details */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs font-mono">
                  <div className="flex flex-col">
                    <span className="text-[#F5F2EB] font-bold">D. Y. Patil College of Engg.</span>
                    <span className="text-[#736F67]">B.Tech in CSE (2023–2027)</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#D8B45A]/10 text-[#D8B45A] font-semibold border border-[#D8B45A]/20">
                    Kolhapur
                  </span>
                </div>

              </div>

            </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
