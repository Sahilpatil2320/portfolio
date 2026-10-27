import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { SkillGroup } from '../components/SkillGroup';
import { SectionHeading } from '../components/SectionHeading';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Programming Languages',
    'Web and Backend',
    'Databases',
    'Core Concepts',
    'Tools and Platforms',
    'Currently Learning'
  ];

  const displayedCategories = selectedFilter === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.category === selectedFilter);

  return (
    <section 
      id="skills" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="Capabilities"
          title="Skills &amp; Technologies"
          description="Languages, frameworks, databases, and development tools organized by technical domain."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 active:scale-95 ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] font-bold shadow-[0_0_15px_rgba(216,180,90,0.3)]'
                  : 'bg-[#101010] text-[#A7A29A] hover:text-[#F5F2EB] border border-[#222222] hover:border-[#D8B45A]/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {displayedCategories.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>

      </div>
    </section>
  );
};
