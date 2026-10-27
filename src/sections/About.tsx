import React from 'react';
import { PROFILE } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch text-left">
          
          {/* Left Column: Authentic Biography & Story (Spans 6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/30 p-7 sm:p-9 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition-all duration-300">
            <div className="space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#D8B45A]/25 text-xs font-mono text-[#D8B45A]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Computer Science &amp; Engineering</span>
              </div>

              {/* Exact Text from User Request */}
              <div className="space-y-4 text-sm sm:text-base text-[#F5F2EB] leading-relaxed font-sans">
                <p className="border-l-2 border-[#D8B45A] pl-4 text-[#F5F2EB] font-medium leading-relaxed bg-[#141414]/50 py-1.5 rounded-r-xl">
                  "{PROFILE.introStory}"
                </p>

                <p className="text-[#A7A29A] leading-relaxed">
                  {PROFILE.aboutStory}
                </p>
              </div>

              {/* Education Summary Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-[#222222] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A]">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education Summary</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D8B45A]/10 text-[#D8B45A] font-mono font-bold text-xs border border-[#D8B45A]/20">
                    CGPA: 8.02
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#F5F2EB]">
                  D. Y. Patil College of Engineering and Technology, Kolhapur
                </h4>
                <p className="text-xs font-mono text-[#A7A29A]">
                  B.Tech in Computer Science and Engineering • 2023–2027
                </p>
              </div>

            </div>

            {/* Bottom Actions: Resume Download Button */}
            <div className="pt-6 mt-6 border-t border-[#1C1C1C] flex flex-wrap items-center gap-3">
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

          {/* Right Column: 4 Editorial Pillar Cards (Spans 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PROFILE.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(216,180,90,0.1)] flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-[#161616] border border-[#2A2A2A] group-hover:border-[#D8B45A]/50 text-[#D8B45A] mb-4 transition-colors">
                    {idx === 0 && <Code2 className="w-5 h-5" />}
                    {idx === 1 && <Layers className="w-5 h-5" />}
                    {idx === 2 && <Terminal className="w-5 h-5" />}
                    {idx === 3 && <Cpu className="w-5 h-5" />}
                  </div>

                  <h3 className="text-base font-bold text-[#F5F2EB] mb-2 group-hover:text-[#D8B45A] transition-colors font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A7A29A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#1C1C1C] flex items-center justify-between text-[11px] font-mono text-[#736F67]">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-[#D8B45A]/70">Verified Skill</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Editorial Metrics Banner */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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

      </div>
    </section>
  );
};
