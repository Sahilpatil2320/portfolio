import React, { useState } from 'react';
import { PROJECTS, PROJECT_FILTER_CATEGORIES } from '../data/projects';
import type { Project, ProjectFilterCategory } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Sparkles, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const primaryProjects = PROJECTS.filter(p => p.isPrimaryFeatured);
  const secondaryProjects = PROJECTS.filter(p => !p.isPrimaryFeatured);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.filterCategories.includes(activeFilter));

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 bg-[#080808] border-t border-[#1A1A1A] relative"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D8B45A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#162238]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A curated selection of software projects spanning AI recommendation systems, full-stack platforms, and mobile applications."
        />

        {/* Filter Pills */}
        <Reveal direction="up" distance={20} duration={0.6} delay={0.1}>
          <div className="flex items-center sm:justify-center gap-2 mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
            {PROJECT_FILTER_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 active:scale-95 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-[#D8B45A] to-[#B8933D] text-[#080808] font-bold shadow-[0_0_15px_rgba(216,180,90,0.3)]'
                    : 'bg-[#101010] text-[#A7A29A] hover:text-[#F5F2EB] border border-[#222222] hover:border-[#D8B45A]/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Layout */}
        {activeFilter === 'All' ? (
          <div className="space-y-16">
            
            {/* 1. Flagship Trio Section (Featured 01, 02, 03) */}
            <div>
              <Reveal direction="up" distance={24} duration={0.6} delay={0.1}>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#1C1C1C]">
                  <div className="w-8 h-8 rounded-xl bg-[#D8B45A]/10 border border-[#D8B45A]/30 flex items-center justify-center text-[#D8B45A]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#F5F2EB] tracking-wide">
                      FLAGSHIP PROJECTS // 01 – 03
                    </h3>
                    <p className="text-xs font-mono text-[#A7A29A]">
                      Primary projects featured on latest resume with core recommendation, full-stack, and mobile architecture
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {primaryProjects.map((project, idx) => (
                  <Reveal
                    key={project.id}
                    direction="up"
                    distance={30}
                    duration={0.65}
                    delay={0.15 + idx * 0.1}
                    className="h-full flex flex-col"
                  >
                    <ProjectCard
                      project={project}
                      isPrimary={true}
                      onOpenDetails={(p) => setSelectedProject(p)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 2. Additional Projects Section (Additional 04, 05, 06) */}
            <div>
              <Reveal direction="up" distance={24} duration={0.6} delay={0.1}>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#1C1C1C]">
                  <div className="w-8 h-8 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-[#A7A29A]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#F5F2EB] tracking-wide">
                      ADDITIONAL PROJECTS // 04 – 06
                    </h3>
                    <p className="text-xs font-mono text-[#A7A29A]">
                      Verified applications built with Python, Go WebSockets, and PHP/MySQL analytics
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {secondaryProjects.map((project, idx) => (
                  <Reveal
                    key={project.id}
                    direction="up"
                    distance={30}
                    duration={0.65}
                    delay={0.15 + idx * 0.1}
                    className="h-full flex flex-col"
                  >
                    <ProjectCard
                      project={project}
                      isPrimary={false}
                      onOpenDetails={(p) => setSelectedProject(p)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredProjects.map((project, idx) => (
              <Reveal
                key={project.id}
                direction="up"
                distance={30}
                duration={0.65}
                delay={0.1 + idx * 0.08}
                className="h-full flex flex-col"
              >
                <ProjectCard
                  project={project}
                  isPrimary={project.isPrimaryFeatured}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              </Reveal>
            ))}
          </div>
        )}

        {/* Modal for Details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
