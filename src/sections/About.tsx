import React from 'react';
import { PROFILE } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { 
  Code2, 
  Layers, 
  Terminal, 
  Cpu, 
  GraduationCap, 
  Download, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutProps {
  onOpenResumeModal?: () => void;
}

const HIGHLIGHT_CARDS = [
  {
    title: "Core Java & OOP",
    desc: "Strong foundation in Java programming, object-oriented concepts, and clean software architecture.",
    pillar: "Pillar 01",
    tags: ["Core Java", "OOP Design", "Architecture"],
    icon: Code2
  },
  {
    title: "Full-Stack Development",
    desc: "Building dynamic web interfaces and backend services with React.js, Node.js, Express, and REST APIs.",
    pillar: "Pillar 02",
    tags: ["React.js", "Node.js", "Express", "REST APIs"],
    icon: Layers
  },
  {
    title: "700+ DSA Problems",
    desc: "Solved 200+ problems on LeetCode with 100 Days Badge and 500+ problems on CodeChef.",
    pillar: "Pillar 03",
    tags: ["LeetCode 200+", "100D Badge", "CodeChef 500+"],
    icon: Terminal
  },
  {
    title: "AI & Smart Algorithms",
    desc: "Developed recommendation engine utilizing Python, TF-IDF vectorization, and Cosine Similarity.",
    pillar: "Pillar 04",
    tags: ["Python", "TF-IDF", "Cosine Similarity"],
    icon: Cpu
  }
];

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#D8B45A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="Biography"
          title="About Me"
          description="A genuine look into my background, engineering education, and technical problem-solving focus."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch text-left">
          
          {/* Left Column: Compact Authentic Biography (Spans 5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal direction="up" distance={30} duration={0.65} delay={0.1} className="h-full flex flex-col">
              <div className="rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/30 p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-300 h-full">
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#D8B45A]/25 text-xs font-mono text-[#D8B45A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Computer Science &amp; Engineering</span>
              </div>

              {/* Exact Quote from Third Image */}
              <div className="text-sm sm:text-base text-[#F5F2EB] leading-relaxed font-sans">
                <p className="border-l-2 border-[#D8B45A] pl-4 text-[#F5F2EB] font-medium leading-relaxed bg-[#141414]/60 py-2.5 rounded-r-xl">
                  "{PROFILE.introStory}"
                </p>
              </div>

              {/* Education Summary Card from Fourth Image */}
              <div className="p-4 rounded-2xl bg-[#141414] border border-[#222222] space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A]">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education Summary</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D8B45A]/10 text-[#D8B45A] font-mono font-bold text-xs border border-[#D8B45A]/20">
                    CGPA: 8.02
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#F5F2EB]">
                  D. Y. Patil College of Engineering and Technology, Kolhapur
                </h4>
                <p className="text-xs font-mono text-[#A7A29A]">
                  B.Tech in Computer Science and Engineering • 2023–2027
                </p>
              </div>

            </div>

            {/* Bottom Actions: Resume Download & Contact */}
            <div className="pt-5 mt-5 border-t border-[#1C1C1C] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D8B45A] to-[#B8933D] hover:from-[#E5C77A] hover:to-[#C9A246] active:scale-95 text-[#080808] font-bold text-xs sm:text-sm font-mono tracking-wider transition-all shadow-[0_0_15px_rgba(216,180,90,0.2)]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono text-[#A7A29A] hover:text-[#D8B45A] transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Balanced Cards Proportional with Left Side (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHT_CARDS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={idx}
                  direction="up"
                  distance={28}
                  duration={0.6}
                  delay={0.15 + idx * 0.08}
                  className="h-full flex flex-col"
                >
                  <div className="p-5 sm:p-5 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(216,180,90,0.1)] flex flex-col justify-between group h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 w-fit rounded-2xl bg-[#161616] border border-[#2A2A2A] group-hover:border-[#D8B45A]/50 text-[#D8B45A] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono text-[#736F67]">{item.pillar}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-[#F5F2EB] mb-1.5 group-hover:text-[#D8B45A] transition-colors font-display">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#A7A29A] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Key Tech Tag Pills Eliminating Empty Space */}
                    <div className="pt-3 mt-3 border-t border-[#1C1C1C] flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-[#161616] border border-[#262626] text-[10px] sm:text-[11px] font-mono text-[#D8B45A]/90 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Editorial Metrics Banner */}
        <Reveal direction="up" distance={25} duration={0.65} delay={0.2} className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#101010] border border-[#1F1F1F]">
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8B45A]">8.02</div>
              <div className="text-xs font-mono text-[#A7A29A] mt-1">B.Tech CGPA</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#101010] border border-[#1F1F1F]">
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8B45A]">200+</div>
              <div className="text-xs font-mono text-[#A7A29A] mt-1">LeetCode Solved</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#101010] border border-[#1F1F1F]">
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8B45A]">500+</div>
              <div className="text-xs font-mono text-[#A7A29A] mt-1">CodeChef Solved</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#101010] border border-[#1F1F1F]">
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#D8B45A]">2023–2027</div>
              <div className="text-xs font-mono text-[#A7A29A] mt-1">Academic Period</div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
