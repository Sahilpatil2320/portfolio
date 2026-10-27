import React from 'react';
import { EDUCATION } from '../data/education';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="Academics"
          title="Education"
          description="Formal academic qualifications in Computer Science &amp; Engineering."
        />

        {/* Education Timeline */}
        <div className="space-y-6 text-left">
          {EDUCATION.map((item, idx) => (
            <Reveal
              key={item.id}
              direction="up"
              distance={28}
              duration={0.65}
              delay={0.1 + idx * 0.15}
            >
              <div
                className="relative p-6 sm:p-8 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_35px_rgba(216,180,90,0.1)] group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#D8B45A] font-semibold">
                      <GraduationCap className="w-4 h-4" />
                      <span>Entry 0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F5F2EB] group-hover:text-[#D8B45A] transition-colors">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-[#D8B45A] font-mono">
                      {item.degree} — {item.field}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 self-start">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#D8B45A]/10 text-[#D8B45A] text-xs font-mono font-bold border border-[#D8B45A]/25">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.scoreLabel}: {item.scoreValue}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#141414] text-[#A7A29A] text-xs font-mono border border-[#242424]">
                      <Calendar className="w-3.5 h-3.5 text-[#D8B45A]" />
                      <span>{item.period}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#A7A29A] font-mono mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#D8B45A]" />
                  <span>{item.location}</span>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] text-xs sm:text-sm text-[#A7A29A] space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <p key={i} className="flex items-start gap-2.5">
                      <span className="text-[#D8B45A] font-mono font-bold">›</span>
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
