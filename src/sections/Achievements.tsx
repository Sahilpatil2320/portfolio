import React from 'react';
import { ACHIEVEMENTS } from '../data/achievements';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLink, Award, GitPullRequest, Flame } from 'lucide-react';
import { LeetCodeIcon, CodeChefIcon } from '../components/Icons';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (platform: string, id: string) => {
    if (id === 'open-source') {
      return <GitPullRequest className="w-5 h-5 text-[#D8B45A]" />;
    }
    if (platform === 'CodeChef') {
      return <CodeChefIcon className="w-5 h-5 text-emerald-400" />;
    }
    if (id === 'leetcode-badge') {
      return <Award className="w-5 h-5 text-[#D8B45A]" />;
    }
    return <LeetCodeIcon className="w-5 h-5 text-[#E5A93C]" />;
  };

  return (
    <section 
      id="achievements" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-72 bg-[#D8B45A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="Milestones"
          title="Achievements &amp; Problem Solving"
          description="Competitive programming statistics, daily algorithmic problem solving, and open-source contributions."
        />

        {/* Global Statistics Banner */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-[#101010] border border-[#D8B45A]/25 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D8B45A]/10 border border-[#D8B45A]/30 flex items-center justify-center text-[#D8B45A] flex-shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#F5F2EB]">
                700+ Total Problems Solved
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#A7A29A] mt-0.5">
                Combined problem solving across LeetCode &amp; CodeChef demonstrating continuous algorithmic discipline
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <span className="px-3 py-1.5 rounded-xl bg-[#161616] border border-[#262626] text-xs font-mono text-[#D8B45A] font-semibold">
              Daily Active
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#161616] border border-[#262626] text-xs font-mono text-[#F5F2EB]">
              100 Days Badge
            </span>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#101010] border border-[#222222] hover:border-[#D8B45A]/40 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_35px_rgba(216,180,90,0.12)] flex flex-col justify-between group"
            >
              <div>
                {/* Metric pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#161616] border border-[#262626] group-hover:scale-105 transition-transform">
                    {getAchievementIcon(item.platform, item.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#D8B45A]/10 text-[#D8B45A] border border-[#D8B45A]/25">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-[#F5F2EB] mb-1 group-hover:text-[#D8B45A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-[#D8B45A]/80 mb-3 font-medium">
                  {item.subtitle}
                </p>

                <p className="text-xs text-[#A7A29A] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#1C1C1C] text-xs font-mono font-medium text-[#A7A29A] hover:text-[#D8B45A] transition-colors"
                >
                  <span>{item.linkLabel || 'Verify Profile'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8B45A]" />
                </a>
              ) : (
                <div className="pt-4 border-t border-[#1C1C1C] text-[11px] font-mono text-[#736F67]">
                  <span>Verified Credential</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
