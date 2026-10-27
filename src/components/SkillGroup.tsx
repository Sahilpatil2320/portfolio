import React from 'react';
import type { SkillCategoryGroup } from '../data/skills';
import { 
  Code2, 
  Globe, 
  Database, 
  Binary, 
  Wrench, 
  Sparkles 
} from 'lucide-react';

interface SkillGroupProps {
  group: SkillCategoryGroup;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-5 h-5 text-[#D8B45A]" />;
      case 'web-backend':
        return <Globe className="w-5 h-5 text-[#D8B45A]" />;
      case 'databases':
        return <Database className="w-5 h-5 text-[#D8B45A]" />;
      case 'core-concepts':
        return <Binary className="w-5 h-5 text-[#D8B45A]" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-[#D8B45A]" />;
      case 'currently-learning':
        return <Sparkles className="w-5 h-5 text-[#D8B45A]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#D8B45A]" />;
    }
  };

  const isLearning = group.isLearningGroup;

  return (
    <div
      className={`p-6 sm:p-7 rounded-3xl bg-[#101010] border transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_35px_rgba(216,180,90,0.12)] hover:-translate-y-1 active:scale-[0.99] flex flex-col justify-between ${
        isLearning
          ? 'border-[#D8B45A]/35 hover:border-[#D8B45A]'
          : 'border-[#222222] hover:border-[#D8B45A]/40'
      }`}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-[#1C1C1C]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#161616] border border-[#262626]">
              {getGroupIcon(group.id)}
            </div>
            <h3 className="text-base font-bold text-[#F5F2EB] font-display">
              {group.category}
            </h3>
          </div>

          {isLearning ? (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#D8B45A]/15 text-[#D8B45A] border border-[#D8B45A]/30">
              In Progress
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#A7A29A] bg-[#161616] border border-[#222222]">
              {group.skills.length} skills
            </span>
          )}
        </div>

        {/* Category Subtitle */}
        <p className="text-xs text-[#A7A29A] mb-5 leading-relaxed">
          {group.description}
        </p>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 select-none cursor-default ${
                skill.isLearning
                  ? 'bg-[#181818] text-[#E5C77A] border border-[#D8B45A]/30 hover:border-[#D8B45A] hover:bg-[#D8B45A]/10'
                  : 'bg-[#141414] text-[#F5F2EB] border border-[#262626] hover:border-[#D8B45A]/50 hover:text-[#D8B45A] hover:bg-[#1A1A1A]'
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
